import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section, Container } from '@/components/ui/Section';

export function PrivacyPolicyPage() {
  return (
    <Section className="bg-white pt-12 md:pt-16 pb-20">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-ink-900 mb-8">
            Politique de confidentialité
          </h1>

          <div className="space-y-8 text-ink-700">
            <div>
              <h2 className="text-xl font-display font-semibold text-ink-900 mb-3">
                1. Responsable du traitement
              </h2>
              <p>
                Le responsable du traitement des données est AXAGENIA. Les coordonnées
                complètes du responsable seront publiées avant la mise en production.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-semibold text-ink-900 mb-3">
                2. Données collectées
              </h2>
              <p className="mb-3">Le formulaire de diagnostic collecte uniquement les données suivantes :</p>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li>Nom</li>
                <li>Prénom</li>
                <li>E-mail professionnel</li>
                <li>Entreprise</li>
                <li>Fonction</li>
                <li>Problème à résoudre (description libre)</li>
                <li>Consentement à être recontacté</li>
              </ul>
              <p className="mt-3">
                Ne sont pas collectés : téléphone, budget, pièce jointe ou donnée sensible.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-semibold text-ink-900 mb-3">
                3. Finalités et base juridique
              </h2>
              <p>
                Les données collectées servent à analyser votre demande de diagnostic
                et, le cas échéant, à vous recontacter pour proposer un échange. La base
                juridique est votre consentement explicite, donné par la case à cocher
                dans le formulaire.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-semibold text-ink-900 mb-3">
                4. Destinataires autorisés
              </h2>
              <p>
                L'accès aux demandes est limité aux seules personnes autorisées au sein
                d'AXAGENIA. Aucune donnée n'est transmise à des tiers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-semibold text-ink-900 mb-3">
                5. Absence de stockage supplémentaire dans le site
              </h2>
              <p>
                Les demandes sont transmises à une adresse professionnelle dédiée avec
                un accès limité. Aucun stockage supplémentaire des demandes n'est
                effectué dans le site au-delà de ce qui est nécessaire au traitement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-semibold text-ink-900 mb-3">
                6. Durée de conservation
              </h2>
              <p>
                La durée de conservation des demandes sera définie et publiée avant la
                mise en production. La justification de cette durée sera également
                documentée.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-semibold text-ink-900 mb-3">
                7. Sécurité et transmission
              </h2>
              <p>
                Les échanges sont chiffrés par HTTPS. Les données sont transmises de
                manière sécurisée. Les messages d'erreur ne révèlent aucune donnée
                sensible ni détail technique exploitable.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-semibold text-ink-900 mb-3">
                8. Droits des personnes
              </h2>
              <p>
                Vous disposez des droits suivants sur vos données : accès, rectification,
                effacement, opposition, limitation du traitement et portabilité. Pour
                exercer ces droits, vous pouvez nous contacter à{' '}
                <a
                  href="mailto:contact@axagenia.fr"
                  className="text-primary-700 underline hover:text-primary-800"
                >
                  contact@axagenia.fr
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-semibold text-ink-900 mb-3">
                9. Modalités de contact
              </h2>
              <p>
                Pour toute question relative au traitement de vos données, vous pouvez
                nous écrire à{' '}
                <a
                  href="mailto:contact@axagenia.fr"
                  className="text-primary-700 underline hover:text-primary-800"
                >
                  contact@axagenia.fr
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-semibold text-ink-900 mb-3">
                10. Évolutions de la politique
              </h2>
              <p>
                Cette politique de confidentialité peut évoluer. Les modifications
                seront publiées sur cette page. La date de dernière mise à jour sera
                indiquée.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-ink-50 border border-ink-100">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-ink-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-ink-500">
                  Les éléments non encore définis (durée de conservation précise,
                  procédure d'exercice des droits détaillée) seront complétés avant
                  l'activation du formulaire en production.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <Button to="/diagnostic" variant="outline" size="md">
              <ArrowLeft className="w-4 h-4" />
              Retour au Diagnostic
            </Button>
            <Button to="/mentions-legales" variant="ghost" size="md">
              Mentions légales
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
