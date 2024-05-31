import * as React from "react";
import { useForm } from "react-hook-form";
import Navbar from "../Compotents/Navbar";
import Footer from "../Compotents/Footer";



export default function Donor() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      category: '',
      checkbox: [],
      radio: ''
    }
  });


  return (
  <>
  <Navbar />

   <div className="container_form">
    <img src="../../public/images/blood-donation.png"
     className="Img_donor" width="40%"/>  
      <h3 className="userheading">User Information</h3>
     

    <form onSubmit={handleSubmit(console.log)} className="User_Information">
      <label> First Name <sup>*</sup></label>
       <input {...register("firstName", { required: true })} placeholder="First Name" />
        
      <label> Last Name <sup>*</sup></label>
      <input {...register("lastName", { minLength: 2 })} placeholder="Last Name" />
      
      <label> Father Name <sup>*</sup></label>
      <input {...register("FatherName", { required: true })} placeholder="Father name" />
     
      <label> Email <sup>*</sup></label> 
      <input {...register("Email", { required: true })} placeholder="Email" />
     
     <label>Blood Group <sup>*</sup></label> 
     <input {...register("Blood Group", { required: true })} placeholder="Blood Group " />
     
     <label> Address <sup>*</sup></label> 
     <input {...register("Address", { required: true })} placeholder="Address" />
     
     <label>NIC Number <sup>*</sup></label> 
     <input {...register("firstName", { required: true })} placeholder="NIC Number" />
     
     <label> Moblie Number <sup>*</sup></label> 
     <input {...register("firstName", { required: true })} placeholder="Moblie Number" />
     
    
      <select className="select">
        <option value="">Select...</option>
        <option value="Donor">Donor</option>
        <option value="Recipient">Recipient</option>
      </select>
      
      <div className="radio_btn">
      <p>Male</p>
      <input {...register("radio")} type="radio" value="B" />
      <p>Female</p>
      <input {...register("radio")} type="radio" value="C" />
      </div>
     
      <button>submit</button>
    </form>

    </div>

    <Footer />

  </>
  );
}