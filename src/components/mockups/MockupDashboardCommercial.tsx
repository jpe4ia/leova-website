export default function MockupDashboardCommercial() {
  return (
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
        <div className="flex gap-1 mb-5 border-b overflow-x-auto">
          {[
            { label: 'Performances', icon: '📈', active: true },
            { label: 'Carte de France', icon: '🗺️', active: false },
            { label: 'Liste des Offres', icon: '📋', active: false },
            { label: 'Liste des Prospects', icon: '👥', active: false },
          ].map((tab, i) => (
            <button key={i} className={`px-4 py-2 text-xs flex items-center gap-1.5 border-b-2 whitespace-nowrap ${tab.active ? 'border-blue-500 text-blue-700 font-medium' : 'border-transparent text-slate-500'}`}>
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
            <div className="text-xs text-slate-500 mb-1">Portefeuille d&apos;Affaires Global</div>
            <div className="text-3xl font-bold text-blue-600">96 047 €</div>
          </div>
        </div>

        {/* Objective Card */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-5 text-white">
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
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
              <span>Progression vers l&apos;objectif</span>
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
  );
}

