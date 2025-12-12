'use client';

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import MobileScreenshotsCarousel from '@/components/marketing/MobileScreenshotsCarousel';

const slides = [
  {
    id: 'value',
    label: 'LISA – Le logiciel d’exploitation pour les métiers de l’inspection',
    description: 'Centralisez clients, équipements, interventions et rapports. Traçabilité complète, moins d’administratif, plus de conformité.',
    pills: ['Hébergé en France', 'Traçabilité & historique', 'Pensé inspection & qualité'],
    primary: { label: 'Demander une démo', href: '#contact' },
    secondary: { label: 'Voir les fonctionnalités', href: '#produit' },
  },
  {
    id: 'before-after',
    title: 'Avant / Après',
    before: [
      'Planning éparpillé',
      'Prospections décousues',
      'Rapports Word/Excel',
      'Risque d’oubli / non-conformité',
      'Historique difficile',
    ],
    after: [
      'Planning centralisé',
      'Prospection & suivi commercial connectés',
      'Rapports structurés',
      'Alertes & suivi',
      'Historique accessible en 2 clics',
    ],
  },
  {
    id: 'workflow',
    title: 'Workflow maîtrisé',
    steps: [
      { label: 'Prospection & suivi commercial', icon: '📣' },
      { label: 'Client & site', icon: '🏢' },
      { label: 'Parc équipements', icon: '🧭' },
      { label: 'Planification', icon: '📅' },
      { label: 'Intervention terrain', icon: '🚗' },
      { label: 'Rapport + historique + facturation', icon: '🧾' },
    ],
    footer: 'Chaque action laisse une trace : qui, quand, quoi, version du rapport.',
  },
  {
    id: 'benefits',
    title: 'Bénéfices immédiats',
    cards: [
      {
        title: 'Moins d’administratif',
        copy: 'Modèles, données pré-remplies, génération accélérée.',
      },
      {
        title: 'Conformité & sérénité',
        copy: 'Traçabilité, historique, contrôles cohérents.',
      },
      {
        title: 'Vision dirigeant',
        copy: 'KPI, charge, retards, interventions à venir.',
      },
      {
        title: 'Terrain fluide',
        copy: 'Planning clair, checklists et saisie simple.',
      },
      {
        title: 'Parc maîtrisé',
        copy: 'Équipements, périodicités, statuts, alertes.',
      },
      {
        title: 'Facturation alignée',
        copy: 'Prestation → rapport → facture, sans oublier.',
      },
    ],
  },
  {
    id: 'security',
    title: 'Sécurité & conformité',
    bullets: [
      'Hébergement en France',
      'Contrôle des accès (rôles)',
      'Sauvegardes & reprise',
      'Traçabilité des modifications',
    ],
    note: 'Les exigences exactes dépendent de votre organisation et de votre référentiel.',
  },
];

export default function MarketingSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#010d11] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="relative">
            <MobileScreenshotsCarousel />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#020c11] to-[#01131a] opacity-60"
            aria-hidden
          />
          {/* Container avec hauteur fixe pour le carousel */}
          <div className="relative min-h-[420px] md:min-h-[380px]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                aria-hidden={active !== index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${active === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
              >
                {slide.id === 'value' && (
                  <div className="space-y-4 text-center">
                    <p className="text-xs uppercase tracking-[0.4em] text-[#5eead4]">LISA by LEOVA</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{slide.label}</h2>
                    <p className="text-lg text-white/80 max-w-3xl mx-auto">{slide.description}</p>
                    {slide.primary && slide.secondary && (
                      <div className="flex flex-wrap justify-center gap-4">
                        <a href={slide.primary.href} className="bg-[#2dd4bf] text-[#0f2a2a] px-8 py-3 rounded-full font-semibold transition hover:bg-[#5eead4]">
                          {slide.primary.label}
                        </a>
                        <a href={slide.secondary.href} className="border border-white/40 px-8 py-3 rounded-full font-semibold transition hover:border-white">
                          {slide.secondary.label}
                        </a>
                      </div>
                    )}
                    {slide.pills && (
                      <div className="flex flex-wrap justify-center gap-3 text-sm text-white/80">
                        {slide.pills.map(pill => (
                          <span key={pill} className="px-4 py-2 border border-white/20 rounded-full bg-white/5">
                            {pill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                {slide.id === 'before-after' && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-[#5eead4] mb-4">Avant</p>
                    {slide.before && (
                      <div className="space-y-3">
                        {slide.before.map(item => (
                          <div key={item} className="flex items-center gap-3 p-4 bg-[#061518] border border-white/5 rounded-2xl">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500/20 text-red-400 text-lg">✕</span>
                            <p className="text-white/80">{item}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-[#5eead4] mb-4">Après</p>
                    {slide.after && (
                      <div className="space-y-3">
                        {slide.after.map(item => (
                          <div key={item} className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#022627] to-[#031c21] border border-[#2dd4bf]/50 rounded-2xl">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 text-lg">✓</span>
                            <p className="text-white/80"><strong>{item}</strong></p>
                          </div>
                        ))}
                      </div>
                    )}
                    </div>
                  </div>
                )}
                {slide.id === 'workflow' && slide.steps && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-center">Workflow maîtrisé</h3>
                    <div className="grid gap-4 md:grid-cols-3">
                      {slide.steps.map(step => (
                        <div key={step.label} className="p-5 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-3">
                          <span className="text-3xl">{step.icon}</span>
                          <p className="text-lg font-semibold">{step.label}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-white/70 text-sm">{slide.footer}</p>
                  </div>
                )}
                {slide.id === 'benefits' && slide.cards && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-center">{slide.title}</h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {slide.cards.map(card => (
                        <div key={card.title} className="p-5 bg-[#021518] border border-white/5 rounded-2xl">
                          <p className="text-lg font-semibold mb-2">{card.title}</p>
                          <p className="text-sm text-white/70">{card.copy}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {slide.id === 'security' && slide.bullets && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-center">{slide.title}</h3>
                    <div className="grid gap-3 md:grid-cols-2">
                      {slide.bullets.map(point => (
                        <div key={point} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3">
                          <span className="text-2xl text-[#5eead4]">🔒</span>
                          <p className="text-white/80">{point}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-white/70 text-sm italic">{slide.note}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Navigation en dessous du container */}
          <div className="mt-4 flex items-center justify-between text-white/60">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActive(prev => (prev - 1 + slides.length) % slides.length)}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition hover:bg-white/20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setActive(prev => (prev + 1) % slides.length)}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition hover:bg-white/20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <span
                  key={`dot-${index}`}
                  className={`w-3 h-3 rounded-full transition ${active === index ? 'bg-[#2dd4bf]' : 'bg-white/30'}`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

