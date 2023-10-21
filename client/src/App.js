import { Outlet } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';


//react-query에서 refetchInterval으로 주기적으로 1초마다 서버에서 timestamp 가져옴
//조회한 시간 state에 저장
//state를 의존성 배열로 하는 useMemo 사용
//usememo내에서 mutate 사용


function App() {
  // const postTime = () => {
  //   return axios.post("/api/time", { timeData })
  //     .then((res) => { res.data.success && console.log("통신 성공") })
  //     .catch((err) => console.log(err))
  // }

  // const { mutate } = useMutation({ mutationFn: postTime })

  // useEffect(() => {
  //   mutate(postTime)
  //   return () => { }
  // }, [])

  return (
    <div className="App">
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
