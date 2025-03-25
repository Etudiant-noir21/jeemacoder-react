
import { useEffect, useState } from 'react'
import './App.css'
import { Formulaire } from './formulaire'
import { Tableau } from './table'

function App() {
  const [items,setItems]=useState([])
  const [modifierItem,setModifierItem]=useState(false)
  const [currentId,setCurrentId]=useState(null)

const addItems= (item)=>{
  if(modifierItem && currentId){
    const updateItems= items.map(i=> i.id=== currentId.id? item : i )
    setItems(updateItems)
    localStorage.setItem("items",JSON.stringify(updateItems))
    setModifierItem(false)
    setCurrentId(null)
  }else{
    setItems([...items,item])
    localStorage.setItem("items",JSON.stringify([...items,item]))

  }

}

useEffect(()=>{
  const newItems= JSON.parse(localStorage.getItem("items"))
  if(newItems){
    return setItems(newItems)
  }
},[])

const deleteItems=(id)=>{
  const newItems= JSON.parse(localStorage.getItem("items"))
  const suppItems = newItems.filter(item=> item.id !== id)
  setItems(suppItems)
  localStorage.setItem("items",JSON.stringify(suppItems))

}
  
const modifier= (modifId)=>{
  const newItems= JSON.parse(localStorage.getItem("items"))
  const modifItems = newItems.find(item=> item.id === modifId)
  console.log(modifItems);
  if(!modifItems) return
  setCurrentId(modifItems)
  setModifierItem(true)

}
console.log(items);

  return (
    <>
    <div className="container-fluid">
     <h1 className='text-center '>Jeemacoder gestion d'utilisateurs</h1>
     <Formulaire
     addItems={addItems}
     modifItems={modifierItem}
     currentId={currentId}
     
     />

     <Tableau
     items={items}
     deleteItems={deleteItems}
     modifItems={modifier}
     />
    </div>
    </>
  )
}

export default App
