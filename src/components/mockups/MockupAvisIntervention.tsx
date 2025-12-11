export default function MockupAvisIntervention() {
  return (
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header avec barre latérale gauche colorée */}
              <div className="flex">
                <div className="w-2 bg-gradient-to-b from-blue-500 via-teal-500 to-green-500"></div>
                <div className="flex-1">
                  {/* Top bar */}
                  <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        📋 Suivi des Avis d&apos;Intervention
                      </h4>
                      <p className="text-sm text-slate-500">Interventions de -30 jours à +60 jours</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="px-4 py-2 bg-slate-100 text-slate-600 text-sm rounded-lg flex items-center gap-2 hover:bg-slate-200">
                        📊 Tout afficher
                      </button>
                      <button className="px-4 py-2 bg-slate-100 text-slate-600 text-sm rounded-lg flex items-center gap-2 hover:bg-slate-200">
                        🔄 Actualiser
                      </button>
                      <button className="px-4 py-2 bg-slate-800 text-white text-sm rounded-lg flex items-center gap-2 hover:bg-slate-700">
                        ⚙️ Paramètres
                      </button>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 md:grid-cols-5 border-b">
                    <div className="p-4 text-center border-r">
                      <div className="text-3xl font-bold text-slate-700">131</div>
                      <div className="text-xs text-slate-500">Interventions planifiées</div>
                    </div>
                    <div className="p-4 text-center border-r bg-orange-50">
                      <div className="text-3xl font-bold text-orange-500">115</div>
                      <div className="text-xs text-slate-500">Avis non envoyés</div>
                    </div>
                    <div className="p-4 text-center border-r bg-blue-50">
                      <div className="text-3xl font-bold text-blue-500">16</div>
                      <div className="text-xs text-slate-500">Avis envoyés</div>
                    </div>
                    <div className="p-4 text-center border-r bg-green-50">
                      <div className="text-3xl font-bold text-green-600">11</div>
                      <div className="text-xs text-slate-500 flex items-center justify-center gap-1">✅ Confirmés client</div>
                    </div>
                    <div className="p-4 text-center">
                      <div className="text-3xl font-bold text-red-500">0</div>
                      <div className="text-xs text-slate-500">Erreurs</div>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="p-4 bg-slate-50 border-b flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3 text-sm">
                      <label className="flex items-center gap-2 text-slate-600">
                        <span className="w-4 h-4 rounded border bg-white"></span>
                        Auto : Off
                      </label>
                      <label className="flex items-center gap-2 text-slate-600">
                        <span className="w-4 h-4 rounded border bg-white"></span>
                        Rappel : Off
                      </label>
                    </div>
                    <button className="px-6 py-2 bg-teal-500 text-white rounded-lg flex items-center gap-2 hover:bg-teal-600 shadow-lg">
                      ✈️ Envoyer tous les avis non envoyés (115)
                    </button>
                  </div>

                  {/* Search & Filters */}
                  <div className="p-4 border-b">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-slate-600 text-sm">🔍 Recherche</span>
                      <input className="flex-1 px-4 py-2 border rounded-lg text-sm" placeholder="Client, établissement, email, n°..." />
                      <button className="px-3 py-2 bg-blue-500 text-white text-sm rounded-lg">Tout</button>
                      <button className="px-3 py-2 bg-white border text-slate-600 text-sm rounded-lg">Cette semaine</button>
                      <button className="px-3 py-2 bg-white border text-slate-600 text-sm rounded-lg">Semaine prochaine</button>
                      <input type="date" className="px-3 py-2 border rounded-lg text-sm" />
                      <span className="text-slate-400">→</span>
                      <input type="date" className="px-3 py-2 border rounded-lg text-sm" />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-slate-500">Statut intervention :</span>
                      <label className="flex items-center gap-1 text-xs"><input type="checkbox" defaultChecked className="w-3 h-3" /> Planifié</label>
                      <label className="flex items-center gap-1 text-xs"><input type="checkbox" defaultChecked className="w-3 h-3" /> Synchronisé</label>
                      <label className="flex items-center gap-1 text-xs"><input type="checkbox" defaultChecked className="w-3 h-3" /> Confirmé</label>
                      <span className="mx-2 text-slate-300">|</span>
                      <button className="px-2 py-1 bg-blue-500 text-white text-xs rounded">Tous</button>
                      <button className="px-2 py-1 bg-white border text-slate-600 text-xs rounded">Non envoyés (115)</button>
                      <button className="px-2 py-1 bg-white border text-slate-600 text-xs rounded">Envoyés (16)</button>
                      <button className="px-2 py-1 bg-white border text-slate-600 text-xs rounded">✅ Confirmés (11)</button>
                      <button className="px-2 py-1 bg-white border text-slate-600 text-xs rounded">⏳ En attente (5)</button>
                      <button className="px-2 py-1 bg-white border text-slate-600 text-xs rounded">❌ Erreurs (0)</button>
                      <button className="text-teal-600 text-xs hover:underline ml-2">🔄 Réinitialiser</button>
                    </div>
                    <div className="mt-2 text-xs text-slate-500">131 intervention(s) affichée(s)</div>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-100 text-slate-600 text-xs uppercase">
                        <tr>
                          <th className="px-4 py-3 text-left">CODE ÉTABLISSEMENT</th>
                          <th className="px-4 py-3 text-left">CLIENT / SITE</th>
                          <th className="px-4 py-3 text-left">DATE INTERVENTION</th>
                          <th className="px-4 py-3 text-left">STATUT</th>
                          <th className="px-4 py-3 text-left">EMAIL</th>
                          <th className="px-4 py-3 text-center">ENVOI INITIAL</th>
                          <th className="px-4 py-3 text-center">CONFIRMATION</th>
                          <th className="px-4 py-3 text-center">RAPPEL</th>
                          <th className="px-4 py-3 text-center">ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3">
                            <span className="text-blue-600 font-mono hover:underline cursor-pointer">11960-1</span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="font-medium text-slate-800">Cabinet dentaire du Dr FENEIS</div>
                            <div className="text-xs text-slate-500">Cabinet dentaire du Dr FENEIS</div>
                            <div className="text-xs text-teal-600">Celec 1h, CQA - Rétro-alvéolaire</div>
                          </td>
                          <td className="px-4 py-3 font-medium">2025-12-12</td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full flex items-center gap-1 w-fit">
                              📅 Planifié
                            </span>
                          </td>
                          <td className="px-4 py-3 text-xs font-mono text-slate-600">agendadentaire@gmail.com</td>
                          <td className="px-4 py-3 text-center text-xs text-slate-400">
                            <div>○ Non envoyé</div>
                          </td>
                          <td className="px-4 py-3 text-center">-</td>
                          <td className="px-4 py-3 text-center text-xs text-slate-400">Non envoyé</td>
                          <td className="px-4 py-3 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <button className="p-1 hover:bg-slate-100 rounded" title="Voir">👁️</button>
                              <button className="px-2 py-1 bg-teal-500 text-white text-xs rounded hover:bg-teal-600">✈️ Avis</button>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 bg-green-50/30">
                          <td className="px-4 py-3">
                            <span className="text-blue-600 font-mono hover:underline cursor-pointer">11629-4</span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="font-medium text-slate-800">PRIM - Cabinet de radiologie St Rémi REIMS</div>
                            <div className="text-xs text-slate-500">04 PRIM - Clinique Courlancy REIMS</div>
                          </td>
                          <td className="px-4 py-3 font-medium">2025-12-12</td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full flex items-center gap-1 w-fit">
                              🔄 Synchronisé
                            </span>
                          </td>
                          <td className="px-4 py-3 text-xs">
                            <div className="font-mono text-slate-600">cyrille.dudka@prim-radiologie.fr</div>
                            <div className="text-teal-600">+1 destinataire</div>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <div className="text-green-600 text-xs">✅ Envoyé</div>
                            <div className="text-[10px] text-slate-400">01/12/2025 19:17</div>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <div className="text-green-600 text-xs">✅ Confirmé</div>
                            <div className="text-[10px] text-blue-600">01/12/2025 19:17</div>
                          </td>
                          <td className="px-4 py-3 text-center text-xs text-slate-400">
                            <div>○ Non envoyé</div>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <button className="p-1 hover:bg-slate-100 rounded" title="Voir">👁️</button>
                              <button className="px-2 py-1 bg-orange-500 text-white text-xs rounded hover:bg-orange-600">📧 Rappel</button>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3">
                            <span className="text-blue-600 font-mono hover:underline cursor-pointer">12847-2</span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="font-medium text-slate-800">SELARL IMAGERIE 114 ST DIZIER</div>
                            <div className="text-xs text-slate-500">Centre d&apos;imagerie médicale</div>
                          </td>
                          <td className="px-4 py-3 font-medium">2025-12-13</td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full flex items-center gap-1 w-fit">
                              📅 Planifié
                            </span>
                          </td>
                          <td className="px-4 py-3 text-xs font-mono text-slate-600">contact@imagerie114.fr</td>
                          <td className="px-4 py-3 text-center">
                            <div className="text-green-600 text-xs">✅ Envoyé</div>
                            <div className="text-[10px] text-slate-400">02/12/2025 14:22</div>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <div className="text-orange-500 text-xs">⏳ En attente</div>
                          </td>
                          <td className="px-4 py-3 text-center text-xs text-slate-400">Non envoyé</td>
                          <td className="px-4 py-3 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <button className="p-1 hover:bg-slate-100 rounded" title="Voir">👁️</button>
                              <button className="px-2 py-1 bg-orange-500 text-white text-xs rounded hover:bg-orange-600">📧 Rappel</button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
  );
}
