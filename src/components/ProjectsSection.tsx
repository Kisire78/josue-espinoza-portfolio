import { motion } from "framer-motion";
import { Github } from "lucide-react";

interface Project {
  title: string;
  context: string;
  description: string;
  details: string[];
  tags: string[];
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: "QA Job Alert – Automatización de búsqueda de empleos",
    context: "Proyecto personal",
    description:
      "Sistema desarrollado en Python que consulta múltiples fuentes de ofertas laborales, procesa las publicaciones y notifica automáticamente las nuevas por Telegram con enlaces directos. Integra automatización web, manejo de datos y alertas de correo en un solo flujo (ejecución local).",
    details: [
      "Automatización de navegación y extracción de ofertas con Playwright.",
      "Control de duplicados y estado de notificaciones mediante SQLite.",
      "Integración de Gmail e Indeed con alertas automáticas a Telegram.",
    ],
    tags: ["Python", "Playwright", "SQLite", "Gmail API", "OAuth 2.0", "Telegram Bot API", "BeautifulSoup", "Git"],
  },
  {
    title: "Analizador Automatizado de Resultados de Pruebas QA",
    context: "Proyecto personal",
    description:
      "Herramienta desarrollada en Python para procesar resultados de pruebas desde Excel/CSV, identificar fallos recurrentes y generar métricas y visualizaciones que facilitan el análisis de calidad.",
    details: [],
    tags: ["Python", "Pandas", "OpenPyXL", "Matplotlib", "Streamlit", "Git"],
  },
  {
    title: "Automatización de Alertas de Seguridad – Coopeuch",
    context: "Práctica profesional",
    description:
      "Solución desarrollada durante mi práctica para automatizar consultas de direcciones IP mediante InternetDB, almacenar resultados y generar alertas automáticas, reduciendo tareas manuales del proceso de monitoreo.",
    details: [],
    tags: ["Python", "SQLite", "InternetDB/Shodan", "HTTPX", "Requests", "Telegram Bot", "Debian", "SSH"],
  },
  {
    title: "UTS2 – Plataforma IoT para Monitoreo Inteligente",
    context: "Proyecto de título",
    description:
      "Plataforma para el monitoreo y centralización de alertas en tiempo real mediante dispositivos IoT y una aplicación web. Participé en diseño, integración de componentes, requerimientos, pruebas y validación del sistema.",
    details: [],
    tags: ["FastAPI", "React", "PostgreSQL", "MQTT", "WebRTC", "Raspberry Pi", "ESP32", "Git", "Scrum"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3 font-sans">Portafolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Proyectos y habilidades adquiridas
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-colors duration-300 flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-5 flex-1">
                  {project.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.repoUrl && (
                  <div className="flex gap-4">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition"
                    >
                      <Github className="w-4 h-4" /> Código
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
