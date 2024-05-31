import React from 'react';
import Navbar from '../Compotents/Navbar';
import Footer from '../Compotents/Footer';

function About() {
  return (
<>
<Navbar />

<div className='continer-about'> 
<img src='../../public/images/Division-Laboratory.jpg' className='about_Img' />

<p>Blood Laboratory provides pathological inquiry tests that help in diagnosis, treatment and prevention. Since 2010, Husaini Labs have performed millions of diagnostic investigations, done by staff trained in international practices on state-of-the-art equipment.
The diagnostic lab was started in 1979 to fulfil the blood investigation requirements of our Thalassemia and Hemophilia patients. Overtime, its reliability led to creation of demand for a comprehensive diagnostics service.</p>

<div className='text-card'>
 <img src='../../public/images/Laboraotory.jpg' className='card'/>
 <img src='../../public/images/Laboraotory.jpg' className='card'/>
 <img src='../../public/images/Laboraotory.jpg' className='card'/>
 
 </div>

 </div>

 <Footer />

</>

  )
}



export default About;