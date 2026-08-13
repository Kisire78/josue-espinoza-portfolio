import { motion } from "framer-motion";
import { Database, Search, Terminal, BarChart3, ShieldCheck, Server, Cloud, Bot } from "lucide-react";

const skills = [
  { icon: Database, title: "SQL", description: "Consultas JOIN, validación y análisis de datos en bases relacionales." },
  { icon: ShieldCheck, title: "QA & Validación", description: "Pruebas funcionales, APIs, casos de prueba y detección de incidencias." },
  { icon: Terminal, title: "Python", description: "Automatización de procesos, scripts de monitoreo y validación." },
  { icon: Bot, title: "Automatización", description: "Scripts Python y automatización web mediante Playwright para reducir tareas manuales y validar procesos." },
  { icon: Search, title: "Validación de Datos", description: "Control de calidad, integridad y consistencia de información." },
  { icon: BarChart3, title: "Análisis de Datos", description: "Interpretación de información, detección de patrones e inconsistencias." },
  { icon: Server, title: "Debian / Linux", description: "Administración básica de sistemas Linux en entornos de desarrollo y servidores." },
  { icon: Cloud, title: "IAM Azure", description: "Conocimiento complementario en gestión de identidades y accesos en la nube." },
];

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-28 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3 font-sans">Sobre mí</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Calidad, Análisis & Automatización
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ingeniero en Informática con experiencia práctica en validación de información, control de accesos,
              automatización de procesos y análisis de sistemas. Durante mi práctica profesional en Coopeuch trabajé
              en Gestión de Identidades y Seguridad TI, participando en procesos donde la trazabilidad, consistencia
              de datos y detección de incidencias eran fundamentales.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Mi perfil combina una mirada analítica con aseguramiento de calidad: pruebas funcionales, validación de
              APIs, consultas SQL, documentación de incidencias y automatización mediante Python. Continúo
              desarrollando proyectos orientados a QA y automatización para fortalecer estas competencias.
            </p>

            <div className="p-5 rounded-xl bg-card border border-border">
              <h3 className="font-display font-semibold text-lg mb-3">Experiencia Práctica — Cooperativa Coopeuch</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Práctica profesional en Gestión de Identidades y Seguridad TI:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Gestión y validación de cuentas, accesos e información de usuarios
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Revisión de flujos y detección de inconsistencias
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Automatización de procesos de monitoreo mediante Python
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Implementación de alertas automáticas y seguimiento de resultados
                </li>
              </ul>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm mb-1">{skill.title}</h3>
                  <p className="text-muted-foreground text-xs">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
