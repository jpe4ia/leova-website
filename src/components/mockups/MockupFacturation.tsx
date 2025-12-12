export default function MockupFacturation() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
          <span className="text-[10px] text-white/40 hidden sm:block">Module Facturation</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-white/50">📅 11/12/2025</span>
          <div className="px-3 py-1.5 bg-emerald-500 text-white text-xs rounded-lg">💳 EBP Connecté</div>
        </div>
      </div>
      <div className="p-5">
        <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
            <span className="text-emerald-600">📄</span>
          </div>
          Gestion des Factures
        </h4>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          {[
            { label: 'En attente', value: '12', color: 'text-orange-600', bg: 'bg-orange-50' },
            { label: 'Envoyées', value: '45', color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Payées', value: '128', color: 'text-green-600', bg: 'bg-green-50' },
            { label: 'CA Mois', value: '47 850€', color: 'text-emerald-600', bg: 'bg-emerald-50' },
          ].map((stat, i) => (
            <div key={i} className={`${stat.bg} rounded-lg p-3 text-center`}>
              <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-[10px] text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Liste factures */}
        <div className="border rounded-lg overflow-hidden overflow-x-auto">
          <div className="bg-slate-50 px-3 py-2 flex items-center justify-between border-b">
            <span className="text-xs font-medium text-slate-600">Dernières factures</span>
            <button className="px-2 py-1 bg-emerald-500 text-white text-[10px] rounded">+ Nouvelle facture</button>
          </div>
          <table className="w-full text-[11px] min-w-[500px]">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left p-2 text-slate-500 font-medium">N° Facture</th>
                <th className="text-left p-2 text-slate-500 font-medium">Client</th>
                <th className="text-left p-2 text-slate-500 font-medium">Date</th>
                <th className="text-right p-2 text-slate-500 font-medium">Montant</th>
                <th className="text-center p-2 text-slate-500 font-medium">Statut</th>
              </tr>
            </thead>
            <tbody>
              {[
                { num: 'FAC-2025-0847', client: 'Cabinet Dentaire Martin', date: '11/12/2025', montant: '1 250,00 €', statut: 'Payée', color: 'bg-green-100 text-green-700' },
                { num: 'FAC-2025-0846', client: 'Centre Imagerie Durand', date: '10/12/2025', montant: '3 890,00 €', statut: 'Envoyée', color: 'bg-blue-100 text-blue-700' },
                { num: 'FAC-2025-0845', client: 'Clinique Saint-Jean', date: '09/12/2025', montant: '5 420,00 €', statut: 'Payée', color: 'bg-green-100 text-green-700' },
                { num: 'FAC-2025-0844', client: 'Dr Lefebvre', date: '08/12/2025', montant: '890,00 €', statut: 'En attente', color: 'bg-orange-100 text-orange-700' },
                { num: 'FAC-2025-0843', client: 'Hôpital Central', date: '07/12/2025', montant: '12 350,00 €', statut: 'Payée', color: 'bg-green-100 text-green-700' },
              ].map((fac, i) => (
                <tr key={i} className="border-t hover:bg-slate-50">
                  <td className="p-2 font-medium text-blue-600">{fac.num}</td>
                  <td className="p-2 text-slate-700">{fac.client}</td>
                  <td className="p-2 text-slate-500">{fac.date}</td>
                  <td className="p-2 text-right font-medium text-slate-800">{fac.montant}</td>
                  <td className="p-2 text-center">
                    <span className={`px-2 py-1 rounded-full text-[9px] ${fac.color}`}>{fac.statut}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

