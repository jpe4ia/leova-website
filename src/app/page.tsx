'use client';

import { useState, useEffect } from 'react';
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
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Nombre de mockups par tab : [Dashboard, Commercial, Planification, Suivi, Clients, Admin]
  const mockupsPerTab = [2, 2, 3, 3, 2, 5];

  // Auto-scroll carousel toutes les 2 secondes si pas de hover
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setCarouselIndex(prev => (prev + 1) % mockupsPerTab[activeFeature]);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeFeature, isHovering]);

  // Reset carousel index quand on change de tab
  useEffect(() => {
    setCarouselIndex(0);
  }, [activeFeature]);

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
    alert('Merci pour votre demande ! Notre équipe vous recontactera sous 24h.');
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
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2a2a] via-[#1a3d3d] to-[#0f2a2a]"></div>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#2dd4bf]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#2dd4bf]/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#2dd4bf]/10 border border-[#2dd4bf]/30 rounded-full text-[#2dd4bf] text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              Solution SaaS pour professionnels de l'inspection
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">LISA</span>
              <br />
              <span className="text-white">
                Le logiciel métier qui
                <br />
                <span className="text-[#2dd4bf]">simplifie</span> vos inspections
              </span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Centralisez vos équipements, planifiez vos interventions, générez vos rapports 
              et suivez votre activité. <strong className="text-white">Une solution complète, pensée pour votre métier.</strong>
            </p>

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
              { id: 0, name: 'Tableau de bord', icon: '📊', color: 'from-blue-500 to-cyan-500' },
              { id: 1, name: 'Commercial', icon: '💼', color: 'from-green-500 to-emerald-500' },
              { id: 2, name: 'Planification', icon: '📅', color: 'from-purple-500 to-indigo-500' },
              { id: 3, name: 'Suivi terrain', icon: '🗺️', color: 'from-orange-500 to-amber-500' },
              { id: 4, name: 'Clients', icon: '🏢', color: 'from-pink-500 to-rose-500' },
              { id: 5, name: 'Administration', icon: '⚙️', color: 'from-slate-500 to-zinc-500' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFeature(tab.id)}
                className={`px-4 md:px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 text-sm md:text-base ${
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

          {/* Contenu dynamique */}
          <div className="relative min-h-[400px]">
            
            {/* Tab 0: Tableau de bord - Carousel avec mockups détaillés */}
            {activeFeature === 0 && (
              <div className="animate-fade-in">
                {/* Points forts */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm mb-4">✨ Points forts</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[{icon:'🎯',title:'Vision 360°',desc:'KPIs sur un seul écran'},{icon:'📈',title:'Analyses prédictives',desc:'Anticipez votre CA'},{icon:'⏱️',title:'Temps réel',desc:'Alertes instantanées'},{icon:'📊',title:'Rapports auto',desc:'Exports Excel, PDF'}].map((p,i)=>(<div key={i} className="p-3 bg-white/5 rounded-xl hover:bg-white/10"><div className="text-2xl mb-2">{p.icon}</div><h4 className="font-semibold text-white text-sm mb-1">{p.title}</h4><p className="text-white/50 text-xs">{p.desc}</p></div>))}
                  </div>
                </div>
                
                {/* Carousel */}
                <div className="relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                  <button onClick={() => setCarouselIndex(prev => prev > 0 ? prev - 1 : 1)} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/70"><ChevronLeft className="w-5 h-5" /></button>
                  <button onClick={() => setCarouselIndex(prev => prev < 1 ? prev + 1 : 0)} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/70"><ChevronRight className="w-5 h-5" /></button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">{[0,1].map(i=>(<button key={i} onClick={()=>setCarouselIndex(i)} className={`w-2 h-2 rounded-full transition-all ${carouselIndex===i?'bg-[#2dd4bf] w-6':'bg-white/50'}`}/>))}</div>
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/50 backdrop-blur text-white text-xs rounded-full">{carouselIndex===0?'💰 Dashboard Financier':'📊 Dashboard Commercial'}</div>
                  
                  {/* Mockup 0: Dashboard Financier COMPLET */}
                  {carouselIndex === 0 && (
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3"><span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span><span className="text-[10px] text-white/40 hidden sm:block">Logiciel métier Inspections et de Suivi des Activités</span></div>
                        <div className="flex items-center gap-2"><span className="text-[10px] text-white/50">📅 11/12/2025</span><div className="px-3 py-1.5 bg-teal-500 text-white text-xs rounded-lg flex items-center gap-1.5"><RefreshCw className="w-3 h-3" /> Actualiser</div></div>
                      </div>
                      <div className="flex">
                        <div className="w-40 bg-slate-50 border-r p-3 hidden sm:block">
                          <div className="flex items-center gap-2 mb-4 pb-3 border-b"><div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center"><span className="text-white text-xs font-bold">PA</span></div><div><div className="text-[10px] text-slate-400">Connecté :</div><div className="text-xs font-medium text-slate-700">Admin PAQA</div></div></div>
                          <nav className="space-y-1">{[{icon:'💰',label:'FINANCIER',active:true},{icon:'📊',label:'COMMERCIAL'},{icon:'🏦',label:'TRÉSORERIE'},{icon:'📅',label:'PLANIFICATION'},{icon:'📋',label:'SUIVI ACTIVITÉ'},{icon:'🗺️',label:'FEUILLE ROUTE'},{icon:'🏢',label:'BASE CLIENT'}].map((item,i)=>(<div key={i} className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[10px] ${item.active?'bg-teal-500 text-white font-medium':'text-slate-600 hover:bg-slate-100'}`}><span>{item.icon}</span><span>{item.label}</span></div>))}</nav>
                        </div>
                        <div className="flex-1 p-5">
                          <div className="flex items-center justify-between mb-4"><h4 className="text-xl font-bold text-slate-800 flex items-center gap-2"><div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center"><span className="text-amber-600">💰</span></div>Dashboard Financier</h4><span className="text-xs text-slate-400">Août 2025</span></div>
                          <div className="mb-4"><div className="flex items-center gap-2 mb-3"><span className="w-6 h-6 bg-green-100 rounded flex items-center justify-center text-green-600 text-sm">$</span><span className="font-semibold text-slate-700">Chiffre d'Affaires</span></div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                              <div className="bg-slate-50 rounded-xl p-3 border"><div className="flex items-center gap-2 mb-1"><span className="w-5 h-5 bg-green-100 rounded flex items-center justify-center text-[10px] text-green-600">$</span><span className="text-[10px] text-slate-500">CA 2025</span><span className="text-[9px] text-green-500 ml-auto">↗18.3%</span></div><div className="text-xl font-bold text-slate-800">1 811 081 €</div><div className="flex items-center justify-between mt-2"><span className="text-[9px] text-slate-400">Budget</span><span className="text-[9px] text-slate-600">1 978 147 €</span></div><div className="w-full bg-slate-200 rounded-full h-1.5 mt-1"><div className="bg-green-500 h-1.5 rounded-full" style={{width:'91.5%'}}></div></div></div>
                              <div className="bg-slate-50 rounded-xl p-3 border"><div className="flex items-center gap-2 mb-1"><span className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center text-[10px] text-blue-600">$</span><span className="text-[10px] text-slate-500">CA 2024</span></div><div className="text-xl font-bold text-slate-800">1 530 861 €</div><div className="w-full bg-slate-200 rounded-full h-1.5 mt-2"><div className="bg-green-500 h-1.5 rounded-full" style={{width:'90%'}}></div></div></div>
                              <div className="bg-slate-50 rounded-xl p-3 border"><div className="text-[10px] text-slate-500 mb-1">Croissance</div><div className="text-3xl font-bold text-green-600">18.3%</div></div>
                              <div className="bg-slate-50 rounded-xl p-3 border"><div className="text-[10px] text-slate-500 mb-1">Budget 2025</div><div className="text-xl font-bold text-slate-800">1 978 147 €</div></div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 rounded-xl p-4 border"><div className="text-sm font-medium text-slate-700 mb-3">Évolution CA</div><div className="flex items-end justify-between h-20 gap-1">{[{v25:95,v24:85},{v25:145,v24:120},{v25:180,v24:155},{v25:220,v24:195},{v25:285,v24:240},{v25:350,v24:295}].map((d,i)=>(<div key={i} className="flex-1 flex gap-0.5 items-end justify-center h-full"><div className="w-2 bg-teal-400 rounded-t" style={{height:`${d.v25/4}px`}}></div><div className="w-2 bg-slate-300 rounded-t" style={{height:`${d.v24/4}px`}}></div></div>))}</div><div className="flex items-center justify-center gap-4 text-[10px] mt-2"><span className="flex items-center gap-1"><span className="w-2 h-2 bg-teal-400 rounded"></span>2025</span><span className="flex items-center gap-1"><span className="w-2 h-2 bg-slate-300 rounded"></span>2024</span></div></div>
                            <div className="bg-slate-50 rounded-xl p-4 border"><div className="text-sm font-medium text-slate-700 mb-3">Budget CA</div><div className="mb-3"><div className="flex justify-between text-xs mb-1"><span className="text-slate-600">Progression</span><span className="font-semibold">91.6%</span></div><div className="w-full bg-slate-200 rounded-full h-3"><div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-3 rounded-full" style={{width:'91.6%'}}></div></div></div><div className="flex justify-between text-xs"><span className="text-green-600">91.6% réalisé</span><span className="text-orange-500">167 066 € restants</span></div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Mockup 1: Dashboard Commercial COMPLET */}
                  {carouselIndex === 1 && (
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between"><div className="flex items-center gap-3"><span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span></div><div className="flex items-center gap-2"><div className="px-3 py-1.5 bg-blue-500 text-white text-xs rounded-lg">📊 Grille Tarifaire</div><span className="text-[10px] text-white/50">Admin</span></div></div>
                      <div className="p-5">
                        <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"><span className="text-blue-600">📊</span></div>Dashboard Commercial</h4>
                        <div className="flex gap-1 mb-5 border-b overflow-x-auto">{[{label:'Performances',icon:'📈',active:true},{label:'Carte France',icon:'🗺️'},{label:'Offres',icon:'📋'},{label:'Prospects',icon:'👥'}].map((tab,i)=>(<button key={i} className={`px-4 py-2 text-xs flex items-center gap-1.5 border-b-2 whitespace-nowrap ${tab.active?'border-blue-500 text-blue-700 font-medium':'border-transparent text-slate-500'}`}><span>{tab.icon}</span>{tab.label}</button>))}</div>
                        <div className="mb-4"><div className="grid grid-cols-2 md:grid-cols-5 gap-2">{[{value:'344',label:'OFFRE Total',color:'text-blue-600'},{value:'234',label:'Conversions',color:'text-green-600'},{value:'68.0%',label:'Taux Conv.',color:'text-teal-600'},{value:'12',label:'Captations',color:'text-orange-500'},{value:'5',label:'Relances',color:'text-red-500'}].map((stat,i)=>(<div key={i} className="bg-slate-50 rounded-xl p-3 text-center border"><div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div><div className="text-[10px] text-slate-500">{stat.label}</div></div>))}</div></div>
                        <div className="grid grid-cols-2 gap-3 mb-4"><div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100"><div className="text-xs text-slate-500 mb-1">CA Réalisé</div><div className="text-3xl font-bold text-green-600">475 726 €</div></div><div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100"><div className="text-xs text-slate-500 mb-1">Portefeuille</div><div className="text-3xl font-bold text-blue-600">96 047 €</div></div></div>
                        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-5 text-white">
                          <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"><span>🎯</span></div><div><div className="font-semibold">CA Global</div><div className="text-xs text-white/60">Objectif Annuel</div></div></div><div className="text-right"><div className="text-3xl font-bold text-green-400">104.7%</div><div className="text-xs text-white/60">Réalisé</div></div></div>
                          <div className="grid grid-cols-3 gap-3 mb-3">{[{l:'CA Réalisé',v:'475 726 €'},{l:'Objectif',v:'454 500 €'},{l:'Dépassement',v:'+21 226 €',c:'text-green-400'}].map((d,i)=>(<div key={i} className="bg-white/10 rounded-lg p-2"><div className="text-[10px] text-white/60">{d.l}</div><div className={`font-bold ${d.c||''}`}>{d.v}</div></div>))}</div>
                          <div><div className="flex justify-between text-xs mb-1"><span>Progression</span><span className="text-green-400">🎉 Objectif dépassé !</span></div><div className="w-full bg-slate-600 rounded-full h-2.5"><div className="bg-gradient-to-r from-yellow-400 via-green-400 to-green-500 h-2.5 rounded-full" style={{width:'100%'}}></div></div></div>
                          <div className="mt-3 bg-green-500/20 rounded-lg p-2 text-center"><span className="text-green-300">🎉 OBJECTIF PULVÉRISÉ ! +4.7% ! 🏆</span></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tab 1: Commercial - Carousel avec mockups Base Client */}
            {activeFeature === 1 && (
              <div className="animate-fade-in">
                {/* Points forts */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm mb-4">✨ Points forts</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[{icon:'👥',title:'Pipeline visuel',desc:'Suivez chaque opportunité'},{icon:'📝',title:'Devis en 2 clics',desc:'Modèles personnalisables'},{icon:'📈',title:'Prévisions',desc:'Probabilités de signature'},{icon:'🔔',title:'Relances auto',desc:'Rappels intelligents'}].map((p,i)=>(<div key={i} className="p-3 bg-white/5 rounded-xl hover:bg-white/10"><div className="text-2xl mb-2">{p.icon}</div><h4 className="font-semibold text-white text-sm mb-1">{p.title}</h4><p className="text-white/50 text-xs">{p.desc}</p></div>))}
                  </div>
                </div>
                
                {/* Carousel Base Client */}
                <div className="relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                  <button onClick={() => setCarouselIndex(prev => prev > 0 ? prev - 1 : 1)} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/70"><ChevronLeft className="w-5 h-5" /></button>
                  <button onClick={() => setCarouselIndex(prev => prev < 1 ? prev + 1 : 0)} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/70"><ChevronRight className="w-5 h-5" /></button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">{[0,1].map(i=>(<button key={i} onClick={()=>setCarouselIndex(i)} className={`w-2 h-2 rounded-full transition-all ${carouselIndex===i?'bg-[#2dd4bf] w-6':'bg-white/50'}`}/>))}</div>
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/50 backdrop-blur text-white text-xs rounded-full">{carouselIndex===0?'🏢 Base Client':'📊 Pipeline Commercial'}</div>
                  
                  {/* Mockup 0: Base Client COMPLET */}
                  {carouselIndex === 0 && (
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3"><span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span><span className="text-[10px] text-white/40 hidden sm:block">Base Client</span></div>
                        <div className="px-3 py-1.5 bg-green-500 text-white text-xs rounded-lg">+ Nouveau client</div>
                      </div>
                      <div className="flex">
                        <div className="w-48 bg-slate-50 border-r p-3 hidden md:block">
                          <div className="mb-4"><input className="w-full px-3 py-2 border rounded-lg text-sm bg-white" placeholder="🔍 Rechercher..." readOnly /></div>
                          <div className="text-[10px] text-slate-500 font-medium mb-2 uppercase">Filtres</div>
                          <div className="space-y-2">{[{l:'Tous les clients',c:'234',active:true},{l:'Premium',c:'45'},{l:'Standard',c:'189'},{l:'À relancer',c:'12'}].map((f,i)=>(<div key={i} className={`flex justify-between items-center px-3 py-2 rounded-lg text-xs cursor-pointer ${f.active?'bg-teal-500 text-white':'bg-white border hover:bg-slate-100'}`}><span>{f.l}</span><span className={`px-2 py-0.5 rounded-full text-[10px] ${f.active?'bg-white/20':'bg-slate-100'}`}>{f.c}</span></div>))}</div>
                        </div>
                        <div className="flex-1 p-5">
                          <div className="flex items-center justify-between mb-4"><h4 className="text-xl font-bold text-slate-800">🏢 Base Clients</h4><div className="flex gap-2"><button className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded-lg">📤 Export</button><button className="px-3 py-1.5 bg-teal-500 text-white text-xs rounded-lg">+ Ajouter</button></div></div>
                          <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b">{['Client','Type','Sites','Équipements','CA Annuel','Actions'].map((h,i)=>(<th key={i} className="text-left py-3 px-2 text-[10px] text-slate-500 font-medium uppercase">{h}</th>))}</tr></thead><tbody>
                            {[{n:'CHU Grenoble Alpes',t:'Premium',s:3,e:45,ca:'125 000 €',tc:'bg-amber-100 text-amber-700'},{n:'Clinique du Parc Lyon',t:'Standard',s:1,e:12,ca:'28 500 €',tc:'bg-slate-100 text-slate-600'},{n:'Cabinet Dr MARTIN',t:'Standard',s:1,e:4,ca:'8 200 €',tc:'bg-slate-100 text-slate-600'},{n:'Centre Imagerie Sud',t:'Premium',s:2,e:28,ca:'67 800 €',tc:'bg-amber-100 text-amber-700'},{n:'Hôpital St-Joseph',t:'Premium',s:4,e:62,ca:'185 000 €',tc:'bg-amber-100 text-amber-700'}].map((c,i)=>(
                              <tr key={i} className="border-b hover:bg-slate-50 cursor-pointer"><td className="py-3 px-2"><div className="flex items-center gap-3"><div className="w-10 h-10 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-xs">{c.n.split(' ').map(w=>w[0]).slice(0,2).join('')}</div><div><div className="font-medium text-slate-800">{c.n}</div><div className="text-[10px] text-slate-400">Créé le 15/03/2024</div></div></div></td><td className="py-3 px-2"><span className={`px-2 py-1 rounded-full text-[10px] ${c.tc}`}>{c.t}</span></td><td className="py-3 px-2 font-medium">{c.s}</td><td className="py-3 px-2 font-medium">{c.e}</td><td className="py-3 px-2 font-bold text-green-600">{c.ca}</td><td className="py-3 px-2"><button className="text-teal-500 hover:text-teal-700">👁️</button></td></tr>
                            ))}
                          </tbody></table></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Mockup 1: Pipeline Commercial */}
                  {carouselIndex === 1 && (
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between"><div className="flex items-center gap-3"><span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span></div><div className="px-3 py-1.5 bg-green-500 text-white text-xs rounded-lg">+ Nouvelle offre</div></div>
                      <div className="p-5">
                        <h4 className="text-xl font-bold text-slate-800 mb-4">📊 Pipeline Commercial</h4>
                        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">{['Prospect','Qualifié','Devis','Négociation','Gagné','Perdu'].map((s,i)=>(<div key={i} className={`flex-shrink-0 w-40 p-3 rounded-xl border ${i===4?'bg-green-50 border-green-200':i===5?'bg-red-50 border-red-200':'bg-slate-50'}`}><div className="flex justify-between items-center mb-2"><span className="font-medium text-sm">{s}</span><span className="text-xs bg-white px-2 py-0.5 rounded-full">{[12,8,5,3,45,6][i]}</span></div><div className="space-y-2">{i<4&&[{n:'CHU Grenoble',m:'78k€'},{n:'Clinique Parc',m:'45k€'}].slice(0,i===0?2:1).map((c,j)=>(<div key={j} className="bg-white p-2 rounded-lg border text-xs"><div className="font-medium text-slate-800">{c.n}</div><div className="text-green-600 font-bold">{c.m}</div></div>))}</div></div>))}</div>
                        <div className="grid grid-cols-3 gap-4"><div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100"><div className="text-xs text-slate-500">Pipeline Total</div><div className="text-2xl font-bold text-green-600">245 800 €</div></div><div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100"><div className="text-xs text-slate-500">Taux Conversion</div><div className="text-2xl font-bold text-blue-600">68%</div></div><div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-100"><div className="text-xs text-slate-500">Cycle Moyen</div><div className="text-2xl font-bold text-amber-600">45j</div></div></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tab 2: Planification - Carousel avec Planification + Feuille Route + Avis */}
            {activeFeature === 2 && (
              <div className="animate-fade-in">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm mb-4">✨ Points forts</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[{icon:'🗺️',title:'Optimisation GPS',desc:'Réduisez les km'},{icon:'📅',title:'Drag & drop',desc:'Planifiez facilement'},{icon:'📧',title:'Avis auto',desc:'Confirmations 1 clic'},{icon:'📱',title:'App mobile',desc:'Feuille de route live'}].map((p,i)=>(<div key={i} className="p-3 bg-white/5 rounded-xl hover:bg-white/10"><div className="text-2xl mb-2">{p.icon}</div><h4 className="font-semibold text-white text-sm mb-1">{p.title}</h4><p className="text-white/50 text-xs">{p.desc}</p></div>))}
                  </div>
                </div>
                
                <div className="relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                  <button onClick={() => setCarouselIndex(prev => prev > 0 ? prev - 1 : 2)} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/70"><ChevronLeft className="w-5 h-5" /></button>
                  <button onClick={() => setCarouselIndex(prev => prev < 2 ? prev + 1 : 0)} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/70"><ChevronRight className="w-5 h-5" /></button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">{[0,1,2].map(i=>(<button key={i} onClick={()=>setCarouselIndex(i)} className={`w-2 h-2 rounded-full transition-all ${carouselIndex===i?'bg-[#2dd4bf] w-6':'bg-white/50'}`}/>))}</div>
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/50 backdrop-blur text-white text-xs rounded-full">{carouselIndex===0?'📅 Planification':carouselIndex===1?'🗺️ Feuille de Route':'📧 Avis Intervention'}</div>
                  
                  {/* Mockup 0: Planification COMPLET */}
                  {carouselIndex === 0 && (
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between"><div className="flex items-center gap-3"><span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span></div><div className="flex items-center gap-2"><span className="px-2 py-1 bg-white/10 text-white text-[10px] rounded">📅 Calendrier</span><span className="px-2 py-1 text-white/50 text-[10px]">🗺️ Carte</span><div className="px-3 py-1.5 bg-teal-500 text-white text-xs rounded-lg">+ Nouvelle</div></div></div>
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-4"><h4 className="text-xl font-bold text-slate-800 flex items-center gap-2"><span className="text-2xl">📅</span>Planification</h4><div className="flex gap-2"><button className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs">← Sem. précédente</button><span className="px-4 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium">Semaine 3 - Janvier 2026</span><button className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs">Sem. suivante →</button></div></div>
                        <div className="grid grid-cols-5 gap-2 mb-4">{['Lundi 13','Mardi 14','Mercredi 15','Jeudi 16','Vendredi 17'].map((d,i)=>(<div key={i} className="text-center"><div className="text-xs text-slate-500 mb-2">{d}</div><div className={`rounded-lg p-2 min-h-[120px] ${i<4?'bg-purple-50 border border-purple-200':'bg-slate-50 border border-slate-200'}`}>{i<4&&<div className="space-y-1">{[{t:'09:00',c:'CHU Grenoble',type:'CQC Scanner'},{t:'14:00',c:'Clinique Parc',type:'CQA Mammo'}].slice(0,i===2?1:2).map((int,j)=>(<div key={j} className="bg-white rounded p-1.5 border text-[10px]"><div className="font-medium text-slate-800">{int.t}</div><div className="text-slate-600 truncate">{int.c}</div><div className="text-purple-600">{int.type}</div></div>))}</div>}</div></div>))}</div>
                        <div className="grid grid-cols-3 gap-4"><div className="bg-purple-50 rounded-xl p-3 border border-purple-100"><div className="text-xs text-slate-500">Interventions</div><div className="text-2xl font-bold text-purple-600">12</div><div className="text-[10px] text-slate-400">cette semaine</div></div><div className="bg-green-50 rounded-xl p-3 border border-green-100"><div className="text-xs text-slate-500">Taux occupation</div><div className="text-2xl font-bold text-green-600">85%</div></div><div className="bg-amber-50 rounded-xl p-3 border border-amber-100"><div className="text-xs text-slate-500">Km estimés</div><div className="text-2xl font-bold text-amber-600">487 km</div></div></div>
                      </div>
                    </div>
                  )}
                  
                  {/* Mockup 1: Feuille de Route COMPLET */}
                  {carouselIndex === 1 && (
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between"><div className="flex items-center gap-3"><span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span><span className="text-[10px] text-white/40">Feuille de Route</span></div><div className="flex items-center gap-2"><div className="px-3 py-1.5 bg-purple-500 text-white text-xs rounded-lg">📤 Envoyer au technicien</div></div></div>
                      <div className="p-5">
                        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl p-4 mb-4">
                          <div className="flex items-center justify-between"><div><div className="text-sm opacity-80">Mardi 14 janvier 2026</div><div className="text-xl font-bold">Thomas BERNARD</div><div className="flex gap-4 mt-2 text-xs"><span>📍 Lyon → Grenoble → Annecy</span><span>🚗 312 km</span><span>⏱️ 4h15</span></div></div><div className="text-right"><div className="text-3xl font-bold">4</div><div className="text-xs opacity-80">interventions</div></div></div>
                        </div>
                        <div className="text-xs text-slate-500 mb-2 flex items-center gap-2"><span>🏨</span> Nuit d'hôtel prévue à Annecy</div>
                        <div className="space-y-3">{[{t:'08:30',n:'Centre Imagerie Alpes',a:'45 rue des Alpes, 38000 Grenoble',eq:'Scanner Siemens SOMATOM',type:'CQC',s:'✅',km:'98 km depuis Lyon'},{t:'11:00',n:'Clinique des Cèdres',a:'12 av. du Parc, 38100 Grenoble',eq:'Arceau chirurgical GE',type:'CQA',s:'🔄',km:'12 km'},{t:'14:30',n:'Hôpital d\'Annecy',a:'1 av. de l\'Hôpital, 74000 Annecy',eq:'IRM Philips Achieva',type:'CQC',s:'📅',km:'106 km'},{t:'16:30',n:'Cabinet Dr PETIT',a:'8 rue du Lac, 74000 Annecy',eq:'Rétro-alvéolaire Carestream',type:'CQA',s:'📅',km:'3 km'}].map((d,i)=>(<div key={i} className="p-3 border rounded-xl flex items-start gap-3 hover:border-purple-300"><div className="text-center"><div className="text-lg">{d.s}</div><div className="text-xs font-mono font-bold text-purple-600">{d.t}</div></div><div className="flex-1"><div className="font-semibold text-slate-800">{d.n}</div><div className="text-[10px] text-slate-500">{d.a}</div><div className="text-xs text-slate-600 mt-1">🔧 {d.eq}</div><div className="flex gap-2 mt-1"><span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-[10px]">{d.type}</span><span className="text-[10px] text-slate-400">🚗 {d.km}</span></div></div></div>))}</div>
                      </div>
                    </div>
                  )}
                  
                  {/* Mockup 2: Avis d'Intervention */}
                  {carouselIndex === 2 && (
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between"><div className="flex items-center gap-3"><span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span><span className="text-[10px] text-white/40">Avis d'Intervention</span></div><div className="px-3 py-1.5 bg-green-500 text-white text-xs rounded-lg">✅ Envoyé</div></div>
                      <div className="p-5">
                        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 border border-purple-100 mb-4">
                          <div className="text-xs text-slate-500 mb-2">À: contact@chu-grenoble.fr</div>
                          <div className="font-medium text-slate-800 mb-3">📅 Avis d'intervention - CQC Scanner - 15/12/2025</div>
                          <div className="bg-white rounded-lg p-4 border">
                            <div className="text-center mb-4"><div className="text-xl font-bold text-purple-700">AVIS D'INTERVENTION</div><div className="text-sm text-slate-500">Contrôle Qualité - Imagerie Médicale</div></div>
                            <div className="grid grid-cols-2 gap-4 mb-4">{[{l:'📅 Date prévue',v:'Lundi 15 décembre 2025'},{l:'⏰ Horaire',v:'09h00 - 11h00'},{l:'🔧 Type',v:'CQC Scanner'},{l:'👤 Technicien',v:'Thomas BERNARD'},{l:'📍 Site',v:'CHU Grenoble - Bât. A'},{l:'🖥️ Équipement',v:'Scanner Siemens SOMATOM'}].map((d,i)=>(<div key={i} className="text-sm"><span className="text-slate-500">{d.l}</span><br/><span className="font-semibold text-slate-800">{d.v}</span></div>))}</div>
                            <div className="text-xs text-slate-500 mb-3 p-3 bg-amber-50 rounded-lg border border-amber-100">⚠️ Merci de prévoir l'accès à la salle et la disponibilité de l'équipement pendant la durée du contrôle.</div>
                            <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-medium">✅ Confirmer ma disponibilité</button>
                          </div>
                        </div>
                        <div className="flex gap-2"><span className="px-3 py-1.5 bg-green-100 text-green-700 text-xs rounded-lg">✅ Email envoyé</span><span className="px-3 py-1.5 bg-amber-100 text-amber-700 text-xs rounded-lg">⏳ En attente confirmation</span></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tab 3: Suivi terrain - Carousel avec Suivi Activité + Dépôt Rapport + Suivi Interventions */}
            {activeFeature === 3 && (
              <div className="animate-fade-in">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm mb-4">✨ Points forts</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[{icon:'📍',title:'Géolocalisation',desc:'Position temps réel'},{icon:'📋',title:'Rapports mobiles',desc:'Photos, signatures'},{icon:'🔄',title:'Synchro auto',desc:'Données instantanées'},{icon:'✅',title:'Validation',desc:'Workflow configurable'}].map((p,i)=>(<div key={i} className="p-3 bg-white/5 rounded-xl hover:bg-white/10"><div className="text-2xl mb-2">{p.icon}</div><h4 className="font-semibold text-white text-sm mb-1">{p.title}</h4><p className="text-white/50 text-xs">{p.desc}</p></div>))}
                  </div>
                </div>
                
                <div className="relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                  <button onClick={() => setCarouselIndex(prev => prev > 0 ? prev - 1 : 2)} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/70"><ChevronLeft className="w-5 h-5" /></button>
                  <button onClick={() => setCarouselIndex(prev => prev < 2 ? prev + 1 : 0)} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/70"><ChevronRight className="w-5 h-5" /></button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">{[0,1,2].map(i=>(<button key={i} onClick={()=>setCarouselIndex(i)} className={`w-2 h-2 rounded-full transition-all ${carouselIndex===i?'bg-[#2dd4bf] w-6':'bg-white/50'}`}/>))}</div>
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/50 backdrop-blur text-white text-xs rounded-full">{carouselIndex===0?'📋 Suivi Activité':carouselIndex===1?'📄 Dépôt Rapport':'📊 Suivi Interventions'}</div>
                  
                  {/* Mockup 0: Suivi Activité COMPLET */}
                  {carouselIndex === 0 && (
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between"><div className="flex items-center gap-3"><span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span></div><div className="flex items-center gap-2"><span className="text-[10px] text-white/50">📅 11/12/2025</span><div className="px-3 py-1.5 bg-teal-500 text-white text-xs rounded-lg flex items-center gap-1.5"><RefreshCw className="w-3 h-3" /> Actualiser</div></div></div>
                      <div className="p-5">
                        <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><span className="text-2xl">📋</span>Suivi d'Activité</h4>
                        <div className="grid grid-cols-4 gap-3 mb-4">{[{v:'156',l:'Interventions',c:'text-blue-600',bg:'bg-blue-50'},{v:'94.2%',l:'Conformité',c:'text-green-600',bg:'bg-green-50'},{v:'12',l:'En attente',c:'text-orange-600',bg:'bg-orange-50'},{v:'3',l:'NC ouvertes',c:'text-red-600',bg:'bg-red-50'}].map((s,i)=>(<div key={i} className={`${s.bg} rounded-xl p-3 text-center border`}><div className={`text-2xl font-bold ${s.c}`}>{s.v}</div><div className="text-[10px] text-slate-500">{s.l}</div></div>))}</div>
                        <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b">{['N°','Client','Date','Type','Technicien','Statut'].map((h,i)=>(<th key={i} className="text-left py-2 px-2 text-[10px] text-slate-500 font-medium uppercase">{h}</th>))}</tr></thead><tbody>
                          {[{n:'12847',c:'CHU Grenoble Alpes',d:'15/12/25',t:'CQC Scanner',tech:'T. Bernard',s:'✅ Terminé',sc:'bg-green-100 text-green-700'},{n:'12848',c:'Clinique du Parc',d:'15/12/25',t:'CQA Mammo',tech:'M. Dupont',s:'🔄 En cours',sc:'bg-blue-100 text-blue-700'},{n:'12849',c:'Centre Imagerie Sud',d:'16/12/25',t:'CQC IRM',tech:'T. Bernard',s:'📅 Planifié',sc:'bg-slate-100 text-slate-600'},{n:'12850',c:'Hôpital St-Joseph',d:'16/12/25',t:'CQA Arceau',tech:'P. Martin',s:'📅 Planifié',sc:'bg-slate-100 text-slate-600'},{n:'12851',c:'Cabinet Dr PETIT',d:'17/12/25',t:'CQA Rétro',tech:'M. Dupont',s:'⚠️ NC',sc:'bg-amber-100 text-amber-700'}].map((r,i)=>(
                            <tr key={i} className="border-b hover:bg-slate-50"><td className="py-2 px-2 font-mono text-blue-600">{r.n}</td><td className="py-2 px-2 font-medium text-slate-800">{r.c}</td><td className="py-2 px-2 text-slate-500">{r.d}</td><td className="py-2 px-2"><span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-[10px]">{r.t}</span></td><td className="py-2 px-2 text-slate-600">{r.tech}</td><td className="py-2 px-2"><span className={`px-2 py-0.5 rounded text-[10px] ${r.sc}`}>{r.s}</span></td></tr>
                          ))}
                        </tbody></table></div>
                      </div>
                    </div>
                  )}
                  
                  {/* Mockup 1: Dépôt Rapport COMPLET */}
                  {carouselIndex === 1 && (
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between"><div className="flex items-center gap-3"><span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span><span className="text-[10px] text-white/40">Dépôt de Rapport</span></div><div className="px-3 py-1.5 bg-orange-500 text-white text-xs rounded-lg">📤 Envoyer</div></div>
                      <div className="p-5">
                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
                          <div className="flex items-center gap-3 mb-3"><span className="text-2xl">📋</span><div><div className="font-bold text-slate-800">Rapport #12847 - CQC Scanner</div><div className="text-xs text-slate-500">CHU Grenoble Alpes • Scanner Siemens SOMATOM</div></div></div>
                          <div className="grid grid-cols-3 gap-3 text-sm">{[{l:'Technicien',v:'Thomas BERNARD'},{l:'Date',v:'15/12/2025'},{l:'Durée',v:'1h45'}].map((d,i)=>(<div key={i}><span className="text-slate-500 text-xs">{d.l}</span><br/><span className="font-medium">{d.v}</span></div>))}</div>
                        </div>
                        <div className="space-y-3 mb-4">
                          <div className="border rounded-xl p-4"><div className="flex justify-between items-center mb-3"><span className="font-semibold text-slate-800">Points de contrôle</span><span className="text-green-600 font-bold">24/24 ✅</span></div><div className="w-full bg-slate-200 rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{width:'100%'}}></div></div></div>
                          <div className="border rounded-xl p-4"><div className="flex justify-between items-center mb-2"><span className="font-semibold text-slate-800">Non-conformités</span><span className="text-amber-600 font-bold">1 mineure</span></div><div className="bg-amber-50 rounded-lg p-2 text-xs"><span className="font-medium">NC-001:</span> Étiquetage date de contrôle manquant</div></div>
                          <div className="border rounded-xl p-4"><div className="font-semibold text-slate-800 mb-2">Photos jointes</div><div className="flex gap-2">{[1,2,3,4,5,6].map(i=>(<div key={i} className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">📷</div>))}</div></div>
                        </div>
                        <div className="flex gap-3"><button className="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl font-medium">💾 Brouillon</button><button className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-medium">✅ Valider et envoyer</button></div>
                      </div>
                    </div>
                  )}
                  
                  {/* Mockup 2: Suivi Interventions */}
                  {carouselIndex === 2 && (
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between"><div className="flex items-center gap-3"><span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span></div><div className="flex items-center gap-2"><span className="px-2 py-1 bg-white/10 text-white text-[10px] rounded">📊 Tableau</span><span className="px-2 py-1 text-white/50 text-[10px]">📅 Calendrier</span><span className="px-2 py-1 text-white/50 text-[10px]">🗺️ Carte</span></div></div>
                      <div className="p-5">
                        <h4 className="text-xl font-bold text-slate-800 mb-4">📊 Suivi des Interventions</h4>
                        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">{['Tous','En cours','Terminés','NC ouvertes'].map((f,i)=>(<button key={i} className={`px-4 py-2 rounded-lg text-xs whitespace-nowrap ${i===0?'bg-teal-500 text-white':'bg-slate-100 text-slate-600'}`}>{f}</button>))}</div>
                        <div className="grid grid-cols-4 gap-3 mb-4">{[{v:'847',l:'Total',bg:'bg-slate-50'},{v:'823',l:'Terminées',c:'text-green-600',bg:'bg-green-50'},{v:'12',l:'En cours',c:'text-blue-600',bg:'bg-blue-50'},{v:'12',l:'NC',c:'text-red-600',bg:'bg-red-50'}].map((s,i)=>(<div key={i} className={`${s.bg} rounded-xl p-3 text-center border`}><div className={`text-xl font-bold ${s.c||'text-slate-800'}`}>{s.v}</div><div className="text-[10px] text-slate-500">{s.l}</div></div>))}</div>
                        <div className="bg-slate-50 rounded-xl p-4 border"><div className="text-sm font-medium text-slate-700 mb-3">Interventions par mois</div><div className="flex items-end justify-between h-24 gap-2">{[{m:'Juin',v:45},{m:'Juil',v:62},{m:'Août',v:58},{m:'Sep',v:71},{m:'Oct',v:68},{m:'Nov',v:75},{m:'Déc',v:42}].map((d,i)=>(<div key={i} className="flex-1 flex flex-col items-center"><div className="w-full bg-teal-400 rounded-t" style={{height:`${d.v}px`}}></div><span className="text-[8px] text-slate-400 mt-1">{d.m}</span></div>))}</div></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tab 4: Clients - Carousel avec Fiche Client + Équipements */}
            {activeFeature === 4 && (
              <div className="animate-fade-in">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full text-sm mb-4">✨ Points forts</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[{icon:'🏢',title:'Fiche complète',desc:'Contacts, historique'},{icon:'📁',title:'Documents',desc:'Tout en 1 clic'},{icon:'🖥️',title:'Portail client',desc:'Accès autonome'},{icon:'🔒',title:'Droits accès',desc:'Contrôle fin'}].map((p,i)=>(<div key={i} className="p-3 bg-white/5 rounded-xl hover:bg-white/10"><div className="text-2xl mb-2">{p.icon}</div><h4 className="font-semibold text-white text-sm mb-1">{p.title}</h4><p className="text-white/50 text-xs">{p.desc}</p></div>))}
                  </div>
                </div>
                
                <div className="relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                  <button onClick={() => setCarouselIndex(prev => prev > 0 ? prev - 1 : 1)} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/70"><ChevronLeft className="w-5 h-5" /></button>
                  <button onClick={() => setCarouselIndex(prev => prev < 1 ? prev + 1 : 0)} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/70"><ChevronRight className="w-5 h-5" /></button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">{[0,1].map(i=>(<button key={i} onClick={()=>setCarouselIndex(i)} className={`w-2 h-2 rounded-full transition-all ${carouselIndex===i?'bg-[#2dd4bf] w-6':'bg-white/50'}`}/>))}</div>
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/50 backdrop-blur text-white text-xs rounded-full">{carouselIndex===0?'🏢 Fiche Client':'🖥️ Équipements'}</div>
                  
                  {/* Mockup 0: Fiche Client détaillée */}
                  {carouselIndex === 0 && (
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between"><div className="flex items-center gap-3"><span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span><span className="text-[10px] text-white/40">Fiche Client</span></div><div className="flex gap-2"><button className="px-3 py-1.5 bg-blue-500 text-white text-xs rounded-lg">📝 Modifier</button><button className="px-3 py-1.5 bg-green-500 text-white text-xs rounded-lg">📤 Exporter</button></div></div>
                      <div className="p-5">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl flex items-center justify-center text-pink-600 font-bold text-xl">CHU</div>
                          <div className="flex-1"><h4 className="text-xl font-bold text-slate-800">CHU Grenoble Alpes</h4><div className="text-sm text-slate-500">Client depuis : Mars 2019</div><div className="flex gap-2 mt-2"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-[10px]">Premium</span><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-[10px]">Actif</span></div></div>
                          <div className="text-right"><div className="text-2xl font-bold text-green-600">185 000 €</div><div className="text-xs text-slate-500">CA Annuel</div></div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-6">{[{l:'Sites',v:'4',i:'🏢'},{l:'Équipements',v:'62',i:'🖥️'},{l:'Interventions',v:'156',i:'📋'}].map((s,i)=>(<div key={i} className="bg-slate-50 rounded-xl p-4 text-center border"><span className="text-2xl">{s.i}</span><div className="text-2xl font-bold text-slate-800 mt-1">{s.v}</div><div className="text-xs text-slate-500">{s.l}</div></div>))}</div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="border rounded-xl p-4"><div className="font-semibold text-slate-800 mb-3">📍 Sites</div><div className="space-y-2">{['Hôpital Nord - Bât A','Hôpital Sud - Imagerie','Clinique Universitaire','Centre de Recherche'].map((s,i)=>(<div key={i} className="flex items-center gap-2 text-sm"><span className="w-2 h-2 bg-teal-400 rounded-full"></span>{s}</div>))}</div></div>
                          <div className="border rounded-xl p-4"><div className="font-semibold text-slate-800 mb-3">👤 Contacts</div><div className="space-y-2">{[{n:'Dr. Marie LAURENT',r:'Resp. Qualité',e:'m.laurent@chu-grenoble.fr'},{n:'Jean DUPONT',r:'Service Technique',e:'j.dupont@chu-grenoble.fr'}].map((c,i)=>(<div key={i} className="text-sm"><div className="font-medium">{c.n}</div><div className="text-[10px] text-slate-500">{c.r}</div><div className="text-[10px] text-blue-600">{c.e}</div></div>))}</div></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Mockup 1: Équipements */}
                  {carouselIndex === 1 && (
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between"><div className="flex items-center gap-3"><span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span><span className="text-[10px] text-white/40">Équipements</span></div><div className="px-3 py-1.5 bg-pink-500 text-white text-xs rounded-lg">+ Ajouter</div></div>
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-4"><h4 className="text-xl font-bold text-slate-800">🖥️ Parc Équipements</h4><input className="px-3 py-2 border rounded-lg text-sm w-64" placeholder="🔍 Rechercher..." readOnly /></div>
                        <div className="grid grid-cols-4 gap-3 mb-4">{[{v:'62',l:'Total',bg:'bg-slate-50'},{v:'45',l:'Conformes',c:'text-green-600',bg:'bg-green-50'},{v:'12',l:'À contrôler',c:'text-amber-600',bg:'bg-amber-50'},{v:'5',l:'Hors service',c:'text-red-600',bg:'bg-red-50'}].map((s,i)=>(<div key={i} className={`${s.bg} rounded-xl p-3 text-center border`}><div className={`text-xl font-bold ${s.c||'text-slate-800'}`}>{s.v}</div><div className="text-[10px] text-slate-500">{s.l}</div></div>))}</div>
                        <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b">{['Équipement','Marque/Modèle','N° Série','Site','Prochain CQ','Statut'].map((h,i)=>(<th key={i} className="text-left py-2 px-2 text-[10px] text-slate-500 font-medium uppercase">{h}</th>))}</tr></thead><tbody>
                          {[{e:'Scanner',m:'Siemens SOMATOM',ns:'SN-2024-001',site:'Hôpital Nord',cq:'15/01/26',s:'✅',sc:'bg-green-100 text-green-700'},{e:'IRM',m:'Philips Achieva',ns:'SN-2023-045',site:'Hôpital Sud',cq:'20/01/26',s:'✅',sc:'bg-green-100 text-green-700'},{e:'Mammographe',m:'GE Senographe',ns:'SN-2022-089',site:'Clinique Univ.',cq:'05/01/26',s:'⚠️',sc:'bg-amber-100 text-amber-700'},{e:'Arceau',m:'GE OEC',ns:'SN-2024-112',site:'Hôpital Nord',cq:'25/01/26',s:'✅',sc:'bg-green-100 text-green-700'}].map((r,i)=>(
                            <tr key={i} className="border-b hover:bg-slate-50"><td className="py-2 px-2 font-medium text-slate-800">{r.e}</td><td className="py-2 px-2 text-slate-600">{r.m}</td><td className="py-2 px-2 font-mono text-xs text-slate-500">{r.ns}</td><td className="py-2 px-2 text-slate-600">{r.site}</td><td className="py-2 px-2">{r.cq}</td><td className="py-2 px-2"><span className={`px-2 py-0.5 rounded text-[10px] ${r.sc}`}>{r.s}</span></td></tr>
                          ))}
                        </tbody></table></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tab 5: Administration - Carousel avec Utilisateurs, Rôles, Modèles, Paramètres, Intégrations */}
            {activeFeature === 5 && (
              <div className="animate-fade-in">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-500/20 text-slate-400 rounded-full text-sm mb-4">✨ Points forts</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[{icon:'👥',title:'Utilisateurs',desc:'Comptes & rôles'},{icon:'🛡️',title:'Permissions',desc:'Droits sur-mesure'},{icon:'📄',title:'Modèles',desc:'Rapports configurables'},{icon:'⚙️',title:'Paramètres',desc:'Intégrations API'}].map((p,i)=>(<div key={i} className="p-3 bg-white/5 rounded-xl hover:bg-white/10"><div className="text-2xl mb-2">{p.icon}</div><h4 className="font-semibold text-white text-sm mb-1">{p.title}</h4><p className="text-white/50 text-xs">{p.desc}</p></div>))}
                  </div>
                </div>
                
                <div className="relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                  <button onClick={() => setCarouselIndex(prev => prev > 0 ? prev - 1 : 4)} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/70"><ChevronLeft className="w-5 h-5" /></button>
                  <button onClick={() => setCarouselIndex(prev => prev < 4 ? prev + 1 : 0)} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/70"><ChevronRight className="w-5 h-5" /></button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">{[0,1,2,3,4].map(i=>(<button key={i} onClick={()=>setCarouselIndex(i)} className={`w-2 h-2 rounded-full transition-all ${carouselIndex===i?'bg-[#2dd4bf] w-6':'bg-white/50'}`}/>))}</div>
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/50 backdrop-blur text-white text-xs rounded-full">{['👥 Utilisateurs','🛡️ Rôles','📄 Modèles','⚙️ Paramètres','🔄 Intégrations'][carouselIndex]}</div>
                  
                  {/* Mockup 0: Utilisateurs */}
                  {carouselIndex === 0 && (
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between"><div className="flex items-center gap-3"><span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span><span className="text-[10px] text-white/40">Administration › Utilisateurs</span></div><div className="px-3 py-1.5 bg-teal-500 text-white text-xs rounded-lg">+ Nouvel utilisateur</div></div>
                      <div className="p-5">
                        <div className="grid grid-cols-4 gap-3 mb-4">{[{v:'12',l:'Total',bg:'bg-slate-50'},{v:'8',l:'Actifs',c:'text-green-600',bg:'bg-green-50'},{v:'3',l:'Tech.',c:'text-blue-600',bg:'bg-blue-50'},{v:'1',l:'Admin',c:'text-purple-600',bg:'bg-purple-50'}].map((s,i)=>(<div key={i} className={`${s.bg} rounded-xl p-3 text-center border`}><div className={`text-xl font-bold ${s.c||'text-slate-800'}`}>{s.v}</div><div className="text-[10px] text-slate-500">{s.l}</div></div>))}</div>
                        <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b">{['Utilisateur','Email','Rôle','Statut','Dernière connexion'].map((h,i)=>(<th key={i} className="text-left py-2 px-2 text-[10px] text-slate-500 font-medium uppercase">{h}</th>))}</tr></thead><tbody>
                          {[{n:'Marie LAURENT',e:'m.laurent@paqa.fr',r:'Administrateur',s:'🟢 Actif',d:'Aujourd\'hui 09:15',rc:'bg-purple-100 text-purple-700'},{n:'Thomas BERNARD',e:'t.bernard@paqa.fr',r:'Technicien',s:'🟢 Actif',d:'Aujourd\'hui 08:30',rc:'bg-blue-100 text-blue-700'},{n:'Pierre MARTIN',e:'p.martin@paqa.fr',r:'Technicien',s:'🟢 Actif',d:'Hier 17:45',rc:'bg-blue-100 text-blue-700'},{n:'Sophie DUBOIS',e:'s.dubois@paqa.fr',r:'Commercial',s:'🟡 Absent',d:'10/12/2025',rc:'bg-green-100 text-green-700'}].map((u,i)=>(
                            <tr key={i} className="border-b hover:bg-slate-50"><td className="py-2 px-2"><div className="flex items-center gap-2"><div className="w-8 h-8 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-xs">{u.n.split(' ').map(w=>w[0]).join('')}</div><span className="font-medium text-slate-800">{u.n}</span></div></td><td className="py-2 px-2 text-slate-500">{u.e}</td><td className="py-2 px-2"><span className={`px-2 py-0.5 rounded text-[10px] ${u.rc}`}>{u.r}</span></td><td className="py-2 px-2">{u.s}</td><td className="py-2 px-2 text-slate-500">{u.d}</td></tr>
                          ))}
                        </tbody></table></div>
                      </div>
                    </div>
                  )}
                  
                  {/* Mockup 1: Rôles */}
                  {carouselIndex === 1 && (
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between"><div className="flex items-center gap-3"><span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span><span className="text-[10px] text-white/40">Administration › Rôles</span></div><div className="px-3 py-1.5 bg-teal-500 text-white text-xs rounded-lg">+ Nouveau rôle</div></div>
                      <div className="p-5">
                        <div className="space-y-3">{[{n:'Administrateur',d:'Accès complet à toutes les fonctionnalités',u:1,c:'bg-purple-100 border-purple-200',p:['Tout']},{n:'Manager',d:'Gestion équipe, rapports, clients',u:2,c:'bg-blue-100 border-blue-200',p:['Dashboard','Clients','Rapports','Équipe']},{n:'Technicien',d:'Interventions, rapports terrain',u:5,c:'bg-green-100 border-green-200',p:['Planification','Interventions','Rapports']},{n:'Commercial',d:'Prospection, devis, suivi clients',u:3,c:'bg-amber-100 border-amber-200',p:['Commercial','Clients','Devis']},{n:'Lecture seule',d:'Consultation uniquement',u:1,c:'bg-slate-100 border-slate-200',p:['Dashboard (lecture)']}].map((r,i)=>(
                          <div key={i} className={`p-4 rounded-xl border ${r.c}`}><div className="flex items-center justify-between mb-2"><div className="flex items-center gap-3"><span className="font-semibold text-slate-800">{r.n}</span><span className="text-xs text-slate-500">{r.u} utilisateur(s)</span></div><button className="text-teal-600 text-xs">✏️ Modifier</button></div><div className="text-xs text-slate-600 mb-2">{r.d}</div><div className="flex flex-wrap gap-1">{r.p.map((p,j)=>(<span key={j} className="px-2 py-0.5 bg-white/50 rounded text-[10px] text-slate-600">{p}</span>))}</div></div>
                        ))}</div>
                      </div>
                    </div>
                  )}
                  
                  {/* Mockup 2: Modèles de rapports */}
                  {carouselIndex === 2 && (
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between"><div className="flex items-center gap-3"><span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span><span className="text-[10px] text-white/40">Administration › Modèles Rapports</span></div><div className="px-3 py-1.5 bg-teal-500 text-white text-xs rounded-lg">+ Nouveau modèle</div></div>
                      <div className="p-5">
                        <div className="grid grid-cols-2 gap-4">{[{n:'CQC Scanner',t:'Contrôle Qualité Complet',p:24,c:'bg-blue-50 border-blue-200'},{n:'CQA Mammographe',t:'Contrôle Qualité Annuel',p:18,c:'bg-pink-50 border-pink-200'},{n:'CQC IRM',t:'Contrôle Qualité Complet',p:32,c:'bg-purple-50 border-purple-200'},{n:'CQA Arceau',t:'Contrôle Qualité Annuel',p:15,c:'bg-amber-50 border-amber-200'},{n:'CQI Rétro-alvéolaire',t:'Contrôle Initial',p:12,c:'bg-green-50 border-green-200'},{n:'Maintenance préventive',t:'Check-list maintenance',p:20,c:'bg-slate-50 border-slate-200'}].map((m,i)=>(
                          <div key={i} className={`p-4 rounded-xl border ${m.c}`}><div className="flex items-center justify-between mb-2"><span className="font-semibold text-slate-800">{m.n}</span><button className="text-teal-600 text-xs">✏️</button></div><div className="text-xs text-slate-500 mb-3">{m.t}</div><div className="flex items-center justify-between"><span className="text-xs text-slate-600">{m.p} points de contrôle</span><span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px]">Actif</span></div></div>
                        ))}</div>
                      </div>
                    </div>
                  )}
                  
                  {/* Mockup 3: Paramètres */}
                  {carouselIndex === 3 && (
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between"><div className="flex items-center gap-3"><span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span><span className="text-[10px] text-white/40">Administration › Paramètres</span></div><div className="px-3 py-1.5 bg-green-500 text-white text-xs rounded-lg">💾 Sauvegarder</div></div>
                      <div className="p-5">
                        <div className="space-y-4">{[{t:'Entreprise',i:[{l:'Nom',v:'PAQA - Physique Appliquée au Contrôle'},{l:'SIRET',v:'123 456 789 00012'},{l:'Email support',v:'support@paqa.fr'}]},{t:'Notifications',i:[{l:'Email de rappel',v:'Activé',check:true},{l:'Délai rappel (jours)',v:'7'},{l:'Rapport automatique',v:'Activé',check:true}]},{t:'Facturation',i:[{l:'TVA par défaut',v:'20%'},{l:'Devise',v:'EUR (€)'},{l:'Délai paiement',v:'30 jours'}]}].map((s,i)=>(
                          <div key={i} className="border rounded-xl p-4"><div className="font-semibold text-slate-800 mb-3 flex items-center gap-2"><span>{['🏢','🔔','💰'][i]}</span>{s.t}</div><div className="space-y-2">{s.i.map((f,j)=>(<div key={j} className="flex items-center justify-between"><span className="text-sm text-slate-600">{f.l}</span>{f.check?<div className="w-10 h-5 bg-green-500 rounded-full relative"><div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div></div>:<span className="px-3 py-1 bg-slate-100 rounded text-sm">{f.v}</span>}</div>))}</div></div>
                        ))}</div>
                      </div>
                    </div>
                  )}
                  
                  {/* Mockup 4: Intégrations */}
                  {carouselIndex === 4 && (
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between"><div className="flex items-center gap-3"><span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span><span className="text-[10px] text-white/40">Administration › Intégrations</span></div></div>
                      <div className="p-5">
                        <div className="space-y-3">{[{n:'Synchroteam',d:'Synchronisation planning et interventions',s:true,c:'from-blue-500 to-cyan-500'},{n:'Google Sheets',d:'Export automatique des données',s:true,c:'from-green-500 to-emerald-500'},{n:'EBP Gestion',d:'Facturation et comptabilité',s:false,c:'from-orange-500 to-amber-500'},{n:'PandaDoc',d:'Génération automatique de devis',s:true,c:'from-purple-500 to-indigo-500'},{n:'Webhook personnalisé',d:'API REST pour intégrations tierces',s:true,c:'from-slate-500 to-zinc-500'}].map((int,i)=>(
                          <div key={i} className="p-4 border rounded-xl flex items-center gap-4"><div className={`w-12 h-12 bg-gradient-to-br ${int.c} rounded-xl flex items-center justify-center text-white font-bold`}>{int.n[0]}</div><div className="flex-1"><div className="font-semibold text-slate-800">{int.n}</div><div className="text-xs text-slate-500">{int.d}</div></div><div className="flex items-center gap-3">{int.s?<span className="flex items-center gap-2 text-green-600 text-sm"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>Connecté</span>:<span className="text-slate-400 text-sm">Non configuré</span>}<button className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs">{int.s?'Configurer':'Activer'}</button></div></div>
                        ))}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Les mockups détaillés sont maintenant dans les tabs interactifs ci-dessus */}

      {/* Section supprimée - mockups intégrés dans les tabs */}
      <section className="hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Aperçu des <span className="text-[#2dd4bf]">modules</span> en détail
            </h2>
            <p className="text-white/60 text-lg">
              Des interfaces pensées pour le terrain
            </p>
          </div>

          {/* Galerie des modules LISA - Style clair comme la vraie app */}
          <div className="mt-20 mb-16">
            <h3 className="text-3xl font-bold text-center mb-4">
              Découvrez les <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">modules LISA</span>
            </h3>
            <p className="text-white/50 text-center mb-12 max-w-2xl mx-auto">
              Une interface claire et intuitive, conçue pour les professionnels de l'inspection
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Module 1: Dashboard Financier - ENRICHI */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header LISA */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
                    <span className="text-[10px] text-white/40 hidden sm:block">Logiciel métier Inspections et de Suivi des Activités</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-white/50">📅 Mise à jour: 11/12/2025 19:30</span>
                    <div className="px-3 py-1.5 bg-teal-500 text-white text-xs rounded-lg flex items-center gap-1.5 hover:bg-teal-600 cursor-pointer">
                      <RefreshCw className="w-3 h-3" /> Actualiser
                    </div>
                  </div>
                </div>
                {/* Sidebar + Content */}
                <div className="flex">
                  {/* Mini Sidebar */}
                  <div className="w-40 bg-slate-50 border-r p-3 hidden sm:block">
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">PA</span>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400">Connecté :</div>
                        <div className="text-xs font-medium text-slate-700">Admin PAQA</div>
                      </div>
                    </div>
                    <nav className="space-y-1">
                      {[
                        { icon: '💰', label: 'FINANCIER', active: true },
                        { icon: '📊', label: 'COMMERCIAL', active: false },
                        { icon: '🏦', label: 'TRÉSORERIE', active: false },
                        { icon: '📅', label: 'PLANIFICATION', active: false },
                        { icon: '📋', label: 'SUIVI ACTIVITÉ', active: false },
                        { icon: '🗺️', label: 'FEUILLE ROUTE', active: false },
                        { icon: '🏢', label: 'BASE CLIENT', active: false },
                      ].map((item, i) => (
                        <div key={i} className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[10px] ${item.active ? 'bg-teal-500 text-white font-medium' : 'text-slate-600 hover:bg-slate-100'}`}>
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </nav>
                  </div>
                  {/* Main Content */}
                  <div className="flex-1 p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                          <span className="text-amber-600">💰</span>
                        </div>
                        Dashboard Financier
                      </h4>
                      <span className="text-xs text-slate-400">Mise à jour : Août 2025</span>
                    </div>
                    
                    {/* Section Chiffre d'Affaires */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-6 h-6 bg-green-100 rounded flex items-center justify-center text-green-600 text-sm">$</span>
                        <span className="font-semibold text-slate-700">Chiffre d'Affaires</span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="w-5 h-5 bg-green-100 rounded flex items-center justify-center text-[10px] text-green-600">$</span>
                            <span className="text-[10px] text-slate-500">CA 2025 Cumulé</span>
                            <span className="text-[9px] text-green-500 ml-auto">↗ 18.3%</span>
                          </div>
                          <div className="text-xl font-bold text-slate-800">1 811 081 €</div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-[9px] text-slate-400">Budget</span>
                            <span className="text-[9px] text-slate-600">1 978 147 €</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-1.5 mt-1">
                            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '91.5%' }}></div>
                          </div>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center text-[10px] text-blue-600">$</span>
                            <span className="text-[10px] text-slate-500">CA 2024 Cumulé</span>
                            <span className="text-[9px] text-slate-400 ml-auto">↗ 0.0%</span>
                          </div>
                          <div className="text-xl font-bold text-slate-800">1 530 861 €</div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-[9px] text-slate-400">Budget</span>
                            <span className="text-[9px] text-slate-600">1 693 126 €</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-1.5 mt-1">
                            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '90.4%' }}></div>
                          </div>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="w-5 h-5 bg-purple-100 rounded flex items-center justify-center text-[10px] text-purple-600">📊</span>
                            <span className="text-[10px] text-slate-500">Croissance CA</span>
                            <span className="text-[9px] text-green-500 ml-auto">↗ 18.3%</span>
                          </div>
                          <div className="text-3xl font-bold text-green-600">18.3%</div>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="w-5 h-5 bg-amber-100 rounded flex items-center justify-center text-[10px] text-amber-600">🎯</span>
                            <span className="text-[10px] text-slate-500">Budget CA 2025</span>
                            <span className="text-[9px] text-slate-400 ml-auto">↗ 0.0%</span>
                          </div>
                          <div className="text-xl font-bold text-slate-800">1 978 147 €</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Charts Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                        <div className="text-sm font-medium text-slate-700 mb-3">Évolution CA 2024 vs 2025</div>
                        <div className="flex items-end justify-between h-28 gap-1 mb-2">
                          {[
                            { m: 'Fév', v25: 95, v24: 85 },
                            { m: 'Mars', v25: 145, v24: 120 },
                            { m: 'Avril', v25: 180, v24: 155 },
                            { m: 'Mai', v25: 220, v24: 195 },
                            { m: 'Juin', v25: 285, v24: 240 },
                            { m: 'Juil', v25: 350, v24: 295 },
                            { m: 'Août', v25: 420, v24: 345 },
                          ].map((d, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                              <div className="w-full flex gap-0.5 items-end justify-center" style={{ height: '100px' }}>
                                <div className="w-2 bg-teal-400 rounded-t" style={{ height: `${d.v25 / 4.5}%` }}></div>
                                <div className="w-2 bg-slate-300 rounded-t" style={{ height: `${d.v24 / 4.5}%` }}></div>
                              </div>
                              <span className="text-[8px] text-slate-400">{d.m}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-center gap-4 text-[10px]">
                          <span className="flex items-center gap-1"><span className="w-2 h-2 bg-teal-400 rounded"></span> CA 2025</span>
                          <span className="flex items-center gap-1"><span className="w-2 h-2 bg-slate-300 rounded"></span> CA 2024</span>
                        </div>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                        <div className="text-sm font-medium text-slate-700 mb-3">Réalisation Budget CA</div>
                        <div className="mb-3">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-600">Progression CA vs Budget</span>
                            <span className="font-semibold">1 811 081 / 1 978 147 €</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-3 rounded-full relative" style={{ width: '91.6%' }}>
                              <span className="absolute right-1 top-0 text-[9px] text-white font-bold">91.6%</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-green-600">91.6% réalisé</span>
                          <span className="text-orange-500">167 066 € restants</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 2: Dashboard Commercial - ENRICHI */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1.5 bg-blue-500 text-white text-xs rounded-lg flex items-center gap-1.5">
                      📊 Grille Tarifaire
                    </div>
                    <span className="text-[10px] text-white/50">Connecté: Admin</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600">📊</span>
                    </div>
                    Dashboard Commercial
                  </h4>
                  
                  {/* Tabs */}
                  <div className="flex gap-1 mb-5 border-b">
                    {[
                      { label: 'Performances', icon: '📈', active: true },
                      { label: 'Carte de France', icon: '🗺️', active: false },
                      { label: 'Liste des Offres', icon: '📋', active: false },
                      { label: 'Liste des Prospects', icon: '👥', active: false },
                    ].map((tab, i) => (
                      <button key={i} className={`px-4 py-2 text-xs flex items-center gap-1.5 border-b-2 ${tab.active ? 'border-blue-500 text-blue-700 font-medium' : 'border-transparent text-slate-500'}`}>
                        <span>{tab.icon}</span> {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Performance Globale */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-slate-600 font-medium">📊 Performance Globale Équipe</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                      {[
                        { value: '344', label: 'OFFRE Total', color: 'text-blue-600' },
                        { value: '234', label: 'Conversions', color: 'text-green-600' },
                        { value: '68.0%', label: 'Taux Conversion', color: 'text-teal-600' },
                        { value: '12', label: 'Captations', color: 'text-orange-500' },
                        { value: '5', label: 'Relances', color: 'text-red-500' },
                      ].map((stat, i) => (
                        <div key={i} className="bg-slate-50 rounded-xl p-3 text-center border">
                          <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                          <div className="text-[10px] text-slate-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CA Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                      <div className="text-xs text-slate-500 mb-1">CA Réalisé Global</div>
                      <div className="text-3xl font-bold text-green-600">475 726 €</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                      <div className="text-xs text-slate-500 mb-1">Portefeuille d'Affaires Global</div>
                      <div className="text-3xl font-bold text-blue-600">96 047 €</div>
                    </div>
                  </div>

                  {/* Objective Card */}
                  <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-5 text-white">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                          <span>🎯</span>
                        </div>
                        <div>
                          <div className="font-semibold">CA Global Équipe</div>
                          <div className="text-xs text-white/60">Objectif Annuel de Croissance</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-green-400">104.7%</div>
                        <div className="text-xs text-white/60">Réalisé</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                      <div className="bg-white/10 rounded-lg p-2">
                        <div className="text-[10px] text-white/60">CA Réalisé</div>
                        <div className="font-bold">475 726 €</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-2">
                        <div className="text-[10px] text-white/60">Objectif Total</div>
                        <div className="font-bold">454 500 €</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-2">
                        <div className="text-[10px] text-white/60">Dépassement</div>
                        <div className="font-bold text-green-400">+21 226,14 €</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progression vers l'objectif</span>
                        <span className="text-green-400">🎉 Objectif dépassé !</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-yellow-400 via-green-400 to-green-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div className="mt-3 bg-green-500/20 rounded-lg p-2 text-center">
                      <span className="text-green-300">🎉 OBJECTIF PULVÉRISÉ ! Vous êtes des légendes ! Dépassement de 4.7% ! 🏆</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 3: Planification - ENRICHI */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-white/10 text-white text-[10px] rounded">📅 Calendrier</span>
                    <span className="px-2 py-1 text-white/50 text-[10px]">🗺️ Carte</span>
                    <span className="px-2 py-1 text-white/50 text-[10px]">📋 Liste</span>
                    <div className="px-3 py-1.5 bg-teal-500 text-white text-xs rounded-lg">+ Nouvelle</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <span className="text-2xl">📅</span>
                        Planification des Interventions
                      </h4>
                      <p className="text-sm text-slate-500">Gérez et optimisez les tournées de vos techniciens</p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">● En ligne</span>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-5">
                    {[
                      { icon: '📅', label: "Aujourd'hui", value: '10' },
                      { icon: '📆', label: 'Semaine', value: '120' },
                      { icon: '⏳', label: 'Planifiées', value: '472' },
                      { icon: '✅', label: 'Terminées', value: '85' },
                      { icon: '🔧', label: 'Total', value: '1000' },
                    ].map((s, i) => (
                      <div key={i} className="bg-slate-50 rounded-xl p-3 border text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <span>{s.icon}</span>
                          <span className="text-[10px] text-slate-500">{s.label}</span>
                        </div>
                        <div className="text-2xl font-bold text-slate-800">{s.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mb-4 bg-slate-50 rounded-lg p-2">
                    <button className="px-3 py-1 text-slate-600 hover:bg-white rounded">←</button>
                    <button className="px-3 py-1 bg-white rounded shadow-sm text-sm font-medium">Aujourd'hui</button>
                    <span className="text-sm font-semibold text-slate-700">8 déc. - 14 déc. 2025</span>
                    <select className="text-xs border rounded px-2 py-1">
                      <option>Tous les techniciens</option>
                    </select>
                    <select className="text-xs border rounded px-2 py-1">
                      <option>Tous statuts</option>
                    </select>
                    <button className="px-3 py-1 text-slate-600 hover:bg-white rounded">→</button>
                  </div>

                  {/* Calendar Grid */}
                  <div className="border rounded-xl overflow-hidden overflow-x-auto">
                    {/* Header */}
                    <div className="grid grid-cols-8 bg-slate-100 text-xs font-medium text-slate-600">
                      <div className="p-2 border-r">Heure</div>
                      {['lun. 8', 'mar. 9', 'mer. 10', 'jeu. 11', 'ven. 12', 'sam. 13', 'dim. 14'].map((d, i) => (
                        <div key={i} className={`p-2 text-center border-r ${i === 3 ? 'bg-teal-500 text-white' : ''}`}>{d}</div>
                      ))}
                    </div>
                    {/* Time slots */}
                    {['8:00', '9:00', '10:00'].map((time, ti) => (
                      <div key={ti} className="grid grid-cols-8 border-t text-[9px]">
                        <div className="p-2 border-r text-slate-500 bg-slate-50">{time}</div>
                        {[...Array(7)].map((_, di) => (
                          <div key={di} className="p-1 border-r min-h-[50px]">
                            {ti === 0 && di === 1 && (
                              <div className="bg-teal-100 text-teal-800 p-1 rounded text-[8px] mb-1">
                                <div className="font-medium truncate">Cabinet dentaire du Do...</div>
                                <div className="text-teal-600">CQC - Rétro-alvéolaire</div>
                                <div className="flex justify-between mt-0.5">
                                  <span>Badonviller</span>
                                  <span className="bg-green-500 text-white px-1 rounded">Terminé</span>
                                </div>
                              </div>
                            )}
                            {ti === 0 && di === 3 && (
                              <div className="bg-blue-100 text-blue-800 p-1 rounded text-[8px] mb-1">
                                <div className="font-medium truncate">PRIM - Cabinet de radio...</div>
                                <div className="text-blue-600">CQC - Mammo num. To...</div>
                                <div className="flex justify-between mt-0.5">
                                  <span>CHALONS</span>
                                  <span className="text-slate-500">synchronized</span>
                                </div>
                              </div>
                            )}
                            {ti === 1 && di === 1 && (
                              <div className="bg-orange-100 text-orange-800 p-1 rounded text-[8px]">
                                <div className="font-medium truncate">Centre Antoine LACASS...</div>
                                <div className="text-orange-600">CQA - Accélérateur Part...</div>
                                <div className="flex justify-between mt-0.5">
                                  <span>Nice</span>
                                  <span className="bg-blue-500 text-white px-1 rounded">Planifié</span>
                                </div>
                              </div>
                            )}
                            {ti === 2 && di === 2 && (
                              <div className="bg-purple-100 text-purple-800 p-1 rounded text-[8px]">
                                <div className="font-medium truncate">Centre de Médecine Nu...</div>
                                <div className="text-purple-600">CQA - Service Médecin...</div>
                                <div className="flex justify-between mt-0.5">
                                  <span>Dijon</span>
                                  <span className="bg-blue-500 text-white px-1 rounded">Planifié</span>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Module 4: Suivi Activité - ENRICHI */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-purple-500 px-4 py-3 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">📋</span>
                      <span className="font-bold">Détail des Interventions - Année 2025</span>
                    </div>
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">✅ 3308 interventions chargées (7332 équipements contrôlés)</span>
                  </div>
                </div>
                <div className="p-5">
                  {/* Search & Filters */}
                  <div className="bg-slate-50 rounded-xl p-4 mb-4 border">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-slate-600">🔍</span>
                      <span className="text-sm font-medium text-slate-700">Recherche globale</span>
                    </div>
                    <input className="w-full px-4 py-2 border rounded-lg text-sm mb-3" placeholder="Rechercher dans toutes les colonnes (code établissement, site, équipement, prestation...)" />
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      <div>
                        <label className="text-[10px] text-slate-500 flex items-center gap-1">📅 Mois</label>
                        <select className="w-full px-2 py-1.5 border rounded text-xs mt-1"><option>Tous les mois</option></select>
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-500 flex items-center gap-1">📆 Année</label>
                        <select className="w-full px-2 py-1.5 border rounded text-xs mt-1"><option>Toutes les années</option></select>
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-500 flex items-center gap-1">👤 Technicien</label>
                        <select className="w-full px-2 py-1.5 border rounded text-xs mt-1"><option>Tous les techniciens</option></select>
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-500 flex items-center gap-1">🔧 Type</label>
                        <select className="w-full px-2 py-1.5 border rounded text-xs mt-1"><option>Tous les types</option></select>
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-500 flex items-center gap-1">📊 Statut</label>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">✅ Terminé</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xl">🏢</span>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Nombre d'Établissements</div>
                        <div className="text-2xl font-bold text-blue-600">960</div>
                      </div>
                    </div>
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 flex items-center gap-3">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-xl">⏱️</span>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Durée Totale</div>
                        <div className="text-2xl font-bold text-amber-600">5987h</div>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4 border border-green-100 flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-xl">🔬</span>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Équipements Contrôlés</div>
                        <div className="text-2xl font-bold text-green-600">4796</div>
                      </div>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="border rounded-xl overflow-hidden overflow-x-auto">
                    <div className="bg-slate-100 px-4 py-2 grid grid-cols-7 text-[10px] font-semibold text-slate-600 uppercase">
                      <span>N°</span>
                      <span>DATE</span>
                      <span>TECH.</span>
                      <span>CODE</span>
                      <span>CLIENT / ÉTAB.</span>
                      <span>ÉQUIPEMENTS</span>
                      <span>STATUT</span>
                    </div>
                    {[
                      { id: '73274', date: '10/12/25', dur: '1.6h', tech: 'Kévin', code: '11891-2', client: 'Cabinet Dentaire du Docteur GERARD Amélie', equip: 'D-11891-2-RE-02: RE - REXA 234-Trophy-IRIX 70', presta: 'CQA - Rétro-alvéolaire', status: 'Terminé' },
                      { id: '72906', date: '09/12/25', dur: '2h', tech: 'Alexandre', code: '14032-1', client: 'APHP - Hôpital TENON', equip: 'R-14032-1-AM-13: AM-BB9SS2500105HL-GE-OEC ONE', presta: 'CQC - Arceau mobile de bloc', status: 'Validé' },
                      { id: '73271', date: '09/12/25', dur: '1.9h', tech: 'Kévin', code: '11890-1', client: 'Cabinet dentaire du Dr POMMIER', equip: 'D-11890-1-RE-02: RE - VAXB016-Trophy-ELITYS', presta: 'CQA - Rétro-alvéolaire', status: 'Terminé' },
                      { id: '70971', date: '09/12/25', dur: '1.3h', tech: 'Arnaud', code: '13289-6', client: 'GROUPE COURLANCY - 06 Clinique Saint Christophe', equip: 'R-13289-6-AM-33: AM - 51234-Ziehm-SOLO II', presta: 'CQC - Arceau mobile de bloc', status: 'Terminé' },
                    ].map((row, i) => (
                      <div key={i} className="px-4 py-3 grid grid-cols-7 text-[10px] border-t items-start hover:bg-slate-50">
                        <span className="font-mono font-bold text-slate-700">{row.id}</span>
                        <div>
                          <div>{row.date}</div>
                          <div className="text-slate-400">{row.dur}</div>
                        </div>
                        <span className="text-slate-700">{row.tech}</span>
                        <span className="text-blue-600 font-mono">{row.code}</span>
                        <span className="text-slate-600 truncate pr-2">{row.client}</span>
                        <div className="pr-2">
                          <div className="text-slate-500 truncate">{row.equip}</div>
                          <div className="text-slate-400 mt-0.5">{row.presta}</div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-[9px] inline-flex items-center gap-1 ${row.status === 'Terminé' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                          {row.status === 'Terminé' ? '✓' : '◐'} {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Module 5: Base Client - NOUVEAU */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                  <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
                  <div className="text-[10px] text-white/50">🏢 Base Client</div>
                </div>
                <div className="p-5">
                  {/* Client Detail Header */}
                  <div className="bg-slate-50 rounded-xl p-4 border mb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-sm font-mono text-slate-500">▾ 13890</div>
                        <div>
                          <h5 className="font-bold text-slate-800">APHP - Hôpital Bichat Claude Bernard</h5>
                          <div className="text-xs text-slate-500">kaya.doyeux@aphp.fr</div>
                        </div>
                      </div>
                      <div className="text-right text-xs">
                        <div className="text-slate-500">📍 75018 Paris</div>
                        <div className="text-slate-400">46 Rue Henri Huchard</div>
                        <div className="text-slate-600">📞 +33140258471</div>
                      </div>
                    </div>
                  </div>

                  {/* Portail Client Access */}
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🔑</span>
                      <div>
                        <div className="font-medium text-slate-700">Accès Portail Client</div>
                        <div className="text-xs text-slate-500">Aucun accès portail configuré pour ce client</div>
                        <div className="text-[10px] text-slate-400">L'identifiant sera : 13890</div>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600">🔗 Créer l'accès</button>
                  </div>

                  {/* Site Detail */}
                  <div className="border rounded-xl overflow-hidden overflow-x-auto">
                    <div className="bg-slate-100 px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>📍</span>
                        <span className="font-medium text-slate-700">APHP - Hôpital Bichat Claude Bernard</span>
                        <span className="text-xs text-slate-500">Paris (75018) • Réf: 13890-1</span>
                      </div>
                      <span className="text-xs text-slate-500">29 équip. • 42 interv.</span>
                    </div>
                    <div className="p-4 grid grid-cols-3 gap-4">
                      {/* Equipements */}
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-sm font-medium text-slate-700">
                          <span>🔧</span> Équipements (29)
                        </div>
                        <div className="space-y-1 text-[10px]">
                          <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded">
                            <span>AM - 2230-Philips-BV Pulsera</span>
                            <span className="text-blue-500">📎</span>
                          </div>
                          <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded">
                            <span>AM - 4023-Siemens-Siremobil compact L</span>
                            <span className="text-blue-500">📎</span>
                          </div>
                          <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded">
                            <span>AM - 42020-Siemens-CIOS ALPHA</span>
                            <span className="text-blue-500">📎</span>
                          </div>
                        </div>
                      </div>
                      {/* Interventions */}
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-sm font-medium text-slate-700">
                          <span>📅</span> Interventions (42)
                        </div>
                        <div className="space-y-1 text-[10px]">
                          <div className="p-1.5 bg-slate-50 rounded">
                            <span className="text-blue-600">#70969</span> - CQC - Scanner<br/>
                            <span className="text-slate-400">2025-12-31</span>
                          </div>
                          <div className="p-1.5 bg-slate-50 rounded">
                            <span className="text-blue-600">#71394</span> - CQC - Scanner<br/>
                            <span className="text-slate-400">2025-12-31</span>
                          </div>
                        </div>
                      </div>
                      {/* Prestations */}
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-sm font-medium text-slate-700">
                          <span>📋</span> Prestations
                        </div>
                        <div className="space-y-1 text-[10px]">
                          <div className="flex justify-between p-1.5 bg-slate-50 rounded">
                            <span>CQC - Table télécommandée</span>
                            <span className="text-blue-600">1x</span>
                          </div>
                          <div className="flex justify-between p-1.5 bg-slate-50 rounded">
                            <span>CQC - Table interventionnelle</span>
                            <span className="text-blue-600">9x</span>
                          </div>
                          <div className="flex justify-between p-1.5 bg-slate-50 rounded">
                            <span>CQC - Mobile Lit</span>
                            <span className="text-blue-600">8x</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Facturation Params */}
                  <div className="mt-4 bg-amber-50 rounded-xl p-4 border border-amber-100">
                    <div className="flex items-center gap-2 mb-3">
                      <span>💳</span>
                      <span className="font-medium text-slate-700">Paramètres Facturation (EBP)</span>
                      <button className="ml-auto px-3 py-1 bg-teal-500 text-white text-xs rounded hover:bg-teal-600">🔄 Actualiser</button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                      <div>
                        <div className="text-slate-500">Mode règlement</div>
                        <div className="font-medium">VIRNET</div>
                      </div>
                      <div>
                        <div className="text-slate-500">Remise habituelle</div>
                        <div className="font-medium">50.0%</div>
                      </div>
                      <div>
                        <div className="text-slate-500">Frais déplacement</div>
                        <div className="font-medium">Non</div>
                      </div>
                      <div>
                        <div className="text-slate-500">Bon de commande</div>
                        <div className="font-medium">Non requis</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 6: Dépôt Rapport - ENRICHI */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                  <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
                  <div className="flex gap-2 text-xs">
                    <span className="px-3 py-1.5 text-white/50">📤 Déposer des rapports</span>
                    <span className="px-3 py-1.5 bg-teal-500 text-white rounded">📋 Suivi des dépôts</span>
                    <span className="px-3 py-1.5 text-white/50">⏰ CV à échéance</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <span>📁</span> Suivi des Rapports Déposés
                      </h4>
                      <p className="text-sm text-slate-500">20 rapport(s) déposé(s)</p>
                    </div>
                    <button className="px-4 py-2 bg-teal-500 text-white text-xs rounded-lg flex items-center gap-2">
                      <RefreshCw className="w-3 h-3" /> Actualiser
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-6 gap-2 mb-4">
                    {[
                      { label: 'Total', value: '20', color: 'text-slate-700' },
                      { label: 'Identifiés', value: '18', color: 'text-green-600' },
                      { label: 'Non identifiés', value: '2', color: 'text-orange-500' },
                      { label: 'Avec NC', value: '3', color: 'text-red-500' },
                      { label: 'Contre-visite', value: '3', color: 'text-blue-500' },
                      { label: 'ANSM', value: '0', color: 'text-purple-500' },
                    ].map((s, i) => (
                      <div key={i} className="bg-slate-50 rounded-xl p-3 text-center border">
                        <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
                        <div className="text-[10px] text-slate-500">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Filters */}
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <div className="flex-1">
                      <input className="w-full px-3 py-2 border rounded-lg text-xs" placeholder="🔍 12576" />
                    </div>
                    <select className="px-3 py-2 border rounded-lg text-xs">
                      <option>Tous les types de NC</option>
                    </select>
                  </div>

                  {/* Filter Tabs */}
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1.5 bg-blue-500 text-white text-xs rounded-lg">Tous (20)</span>
                    <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded-lg">✅ Identifiés (18)</span>
                    <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded-lg">⚠️ Non identifiés (2)</span>
                    <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded-lg">🔴 Avec NC (3)</span>
                    <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded-lg">🔄 Contre-visite (3)</span>
                  </div>

                  {/* Table */}
                  <div className="border rounded-xl overflow-hidden overflow-x-auto">
                    <div className="bg-slate-100 px-4 py-2 grid grid-cols-5 text-[10px] font-semibold text-slate-600 uppercase">
                      <span>FICHIER</span>
                      <span>DATE DÉPÔT</span>
                      <span>CODE ÉTAB.</span>
                      <span>STATUT</span>
                      <span>ACTIONS REQUISES</span>
                    </div>
                    {[
                      { name: 'CQC-251120-12576-1-M-12576-1-DR-01.pdf', date: '03/12/25', code: '12576-1', status: '✓', hasCV: true, hasClient: true },
                      { name: 'CQA-251120-12576-1-D-12576-1-PA-04.pdf', date: '24/11/25', code: '-', status: '⚠', hasCV: false, hasClient: false },
                    ].map((f, i) => (
                      <div key={i} className={`px-4 py-3 grid grid-cols-5 text-[10px] border-t items-center ${i === 0 ? 'bg-green-50/50' : ''}`}>
                        <div className="flex items-center gap-2">
                          <span className="text-red-500">📄</span>
                          <span className="truncate font-medium">{f.name}</span>
                        </div>
                        <span>{f.date}</span>
                        <span className="font-mono">{f.code}</span>
                        <span className={f.status === '✓' ? 'text-green-600' : 'text-orange-500'}>{f.status}</span>
                        <div className="flex gap-1">
                          {f.hasCV && <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded text-[9px]">△ CV</span>}
                          {f.hasClient && <span className="px-2 py-0.5 bg-teal-100 text-teal-600 rounded text-[9px]">◁ Client</span>}
                          {!f.hasCV && !f.hasClient && <span className="px-2 py-0.5 bg-orange-100 text-orange-600 rounded text-[9px]">⚠️</span>}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Expanded Detail */}
                  <div className="mt-4 bg-slate-50 rounded-xl p-4 border">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                      <div>
                        <div className="text-slate-500 mb-1">📋 Référence</div>
                        <div className="font-mono text-blue-600">CQC-251120-12576-1-M-12576-1-DR-01</div>
                        <div className="text-slate-400 mt-1">N° Intervention : <strong>70858</strong></div>
                        <div className="text-slate-400">Date intervention : <strong>20/11/2025</strong></div>
                        <div className="text-slate-400">Intervenant : <strong>Nicolas SAINT DIZIER</strong></div>
                      </div>
                      <div>
                        <div className="text-slate-500 mb-1">🏢 Client / Établissement</div>
                        <div className="font-medium">SCM RADIOLOGIE ROHRBACH (12576)</div>
                        <div className="text-slate-400">SCM WIEDEMANN TRILLAUD TIEGA (12576-1)</div>
                        <div className="text-slate-400">3 Rue de la Libération, 57410 Rohrbach-lès-Bitche</div>
                      </div>
                      <div>
                        <div className="text-slate-500 mb-1">🔬 Équipement</div>
                        <div>Marque : <strong>FujiFilm</strong></div>
                        <div>Modèle : <strong>AMULET S</strong></div>
                        <div>N° Série : <strong>MXA1210012</strong></div>
                        <div>Type : <strong>Mammo num. DR (capteur plan)</strong></div>
                        <div className="mt-2 px-2 py-1 bg-red-100 text-red-700 rounded text-[9px] inline-block">
                          DENT-NC - NC Dentaire 🔗
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Mockup Suivi des Avis d'Intervention - COMPLET */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="text-[#2dd4bf]">📧</span> Gestion des Avis d'Intervention
            </h3>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header avec barre latérale gauche colorée */}
              <div className="flex">
                <div className="w-2 bg-gradient-to-b from-blue-500 via-teal-500 to-green-500"></div>
                <div className="flex-1">
                  {/* Top bar */}
                  <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        📋 Suivi des Avis d'Intervention
                      </h4>
                      <p className="text-sm text-slate-500">Interventions de -30 jours à +60 jours</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="px-4 py-2 bg-slate-100 text-slate-600 text-sm rounded-lg flex items-center gap-2 hover:bg-slate-200">
                        📊 Tout afficher
                      </button>
                      <button className="px-4 py-2 bg-slate-100 text-slate-600 text-sm rounded-lg flex items-center gap-2 hover:bg-slate-200">
                        🔄 Actualiser
                      </button>
                      <button className="px-4 py-2 bg-slate-800 text-white text-sm rounded-lg flex items-center gap-2 hover:bg-slate-700">
                        ⚙️ Paramètres
                      </button>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 md:grid-cols-5 border-b">
                    <div className="p-4 text-center border-r">
                      <div className="text-3xl font-bold text-slate-700">131</div>
                      <div className="text-xs text-slate-500">Interventions planifiées</div>
                    </div>
                    <div className="p-4 text-center border-r bg-orange-50">
                      <div className="text-3xl font-bold text-orange-500">115</div>
                      <div className="text-xs text-slate-500">Avis non envoyés</div>
                    </div>
                    <div className="p-4 text-center border-r bg-blue-50">
                      <div className="text-3xl font-bold text-blue-500">16</div>
                      <div className="text-xs text-slate-500">Avis envoyés</div>
                    </div>
                    <div className="p-4 text-center border-r bg-green-50">
                      <div className="text-3xl font-bold text-green-600">11</div>
                      <div className="text-xs text-slate-500 flex items-center justify-center gap-1">✅ Confirmés client</div>
                    </div>
                    <div className="p-4 text-center">
                      <div className="text-3xl font-bold text-red-500">0</div>
                      <div className="text-xs text-slate-500">Erreurs</div>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="p-4 bg-slate-50 border-b flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3 text-sm">
                      <label className="flex items-center gap-2 text-slate-600">
                        <span className="w-4 h-4 rounded border bg-white"></span>
                        Auto : Off
                      </label>
                      <label className="flex items-center gap-2 text-slate-600">
                        <span className="w-4 h-4 rounded border bg-white"></span>
                        Rappel : Off
                      </label>
                    </div>
                    <button className="px-6 py-2 bg-teal-500 text-white rounded-lg flex items-center gap-2 hover:bg-teal-600 shadow-lg">
                      ✈️ Envoyer tous les avis non envoyés (115)
                    </button>
                  </div>

                  {/* Search & Filters */}
                  <div className="p-4 border-b">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-slate-600 text-sm">🔍 Recherche</span>
                      <input className="flex-1 px-4 py-2 border rounded-lg text-sm" placeholder="Client, établissement, email, n°..." />
                      <button className="px-3 py-2 bg-blue-500 text-white text-sm rounded-lg">Tout</button>
                      <button className="px-3 py-2 bg-white border text-slate-600 text-sm rounded-lg">Cette semaine</button>
                      <button className="px-3 py-2 bg-white border text-slate-600 text-sm rounded-lg">Semaine prochaine</button>
                      <input type="date" className="px-3 py-2 border rounded-lg text-sm" />
                      <span className="text-slate-400">→</span>
                      <input type="date" className="px-3 py-2 border rounded-lg text-sm" />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-slate-500">Statut intervention :</span>
                      <label className="flex items-center gap-1 text-xs"><input type="checkbox" defaultChecked className="w-3 h-3" /> Planifié</label>
                      <label className="flex items-center gap-1 text-xs"><input type="checkbox" defaultChecked className="w-3 h-3" /> Synchronisé</label>
                      <label className="flex items-center gap-1 text-xs"><input type="checkbox" defaultChecked className="w-3 h-3" /> Confirmé</label>
                      <span className="mx-2 text-slate-300">|</span>
                      <button className="px-2 py-1 bg-blue-500 text-white text-xs rounded">Tous</button>
                      <button className="px-2 py-1 bg-white border text-slate-600 text-xs rounded">Non envoyés (115)</button>
                      <button className="px-2 py-1 bg-white border text-slate-600 text-xs rounded">Envoyés (16)</button>
                      <button className="px-2 py-1 bg-white border text-slate-600 text-xs rounded">✅ Confirmés (11)</button>
                      <button className="px-2 py-1 bg-white border text-slate-600 text-xs rounded">⏳ En attente (5)</button>
                      <button className="px-2 py-1 bg-white border text-slate-600 text-xs rounded">❌ Erreurs (0)</button>
                      <button className="text-teal-600 text-xs hover:underline ml-2">🔄 Réinitialiser</button>
                    </div>
                    <div className="mt-2 text-xs text-slate-500">131 intervention(s) affichée(s)</div>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-100 text-slate-600 text-xs uppercase">
                        <tr>
                          <th className="px-4 py-3 text-left">CODE ÉTABLISSEMENT</th>
                          <th className="px-4 py-3 text-left">CLIENT / SITE</th>
                          <th className="px-4 py-3 text-left">DATE INTERVENTION</th>
                          <th className="px-4 py-3 text-left">STATUT</th>
                          <th className="px-4 py-3 text-left">EMAIL</th>
                          <th className="px-4 py-3 text-center">ENVOI INITIAL</th>
                          <th className="px-4 py-3 text-center">CONFIRMATION</th>
                          <th className="px-4 py-3 text-center">RAPPEL</th>
                          <th className="px-4 py-3 text-center">ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3">
                            <span className="text-blue-600 font-mono hover:underline cursor-pointer">11960-1</span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="font-medium text-slate-800">Cabinet dentaire du Dr FENEIS</div>
                            <div className="text-xs text-slate-500">Cabinet dentaire du Dr FENEIS</div>
                            <div className="text-xs text-teal-600">Celec 1h, CQA - Rétro-alvéolaire</div>
                          </td>
                          <td className="px-4 py-3 font-medium">2025-12-12</td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full flex items-center gap-1 w-fit">
                              📅 Planifié
                            </span>
                          </td>
                          <td className="px-4 py-3 text-xs font-mono text-slate-600">agendadentaire@gmail.com</td>
                          <td className="px-4 py-3 text-center text-xs text-slate-400">
                            <div>○ Non envoyé</div>
                          </td>
                          <td className="px-4 py-3 text-center">-</td>
                          <td className="px-4 py-3 text-center text-xs text-slate-400">Non envoyé</td>
                          <td className="px-4 py-3 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <button className="p-1 hover:bg-slate-100 rounded" title="Voir">👁️</button>
                              <button className="px-2 py-1 bg-teal-500 text-white text-xs rounded hover:bg-teal-600">✈️ Avis</button>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 bg-green-50/30">
                          <td className="px-4 py-3">
                            <span className="text-blue-600 font-mono hover:underline cursor-pointer">11629-4</span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="font-medium text-slate-800">PRIM - Cabinet de radiologie St Rémi REIMS</div>
                            <div className="text-xs text-slate-500">04 PRIM - Clinique Courlancy REIMS</div>
                          </td>
                          <td className="px-4 py-3 font-medium">2025-12-12</td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full flex items-center gap-1 w-fit">
                              🔄 Synchronisé
                            </span>
                          </td>
                          <td className="px-4 py-3 text-xs">
                            <div className="font-mono text-slate-600">cyrille.dudka@prim-radiologie.fr</div>
                            <div className="text-teal-600">+1 destinataire</div>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <div className="text-green-600 text-xs">✅ Envoyé</div>
                            <div className="text-[10px] text-slate-400">01/12/2025 19:17</div>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <div className="text-green-600 text-xs">✅ Confirmé</div>
                            <div className="text-[10px] text-blue-600">01/12/2025 19:17</div>
                          </td>
                          <td className="px-4 py-3 text-center text-xs text-slate-400">
                            <div>○ Non envoyé</div>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <button className="p-1 hover:bg-slate-100 rounded" title="Voir">👁️</button>
                              <button className="px-2 py-1 bg-orange-500 text-white text-xs rounded hover:bg-orange-600">📧 Rappel</button>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3">
                            <span className="text-blue-600 font-mono hover:underline cursor-pointer">12847-2</span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="font-medium text-slate-800">SELARL IMAGERIE 114 ST DIZIER</div>
                            <div className="text-xs text-slate-500">Centre d'imagerie médicale</div>
                          </td>
                          <td className="px-4 py-3 font-medium">2025-12-13</td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full flex items-center gap-1 w-fit">
                              📅 Planifié
                            </span>
                          </td>
                          <td className="px-4 py-3 text-xs font-mono text-slate-600">contact@imagerie114.fr</td>
                          <td className="px-4 py-3 text-center">
                            <div className="text-green-600 text-xs">✅ Envoyé</div>
                            <div className="text-[10px] text-slate-400">02/12/2025 14:22</div>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <div className="text-orange-500 text-xs">⏳ En attente</div>
                          </td>
                          <td className="px-4 py-3 text-center text-xs text-slate-400">Non envoyé</td>
                          <td className="px-4 py-3 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <button className="p-1 hover:bg-slate-100 rounded" title="Voir">👁️</button>
                              <button className="px-2 py-1 bg-orange-500 text-white text-xs rounded hover:bg-orange-600">📧 Rappel</button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feuille de Route - Mockup complet */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="text-[#2dd4bf]">🗺️</span> Feuille de Route Technicien
            </h3>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-white border-b px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-slate-400">
                      <span>◀</span>
                      <span>▶</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        🚗 Feuille de Route
                      </h4>
                      <p className="text-sm text-slate-500">Thomas BERNARD • Semaine 3 (13 janv. - 19 janv. 2026)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-2 hover:bg-slate-100 rounded-lg">🖨️</button>
                    <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg flex items-center gap-2">
                      📍 Google Maps
                    </button>
                  </div>
                </div>
                
                {/* Filters */}
                <div className="flex items-center gap-3 mt-4 flex-wrap">
                  <div className="flex rounded-lg border overflow-hidden">
                    <button className="px-3 py-1.5 bg-slate-100 text-sm font-medium">Jour</button>
                    <button className="px-3 py-1.5 bg-blue-500 text-white text-sm font-medium">Semaine</button>
                  </div>
                  <div className="flex items-center gap-2 border rounded-lg px-3 py-1.5">
                    <span>◀</span>
                    <span className="text-sm">📅 13/01/2026</span>
                    <span>📅</span>
                    <span>▶</span>
                  </div>
                  <button className="px-3 py-1.5 border rounded-lg text-sm">Aujourd'hui</button>
                  <select className="px-3 py-1.5 border rounded-lg text-sm">
                    <option>Thomas BERNARD</option>
                  </select>
                  <div className="flex items-center gap-2 border rounded-lg px-3 py-1.5 text-sm">
                    <span>📍</span>
                    <span>LYON</span>
                  </div>
                  <div className="flex items-center gap-2 border rounded-lg px-3 py-1.5 text-sm">
                    <span>📍</span>
                    <span>45 rue Victor Hugo...</span>
                  </div>
                  <div className="flex items-center gap-2 border rounded-lg px-3 py-1.5 text-sm">
                    <span>🚗</span>
                    <span>Voiture</span>
                    <span>▼</span>
                  </div>
                  <button className="px-3 py-1.5 border rounded-lg text-sm flex items-center gap-2 text-purple-600 border-purple-200 bg-purple-50">
                    🔄 Tournées
                  </button>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row">
                {/* Left Panel */}
                <div className="flex-1 p-4 md:p-6 lg:border-r">
                  {/* Tournée Alert */}
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl p-4 text-white mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">🧳</span>
                      <div>
                        <div className="font-bold">Tournée détectée</div>
                        <div className="text-sm text-white/80">4 jours consécutifs • 3 nuits d'hôtel</div>
                      </div>
                    </div>
                    {/* Week calendar */}
                    <div className="flex gap-2 mt-4">
                      {[
                        { day: 'LUN.', num: '13', interv: 3, hotel: false, active: false },
                        { day: 'MAR.', num: '14', interv: 2, hotel: true, active: true },
                        { day: 'MER.', num: '15', interv: 4, hotel: true, active: false },
                        { day: 'JEU.', num: '16', interv: 2, hotel: true, active: false },
                        { day: 'VEN.', num: '17', interv: 1, hotel: false, active: false },
                      ].map((d, i) => (
                        <div key={i} className={`flex-1 rounded-lg p-2 text-center ${d.active ? 'bg-white text-purple-700' : 'bg-white/10'}`}>
                          <div className="text-xs">{d.day}</div>
                          <div className="text-xl font-bold">{d.num}</div>
                          <div className="text-xs">{d.interv} interv.</div>
                          {d.hotel && <div className="text-xs mt-1">🏨</div>}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 bg-white/10 rounded-lg p-3 text-sm flex items-center gap-2">
                      <span>🏨</span>
                      <span>Nuit d'hôtel prévue : Ce soir: 3h12 du domicile. Demain: 2h45 depuis domicile.</span>
                    </div>
                  </div>

                  {/* Day Header */}
                  <div className="flex items-center justify-between bg-slate-800 text-white rounded-t-xl px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span>📅</span>
                      <span className="font-bold">Mardi 14 Janvier 2026</span>
                      <span className="px-2 py-0.5 bg-purple-500 rounded text-xs">Jour 2/4</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-blue-500 rounded-full text-xs">2 interventions</span>
                      <span className="px-3 py-1 bg-orange-500 rounded-full text-xs flex items-center gap-1">🏨 Hôtel ce soir</span>
                    </div>
                  </div>

                  {/* Journey Info */}
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-b-xl mb-4">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                      <div>
                        <div className="flex items-center justify-center gap-1 text-xs text-white/70 mb-1">
                          <span>🏠</span> Départ domicile
                        </div>
                        <div className="text-2xl font-bold">07:45</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center gap-1 text-xs text-white/70 mb-1">
                          <span>🏨</span> Arrivée hôtel
                        </div>
                        <div className="text-2xl font-bold">18:30</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center gap-1 text-xs text-white/70 mb-1">
                          <span>📏</span> Distance
                        </div>
                        <div className="text-2xl font-bold">245.7 km</div>
                      </div>
                      <div className="border-l border-white/20 pl-4">
                        <div className="flex items-center justify-center gap-1 text-xs text-white/70 mb-1">
                          <span>🏠</span> Départ
                        </div>
                        <div className="text-sm font-semibold">LYON</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center gap-1 text-xs text-white/70 mb-1">
                          <span>🏨</span> Arrivée
                        </div>
                        <div className="text-sm font-semibold truncate">GRENOBLE 38...</div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                    {[
                      { value: '2', label: 'Interventions', color: 'text-blue-600' },
                      { value: '2', label: 'Clients', color: 'text-purple-600' },
                      { value: '2', label: 'Sites', color: 'text-teal-600' },
                      { value: '2h35', label: '🚗 Trajet', color: 'text-orange-600' },
                      { value: '3h', label: 'Interventions', color: 'text-green-600' },
                    ].map((s, i) => (
                      <div key={i} className="text-center p-3 bg-slate-50 rounded-xl">
                        <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
                        <div className="text-xs text-slate-500">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Intervention 1 */}
                  <div className="border rounded-xl overflow-hidden mb-4">
                    <div className="bg-slate-100 px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</span>
                        <div>
                          <div className="font-bold text-slate-800">CENTRE D'IMAGERIE DES ALPES</div>
                          <div className="text-xs text-slate-500">🏢 03 CIM Centre Hospitalier</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1 bg-teal-100 text-teal-700 rounded text-xs">📋 Avis</button>
                        <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs">📄 CSV</button>
                        <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs">📦 Package</button>
                      </div>
                    </div>
                    <div className="px-4 py-3 border-b">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <span>📍</span>
                        <span>78 avenue Jean Jaurès, 38000 GRENOBLE</span>
                      </div>
                      <div className="mt-2 flex items-center gap-3">
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">🚗 Départ 07:45 (104 min, 98.5 km)</span>
                        <span className="text-xs text-slate-500">2 interventions</span>
                      </div>
                    </div>
                    
                    {/* Equipment 1 */}
                    <div className="px-4 py-3 border-b hover:bg-slate-50 flex items-center gap-4">
                      <span className="w-6 h-6 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center text-xs">1</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">CQC - Scanner</span>
                          <span className="px-2 py-0.5 bg-green-100 text-green-600 rounded text-xs">synchronized</span>
                        </div>
                        <div className="text-sm text-slate-600 mt-1">
                          <span className="font-medium">🔧 SC - </span>
                          <span>458 792 A - Siemens-SOMATOM go.Up</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-slate-800">⏰ 09:30</div>
                        <div className="text-xs text-slate-500">(90 min)</div>
                      </div>
                      <div className="text-xs text-slate-400">N° 84521</div>
                      <div className="flex gap-1">
                        <button className="p-1 text-slate-400 hover:text-slate-600">📥</button>
                        <button className="p-1 text-slate-400 hover:text-slate-600">⚙️</button>
                        <button className="p-1 text-slate-400 hover:text-slate-600">▼</button>
                      </div>
                    </div>

                    {/* Equipment 2 */}
                    <div className="px-4 py-3 hover:bg-slate-50 flex flex-wrap md:flex-nowrap items-center gap-4">
                      <span className="w-6 h-6 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center text-xs">2</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-xs font-medium">CQC - IRM</span>
                          <span className="px-2 py-0.5 bg-green-100 text-green-600 rounded text-xs">synchronized</span>
                        </div>
                        <div className="text-sm text-slate-600 mt-1">
                          <span className="font-medium">🔧 IRM - </span>
                          <span>K 295847 - Philips-Ingenia 1.5T</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-slate-800">⏰ 11:00</div>
                        <div className="text-xs text-slate-500">(60 min)</div>
                      </div>
                      <div className="text-xs text-slate-400">N° 84522</div>
                      <div className="flex gap-1">
                        <button className="p-1 text-slate-400 hover:text-slate-600">📥</button>
                        <button className="p-1 text-slate-400 hover:text-slate-600">⚙️</button>
                        <button className="p-1 text-slate-400 hover:text-slate-600">▼</button>
                      </div>
                    </div>
                  </div>

                  {/* Intervention 2 */}
                  <div className="border rounded-xl overflow-hidden overflow-x-auto">
                    <div className="bg-slate-100 px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">2</span>
                        <div>
                          <div className="font-bold text-slate-800">CLINIQUE DES CÈDRES</div>
                          <div className="text-xs text-slate-500">🏢 Pôle Santé Sud</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1 bg-teal-100 text-teal-700 rounded text-xs">📋 Avis</button>
                        <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs">📄 CSV</button>
                        <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs">📦 Package</button>
                      </div>
                    </div>
                    <div className="px-4 py-3 border-b">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <span>📍</span>
                        <span>12 rue des Cèdres, 38100 ÉCHIROLLES</span>
                      </div>
                      <div className="mt-2 flex items-center gap-3">
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">🚗 Départ 12:15 (25 min, 12.3 km)</span>
                        <span className="text-xs text-slate-500">1 intervention</span>
                      </div>
                    </div>

                    {/* Equipment */}
                    <div className="px-4 py-3 hover:bg-slate-50 flex flex-wrap md:flex-nowrap items-center gap-4">
                      <span className="w-6 h-6 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center text-xs">1</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-xs font-medium">CQC - Arceau mobile</span>
                          <span className="px-2 py-0.5 bg-green-100 text-green-600 rounded text-xs">synchronized</span>
                        </div>
                        <div className="text-sm text-slate-600 mt-1">
                          <span className="font-medium">🔧 AM - </span>
                          <span>78452 - GE Healthcare-OEC Elite</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-slate-800">⏰ 14:00</div>
                        <div className="text-xs text-slate-500">(60 min)</div>
                      </div>
                      <div className="text-xs text-slate-400">N° 84523</div>
                      <div className="flex gap-1">
                        <button className="p-1 text-slate-400 hover:text-slate-600">📥</button>
                        <button className="p-1 text-slate-400 hover:text-slate-600">⚙️</button>
                        <button className="p-1 text-slate-400 hover:text-slate-600">▼</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Map + Tour */}
                <div className="w-full lg:w-96 bg-slate-50">
                  {/* Tabs */}
                  <div className="flex border-b bg-white">
                    <button className="flex-1 px-4 py-3 text-sm text-slate-500 hover:bg-slate-50">📅 Trajet du jour</button>
                    <button className="flex-1 px-4 py-3 text-sm text-purple-600 font-medium border-b-2 border-purple-500 bg-purple-50">🔄 Tournée (4 jours)</button>
                  </div>

                  {/* Map placeholder */}
                  <div className="h-64 bg-gradient-to-br from-green-100 via-blue-50 to-blue-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🗺️</div>
                        <div className="text-sm text-slate-600">Carte Google Maps</div>
                        <div className="text-xs text-slate-400 mt-1">Lyon → Grenoble → Échirolles</div>
                      </div>
                    </div>
                    {/* Route overlay */}
                    <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-2 text-xs">
                      <div className="font-medium">🚗 3h 15 min</div>
                      <div className="text-slate-500">245.7 km</div>
                    </div>
                    {/* Points */}
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow"></div>
                    <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow"></div>
                  </div>

                  {/* Tour summary */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-purple-600">🔄</span>
                      <span className="font-bold text-slate-800">TOURNÉE COMPLÈTE (4 JOURS)</span>
                      <button className="ml-auto text-xs text-blue-600 hover:underline">📍 Maps</button>
                    </div>

                    {/* Start point */}
                    <div className="flex items-center gap-3 mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">🏠</span>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">DÉPART (J1)</div>
                        <div className="font-bold text-slate-800">LYON</div>
                      </div>
                    </div>

                    {/* Days */}
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs text-slate-500 mb-2">J1 - LUN. 13 JANV.</div>
                        <div className="flex items-center gap-2 p-2 bg-white rounded border">
                          <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">1</span>
                          <div className="text-xs">
                            <div className="font-medium">Cabinet du Dr MOREAU</div>
                            <div className="text-slate-500">Cabinet du Dr MOREAU Laurent</div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                          <span>J2 - MAR. 14 JANV.</span>
                          <span className="px-1.5 py-0.5 bg-orange-100 text-orange-600 rounded">🏨 Hôtel</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-purple-50 rounded border border-purple-200">
                          <span className="w-5 h-5 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">2</span>
                          <div className="text-xs">
                            <div className="font-medium text-purple-700">CENTRE D'IMAGERIE DES ALPES</div>
                            <div className="text-slate-500">03 CIM Centre Hospitalier</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                          <span>J3 - MER. 15 JANV.</span>
                          <span className="px-1.5 py-0.5 bg-orange-100 text-orange-600 rounded">🏨 Hôtel</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-white rounded border">
                          <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">3</span>
                          <div className="text-xs">
                            <div className="font-medium">Pôle de santé ALPES SUD</div>
                            <div className="text-slate-500">Centre médical polyvalent</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-slate-500 mb-2">J4 - JEU. 16 JANV.</div>
                        <div className="flex items-center gap-2 p-2 bg-white rounded border">
                          <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">4</span>
                          <div className="text-xs">
                            <div className="font-medium">CHU GRENOBLE ALPES</div>
                            <div className="text-slate-500">Service radiologie</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Exemple d'Avis d'Intervention - Email */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="text-[#2dd4bf]">✉️</span> Exemple d'Avis d'Intervention envoyé au client
            </h3>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Email Header */}
                <div className="bg-slate-100 px-6 py-4 border-b">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">AC</span>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800">ACME Inspection</div>
                        <div className="text-xs text-slate-500">noreply@acme-inspection.fr</div>
                      </div>
                    </div>
                    <div className="text-xs text-slate-400">11 déc. 2025, 14:32</div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 w-8">À :</span>
                      <span className="text-slate-700">contact@cabinet-dentaire-martin.fr</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 w-8">Objet :</span>
                      <span className="font-medium text-slate-800">📅 Avis d'intervention - CQA Rétro-alvéolaire - 15/12/2025</span>
                    </div>
                  </div>
                </div>

                {/* Email Body */}
                <div className="p-6">
                  {/* Logo Header */}
                  <div className="text-center mb-6 pb-6 border-b">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg">
                      <span className="text-white font-bold text-lg">ACME Inspection</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">Contrôle Qualité des Équipements Médicaux</p>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 text-slate-700">
                    <p>Bonjour,</p>
                    
                    <p>Nous vous informons qu'une intervention de contrôle qualité est programmée dans votre établissement :</p>

                    {/* Intervention Details Box */}
                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-5 border border-teal-100">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wide">📅 Date</div>
                          <div className="text-lg font-bold text-teal-700">Lundi 15 décembre 2025</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wide">⏰ Heure prévue</div>
                          <div className="text-lg font-bold text-teal-700">09h00 - 11h00</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wide">🔧 Type d'intervention</div>
                          <div className="font-semibold text-slate-800">CQA - Rétro-alvéolaire</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wide">👤 Technicien</div>
                          <div className="font-semibold text-slate-800">Kévin DUPONT</div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-teal-200">
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">🏢 Établissement</div>
                        <div className="font-semibold text-slate-800">Cabinet Dentaire Dr MARTIN</div>
                        <div className="text-sm text-slate-600">15 Rue de la Santé, 75013 Paris</div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-teal-200">
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">🔬 Équipement(s) concerné(s)</div>
                        <div className="text-sm text-slate-700">
                          • Trophy IRIX 70 (N° série: TRP-2024-0842)<br/>
                          • Planmeca ProMax (N° série: PLM-2023-1156)
                        </div>
                      </div>
                    </div>

                    <p>Merci de bien vouloir confirmer votre disponibilité en cliquant sur le bouton ci-dessous :</p>

                    {/* CTA Button */}
                    <div className="text-center py-4">
                      <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        ✅ Confirmer ma disponibilité
                      </button>
                    </div>

                    <p className="text-sm text-slate-500">
                      Si cette date ne vous convient pas, merci de nous contacter au plus vite au 
                      <span className="font-medium text-slate-700"> 01 23 45 67 89</span> ou par email à 
                      <span className="font-medium text-slate-700"> planning@acme-inspection.fr</span>
                    </p>

                    {/* Reminder Box */}
                    <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                      <div className="flex items-start gap-3">
                        <span className="text-xl">💡</span>
                        <div className="text-sm">
                          <div className="font-semibold text-amber-800">Rappel important</div>
                          <p className="text-amber-700">
                            Pour le bon déroulement du contrôle, merci de vous assurer que les équipements 
                            sont accessibles et en état de fonctionnement. Prévoyez environ 1h30 pour l'ensemble des contrôles.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p>Cordialement,</p>
                    <div className="mt-4">
                      <div className="font-semibold text-slate-800">L'équipe ACME Inspection</div>
                      <div className="text-sm text-slate-500">Service Planification</div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-8 pt-6 border-t text-center">
                    <div className="text-xs text-slate-400">
                      <p>ACME Inspection SARL - 123 Avenue des Contrôles, 75001 Paris</p>
                      <p>Tél: 01 23 45 67 89 | Email: contact@acme-inspection.fr</p>
                      <p className="mt-2">
                        <a href="#" className="text-teal-600 hover:underline">Voir dans le Portail Client</a>
                        <span className="mx-2">|</span>
                        <a href="#" className="text-slate-500 hover:underline">Se désinscrire</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status indicator */}
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-white/70">Envoyé le 11/12/2025 à 14:32</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="text-white/70">Ouvert le 11/12/2025 à 15:08</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></span>
                  <span className="text-white/70">Confirmé le 11/12/2025 à 15:12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mockup Portail Client */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-[#2dd4bf]/10 to-transparent rounded-2xl border border-[#2dd4bf]/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#2dd4bf]/20 rounded-xl flex items-center justify-center">
                  <Monitor className="w-7 h-7 text-[#2dd4bf]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Back Office</h3>
                  <p className="text-white/50">Pour vos équipes</p>
                </div>
              </div>
              <p className="text-white/70 mb-6">
                Interface complète pour la gestion quotidienne : suivi d'activité, 
                planification, reporting et administration.
              </p>
              <ul className="space-y-2">
                {['Multi-utilisateurs avec rôles personnalisables', 'Suivi des interventions en temps réel', 'Envoi automatique des avis', 'Exports Excel/PDF', 'Synchronisation Synchroteam', 'Intégration EBP Facturation'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/60 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#2dd4bf]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-gradient-to-br from-[#5eead4]/10 to-transparent rounded-2xl border border-[#5eead4]/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#5eead4]/20 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-7 h-7 text-[#5eead4]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Portail Client</h3>
                  <p className="text-white/50">Pour vos clients</p>
                </div>
              </div>
              <p className="text-white/70 mb-6">
                Offrez à vos clients un accès sécurisé pour consulter leurs équipements, 
                interventions et rapports en autonomie.
              </p>
              <ul className="space-y-2">
                {['Accès sécurisé par établissement', 'Consultation des rapports PDF', 'Historique complet équipements', 'Calendrier des interventions', 'Confirmation des avis en 1 clic', 'Interface responsive mobile'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/60 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#5eead4]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Administration - Mockups déplacés dans Tab 5 */}
      </section><section className="hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              <span className="text-[#2dd4bf]">⚙️</span> Module <span className="text-[#2dd4bf]">Administration</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Configurez et personnalisez LISA selon vos besoins métier
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* 1. Gestion des Utilisateurs */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
                  <span className="text-white/50 text-xs">Administration</span>
                </div>
                <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded">+ Nouvel utilisateur</span>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  👥 Gestion des Utilisateurs
                </h4>
                <div className="border rounded-xl overflow-hidden overflow-x-auto">
                  <div className="bg-slate-100 px-4 py-2 grid grid-cols-5 text-xs font-semibold text-slate-600">
                    <span>UTILISATEUR</span>
                    <span>EMAIL</span>
                    <span>RÔLE</span>
                    <span>STATUT</span>
                    <span>ACTIONS</span>
                  </div>
                  {[
                    { name: 'Jean DUPONT', email: 'j.dupont@exemple.fr', role: 'Administrateur', status: 'Actif', color: 'bg-purple-100 text-purple-700' },
                    { name: 'Marie MARTIN', email: 'm.martin@exemple.fr', role: 'Commercial', status: 'Actif', color: 'bg-blue-100 text-blue-700' },
                    { name: 'Pierre BERNARD', email: 'p.bernard@exemple.fr', role: 'Contrôleur', status: 'Actif', color: 'bg-green-100 text-green-700' },
                    { name: 'Sophie PETIT', email: 's.petit@exemple.fr', role: 'Planification', status: 'Inactif', color: 'bg-orange-100 text-orange-700' },
                  ].map((user, i) => (
                    <div key={i} className="px-4 py-3 grid grid-cols-5 text-xs border-t items-center hover:bg-slate-50">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="font-medium text-slate-700">{user.name}</span>
                      </div>
                      <span className="text-slate-600">{user.email}</span>
                      <span className={`px-2 py-1 rounded-full text-[10px] w-fit ${user.color}`}>{user.role}</span>
                      <span className={`${user.status === 'Actif' ? 'text-green-600' : 'text-slate-400'}`}>● {user.status}</span>
                      <div className="flex gap-1">
                        <button className="p-1 hover:bg-slate-100 rounded text-slate-500">✏️</button>
                        <button className="p-1 hover:bg-slate-100 rounded text-slate-500">🔑</button>
                        <button className="p-1 hover:bg-red-50 rounded text-red-500">🗑️</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Gestion des Rôles */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
                  <span className="text-white/50 text-xs">Administration</span>
                </div>
                <span className="px-3 py-1 bg-purple-500 text-white text-xs rounded">+ Nouveau rôle</span>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  🛡️ Gestion des Rôles Personnalisés
                </h4>
                <div className="space-y-3">
                  {[
                    { name: 'Super Admin', desc: 'Accès complet à toutes les fonctionnalités', perms: 12, color: 'bg-purple-500' },
                    { name: 'Responsable Commercial', desc: 'Gestion commerciale et suivi des offres', perms: 8, color: 'bg-blue-500' },
                    { name: 'Technicien Terrain', desc: 'Feuille de route et dépôt rapports', perms: 4, color: 'bg-green-500' },
                    { name: 'Assistante Administrative', desc: 'Facturation et suivi clients', perms: 6, color: 'bg-orange-500' },
                  ].map((role, i) => (
                    <div key={i} className="border rounded-xl p-4 hover:border-teal-300 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 ${role.color} rounded-full`}></div>
                          <span className="font-semibold text-slate-800">{role.name}</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="text-xs text-teal-600 hover:underline">Modifier</button>
                          <button className="text-xs text-red-500 hover:underline">Supprimer</button>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 mb-2">{role.desc}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400">{role.perms} permissions actives</span>
                        <div className="flex-1 bg-slate-100 rounded-full h-1.5">
                          <div className={`${role.color} h-1.5 rounded-full`} style={{ width: `${(role.perms / 12) * 100}%` }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Modèles de Rapports */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
                  <span className="text-white/50 text-xs">Administration</span>
                </div>
                <span className="px-3 py-1 bg-teal-500 text-white text-xs rounded">+ Nouveau modèle</span>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  📄 Modèles de Rapports
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { name: 'CQA - Rétro-alvéolaire', type: 'Dentaire', count: 156, icon: '🦷' },
                    { name: 'CQC - Scanner', type: 'Imagerie', count: 89, icon: '🔬' },
                    { name: 'CQC - Mammographie', type: 'Imagerie', count: 234, icon: '📷' },
                    { name: 'CQA - Panoramique', type: 'Dentaire', count: 112, icon: '🦷' },
                    { name: 'CQC - Arceau mobile', type: 'Bloc opératoire', count: 67, icon: '🏥' },
                    { name: 'CQC - Table interventionnelle', type: 'Bloc opératoire', count: 45, icon: '🏥' },
                  ].map((model, i) => (
                    <div key={i} className="border rounded-lg p-3 hover:border-teal-300 transition-colors cursor-pointer group">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{model.icon}</span>
                          <div>
                            <div className="font-medium text-slate-800 text-sm">{model.name}</div>
                            <div className="text-xs text-slate-500">{model.type}</div>
                          </div>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-slate-600">⚙️</button>
                      </div>
                      <div className="mt-2 text-xs text-teal-600">{model.count} rapports générés</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Types de Non-Conformités */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
                  <span className="text-white/50 text-xs">Administration</span>
                </div>
                <span className="px-3 py-1 bg-red-500 text-white text-xs rounded">+ Nouveau type NC</span>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  ⚠️ Types de Non-Conformités
                </h4>
                <div className="space-y-2">
                  {[
                    { code: 'NC-DENT', name: 'NC Dentaire', desc: 'Non-conformités équipements dentaires', count: 23, color: 'bg-red-500' },
                    { code: 'NC-RADIO', name: 'NC Radiologie', desc: 'Non-conformités imagerie médicale', count: 15, color: 'bg-orange-500' },
                    { code: 'NC-BLOC', name: 'NC Bloc Opératoire', desc: 'Non-conformités équipements bloc', count: 8, color: 'bg-yellow-500' },
                    { code: 'NC-MAINT', name: 'NC Maintenance', desc: 'Défauts de maintenance préventive', count: 12, color: 'bg-purple-500' },
                    { code: 'NC-DOC', name: 'NC Documentation', desc: 'Documents manquants ou périmés', count: 31, color: 'bg-blue-500' },
                  ].map((nc, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-slate-50">
                      <div className={`w-2 h-10 ${nc.color} rounded-full`}></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded">{nc.code}</span>
                          <span className="font-semibold text-slate-800 text-sm">{nc.name}</span>
                        </div>
                        <div className="text-xs text-slate-500">{nc.desc}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-slate-700">{nc.count}</div>
                        <div className="text-xs text-slate-400">signalées</div>
                      </div>
                      <button className="text-slate-400 hover:text-slate-600">⚙️</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. Points de Contrôle */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
                  <span className="text-white/50 text-xs">Administration</span>
                </div>
                <span className="px-3 py-1 bg-green-500 text-white text-xs rounded">+ Nouveau point</span>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  ✅ Points de Contrôle
                </h4>
                <div className="mb-4">
                  <select className="w-full px-3 py-2 border rounded-lg text-sm">
                    <option>📋 Tous les modèles de rapport</option>
                    <option>🦷 CQA - Rétro-alvéolaire</option>
                    <option>🔬 CQC - Scanner</option>
                  </select>
                </div>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {[
                    { num: '1.1', name: 'Vérification visuelle de l\'équipement', cat: 'Inspection', required: true },
                    { num: '1.2', name: 'Contrôle du numéro de série', cat: 'Identification', required: true },
                    { num: '2.1', name: 'Test de tension du générateur', cat: 'Électrique', required: true },
                    { num: '2.2', name: 'Mesure du courant de fuite', cat: 'Électrique', required: true },
                    { num: '3.1', name: 'Contrôle qualité image fantôme', cat: 'Qualité image', required: true },
                    { num: '3.2', name: 'Mesure résolution spatiale', cat: 'Qualité image', required: false },
                    { num: '4.1', name: 'Vérification dispositifs de sécurité', cat: 'Sécurité', required: true },
                    { num: '4.2', name: 'Test arrêt d\'urgence', cat: 'Sécurité', required: true },
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 border rounded-lg hover:bg-slate-50 text-xs">
                      <span className="font-mono bg-slate-100 px-2 py-1 rounded text-slate-600">{point.num}</span>
                      <div className="flex-1">
                        <div className="font-medium text-slate-800">{point.name}</div>
                        <div className="text-slate-500">{point.cat}</div>
                      </div>
                      {point.required ? (
                        <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded text-[10px]">Obligatoire</span>
                      ) : (
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-[10px]">Optionnel</span>
                      )}
                      <button className="text-slate-400 hover:text-slate-600">✏️</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 6. Templates Avis Intervention */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
                  <span className="text-white/50 text-xs">Administration</span>
                </div>
                <span className="px-3 py-1 bg-indigo-500 text-white text-xs rounded">+ Nouveau template</span>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  📧 Templates Avis d'Intervention
                </h4>
                <div className="space-y-3">
                  {[
                    { name: 'Avis Initial', type: 'Envoi automatique', subject: 'Intervention prévue le {DATE}', active: true },
                    { name: 'Rappel J-3', type: 'Rappel', subject: 'Rappel : Intervention dans 3 jours', active: true },
                    { name: 'Confirmation', type: 'Confirmation', subject: 'Merci pour votre confirmation', active: true },
                    { name: 'Report', type: 'Modification', subject: 'Report de votre intervention', active: false },
                  ].map((tpl, i) => (
                    <div key={i} className="border rounded-xl p-4 hover:border-indigo-300 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">✉️</span>
                          <div>
                            <div className="font-semibold text-slate-800">{tpl.name}</div>
                            <div className="text-xs text-indigo-600">{tpl.type}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked={tpl.active} className="sr-only peer" />
                            <div className={`w-9 h-5 rounded-full ${tpl.active ? 'bg-green-500' : 'bg-slate-300'}`}>
                              <div className={`absolute top-0.5 ${tpl.active ? 'right-0.5' : 'left-0.5'} w-4 h-4 bg-white rounded-full shadow`}></div>
                            </div>
                          </label>
                          <button className="text-slate-400 hover:text-slate-600">✏️</button>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 bg-slate-50 p-2 rounded font-mono">
                        Objet : {tpl.subject}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 7. Paramètres Généraux */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
                  <span className="text-white/50 text-xs">Administration</span>
                </div>
                <span className="px-3 py-1 bg-slate-600 text-white text-xs rounded">💾 Sauvegarder</span>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  ⚙️ Paramètres Généraux
                </h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-500 mb-1 block">Nom de l'entreprise</label>
                      <input className="w-full px-3 py-2 border rounded-lg text-sm" value="ACME Inspection SARL" readOnly />
                    </div>
                    <div>
                      <label className="text-xs text-slate-500 mb-1 block">SIRET</label>
                      <input className="w-full px-3 py-2 border rounded-lg text-sm" value="123 456 789 00012" readOnly />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 mb-1 block">Adresse</label>
                    <input className="w-full px-3 py-2 border rounded-lg text-sm" value="123 Avenue des Contrôles, 75001 Paris" readOnly />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-500 mb-1 block">Email contact</label>
                      <input className="w-full px-3 py-2 border rounded-lg text-sm" value="contact@acme-inspection.fr" readOnly />
                    </div>
                    <div>
                      <label className="text-xs text-slate-500 mb-1 block">Téléphone</label>
                      <input className="w-full px-3 py-2 border rounded-lg text-sm" value="+33 1 23 45 67 89" readOnly />
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="text-sm font-medium text-slate-700 mb-2">Options</div>
                    <div className="space-y-2">
                      {[
                        { label: 'Envoi automatique des avis d\'intervention', checked: true },
                        { label: 'Rappel automatique J-3', checked: true },
                        { label: 'Notifications email aux administrateurs', checked: true },
                        { label: 'Mode maintenance', checked: false },
                      ].map((opt, i) => (
                        <label key={i} className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer">
                          <input type="checkbox" defaultChecked={opt.checked} className="w-4 h-4 text-teal-500 rounded" />
                          {opt.label}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 8. Synchronisation */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
                  <span className="text-white/50 text-xs">Administration</span>
                </div>
                <span className="px-3 py-1 bg-green-500 text-white text-xs rounded flex items-center gap-1">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Connecté
                </span>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  🔄 Synchronisation & Intégrations
                </h4>
                <div className="space-y-3">
                  {[
                    { name: 'Synchroteam', desc: 'Synchronisation interventions', status: 'Connecté', lastSync: 'Il y a 5 min', color: 'green', icon: '📅' },
                    { name: 'EBP Gestion Commerciale', desc: 'Facturation & clients', status: 'Connecté', lastSync: 'Il y a 2h', color: 'green', icon: '💳' },
                    { name: 'Google Sheets', desc: 'Export données', status: 'Configuré', lastSync: 'Manuel', color: 'blue', icon: '📊' },
                    { name: 'Webhook ANSM', desc: 'Alertes matériovigilance', status: 'Actif', lastSync: 'Temps réel', color: 'green', icon: '⚠️' },
                  ].map((sync, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 border rounded-xl hover:bg-slate-50">
                      <span className="text-2xl">{sync.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-800">{sync.name}</span>
                          <span className={`w-2 h-2 rounded-full ${sync.color === 'green' ? 'bg-green-500' : 'bg-blue-500'}`}></span>
                        </div>
                        <div className="text-xs text-slate-500">{sync.desc}</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs font-medium ${sync.color === 'green' ? 'text-green-600' : 'text-blue-600'}`}>{sync.status}</div>
                        <div className="text-xs text-slate-400">{sync.lastSync}</div>
                      </div>
                      <button className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded hover:bg-slate-200">
                        🔄 Sync
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-center gap-2 text-amber-700 text-sm">
                    <span>⚠️</span>
                    <span>Dernière synchronisation complète : <strong>11/12/2025 à 14:32</strong></span>
                  </div>
                </div>
              </div>
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
            {/* Starter */}
            <div className="p-8 bg-[#0f2a2a] rounded-2xl border border-white/10">
              <div className="text-[#2dd4bf] font-semibold text-sm mb-2">STARTER</div>
              <div className="text-4xl font-bold mb-1">99€<span className="text-lg text-white/40 font-normal"> HT/mois</span></div>
              <p className="text-white/50 text-sm mb-8">Pour les petites structures</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  '1 Administrateur',
                  '3 utilisateurs Back Office',
                  '10 accès Portail Client',
                  'Hébergement inclus',
                  'Support par email',
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

            {/* Pro - Highlighted */}
            <div className="p-8 bg-gradient-to-b from-[#2dd4bf]/10 to-[#0f2a2a] rounded-2xl border-2 border-[#2dd4bf] relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#2dd4bf] text-[#0f2a2a] text-sm font-bold rounded-full">
                RECOMMANDÉ
              </div>
              <div className="text-[#2dd4bf] font-semibold text-sm mb-2">PROFESSIONNEL</div>
              <div className="text-4xl font-bold mb-1">199€<span className="text-lg text-white/40 font-normal"> HT/mois</span></div>
              <p className="text-white/50 text-sm mb-8">Pour les équipes en croissance</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  '1 Administrateur',
                  '10 utilisateurs Back Office',
                  'Portail Client illimité',
                  'Module Facturation',
                  'Feuille de route',
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

            {/* Enterprise */}
            <div className="p-8 bg-[#0f2a2a] rounded-2xl border border-white/10">
              <div className="text-[#2dd4bf] font-semibold text-sm mb-2">ENTREPRISE</div>
              <div className="text-4xl font-bold mb-1">Sur mesure</div>
              <p className="text-white/50 text-sm mb-8">Pour les grandes structures</p>
              
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
                Nous contacter
              </a>
            </div>
          </div>

          <div className="mt-12 text-center text-white/50">
            <p>
              Utilisateurs supplémentaires : <span className="text-white font-semibold">+19€/mois</span> (Back Office) | 
              <span className="text-white font-semibold"> +9€/mois</span> (Portail Client)
            </p>
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
              Souscrire à LISA {showSubscribeModal === 'starter' ? 'Starter' : 'Professionnel'}
            </h3>
            <p className="text-white/60 mb-6">
              {showSubscribeModal === 'starter' ? '99€ HT/mois' : '199€ HT/mois'} - Sans engagement
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












