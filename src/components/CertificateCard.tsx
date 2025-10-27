"use client";

import { Certificate } from "@/data/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Award } from "lucide-react";

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="cursor-pointer group">
                    <Card className="bg-card/80 backdrop-blur-sm border-border/20 shadow-lg hover:shadow-primary/20 transition-all duration-300 relative overflow-hidden card-hover-shimmer rounded-2xl h-full">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-full">
                                    <Award className="h-8 w-8 text-primary" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{certificate.title}</CardTitle>
                                    <CardDescription className="text-sm text-muted-foreground">{certificate.issuedBy}</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-muted-foreground">{certificate.date}</p>
                        </CardContent>
                    </Card>
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full p-0">
                <DialogTitle className="sr-only">{certificate.title}</DialogTitle>
                <div className="relative aspect-video">
                    <Image 
                        src={certificate.image} 
                        alt={certificate.title} 
                        layout="fill" 
                        objectFit="contain"
                    />
                </div>
                 <div className="p-6 pt-0 flex justify-end">
                    <Button asChild variant="link">
                        <Link href={certificate.credentialLink} target="_blank">
                            View Credential
                        </Link>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CertificateCard;

    