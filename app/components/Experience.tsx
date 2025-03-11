'use client';

import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            title: 'DevOps Engineer',
            company: 'Globant',
            period: 'Oct. 2023 - Presente',
            responsibilities: [
                'Soporte para las solicitudes del cliente interno relacionadas a SRE/DevOps.',
                'Administración de infraestructura Azure.',
                'Administración de clusters de Kubernetes.',
                'Administración de CI/CD con Jenkins.',
                'Monitorización de la infraestructura con Zabbix, Grafana.'
            ]
        },
        {
            title: 'DevOps Engineer',
            company: 'Globant',
            period: 'Nov. 2022 - Sept. 2023',
            responsibilities: [
                'Mantenimiento y monitorización de solución construida, orquestada por Jenkins.',
                'Constantemente agregó actualizaciones y mejoras al código de dicha arquitectura que fueron hechas con Python o PowerShell.',
                'Frecuentemente manejó una base de datos SQL.',
                'Utilización del repositorio GitHub para mantener el código.',
                'Administración diaria de Windows VMs.'
            ]
        },
        {
            title: 'Functional Testing (GQA)',
            company: 'Globant',
            period: 'Junio 2021 - Nov. 2022',
            responsibilities: [
                'Realizó reportes en Jira. Revisaba reportes de compañeros del equipo para sugerir cambios o mejoras.',
                'Frecuentemente se enfrentaba a casos TestRail.',
                'Asumió la tarea de Professor. Guió a las nuevas incorporaciones en sus primeros pasos, local y remotamente, enseñándoles las herramientas que el proyecto usaba.'
            ]
        }
    ];

    return (
        <section id="experiencia" className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Experiencia Profesional</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Mi trayectoria profesional en el ámbito de DevOps y desarrollo de software.
                    </p>
                </motion.div>

                <div className="grid gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg p-6 md:p-8 transition-all duration-300"
                        >
                            <div className="mb-4 flex flex-col md:flex-row md:justify-between md:items-center">
                                <div>
                                    <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                                    <p className="text-lg font-medium">{exp.company}</p>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{exp.period}</p>
                            </div>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                {exp.responsibilities.map((responsibility, idx) => (
                                    <li key={idx}>{responsibility}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience; 