import { Link, useLocation } from 'react-router-dom';
import { Construction, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section, Container, Eyebrow } from '@/components/ui/Section';

const upcomingPages: Record<string, { title: string; description: string }> = {
  '/etudes-de-cas': {
    title: 'Études de cas',
    description: 'Des exemples concrets de processus automatisés et de résultats obtenus pour nos clients.',
  },
  '/carrieres': {
    title: 'Carrières',
    description: 'Rejoignez une équipe passionnée par l’automatisation et l’IA au service des entreprises.',
  },
  '/apprendre-ia': {
    title: 'Apprendre l’IA',
    description: 'Formations et ressources pour développer votre autonomie dans l’usage de l’IA et du No-Code.',
  },
};

export function UpcomingPage() {
  const location = useLocation();
  const info = upcomingPages[location.pathname];

  return (
    <Section className="flex min-h-[60vh] items-center bg-white pt-12 md:pt-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
            <Construction className="h-8 w-8" strokeWidth={2} />
          </div>
          <Eyebrow>Bientôt disponible</Eyebrow>
          <h1 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900">
            {info?.title ?? 'Cette page arrive'}
          </h1>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">
            {info?.description ??
              'Cette page est en cours de construction. Revenez bientôt pour découvrir son contenu.'}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
            <Button to="/diagnostic" size="lg">
              Présenter mon besoin
              <ArrowRight className="h-4.5 w-4.5" />
            </Button>
            <Button to="/" size="lg" variant="outline">
              <ArrowLeft className="h-4.5 w-4.5" />
              Retour à l’accueil
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
