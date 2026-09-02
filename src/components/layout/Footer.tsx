import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Zap } from 'lucide-react';

const navigationLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/methode', label: 'Méthode' },
  { to: '/produits', label: 'Produits' },
  { to: '/etudes-de-cas', label: 'Études de cas' },
];

const companyLinks = [
  { to: '/a-propos', label: 'À propos' },
  { to: '/carrieres', label: 'Carrières' },
  { to: '/apprendre-ia', label: "Apprendre l'IA" },
  { to: '/diagnostic', label: 'Diagnostic' },
];

const legalLinks = [
  { to: '/mentions-legales', label: 'Mentions légales' },
  { to: '/politique-confidentialite', label: 'Politique de confidentialité' },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-ink-950 text-white">
      <div className="container-ax py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5 lg:col-span-5">
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
              aria-label="AXAGENIA — Accueil"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500 text-ink-950 transition-transform duration-200 group-hover:rotate-6">
                <Zap className="h-5.5 w-5.5" strokeWidth={2.6} />
              </span>
              <span className="font-display text-lg font-bold tracking-[0.14em] text-white">
                AXAGENIA
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-ink-300">
              Partenaire d'amélioration des processus par l'IA et l'automatisation.
              Nous concevons des workflows adaptés à vos usages, sans imposer de technologie inutile.
            </p>
            <Link
              to="/diagnostic"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-primary-400"
            >
              Présenter mon besoin
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-300">
              Navigation
            </h2>
            <ul className="mt-5 space-y-3.5">
              {navigationLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-300">
              AXAGENIA
            </h2>
            <ul className="mt-5 space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-300">
              Parlons de votre projet
            </h2>
            <p className="mt-5 text-sm leading-6 text-ink-300">
              Un processus chronophage à simplifier ? Échangeons sur votre situation.
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="mailto:contact@axagenia.fr"
                  className="flex items-center gap-3 text-sm text-ink-200 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-primary-400" />
                  contact@axagenia.fr
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-400">
                <MapPin className="h-4 w-4 text-primary-400" />
                France
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} AXAGENIA. Tous droits réservés.
          </p>
          <nav aria-label="Pages légales">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-xs text-ink-500 transition-colors hover:text-ink-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
