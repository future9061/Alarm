# 🎇목차

1. [💻 프로젝트 소개](#-프로젝트-소개)
2. [📁 directory 구조](#-directory-구조)
3. [⏲ 개발 기간](#-개발-기간)
4. [❗ 개발 환경](#-개발-환경)
5. [📌 주요 기능](#-주요-기능)
6. [🧾 code review](#-code-review)
   - [Current time](#current-time)
   - [Alarm](#alarm)
   - [StopWatch](#stopwatch)

<br>

## 💻 프로젝트 소개

#### 알람

<img src="https://github.com/future9061/Alarm/assets/132829711/ab8430c1-0c16-4740-924f-f246705e68c2" alt="알람" width="70%">

#### 스톱워치

<img src="https://github.com/future9061/Alarm/assets/132829711/4a11106a-0f9b-4901-abe3-f837dcaa94ee" alt="스톱워치" width="70%">

#### 현재시간

<img src="https://github.com/future9061/Alarm/assets/132829711/af94563e-1574-4e90-9d80-92332815c191" alt="현재시각" width="70%">

<br />

### 따릉따릉⏰

- `URL` : http://ec2-13-209-5-25.ap-northeast-2.compute.amazonaws.com:5000

- 알람 웹 서비스로 최근 시간 관리에 신경을 쓰게 되면서 만들어 본 웹 서비스 입니다.🤔

- 1초마다 시간이 흐르는 실시간 데이터 통신을 리액트 쿼리 라이브러리를 사용해 구현하였습니다.

- 단순한 시간 데이터만 주고받기 때문에 LocalStorage에 데이터를 보관하였습니다.

- 실제 알람 웹 서비스를 참고하여 현재 시간, 알람, 스톱워치 세 개의 주요 기능을 제공합니다.

<br >

## 📁 directory 구조

### client

```javascript
📦client
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂components // 기능별로 모듈화
 ┃ ┃ ┣ 📂Alarm
 ┃ ┃ ┣ 📂CurrentTime
 ┃ ┃ ┣ 📂Menu
 ┃ ┃ ┣ 📂StopWatch
 ┃ ┣ 📂style
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.js
 ┃ ┣ 📜index.css
 ┃ ┣ 📜index.js
 ┃ ┗ 📜setupProxy.js
 ┗ 📜package.json

```

### server

```javascript

📦server
 ┣ 📂router
 ┃ ┗ 📜get.js
 ┣ 📜index.js
 ┗ 📜package.json

```

<br />

## ⏲ 개발 기간

- 2023.10.20 ~ 2023.11.14

<br>

## ❗ 개발 환경

- **Editor** : `vs code 1.77`
- **client** : `react(18.2.0)` `react-router-dom(6.17.0)` `sass(1.69.4)` `http-proxy-middleware(2.0.6)`
- **server** : `express(4.18.2)` `nodemon(3.0.1)` `path(0.12.7)`
- **cloud computing service** : `AWS(EC2)`

<br>

## 📌 주요 기능

#### 현재 시간

- 클라이언트는 useQuery의 `refetchInterval`옵션을 이용해 서버에 get 메서드를 `1000ms 마다 주기적으로 요청`한다.
- 요청을 받은 서버는 서버는 `Date 인스턴스를 생성`해 현재 시간을 반환해 클라이언트에게 응답한다.
- 브라우저에 포커스를 잃으면 리액트 쿼리는 `스스로 통신을 잠시 중단`한다.

#### 알람

- 사용자가 설정한 알람 시간이 되면 `useQuery의 enabled가 true가 되어 서버에 통신을 요청하는 방식`이다.
- 사용자가 선택한 시간을 `로컬스토리지`에 배열 형태로 저장한다.
- Alarm 컴포넌트가 렌더링 되면 로컬스토리지의 데이터(타임스탬프)를 가져온다.
- 배열에 `map`으로 함수로 `(현재 시간(타임스탬프)) - (각 요소의 알람 시간(타임스탬프))` 차이를 구해 setTimeout의 두 번째 인자로 전달한다.
- setTimeout의 콜백 함수가 시행되면 `enabled` 상태 관리 `state`가 true가 되어 `서버에 요청`을 보낸다.
- 요청을 받은 서버는 알람 시간과 현재 시간이 일치하면 성공 응답을 보낸다.

#### 스톱워치

- `setInterval`로 100ms 마다 `millisecond가 1씩 증가`하는 방식
- `start 버튼` 클릭 시 setInterval로 millisecond state를 1씩 증가시킨다.
- `Lab 버튼` 클릭 시 시간을 `배열 형태로 로컬 스토리지에 저장`한다.
- `Reset 버튼`을 클릭 시 로컬스토리지의 데이터를 `빈 배열`로 넣는다.
- StopwatchList는 로컬스토리지에 저장된 데이터를 가져와 `데이터바인딩`하는데, `split`은 `1번 요소와 2번 요소의 차이 값`이다.

<br >

## 🧾 code review

### current time

- useQuery로 `CurrentTime` 컴포넌트 랜더링 될 시 통신을 시작한다,

```javascript
//queryfunction

const fetchTime = async () => {
  return await axios
    .get("/api/time/current")
    .then((res) => {
      if (res.data.success) {
        return res.data.time;
      }
    })
    .catch((err) => console.log(err));
};
```

- refetchInterval로 `500ms마다 주기적으로 통신을 시행`한다. <br />
  (1000ms로 통신 시 초가 바뀌는 타이밍이 좋지 않았다.)
- `staletime`과 `cachetime`을 1000ms로 설정해 데이터가 1000ms간 머무르게 하였다.

```javascript
const { data } = useQuery({
  queryKey: ["currentTime"],
  queryFn: () => fetchTime(),
  refetchInterval: 500,
  staletime: 1000,
  cachetime: 1000,
});
```

### Alarm

- 사용자가 설정한 알람 시간 값을 가져와 예외 처리 후 로컬스토리지에 배열 형태로 저장한다.
  - 빈 값 여부
  - 이미 지나버린 시간의 경우
  - 이미 설정된 알람 시간인 경우

```javascript
//Buttons 컴포넌트

const handleSubmit = (e) => {
  e.preventDefault();

  // 오전 오후를 구분
  if (digit === "pm" && hours !== 12) {
    hours += 12;
  } else if (digit === "am" && hours === 12) {
    hours = 24;
  }

  //input의 값이 빈 경우 예외처리
  if ((!hours && hours !== 0) || (!minutes && minutes !== 0)) {
    alert("시간을 선택해주세요");
    return;
  }

  const now = new Date().getTime() + 9 * 60 * 60 * 1000; //utf 한국 시간은 +9시간

  const date = new Date();
  date.getTime();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(0);
  const timestamp = date.getTime() + 9 * 60 * 60 * 1000;

  //알람 시간보다 현재 시간 타임스탬프 값이 더 크다면 이미 지나버린 시간으로 예외처리
  if (timestamp < now) {
    alert("이미 지난 시간입니다");
    window.location.reload();
    return;
  }

  const data = JSON.parse(alarm);

  //로컬스토리지에 저장된 알람 시간에서 some 메서드로 일치하는 요소가 있는지 확인
  //일치하는 요소가 있다면 이미 설정한 알람 시간이므로 예외처리
  const overlapping = data.some((a, _) => {
    const localTime = new Date(a);
    const userTime = new Date(timestamp);

    if (
      localTime.getHours(date) === userTime.getHours(userTime) &&
      localTime.getMinutes(date) === userTime.getMinutes(userTime)
    ) {
      return true;
    } else {
      return false;
    }
  });

  if (overlapping) {
    alert("이미 설정한 시간입니다.");
    window.location.reload();
    return;
  }

  //로컬스토리지에 저장
  data.push(timestamp);

  window.localStorage.setItem("alarm", JSON.stringify(data));
  alert("알람이 설정되었습니다!");
  window.location.reload();
};
```

- Alarm 컴포넌트가 랜더링 되면 로컬스토리지에 저장된 알람 시간(배열)을 가져온다.
- `현재 시간과 알람 시간의 차이`를 구하고 setTimeout에 두 번째 인자로 전달한다.
- setTimeout의 콜백 함수는 useQuery의 `enabled를 true로 변경`하여 통신을 시행한다.
- 알람 시간(배열)에 `map 함수 내부에서 setTimeout함수를 실행`하므로 알람 배열의 `length가 0이 될 때까지 반복`한다.

```javascript
//Alarm 컴포넌트

//데이터 배열의 length가 0이 될때까지 반복
useEffect(() => {
  const timing = [];
  localData.map((a) => {
    const date = new Date();
    const now = date.getTime() + 9 * 60 * 60 * 1000;

    timing.push(a - now);
    timing.sort((a, b) => a - b); //시간값 정렬

    if (localData.length !== 0) {
      setTimeout(() => {
        setSynch(true); //enabled의 boolean을 관리하는 useState
        timing.shift(); //통신하면 데이터의 맨 앞의 요소는 삭제한다.
      }, Number(timing[0]));
    }
  });
}, []);

const fetchAlarm = async () => {
  const data = localData[0];
  return await axios
    .get("/api/time/alarm/modal", { params: { data } }) //알람 시간을 query형태로 서버에 전달
    .then((res) => {
      if (res.data.success) {
        setSynch(false);
        setModaltogg(true);
        const updateLocal = localData.slice(1, localData.length); //시행한 알람을 제외하기 위해 맨 앞의 요소를 뺀 나머지 요소들만 새로 배열로 만들어 로컬스토리지에 저장한다.
        localStorage.setItem("alarm", JSON.stringify(updateLocal));
        return res.data;
      }
    })
    .catch((err) => console.log(err));
};

const { data } = useQuery({
  queryKey: ["alarmKey"],
  queryFn: () => fetchAlarm(),
  enabled: synch, //enabled가 true면 통신 시행. 초기값은 false로 설정했다.
});
```

- 서버는 `알람 시간과 현재 시간을 비교`하여 `true`일 때 `success:true`와 알람 시간을 클라이언트에 응답한다.

```javascript
//server

router.get("/alarm/modal", (req, res) => {
  const clientDate = new Date();
  clientDate.getTime(Number(req.query.data));

  //타임스탬프로 비교할 시 ms단위까지 비교되기 때문에 시간과 분만 가져와 비교한다.
  const reqTime = {
    hours: ("0" + clientDate.getHours()).slice(-2),
    minute: ("0" + clientDate.getMinutes()).slice(-2),
  };
  const serverDate = new Date();
  serverDate.getTime() + 9 * 60 * 60 * 1000;

  const resTime = {
    timestamp: serverDate.getTime() + 9 * 60 * 60 * 1000,
    hours: ("0" + serverDate.getHours()).slice(-2),
    minute: ("0" + serverDate.getMinutes()).slice(-2),
  };

  if (resTime.hours === reqTime.hours && resTime.minute === reqTime.minute) {
    res.status(200).send({ success: true, alarm: resTime });
  } else {
    res.status(400).send({ success: false });
  }
});
```

### StopWatch

- start 버튼 클릭시 `setInterval`` 시행한다.

```javascript
//start component

useEffect(() => {
  let interval;

  if (toggle) {
    interval = setInterval(() => {
      setMilliSecond((pre) => pre + 1); //milliSecond를 100ms마다 1씩 증가시킨다.
    }, 100);
  }
  return () => clearInterval(interval); //버튼의 토글이 false가 되면 중단한다.
}, [toggle]); //버튼 state를 의존성 배열로 전달해 버튼이 랜더링 되거나 state가 바뀔 시 시행된다.

return (
  <button
    onClick={(e) => {
      e.preventDefault();
      setToggle(true);
    }}
  >
    Start
  </button>
);
```

- Lab 버튼 클릭 시 시간을 로컬스토리지에 저장한다.

```javascript
//Lab 컴포넌트

const copy = JSON.parse(localData); //로컬 스토리지 데이터를 string -> object로 변환

const handleLab = (e) => {
  e.preventDefault();
  setToggle(false);

  const time = `0${minute}:0${second}.${milliSecond}`;
  copy.push(time);
  const localCopy = JSON.stringify(copy);
  localStorage.setItem("stopwatch", localCopy);
};
return <button onClick={(e) => handleLab(e)}>Lab</button>;
```

- Reset 버튼 클릭 시 로컬스토리지 데이터를 빈 배열로 수정한다.

```javascript
const handleReset = (e) => {
  e.preventDefault();
  setToggle(false); //setInterval 멈춤
  const localReset = "[]";
  localStorage.setItem("stopwatch", localReset);
  window.location.reload();
};

return (
  <button id="Reset" onClick={(e) => handleReset(e)}>
    Reset
  </button>
);
```

- stopwatchList에서 데이터 바인딩

  - split은 이전 스톱워치 시간과 현재 스톱워치 시간의 차이 값이다.
  - 때문에 스톱워치 시간이 저장된 배열의 요소들끼리의 차이값을 구해 split 배열에 저장해야 한다.

  ① 로컬 스토리지에 저장된 시간값을 ms로 변환하여 array 배열에 저장한다

```javascript
//StopwatchList 컴포넌트

const array = [];

//copy는 로컬 스토리지 데이터를 카피한 배열이다.
copy.map((a, i) => {
  const millisecond = copy[i].slice(-1);
  const second = a.slice(-4, -2);
  const minute = a.slice(-8, -6);

  //const num = 분을 ms로 변환 + 초를 ms로 변환
  const num =
    copy[i].slice(0, 2) * 60 * 1000 +
    copy[i].replace(/[:]/g, "").slice(-4) * 1000;

  array.push(num);
});
```

② array 요소들의 `(이후 값) - (이전 값)` 을 구하고 split useState에 저장한다.

```javascript
const [split, setSplit] = useState([]);

useEffect(() => {
  array.map((_, i) => {
    const num2 = parseFloat((array[i + 1] - array[i]) / 1000); //차이 값을 구한 후 다시 초로 변환

    if (!isNaN(num2)) {
      //NaN 가 아닐 때에만 split 배열에 push 한다.
      setSplit((prevSplit) => [...prevSplit, Number(num2.toFixed(1))]);
    }
  });
}, [localData, toggle]);
```

③ 해당 split의 `초기값`은 항상 스톱워치 `데이터 배열의 첫 번째 값`이다.

```javascript
useEffect(() => {
  if (copy.length > 0) {
    const first = copy[0].slice(-3);
    setSplit([Number(first)]); //
  }
}, [toggle]);
```
