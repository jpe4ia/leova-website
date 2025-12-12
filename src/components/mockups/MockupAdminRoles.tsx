export default function MockupAdminRoles() {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden text-[11px] md:text-xs">
      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
          <span className="text-white/50 text-xs">Administration</span>
        </div>
        <span className="px-3 py-1 bg-purple-500 text-white text-xs rounded">+ Nouveau rôle</span>
      </div>
      <div className="p-5">
        <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          🛡️ Gestion des Rôles Personnalisés
        </h4>
        <div className="space-y-3">
          {[
            { name: 'Super Admin', desc: 'Accès complet à toutes les fonctionnalités', users: 2, color: 'bg-purple-500', perms: ['Dashboard', 'Clients', 'Interventions', 'Admin', 'Rapports', 'Facturation'] },
            { name: 'Commercial', desc: 'Gestion des clients et offres', users: 3, color: 'bg-blue-500', perms: ['Dashboard', 'Clients', 'Offres'] },
            { name: 'Contrôleur Qualité', desc: 'Interventions et rapports terrain', users: 5, color: 'bg-green-500', perms: ['Interventions', 'Rapports', 'Planning'] },
            { name: 'Planificateur', desc: 'Gestion du planning interventions', users: 2, color: 'bg-orange-500', perms: ['Planning', 'Interventions'] },
          ].map((role, i) => (
            <div key={i} className="border rounded-xl p-4 hover:border-purple-300 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-8 ${role.color} rounded-full`}></div>
                  <div>
                    <div className="font-semibold text-slate-800">{role.name}</div>
                    <div className="text-xs text-slate-500">{role.desc}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500">{role.users} utilisateurs</span>
                  <button className="text-slate-400 hover:text-slate-600">✏️</button>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {role.perms.map((p, j) => (
                  <span key={j} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] rounded-full">{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
