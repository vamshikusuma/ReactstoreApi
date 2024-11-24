import { useEffect, useState } from 'react'
import './App.css'
import ProductCard from "./ProductCard"

function App() {
  const [product, updateProduct] = useState([])
 
  useEffect(
     ()=>{
      getProduct()
    },[]
  )
   
   async function getProduct(){
    let pl =  await fetch('https://fakestoreapi.com/products')
           let proList =  await pl.json()   
          updateProduct(proList);

  }

  console.log(product)

  if(product.length===0){
    return (<h3>Fecthing</h3>)
  }
  

 
  return (
    < >

    <div className="head">

    {product.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </div>
     
    </>
  )

}

export default App
