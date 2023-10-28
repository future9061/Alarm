import { Outlet } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';


function App() {
  //가져와야 하는 데이터는 알람 시간, 그리고 스톱워치 데이터
  //로컬에 저장하는 것보다 reduce에 저장하는게 여러모로 이득일듯

  return (
    <div className="App">
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
