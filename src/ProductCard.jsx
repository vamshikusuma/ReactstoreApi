
 import "./App.css"
 function ProductCard({title,id,price, image,rating}){
       
return(
    <>
    <div  className="component">
        
       
   
        
         <div className="component-inside"> 

         <img className="image" src={image} alt="" />
         <br />
        <h4> {title}</h4>

       
       <h5> ${price}</h5>
       <p>{rating.rate} <br />{rating.count}</p>
        </div>
 
   

    </div>
      

    </>
)
}
export default ProductCard