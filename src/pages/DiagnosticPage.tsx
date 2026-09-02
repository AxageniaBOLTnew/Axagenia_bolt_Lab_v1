import { useState, useRef, type FormEvent, type ChangeEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  CheckCircle2,
  XCircle,
  Mail,
  ShieldCheck,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section, Container, Eyebrow } from '@/components/ui/Section';
import { supabase } from '@/lib/supabase';
import type { DiagnosticRequest } from '@/lib/types';

type FormState = {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  role: string;
  problem: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  first_name: '',
  last_name: '',
  email: '',
  company: '',
  role: '',
  problem: '',
  consent: false,
};

const qualificationCriteria = [
  'Entreprise française de services B2B',
  'Processus concret et chronophage',
  'Interlocuteur impliqué dans la décision',
  "Volonté réelle d'échanger avec AXAGENIA",
];

const whatYouReceive = [
  'Reformulation du problème',
  'Processus ou étape semblant prioritaire',
  'Principaux points de friction évoqués',
  "Première orientation sur la pertinence d'une automatisation",
  'Prochaine étape éventuellement proposée',
];

const whatIsNotIncluded = [
  'Cartographie complète',
  'Spécifications fonctionnelles ou techniques',
  'Architecture de solution',
  'Estimation garantie des gains',
  "Plan détaillé d'implémentation",
  "Sélection définitive d'outils",
];

const possibleOutcomes = [
  "Proposition d'une mission payante de conception et d'implémentation",
  'Orientation vers une formation',
  "Absence de suite si le besoin n'est pas adapté",
];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.first_name.trim()) errors.first_name = 'Votre prénom est obligatoire.';
  if (!form.last_name.trim()) errors.last_name = 'Votre nom est obligatoire.';
  if (!form.email.trim()) {
    errors.email = 'Votre e-mail professionnel est obligatoire.';
  } else if (!validateEmail(form.email.trim())) {
    errors.email = 'Veuillez saisir une adresse e-mail valide.';
  }
  if (!form.company.trim()) errors.company = 'Le nom de votre entreprise est obligatoire.';
  if (!form.role.trim()) errors.role = 'Votre fonction est obligatoire.';
  if (!form.problem.trim()) {
    errors.problem = 'Veuillez décrire le problème à résoudre.';
  } else if (form.problem.trim().length < 20) {
    errors.problem = 'Veuillez fournir au moins quelques phrases pour décrire votre besoin.';
  }
  if (!form.consent) errors.consent = 'Vous devez consentir à être recontacté pour envoyer votre demande.';
  return errors;
}

