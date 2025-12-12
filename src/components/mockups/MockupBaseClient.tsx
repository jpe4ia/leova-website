export default function MockupBaseClient() {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden text-[11px] md:text-xs">
      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
        <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">LISA</span>
        <div className="text-[10px] text-white/50">🏢 Base Client</div>
      </div>
      <div className="p-5">
        {/* Client Detail Header */}
        <div className="bg-slate-50 rounded-xl p-4 border mb-4">
          <div className="flex items-start justify-between flex-wrap gap-2">
            <div className="flex items-center gap-4">
              <div className="text-sm font-mono text-slate-500">▾ 13890</div>
              <div>
                <h5 className="font-bold text-slate-800">APHP - Hôpital Bichat Claude Bernard</h5>
                <div className="text-xs text-slate-500">kaya.doyeux@aphp.fr</div>
              </div>
            </div>
            <div className="text-right text-xs">
              <div className="text-slate-500">📍 75018 Paris</div>
              <div className="text-slate-400">46 Rue Henri Huchard</div>
              <div className="text-slate-600">📞 +33140258471</div>
            </div>
          </div>
        </div>

        {/* Portail Client Access */}
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-4 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔑</span>
            <div>
              <div className="font-medium text-slate-700">Accès Portail Client</div>
              <div className="text-xs text-slate-500">Aucun accès portail configuré pour ce client</div>
              <div className="text-[10px] text-slate-400">L&apos;identifiant sera : 13890</div>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600">🔗 Créer l&apos;accès</button>
        </div>

        {/* Site Detail */}
        <div className="border rounded-xl overflow-hidden overflow-x-auto">
          <div className="bg-slate-100 px-4 py-3 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span className="font-medium text-slate-700">APHP - Hôpital Bichat Claude Bernard</span>
              <span className="text-xs text-slate-500">Paris (75018) • Réf: 13890-1</span>
            </div>
            <span className="text-xs text-slate-500">29 équip. • 42 interv.</span>
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Equipements */}
            <div>
              <div className="flex items-center gap-2 mb-2 text-sm font-medium text-slate-700">
                <span>🔧</span> Équipements (29)
              </div>
              <div className="space-y-1 text-[10px]">
                <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded">
                  <span>AM - 2230-Philips-BV Pulsera</span>
                  <span className="text-blue-500">📎</span>
                </div>
                <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded">
                  <span>AM - 4023-Siemens-Siremobil compact L</span>
                  <span className="text-blue-500">📎</span>
                </div>
                <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded">
                  <span>AM - 42020-Siemens-CIOS ALPHA</span>
                  <span className="text-blue-500">📎</span>
                </div>
              </div>
            </div>
            {/* Interventions */}
            <div>
              <div className="flex items-center gap-2 mb-2 text-sm font-medium text-slate-700">
                <span>📅</span> Interventions (42)
              </div>
              <div className="space-y-1 text-[10px]">
                <div className="p-1.5 bg-slate-50 rounded">
                  <span className="text-blue-600">#70969</span> - CQC - Scanner<br/>
                  <span className="text-slate-400">2025-12-31</span>
                </div>
                <div className="p-1.5 bg-slate-50 rounded">
                  <span className="text-blue-600">#71394</span> - CQC - Scanner<br/>
                  <span className="text-slate-400">2025-12-31</span>
                </div>
              </div>
            </div>
            {/* Prestations */}
            <div>
              <div className="flex items-center gap-2 mb-2 text-sm font-medium text-slate-700">
                <span>📋</span> Prestations
              </div>
              <div className="space-y-1 text-[10px]">
                <div className="flex justify-between p-1.5 bg-slate-50 rounded">
                  <span>CQC - Table télécommandée</span>
                  <span className="text-blue-600">1x</span>
                </div>
                <div className="flex justify-between p-1.5 bg-slate-50 rounded">
                  <span>CQC - Table interventionnelle</span>
                  <span className="text-blue-600">9x</span>
                </div>
                <div className="flex justify-between p-1.5 bg-slate-50 rounded">
                  <span>CQC - Mobile Lit</span>
                  <span className="text-blue-600">8x</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facturation Params */}
        <div className="mt-4 bg-amber-50 rounded-xl p-4 border border-amber-100">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span>💳</span>
            <span className="font-medium text-slate-700">Paramètres Facturation (EBP)</span>
            <button className="ml-auto px-3 py-1 bg-teal-500 text-white text-xs rounded hover:bg-teal-600">🔄 Actualiser</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div>
              <div className="text-slate-500">Mode règlement</div>
              <div className="font-medium">VIRNET</div>
            </div>
            <div>
              <div className="text-slate-500">Remise habituelle</div>
              <div className="font-medium">50.0%</div>
            </div>
            <div>
              <div className="text-slate-500">Frais déplacement</div>
              <div className="font-medium">Non</div>
            </div>
            <div>
              <div className="text-slate-500">Bon de commande</div>
              <div className="font-medium">Non requis</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

