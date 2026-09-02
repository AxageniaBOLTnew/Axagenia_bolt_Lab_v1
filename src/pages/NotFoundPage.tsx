import { useEffect, useRef } from 'react';
import { ArrowRight, Home, Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section, Container } from '@/components/ui/Section';

export function NotFoundPage() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    headingRef.current?.focus();
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <Section className="bg-white min-h-[60vh] flex items-center pt-12 md:pt-16">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-ink-100 text-ink-400 mx-auto mb-6">
            <Compass className="w-8 h-8" strokeWidth={2} />
          </div>
          <h1
            ref={headingRef}
            tabIndex={-1}
            className="text-3xl md:text-4xl font-display font-bold text-ink-900 focus:outline-none"
          >
            Cette page n'existe pas
          </h1>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">
            La page que vous cherchez a peut-être été déplacée ou n'a jamais existé.
            Voici deux chemins utiles pour retrouver votre chemin.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/" size="lg">
              <Home className="w-4.5 h-4.5" />
              Retour à l'Accueil
            </Button>
            <Button to="/services" size="lg" variant="outline">
              Découvrir les Services
              <ArrowRight className="w-4.5 h-4.5" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
