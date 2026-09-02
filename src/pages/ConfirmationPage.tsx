import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section, Container } from '@/components/ui/Section';

export function ConfirmationPage() {
  const navigate = useNavigate();
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    document.title = 'Confirmation de votre demande — AXAGENIA';
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    headingRef.current?.focus();
    return () => {
      document.head.removeChild(meta);
      document.title = 'AXAGENIA — Automatisation sans détour';
    };
  }, []);

  return (
    <Section className="bg-white min-h-[60vh] flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" strokeWidth={2} />
          </div>
          <h1
            ref={headingRef}
            tabIndex={-1}
            className="text-3xl md:text-4xl font-display font-bold text-ink-900 focus:outline-none"
          >
            Votre demande a bien été reçue
          </h1>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">
            Nous avons bien reçu votre demande de diagnostic. Voici ce qui se passe
            maintenant.
          </p>

          <div className="mt-10 text-left space-y-5">
            <div className="p-5 rounded-xl bg-ink-50 border border-ink-100">
              <h2 className="text-base font-semibold text-ink-900 mb-2">
                Analyse prochaine de votre demande
              </h2>
              <p className="text-sm text-ink-600 leading-relaxed">
                Nous allons examiner votre demande pour vérifier son adéquation avec
                nos compétences et déterminer la prochaine étape pertinente.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-ink-50 border border-ink-100">
              <h2 className="text-base font-semibold text-ink-900 mb-2">
                Possibilité d'un échange si votre demande est qualifiée
              </h2>
              <p className="text-sm text-ink-600 leading-relaxed">
                Si votre demande est qualifiée, nous vous proposerons un échange
                d'environ 30 minutes pour approfondir votre besoin.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-accent-50 border border-accent-100">
              <h2 className="text-base font-semibold text-ink-900 mb-2">
                Absence de garantie de mission ou de délai
              </h2>
              <p className="text-sm text-ink-600 leading-relaxed">
                La réception de votre demande ne garantit pas une mission ni un délai
                de réponse. Si votre besoin n'est pas adapté à nos compétences, nous
                vous le dirons honnêtement.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/" size="lg" variant="outline">
              <Home className="w-4.5 h-4.5" />
              Retour à l'Accueil
            </Button>
            <Button to="/services" size="lg">
              Découvrir les Services
              <ArrowRight className="w-4.5 h-4.5" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
