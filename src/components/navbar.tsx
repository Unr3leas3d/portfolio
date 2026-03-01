"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { AmLogo } from "@/components/am-logo";

export function Navbar() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">

                {/* Logo */}
                <Link href="/" className="font-bold text-xl tracking-tight text-brand-green hover:opacity-80 transition-opacity">
                    <AmLogo className="w-10 h-10" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 font-medium">
                    <Link href="/" className="hover:text-brand-green transition-colors">
                        Home
                    </Link>
                    <Link href="/projects" className="hover:text-brand-green transition-colors">
                        Projects
                    </Link>
                    <Link href="/about" className="hover:text-brand-green transition-colors">
                        About
                    </Link>
                </nav>

                {/* Right Side Actions */}
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        aria-label="Toggle theme"
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>

                    {/* Mobile Nav Trigger & Menu */}
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" aria-label="Menu">
                                    <Menu className="h-[1.2rem] w-[1.2rem]" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
                                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                <nav className="flex flex-col gap-8 font-medium mt-12 px-6">
                                    <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl hover:text-brand-green transition-colors">
                                        Home
                                    </Link>
                                    <Link href="/projects" onClick={() => setIsOpen(false)} className="text-2xl hover:text-brand-green transition-colors">
                                        Projects
                                    </Link>
                                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-2xl hover:text-brand-green transition-colors">
                                        About
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
