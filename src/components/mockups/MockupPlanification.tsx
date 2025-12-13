export default function MockupPlanification() {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden text-[11px] md:text-xs">
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
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
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
        <div className="flex items-center justify-between mb-4 bg-slate-50 rounded-lg p-2 flex-wrap gap-2">
          <button className="px-3 py-1 text-slate-600 hover:bg-white rounded">←</button>
          <button className="px-3 py-1 bg-white rounded shadow-sm text-sm font-medium">Aujourd&apos;hui</button>
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
          <div className="grid grid-cols-8 bg-slate-100 text-xs font-medium text-slate-600 min-w-[600px]">
            <div className="p-2 border-r">Heure</div>
            {['lun. 8', 'mar. 9', 'mer. 10', 'jeu. 11', 'ven. 12', 'sam. 13', 'dim. 14'].map((d, i) => (
              <div key={i} className={`p-2 text-center border-r ${i === 3 ? 'bg-teal-500 text-white' : ''}`}>{d}</div>
            ))}
          </div>
          {/* Time slots */}
          {['8:00', '9:00', '10:00'].map((time, ti) => (
            <div key={ti} className="grid grid-cols-8 border-t text-[9px] min-w-[600px]">
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
  );
}


