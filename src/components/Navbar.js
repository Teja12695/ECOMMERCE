import React from 'react'
import one from "../images/11.jpg"
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <>
    <div>
      <nav className="m-2  navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <img src={one}  height={30} width={50} style={{borderRadius:"10px",margin:"5px"}} alt='helo'/>
    <a className="navbar-brand" href="/" style={{fontFamily:"cursive",marginLeft:"20px"}}>
      Indian Toys
    </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li>hello</li>
      </ul>
      <button className='btn btn-primary'><Link className='text-light' style={{textDecoration:"none"}} to="./cart">Cart</Link></button>
      <form className="d-flex">
      </form>
    </div>
  </div>
</nav>
    </div>
    </>
  )
}
