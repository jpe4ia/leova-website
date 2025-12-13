import { RefreshCw } from 'lucide-react';

export default function MockupDepotRapport() {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden text-[11px] md:text-xs">
      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between flex-wrap gap-2">
        <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
        <div className="flex gap-2 text-xs">
          <span className="px-3 py-1.5 text-white/50">📤 Déposer des rapports</span>
          <span className="px-3 py-1.5 bg-teal-500 text-white rounded">📋 Suivi des dépôts</span>
          <span className="px-3 py-1.5 text-white/50">⏰ CV à échéance</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
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
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
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
          <div className="flex-1 min-w-[150px]">
            <input className="w-full px-3 py-2 border rounded-lg text-xs" placeholder="🔍 12576" />
          </div>
          <select className="px-3 py-2 border rounded-lg text-xs">
            <option>Tous les types de NC</option>
          </select>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-4 flex-wrap">
          <span className="px-3 py-1.5 bg-blue-500 text-white text-xs rounded-lg">Tous (20)</span>
          <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded-lg">✅ Identifiés (18)</span>
          <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded-lg">⚠️ Non identifiés (2)</span>
          <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded-lg">🔴 Avec NC (3)</span>
          <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded-lg">🔄 Contre-visite (3)</span>
        </div>

        {/* Table */}
        <div className="border rounded-xl overflow-hidden overflow-x-auto">
          <div className="bg-slate-100 px-4 py-2 grid grid-cols-5 text-[10px] font-semibold text-slate-600 uppercase min-w-[600px]">
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
            <div key={i} className={`px-4 py-3 grid grid-cols-5 text-[10px] border-t items-center min-w-[600px] ${i === 0 ? 'bg-green-50/50' : ''}`}>
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
  );
}


