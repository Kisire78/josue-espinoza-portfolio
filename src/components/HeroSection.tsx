import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
      <div className="absolute inset-0 bg-background/60" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground tracking-[0.3em] uppercase text-sm mb-6 font-sans"
        >
          QA · Análisis · Testing · Automatización
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
        >
          Josue{" "}
          <span className="text-gradient">Espinoza</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-secondary-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
        >
          Ingeniero en Informática orientado al aseguramiento de calidad, análisis y validación de sistemas.
          Experiencia práctica en pruebas funcionales, APIs, SQL y automatización de procesos con Python,
          complementada con proyectos de automatización web y control de datos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold tracking-wide hover:brightness-110 transition-all"
          >
            Ver Proyectos
          </a>
          <a
            href="https://www.linkedin.com/in/josue-espinoza-a05a53324/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-border text-foreground font-display font-medium hover:bg-secondary transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Kisire78"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-border text-foreground font-display font-medium hover:bg-secondary transition-all"
          >
            GitHub
          </a>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
