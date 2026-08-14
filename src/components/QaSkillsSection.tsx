import { motion } from "framer-motion";

const coreSkills = [
  "Testing funcional",
  "Postman",
  "APIs REST",
  "SQL",
  "Python",
  "Playwright",
  "SQLite",
  "Casos de prueba",
  "Gestión de incidencias",
  "Jira",
  "TestLink",
  "Git",
  "Linux",
  "Scrum",
  "Kanban",
];

const complementarySkills = [
  "Selenium",
  "JMeter",
  "k6",
  "AWS",
  "EC2",
  "S3",
  "IAM",
  "RDS",
  "VPC",
];

const QaSkillsSection = () => {
  return (
    <section id="habilidades-qa" className="py-28 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3 font-sans">Competencias Técnicas</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            QA, Análisis & Automatización
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mt-3 max-w-2xl">
            Herramientas y tecnologías utilizadas en proyectos, prácticas, validaciones y procesos de aprendizaje aplicado.
          </p>
        </motion.div>

        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Aplicadas en proyectos y práctica</p>
        <div className="flex flex-wrap gap-3 mb-10">
          {coreSkills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-sm px-5 py-2.5 rounded-full bg-primary/10 text-foreground font-medium border border-primary/30 hover:bg-primary/20 transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Conocimientos complementarios</p>
        <div className="flex flex-wrap gap-3">
          {complementarySkills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-sm px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground font-medium border border-border hover:border-primary/30 transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QaSkillsSection;