export function DiagnosticPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTimeout(() => errorSummaryRef.current?.focus(), 0);
      return;
    }

    setSubmitting(true);
    try {
      const payload: DiagnosticRequest = {
        first_name: form.first_name.trim(),
        last_name: form.last_name.trim(),
        email: form.email.trim(),
        company: form.company.trim(),
        role: form.role.trim(),
        problem: form.problem.trim(),
        consent: form.consent,
      };

      const { error } = await supabase
        .from('diagnostic_requests')
        .insert(payload);

      if (error) throw error;

      navigate('/diagnostic/confirmation');
    } catch {
      setSubmitError(
        "L'envoi de votre demande a échoué. Veuillez réessayer dans quelques instants. Si le problème persiste, vous pouvez nous écrire directement à contact@axagenia.fr."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass = (name: keyof FormState) =>
    `w-full px-4 py-3 rounded-lg border transition-colors ${
      errors[name]
        ? 'border-error-400 bg-error-50 focus:border-error-500 focus:ring-2 focus:ring-error-200'
        : 'border-ink-200 bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200'
    } focus:outline-none`;

  return (
    <>
      {/* Section 1: Présentation */}
      <Section className="bg-white pt-12 md:pt-16 pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none hidden lg:block" aria-hidden="true">
          <img src="/hero-diagnostic.webp" alt="" className="h-full w-full object-cover" />
        </div>
        <Container className="relative">
          <div className="max-w-3xl">
            <Eyebrow>Premier diagnostic gratuit</Eyebrow>
            <h1 className="mt-4 text-4xl md:text-5xl font-display font-bold text-ink-900 tracking-tight">
              Présentez votre besoin
            </h1>
            <p className="mt-6 text-lg text-ink-600 leading-relaxed">
              Le premier diagnostic est gratuit. Il permet de comprendre votre besoin
              et de déterminer si une intervention est pertinente. Il ne s'agit pas
              d'un audit complet gratuit.
            </p>
          </div>
        </Container>
      </Section>

      {/* Section 2: Public concerné et critères de qualification */}
      <Section className="bg-ink-50 py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-display font-semibold text-ink-900 mb-4">
                Public concerné
              </h2>
              <p className="text-ink-600 leading-relaxed mb-5">
                Ce diagnostic s'adresse aux PME françaises de services B2B ayant un
                processus concret et chronophage.
              </p>
              <h3 className="text-sm font-semibold text-ink-900 uppercase tracking-wider mb-3">
                Critères de qualification
              </h3>
              <ul className="space-y-2.5">
                {qualificationCriteria.map((criterion) => (
                  <li key={criterion} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <CheckCircle2 className="w-4.5 h-4.5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-white border border-ink-100">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-primary-600" />
                <h2 className="text-base font-semibold text-ink-900">Durée indicative</h2>
              </div>
              <p className="text-ink-600">
                Environ 30 minutes pour l'échange initial, si votre demande est qualifiée.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 3: Ce que le prospect peut recevoir */}
      <Section className="bg-white py-16">
        <Container>
          <h2 className="text-xl font-display font-semibold text-ink-900 mb-4">
            Ce que vous pouvez recevoir
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-12">
            {whatYouReceive.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                <CheckCircle2 className="w-4.5 h-4.5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-display font-semibold text-ink-900 mb-4">
            Ce qui n'est pas inclus
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-12">
            {whatIsNotIncluded.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-500">
                <XCircle className="w-4.5 h-4.5 text-ink-300 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-display font-semibold text-ink-900 mb-4">
            Suites possibles
          </h2>
          <p className="text-ink-600 mb-4">
            Après le diagnostic, plusieurs suites sont possibles, y compris l'absence de suite :
          </p>
          <ul className="space-y-2.5">
            {possibleOutcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2.5 text-sm text-ink-700">
                <ArrowRight className="w-4.5 h-4.5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Section 7: Synthèse de réassurance */}
      <Section className="bg-ink-50 py-16">
        <Container>
          <div className="p-6 rounded-xl bg-white border border-primary-100 max-w-3xl">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-base font-semibold text-ink-900 mb-2">Réassurance</h2>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Votre demande sera analysée en priorité. Si elle est qualifiée, nous
                  vous proposerons un échange d'environ 30 minutes. Aucune mission ne
                  sera engagée sans votre accord explicite. Vous pouvez rester sans
                  suite à tout moment.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 8: Formulaire */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-display font-bold text-ink-900 mb-2">
              Formulaire de demande
            </h2>
            <p className="text-ink-600 mb-8">
              Tous les champs sont obligatoires. Vos informations ne seront utilisées
              que pour analyser votre demande et, le cas échéant, vous recontacter.
            </p>

            {submitError && (
              <div
                className="mb-6 p-4 rounded-lg bg-error-50 border border-error-200 text-error-700 text-sm"
                role="alert"
              >
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{submitError}</span>
                </div>
              </div>
            )}

            {Object.keys(errors).length > 0 && (
              <div
                ref={errorSummaryRef}
                tabIndex={-1}
                className="mb-6 p-4 rounded-lg bg-error-50 border border-error-200 focus:outline-none focus:ring-2 focus:ring-error-300"
                role="alert"
                aria-live="assertive"
              >
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-error-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-error-700 mb-1">
                      Veuillez corriger les erreurs suivantes :
                    </p>
                    <ul className="text-sm text-error-600 list-disc list-inside space-y-0.5">
                      {Object.entries(errors).map(([field, msg]) => (
                        <li key={field}>{msg}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-ink-800 mb-1.5">
                    Prénom <span className="text-error-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                    className={fieldClass('first_name')}
                    aria-required="true"
                    aria-invalid={!!errors.first_name}
                    aria-describedby={errors.first_name ? 'first_name-error' : undefined}
                    autoComplete="given-name"
                  />
                  {errors.first_name && (
                    <p id="first_name-error" className="mt-1.5 text-sm text-error-600">
                      {errors.first_name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium text-ink-800 mb-1.5">
                    Nom <span className="text-error-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                    className={fieldClass('last_name')}
                    aria-required="true"
                    aria-invalid={!!errors.last_name}
                    aria-describedby={errors.last_name ? 'last_name-error' : undefined}
                    autoComplete="family-name"
                  />
                  {errors.last_name && (
                    <p id="last_name-error" className="mt-1.5 text-sm text-error-600">
                      {errors.last_name}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink-800 mb-1.5">
                  E-mail professionnel <span className="text-error-500" aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={fieldClass('email')}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  autoComplete="work-email"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-sm text-error-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-ink-800 mb-1.5">
                    Entreprise <span className="text-error-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className={fieldClass('company')}
                    aria-required="true"
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? 'company-error' : undefined}
                    autoComplete="organization"
                  />
                  {errors.company && (
                    <p id="company-error" className="mt-1.5 text-sm text-error-600">
                      {errors.company}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-ink-800 mb-1.5">
                    Fonction <span className="text-error-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className={fieldClass('role')}
                    aria-required="true"
                    aria-invalid={!!errors.role}
                    aria-describedby={errors.role ? 'role-error' : undefined}
                    autoComplete="organization-title"
                  />
                  {errors.role && (
                    <p id="role-error" className="mt-1.5 text-sm text-error-600">
                      {errors.role}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="problem" className="block text-sm font-medium text-ink-800 mb-1.5">
                  Problème à résoudre <span className="text-error-500" aria-hidden="true">*</span>
                </label>
                <p className="text-sm text-ink-500 mb-2">
                  Décrivez en quelques phrases le processus chronophage que vous souhaitez
                  simplifier ou automatiser.
                </p>
                <textarea
                  id="problem"
                  name="problem"
                  value={form.problem}
                  onChange={handleChange}
                  rows={5}
                  className={fieldClass('problem')}
                  aria-required="true"
                  aria-invalid={!!errors.problem}
                  aria-describedby={errors.problem ? 'problem-error' : undefined}
                />
                {errors.problem && (
                  <p id="problem-error" className="mt-1.5 text-sm text-error-600">
                    {errors.problem}
                  </p>
                )}
              </div>

              <div className="p-4 rounded-lg bg-ink-50 border border-ink-100">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-0.5 w-5 h-5 rounded border-ink-300 text-primary-600 focus:ring-primary-500 focus:ring-offset-0"
                    aria-required="true"
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? 'consent-error' : undefined}
                  />
                  <span className="text-sm text-ink-700 leading-relaxed">
                    J'accepte d'être recontacté par AXAGENIA au sujet de ma demande.
                    Je peux consulter la{' '}
                    <Link
                      to="/politique-confidentialite"
                      className="text-primary-700 underline hover:text-primary-800"
                      target="_blank"
                      rel="noopener"
                    >
                      politique de confidentialité
                    </Link>
                    .
                  </span>
                </label>
                {errors.consent && (
                  <p id="consent-error" className="mt-2 text-sm text-error-600">
                    {errors.consent}
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button type="submit" size="lg" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 className="w-4.5 h-4.5 animate-spin" />
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      Envoyer ma demande
                      <ArrowRight className="w-4.5 h-4.5" />
                    </>
                  )}
                </Button>
                <Button to="/services" size="lg" variant="outline">
                  <ArrowLeft className="w-4.5 h-4.5" />
                  Revenir aux Services
                </Button>
              </div>
            </form>
          </div>
        </Container>
      </Section>

      {/* Section 9: Autres coordonnées */}
      <Section className="bg-ink-50 py-16">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-xl font-display font-semibold text-ink-900 mb-4">
              Autres coordonnées de contact
            </h2>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-ink-100">
              <Mail className="w-5 h-5 text-primary-600" />
              <a
                href="mailto:contact@axagenia.fr"
                className="text-ink-700 hover:text-primary-700 transition-colors"
              >
                contact@axagenia.fr
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 10: Rappel données */}
      <Section className="bg-white py-16">
        <Container>
          <div className="max-w-3xl p-5 rounded-lg bg-ink-50 border border-ink-100">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-ink-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-ink-600 leading-relaxed">
                Vos données sont utilisées uniquement pour analyser votre demande et,
                le cas échéant, vous recontacter. Pour en savoir plus, consultez notre{' '}
                <Link to="/politique-confidentialite" className="text-primary-700 underline hover:text-primary-800">
                  politique de confidentialité
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
