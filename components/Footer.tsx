const contact = {
  phone: "+57 313 702 5662",
  phoneHref: "tel:+573137025662",
  email: "proyectos.solumeci1@gmail.com",
  city: "Medellín, Colombia",
  address: "Calle 28 #57-05 Barrio Trinidad",
};

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1b] pt-14 pb-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-between items-start gap-10 pb-10 border-b border-white/[0.07]">
          <div className="flex flex-col gap-2">
            <span className="text-xl font-extrabold text-white tracking-tight">
              SOLUMECI SAS
            </span>
            <span className="text-[13px] text-white/25 max-w-[220px] leading-relaxed">
              Estructuras metálicas y soluciones civiles en Colombia.
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-white/25 mb-1">
              Contacto
            </span>
            {[
              { label: contact.phone, href: contact.phoneHref },
              { label: contact.email, href: `mailto:${contact.email}` },
              { label: contact.city, href: undefined },
              { label: contact.address, href: undefined },
            ].map((item, i) =>
              item.href ? (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-2.5 text-[13.5px] text-brand-gray hover:text-white transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                  {item.label}
                </a>
              ) : (
                <div
                  key={i}
                  className="flex items-center gap-2.5 text-[13.5px] text-brand-gray"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                  {item.label}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-2 pt-6">
          <span className="text-xs text-white/25">
            © {new Date().getFullYear()} Solumeci SAS. Todos los derechos reservados.
          </span>
          <span className="flex items-center gap-1.5 text-xs text-white/25">
            <span className="w-1 h-1 rounded-full bg-brand-red opacity-60" />
            Hecho en Medellín
          </span>
        </div>

      </div>
    </footer>
  );
}
