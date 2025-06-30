"use client";

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        variant: "destructive",
        title: "Configuration Error",
        description: "EmailJS is not configured. Please set environment variables.",
      });
      return;
    }

    setIsSending(true);

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          form.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem sending your message. Please try again.",
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="flex flex-col items-center justify-center gap-8 md:gap-12 py-16 md:py-24">
      <div className="text-center animate-fadeIn max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text animated-gradient-text">
            Contact Me
        </h2>
        <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
        <p className="mt-8 text-base md:text-lg text-muted-foreground">
          I'd love to hear from you. Drop me a line!
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full max-w-lg animated-rainbow-border !rounded-[2.5rem]"
      >
        <div className="relative z-10 bg-card rounded-[2.5rem] p-6 md:p-8">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
            <Input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              aria-label="Your Email"
              className="bg-background input-rainbow-focus"
            />
            <Input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              aria-label="Your Name"
              className="bg-background input-rainbow-focus"
            />
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              aria-label="Subject"
              className="bg-background input-rainbow-focus"
            />
            <Textarea
              name="message"
              placeholder="Message"
              required
              aria-label="Message"
              rows={4}
              className="bg-background input-rainbow-focus"
            />
            <Button type="submit" disabled={isSending} className="group relative overflow-hidden bg-gradient-to-r from-primary via-purple-600 to-accent text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/40 rounded-full">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-full"></div>
              <span className="relative flex items-center justify-center">
                {isSending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : "Send Message"}
              </span>
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
