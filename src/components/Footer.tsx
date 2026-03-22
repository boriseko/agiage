export default function Footer() {
  return (
    <footer style={{ background: "#F0ECE4", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <span className="text-lg font-medium tracking-[0.2em] uppercase" style={{ color: "rgba(26,26,26,0.55)" }}>
              АГИ
            </span>
            <p className="text-sm mt-2 max-w-xs" style={{ color: "#888" }}>
              Курс по использованию AI-агентов для решения любых задач
            </p>
          </div>

          <div className="flex gap-12">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#555" }}>Навигация</p>
              {[
                { href: "#program", label: "Программа" },
                { href: "#pricing", label: "Тарифы" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Контакты" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block text-sm transition-colors hover:opacity-100" style={{ color: "#888" }}>
                  {link.label}
                </a>
              ))}
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#555" }}>Документы</p>
              {["Политика конфиденциальности", "Пользовательское соглашение", "Оферта"].map((doc) => (
                <a key={doc} href="#" className="block text-sm transition-colors hover:opacity-100" style={{ color: "#888" }}>
                  {doc}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
          <p className="text-xs" style={{ color: "#888" }}>&copy; 2026 AGI Age. Все права защищены.</p>
          <p className="text-xs" style={{ color: "#888" }}>Согласие на обработку персональных данных</p>
        </div>
      </div>
    </footer>
  );
}
