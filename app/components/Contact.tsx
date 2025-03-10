'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    const contactInfo = [
        {
            icon: <FaPhone size={20} />,
            label: 'Teléfono',
            value: '+598 98 015 700',
            href: 'tel:+59898015700'
        },
        {
            icon: <FaEnvelope size={20} />,
            label: 'Email',
            value: 'nicobor9@hotmail.com',
            href: 'mailto:nicobor9@hotmail.com'
        },
        {
            icon: <FaLinkedin size={20} />,
            label: 'LinkedIn',
            value: 'Nicolás Borzillo',
            href: 'https://www.linkedin.com/in/nicolas-borzillo-basilio/'
        },
        {
            icon: <FaMapMarkerAlt size={20} />,
            label: 'Ubicación',
            value: 'Montevideo, Uruguay',
            href: 'https://maps.google.com/?q=Montevideo,Uruguay'
        }
    ];

    return (
        <section id="contacto" className="py-16">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Contáctame</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        ¿Estás interesado en trabajar conmigo o tienes alguna pregunta? No dudes en ponerte en contacto.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {contactInfo.map((info, index) => (
                        <motion.a
                            key={index}
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -8,
                                boxShadow: "0 12px 30px rgba(0, 119, 182, 0.15)",
                                scale: 1.02
                            }}
                            className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800"
                        >
                            <div className="bg-primary/10 text-primary p-4 rounded-full mb-4 transform transition-transform group-hover:scale-110">
                                {info.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{info.label}</h3>
                            <p className="text-gray-700 dark:text-gray-300">{info.value}</p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact; 