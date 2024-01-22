import React from 'react';

const Header = ({isDark}) =>{
    //isDark는 app.js에서 props로 전달받음
    return(
        <>
            <header className='header'
            style={{
            background:isDark? 'black':'lightgray', 
            color: isDark? 'white':'black'}}>
                <h1>Weclome to 홍길동!</h1>
            
            </header>
        </>
    )
}

export default Header;