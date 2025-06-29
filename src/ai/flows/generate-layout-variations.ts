// src/ai/flows/generate-layout-variations.ts
'use server';

/**
 * @fileOverview Generates alternative layout suggestions for the portfolio.
 *
 * - generateLayoutVariations - A function that generates layout variations for the portfolio.
 * - GenerateLayoutVariationsInput - The input type for the generateLayoutVariations function.
 * - GenerateLayoutVariationsOutput - The return type for the generateLayoutVariations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLayoutVariationsInputSchema = z.object({
  initialLayoutDescription: z
    .string()
    .describe('A description of the initial portfolio layout, including its structure, components, and styling.'),
  contentDetails: z
    .string()
    .describe('Details about the content to be displayed in the portfolio, such as the type and amount of text, images, and other media.'),
  deviceType: z
    .string()
    .describe('The type of device the portfolio will be viewed on (e.g., desktop, mobile, tablet).'),
  userInteraction: z
    .string()
    .describe('A description of the expected user interactions with the portfolio (e.g., scrolling, clicking, form submissions).'),
});
export type GenerateLayoutVariationsInput = z.infer<typeof GenerateLayoutVariationsInputSchema>;

const GenerateLayoutVariationsOutputSchema = z.object({
  layoutSuggestions: z
    .array(z.string())
    .describe('An array of suggested alternative layouts for the portfolio, each described in detail.'),
  rationale: z
    .string()
    .describe('A rationale for why each layout suggestion is appropriate, considering the input parameters.'),
});
export type GenerateLayoutVariationsOutput = z.infer<typeof GenerateLayoutVariationsOutputSchema>;

export async function generateLayoutVariations(
  input: GenerateLayoutVariationsInput
): Promise<GenerateLayoutVariationsOutput> {
  return generateLayoutVariationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLayoutVariationsPrompt',
  input: {schema: GenerateLayoutVariationsInputSchema},
  output: {schema: GenerateLayoutVariationsOutputSchema},
  prompt: `You are an expert web designer specializing in creating responsive and visually engaging portfolio websites.

You will generate alternative layout suggestions for a portfolio website based on the initial design choices, content, device type, and user interactions.

Consider the following information:

Initial Layout Description: {{{initialLayoutDescription}}}
Content Details: {{{contentDetails}}}
Device Type: {{{deviceType}}}
User Interaction: {{{userInteraction}}}

Provide at least three distinct layout suggestions, each described in detail, and explain why each suggestion is appropriate given the input parameters.

Format your response as a JSON object with 'layoutSuggestions' (an array of layout descriptions) and 'rationale' (a string explaining the reasoning behind the suggestions).
`,
});

const generateLayoutVariationsFlow = ai.defineFlow(
  {
    name: 'generateLayoutVariationsFlow',
    inputSchema: GenerateLayoutVariationsInputSchema,
    outputSchema: GenerateLayoutVariationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
