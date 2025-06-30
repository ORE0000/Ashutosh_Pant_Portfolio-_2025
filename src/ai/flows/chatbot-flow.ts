'use server';
/**
 * @fileOverview A chatbot flow that answers questions about Ashutosh Pant.
 *
 * - askChatbot - A function that handles chatbot queries.
 * - ChatbotInput - The input type for the askChatbot function.
 * - ChatbotOutput - The return type for the askChatbot function.
 */

import {ai} from '@/ai/genkit';
import {Bio} from '@/data/constants';
import {z} from 'genkit';

const ChatbotInputSchema = z.object({
  query: z.string().describe("The user's question about Ashutosh Pant."),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

export type ChatbotOutput = string;

/**
 * A non-AI fallback function to answer questions from the hardcoded Bio data.
 * This is used when a GenAI API key is not available.
 * @param query The user's question.
 * @returns A string response based on simple keyword matching.
 */
function getAnswerFromBio(query: string): string {
    const q = query.toLowerCase();

    if (q.includes('who is') || q.includes('about ashutosh') || q.includes('describe him') || q.includes('who is ashutosh pant')) {
        return Bio.description;
    }

    if (q.includes('skill')) {
        const skillSummary = Bio.skills.map(category => {
            const skillNames = category.skills.map(skill => skill.name).join(', ');
            return `• ${category.title}: ${skillNames}`;
        }).join('\n');
        return `Ashutosh has a diverse skill set across different domains. Here's a summary:\n\n${skillSummary}\n\nYou can find more details in the Skills section.`;
    }

    if (q.includes('project') || q.includes('visual')) {
        const dataProjects = Bio.projects.filter(p => p.category === 'data analyst').map(p => p.title).join(', ');
        return `Ashutosh's key projects focus on data analysis, including: ${dataProjects}. You can explore these in detail in the Projects section and see the interactive dashboards on the Visuals page.`;
    }

    if (q.includes('experience') || q.includes('journey')) {
        const experienceSummary = Bio.experience.map(exp => `• ${exp.role} at ${exp.company}`).join('\n');
        return `Here is a summary of Ashutosh's work experience:\n\n${experienceSummary}\n\nFor more details, please visit the Experience section.`;
    }
    
    if (q.includes('education')) {
        const educationSummary = Bio.education.map(edu => `• ${edu.degree} from ${edu.school}`).join('\n');
        return `Here is Ashutosh's educational background:\n\n${educationSummary}\n\nMore information is available in the Education section.`;
    }
    
    if (q.includes('contact') || q.includes('connect')) {
        return `You can connect with Ashutosh on LinkedIn (${Bio.linkedin}) or check out his work on GitHub (${Bio.github}). You can also send him a message using the contact form on this site.`;
    }

    if (q.includes('resume')) {
        return `You can view or download Ashutosh's resume here: ${Bio.resume}`;
    }
    
    if (q.includes('inspiration')) {
        return "Ashutosh is driven by a passion for creating innovative solutions and a love for continuous learning in the ever-evolving world of technology.";
    }

    if (q.includes('what sets him apart')) {
        return "Ashutosh stands out due to his versatile skill set, spanning from full-stack development to data analysis, combined with a strong dedication to delivering high-quality, user-centric products. He is always eager to tackle new challenges and has a growth mindset.";
    }

    if (q.includes('long-term career goals') || q.includes('aspirations')) {
        return "Ashutosh is a passionate data analyst. His career is focused on leveraging data to drive business decisions through insightful visualization, statistical analysis, and machine learning. He aims to help organizations make smarter, data-informed choices.";
    }

    if (q.includes('what is this portfolio about')) {
        return "This portfolio showcases Ashutosh Pant's expertise as a data analyst. It highlights his skills in data visualization, market analysis, and transforming complex data into actionable insights. You'll find detailed case studies of his projects in the Visuals section.";
    }

    // A more generic fallback.
    return "I'm sorry, I can only answer specific questions about Ashutosh's portfolio. Try asking about his skills, experience, projects, education, or how to contact him.";
}


export async function askChatbot(input: ChatbotInput): Promise<ChatbotOutput> {
  // If no API key is available, use the non-AI fallback.
  // This allows the chatbot to function without needing a GenAI provider.
  if (!process.env.GOOGLE_API_KEY) {
    return getAnswerFromBio(input.query);
  }
  // If an API key is found, use the Genkit flow.
  return chatbotFlow(input);
}

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: z.string(),
  },
  async ({query}) => {
    // Stringify the Bio object to pass it as context.
    // We'll remove image data as it's not useful for a text-based model.
    const bioContext = JSON.stringify(Bio, (key, value) => {
        if (key === 'image' || key === 'img') {
            return undefined;
        }
        return value;
    });

    const prompt = `You are a helpful and friendly AI assistant for Ashutosh Pant's portfolio website.
Your goal is to answer questions about Ashutosh's skills, experience, projects, education, and career, with a focus on his data analysis work.
You MUST use ONLY the information provided in the following JSON data to answer the user's questions.
Do not make up any information. If the answer is not in the provided data, say that you don't have that information.
Keep your answers concise, professional, and friendly. When asked about projects, direct users to the 'Visuals' page.

Here is the information about Ashutosh Pant:
${bioContext}

User's question: "${query}"
`;

    const {output} = await ai.generate({
    prompt: prompt,
    });
    
    return output || "I'm sorry, I couldn't generate a response. Please try again.";
  }
);
