import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section, Container } from '@/components/ui/Section';

export function LegalNoticesPage() {
  return (
    <Section className="bg-white pt-12 md:pt-16 pb-20">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-ink-900 mb-8">
            Mentions légales
          </h1>

          <div className="space-y-8 text-ink-700">
            <div>
              <h2 className="text-xl font-display font-semibold text-ink-900 mb-3">
                Éditeur du site
              </h2>
              <p>
                Le site axagenia.fr est édité par AXAGENIA, dont les informations
                administratives complètes (raison sociale, forme juridique, adresse,
                SIREN/SIRET) seront publiées avant la mise en production.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-semibold text-ink-900 mb-3">
                Responsable de publication
              </h2>
              <p>
                Le responsable de publication sera identifié avant la mise en production.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-semibold text-ink-900 mb-3">
                Coordonnées
              </h2>
              <p>
                Pour toute question :{' '}
                <a
                  href="mailto:contact@axagenia.fr"
                  className="text-primary-700 underline hover:text-primary-800"
                >
                  contact@axagenia.fr
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-semibold text-ink-900 mb-3">
                Immatriculation
              </h2>
              <p>
                Les informations d'immatriculation seront complétées avant la publication.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-semibold text-ink-900 mb-3">
                Hébergeur
              </h2>
              <p>
                L'identité et les coordonnées définitives de l'hébergeur seront publiées
                avant la mise en production.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-semibold text-ink-900 mb-3">
                Propriété intellectuelle
              </h2>
              <p>
                L'ensemble des contenus présents sur ce site (textes, logo, éléments
                graphiques) est la propriété d'AXAGENIA, sauf mention contraire. Toute
                reproduction, représentation ou diffusion, totale ou partielle, sans
                autorisation écrite préalable, est interdite.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-semibold text-ink-900 mb-3">
                Autres mentions juridiques
              </h2>
              <p>
                Toute mention juridique requise non listée ci-dessus sera ajoutée avant
                la publication du site. Aucune donnée administrative provisoire ou
                emplacement « à venir » n'est publié sur le site en ligne.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <Button to="/" variant="outline" size="md">
              <ArrowLeft className="w-4 h-4" />
              Retour à l'Accueil
            </Button>
            <Button to="/politique-confidentialite" variant="ghost" size="md">
              Politique de confidentialité
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
