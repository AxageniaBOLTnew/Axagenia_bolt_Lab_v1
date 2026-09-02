import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section, Container, Eyebrow } from '@/components/ui/Section';
import { products } from '@/lib/productsData';

const categories = ['Tous', 'Domains', 'Platform'] as const;
type Category = (typeof categories)[number];

export function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'Tous' || product.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const hasFilters = activeCategory !== 'Tous' || searchQuery !== '';

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden bg-ink-950 text-white pt-12 md:pt-16 pb-16 md:pb-20">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
        <div className="absolute top-0 right-0 h-[500px] w-[500px] glow-primary -translate-y-1/4 translate-x-1/4" aria-hidden="true" />
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 pointer-events-none hidden lg:block" aria-hidden="true">
          <img src="/hero-products.webp" alt="" className="h-full w-full object-cover" />
        </div>
        <Container className="relative">
          <div className="max-w-3xl">
            <Eyebrow className="text-primary-400">Nos produits</Eyebrow>
            <h1 className="mt-4 text-4xl md:text-5xl font-display font-bold tracking-tight text-white">
              Des solutions d'automatisation prêtes à l'emploi
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink-300 leading-relaxed">
              Découvrez nos produits conçus pour simplifier vos opérations, améliorer
              votre efficacité et réduire vos coûts. Des outils qui transforment et
              font grandir votre entreprise.
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
                  placeholder="Rechercher un produit..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-ink-200 bg-white py-3 pl-11 pr-4 text-sm text-ink-800 placeholder:text-ink-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none"
                  aria-label="Rechercher un produit"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-ink-500">
                <span className="font-medium">{filteredProducts.length}</span>
                <span>{filteredProducts.length > 1 ? 'produits' : 'produit'}</span>
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
                  {cat === 'Tous' && <Filter className="h-3.5 w-3.5" />}
                  {cat === 'Tous' ? 'Tous les produits' : cat}
                </button>
              ))}
              {hasFilters && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('Tous');
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-ink-500 hover:text-ink-700 transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                  Réinitialiser
                </button>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Grille de produits */}
      <Section className="bg-white py-12 md:py-16">
        <Container>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-ink-500">
                Aucun produit ne correspond à votre recherche.
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
              {filteredProducts.map((product) => (
                <Link
                  key={product.slug}
                  to={`/produits/${product.slug}`}
                  className="group flex flex-col rounded-2xl border border-ink-100 bg-white overflow-hidden transition-all duration-300 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-600/5 hover:-translate-y-1"
                >
                  <div className="relative h-44 overflow-hidden bg-gradient-to-br from-ink-900 to-ink-800">
                    <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <product.icon
                        className="h-16 w-16 text-primary-400/30 group-hover:text-primary-400/50 transition-colors"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-primary-300 border border-white/10">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <h2 className="text-lg font-display font-semibold text-ink-900 leading-snug mb-3 group-hover:text-primary-700 transition-colors">
                      {product.name}
                    </h2>

                    <p className="text-sm text-ink-600 leading-relaxed mb-5 flex-1 line-clamp-4">
                      {product.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md bg-ink-50 px-2 py-1 text-xs font-medium text-ink-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-ink-100">
                      <span className="flex items-center gap-1.5 text-sm font-medium text-primary-700 group-hover:gap-2.5 transition-all">
                        En savoir plus
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
              Un produit adapté à votre besoin ?
            </h2>
            <p className="mt-4 text-primary-50 max-w-xl mx-auto">
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
        </Container>
      </Section>
    </>
  );
}
