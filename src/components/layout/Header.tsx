import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

type NavChild = { to: string; label: string };
type NavItem = {
  to: string;
  label: string;
  end?: boolean;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  {
    to: '/',
    label: 'Accueil',
    end: true,
    children: [
      { to: '/a-propos', label: 'À propos' },
      { to: '/carrieres', label: 'Carrières' },
    ],
  },
  { to: '/services', label: 'Services' },
  { to: '/methode', label: 'Méthode' },
  { to: '/produits', label: 'Produits' },
  { to: '/etudes-de-cas', label: 'Études de cas' },
  { to: '/apprendre-ia', label: "Apprendre l'IA" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setExpandedMobile(null);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      const focusable = mobilePanelRef.current?.querySelector<HTMLElement>('[data-focus-target]');
      focusable?.focus();
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
        mobileButtonRef.current?.focus();
      }
      if (event.key === 'Escape' && openDropdown) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileOpen, openDropdown]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950 text-white shadow-lg shadow-ink-950/10">
      <div className="container-ax">
        <div className="flex h-20 items-center justify-between gap-6 md:h-[76px]">
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-3"
            aria-label="AXAGENIA — Accueil"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500 text-ink-950 transition-transform duration-200 group-hover:rotate-6">
              <Zap className="h-5 w-5" strokeWidth={2.6} />
            </span>
            <span className="font-display text-[1.05rem] font-bold tracking-[0.14em] text-white">
              AXAGENIA
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navigation principale">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to={item.to}
                    className="relative flex items-center gap-1 px-2.5 py-2 text-[13px] font-medium transition-colors duration-200 text-ink-300 hover:text-white"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>
                  {openDropdown === item.label && (
                    <div
                      className="absolute left-0 top-full pt-1"
                      onMouseEnter={() => handleDropdownEnter(item.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="min-w-[180px] overflow-hidden rounded-xl border border-white/10 bg-ink-900 py-1.5 shadow-xl shadow-ink-950/50">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            className={({ isActive }) =>
                              `block px-4 py-2.5 text-[13px] font-medium transition-colors ${
                                isActive
                                  ? 'bg-primary-500/10 text-primary-300'
                                  : 'text-ink-200 hover:bg-white/5 hover:text-white'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `relative px-2.5 py-2 text-[13px] font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-primary-300'
                        : 'text-ink-300 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span aria-current={isActive ? 'page' : undefined}>
                      {item.label}
                      <span
                        className={`absolute inset-x-2.5 -bottom-1 h-0.5 rounded-full bg-primary-400 transition-transform duration-200 ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  )}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden shrink-0 lg:block">
            <Button
              to="/diagnostic"
              size="md"
              className="rounded-full bg-primary-500 px-6 text-ink-950 shadow-lg shadow-primary-500/20 hover:bg-primary-400"
            >
              Contact
            </Button>
          </div>

          <button
            ref={mobileButtonRef}
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav"
          ref={mobilePanelRef}
          className="fixed inset-x-0 top-20 bottom-0 overflow-y-auto border-t border-white/10 bg-ink-950 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation mobile"
        >
          <nav className="container-ax flex flex-col gap-1 py-8" aria-label="Navigation mobile">
            {navItems.map((item, index) =>
              item.children ? (
                <div key={item.to}>
                  <div className="flex items-center">
                    <NavLink
                      to={item.to}
                      end={item.end}
                      data-focus-target={index === 0 ? true : undefined}
                      className={({ isActive }) =>
                        `flex-1 rounded-l-xl px-4 py-3.5 text-base font-medium transition-colors ${
                          isActive
                            ? 'bg-primary-500 text-ink-950'
                            : 'text-ink-200 hover:bg-white/10 hover:text-white'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                    <button
                      type="button"
                      className="rounded-r-xl px-4 py-3.5 text-ink-400 transition-colors hover:bg-white/10 hover:text-white"
                      aria-label={expandedMobile === item.label ? 'Réduire' : 'Développer'}
                      aria-expanded={expandedMobile === item.label}
                      onClick={() =>
                        setExpandedMobile((prev) =>
                          prev === item.label ? null : item.label
                        )
                      }
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          expandedMobile === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                  {expandedMobile === item.label && (
                    <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-white/10 pl-3">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={({ isActive }) =>
                            `rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                              isActive
                                ? 'bg-primary-500/10 text-primary-300'
                                : 'text-ink-300 hover:bg-white/10 hover:text-white'
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  data-focus-target={index === 0 ? true : undefined}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-500 text-ink-950'
                        : 'text-ink-200 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
            <div className="pt-4">
              <Button
                to="/diagnostic"
                size="lg"
                className="w-full rounded-full bg-primary-500 text-ink-950 hover:bg-primary-400"
              >
                Contact
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
