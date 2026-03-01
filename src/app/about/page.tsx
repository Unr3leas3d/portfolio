import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code2, Palette, Zap, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me",
    description: "Learn more about Ayub, his focus on UX/UI design, and how he leverages AI for modern web development.",
};

export default function About() {
    return (
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-24 max-w-4xl">
            <div className="mb-12 space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    About <span className="text-brand-green">Me</span>.
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    I bridge the gap between design and engineering, utilizing cutting-edge AI tools to build experiences that matter.
                </p>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap gap-6 mb-16 items-stretch">
                <Card className="flex-1 min-w-full sm:min-w-[250px] bg-gradient-to-br from-background to-brand-green/5 border-brand-green/20">
                    <CardContent className="pt-6 space-y-4">
                        <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center border border-brand-green/30">
                            <Palette className="text-brand-green w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold">UX/UI Focus</h3>
                        <p className="text-sm text-muted-foreground">
                            Every pixel counts. I build interfaces that are not just functional, but beautifully intuitive and delightful to use.
                        </p>
                    </CardContent>
                </Card>

                <Card className="flex-1 min-w-full sm:min-w-[250px] bg-gradient-to-br from-background to-brand-yellow/5 border-brand-yellow/20">
                    <CardContent className="pt-6 space-y-4">
                        <div className="w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center border border-brand-yellow/30">
                            <Zap className="text-brand-yellow w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold">AI Native</h3>
                        <p className="text-sm text-muted-foreground">
                            I leverage Generative AI continuously—from conception to deployment—multiplying my development velocity and creative output.
                        </p>
                    </CardContent>
                </Card>

                <Card className="flex-1 min-w-full sm:min-w-[250px] bg-gradient-to-br from-background to-primary/5">
                    <CardContent className="pt-6 space-y-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                            <Code2 className="text-primary w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold">Modern Stack</h3>
                        <p className="text-sm text-muted-foreground">
                            Specializing in the React ecosystem with Next.js, and crafting seamless responsive layouts using Tailwind CSS.
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Card className="w-full border-brand-green/20 bg-gradient-to-br from-background to-brand-green/5">
                <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                        <Mail className="w-6 h-6 text-brand-green" /> Contact Me
                    </CardTitle>
                    <CardDescription className="text-base">
                        I&apos;m always looking for interesting projects and opportunities to collaborate. Send me a message!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2 max-w-sm mx-auto">
                        <label className="text-sm font-medium leading-none">Social</label>
                        <a href="https://x.com/promptdivs" target="_blank" rel="noopener noreferrer" className="flex h-10 w-full items-center justify-center gap-2 rounded-md border border-input bg-background/50 backdrop-blur-sm px-3 py-2 text-sm font-medium hover:bg-brand-green/20 hover:text-brand-green hover:border-brand-green/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green">
                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            @promptdivs
                        </a>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
