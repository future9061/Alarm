import { Outlet } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import { useEffect, useState } from 'react';
import axios from "axios"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';


//react-query에서 refetchInterval으로 주기적으로 1초마다 서버에서 timestamp 가져옴
//조회한 시간 state에 저장
//state를 의존성 배열로 하는 useMemo 사용
//usememo내에서 mutate 사용



function App() {
  const [watch, setWatch] = useState()

  const { data } = useQuery({
    queryKey: 'currentTime',
    queryFn: () => axios.get("/api/time")
      .then((res) => res.data.success && setWatch(res.data.time))
      .catch((err) => console.log(err)),
    refetchInterval: 1000,
    staletime: 1000, //갱신시간지연시켜서 네트워크 요청 줄이기 기본값 0
    cachetime: 1000
  })


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
