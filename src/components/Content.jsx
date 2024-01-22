import React, { useContext } from 'react';
import {ThemeContext} from '../Context/ThemeContext';
import {UserContext} from '../Context/UserContext';
// const Content = ({isDark}) =>{
    //isDark는 app.js에서 props로 전달받음
const Content = () => {
    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);
    return(
        <>
            <div className='div'
            style={{
            background:isDark? 'black':'lightgray', 
            color: isDark? 'white':'black'}}>
                <p>{user}님!좋은하루되세요</p>
            
            </div>
        </>
    )
}

export default Content;