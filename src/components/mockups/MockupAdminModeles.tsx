export default function MockupAdminModeles() {
  return (
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { name: 'CQA - Rétro-alvéolaire', type: 'Dentaire', count: 156, icon: '🦷', color: 'border-blue-300' },
            { name: 'CQC - Scanner', type: 'Imagerie', count: 89, icon: '🔬', color: 'border-purple-300' },
            { name: 'CQE - Mammographie', type: 'Imagerie', count: 67, icon: '📊', color: 'border-pink-300' },
            { name: 'CQA - Panoramique', type: 'Dentaire', count: 134, icon: '🦷', color: 'border-teal-300' },
            { name: 'CQC - IRM', type: 'Imagerie', count: 45, icon: '🧲', color: 'border-indigo-300' },
            { name: 'CQE - Radiologie', type: 'Imagerie', count: 78, icon: '☢️', color: 'border-orange-300' },
          ].map((tpl, i) => (
            <div key={i} className={`p-4 border-2 ${tpl.color} rounded-xl hover:shadow-md transition-shadow flex items-center gap-4`}>
              <span className="text-3xl">{tpl.icon}</span>
              <div className="flex-1">
                <div className="font-semibold text-slate-800">{tpl.name}</div>
                <div className="text-xs text-slate-500">{tpl.type}</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-slate-700">{tpl.count}</div>
                <div className="text-[10px] text-slate-400">rapports</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
