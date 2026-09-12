export default function project() {
    const infos =[{
        id:1,
        titre:"saaS Dashboard",
        descript:"Plateforme d'analytics en temps réel avec visualisation de données avancée et rapports automatisés.",
        tech:[
            {
                bg: "bg-cyan-500/10",
                color:"text-cyan-400",
                text:"React"
            },
            {
                bg: "bg-violet-500/10",
                color:"text-violet-400",
                text:"Node.js"
            },{
                bg: "bg-emerald-500/10",
                color:"text-emerald-400",
                text:"PostgreSQL"
            }]
    },{
        id:2,
        titre:"E-Commerce Platform",
        descript:"Solution e-commerce complète avec gestion d'inventaire, paiements sécurisés et tableau de bord vendeur.",
        tech:[
            {
                bg: "bg-cyan-500/10",
                color:"text-cyan-400",
                text:"Next"
            },
            {
                bg: "bg-violet-500/10",
                color:"text-violet-400",
                text:"Stripe"
            },{
                bg: "bg-emerald-500/10",
                color:"text-emerald-400",
                text:"MongosDB"
            }]
    },{
        id:3,
        titre:"Mobile App API",
        descript:"Backend robuste pour application mobile avec authentification OAuth, notifications push et sync offline.",
        tech:[
            {
                bg: "bg-cyan-500/10",
                color:"text-cyan-400",
                text:"Nest"
            },
            {
                bg: "bg-violet-500/10",
                color:"text-violet-400",
                text:"GraphQL"
            },{
                bg: "bg-emerald-500/10",
                color:"text-emerald-400",
                text:"Redis"
            }]
    }]

                        
  return (
    <section id="projects" className="py-3">
            <div className="max-w-7xl mx-auto px-6">
                

                <div className="text-center mb-1">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Projets Sélectionnés</h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">Des solutions sur mesure qui répondent à des
                        défis réels et génèrent un impact mesurable.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {infos.map((el)=>(
                    
                    <div key={el.id} className="card-hover group bg-slate-900/50 rounded-3xl border border-slate-800/50 overflow-hidden">
                        <div
                            className="aspect-video bg-gradient-to-br from-cyan-500/20 to-violet-500/20 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-6xl">
                                    🚀
                                </div>
                            </div>
                            <div
                                className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                    title="GitHub">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg></a> <a href="#"
                                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                    title="Live Demo">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg></a>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">{el.titre}</h3>
                            <p className="text-slate-400 mb-4 text-sm leading-relaxed">{el.descript}</p>
                            <div className="flex flex-wrap gap-2">
                                {el.tech.map((item)=>(
                                    <span key={item.text} className={`px-3 py-1 text-xs rounded-full ${item.bg} ${item.color}`}>{item.text}</span>
                                
                                ))}
                            </div>
                        </div>
                    </div>
                
                ))}
                    
                </div>
               
            </div>
        </section>
  )
}
