import React from 'react';

const Content = ({isDark}) =>{
    //isDark는 app.js에서 props로 전달받음
    return(
        <>
            <div className='div'
            style={{
            background:isDark? 'black':'lightgray', 
            color: isDark? 'white':'black'}}>
                <p>홍길동님!좋은하루되세요</p>
            
            </div>
        </>
    )
}

export default Content;