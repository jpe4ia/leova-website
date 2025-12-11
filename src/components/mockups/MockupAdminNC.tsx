export default function MockupAdminNC() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
          <span className="text-white/50 text-xs">Administration</span>
        </div>
        <span className="px-3 py-1 bg-red-500 text-white text-xs rounded">+ Nouvelle NC</span>
      </div>
      <div className="p-5">
        <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          ⚠️ Configuration Non-conformités
        </h4>
        <div className="space-y-3">
          {[
            { code: 'NC-001', name: 'Défaut de calibration', category: 'Technique', severity: 'Majeure', count: 23, color: 'bg-red-500' },
            { code: 'NC-002', name: 'Documentation incomplète', category: 'Administrative', severity: 'Mineure', count: 45, color: 'bg-orange-500' },
            { code: 'NC-003', name: 'Écart de mesure', category: 'Technique', severity: 'Critique', count: 8, color: 'bg-red-700' },
            { code: 'NC-004', name: 'Maintenance en retard', category: 'Opérationnelle', severity: 'Mineure', count: 31, color: 'bg-yellow-500' },
            { code: 'NC-005', name: 'Équipement non conforme', category: 'Technique', severity: 'Majeure', count: 12, color: 'bg-red-500' },
          ].map((nc, i) => (
            <div key={i} className="flex items-center gap-4 p-4 border rounded-xl hover:border-red-300 transition-colors">
              <div className={`w-2 h-12 ${nc.color} rounded-full`}></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] rounded font-mono">{nc.code}</span>
                  <span className="font-semibold text-slate-800">{nc.name}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span>{nc.category}</span>
                  <span className={`px-2 py-0.5 rounded-full ${nc.severity === 'Critique' ? 'bg-red-100 text-red-700' : nc.severity === 'Majeure' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {nc.severity}
                  </span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-slate-700">{nc.count}</div>
                <div className="text-[10px] text-slate-400">occurrences</div>
              </div>
              <button className="text-slate-400 hover:text-slate-600">✏️</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
