'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 md:pt-28 md:pb-20">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            <span>Nicolás Andrés</span> Borzillo Basilio
                        </h1>
                        <h2 className="text-2xl md:text-3xl mb-6 text-gray-600 dark:text-gray-300">
                            DevOps Engineer
                        </h2>
                        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed">
                            Persona que siempre está en la búsqueda de un reto. Comprometido y enfocado con la motivación interna de producir resultados de alta calidad y aprender cada día más.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="#contacto" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg transform hover:translate-y-[-2px] transition-all duration-300">
                                Contáctame
                            </Link>
                            <Link href="#proyectos" className="border-2 border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg transition-colors shadow-sm hover:shadow-md transform hover:translate-y-[-2px] transition-all duration-300">
                                Ver proyectos
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2 flex justify-center"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div className="relative h-72 w-72 md:h-96 md:w-96 rounded-full overflow-hidden border-4 border-primary shadow-xl hover:shadow-2xl transition-all duration-300">
                            {/* Imagen de perfil */}
                            <Image
                                src="/profile.jpg"
                                alt="Nicolás Borzillo"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 18rem, 24rem"
                                quality={90}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 