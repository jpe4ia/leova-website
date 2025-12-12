export default function MockupAdminSync() {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden text-[11px] md:text-xs">
      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
          <span className="text-white/50 text-xs">Administration</span>
        </div>
        <span className="px-3 py-1 bg-green-500 text-white text-xs rounded">🔄 Synchroniser tout</span>
      </div>
      <div className="p-5">
        <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          🔗 Synchronisation & Intégrations
        </h4>
        <div className="space-y-4">
          {[
            { name: 'EBP Gestion Commerciale', desc: 'Facturation & synchronisation clients', status: 'Connecté', lastSync: 'Il y a 5 min', icon: '💳', color: 'text-green-600', bgColor: 'bg-green-50 border-green-200' },
            { name: 'Google Sheets', desc: 'Export automatique des données', status: 'Actif', lastSync: 'Il y a 1h', icon: '📊', color: 'text-green-600', bgColor: 'bg-green-50 border-green-200' },
            { name: 'Synchroteam', desc: 'Planning et interventions terrain', status: 'Connecté', lastSync: 'Il y a 15 min', icon: '📅', color: 'text-green-600', bgColor: 'bg-green-50 border-green-200' },
            { name: 'API Webhook', desc: 'Notifications temps réel', status: 'Configuré', lastSync: 'Temps réel', icon: '🔔', color: 'text-blue-600', bgColor: 'bg-blue-50 border-blue-200' },
          ].map((int, i) => (
            <div key={i} className={`p-4 border rounded-xl ${int.bgColor}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{int.icon}</span>
                  <div>
                    <div className="font-semibold text-slate-800">{int.name}</div>
                    <div className="text-xs text-slate-500">{int.desc}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-medium ${int.color}`}>● {int.status}</div>
                  <div className="text-[10px] text-slate-400">{int.lastSync}</div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between">
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-white border rounded text-xs hover:bg-slate-50">⚙️ Configurer</button>
                  <button className="px-3 py-1 bg-white border rounded text-xs hover:bg-slate-50">🔄 Sync</button>
                </div>
                <button className="text-xs text-slate-500 hover:text-slate-700">Voir les logs →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
