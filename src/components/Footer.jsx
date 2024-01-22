import React , { useContext }from 'react';
import {ThemeContext} from '../Context/ThemeContext';

// const Footer = ({isDark,setIsDark}) =>{
//     //app.js에서 isDark,setIsDark를 props로 전달받음
const Footer = () =>{
    const {isDark,setIsDark} = useContext(ThemeContext);
    
    const toggleTheme = () =>{
        setIsDark(!isDark);
    };
    return(
        <>
            <footer className='footer'
            style={{
            background:isDark? 'black':'lightgray', 
           }}>
            <button className='button' onClick={toggleTheme}>
                DarkMode
            </button>
            
            </footer>
        </>
    )
}

export default Footer;