'use client';

import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Megaphone,
  Building2,
  Compass,
  CalendarDays,
  Car,
  FileText,
  Clock,
  Shield,
  BarChart3,
  Users,
  Package,
  Receipt,
  Server,
  KeyRound,
  Database,
  History,
  Sparkles,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { useEffect, useState } from 'react';
import MobileScreenshotsCarousel from '@/components/marketing/MobileScreenshotsCarousel';

const slides = [
  {
    id: 'value',
    label: 'LISA – Le logiciel d\'exploitation pour les métiers de l\'inspection',
    description: 'Centralisez clients, équipements, interventions et rapports. Traçabilité complète, moins d\'administratif, plus de conformité.',
    pills: ['Hébergé en France', 'Traçabilité & historique', 'Pensé inspection & qualité'],
    primary: { label: 'Demander une démo', href: '#contact' },
    secondary: { label: 'Voir les fonctionnalités', href: '#produit' },
  },
  {
    id: 'before-after',
    title: 'La transformation digitale de votre activité',
    before: [
      'Planning éparpillé',
      'Prospections décousues',
      'Rapports Word/Excel',
      'Risque d\'oubli / non-conformité',
      'Historique difficile à retrouver',
    ],
    after: [
      'Planning centralisé et partagé',
      'Prospection & suivi commercial connectés',
      'Rapports structurés et conformes',
      'Alertes automatiques & suivi temps réel',
      'Historique accessible en 2 clics',
    ],
  },
  {
    id: 'workflow',
    title: 'Un workflow pensé pour votre métier',
    subtitle: 'De la prospection à la facturation, chaque étape est tracée',
    steps: [
      { label: 'Prospection', sublabel: 'Suivi commercial', Icon: Megaphone },
      { label: 'Client & site', sublabel: 'Gestion centralisée', Icon: Building2 },
      { label: 'Parc équipements', sublabel: 'Inventaire complet', Icon: Compass },
      { label: 'Planification', sublabel: 'Calendrier intelligent', Icon: CalendarDays },
      { label: 'Intervention', sublabel: 'Terrain connecté', Icon: Car },
      { label: 'Rapport & Facture', sublabel: 'Génération automatique', Icon: FileText },
    ],
    footer: 'Chaque action laisse une trace : qui, quand, quoi, version du rapport.',
  },
  {
    id: 'benefits',
    title: 'Des bénéfices immédiats et mesurables',
    cards: [
      {
        title: 'Moins d\'administratif',
        copy: 'Modèles, données pré-remplies, génération accélérée.',
        Icon: Clock,
        color: 'from-cyan-500/20 to-cyan-500/5',
      },
      {
        title: 'Conformité garantie',
        copy: 'Traçabilité, historique, contrôles cohérents.',
        Icon: Shield,
        color: 'from-emerald-500/20 to-emerald-500/5',
      },
      {
        title: 'Vision dirigeant',
        copy: 'KPI, charge, retards, interventions à venir.',
        Icon: BarChart3,
        color: 'from-blue-500/20 to-blue-500/5',
      },
      {
        title: 'Terrain fluide',
        copy: 'Planning clair, checklists et saisie simple.',
        Icon: Users,
        color: 'from-violet-500/20 to-violet-500/5',
      },
      {
        title: 'Parc maîtrisé',
        copy: 'Équipements, périodicités, statuts, alertes.',
        Icon: Package,
        color: 'from-amber-500/20 to-amber-500/5',
      },
      {
        title: 'Facturation alignée',
        copy: 'Prestation → rapport → facture, sans oublier.',
        Icon: Receipt,
        color: 'from-rose-500/20 to-rose-500/5',
      },
    ],
  },
  {
    id: 'security',
    title: 'Sécurité & conformité au cœur du système',
    subtitle: 'Vos données sont protégées selon les standards les plus exigeants',
    bullets: [
      { text: 'Hébergement en France', Icon: Server },
      { text: 'Contrôle des accès par rôles', Icon: KeyRound },
      { text: 'Sauvegardes & reprise d\'activité', Icon: Database },
      { text: 'Traçabilité des modifications', Icon: History },
    ],
    note: 'Les exigences exactes dépendent de votre organisation et de votre référentiel.',
  },
];

