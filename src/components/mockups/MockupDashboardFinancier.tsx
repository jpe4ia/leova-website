import { RefreshCw } from 'lucide-react';

export default function MockupDashboardFinancier() {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden text-[11px] md:text-xs">
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
          
          {/* Section Chiffre d&apos;Affaires */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 bg-green-100 rounded flex items-center justify-center text-green-600 text-sm">$</span>
              <span className="font-semibold text-slate-700">Chiffre d&apos;Affaires</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
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
  );
}

