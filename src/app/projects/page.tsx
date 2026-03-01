import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Explore the recent web development projects built by Ayub utilizing Vite, React, Next.js, and Gen AI.",
};

const projects = [
    {
        title: "Elimination Wheel",
        description: "Unlike standard spinner wheels that just pick one winner, an Elimination Wheel removes the winner from the list after each spin. This is perfect for raffles where you have multiple prizes, or for last man standing games where the last person remaining is the winner",
        tags: ["Vite", "Tailwind", "Gen AI"],
        githubUrl: "https://github.com/Unr3leas3d/elimination-wheel-spin",
        liveUrl: "https://www.eliminationwheel.com",
    },
    {
        title: "Stock Ticker",
        description: "A recreation of Stock Ticker from the classic 1937 board game, remade with modern web technologies including online multiplayer support.",
        tags: ["React", "TypeScript", "FullStack", "Web Sockets"],
        githubUrl: "https://github.com/Unr3leas3d/stock-ticker",
        liveUrl: "https://stock-ticker-mu.vercel.app/lobby",
    },
    {
        title: "Panic Sell",
        description: "Solana DApp to instantly liquidate non-SOL assets into USDC.",
        tags: ["Solana", "Helium", "Jupyter"],
        githubUrl: "https://github.com/Unr3leas3d/PanicSell",
        liveUrl: "https://panic-sell.vercel.app",
    },
    {
        title: "Div Notes",
        description: "Your web annotations,everywhere. Select any element on a webpage and create rich notes against it. Keep your thoughts organized and visually contextualized.",
        tags: ["Extension", "Supabase", "Chrome Web Store"],
        githubUrl: "https://github.com/Unr3leas3d/DivNotes",
        liveUrl: "https://div-notes.vercel.app",
    },
];

export default function Projects() {
    return (
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-24">
            <div className="max-w-2xl mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 flex items-center gap-3">
                    My <span className="text-brand-yellow">Projects</span> <Sparkles className="w-8 h-8 text-brand-yellow" />
                </h1>
                <p className="text-lg text-muted-foreground">
                    A collection of my recent work. All of these projects were conceptualized, designed, and built using Generative AI tools, with a heavy emphasis on delivering stellar user experiences.
                </p>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap gap-6 items-stretch justify-start">
                {projects.map((project, index) => (
                    <Card key={index} className="flex-1 min-w-full sm:min-w-[300px] md:max-w-[400px] flex flex-col group hover:border-brand-green/50 transition-colors">
                        <CardHeader>
                            <CardTitle className="text-xl group-hover:text-brand-green transition-colors">{project.title}</CardTitle>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <CardDescription className="text-sm md:text-base leading-relaxed">
                                {project.description}
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-4 border-t pt-4">
                            <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4" /> Code
                                </Link>
                            </Button>
                            <Button size="sm" className="w-full gap-2 bg-brand-green text-black hover:bg-brand-green/90" asChild>
                                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4" /> Demo
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