export default function MarketingSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#010d11] via-[#051a1f] to-[#010d11] text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#2dd4bf]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-transparent via-[#2dd4bf]/3 to-transparent rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="relative">
          {/* Container avec hauteur fixe pour le carousel - +25% sur mobile */}
          <div className="relative min-h-[600px] md:min-h-[420px]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                aria-hidden={active !== index}
                className={`absolute inset-0 transition-all duration-700 ease-out ${active === index ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98] pointer-events-none'}`}
              >
                {/* Slide 1: Value Proposition */}
                {slide.id === 'value' && (
                  <div className="space-y-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2dd4bf]/20 to-cyan-500/20 border border-[#2dd4bf]/30">
                      <Sparkles className="w-4 h-4 text-[#2dd4bf]" />
                      <span className="text-sm font-medium text-[#5eead4] tracking-wide">LISA by LEOVA</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                        {slide.label}
                      </span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                      {slide.description}
                    </p>
                    {slide.primary && slide.secondary && (
                      <div className="flex flex-wrap justify-center gap-4 pt-2">
                        <a 
                          href={slide.primary.href} 
                          className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#2dd4bf] to-cyan-400 text-[#0f2a2a] px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:shadow-[0_0_40px_rgba(45,212,191,0.4)] hover:scale-105"
                        >
                          {slide.primary.label}
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a 
                          href={slide.secondary.href} 
                          className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-[#2dd4bf]/50 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-white/5 backdrop-blur-sm"
                        >
                          {slide.secondary.label}
                        </a>
                      </div>
                    )}
                    {slide.pills && (
                      <div className="flex flex-wrap justify-center gap-3 pt-4">
                        {slide.pills.map(pill => (
                          <span 
                            key={pill} 
                            className="px-5 py-2.5 text-sm font-medium text-white/80 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm hover:border-[#2dd4bf]/30 hover:bg-[#2dd4bf]/5 transition-all duration-300"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Slide 2: Before/After */}
                {slide.id === 'before-after' && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                        {slide.title}
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                      {/* Before Column */}
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-b from-red-500/20 to-transparent rounded-3xl blur-xl opacity-50" />
                        <div className="relative bg-gradient-to-b from-[#0a1215] to-[#050d10] border border-white/5 rounded-3xl p-6">
                          <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                              <XCircle className="w-5 h-5 text-red-400" />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest text-red-400">Avant</span>
                          </div>
                          {slide.before && (
                            <div className="space-y-3">
                              {slide.before.map((item, i) => (
                                <div 
                                  key={item} 
                                  className="flex items-center gap-3 p-3 bg-red-500/5 border border-red-500/10 rounded-xl transition-all duration-300 hover:bg-red-500/10"
                                  style={{ animationDelay: `${i * 100}ms` }}
                                >
                                  <span className="w-6 h-6 flex items-center justify-center rounded-lg bg-red-500/20 text-red-400 text-xs font-bold">✕</span>
                                  <p className="text-white/70 text-sm">{item}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      {/* After Column */}
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-b from-[#2dd4bf]/20 to-transparent rounded-3xl blur-xl opacity-50" />
                        <div className="relative bg-gradient-to-b from-[#0a1a1c] to-[#050d10] border border-[#2dd4bf]/20 rounded-3xl p-6">
                          <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-[#2dd4bf]/20 flex items-center justify-center">
                              <CheckCircle2 className="w-5 h-5 text-[#2dd4bf]" />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest text-[#2dd4bf]">Après</span>
                          </div>
                          {slide.after && (
                            <div className="space-y-3">
                              {slide.after.map((item, i) => (
                                <div 
                                  key={item} 
                                  className="flex items-center gap-3 p-3 bg-[#2dd4bf]/5 border border-[#2dd4bf]/20 rounded-xl transition-all duration-300 hover:bg-[#2dd4bf]/10 hover:border-[#2dd4bf]/40"
                                  style={{ animationDelay: `${i * 100}ms` }}
                                >
                                  <span className="w-6 h-6 flex items-center justify-center rounded-lg bg-[#2dd4bf]/20 text-[#2dd4bf] text-xs font-bold">✓</span>
                                  <p className="text-white/90 text-sm font-medium">{item}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Slide 3: Workflow */}
                {slide.id === 'workflow' && slide.steps && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                        {slide.title}
                      </h3>
                      <p className="text-white/60">{slide.subtitle}</p>
                    </div>
                    <div className="relative">
                      {/* Connection line */}
                      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2dd4bf]/30 to-transparent -translate-y-1/2" />
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {slide.steps.map((step, i) => (
                          <div 
                            key={step.label} 
                            className="group relative"
                          >
                            <div className="relative bg-gradient-to-b from-[#0a1a1c] to-[#050d10] border border-white/10 hover:border-[#2dd4bf]/40 rounded-2xl p-4 transition-all duration-300 hover:bg-[#0a1a1c] hover:shadow-[0_0_30px_rgba(45,212,191,0.1)]">
                              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#2dd4bf] text-[#0f2a2a] text-xs font-bold flex items-center justify-center shadow-lg shadow-[#2dd4bf]/30">
                                {i + 1}
                              </div>
                              <div className="pt-2 flex flex-col items-center text-center gap-2">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2dd4bf]/20 to-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <step.Icon className="w-6 h-6 text-[#2dd4bf]" />
                                </div>
                                <p className="text-sm font-semibold text-white">{step.label}</p>
                                <p className="text-xs text-white/50">{step.sublabel}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-center text-white/50 text-sm italic">{slide.footer}</p>
                  </div>
                )}

                {/* Slide 4: Benefits */}
                {slide.id === 'benefits' && slide.cards && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                        {slide.title}
                      </h3>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {slide.cards.map((card) => (
                        <div 
                          key={card.title} 
                          className="group relative bg-gradient-to-b from-[#0a1215] to-[#050d10] border border-white/5 hover:border-white/20 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                          <div className="relative flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-white/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                              <card.Icon className="w-6 h-6 text-[#2dd4bf]" />
                            </div>
                            <div>
                              <p className="text-base font-semibold text-white mb-1">{card.title}</p>
                              <p className="text-sm text-white/60 leading-relaxed">{card.copy}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Slide 5: Security */}
                {slide.id === 'security' && slide.bullets && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-400">Sécurité maximale</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                        {slide.title}
                      </h3>
                      <p className="text-white/60">{slide.subtitle}</p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto">
                      {slide.bullets.map((point) => (
                        <div 
                          key={point.text} 
                          className="group flex items-center gap-4 p-5 bg-gradient-to-r from-[#0a1a1c] to-[#050d10] border border-emerald-500/10 hover:border-emerald-500/30 rounded-2xl transition-all duration-300"
                        >
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                            <point.Icon className="w-7 h-7 text-emerald-400" />
                          </div>
                          <p className="text-white/90 font-medium">{point.text}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-white/40 text-sm italic max-w-xl mx-auto">{slide.note}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation modernisée - décalée de 30px supplémentaires */}
          <div className="mt-8 pt-[30px] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActive(prev => (prev - 1 + slides.length) % slides.length)}
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#2dd4bf]/10 hover:border-[#2dd4bf]/30 hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5 text-white/70" />
              </button>
              <button
                type="button"
                onClick={() => setActive(prev => (prev + 1) % slides.length)}
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#2dd4bf]/10 hover:border-[#2dd4bf]/30 hover:scale-105"
              >
                <ChevronRight className="w-5 h-5 text-white/70" />
              </button>
            </div>
            
            {/* Progress indicators */}
            <div className="flex items-center gap-2">
              {slides.map((s, index) => (
                <button
                  key={`dot-${s.id}`}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${active === index ? 'w-8 bg-gradient-to-r from-[#2dd4bf] to-cyan-400' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                  aria-label={`Aller à la slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Screenshots carousel - affiché en dessous sur mobile */}
        <div className="mt-12">
          <MobileScreenshotsCarousel />
        </div>
      </div>
    </section>
  );
}
