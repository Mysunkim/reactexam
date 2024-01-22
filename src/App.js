import logo from './logo.svg';
import {useState} from 'react';
import Page from './components/Page';
import { ThemeContext } from './Context/ThemeContext';
import { UserContext } from './Context/UserContext';
import './App.css';

function App() {
  //전역변수 isDark
  const [isDark,setIsDark] = useState(false);
  return (
    <> 
    <UserContext.Provider value={'사용자'}>
      <ThemeContext.Provider value={{isDark,setIsDark}}>
      {/*Provider로 프로젝트내에 value를 전부 뿌림(단계적으로뿌리는것아님*/}
      {/* <Page isDark={isDark} setIsDark={setIsDark}/> */}
        <Page/>
      </ThemeContext.Provider>
    </UserContext.Provider>

      
    </>
  );
}

export default App;
