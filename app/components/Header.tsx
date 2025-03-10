'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(darkModePreference);
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50">
            <div className="container mx-auto px-4 md:px-6 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold text-primary">
                        Nicolás Borzillo
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        <Link href="#sobre-mi" className="hover:text-primary transition-colors">
                            Sobre mí
                        </Link>
                        <Link href="#experiencia" className="hover:text-primary transition-colors">
                            Experiencia
                        </Link>
                        <Link href="#educacion" className="hover:text-primary transition-colors">
                            Educación
                        </Link>
                        <Link href="#habilidades" className="hover:text-primary transition-colors">
                            Habilidades
                        </Link>
                        <Link href="#certificaciones" className="hover:text-primary transition-colors">
                            Certificaciones
                        </Link>
                        <Link href="#proyectos" className="hover:text-primary transition-colors">
                            Proyectos
                        </Link>
                        <Link href="#contacto" className="hover:text-primary transition-colors">
                            Contacto
                        </Link>
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-4">
                        <Link href="#sobre-mi" className="hover:text-primary transition-colors" onClick={toggleMenu}>
                            Sobre mí
                        </Link>
                        <Link href="#experiencia" className="hover:text-primary transition-colors" onClick={toggleMenu}>
                            Experiencia
                        </Link>
                        <Link href="#educacion" className="hover:text-primary transition-colors" onClick={toggleMenu}>
                            Educación
                        </Link>
                        <Link href="#habilidades" className="hover:text-primary transition-colors" onClick={toggleMenu}>
                            Habilidades
                        </Link>
                        <Link href="#certificaciones" className="hover:text-primary transition-colors" onClick={toggleMenu}>
                            Certificaciones
                        </Link>
                        <Link href="#proyectos" className="hover:text-primary transition-colors" onClick={toggleMenu}>
                            Proyectos
                        </Link>
                        <Link href="#contacto" className="hover:text-primary transition-colors" onClick={toggleMenu}>
                            Contacto
                        </Link>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header; 