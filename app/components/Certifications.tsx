'use client';

import { motion } from 'framer-motion';
import { FaAws } from 'react-icons/fa';
import { SiTerraform } from 'react-icons/si';

const Certifications = () => {
    const certifications = [
        {
            title: 'AWS Solutions Architect - Associate',
            organization: 'Cloud Engineering',
            date: 'Oct. 2023',
            icon: <FaAws size={40} />
        },
        {
            title: 'Terraform Associate',
            organization: 'Cloud Engineering',
            date: 'Marzo 2024',
            icon: <SiTerraform size={40} />
        },
        {
            title: 'AWS Cloud Practitioner',
            organization: 'Cloud Engineering',
            date: 'Abril 2023',
            icon: <FaAws size={40} />
        }
    ];

    return (
        <section id="certificaciones" className="py-16">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Certificaciones</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Certificaciones profesionales que acreditan mis conocimientos y habilidades.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2">
                    {certifications.slice(0, 2).map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                            }}
                            className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg p-6 flex items-center gap-6 transition-all duration-300"
                        >
                            <div className="flex-shrink-0 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full text-primary">
                                {cert.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-1">{cert.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-1">{cert.organization}</p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.date}</p>
                            </div>
                        </motion.div>
                    ))}

                    <div className="flex justify-center md:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                            }}
                            className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg p-6 flex items-center gap-6 w-full max-w-[calc(50%-16px)] transition-all duration-300"
                        >
                            <div className="flex-shrink-0 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full text-primary">
                                {certifications[2].icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-1">{certifications[2].title}</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-1">{certifications[2].organization}</p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{certifications[2].date}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications; 