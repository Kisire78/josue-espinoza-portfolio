import { motion } from "framer-motion";
import { CheckCircle, ClipboardList, Bug, KanbanSquare } from "lucide-react";

const qaPoints = [
  {
    icon: ClipboardList,
    text: "Experiencia práctica en testing funcional y validación de sistemas en proyectos académicos y de formación, trabajando bajo enfoques ágiles y organización de tareas tipo Kanban.",
  },
  {
    icon: CheckCircle,
    text: "Participación en diseño y ejecución de casos de prueba a partir de requerimientos e historias de usuario, validando flujos funcionales, comportamiento de aplicaciones y consistencia de datos.",
  },
  {
    icon: Bug,
    text: "Experiencia en detección, documentación y seguimiento de incidencias, además de pruebas funcionales de APIs utilizando Postman para validación de endpoints, respuestas y comportamiento del servicio.",
  },
  {
    icon: KanbanSquare,
    text: "Enfoque orientado a calidad, análisis y mejora continua durante el ciclo de desarrollo.",
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
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3 font-sans">Testing & Calidad</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Experiencia en QA y Testing
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Durante mi práctica en la cooperativa Coopeuch participé en procesos de gestión de identidades y seguridad TI, realizando validación de datos, seguimiento de incidencias y control de accesos. También colaboré en la automatización de un sistema de monitoreo y alertas, fortaleciendo habilidades de análisis, validación de procesos y detección de inconsistencias. Además, he realizado pruebas funcionales, validación de APIs y bases de datos en proyectos académicos relacionados con QA.
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
