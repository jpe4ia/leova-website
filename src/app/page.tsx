'use client';

import { useState, useEffect } from 'react';
import {
  MockupDashboardFinancier,
  MockupFacturation,
  MockupDashboardCommercial,
  MockupBaseClient,
  MockupPlanification,
  MockupFeuilleRoute,
  MockupSuiviActivite,
  MockupAvisIntervention,
  MockupDepotRapport,
  MockupAdminUtilisateurs,
  MockupAdminRoles,
  MockupAdminModeles,
  MockupAdminNC,
  MockupAdminTemplates,
  MockupAdminSync,
  MockupPortailClient,
} from '@/components/mockups';
import { 
  Shield, Users, Zap, BarChart3, FileText, Calendar, 
  CheckCircle, ArrowRight, Menu, X, Mail, Phone, MapPin,
  Monitor, Smartphone, Cloud, Lock, Headphones, TrendingUp,
  Building2, Wrench, ClipboardCheck, Euro, Play, ChevronDown, Loader2, RefreshCw,
  ChevronLeft, ChevronRight
} from 'lucide-react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', message: '' });
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null);
  const [showSubscribeModal, setShowSubscribeModal] = useState<string | null>(null);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeCompany, setSubscribeCompany] = useState('');
  const [activeFeature, setActiveFeature] = useState(0);
  const [mockupIndex, setMockupIndex] = useState(0);
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  
  // Messages percutants pour le Hero
  const heroSlides = [
    {
      badge: "Solution SaaS pour professionnels de l'inspection",
      title: <>Le logiciel métier qui<br /><span className="text-[#2dd4bf]">simplifie</span> vos inspections</>,
      subtitle: "Centralisez vos équipements, planifiez vos interventions, générez vos rapports et suivez votre activité.",
      highlight: "Une solution complète, pensée pour votre métier."
    },
    {
      badge: "Conforme ISO/CEI 17020",
      title: <>Traçabilité <span className="text-[#2dd4bf]">parfaite</span><br />pour votre accréditation</>,
      subtitle: "Développé avec des organismes accrédités COFRAC pour répondre aux exigences les plus strictes.",
      highlight: "Audit trail complet, historique des modifications."
    },
    {
      badge: "Gain de temps garanti",
      title: <>Divisez par <span className="text-[#2dd4bf]">2</span><br />votre temps administratif</>,
      subtitle: "Rapports automatiques, facturation intégrée, synchronisation en temps réel.",
      highlight: "Plus de temps sur le terrain, moins au bureau."
    },
    {
      badge: "100% Cloud & Mobile",
      title: <>Travaillez<br /><span className="text-[#2dd4bf]">où que vous soyez</span></>,
      subtitle: "Application web et mobile, accessible depuis n'importe quel appareil, données synchronisées.",
      highlight: "Vos techniciens autonomes sur le terrain."
    },
  ];
  
  // Définition des mockups par tab
  const mockupsByTab: { [key: number]: { label: string; id: string }[] } = {
    0: [ // Financier
      { label: '💰 Dashboard Financier', id: 'financier' },
      { label: '📄 Facturation', id: 'facturation' },
    ],
    1: [ // Commercial
      { label: '📊 Dashboard Commercial', id: 'commercial' },
      { label: '🏢 Base Client', id: 'baseclient' },
    ],
    2: [ // Planification
      { label: '📅 Planification', id: 'planification' },
      { label: '🗺️ Feuille de Route', id: 'feuilleroute' },
    ],
    3: [ // Suivi Activité
      { label: '📋 Suivi Activité', id: 'suiviactivite' },
      { label: '📧 Avis Intervention', id: 'avisintervention' },
      { label: '📄 Dépôt Rapport', id: 'depotrapport' },
    ],
    4: [ // Administration
      { label: '👥 Utilisateurs', id: 'utilisateurs' },
      { label: '🛡️ Rôles', id: 'roles' },
      { label: '📄 Modèles Rapports', id: 'modeles' },
      { label: '⚠️ Non-conformités', id: 'nc' },
      { label: '📧 Templates Avis', id: 'templates' },
      { label: '🔗 Intégrations', id: 'integrations' },
    ],
    5: [ // Portail Client
      { label: '🌐 Portail Client', id: 'portailclient' },
    ],
  };
  
  const currentMockups = mockupsByTab[activeFeature] || [];
  const totalMockups = currentMockups.length;

  // Reset mockup index quand on change de tab
  useEffect(() => {
    setMockupIndex(0);
  }, [activeFeature]);
  
  // Auto-rotation des slides Hero toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Auto-scroll carousel toutes les 2 secondes
  useEffect(() => {
    if (isHoveringCarousel || totalMockups === 0) return;
    const interval = setInterval(() => {
      setMockupIndex(prev => (prev + 1) % totalMockups);
    }, 2000);
    return () => clearInterval(interval);
  }, [isHoveringCarousel, totalMockups]);

  // Gérer la souscription Stripe
  const handleSubscribe = async (plan: 'starter' | 'pro') => {
    if (!subscribeEmail) {
      alert('Veuillez entrer votre email');
      return;
    }

    setCheckoutLoading(plan);
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan,
          email: subscribeEmail,
          company: subscribeCompany,
        }),
      });

      const data = await response.json();

      if (data.url) {
        // Rediriger vers Stripe Checkout
        window.location.href = data.url;
      } else {
        alert(data.error || 'Erreur lors de la création du paiement');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur de connexion. Veuillez réessayer.');
    } finally {
      setCheckoutLoading(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Envoi par mailto à j.petin@leova-systems.com
    const subject = encodeURIComponent(`[LISA] Demande de ${formData.company || formData.name}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Téléphone: ${formData.phone || 'Non renseigné'}\n` +
      `Entreprise: ${formData.company}\n\n` +
      `Message:\n${formData.message || 'Demande de démonstration'}`
    );
    window.location.href = `mailto:j.petin@leova-systems.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#0f2a2a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f2a2a]/95 backdrop-blur-lg border-b border-[#2dd4bf]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <img 
                src="/logo-icon.png" 
                alt="LEOVA" 
                className="h-14 w-auto"
              />
              <img 
                src="/logo-text.png" 
                alt="LEOVA Systems" 
                className="h-14 w-auto hidden md:block translate-y-1"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              <a href="#produit" className="text-white/70 hover:text-[#2dd4bf] transition-colors font-medium">Produit</a>
              <a href="#features" className="text-white/70 hover:text-[#2dd4bf] transition-colors font-medium">Fonctionnalités</a>
              <a href="#pricing" className="text-white/70 hover:text-[#2dd4bf] transition-colors font-medium">Tarifs</a>
              <a href="#contact" className="text-white/70 hover:text-[#2dd4bf] transition-colors font-medium">Contact</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a 
                href="#contact"
                className="px-6 py-2.5 bg-[#2dd4bf] hover:bg-[#5eead4] text-[#0f2a2a] font-semibold rounded-lg transition-all"
              >
                Demander une démo
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1a3d3d] border-t border-[#2dd4bf]/10">
            <div className="px-4 py-6 space-y-4">
              <a href="#produit" className="block text-white/80 hover:text-[#2dd4bf] font-medium">Produit</a>
              <a href="#features" className="block text-white/80 hover:text-[#2dd4bf] font-medium">Fonctionnalités</a>
              <a href="#pricing" className="block text-white/80 hover:text-[#2dd4bf] font-medium">Tarifs</a>
              <a href="#contact" className="block text-white/80 hover:text-[#2dd4bf] font-medium">Contact</a>
              <div className="pt-4 border-t border-[#2dd4bf]/10">
                <a 
                  href="#contact"
                  className="block w-full py-3 bg-[#2dd4bf] text-[#0f2a2a] font-semibold rounded-lg text-center"
                >
                  Demander une démo
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Fond dégradé de base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2a2a] via-[#1a3d3d] to-[#0f2a2a]"></div>
        
        {/* Vagues ondulantes en arrière-plan */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute w-[200%] h-full opacity-[0.03] animate-wave" viewBox="0 0 1440 600" preserveAspectRatio="none">
            <path fill="url(#wave-gradient)" d="M0,200 C320,300 420,100 640,200 C880,300 1000,100 1200,200 C1400,300 1440,250 1440,250 L1440,600 L0,600 Z"/>
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2dd4bf"/>
                <stop offset="100%" stopColor="#06b6d4"/>
              </linearGradient>
            </defs>
          </svg>
          <svg className="absolute w-[200%] h-full opacity-[0.02] animate-wave-slow" style={{ top: '10%' }} viewBox="0 0 1440 600" preserveAspectRatio="none">
            <path fill="#2dd4bf" d="M0,300 C200,200 400,350 600,280 C800,210 1000,350 1200,300 C1350,260 1440,300 1440,300 L1440,600 L0,600 Z"/>
          </svg>
        </div>
        
        {/* Grandes orbes lumineuses - effet nebula */}
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-gradient-to-br from-[#2dd4bf]/8 via-cyan-500/5 to-transparent rounded-full blur-[100px] animate-pulse-soft"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-gradient-to-tl from-blue-500/8 via-teal-500/5 to-transparent rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-[#2dd4bf]/5 via-transparent to-transparent rounded-full blur-[80px] animate-rotate-slow"></div>
        
        {/* Grandes courbes élégantes en arrière-plan - viewBox pour visibilité */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ zIndex: 1 }}>
          {/* Courbe supérieure - grand arc */}
          <path 
            d="M-10,25 Q50,-15 110,35" 
            fill="none" 
            stroke="url(#curve-grad-1)" 
            strokeWidth="0.15" 
            className="animate-wave-slow"
            opacity="0.4"
          />
          {/* Courbe centrale haute */}
          <path 
            d="M-5,45 Q55,5 105,50" 
            fill="none" 
            stroke="url(#curve-grad-2)" 
            strokeWidth="0.12" 
            className="animate-wave"
            opacity="0.3"
          />
          {/* Courbe centrale basse */}
          <path 
            d="M-8,65 Q45,30 108,60" 
            fill="none" 
            stroke="url(#curve-grad-1)" 
            strokeWidth="0.1" 
            className="animate-wave-slow"
            opacity="0.35"
            style={{ animationDelay: '2s' }}
          />
          {/* Courbe inférieure */}
          <path 
            d="M-10,85 Q50,50 110,80" 
            fill="none" 
            stroke="url(#curve-grad-2)" 
            strokeWidth="0.08" 
            className="animate-wave"
            opacity="0.25"
            style={{ animationDelay: '4s' }}
          />
          <defs>
            <linearGradient id="curve-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0"/>
              <stop offset="20%" stopColor="#2dd4bf" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="1"/>
              <stop offset="80%" stopColor="#2dd4bf" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="curve-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0"/>
              <stop offset="30%" stopColor="#0ea5e9" stopOpacity="0.7"/>
              <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.7"/>
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge dynamique */}
            <div key={`badge-${heroSlide}`} className="inline-flex items-center gap-2 px-5 py-2 bg-[#2dd4bf]/10 border border-[#2dd4bf]/30 rounded-full text-[#2dd4bf] text-sm font-medium mb-8 animate-fade-in">
              <Zap className="w-4 h-4" />
              {heroSlides[heroSlide].badge}
            </div>
            
            {/* LISA statique avec animation de dégradé */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-shift">LISA</span>
              <br />
              {/* Texte dynamique qui défile */}
              <span key={`title-${heroSlide}`} className="text-white animate-fade-in">
                {heroSlides[heroSlide].title}
              </span>
            </h1>
            
            <p key={`subtitle-${heroSlide}`} className="text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in">
              {heroSlides[heroSlide].subtitle} <strong className="text-white">{heroSlides[heroSlide].highlight}</strong>
            </p>
            
            {/* Indicateurs de slide */}
            <div className="flex justify-center gap-2 mb-8">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeroSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${heroSlide === i ? 'bg-[#2dd4bf] w-8' : 'bg-white/30 w-2 hover:bg-white/50'}`}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2dd4bf] hover:bg-[#5eead4] text-[#0f2a2a] font-bold rounded-xl transition-all transform hover:scale-105"
              >
                Demander une démonstration
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#produit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-colors border border-white/10"
              >
                <Play className="w-5 h-5" />
                Découvrir LISA
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/50 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#2dd4bf]" />
                <span>Données sécurisées & hébergées en France</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="w-5 h-5 text-[#2dd4bf]" />
                <span>100% Cloud - Accessible partout</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-5 h-5 text-[#2dd4bf]" />
                <span>Support réactif inclus</span>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-[#2dd4bf]/50" />
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="produit" className="py-24 bg-[#1a3d3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Un outil <span className="text-[#2dd4bf]">tout-en-un</span> pour votre activité
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                LISA centralise toutes vos opérations : gestion des clients, suivi des équipements, 
                planification des interventions, génération de rapports et facturation. 
                Fini les fichiers Excel éparpillés et les oublis.
              </p>
              <div className="space-y-4">
                {[
                  'Interface intuitive, prise en main rapide',
                  'Synchronisation temps réel multi-utilisateurs',
                  'Portail client inclus pour vos clients',
                  'Exports et rapports personnalisables',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#2dd4bf]/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-[#2dd4bf]" />
                    </div>
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* LISA Preview Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2dd4bf]/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl border border-white/10 p-8 shadow-2xl">
                {/* Effet de grille en arrière-plan */}
                <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                  }}></div>
                </div>
                
                <div className="relative z-10 text-center space-y-6">
                  {/* Titre LISA avec gradient */}
                  <h2 className="text-5xl font-black tracking-tight">
                    <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      LISA
                    </span>
                  </h2>
                  <p className="text-white/60 text-lg">
                    Logiciel métier Inspections et de Suivi des Activités
                  </p>
                  
                  {/* Features list */}
                  <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 space-y-4 text-left">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white/90">Gestion des interventions et rapports</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white/90">Suivi qualité et non-conformités</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Building2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white/90">Base clients et équipements</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white/90">Planification et facturation</span>
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-center gap-2 text-white/40 text-sm pt-2">
                    <span>Développé par</span>
                    <img src="/logo-icon.png" alt="LEOVA" className="h-5 w-auto" />
                    <span className="text-[#2dd4bf] font-semibold">LEOVA Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-[#0f2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Fonctionnalités <span className="text-[#2dd4bf]">complètes</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour gérer efficacement votre activité d'inspection et de contrôle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: 'Base Clients', desc: 'Centralisez tous vos clients, sites et contacts. Synchronisation automatique possible avec vos outils existants.' },
              { icon: Wrench, title: 'Gestion Équipements', desc: 'Suivez chaque équipement, son historique, sa conformité et ses documents associés.' },
              { icon: Calendar, title: 'Planification', desc: 'Planifiez vos interventions, générez des feuilles de route optimisées pour vos techniciens.' },
              { icon: ClipboardCheck, title: 'Rapports', desc: 'Créez vos rapports d\'inspection avec des modèles personnalisables. Export PDF automatique.' },
              { icon: Euro, title: 'Facturation', desc: 'Générez devis et factures en quelques clics. Intégration EBP disponible.' },
              { icon: BarChart3, title: 'Tableaux de bord', desc: 'Visualisez vos KPIs en temps réel : activité, conformité, chiffre d\'affaires.' },
            ].map((feature, i) => (
              <div key={i} className="group p-6 bg-[#1a3d3d]/50 rounded-xl border border-white/5 hover:border-[#2dd4bf]/30 transition-all">
                <div className="w-12 h-12 bg-[#2dd4bf]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2dd4bf]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#2dd4bf]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités Interactives */}
      <section className="py-24 bg-gradient-to-b from-[#0a1f1f] to-[#0f2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Découvrez <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">LISA</span> en détail
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Cliquez sur une fonctionnalité pour explorer ses points forts
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {[
              { id: 0, name: 'Financier', icon: '💰', color: 'from-emerald-500 to-teal-500' },
              { id: 1, name: 'Commercial', icon: '📊', color: 'from-blue-500 to-cyan-500' },
              { id: 2, name: 'Planification', icon: '📅', color: 'from-purple-500 to-indigo-500' },
              { id: 3, name: 'Suivi Activité', icon: '📋', color: 'from-orange-500 to-amber-500' },
              { id: 4, name: 'Administration', icon: '⚙️', color: 'from-slate-500 to-zinc-500' },
              { id: 5, name: 'Portail Client', icon: '🌐', color: 'from-pink-500 to-rose-500' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFeature(tab.id)}
                onMouseEnter={() => setActiveFeature(tab.id)}
                className={`px-3 md:px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
                  activeFeature === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Contenu dynamique - Points forts + Carousel */}
          <div className="grid lg:grid-cols-3 gap-6 items-start animate-fade-in">
            
            {/* COLONNE GAUCHE - Points forts (1/3 de largeur) */}
            <div className="order-2 lg:order-1 lg:col-span-1">
              {/* Tab 0: Financier */}
              {activeFeature === 0 && (
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-xs mb-4">
                    ✨ Points forts
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4">
                    Pilotez en <span className="text-[#2dd4bf]">temps réel</span>
                  </h3>
                  <div className="space-y-2">
                    {[
                      { icon: '🎯', title: 'Vision 360°', desc: 'KPIs financiers et opérationnels' },
                      { icon: '📈', title: 'Analyses prédictives', desc: 'Anticipez votre CA' },
                      { icon: '⏱️', title: 'Temps réel', desc: 'Alertes instantanées' },
                      { icon: '📊', title: 'Rapports auto', desc: 'Exports Excel, PDF' },
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shrink-0 text-base">
                          {point.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm">{point.title}</h4>
                          <p className="text-white/50 text-xs">{point.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 1: Commercial */}
              {activeFeature === 1 && (
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/20 text-green-400 rounded-full text-xs mb-4">
                    ✨ Points forts
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4">
                    Boostez vos <span className="text-[#2dd4bf]">ventes</span>
                  </h3>
                  <div className="space-y-2">
                    {[
                      { icon: '👥', title: 'Pipeline visuel', desc: 'Du contact à la signature' },
                      { icon: '📝', title: 'Devis en 2 clics', desc: 'Calcul auto, envoi direct' },
                      { icon: '📈', title: 'Prévisions', desc: 'Probabilités de signature' },
                      { icon: '🔔', title: 'Relances auto', desc: 'Rappels intelligents' },
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shrink-0 text-base">
                          {point.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm">{point.title}</h4>
                          <p className="text-white/50 text-xs">{point.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: Planification */}
              {activeFeature === 2 && (
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/20 text-purple-400 rounded-full text-xs mb-4">
                    ✨ Points forts
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4">
                    Optimisez vos <span className="text-[#2dd4bf]">tournées</span>
                  </h3>
                  <div className="space-y-2">
                    {[
                      { icon: '🗺️', title: 'Optimisation GPS', desc: 'Réduisez les km parcourus' },
                      { icon: '📅', title: 'Drag & drop', desc: 'Planifiez en glissant' },
                      { icon: '📧', title: 'Avis auto', desc: 'Envoi aux clients en 1 clic' },
                      { icon: '📱', title: 'App mobile', desc: 'Feuille de route temps réel' },
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center shrink-0 text-base">
                          {point.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm">{point.title}</h4>
                          <p className="text-white/50 text-xs">{point.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Suivi terrain */}
              {activeFeature === 3 && (
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/20 text-orange-400 rounded-full text-xs mb-4">
                    ✨ Points forts
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4">
                    Suivez en <span className="text-[#2dd4bf]">direct</span>
                  </h3>
                  <div className="space-y-2">
                    {[
                      { icon: '📍', title: 'Géolocalisation', desc: 'Position temps réel' },
                      { icon: '📋', title: 'Rapports mobiles', desc: 'Photos, signatures' },
                      { icon: '🔄', title: 'Synchro instant', desc: 'Données auto dans LISA' },
                      { icon: '✅', title: 'Workflow', desc: 'Validation configurable' },
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center shrink-0 text-base">
                          {point.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm">{point.title}</h4>
                          <p className="text-white/50 text-xs">{point.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 4: Administration */}
              {activeFeature === 4 && (
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-500/20 text-pink-400 rounded-full text-xs mb-4">
                    ✨ Points forts
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4">
                    Configurez <span className="text-[#2dd4bf]">tout</span>
                  </h3>
                  <div className="space-y-2">
                    {[
                      { icon: '👥', title: 'Utilisateurs', desc: 'Comptes et rôles' },
                      { icon: '🛡️', title: 'Rôles sur-mesure', desc: 'Droits précis' },
                      { icon: '📄', title: 'Modèles rapports', desc: 'Points de contrôle' },
                      { icon: '⚙️', title: 'Intégrations', desc: 'Webhooks, synchro auto' },
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center shrink-0 text-base">
                          {point.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm">{point.title}</h4>
                          <p className="text-white/50 text-xs">{point.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 5: Portail Client */}
              {activeFeature === 5 && (
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-500/20 text-slate-400 rounded-full text-xs mb-4">
                    ✨ Points forts
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4">
                    Fidélisez vos <span className="text-[#2dd4bf]">clients</span>
                  </h3>
                  <div className="space-y-2">
                    {[
                      { icon: '🏢', title: 'Fiche complète', desc: 'Contacts, équipements' },
                      { icon: '📁', title: 'Documents', desc: 'Tout en 1 clic' },
                      { icon: '🖥️', title: 'Portail client', desc: 'Accès autonome' },
                      { icon: '🔒', title: "Droits d'accès", desc: 'Contrôle fin' },
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                        <div className="w-8 h-8 bg-gradient-to-br from-slate-500 to-zinc-500 rounded-lg flex items-center justify-center shrink-0 text-base">
                          {point.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm">{point.title}</h4>
                          <p className="text-white/50 text-xs">{point.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* COLONNE DROITE - Carousel des mockups détaillés (2/3 de largeur) */}
            <div className="order-1 lg:order-2 lg:col-span-2">
              <div className="relative" onMouseEnter={() => setIsHoveringCarousel(true)} onMouseLeave={() => setIsHoveringCarousel(false)}>
                {/* Navigation Arrows */}
                <button onClick={() => setMockupIndex(prev => prev > 0 ? prev - 1 : totalMockups - 1)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => setMockupIndex(prev => prev < totalMockups - 1 ? prev + 1 : 0)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
                
                {/* Label du mockup */}
                <div className="text-center mb-3">
                  <span className="px-3 py-1.5 bg-white/10 backdrop-blur rounded-full text-white text-xs">
                    {currentMockups[mockupIndex]?.label || ''} ({mockupIndex + 1}/{totalMockups})
                  </span>
                </div>
                
                {/* Indicateurs */}
                <div className="flex justify-center gap-1.5 mb-4">
                  {Array.from({ length: totalMockups }, (_, i) => (
                    <button key={i} onClick={() => setMockupIndex(i)} className={`h-1.5 rounded-full transition-all ${mockupIndex === i ? 'bg-[#2dd4bf] w-6' : 'bg-white/30 w-1.5 hover:bg-white/50'}`} />
                  ))}
                </div>
                
                {/* Mockups conditionnels par tab - avec scroll horizontal sur mobile */}
                <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible">
                  <div className="min-w-[320px] md:min-w-0 transform scale-[0.85] md:scale-100 origin-top-left md:origin-center">
                    {activeFeature === 0 && mockupIndex === 0 && <MockupDashboardFinancier />}
                    {activeFeature === 0 && mockupIndex === 1 && <MockupFacturation />}
                    {activeFeature === 1 && mockupIndex === 0 && <MockupDashboardCommercial />}
                    {activeFeature === 1 && mockupIndex === 1 && <MockupBaseClient />}
                    {activeFeature === 2 && mockupIndex === 0 && <MockupPlanification />}
                    {activeFeature === 2 && mockupIndex === 1 && <MockupFeuilleRoute />}
                    {activeFeature === 3 && mockupIndex === 0 && <MockupSuiviActivite />}
                    {activeFeature === 3 && mockupIndex === 1 && <MockupAvisIntervention />}
                    {activeFeature === 3 && mockupIndex === 2 && <MockupDepotRapport />}
                    {activeFeature === 4 && mockupIndex === 0 && <MockupAdminUtilisateurs />}
                    {activeFeature === 4 && mockupIndex === 1 && <MockupAdminRoles />}
                    {activeFeature === 4 && mockupIndex === 2 && <MockupAdminModeles />}
                    {activeFeature === 4 && mockupIndex === 3 && <MockupAdminNC />}
                    {activeFeature === 4 && mockupIndex === 4 && <MockupAdminTemplates />}
                    {activeFeature === 4 && mockupIndex === 5 && <MockupAdminSync />}
                    {activeFeature === 5 && mockupIndex === 0 && <MockupPortailClient />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Accréditation & Conformité */}
      <section className="py-20 bg-gradient-to-b from-[#0f2a2a] to-[#1a3d3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm mb-6">
              🏅 Expertise & Conformité
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Conçu par des <span className="text-[#2dd4bf]">experts accrédités</span>
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              LISA a été développé en collaboration avec des organismes d'inspection accrédités COFRAC, 
              pour répondre aux exigences les plus strictes de la norme ISO/CEI 17020.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* COFRAC */}
            <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 text-center hover:border-[#2dd4bf]/50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Accréditation COFRAC</h3>
              <p className="text-white/50 text-sm">
                Développé avec des organismes accrédités par le Comité Français d'Accréditation
              </p>
            </div>

            {/* ISO 17020 */}
            <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 text-center hover:border-[#2dd4bf]/50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Norme ISO/CEI 17020</h3>
              <p className="text-white/50 text-sm">
                Fonctionnalités alignées sur les exigences de la norme pour les organismes d'inspection
              </p>
            </div>

            {/* Traçabilité */}
            <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 text-center hover:border-[#2dd4bf]/50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Traçabilité complète</h3>
              <p className="text-white/50 text-sm">
                Audit trail, historique des modifications, preuves d'intervention documentées
              </p>
            </div>
          </div>

          {/* Exigences couvertes */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-bold mb-6 text-center">Exigences de la norme couvertes par LISA</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: '📁', label: 'Gestion documentaire', desc: 'Modèles, procédures, rapports' },
                { icon: '👥', label: 'Gestion du personnel', desc: 'Compétences, habilitations' },
                { icon: '🔧', label: 'Équipements', desc: 'Suivi métrologique, étalonnages' },
                { icon: '📊', label: 'Rapports d\'inspection', desc: 'Conformité, traçabilité' },
                { icon: '🔔', label: 'Non-conformités', desc: 'Détection, suivi, clôture' },
                { icon: '📅', label: 'Planification', desc: 'Ressources, délais' },
                { icon: '🔒', label: 'Confidentialité', desc: 'Accès sécurisés, droits' },
                { icon: '📈', label: 'Amélioration continue', desc: 'Indicateurs, analyses' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-sm text-white">{item.label}</div>
                    <div className="text-xs text-white/50">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section "Ils nous font confiance" */}
      <section className="py-20 bg-[#0a1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ils nous font <span className="text-[#2dd4bf]">confiance</span>
            </h2>
            <p className="text-white/60 text-lg">
              LISA est utilisé au quotidien par des organismes d'inspection reconnus
            </p>
          </div>

          <div className="flex flex-col items-center">
            {/* Client principal - PAQA */}
            <a 
              href="https://www.cibio.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-[#2dd4bf] transition-all hover:scale-105 max-w-xl w-full"
            >
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shrink-0 p-2">
                  <img src="/logo-paqa.png" alt="Logo PAQA" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-[#2dd4bf] transition-colors">PAQA</h3>
                  <p className="text-white/50 text-sm mb-2">Organisme d'inspection accrédité COFRAC</p>
                  <p className="text-white/70 text-sm">
                    Spécialiste du contrôle qualité en imagerie médicale, rayonnements ionisants et vérifications électriques BT
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[#2dd4bf] text-sm">
                <span>Visiter le site</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>

            {/* Témoignage */}
            <div className="mt-8 max-w-2xl text-center">
              <blockquote className="text-white/70 italic text-lg mb-4">
                "LISA nous permet de gérer l'ensemble de notre activité d'inspection avec une traçabilité parfaite. 
                Un outil indispensable pour répondre aux exigences de notre accréditation COFRAC."
              </blockquote>
              <div className="text-white/50 text-sm">— Organisme d'inspection accrédité</div>
            </div>

            {/* Call to action */}
            <div className="mt-12 text-center">
              <p className="text-white/50 mb-4">Vous êtes un organisme d'inspection ?</p>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#2dd4bf] text-[#0f2a2a] font-semibold rounded-xl hover:bg-[#2dd4bf]/90 transition-colors">
                Demander une démonstration
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#1a3d3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Tarification <span className="text-[#2dd4bf]">transparente</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Des formules adaptées à votre taille. Sans engagement, sans surprise.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter - 1 à 2 utilisateurs */}
            <div className="p-8 bg-[#0f2a2a] rounded-2xl border border-white/10">
              <div className="text-[#2dd4bf] font-semibold text-sm mb-2">STARTER</div>
              <div className="text-4xl font-bold mb-1">450€<span className="text-lg text-white/40 font-normal"> HT/mois</span></div>
              <p className="text-white/50 text-sm mb-8">Pour les indépendants et petits organismes</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  '1 à 2 utilisateurs',
                  'Tous les modules inclus',
                  '10 accès Portail Client',
                  'Hébergement sécurisé France',
                  'Support par email',
                  'Mises à jour incluses',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#2dd4bf] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => setShowSubscribeModal('starter')}
                className="block w-full py-3 bg-white/5 hover:bg-white/10 text-center font-semibold rounded-lg transition-colors border border-white/10"
              >
                Souscrire
              </button>
            </div>

            {/* Équipe - Highlighted */}
            <div className="p-8 bg-gradient-to-b from-[#2dd4bf]/10 to-[#0f2a2a] rounded-2xl border-2 border-[#2dd4bf] relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#2dd4bf] text-[#0f2a2a] text-sm font-bold rounded-full">
                RECOMMANDÉ
              </div>
              <div className="text-[#2dd4bf] font-semibold text-sm mb-2">ÉQUIPE</div>
              <div className="text-4xl font-bold mb-1">199€<span className="text-lg text-white/40 font-normal"> HT/utilisateur/mois</span></div>
              <p className="text-white/50 text-sm mb-8">Pour les équipes jusqu&apos;à 10 utilisateurs</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Jusqu\'à 10 utilisateurs',
                  'Tous les modules inclus',
                  'Portail Client illimité',
                  'Module Facturation EBP',
                  'Feuille de route mobile',
                  'Support prioritaire',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#2dd4bf] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => setShowSubscribeModal('pro')}
                className="block w-full py-3 bg-[#2dd4bf] hover:bg-[#5eead4] text-[#0f2a2a] text-center font-bold rounded-lg transition-colors"
              >
                Souscrire
              </button>
            </div>

            {/* Sur Mesure - Équipes pluridisciplinaires */}
            <div className="p-8 bg-[#0f2a2a] rounded-2xl border border-white/10">
              <div className="text-[#2dd4bf] font-semibold text-sm mb-2">SUR MESURE</div>
              <div className="text-4xl font-bold mb-1">Contactez-nous</div>
              <p className="text-white/50 text-sm mb-8">Équipes pluridisciplinaires &gt; 10 salariés</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Utilisateurs illimités',
                  'Tous les modules',
                  'API & intégrations',
                  'Formation sur site',
                  'Account manager dédié',
                  'SLA garanti',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#2dd4bf] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="block w-full py-3 bg-white/5 hover:bg-white/10 text-center font-semibold rounded-lg transition-colors border border-white/10">
                Demander un devis
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0f2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Prêt à <span className="text-[#2dd4bf]">optimiser</span> votre activité ?
              </h2>
              <p className="text-white/60 text-lg mb-10">
                Demandez une démonstration personnalisée de LISA. 
                Notre équipe vous présentera la solution adaptée à vos besoins.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2dd4bf]/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#2dd4bf]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Email</div>
                    <div className="font-medium">contact@leova-systems.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2dd4bf]/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#2dd4bf]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Téléphone</div>
                    <div className="font-medium">+33 (0)4 XX XX XX XX</div>
                  </div>
                </div>
              </div>

              {/* Logo LEOVA */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <img 
                  src="/logo-leova.png" 
                  alt="LEOVA Systems - Leading Engineering Of Value & Automation" 
                  className="h-28 opacity-70"
                />
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-[#1a3d3d] rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Demander une démo</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/60 mb-2">Prénom & Nom *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0f2a2a] border border-white/10 rounded-lg focus:outline-none focus:border-[#2dd4bf] transition-colors text-white"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-2">Téléphone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0f2a2a] border border-white/10 rounded-lg focus:outline-none focus:border-[#2dd4bf] transition-colors text-white"
                      placeholder="06 XX XX XX XX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Email professionnel *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0f2a2a] border border-white/10 rounded-lg focus:outline-none focus:border-[#2dd4bf] transition-colors text-white"
                    placeholder="jean@entreprise.fr"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Entreprise *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0f2a2a] border border-white/10 rounded-lg focus:outline-none focus:border-[#2dd4bf] transition-colors text-white"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Votre besoin</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0f2a2a] border border-white/10 rounded-lg focus:outline-none focus:border-[#2dd4bf] transition-colors resize-none text-white"
                    placeholder="Décrivez brièvement votre activité et vos besoins..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#2dd4bf] hover:bg-[#5eead4] text-[#0f2a2a] font-bold rounded-lg transition-all"
                >
                  Envoyer ma demande
                </button>
                <p className="text-xs text-white/40 text-center">
                  En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe commerciale.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0a1f1f] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src="/logo-icon.png" alt="LEOVA" className="h-10" />
              <img src="/logo-text.png" alt="LEOVA Systems" className="h-8 hidden sm:block" />
            </div>
            <div className="flex items-center gap-8 text-sm text-white/40">
              <a href="/mentions-legales" className="hover:text-[#2dd4bf] transition-colors">Mentions légales</a>
              <a href="/confidentialite" className="hover:text-[#2dd4bf] transition-colors">Politique de confidentialité</a>
              <a href="/cgv" className="hover:text-[#2dd4bf] transition-colors">CGV</a>
            </div>
            <p className="text-sm text-white/30">
              © {new Date().getFullYear()} LEOVA Systems. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal de souscription */}
      {showSubscribeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowSubscribeModal(null)}
          ></div>
          
          {/* Modal */}
          <div className="relative bg-[#1a3d3d] rounded-2xl p-8 max-w-md w-full border border-[#2dd4bf]/20 shadow-2xl">
            <button 
              onClick={() => setShowSubscribeModal(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold mb-2">
              Souscrire à LISA {showSubscribeModal === 'starter' ? 'Starter' : 'Équipe'}
            </h3>
            <p className="text-white/60 mb-6">
              {showSubscribeModal === 'starter' ? '450€ HT/mois (1-2 utilisateurs)' : '199€ HT/utilisateur/mois (jusqu\'à 10)'} - Sans engagement
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-white/60 mb-2">Email professionnel *</label>
                <input
                  type="email"
                  required
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0f2a2a] border border-white/10 rounded-lg focus:outline-none focus:border-[#2dd4bf] transition-colors text-white"
                  placeholder="vous@entreprise.fr"
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Entreprise</label>
                <input
                  type="text"
                  value={subscribeCompany}
                  onChange={(e) => setSubscribeCompany(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0f2a2a] border border-white/10 rounded-lg focus:outline-none focus:border-[#2dd4bf] transition-colors text-white"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <button
                onClick={() => handleSubscribe(showSubscribeModal as 'starter' | 'pro')}
                disabled={checkoutLoading !== null}
                className="w-full py-4 bg-[#2dd4bf] hover:bg-[#5eead4] disabled:opacity-50 disabled:cursor-not-allowed text-[#0f2a2a] font-bold rounded-lg transition-all flex items-center justify-center gap-2"
              >
                {checkoutLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Redirection vers le paiement...
                  </>
                ) : (
                  <>
                    Payer par carte bancaire
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-xs text-white/40 text-center">
                Paiement sécurisé par Stripe. En continuant, vous acceptez nos{' '}
                <a href="/cgv" className="text-[#2dd4bf] hover:underline">CGV</a>.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
























