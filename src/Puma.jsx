import React from 'react'
import Navbar from './component/Navbar'
import { Store } from './data'
import { FaShoppingBag } from "react-icons/fa";

function Puma({ z, w,order,setOrder }) {
  const addone=()=>{
    setOrder(order+1);
    
    }
  return (
    <div className='Puma'>
        <Navbar z={z} w={w} order={order} setOrder={setOrder}/>
        <div class="card-grid">
        {Store.map((el,index)=>{
          if(el.company==="Puma"){
            return (<div className='carts'>
              <img src={el.img} alt=''/>
              <h2>{el.title}</h2>
              <p>{el.star} {el.star}{el.star}{el.star}{el.star}</p>
              <div className='costing'>
              <p>{el.newPrice}</p>
              <FaShoppingBag  style={{cursor:"pointer"}} onClick={()=>{addone()}}/>
              </div>             </div>)
          }

        })}

</div>
    </div>
  )
}

export default Puma