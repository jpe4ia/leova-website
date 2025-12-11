'use client';

import { useState } from 'react';
import { 
  Shield, Users, Zap, BarChart3, FileText, Calendar, 
  CheckCircle, ArrowRight, Menu, X, Mail, Phone, MapPin,
  Monitor, Smartphone, Cloud, Lock, Headphones, TrendingUp,
  Building2, Wrench, ClipboardCheck, Euro
} from 'lucide-react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Intégrer avec un service d'envoi d'email
    alert('Merci pour votre demande ! Nous vous recontacterons sous 24h.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center font-bold text-slate-900">
                L
              </div>
              <span className="text-xl font-bold">LEOVA <span className="text-teal-400">Systems</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-300 hover:text-teal-400 transition-colors">Fonctionnalités</a>
              <a href="#pricing" className="text-slate-300 hover:text-teal-400 transition-colors">Tarifs</a>
              <a href="#contact" className="text-slate-300 hover:text-teal-400 transition-colors">Contact</a>
              <a 
                href="https://dashboard.cibio.fr" 
                target="_blank"
                className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold rounded-lg transition-colors"
              >
                Connexion
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-slate-300 hover:text-teal-400">Fonctionnalités</a>
              <a href="#pricing" className="block text-slate-300 hover:text-teal-400">Tarifs</a>
              <a href="#contact" className="block text-slate-300 hover:text-teal-400">Contact</a>
              <a 
                href="https://dashboard.cibio.fr" 
                className="block px-4 py-2 bg-teal-500 text-slate-900 font-semibold rounded-lg text-center"
              >
                Connexion
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-400 text-sm">
                <Zap className="w-4 h-4" />
                Solution SaaS pour professionnels
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
                  LISA
                </span>
                <br />
                <span className="text-white">
                  Logiciel de gestion des inspections
                </span>
              </h1>
              
              <p className="text-xl text-slate-400 max-w-xl">
                Centralisez vos équipements, planifiez vos interventions, générez vos rapports 
                et suivez votre activité en temps réel. <strong className="text-white">Tout-en-un.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-900 font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-teal-500/25"
                >
                  Demander une démo
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-colors border border-slate-700"
                >
                  Découvrir LISA
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Shield className="w-5 h-5 text-teal-400" />
                  Données sécurisées
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Cloud className="w-5 h-5 text-teal-400" />
                  100% Cloud
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Headphones className="w-5 h-5 text-teal-400" />
                  Support inclus
                </div>
              </div>
            </div>

            {/* Right - Dashboard Preview */}
            <div className="relative hidden lg:block">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur-2xl opacity-30"></div>
                <div className="relative bg-slate-900 rounded-2xl border border-slate-700 p-2 shadow-2xl">
                  <div className="bg-slate-800 rounded-xl p-6 space-y-4">
                    {/* Mock Dashboard Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-teal-500 rounded-lg"></div>
                        <span className="font-bold text-white">LISA Dashboard</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    {/* Mock Stats */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-teal-400">156</div>
                        <div className="text-xs text-slate-400">Équipements</div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-cyan-400">42</div>
                        <div className="text-xs text-slate-400">Interventions</div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-emerald-400">98%</div>
                        <div className="text-xs text-slate-400">Conformité</div>
                      </div>
                    </div>
                    {/* Mock Chart */}
                    <div className="bg-slate-700/30 rounded-lg p-4 h-32 flex items-end gap-1">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-teal-500 to-cyan-400 rounded-t" style={{ height: `${h}%` }}></div>
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
      <section id="features" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Tout ce dont vous avez besoin, <span className="text-teal-400">réuni en un seul outil</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              LISA centralise la gestion de vos inspections, équipements et interventions 
              pour gagner en efficacité au quotidien.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: 'Base Clients', desc: 'Gérez vos clients, sites et contacts en un seul endroit avec synchronisation automatique.' },
              { icon: Wrench, title: 'Équipements', desc: 'Suivez tous vos équipements, leur historique et leur conformité en temps réel.' },
              { icon: Calendar, title: 'Planification', desc: 'Planifiez vos interventions, générez des feuilles de route optimisées.' },
              { icon: ClipboardCheck, title: 'Rapports', desc: 'Créez et déposez vos rapports d\'inspection avec modèles personnalisables.' },
              { icon: Euro, title: 'Facturation', desc: 'Générez vos devis et factures, intégration EBP disponible.' },
              { icon: BarChart3, title: 'Tableaux de bord', desc: 'Suivez vos KPIs, primes et performances en temps réel.' },
            ].map((feature, i) => (
              <div key={i} className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-teal-500/50 transition-all hover:shadow-lg hover:shadow-teal-500/10">
                <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-2xl border border-teal-500/30">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Monitor className="w-8 h-8 text-teal-400" />
                Back Office
              </h3>
              <p className="text-slate-300 mb-4">
                Interface complète pour vos équipes terrain et administratives. 
                Gestion des utilisateurs, rôles et permissions personnalisables.
              </p>
              <ul className="space-y-2">
                {['Multi-utilisateurs', 'Rôles personnalisés', 'Historique complet', 'Exports Excel/PDF'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-400">
                    <CheckCircle className="w-4 h-4 text-teal-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-2xl border border-cyan-500/30">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Smartphone className="w-8 h-8 text-cyan-400" />
                Portail Client
              </h3>
              <p className="text-slate-300 mb-4">
                Offrez à vos clients un accès sécurisé à leurs données : 
                équipements, interventions et rapports en libre-service.
              </p>
              <ul className="space-y-2">
                {['Accès sécurisé', 'Consultation rapports', 'Historique équipements', 'Notifications'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-400">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Une tarification <span className="text-teal-400">simple et transparente</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Payez uniquement ce dont vous avez besoin. Sans engagement, sans surprise.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800">
              <div className="text-sm text-teal-400 font-semibold mb-2">STARTER</div>
              <div className="text-4xl font-bold mb-1">99€<span className="text-lg text-slate-400 font-normal">/mois</span></div>
              <p className="text-slate-400 text-sm mb-6">Idéal pour démarrer</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  '1 Administrateur inclus',
                  '3 utilisateurs Back Office',
                  'Portail Client (10 accès)',
                  'Hébergement BDD inclus',
                  'Support par email',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="block w-full py-3 bg-slate-800 hover:bg-slate-700 text-center font-semibold rounded-lg transition-colors">
                Commencer
              </a>
            </div>

            {/* Pro - Highlighted */}
            <div className="p-8 bg-gradient-to-b from-teal-500/10 to-slate-900 rounded-2xl border-2 border-teal-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-teal-500 text-slate-900 text-sm font-bold rounded-full">
                POPULAIRE
              </div>
              <div className="text-sm text-teal-400 font-semibold mb-2">PROFESSIONNEL</div>
              <div className="text-4xl font-bold mb-1">199€<span className="text-lg text-slate-400 font-normal">/mois</span></div>
              <p className="text-slate-400 text-sm mb-6">Pour les équipes en croissance</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  '1 Administrateur inclus',
                  '10 utilisateurs Back Office',
                  'Portail Client illimité',
                  'Module Facturation EBP',
                  'Feuille de route',
                  'Support prioritaire',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="block w-full py-3 bg-teal-500 hover:bg-teal-400 text-slate-900 text-center font-bold rounded-lg transition-colors">
                Choisir ce plan
              </a>
            </div>

            {/* Enterprise */}
            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800">
              <div className="text-sm text-teal-400 font-semibold mb-2">ENTREPRISE</div>
              <div className="text-4xl font-bold mb-1">Sur mesure</div>
              <p className="text-slate-400 text-sm mb-6">Pour les grandes structures</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Utilisateurs illimités',
                  'Tous les modules inclus',
                  'API personnalisée',
                  'Formation sur site',
                  'Account manager dédié',
                  'SLA garanti 99.9%',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="block w-full py-3 bg-slate-800 hover:bg-slate-700 text-center font-semibold rounded-lg transition-colors">
                Nous contacter
              </a>
            </div>
          </div>

          {/* Per user pricing */}
          <div className="mt-12 text-center">
            <p className="text-slate-400">
              Besoin d'utilisateurs supplémentaires ? <span className="text-white font-semibold">+19€/mois</span> par utilisateur Back Office, 
              <span className="text-white font-semibold"> +9€/mois</span> par accès Portail Client.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Prêt à <span className="text-teal-400">transformer</span> votre activité ?
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Contactez-nous pour une démonstration personnalisée de LISA 
                ou pour toute question sur nos solutions.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Email</div>
                    <div className="font-semibold">contact@leova-systems.fr</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Téléphone</div>
                    <div className="font-semibold">+33 (0)4 XX XX XX XX</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Adresse</div>
                    <div className="font-semibold">France</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-6">Demander une démo</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Nom complet</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Email professionnel</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="jean@entreprise.fr"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Entreprise</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Message (optionnel)</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors resize-none"
                    placeholder="Décrivez vos besoins..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-900 font-bold rounded-lg transition-all"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-slate-900 text-sm">
                L
              </div>
              <span className="font-bold">LEOVA Systems</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-teal-400 transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-teal-400 transition-colors">CGV</a>
            </div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} LEOVA Systems. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

