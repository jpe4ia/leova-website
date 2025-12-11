'use client';

import { useState } from 'react';
import { 
  Shield, Users, Zap, BarChart3, FileText, Calendar, 
  CheckCircle, ArrowRight, Menu, X, Mail, Phone, MapPin,
  Monitor, Smartphone, Cloud, Lock, Headphones, TrendingUp,
  Building2, Wrench, ClipboardCheck, Euro, Play, ChevronDown, Loader2, RefreshCw
} from 'lucide-react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', message: '' });
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null);
  const [showSubscribeModal, setShowSubscribeModal] = useState<string | null>(null);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeCompany, setSubscribeCompany] = useState('');

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
            <h2 className="text-4xl font-bold mb-4">
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

          {/* Galerie des modules LISA - Style clair comme la vraie app */}
          <div className="mt-20 mb-16">
            <h3 className="text-3xl font-bold text-center mb-4">
              Découvrez les <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">modules LISA</span>
            </h3>
            <p className="text-white/50 text-center mb-12 max-w-2xl mx-auto">
              Une interface claire et intuitive, conçue pour les professionnels de l'inspection
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Module 1: Dashboard Financier */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header LISA */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
                    <span className="text-[10px] text-white/40">Logiciel métier</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1 bg-teal-500 text-white text-xs rounded-lg flex items-center gap-1">
                      <RefreshCw className="w-3 h-3" /> Actualiser
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Euro className="w-4 h-4 text-amber-600" />
                    </div>
                    Dashboard Financier
                  </h4>
                  {/* Stats cards */}
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                      <div className="text-xs text-slate-500 mb-1">CA 2025</div>
                      <div className="text-lg font-bold text-slate-800">1 245 K€</div>
                      <div className="text-[10px] text-green-500 font-medium">↗ 18.3%</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                      <div className="text-xs text-slate-500 mb-1">CA 2024</div>
                      <div className="text-lg font-bold text-slate-800">1 052 K€</div>
                      <div className="text-[10px] text-slate-400">Cumulé</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                      <div className="text-xs text-slate-500 mb-1">Croissance</div>
                      <div className="text-lg font-bold text-green-600">18.3%</div>
                      <div className="text-[10px] text-green-500 font-medium">↗ vs N-1</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                      <div className="text-xs text-slate-500 mb-1">Budget</div>
                      <div className="text-lg font-bold text-slate-800">1 350 K€</div>
                      <div className="text-[10px] text-slate-400">Objectif</div>
                    </div>
                  </div>
                  {/* Chart */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="text-sm font-medium text-slate-600 mb-3">Évolution CA 2024 vs 2025</div>
                    <div className="flex items-end justify-between h-20 gap-1">
                      {[30, 35, 32, 45, 42, 55, 48, 62, 58, 72, 68, 85].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col gap-0.5">
                          <div className="bg-teal-400 rounded-t" style={{ height: `${h}%` }}></div>
                          <div className="bg-slate-300 rounded-t" style={{ height: `${h * 0.85}%` }}></div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-2 text-[10px]">
                      <span className="flex items-center gap-1"><span className="w-2 h-2 bg-teal-400 rounded"></span> CA 2025</span>
                      <span className="flex items-center gap-1"><span className="w-2 h-2 bg-slate-300 rounded"></span> CA 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 2: Dashboard Commercial */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header LISA */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
                    <span className="text-[10px] text-white/40">Logiciel métier</span>
                  </div>
                  <div className="px-3 py-1 bg-blue-500 text-white text-xs rounded-lg">Grille Tarifaire</div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                    </div>
                    Dashboard Commercial
                  </h4>
                  {/* Tabs */}
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1.5 bg-blue-100 text-blue-700 text-xs rounded-lg font-medium">Performances</span>
                    <span className="px-3 py-1.5 text-slate-500 text-xs">Carte de France</span>
                    <span className="px-3 py-1.5 text-slate-500 text-xs">Liste des Offres</span>
                  </div>
                  {/* Performance stats */}
                  <div className="grid grid-cols-5 gap-2 mb-4">
                    <div className="bg-slate-50 rounded-lg p-2 text-center border">
                      <div className="text-xl font-bold text-blue-600">344</div>
                      <div className="text-[9px] text-slate-500">OFFRES</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-2 text-center border">
                      <div className="text-xl font-bold text-green-600">234</div>
                      <div className="text-[9px] text-slate-500">Conversions</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-2 text-center border">
                      <div className="text-xl font-bold text-teal-600">68%</div>
                      <div className="text-[9px] text-slate-500">Taux</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-2 text-center border">
                      <div className="text-xl font-bold text-orange-600">5</div>
                      <div className="text-[9px] text-slate-500">Captations</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-2 text-center border">
                      <div className="text-xl font-bold text-red-500">3</div>
                      <div className="text-[9px] text-slate-500">Relances</div>
                    </div>
                  </div>
                  {/* Objective bar */}
                  <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-4 text-white">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">🎯 CA Global Équipe</span>
                      <span className="text-xl font-bold text-green-400">104.7%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2 mb-2">
                      <div className="bg-gradient-to-r from-yellow-400 to-green-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <div className="text-[10px] text-green-400">🎉 Objectif dépassé ! +21 226 €</div>
                  </div>
                </div>
              </div>

              {/* Module 3: Planification */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header LISA */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-white/10 text-white text-[10px] rounded">Calendrier</span>
                    <span className="px-2 py-1 text-white/50 text-[10px]">Carte</span>
                    <span className="px-2 py-1 text-white/50 text-[10px]">Liste</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-purple-600" />
                    </div>
                    Planification des Interventions
                  </h4>
                  {/* Stats */}
                  <div className="grid grid-cols-5 gap-2 mb-4">
                    {[
                      { label: "Aujourd'hui", value: '10', icon: '📅' },
                      { label: 'Semaine', value: '120', icon: '📆' },
                      { label: 'Planifiées', value: '472', icon: '⏳' },
                      { label: 'Terminées', value: '85', icon: '✅' },
                      { label: 'Total', value: '1000', icon: '🔧' },
                    ].map((s, i) => (
                      <div key={i} className="bg-slate-50 rounded-lg p-2 text-center border">
                        <div className="text-[10px] text-slate-500">{s.label}</div>
                        <div className="text-lg font-bold text-slate-800">{s.value}</div>
                      </div>
                    ))}
                  </div>
                  {/* Calendar week view */}
                  <div className="bg-slate-50 rounded-xl p-3 border">
                    <div className="grid grid-cols-7 gap-1 text-center text-[10px] mb-2">
                      {['lun. 8', 'mar. 9', 'mer. 10', 'jeu. 11', 'ven. 12', 'sam. 13', 'dim. 14'].map((d, i) => (
                        <div key={i} className={`py-1 rounded ${i === 3 ? 'bg-teal-500 text-white font-bold' : 'text-slate-500'}`}>{d}</div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {[2, 4, 3, 5, 2, 0, 0].map((count, i) => (
                        <div key={i} className="space-y-0.5">
                          {[...Array(Math.min(count, 3))].map((_, j) => (
                            <div key={j} className={`h-4 rounded text-[8px] px-1 truncate ${
                              ['bg-teal-100 text-teal-700', 'bg-blue-100 text-blue-700', 'bg-orange-100 text-orange-700'][j % 3]
                            }`}>
                              {['CHU', 'Clinique', 'Labo'][j % 3]}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 4: Suivi Activité */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-purple-500 px-4 py-3 text-white">
                  <div className="flex items-center justify-between">
                    <span className="font-bold">📋 Détail des Interventions - Année 2025</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded">✅ 3308 interventions (7332 équipements)</span>
                  </div>
                </div>
                <div className="p-5">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-100">
                      <div className="text-2xl font-bold text-blue-600">960</div>
                      <div className="text-xs text-slate-500">Établissements</div>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3 text-center border border-amber-100">
                      <div className="text-2xl font-bold text-amber-600">5987h</div>
                      <div className="text-xs text-slate-500">Durée Totale</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 text-center border border-green-100">
                      <div className="text-2xl font-bold text-green-600">4796</div>
                      <div className="text-xs text-slate-500">Équipements</div>
                    </div>
                  </div>
                  {/* Table header */}
                  <div className="bg-slate-100 rounded-t-lg px-3 py-2 grid grid-cols-6 text-[10px] font-medium text-slate-600">
                    <span>N°</span>
                    <span>DATE</span>
                    <span>TECH.</span>
                    <span>CLIENT</span>
                    <span>PRESTATIONS</span>
                    <span>STATUT</span>
                  </div>
                  {/* Table rows */}
                  {[
                    { id: '73274', date: '10/12/25', tech: 'Kévin', client: 'Cabinet Dentaire Dr...', presta: 'CQA - Rétro-alvéolaire', status: 'Terminé', color: 'bg-green-100 text-green-700' },
                    { id: '72906', date: '09/12/25', tech: 'Alexandre', client: 'Hôpital Henri M...', presta: 'CQC - Arceau mobile', status: 'Validé', color: 'bg-blue-100 text-blue-700' },
                    { id: '73271', date: '09/12/25', tech: 'Kévin', client: 'Cabinet du Dr Pom...', presta: 'CQA - Panoramique', status: 'Terminé', color: 'bg-green-100 text-green-700' },
                  ].map((row, i) => (
                    <div key={i} className="px-3 py-2 grid grid-cols-6 text-[10px] border-b items-center">
                      <span className="font-mono text-slate-600">{row.id}</span>
                      <span className="text-slate-600">{row.date}</span>
                      <span className="text-slate-800">{row.tech}</span>
                      <span className="text-blue-600 truncate">{row.client}</span>
                      <span className="text-slate-600 truncate">{row.presta}</span>
                      <span className={`px-2 py-0.5 rounded text-[9px] ${row.color}`}>{row.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Module 5: Facturation */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-green-600 to-teal-500 px-4 py-3 text-white flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">💰</span>
                    <div>
                      <div className="font-bold">Facturation</div>
                      <div className="text-[10px] text-white/70">Suivi des interventions pour facturation EBP</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs">154 interventions • 687 équipements</div>
                    <div className="text-lg font-bold">1 055.20 € HT</div>
                  </div>
                </div>
                <div className="p-5">
                  {/* Filters */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <input className="px-3 py-1.5 border rounded-lg text-xs bg-slate-50 w-32" placeholder="Recherche..." />
                    <select className="px-2 py-1.5 border rounded-lg text-xs bg-slate-50">
                      <option>2025</option>
                    </select>
                    <select className="px-2 py-1.5 border rounded-lg text-xs bg-slate-50">
                      <option>Tous</option>
                    </select>
                    <span className="px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-xs flex items-center gap-1">✅ Terminé</span>
                  </div>
                  {/* Stats row */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    <div className="text-center p-2 bg-slate-50 rounded-lg">
                      <div className="text-lg font-bold">154</div>
                      <div className="text-[9px] text-slate-500">Interventions</div>
                    </div>
                    <div className="text-center p-2 bg-slate-50 rounded-lg">
                      <div className="text-lg font-bold">30</div>
                      <div className="text-[9px] text-slate-500">Établissements</div>
                    </div>
                    <div className="text-center p-2 bg-slate-50 rounded-lg">
                      <div className="text-lg font-bold">687</div>
                      <div className="text-[9px] text-slate-500">Équipements</div>
                    </div>
                    <div className="text-center p-2 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">1055€</div>
                      <div className="text-[9px] text-slate-500">Total HT</div>
                    </div>
                  </div>
                  {/* Sample row */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-slate-50 px-3 py-2 grid grid-cols-5 text-[9px] font-medium text-slate-500">
                      <span>DATE</span><span>CLIENT</span><span>PRESTATION</span><span>MONTANT</span><span>EBP</span>
                    </div>
                    <div className="px-3 py-2 grid grid-cols-5 text-[10px] border-t items-center">
                      <span>09/12/25</span>
                      <span className="text-blue-600">Hôpital TENON</span>
                      <span>CQC - Mobile Lit</span>
                      <span className="font-semibold">360 €</span>
                      <span className="text-green-600">✓ Validé</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 6: Dépôt Rapport */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header LISA */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                  <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
                  <div className="flex gap-2 text-xs">
                    <span className="px-2 py-1 bg-teal-500 text-white rounded">Déposer</span>
                    <span className="px-2 py-1 text-white/50">Suivi des dépôts</span>
                    <span className="px-2 py-1 text-white/50">CV à échéance</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-orange-600" />
                    </div>
                    Suivi des Rapports Déposés
                  </h4>
                  {/* Stats */}
                  <div className="grid grid-cols-5 gap-2 mb-4">
                    {[
                      { label: 'Total', value: '20', color: 'text-slate-800' },
                      { label: 'Identifiés', value: '18', color: 'text-green-600' },
                      { label: 'Non identifiés', value: '2', color: 'text-orange-500' },
                      { label: 'Avec NC', value: '3', color: 'text-red-500' },
                      { label: 'Contre-visite', value: '3', color: 'text-blue-500' },
                    ].map((s, i) => (
                      <div key={i} className="bg-slate-50 rounded-lg p-2 text-center border">
                        <div className={`text-xl font-bold ${s.color}`}>{s.value}</div>
                        <div className="text-[9px] text-slate-500">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  {/* File list */}
                  <div className="border rounded-lg divide-y">
                    {[
                      { name: 'CQC-251120-12576-1-M...pdf', date: '03/12/25', status: '✓', hasCV: true },
                      { name: 'CQA-251120-12576-1-D...pdf', date: '24/11/25', status: '⚠', hasCV: false },
                    ].map((f, i) => (
                      <div key={i} className="px-3 py-2 flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                          <FileText className="w-4 h-4 text-red-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-slate-700">{f.name}</div>
                          <div className="text-[10px] text-slate-400">{f.date}</div>
                        </div>
                        <span className={`text-sm ${f.status === '✓' ? 'text-green-500' : 'text-orange-500'}`}>{f.status}</span>
                        {f.hasCV && <span className="text-[9px] px-1.5 py-0.5 bg-blue-100 text-blue-600 rounded">CV</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Back Office / Front Office */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
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
                {['Multi-utilisateurs avec rôles', 'Historique complet', 'Exports Excel/PDF', 'Notifications'].map((item, i) => (
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
                {['Accès sécurisé par client', 'Consultation des rapports', 'Historique équipements', 'Interface responsive'].map((item, i) => (
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

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#1a3d3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
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
                    <div className="font-medium">contact@leova-systems.fr</div>
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



