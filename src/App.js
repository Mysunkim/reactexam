import logo from './logo.svg';
import react,{useState} from 'react';
import './App.css';

function App() {
  const [list, setList] = useState(['남자코트추천','강남우동맛집','여자코트추천']);
  const [good,setGood] = useState(0);
  const newList = [...list];

  function goodfn(){
    // setGood 함수를 호출하여 good 값을 업데이트해야 합니다
    setGood(good+1);
  }

  //숙제:버튼을 누르면 첫글이 여자코트추천으로 바뀌는 기능만들기
  function listchange(){
  // 새로운 배열을 생성하여 상태를 업데이트합니다.
  let listcopy = [...list];
  listcopy[0] = '여자코트추천';
    setList(listcopy);
  }
  return (
    <>
      <div className='blog-header'>
        <h4 style={{color:'white' , fontSize:'16px'}}>내 블로그임</h4>
      </div>
      <div className='blog-list'>
        <h4>{list[0]} <span onClick={goodfn}>💕</span> {good} </h4>
        <button onClick={listchange}>제목바꾸기</button>

        <p>2월 17일 발행</p>
      </div>
      <div className='blog-list'>
        <h4>{list[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='blog-list'>
        <h4>{list[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

    </>
  );
}

export default App;
