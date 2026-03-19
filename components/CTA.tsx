export default function CTA() {
  const phone = "573137025562";
  const email = "proyectos.solumeci1@gmail.com"

  return (
    <section
      id="contacto"
      aria-labelledby="cta-heading"
      className="bg-brand-dark relative py-24 px-6 text-center"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(136,51,54,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 id="cta-heading" className="text-5xl md:text-[48px] font-extrabold text-white leading-tight tracking-tight mb-5">
          ¿Listo para tu próximo proyecto metálico?
        </h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-11">
          Estamos listos para ayudarte con tu proyecto. Llámanos o escríbenos
          para más información.
        </p>

        <nav aria-label="Opciones de contacto" className="flex justify-center flex-wrap gap-3">
          <a
            href={`tel:+${phone}`}
            aria-label="Llamar a Solumeci"
            className="bg-brand-red hover:bg-brand-red-light text-white font-semibold px-8 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 flex items-center gap-2"
          >
            Llamar ahora
          </a>
          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp (abre en nueva pestaña)"
            className="text-white/80 font-medium px-8 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 border border-white/10 hover:border-white/30 flex items-center gap-2"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            WhatsApp
          </a>
          <a 
            href={`mailto:${email}`}
            aria-label={`Enviar correo a ${email}`}
            className="text-white/80 font-medium px-8 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 border border-white/10 hover:border-white/30 flex items-center gap-2"
            style={{ background: 'rgba(255,255,255,0.05)' }}
          >
            Enviar Correo
          </a>
        </nav>
      </div>
    </section>
  );
}
