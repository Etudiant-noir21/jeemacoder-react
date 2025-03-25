import { useEffect, useState } from "react"
export const Formulaire = ({addItems,modifItems,currentId}) => {



const [nom,setNom]=useState("")
const [prenom,setPrenom]=useState("")
const [email,setEmail]=useState("")
const [telephone,setTelephone]=useState("")

const handlerSubmit=(e)=>{
    if(!nom.trim() || !prenom.trim() || !email.trim()|| !telephone.trim()) return
e.preventDefault()
const newItems ={
    id: Date.now() + Math.random() *1000,
    nom: nom,
    prenom: prenom,
    email: email,
    telephone: telephone
}

addItems(newItems)
setNom("")
setPrenom("")
setEmail("")
setTelephone("")
}

   useEffect(()=>{
    if(modifItems && currentId){
        setNom(currentId.nom)
        setPrenom(currentId.prenom)
        setEmail(currentId.email)
        setTelephone(currentId.telephone)
    }else{
        setNom("")
        setPrenom("")
        setEmail("")
        setTelephone("")    }
   },[modifItems,currentId])
   
      
    return <>
    <div className="container">
    <form  className="form-group" onSubmit={handlerSubmit}>
        <div className="row">
          <div className="col-md-6 p-2">
            <div className="mb-3">
            <label htmlFor="nom" className="form-label">Nom</label>
            <input name="nom" type="text"  className="form-control" value={nom}
             onChange={(e)=>setNom(e.target.value)}
             />
           </div>
         </div>
          <div className="col-md-6 p-2">
            <div className="mb-3">
            <label htmlFor="prenom" className="form-label">Prenom</label>
            <input name="prenom" type="text" className="form-control" id="prenom"
             value={prenom}
             onChange={(e)=>setPrenom(e.target.value)}
            />
           </div>
         </div>
          <div className="col-md-6 p-2">
            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input name="email" type="email" className="form-control" id="email"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
            />
           </div>
         </div>
          <div className="col-md-6 p-2">
            <div className="mb-3">
            <label htmlFor="telephone" className="form-label">Telephone</label>
            <input name="telephone" type="number" className="form-control" id="telephone"
             value={telephone}
             onChange={(e)=>setTelephone(e.target.value)}
            />
           </div>
         </div>
         <button type="submit" className="text-center text-white w-100 btn btn-success">ajouter</button>
        </div>
    </form>

    </div>
   
        
    
    </>;
}

