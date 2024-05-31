import React from 'react';
import Navbar from "../Compotents/Navbar";
import Footer from "../Compotents/Footer";
import Carousel from 'better-react-carousel'


function Services() {
  return (
    <>
      <Navbar />

     <div className='container-services'>
        <div className='services'>
          <img src='../../public/images/Clinic.jpg' className='services-Img'/>
        </div>

       <div className='services-content'>

       <div className='test-simple'>
       <img src='../../public/images/PolyClinic.jpg' className='test'/>
       <small>Laboraotory services </small>
       </div>
             
       <div className='test-simple'>
       <img src='../../public/images/man-having.jpg' className='test'/>
       <small>COVID-19 Test </small>
       </div>
      
       <div className='test-simple'>
       <img src='../../public/images/pngtree.png' className='test'/>
       <small>Sugar Test services </small>
       </div>
      
       <div className='test-simple'>
       <img src='../../public/images/blood_samples.png' className='test'/>
       <small>Radiology services </small>
       </div>
         
        </div>

        <div className='silder'>
         <div className='silder-Img'>
          <h4>Lab Home Sample Collection</h4>
          <div className='carousel'> 
          <Carousel cols={4} rows={1} gap={1} loop>
          <Carousel.Item>
            <img src="../../public/images/man-having.jpg" className='carousel-Img'/>
          </Carousel.Item>
          <Carousel.Item>
            <img className='carousel-Img' src="../../public/images/Laboraotory.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <img className='carousel-Img' src="../../public/images/pngtree.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img className='carousel-Img' src="../../public/images/blood-donation.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <img className='carousel-Img' src="../../public/images/blood-donation.jpg" />
          </Carousel.Item><Carousel.Item>
          <img className='carousel-Img' src="../../public/images/blood-donation.jpg" />
        </Carousel.Item>
        </Carousel>
          
          </div>
          
         </div>
        
         </div>

       </div>

      <Footer />

    </>
  )
}



export default Services;