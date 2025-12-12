export default function MockupAdminTemplates() {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden text-[11px] md:text-xs">
      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
          <span className="text-white/50 text-xs">Administration</span>
        </div>
        <span className="px-3 py-1 bg-indigo-500 text-white text-xs rounded">+ Nouveau template</span>
      </div>
      <div className="p-5">
        <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          📧 Templates Avis d&apos;Intervention
        </h4>
        <div className="space-y-3">
          {[
            { name: 'Avis Initial', type: 'Envoi automatique', subject: 'Intervention prévue le {DATE}', active: true },
            { name: 'Rappel J-3', type: 'Rappel', subject: 'Rappel : Intervention dans 3 jours', active: true },
            { name: 'Confirmation', type: 'Confirmation', subject: 'Merci pour votre confirmation', active: true },
            { name: 'Report', type: 'Modification', subject: 'Report de votre intervention', active: false },
          ].map((tpl, i) => (
            <div key={i} className="border rounded-xl p-4 hover:border-indigo-300 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <div className="font-semibold text-slate-800">{tpl.name}</div>
                    <div className="text-xs text-indigo-600">{tpl.type}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-9 h-5 rounded-full relative ${tpl.active ? 'bg-green-500' : 'bg-slate-300'}`}>
                    <div className={`absolute top-0.5 ${tpl.active ? 'right-0.5' : 'left-0.5'} w-4 h-4 bg-white rounded-full shadow`}></div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600">✏️</button>
                </div>
              </div>
              <div className="text-xs text-slate-500 bg-slate-50 p-2 rounded font-mono">
                Objet : {tpl.subject}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
