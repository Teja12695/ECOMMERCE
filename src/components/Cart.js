import React from 'react'

function Cart(props) {
    var price = 0
 
    {props.item.map((card)=>{
        return(
        price =  card.item.price + price
        )})}


    return (
        <div className='bg-dark'>
        <div className='row'>
           
          {props.item.map((card)=>{
            return(
              <div key={card.item.id} className='col-md-4' >
                <div className="card" style={{width: '18rem',margin:"30px",marginLeft:"100px"}}>
            <img src={card.item.image} height={200} width={250} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{card.item.name}</h5>
              <p className="card-text">price:{card.item.price}</p>
            </div>
          </div>
              </div>
            )
          })}
        </div>

        <h1 className='text-center text-light'>Total cost : {price}rs</h1>
        </div>
    )
}

export default Cart
