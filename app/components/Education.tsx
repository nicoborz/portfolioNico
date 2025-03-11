'use client';

import { motion } from 'framer-motion';

const Education = () => {
    const mainEducation = [
        {
            institution: 'Facultad ORT (Ingeniería en Sistemas)',
            degree: 'Ingeniería',
            period: 'Ago. 2024 - Presente'
        },
        {
            institution: 'Facultad de Ingeniería en Computación (FING)',
            degree: 'Ingeniería',
            period: 'Mar. 2018 - Jun. 2024'
        },
        {
            institution: 'Clara Jackson de Heber',
            degree: 'Ingeniería',
            period: 'Mar. 2015 - Dic. 2017'
        }
    ];

    const additionalEducation = [
        {
            institution: 'JAP (Jóvenes a Programar)',
            degree: 'Desarrollo Web',
            period: 'Mar. 2018 - Dic. 2018'
        },
        {
            institution: 'Programa B_IT, CUTI',
            degree: 'Tecnología de la Información (IT)',
            period: 'Feb. 2019 - Dic. 2020'
        }
    ];

    return (
        <section id="educacion" className="py-16">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Educación</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Mi formación académica y cursos en el área de tecnología e informática.
                    </p>
                </motion.div>

                {/* Educación principal (universidades) */}
                <div className="grid gap-6 md:grid-cols-3 mb-8">
                    {mainEducation.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg p-6 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-primary mb-2">{edu.institution}</h3>
                            <p className="text-lg font-medium mb-2">{edu.degree}</p>
                            <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Educación adicional (cursos) - centrados */}
                <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                    {additionalEducation.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg p-6 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-primary mb-2">{edu.institution}</h3>
                            <p className="text-lg font-medium mb-2">{edu.degree}</p>
                            <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education; 