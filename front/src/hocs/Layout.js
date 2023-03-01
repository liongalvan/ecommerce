import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Navbar } from '../components/navigations/Navbar'
import { Footer } from '../components/navigations/Footer'

const Layaut = (props) =>{ 
    return(
        <div>
            <Navbar/>
            <ToastContainer autoClose={5000}/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layaut