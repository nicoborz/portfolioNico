'use client';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold mb-2">Nicolás Borzillo</h3>
                        <p className="text-gray-400">DevOps Engineer/Developer</p>
                    </div>

                    <div className="flex space-x-4">
                        <a
                            href="https://www.linkedin.com/in/nicolas-borzillo-basilio/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {currentYear} Nicolás Borzillo. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 