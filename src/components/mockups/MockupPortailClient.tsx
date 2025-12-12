export default function MockupPortailClient() {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden text-[11px] md:text-xs">
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-xl">🏢</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Cabinet Dentaire Martin</h3>
              <p className="text-sm text-white/60">Portail Client LISA</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">Accès actif</span>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Interventions', value: '24', icon: '📋' },
            { label: 'Équipements', value: '8', icon: '🔧' },
            { label: 'Documents', value: '156', icon: '📄' },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-50 rounded-lg p-4 text-center">
              <span className="text-2xl">{stat.icon}</span>
              <div className="text-2xl font-bold text-slate-800 mt-2">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-bold text-slate-800 mb-3">Dernières interventions</h4>
          <div className="space-y-2">
            {[
              { date: '10/12/2025', type: 'CQA Rétro', status: 'Conforme', color: 'text-green-600' },
              { date: '15/09/2025', type: 'CQA Panoramique', status: 'Conforme', color: 'text-green-600' },
              { date: '20/06/2025', type: 'CQA Rétro', status: 'NC Mineure', color: 'text-orange-600' },
            ].map((int, i) => (
              <div key={i} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded">
                <span className="text-sm text-slate-600">{int.date}</span>
                <span className="text-sm font-medium">{int.type}</span>
                <span className={`text-sm font-medium ${int.color}`}>{int.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

