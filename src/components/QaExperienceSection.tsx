import { motion } from "framer-motion";
import { CheckCircle, ClipboardList, Bug, KanbanSquare } from "lucide-react";

const qaPoints = [
  {
    icon: ClipboardList,
    text: "Diseño y ejecución de pruebas funcionales a partir de requerimientos e historias de usuario.",
  },
  {
    icon: CheckCircle,
    text: "Validación de APIs y endpoints con Postman, revisando respuestas, datos y comportamiento esperado.",
  },
  {
    icon: Bug,
    text: "Consultas SQL para validar información, relaciones entre datos y resultados de pruebas.",
  },
  {
    icon: KanbanSquare,
    text: "Documentación y seguimiento de incidencias con enfoque en trazabilidad, análisis y mejora continua.",
  },
];

const QaExperienceSection = () => {
  return (
    <section id="experiencia-qa" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3 font-sans">Calidad de Software</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Experiencia práctica en QA
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Durante mi práctica profesional en Coopeuch participé en procesos de Gestión de Identidades y Seguridad TI, realizando validación de información, control de accesos, seguimiento de incidencias y automatización de monitoreo y alertas. Complemento esta experiencia con proyectos donde he aplicado pruebas funcionales, validación de APIs, consultas SQL, documentación de resultados y automatización con Python y Playwright.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {qaPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QaExperienceSection;
