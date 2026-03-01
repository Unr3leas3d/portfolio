import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the portfolio of Ayub Mohamed, a passionate Frontend Developer.",
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-4rem)] gap-12 py-12">
      {/* Left Content */}
      <div className="flex-1 space-y-6 max-w-2xl">
        <h2 className="text-xl md:text-2xl font-medium tracking-tight text-muted-foreground">
          Hey, I&apos;m
        </h2>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          <span className="text-brand-green selection:bg-brand-yellow/30">Ayub</span>
          <br />
          Mohamed
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
          A frontend developer with a strong focus on user experience and crafting beautiful interfaces. I leverage the power of Generative AI to build innovative and modern web applications.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Button asChild size="lg" className="rounded-full shadow-lg shadow-brand-green/20 hover:shadow-brand-green/40 transition-shadow">
            <Link href="/about">Get In Touch</Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="rounded-full">
            <Link href="/projects">Browse Projects</Link>
          </Button>
        </div>
      </div>

      {/* Right Image/Avatar */}
      <div className="flex-1 flex justify-center md:justify-end relative">
        {/* Outer container defining the size for both the rings and the image */}
        <div className="relative flex items-center justify-center w-72 h-72 md:w-96 md:h-96">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-brand-green/30 border-dashed animate-[spin_30s_linear_infinite]"></div>

          {/* Inner Ring */}
          <div className="absolute inset-4 md:inset-6 rounded-full border-2 border-brand-yellow/30 border-dashed animate-[spin_40s_linear_infinite_reverse]"></div>

          {/* Actual Image Container (Nested inside the central space) */}
          <div className="relative z-10 w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden bg-muted border-4 border-background shadow-2xl">
            {/* We will use a placeholder styling here. The user can easily replace the src */}
            <div className="w-full h-full bg-gradient-to-br from-brand-green/20 via-background to-brand-yellow/20 flex items-center justify-center">
              <span className="text-muted-foreground text-sm font-medium text-center px-4">Profile Image Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
