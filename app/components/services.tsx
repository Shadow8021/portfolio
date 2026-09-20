import React from 'react'
const serves = [
    {
        id:1,
        nom:"Web apps",
        descript:"Des produits web robustes, de l&apos;API à l&apos;interface, pensés pour durer et grandir."
    },{
        id:2,
        nom:"Mobile",
        descript:"Des applications iOS et Android fluides qui trouvent naturellement leur place dans la vie des gens."
    },{
        id:3,
        nom:"Direction technique",
        descript:"Architecture, choix de stack et accompagnement pour avancer avec moins de friction."
    }
]
export default function Services() {
  return (
    <section className="services section-wrap" id="services">
        <p className="section-label">04 / Ce que je fais</p>
        <div className="section-heading">
           
            <span>Une approche, plusieurs terrains de jeu</span>
        </div>

        <div className="service-grid ">
            {serves.map((el)=>(
            <div key={el.id} className='mb-10'>
               <span className="service-index">{el.id}</span>
                <h3>{el.nom}</h3>
                <p>{el.descript}</p>
            </div> 
            ))}
        </div>
    </section>
  )
}
