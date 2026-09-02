import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section, Container, Eyebrow } from '@/components/ui/Section';
import { categories, caseStudies } from '@/lib/caseStudiesData';

export function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudies = useMemo(() => {
    return caseStudies.filter((study) => {
      const matchesCategory =
        activeCategory === 'Tous' || study.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden bg-ink-950 text-white pt-12 md:pt-16 pb-16 md:pb-20">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
        <div className="absolute top-0 right-0 h-[500px] w-[500px] glow-primary -translate-y-1/4 translate-x-1/4" aria-hidden="true" />
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 pointer-events-none hidden lg:block" aria-hidden="true">
          <img src="/hero-case-studies.webp" alt="" className="h-full w-full object-cover" />
        </div>
        <Container className="relative">
          <div className="max-w-3xl">
            <Eyebrow className="text-primary-400">Études de cas</Eyebrow>
            <h1 className="mt-4 text-4xl md:text-5xl font-display font-bold tracking-tight text-white">
              Des solutions concrètes pour les processus de demain
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink-300 leading-relaxed">
              Nous concevons des écosystèmes d'automatisation avec des outils No-Code et de l'IA
              lorsqu'elle apporte une utilité réelle. Voici des exemples concrets de processus
              automatisés et de résultats obtenus.
            </p>
          </div>
        </Container>
      </Section>

      {/* Filtres et recherche */}
      <Section className="bg-ink-50 py-10 md:py-12">
        <Container>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-ink-400" />
                <input
                  type="text"
                  placeholder="Rechercher une étude de cas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-ink-200 bg-white py-3 pl-11 pr-4 text-sm text-ink-800 placeholder:text-ink-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none"
                  aria-label="Rechercher une étude de cas"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-ink-500">
                <span className="font-medium">{filteredStudies.length}</span>
                <span>{filteredStudies.length > 1 ? 'études' : 'étude'}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrer par catégorie">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-primary-600 text-white shadow-sm shadow-primary-600/20'
                      : 'bg-white text-ink-600 border border-ink-200 hover:border-primary-300 hover:text-primary-700'
                  }`}
                >
                  {cat === 'Tous' && <Tag className="h-3.5 w-3.5" />}
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Grille d'articles */}
      <Section className="bg-white py-12 md:py-16">
        <Container>
          {filteredStudies.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-ink-500">
                Aucune étude de cas ne correspond à votre recherche.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('Tous');
                }}
                className="mt-4 text-sm font-medium text-primary-700 hover:text-primary-800"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStudies.map((study) => (
                <Link
                  key={study.id}
                  to={`/etudes-de-cas/${study.slug}`}
                  className="group flex flex-col rounded-2xl border border-ink-100 bg-white overflow-hidden transition-all duration-300 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-600/5 hover:-translate-y-1"
                  aria-label={`Lire l'étude de cas : ${study.title}`}
                >
                  <div className="relative h-44 overflow-hidden bg-gradient-to-br from-ink-900 to-ink-800">
                    <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <study.icon className="h-16 w-16 text-primary-400/30 group-hover:text-primary-400/50 transition-colors" strokeWidth={1.5} />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-primary-300 border border-white/10">
                        <Tag className="h-3 w-3" />
                        {study.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-xs text-ink-400">
                      <Clock className="h-3.5 w-3.5" />
                      {study.readTime}
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-2 text-xs text-ink-400 mb-3">
                      <Calendar className="h-3.5 w-3.5" />
                      <time>{study.date}</time>
                    </div>

                    <h2 className="text-lg font-display font-semibold text-ink-900 leading-snug mb-3 group-hover:text-primary-700 transition-colors">
                      {study.title}
                    </h2>

                    <p className="text-sm text-ink-600 leading-relaxed mb-5 flex-1 line-clamp-3">
                      {study.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-ink-100">
                      <div className="flex flex-wrap gap-1.5">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-md bg-ink-50 px-2 py-1 text-xs font-medium text-ink-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-200 shrink-0">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* CTA final */}
      <Section className="bg-ink-50 py-16">
        <Container>
          <div className="rounded-2xl bg-gradient-to-br from-primary-700 to-primary-800 px-8 py-12 md:px-12 md:py-14 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
              Un processus à automatiser ? Présentez-le nous.
            </h2>
            <p className="mt-4 text-primary-50 max-w-xl mx-auto">
              Le premier diagnostic est gratuit. Nous vérifierons si une intervention est
              pertinente pour votre situation.
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
        </Container>
      </Section>
    </>
  );
}
