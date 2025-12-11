export default function MockupFeuilleRoute() {
  return (
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
          <button className="px-3 py-1.5 border rounded-lg text-sm">Aujourd&apos;hui</button>
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
                <div className="text-sm text-white/80">4 jours consécutifs • 3 nuits d&apos;hôtel</div>
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
              <span>Nuit d&apos;hôtel prévue : Ce soir: 3h12 du domicile. Demain: 2h45 depuis domicile.</span>
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
            <div className="bg-slate-100 px-4 py-3 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <div className="font-bold text-slate-800">CENTRE D&apos;IMAGERIE DES ALPES</div>
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
              <div className="mt-2 flex items-center gap-3 flex-wrap">
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">🚗 Départ 07:45 (104 min, 98.5 km)</span>
                <span className="text-xs text-slate-500">2 interventions</span>
              </div>
            </div>
            
            {/* Equipment */}
            <div className="px-4 py-3 hover:bg-slate-50 flex items-center gap-4 flex-wrap">
              <span className="w-6 h-6 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center text-xs">1</span>
              <div className="flex-1 min-w-[200px]">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">CQC - Scanner</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-600 rounded text-xs">synchronized</span>
                </div>
                <div className="text-sm text-slate-600 mt-1">SC - 458 792 A - Siemens-SOMATOM go.Up</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-500">⏰</span>
                <span className="font-bold">09:30</span>
                <span className="text-xs text-slate-400">N° 84521</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Map & Tour */}
        <div className="w-full lg:w-80 p-4 md:p-6 bg-slate-50">
          {/* Tabs */}
          <div className="flex border-b mb-4">
            <button className="flex-1 px-4 py-3 text-sm text-slate-500 hover:bg-slate-50">📅 Trajet du jour</button>
            <button className="flex-1 px-4 py-3 text-sm text-purple-600 font-medium border-b-2 border-purple-500 bg-purple-50">🔄 Tournée (4 jours)</button>
          </div>
          
          {/* Map placeholder */}
          <div className="bg-slate-200 rounded-xl h-40 mb-4 flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-2 left-2 w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="text-center">
              <div className="text-3xl mb-2">🗺️</div>
              <div className="text-sm text-slate-600">Carte Google Maps</div>
              <div className="text-xs text-slate-500">Lyon → Grenoble → Échirolles📍</div>
            </div>
            <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded text-xs shadow">
              <span>🚗</span> 245.7 km
            </div>
          </div>

          {/* Tour Summary */}
          <div className="bg-white rounded-xl p-4 border">
            <div className="flex items-center justify-between mb-4">
              <div className="font-bold text-slate-800 flex items-center gap-2">
                <span>🔄</span> TOURNÉE COMPLÈTE (4 JOURS)
              </div>
              <button className="text-xs text-teal-600">📍 Maps</button>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg p-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">🏠</span>
                <div>
                  <div className="text-xs text-white/70">DÉPART (J1)</div>
                  <div className="font-bold">LYON</div>
                </div>
              </div>
            </div>

            {/* Tour Days */}
            <div className="space-y-3">
              <div className="text-xs text-slate-500">J1 - LUN. 13 JANV.</div>
              <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">1</span>
                <span className="text-sm">Cabinet du Dr MOREAU Laurent</span>
              </div>
              
              <div className="text-xs text-slate-500">J2 - MAR. 14 JANV. <span className="text-orange-500">🏨 Hôtel</span></div>
              <div className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg border border-purple-200">
                <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">2</span>
                <div>
                  <div className="text-sm font-medium text-purple-700">CENTRE D&apos;IMAGERIE DES ALPES</div>
                  <div className="text-xs text-slate-500">03 CIM Centre Hospitalier</div>
                </div>
              </div>

              <div className="text-xs text-slate-500">J3 - MER. 15 JANV. <span className="text-orange-500">🏨 Hôtel</span></div>
              <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                <span className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs">3</span>
                <span className="text-sm">Centre médical polyvalent</span>
              </div>

              <div className="text-xs text-slate-500">J4 - JEU. 16 JANV.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

