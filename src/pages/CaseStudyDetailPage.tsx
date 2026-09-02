import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Calendar, Clock, Tag, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section, Container, Eyebrow } from '@/components/ui/Section';
import { caseStudies } from '@/lib/caseStudiesData';

export function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return <Navigate to="/etudes-de-cas" replace />;
  }

  const relatedStudies = caseStudies
    .filter((s) => s.category === study.category && s.id !== study.id)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden bg-ink-950 text-white pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
        <div className="absolute top-0 right-0 h-[500px] w-[500px] glow-primary -translate-y-1/4 translate-x-1/4" aria-hidden="true" />
        <Container className="relative">
          <Link
            to="/etudes-de-cas"
            className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Toutes les études de cas
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-500/15 px-3 py-1.5 text-xs font-medium text-primary-300 border border-primary-500/20">
              <Tag className="h-3 w-3" />
              {study.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-ink-400">
              <Calendar className="h-3.5 w-3.5" />
              {study.date}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-ink-400">
              <Clock className="h-3.5 w-3.5" />
              {study.readTime} de lecture
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white max-w-4xl leading-tight">
            {study.title}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-ink-300 leading-relaxed max-w-3xl">
            {study.heroSubtitle}
          </p>
        </Container>
      </Section>

      {/* Article body */}
      <Section className="bg-white py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            {/* Excerpt as intro */}
            <p className="text-xl text-ink-700 leading-relaxed font-medium border-l-4 border-primary-500 pl-6 mb-12">
              {study.excerpt}
            </p>

            {/* Sections */}
            <div className="space-y-10">
              {study.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-display font-semibold text-ink-900 mb-4">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((para, pIndex) => (
                    <p key={pIndex} className="text-base text-ink-700 leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                  {section.listItems && (
                    <ul className="mt-4 space-y-3">
                      {section.listItems.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-base text-ink-700">
                          <CheckCircle2 className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <div className="mt-12 rounded-2xl bg-ink-50 border border-ink-100 p-8">
              <Eyebrow>En conclusion</Eyebrow>
              <p className="mt-3 text-lg text-ink-800 leading-relaxed">{study.conclusion}</p>
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md bg-ink-50 px-3 py-1.5 text-sm font-medium text-ink-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary-700 to-primary-800 p-8 md:p-10 text-center">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                Un processus similaire à automatiser ?
              </h3>
              <p className="mt-3 text-primary-50 max-w-lg mx-auto">
                Le premier diagnostic est gratuit. Nous vérifierons si une intervention est
                pertinente pour votre situation.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
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

      {/* Related studies */}
      {relatedStudies.length > 0 && (
        <Section className="bg-ink-50 py-12 md:py-16">
          <Container>
            <h2 className="text-2xl font-display font-bold text-ink-900 mb-8">
              Études de cas similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedStudies.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/etudes-de-cas/${rel.slug}`}
                  className="group flex flex-col rounded-2xl border border-ink-100 bg-white overflow-hidden transition-all duration-300 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-600/5 hover:-translate-y-1"
                >
                  <div className="relative h-36 overflow-hidden bg-gradient-to-br from-ink-900 to-ink-800">
                    <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <rel.icon className="h-12 w-12 text-primary-400/30" strokeWidth={1.5} />
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-primary-300 border border-white/10">
                        {rel.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center gap-2 text-xs text-ink-400 mb-2">
                      <Calendar className="h-3.5 w-3.5" />
                      <time>{rel.date}</time>
                    </div>
                    <h3 className="text-base font-display font-semibold text-ink-900 leading-snug mb-2 group-hover:text-primary-700 transition-colors line-clamp-2">
                      {rel.title}
                    </h3>
                    <p className="text-sm text-ink-600 leading-relaxed flex-1 line-clamp-2">
                      {rel.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary-700">
                      Lire l'étude
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
