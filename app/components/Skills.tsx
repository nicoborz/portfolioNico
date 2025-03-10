'use client';

import { motion } from 'framer-motion';
import { FaAws, FaPython, FaGitAlt, FaJenkins, FaCloud, FaServer, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTerraform, SiKubernetes, SiGrafana } from 'react-icons/si';

const Skills = () => {
    const technicalSkills = [
        { name: 'AWS', icon: <FaAws size={40} /> },
        { name: 'Azure', icon: <FaCloud size={40} /> },
        { name: 'Python', icon: <FaPython size={40} /> },
        { name: 'JavaScript', icon: <FaJs size={40} /> },
        { name: 'React', icon: <FaReact size={40} /> },
        { name: 'Node.js', icon: <FaNodeJs size={40} /> },
        { name: 'Jenkins', icon: <FaJenkins size={40} /> },
        { name: 'Terraform', icon: <SiTerraform size={40} /> },
        { name: 'Kubernetes', icon: <SiKubernetes size={40} /> },
        { name: 'Git', icon: <FaGitAlt size={40} /> },
        { name: 'Grafana', icon: <SiGrafana size={40} /> },
        { name: 'Zabbix', icon: <FaServer size={40} /> }
    ];

    const softSkills = [
        'Comprometido y enfocado',
        'Trabajo en equipo',
        'Buena comunicación',
        'Autodidacta'
    ];

    return (
        <section id="habilidades" className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Habilidades</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Tecnologías y aptitudes que manejo en mi día a día profesional.
                    </p>
                </motion.div>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center">Habilidades Técnicas</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {technicalSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.08, y: -5 }}
                                className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <div className="text-primary mb-2 transition-transform duration-300 group-hover:scale-110">{skill.icon}</div>
                                <span className="font-medium">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-6 text-center">Habilidades Blandas</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {softSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white dark:bg-gray-900 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <span className="font-medium text-lg">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills; 