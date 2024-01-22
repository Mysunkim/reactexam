import logo from './logo.svg';
import {useState} from 'react';
import Page from './components/Page';
import './App.css';

function App() {
  //전역변수 isDark
  const [isDark,setIsDark] = useState(false);
  return (
    <> 
      <Page isDark={isDark} setIsDark={setIsDark}/>
    </>
  );
}

export default App;
