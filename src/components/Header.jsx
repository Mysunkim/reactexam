import React, { useContext } from 'react';
import {ThemeContext} from '../Context/ThemeContext';
import { UserContext } from '../Context/UserContext';
// const Header = ({isDark}) =>{
//     //isDark는 app.js에서 props로 전달받음

const Header = () =>{
    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);

   
    return(
        <>
            <header className='header'
            style={{
            background:isDark? 'black':'lightgray', 
            color: isDark? 'white':'black'}}>
                <h1>Weclome to {user}!</h1>
            
            </header>
        </>
    )
}

export default Header;