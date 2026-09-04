import { useState, useRef, type FormEvent, type ChangeEvent } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Tag,
  Check,
  Mail,
  ShieldCheck,
  AlertCircle,
  Loader2,
  User,
  Building2,
  Briefcase,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section, Container, Eyebrow } from '@/components/ui/Section';
import { products } from '@/lib/productsData';


const pricingPlans = [
  {
    name: 'Starter',
    price: '49 €',
    period: '/mois',
    description: 'Idéal pour les petits projets et les premières automatisations.',
    features: [
      "Jusqu'à 3 scénarios d'automatisation",
      'Intégration avec 1 plateforme',
      'Support par e-mail',
      'Mises à jour incluses',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '99 €',
    period: '/mois',
    description: 'Pour les équipes qui veulent industrialiser leurs workflows.',
    features: [
      "Jusqu'à 10 scénarios d'automatisation",
      'Intégrations multi-plateformes',
      'Support prioritaire',
      'Mises à jour incluses',
      'Accompagnement à la configuration',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Sur devis',
    period: '',
    description: 'Pour les organisations avec des besoins sur mesure.',
    features: [
      "Scénarios d'automatisation illimités",
      'Intégrations sur mesure',
      'Support dédié',
      'SLA garanti',
      'Accompagnement complet',
    ],
    highlighted: false,
  },
];

type ContactForm = {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  role: string;
  problem: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof ContactForm, string>>;

const initialForm: ContactForm = {
  first_name: '',
  last_name: '',
  email: '',
  company: '',
  role: '',
  problem: '',
  consent: false,
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.slug === slug);

  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  if (!product) {
    return <Navigate to="/produits" replace />;
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  function validateForm(f: ContactForm): FormErrors {
    const errs: FormErrors = {};
    if (!f.first_name.trim()) errs.first_name = 'Votre prénom est obligatoire.';
    if (!f.last_name.trim()) errs.last_name = 'Votre nom est obligatoire.';
    if (!f.email.trim()) {
      errs.email = 'Votre e-mail professionnel est obligatoire.';
    } else if (!validateEmail(f.email.trim())) {
      errs.email = 'Veuillez saisir une adresse e-mail valide.';
    }
    if (!f.company.trim()) errs.company = "Le nom de votre entreprise est obligatoire.";
    if (!f.role.trim()) errs.role = 'Votre fonction est obligatoire.';
    if (!f.consent) errs.consent = "Vous devez consentir à être recontacté pour envoyer votre demande.";
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
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
      const problem = form.problem.trim() || `Demande d'information concernant le produit : ${product.name}`;

      const subject = encodeURIComponent(`Demande produit — ${product.name} — ${form.first_name} ${form.last_name}`);
      const body = encodeURIComponent(
        `Prénom : ${form.first_name.trim()}\n` +
        `Nom : ${form.last_name.trim()}\n` +
        `E-mail : ${form.email.trim()}\n` +
        `Entreprise : ${form.company.trim()}\n` +
        `Fonction : ${form.role.trim()}\n` +
        `Besoin : ${problem}\n` +
        `Consentement : ${form.consent ? 'Oui' : 'Non'}`
      );
      window.location.href = `mailto:contact@axagenia.fr?subject=${subject}&body=${body}`;

      navigate('/diagnostic/confirmation');
    } catch {
      setSubmitError(
        "L'envoi de votre demande a échoué. Veuillez réessayer dans quelques instants. Si le problème persiste, vous pouvez nous écrire directement à contact@axagenia.fr."
      );
    } finally {
      setSubmitting(false);
    }
  }

  const fieldClass = (name: keyof ContactForm) =>
    `w-full px-4 py-3 rounded-lg border transition-colors ${
      errors[name]
        ? 'border-error-400 bg-error-50 focus:border-error-500 focus:ring-2 focus:ring-error-200'
        : 'border-ink-200 bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200'
    } focus:outline-none`;

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden bg-ink-950 text-white pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
        <div className="absolute top-0 right-0 h-[500px] w-[500px] glow-primary -translate-y-1/4 translate-x-1/4" aria-hidden="true" />
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-15 pointer-events-none hidden lg:block" aria-hidden="true">
          <img src="/hero-products.webp" alt="" className="h-full w-full object-cover" />
        </div>
        <Container className="relative">
          <Link
            to="/produits"
            className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Tous les produits
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-500/15 px-3 py-1.5 text-xs font-medium text-primary-300 border border-primary-500/20">
              <Tag className="h-3 w-3" />
              {product.category}
            </span>
          </div>

          <div className="flex items-start gap-5">
            <div className="hidden sm:flex shrink-0 items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10">
              <product.icon className="h-8 w-8 text-primary-400" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-tight">
                {product.name}
              </h1>
            </div>
          </div>

          <p className="mt-6 text-lg md:text-xl text-ink-300 leading-relaxed max-w-3xl">
            {product.shortDescription}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} size="lg" className="bg-primary-500 text-ink-950 hover:bg-primary-400">
              Construire un workflow personnalisé
              <ArrowRight className="h-4.5 w-4.5" />
            </Button>
            <Button onClick={() => document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth' })} size="lg" variant="ghost" className="text-white hover:bg-white/10">
              Voir les tarifs
            </Button>
          </div>
        </Container>
      </Section>

      {/* Description */}
      <Section className="bg-white py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Présentation</Eyebrow>
            <p className="mt-4 text-lg text-ink-700 leading-relaxed">
              {product.longDescription}
            </p>
          </div>
        </Container>
      </Section>

      {/* Key Features */}
      <Section className="bg-ink-50 py-12 md:py-16">
        <Container>
          <div className="max-w-2xl mb-10">
            <Eyebrow>Fonctionnalités principales</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900 tracking-tight">
              Capacités et fonctionnalités clés
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-600/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-600 text-white text-sm font-display font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base font-display font-semibold text-ink-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-ink-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="bg-white py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Avantages</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900 tracking-tight">
              Les bénéfices de {product.name}
            </h2>
            <p className="mt-4 text-ink-600 leading-relaxed">
              {product.name} par AXAGENIA simplifie vos opérations en automatisant
              les tâches répétitives. Voici ce que vous gagnez en l'adoptant.
            </p>
            <ul className="mt-8 space-y-4">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" />
                  <span className="text-base text-ink-700 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section className="bg-ink-950 py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {product.stats.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl md:text-5xl font-display font-bold text-primary-400">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-ink-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing */}
      <Section id="tarifs" className="bg-white py-12 md:py-16 scroll-mt-20">
        <Container>
          <div className="max-w-2xl mb-10">
            <Eyebrow>Tarification</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900 tracking-tight">
              Des tarifs adaptés à votre usage
            </h2>
            <p className="mt-4 text-ink-600 leading-relaxed">
              Choisissez l'offre qui correspond à vos besoins. Tous les plans incluent
              les mises à jour et un accès à la documentation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? 'border-primary-500 bg-primary-50 shadow-xl shadow-primary-600/10 lg:scale-105'
                    : 'border-ink-100 bg-white hover:border-primary-200 hover:shadow-lg hover:shadow-primary-600/5'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-primary-600 px-4 py-1 text-xs font-semibold text-white shadow-sm">
                    Le plus choisi
                  </span>
                )}
                <h3 className="text-lg font-display font-semibold text-ink-900">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold text-ink-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-ink-500">{plan.period}</span>
                  )}
                </div>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed">
                  {plan.description}
                </p>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-700">
                      <Check className="h-4.5 w-4.5 text-primary-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    size="md"
                    variant={plan.highlighted ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    Choisir {plan.name}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-ink-50 py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <div className="rounded-2xl bg-gradient-to-br from-primary-700 to-primary-800 p-8 md:p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                Prêt à automatiser avec {product.name} ?
              </h2>
              <p className="mt-4 text-primary-50 max-w-lg mx-auto">
                Le premier diagnostic est gratuit. Nous vérifierons si une intervention
                est pertinente pour votre situation.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button to="/diagnostic" size="lg" className="bg-white text-primary-700 hover:bg-primary-50">
                  Présenter mon besoin
                  <ArrowRight className="h-4.5 w-4.5" />
                </Button>
                <Button to="/services" size="lg" variant="ghost" className="text-white hover:bg-white/10">
                  Découvrir les Services
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Looking for this product? — Contact form */}
      <Section id="contact-form" className="bg-white py-12 md:py-16 scroll-mt-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900 tracking-tight">
                Vous cherchez {product.name} ?
              </h2>
              <p className="mt-4 text-ink-600 leading-relaxed">
                Soumettez vos coordonnées et notre équipe vous recontactera
                rapidement pour échanger sur votre besoin.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-ink-50 border border-ink-100">
                  <ShieldCheck className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-ink-600 leading-relaxed">
                    Votre demande sera analysée en priorité. Aucune mission ne sera
                    engagée sans votre accord explicite.
                  </p>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-ink-50 border border-ink-100">
                  <Mail className="w-5 h-5 text-primary-600 shrink-0" />
                  <a
                    href="mailto:contact@axagenia.fr"
                    className="text-sm text-ink-700 hover:text-primary-700 transition-colors"
                  >
                    contact@axagenia.fr
                  </a>
                </div>
              </div>
            </div>

            <div>
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
                    <label htmlFor="pd-first_name" className="block text-sm font-medium text-ink-800 mb-1.5">
                      Prénom <span className="text-error-500" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
                      <input
                        type="text"
                        id="pd-first_name"
                        name="first_name"
                        value={form.first_name}
                        onChange={handleChange}
                        className={`${fieldClass('first_name')} pl-11`}
                        aria-required="true"
                        aria-invalid={!!errors.first_name}
                        autoComplete="given-name"
                      />
                    </div>
                    {errors.first_name && (
                      <p className="mt-1.5 text-sm text-error-600">{errors.first_name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="pd-last_name" className="block text-sm font-medium text-ink-800 mb-1.5">
                      Nom <span className="text-error-500" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
                      <input
                        type="text"
                        id="pd-last_name"
                        name="last_name"
                        value={form.last_name}
                        onChange={handleChange}
                        className={`${fieldClass('last_name')} pl-11`}
                        aria-required="true"
                        aria-invalid={!!errors.last_name}
                        autoComplete="family-name"
                      />
                    </div>
                    {errors.last_name && (
                      <p className="mt-1.5 text-sm text-error-600">{errors.last_name}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="pd-email" className="block text-sm font-medium text-ink-800 mb-1.5">
                    E-mail professionnel <span className="text-error-500" aria-hidden="true">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
                    <input
                      type="email"
                      id="pd-email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`${fieldClass('email')} pl-11`}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      autoComplete="work-email"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-error-600">{errors.email}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="pd-company" className="block text-sm font-medium text-ink-800 mb-1.5">
                      Entreprise <span className="text-error-500" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
                      <input
                        type="text"
                        id="pd-company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className={`${fieldClass('company')} pl-11`}
                        aria-required="true"
                        aria-invalid={!!errors.company}
                        autoComplete="organization"
                      />
                    </div>
                    {errors.company && (
                      <p className="mt-1.5 text-sm text-error-600">{errors.company}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="pd-role" className="block text-sm font-medium text-ink-800 mb-1.5">
                      Fonction <span className="text-error-500" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
                      <input
                        type="text"
                        id="pd-role"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        className={`${fieldClass('role')} pl-11`}
                        aria-required="true"
                        aria-invalid={!!errors.role}
                        autoComplete="organization-title"
                      />
                    </div>
                    {errors.role && (
                      <p className="mt-1.5 text-sm text-error-600">{errors.role}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="pd-problem" className="block text-sm font-medium text-ink-800 mb-1.5">
                    Message <span className="text-ink-400 text-xs">(optionnel)</span>
                  </label>
                  <textarea
                    id="pd-problem"
                    name="problem"
                    value={form.problem}
                    onChange={handleChange}
                    rows={4}
                    className={fieldClass('problem')}
                    placeholder={`Décrivez votre besoin concernant ${product.name}...`}
                  />
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
                      aria-describedby={errors.consent ? 'pd-consent-error' : undefined}
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
                    <p id="pd-consent-error" className="mt-2 text-sm text-error-600">
                      {errors.consent}
                    </p>
                  )}
                </div>

                <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
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
              </form>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <Section className="bg-ink-50 py-12 md:py-16">
          <Container>
            <h2 className="text-2xl font-display font-bold text-ink-900 mb-8">
              Produits similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/produits/${rel.slug}`}
                  className="group flex flex-col rounded-2xl border border-ink-100 bg-white overflow-hidden transition-all duration-300 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-600/5 hover:-translate-y-1"
                >
                  <div className="relative h-36 overflow-hidden bg-gradient-to-br from-ink-900 to-ink-800">
                    <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <rel.icon className="h-12 w-12 text-primary-400/30 group-hover:text-primary-400/50 transition-colors" strokeWidth={1.5} />
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-primary-300 border border-white/10">
                        {rel.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="text-base font-display font-semibold text-ink-900 leading-snug mb-2 group-hover:text-primary-700 transition-colors line-clamp-1">
                      {rel.name}
                    </h3>
                    <p className="text-sm text-ink-600 leading-relaxed flex-1 line-clamp-2">
                      {rel.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary-700">
                      En savoir plus
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
