import React from 'react'
import '../styles/Homehero.css'
import Registration from './Registration'
import OfferEnds from './OfferEnds'
import Works from './Works'

function HomeHero() {
  return (
    <section className='hero text-center' id='home'>
      {/* <div className="blur1 d-none d-sm-none d-md-block"></div>
      <div className="blur2 d-none d-sm-none d-md-block"></div> */}
    
        <secion className="main-hero p-md-5 p-3">
        <button className=' btn p-2 px-4 text-white bg-black mb-3 mt-3 btn-w'><big><b>Angular  Bootcamp </b></big></button>
        <h1 className="heading-text  text-black mt-3 text-900 py-2">Secret Blueprint for  High-Paid <span className="text-main">Angular career</span></h1>
        <div className="p-large text-black">Live Q&A Session With Experts, <br />Get Easiest Part To Learn complete Angular,  Get E-Certificate and Study Meterial</div>
        <div className="date-container mt-5">
            <button className="div-block-876 bg-black"> <i class="bi bi-calendar2-event text-main"></i>2nd - 3rd Feb 2024 </button>
            <button className="div-block-876 bg-black"> <i class="bi bi-alarm text-main"></i> <span >7:30PM to 9:30PM</span></button>
        </div>
        </secion>
        <div className='container mt-5 text-start'>
        <div className="row align-items-center justify-content-center">
     
      <div className="col-12 col-sm-12 col-md-6 col-lg-7 mb-3 order-2 order-sm-2 order-md-1">
      <Works/>
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-5 mb-3 order-1 order-sm-1 order-md-2">
    <Registration/>
</div>

      </div>
        </div>
       <div className="text-center container-fluid">
        <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-12 col-md-8">
        {/* <OfferEnds/> */}
            
            </div>
        </div>
       </div>
    </section>
  )
}

export default HomeHero
