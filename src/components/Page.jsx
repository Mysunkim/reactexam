import React, { useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { ThemeContext } from '../Context/ThemeContext';
import { UserContext } from '../Context/UserContext';


const Page = () =>{
    const data = useContext(ThemeContext);
    const user = useContext(UserContext);
    return(
        <div className='page'>
            <Header/>
            <Content />
            <Footer/>

        </div>

    )
}

export default Page;