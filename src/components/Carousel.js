import React from 'react'
import nine from "../images/9.jpeg"
import ten from "../images/10.jpg"
import five from "../images/5.jpg"



export default function Carousel() {
  return (
    <div className='m-2'>
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className ="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" style={{height:"450px"}}>
    <div className="carousel-item active ">
      <img src={five} className="d-block w-100" alt="."/>
    </div>
    <div className="carousel-item">
      <img src={nine} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={ten} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

