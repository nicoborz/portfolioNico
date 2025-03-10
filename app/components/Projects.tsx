'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaApple, FaAndroid } from 'react-icons/fa';

const Projects = () => {
    return (
        <section id="proyectos" className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Algunos de los proyectos en los que he trabajado.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <div className="md:flex">
                        <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden bg-yellow-100">
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/80 to-yellow-500/30 z-10 rounded-l-xl"></div>
                            <div className="flex justify-center items-center p-8 h-full relative">
                                <motion.div
                                    className="relative w-40 h-40 md:w-48 md:h-48 z-20"
                                    whileHover={{ scale: 1.05, rotate: 3 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src="/catchncook.jpg"
                                        alt="Catch'n Cook App"
                                        fill
                                        className="object-contain drop-shadow-lg"
                                        priority
                                    />
                                </motion.div>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-8 md:p-12">
                            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">Catch'n Cook!</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                Una innovadora aplicación que transforma la experiencia culinaria mediante inteligencia artificial.
                                Permite tomar fotos de ingredientes y generar recetas personalizadas al instante.
                                Incluye sistema de nivel, ChefBot para consultas, catálogo de ingredientes y recetas guardadas.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <motion.a
                                    href="https://apps.apple.com/uy/app/catchn-cook/id6740918307?l=es-MX"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition-colors shadow-md"
                                    whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
                                >
                                    <FaApple size={24} />
                                    <span>App Store</span>
                                </motion.a>
                                <motion.a
                                    href="https://play.google.com/store/apps/details?id=com.nicobor.catchandcook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-[#3DDC84] text-white px-5 py-3 rounded-lg hover:bg-[#32B06D] transition-colors shadow-md"
                                    whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
                                >
                                    <FaAndroid size={24} />
                                    <span>Google Play</span>
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects; 