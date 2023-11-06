import React from 'react'

function Card(props) {
  return (
    <div className='row bg-dark'>
      {props.Data.map((card)=>{
        return(
          
          <div key={card.id} className='col-md-4' >
            <div className="card" style={{width: '18rem',margin:"30px",marginLeft:"100px"}}>
        <img src={card.image} height={200} width={250} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{card.name}</h5>
          <p className="card-text">price:{card.price}</p>
          <button  onClick={()=>{props.addingCart(card)}} className='btn btn-primary'>Add to Cart</button>
        </div>
      </div>
          </div>
        )
      })}
    </div>
  )
   
   
}

export default Card


