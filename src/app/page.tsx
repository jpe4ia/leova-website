'use client';

import { useState } from 'react';
import { 
  Shield, Users, Zap, BarChart3, FileText, Calendar, 
  CheckCircle, ArrowRight, Menu, X, Mail, Phone, MapPin,
  Monitor, Smartphone, Cloud, Lock, Headphones, TrendingUp,
  Building2, Wrench, ClipboardCheck, Euro, Play, ChevronDown, Loader2
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
            <div className="flex items-center gap-3">
              <img 
                src="/logo-icon.png" 
                alt="LEOVA" 
                className="h-14 w-auto"
              />
              <img 
                src="/logo-text.png" 
                alt="LEOVA Systems" 
                className="h-12 w-auto hidden sm:block"
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
              <span className="text-[#2dd4bf]">LISA</span>
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
            
            {/* Dashboard mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2dd4bf]/20 to-transparent rounded-2xl blur-2xl"></div>
              <div className="relative bg-[#0f2a2a] rounded-2xl border border-[#2dd4bf]/20 p-3 shadow-2xl">
                <div className="bg-[#1a3d3d] rounded-xl p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#2dd4bf] rounded-lg flex items-center justify-center font-bold text-[#0f2a2a]">L</div>
                      <div>
                        <div className="font-semibold">LISA Dashboard</div>
                        <div className="text-xs text-white/50">Vue d'ensemble</div>
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-[#0f2a2a] rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-[#2dd4bf]">156</div>
                      <div className="text-xs text-white/50 mt-1">Équipements</div>
                    </div>
                    <div className="bg-[#0f2a2a] rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-[#5eead4]">42</div>
                      <div className="text-xs text-white/50 mt-1">Interventions</div>
                    </div>
                    <div className="bg-[#0f2a2a] rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-emerald-400">98%</div>
                      <div className="text-xs text-white/50 mt-1">Conformité</div>
                    </div>
                  </div>
                  {/* Chart placeholder */}
                  <div className="bg-[#0f2a2a] rounded-lg p-4">
                    <div className="text-sm text-white/50 mb-3">Activité mensuelle</div>
                    <div className="h-24 flex items-end gap-1">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-[#2dd4bf] to-[#5eead4] rounded-t opacity-80" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
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


