import { AiOutlineClockCircle } from "react-icons/ai";
import { ImAlarm } from "react-icons/im";

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
  }
]

export default MenuData