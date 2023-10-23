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
    title: "타이머",
    icon: <IoIosTimer />,
    path: "/timer"
  }
]

export default MenuData