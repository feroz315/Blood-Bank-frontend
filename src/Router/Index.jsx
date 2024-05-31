import { Routes, Route } from 'react-router-dom';
import SignUp from "../pages/Signup";
import Donor from '../pages/Donor';
import About from '../pages/About';
import ContactForm from '../pages/Contact';
import Services from '../pages/Services';
import SignIn from '../pages/Login';


import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from '../pages/Dashboard';



const RouterApp = () => {
    return (
        <>
           <Routes>
            
           <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
             <Route path='/' element={<Dashboard />} />
              <Route path='/donor' element={<Donor />} />
               <Route path='/about-us' element={<About />} />
                <Route path='/contact' element={<ContactForm />} />
                 <Route path='/services' element={<Services />} />
            

            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />


        </>

    )
}


export default RouterApp;