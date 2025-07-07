import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import OrbitingLogos from '../three/OrbitingLogos';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: "🟨", level: 90 },
        { name: "TypeScript", icon: "🔷", level: 85 },
        { name: "Java", icon: "☕", level: 85 },
        { name: "Python", icon: "🐍", level: 80 },
        { name: "C#", icon: "🟦", level: 75 },
        { name: "Dart", icon: "🎯", level: 70 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: "⚛️", level: 95 },
        { name: "Next.js", icon: "▲", level: 85 },
        { name: "Tailwind CSS", icon: "🎨", level: 90 },
        { name: "Bootstrap", icon: "🅱️", level: 85 },
        { name: "HTML/CSS", icon: "🌐", level: 95 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "🟢", level: 90 },
        { name: "Express.js", icon: "⚡", level: 88 },
        { name: "Spring Boot", icon: "🍃", level: 80 },
        { name: ".NET", icon: "🔵", level: 75 },
        { name: "PHP", icon: "🐘", level: 70 }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: "🍀", level: 85 },
        { name: "MySQL", icon: "🐬", level: 80 },
        { name: "Firebase", icon: "🔥", level: 88 },
        { name: "Git/GitHub", icon: "🐙", level: 90 },
        { name: "Docker", icon: "🐳", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and proficiency levels
          </p>
        </motion.div>

        {/* 3D Skills Visualization (Optional) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-64 mb-12 hidden lg:block"
        >
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <OrbitingLogos />
          </Canvas>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-light-card dark:bg-dark-card rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{skill.icon}</span>
                        <span className="text-sm font-medium text-light-text dark:text-dark-text">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-4">
            Other Skills & Practices
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "OOP", "MVC Architecture", "RESTful APIs", "JWT Authentication",
              "Agile/Scrum", "UI/UX Design", "Responsive Design", "Git Workflow",
              "Problem Solving", "Team Collaboration"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-primary/10 dark:bg-accent/10 
                           text-primary dark:text-accent rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;