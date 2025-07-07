import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const education = {
    degree: "B.Sc. (Hons) in Information Technology",
    university: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "2022 Oct – Present",
    previousEducation: {
      level: "G.C.E. Advanced Level – Commerce Stream",
      school: "St. Anne's College, Sri Lanka",
      period: "2018 – 2020"
    }
  };

  const certifications = [
    {
      title: "Full Stack Developer Trainee Program",
      institution: "University of Moratuwa",
      certificates: [
        { name: "Python Programming", code: "c6mGYSkX90" },
        { name: "Web Development", code: "Ybqb94FJQ7" }
      ]
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Motivated and detail-oriented Software Engineering undergraduate with hands-on experience 
            in full-stack development across web, mobile, and desktop platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Profile Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4">
              Profile Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              I'm a passionate Software Engineering undergraduate proficient in JavaScript, Java, Python, 
              and C# with a strong understanding of software development principles, including 
              Object-Oriented Programming (OOP) and Model-View-Controller (MVC) architecture.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Skilled in building scalable and interactive applications using modern technologies such as 
              React, Node.js, Spring Boot, and Flutter. Seeking opportunities to apply technical skills, 
              gain real-world experience, and contribute to innovative software projects within a 
              collaborative, agile development environment.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="w-5 h-5 mr-3 text-primary dark:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Malabe, Sri Lanka
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="w-5 h-5 mr-3 text-primary dark:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +94 740 276 450
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="w-5 h-5 mr-3 text-primary dark:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                keshan.contact@gmail.com
              </div>
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Education Timeline */}
            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-6">
              Education
            </h3>
            <div className="space-y-6 relative before:absolute before:left-0 before:top-2 
                            before:h-full before:w-0.5 before:bg-gray-300 dark:before:bg-gray-700">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-2 w-4 h-4 bg-primary dark:bg-accent rounded-full" />
                <h4 className="font-semibold text-light-text dark:text-dark-text">
                  {education.degree}
                </h4>
                <p className="text-primary dark:text-accent">{education.university}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{education.period}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-2 w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full" />
                <h4 className="font-semibold text-light-text dark:text-dark-text">
                  {education.previousEducation.level}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{education.previousEducation.school}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{education.previousEducation.period}</p>
              </motion.div>
            </div>

            {/* Certifications */}
            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4 mt-10">
              Certifications
            </h3>
            <div className="bg-light-card dark:bg-dark-card rounded-lg p-6 shadow-lg">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="font-semibold text-light-text dark:text-dark-text mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-primary dark:text-accent mb-3">{cert.institution}</p>
                  <div className="space-y-2">
                    {cert.certificates.map((certificate, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                          {certificate.name}
                        </span>
                        <span className="text-xs bg-primary/10 dark:bg-accent/10 
                                         text-primary dark:text-accent px-2 py-1 rounded">
                          {certificate.code}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;