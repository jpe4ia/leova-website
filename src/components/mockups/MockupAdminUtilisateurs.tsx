export default function MockupAdminUtilisateurs() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
          <span className="text-white/50 text-xs">Administration</span>
        </div>
        <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded">+ Nouvel utilisateur</span>
      </div>
      <div className="p-5">
        <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          👥 Gestion des Utilisateurs
        </h4>
        <div className="border rounded-xl overflow-hidden overflow-x-auto">
          <div className="bg-slate-100 px-4 py-2 grid grid-cols-5 text-xs font-semibold text-slate-600 min-w-[600px]">
            <span>UTILISATEUR</span>
            <span>EMAIL</span>
            <span>RÔLE</span>
            <span>STATUT</span>
            <span>ACTIONS</span>
          </div>
          {[
            { name: 'Jean DUPONT', email: 'j.dupont@exemple.fr', role: 'Administrateur', status: 'Actif', color: 'bg-purple-100 text-purple-700' },
            { name: 'Marie MARTIN', email: 'm.martin@exemple.fr', role: 'Commercial', status: 'Actif', color: 'bg-blue-100 text-blue-700' },
            { name: 'Pierre BERNARD', email: 'p.bernard@exemple.fr', role: 'Contrôleur', status: 'Actif', color: 'bg-green-100 text-green-700' },
            { name: 'Sophie PETIT', email: 's.petit@exemple.fr', role: 'Planification', status: 'Inactif', color: 'bg-orange-100 text-orange-700' },
          ].map((user, i) => (
            <div key={i} className="px-4 py-3 grid grid-cols-5 text-xs border-t items-center hover:bg-slate-50 min-w-[600px]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="font-medium text-slate-700">{user.name}</span>
              </div>
              <span className="text-slate-600">{user.email}</span>
              <span className={`px-2 py-1 rounded-full text-[10px] w-fit ${user.color}`}>{user.role}</span>
              <span className={`${user.status === 'Actif' ? 'text-green-600' : 'text-slate-400'}`}>● {user.status}</span>
              <div className="flex gap-1">
                <button className="p-1 hover:bg-slate-100 rounded text-slate-500">✏️</button>
                <button className="p-1 hover:bg-slate-100 rounded text-slate-500">🔑</button>
                <button className="p-1 hover:bg-red-50 rounded text-red-500">🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
