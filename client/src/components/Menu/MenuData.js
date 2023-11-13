import { AiOutlineClockCircle } from "react-icons/ai";
import { ImAlarm } from "react-icons/im";
import { IoIosTimer } from "react-icons/io";
const MenuData = [
  {
    title: "현재시각",
    icon: <AiOutlineClockCircle />,
    path: "/"
  },
  {
    title: "알람",
    icon: <ImAlarm />,
    path: "/alarm"
  },
  {
    title: "스톱워치",
    icon: <IoIosTimer />,
    path: "/stopwatch"
  }
]

export default MenuData