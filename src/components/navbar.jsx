import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHouse,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
   <div className="navbar p-2 text-[#1AA260] align-middle">
     <span className="ml-8 mr-10 text-[25px] font-semibold text-white bg-[#1AA260] pr-1 pl-1 ">Admin</span>
    <FontAwesomeIcon className="mr-3"
            icon={faHouse}
            style={{ color: "#1AA260", fontSize:"20px"}}
          />
          
           <FontAwesomeIcon
            icon={faChevronRight}
            style={{ color: "#1AA260" , fontSize:"16px"}}
          />
          <span className="ml-2 mr-2 ">one</span>
           <FontAwesomeIcon
            icon={faChevronRight}
            style={{ color: "#1AA260" , fontSize:"16px"}}
          />
           <span className="ml-2 ">one</span>
    </div>
   
  )
}

export default Navbar