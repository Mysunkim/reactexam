import React from 'react';


const Footer = ({isDark,setIsDark}) =>{
    //app.js에서 isDark,setIsDark를 props로 전달받음
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