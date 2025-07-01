"use client";

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Bot, Send, User, X, Info, Lightbulb, Briefcase, Code, Loader2, AlertTriangle, Home } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { askChatbot } from '@/ai/flows/chatbot-flow';
import { AnimatePresence, motion } from 'framer-motion';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Bio } from '@/data/constants';

type Message = {
    sender: 'user' | 'ai';
    text: string;
};

const predefinedQuestions = {
    about: "Who is Ashutosh Pant?",
    portfolio: "What is this portfolio about?",
    inspiration: "What inspired Ashutosh to pursue software development?",
    apart: "What sets Ashutosh apart from other developers?",
    careerGoals: "What are Ashutosh's long-term career goals and aspirations?",
    contact: "How can I directly contact Ashutosh?",
};

const topicButtons = [
    { id: 'about', label: 'About Ashutosh', icon: Info, query: predefinedQuestions.about },
    { id: 'projects', label: 'Key Projects', icon: Lightbulb, query: "Tell me about Ashutosh's key projects." },
    { id: 'journey', label: 'Professional Journey', icon: Briefcase, query: "Describe Ashutosh's professional journey." },
    { id: 'skills', label: 'Technical Skills', icon: Code, query: "What are Ashutosh's technical skills?" },
];

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        setTimeout(() => {
            const scrollViewport = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
            if (scrollViewport) {
                scrollViewport.scrollTo({ top: scrollViewport.scrollHeight, behavior: 'smooth' });
            }
        }, 100);
    };

    const handleSend = async (query?: string) => {
        const userMessage = query || input;
        if (!userMessage.trim() && !query) return;

        setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
        setInput('');
        setIsLoading(true);
        scrollToBottom();

        try {
            const response = await askChatbot({ query: userMessage });
            setMessages((prev) => [...prev, { sender: 'ai', text: response }]);
        } catch (error) {
            console.error("Chatbot error:", error);
            setMessages((prev) => [...prev, { sender: 'ai', text: "Sorry, something went wrong. Please try again later." }]);
        } finally {
            setIsLoading(false);
            scrollToBottom();
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        handleSend();
    };

    const resetChat = () => {
        setMessages([]);
    };

    return (
        <>
            <AnimatePresence>
                {isOpen ? (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-0 right-0 left-0 top-0 sm:bottom-8 sm:right-8 sm:left-auto sm:top-auto z-50 flex justify-center items-center"
                    >
                        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10" onClick={() => setIsOpen(false)} />
                        
                        <div className="animated-rainbow-border rounded-3xl w-full h-full sm:w-[600px] sm:h-[80vh] max-h-[700px]">
                            <div className="relative z-10 w-full h-full bg-card text-card-foreground rounded-3xl flex flex-col p-4 sm:p-6 overflow-hidden">
                                
                                <div className="flex items-center justify-between mb-4 flex-shrink-0">
                                    <div className="flex items-center gap-3">
                                        {messages.length > 0 ? (
                                            <Button variant="ghost" size="icon" onClick={resetChat} className="rounded-full">
                                                <Home className="h-5 w-5" />
                                            </Button>
                                        ) : (
                                            <div className="relative w-10 h-10">
                                                <Image src={Bio.skills[0].skills[0].image} alt="AI" layout="fill" className="p-1" />
                                            </div>
                                        )}
                                        <h2 className="text-lg font-semibold cursor-pointer hover:opacity-80 transition-opacity" onClick={resetChat}>AI Assistant</h2>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full">
                                        <X className="h-5 w-5" />
                                    </Button>
                                </div>
                                
                                <ScrollArea className="flex-grow mb-4" ref={scrollAreaRef}>
                                    <div className="px-4 space-y-6">
                                        {messages.length === 0 ? (
                                            <div className="text-muted-foreground">
                                                <p className="font-medium text-card-foreground mb-4">Hi there! I'm {Bio.name.split(' ')[0]}'s AI assistant – here to answer all your questions!</p>
                                                <p className="mb-6">Ask me anything, or pick a question below to get started!</p>
                                                <div className="grid grid-cols-2 gap-2 mb-6">
                                                    {topicButtons.map(({ id, label, icon: Icon, query }) => (
                                                        <Button key={id} variant="secondary" className="justify-start h-auto py-2" onClick={() => handleSend(query)}>
                                                            <Icon className="h-4 w-4 mr-2" />
                                                            <span>{label}</span>
                                                        </Button>
                                                    ))}
                                                </div>
                                                <ul className="space-y-2 text-sm list-disc list-inside">
                                                    {Object.values(predefinedQuestions).map((q, i) => (
                                                        <li key={i} className="cursor-pointer hover:text-primary" onClick={() => handleSend(q)}>
                                                            {q}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : (
                                            messages.map((msg, index) => (
                                                <div key={index} className={cn("flex items-start gap-3", msg.sender === 'user' ? 'justify-end' : 'justify-start')}>
                                                    {msg.sender === 'ai' && <Bot className="h-6 w-6 text-primary flex-shrink-0 mt-1" />}
                                                    <div className={cn(
                                                        "max-w-md rounded-2xl px-4 py-2.5 text-sm",
                                                        msg.sender === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-secondary rounded-bl-none'
                                                    )}>
                                                        {msg.text}
                                                    </div>
                                                    {msg.sender === 'user' && <User className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-1" />}
                                                </div>
                                            ))
                                        )}
                                        {isLoading && (
                                            <div className="flex items-start gap-3 justify-start">
                                                <Bot className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                                <div className="max-w-md rounded-2xl px-4 py-2.5 text-sm bg-secondary rounded-bl-none flex items-center">
                                                    <Loader2 className="h-4 w-4 animate-spin" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </ScrollArea>

                                <div className="flex-shrink-0">
                                    <div className="bg-secondary/50 text-xs text-muted-foreground p-3 rounded-lg flex items-start gap-2 mb-4">
                                        <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                        <p>This AI is under development and built to answer questions about me. While responses are accurate, it may occasionally miss some questions or have minor issues.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="relative">
                                        <Input
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            placeholder="Ask me anything..."
                                            className="pr-12 h-12 rounded-full bg-secondary input-rainbow-focus-secondary"
                                            disabled={isLoading}
                                        />
                                        <Button type="submit" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-9 w-9" disabled={isLoading || !input.trim()}>
                                            <Send className="h-4 w-4" />
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="fixed bottom-8 right-8 z-50"
                    >
                        <Button
                            size="icon"
                            onClick={() => setIsOpen(true)}
                            className="rounded-full w-16 h-16 bg-primary hover:bg-accent shadow-lg shadow-primary/30"
                            aria-label="Open AI Assistant"
                        >
                            <Bot className="h-8 w-8" />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
