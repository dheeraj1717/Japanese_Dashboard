import { faSearch, faArrowUpRightFromSquare , faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactComponent as SqSVG } from './square-regular.svg';

function Chart() {
  return (
    <div className="bg-[#b6ffef] p-10">
        <div className="flex justify-between">
        
            <div className="flex justify-between bg-white rounded-md pl-3 pr-8 pt-2 pb-2 w-1/3">
                <p className="text-[14px] mr-8 text-[#717070] font-medium">Lorem ipsum dolor sit.</p>
                <FontAwesomeIcon className="text-[15px] font-semibold  mt-1"
            icon={faSearch}
          />
           </div>
 
        <div className="flex gap-5">
        <div className="flex justify-between bg-white rounded-md pl-3 pr-3 pt-2 pb-2 ">
                <p className="text-[14px] mr-8">Lorem ipsum dolor sit.</p>
                <FontAwesomeIcon className="text-[15px] mt-1"
            icon={faArrowUp}
          />
           </div>
        
        
            <div className="flex justify-between bg-white rounded-md pl-3 pr-3 pt-2 pb-2 ">
                <p className="text-[14px] mr-8">Lorem ipsum dolor sit.</p>
                <FontAwesomeIcon className="text-[15px] mt-1"
            icon={faArrowDown}
          />
           </div>
      
       
            <div className="flex justify-between bg-white rounded-md pl-3 pr-3 pt-2 pb-2 ">
                <p className="text-[14px] mr-8">Lorem ipsum dolor sit.</p>
                <FontAwesomeIcon className="text-[15px] mt-1"
            icon={faArrowUp}
          />
           </div>
       
        
            <div className="flex justify-between bg-white rounded-md pl-3 pr-3 pt-2 pb-2 ">
                <p className="text-[14px] mr-8">Lorem ipsum dolor sit.</p>
                <FontAwesomeIcon className="text-[15px] mt-1"
            icon={faArrowUp}
          />
           </div>
           </div>
        </div>

        <div class="border border-black mt-10">
        <table className="w-full">
  <thead>
    <tr className="border-b border-black">
      <th></th>
      <th className="py-2 pl-4">Header 2</th>
      <th className="py-2 pr-10">Header 3</th>
      <th className="py-2 ">Header 4</th>
      <th className="py-2 ">Header 5</th>
      <th className="py-2 ">Header 6</th>
      <th className="py-2 px-4 pl-24 text-end"></th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-black">
      <td className="py-2 px-2"><SqSVG className="w-5" /></td>
      <td className="py-2 px-2 text-center">Data 2</td>
      <td className="py-2 pr-16  text-center">Data 3</td>
      <td className="py-2 pr-6 text-center">Data 4</td>
      <td className="py-2 pr-6 text-center">Data 5</td>
      <td className="py-2 pr-6 text-center">Data 6</td>
      <td className="py-2 px-4 text-end">
        <FontAwesomeIcon className="text-[15px] mt-1" icon={faArrowUpRightFromSquare} />
      </td>
    </tr>
    <tr className="border-b border-black">
      <td className="py-2 px-2"><SqSVG className="w-5" /></td>
      <td className="py-2 px-2 text-center">Data 2</td>
      <td className="py-2 pr-16  text-center">Data 3</td>
      <td className="py-2 pr-6 text-center">Data 4</td>
      <td className="py-2 pr-6 text-center">Data 5</td>
      <td className="py-2 pr-6 text-center">Data 6</td>
      <td className="py-2 px-4 text-end">
        <FontAwesomeIcon className="text-[15px] mt-1" icon={faArrowUpRightFromSquare} />
      </td>
    </tr>
    <tr className="border-b border-black">
      <td className="py-2 px-2"><SqSVG className="w-5" /></td>
      <td className="py-2 px-2 text-center">Data 2</td>
      <td className="py-2 pr-16  text-center">Data 3</td>
      <td className="py-2 pr-6 text-center">Data 4</td>
      <td className="py-2 pr-6 text-center">Data 5</td>
      <td className="py-2 pr-6 text-center">Data 6</td>
      <td className="py-2 px-4 text-end">
        <FontAwesomeIcon className="text-[15px] mt-1" icon={faArrowUpRightFromSquare} />
      </td>
    </tr>

    <tr className="border-b border-black">
      <td className="py-2 px-2"><SqSVG className="w-5" /></td>
      <td className="py-2 px-2 text-center">Data 2</td>
      <td className="py-2 pr-16  text-center">Data 3</td>
      <td className="py-2 pr-6 text-center">Data 4</td>
      <td className="py-2 pr-6 text-center">Data 5</td>
      <td className="py-2 pr-6 text-center">Data 6</td>
      <td className="py-2 px-4 text-end">
        <FontAwesomeIcon className="text-[15px] mt-1" icon={faArrowUpRightFromSquare} />
      </td>
    </tr>
    <tr className="border-b border-black">
      <td className="py-2 px-2"><SqSVG className="w-5" /></td>
      <td className="py-2 px-2 text-center">Data 2</td>
      <td className="py-2 pr-16  text-center">Data 3</td>
      <td className="py-2 pr-6 text-center">Data 4</td>
      <td className="py-2 pr-6 text-center">Data 5</td>
      <td className="py-2 pr-6 text-center">Data 6</td>
      <td className="py-2 px-4 text-end">
        <FontAwesomeIcon className="text-[15px] mt-1" icon={faArrowUpRightFromSquare} />
      </td>
    </tr>
    <tr className="border-b border-black">
      <td className="py-2 px-2"><SqSVG className="w-5" /></td>
      <td className="py-2 px-2 text-center">Data 2</td>
      <td className="py-2 pr-16  text-center">Data 3</td>
      <td className="py-2 pr-6 text-center">Data 4</td>
      <td className="py-2 pr-6 text-center">Data 5</td>
      <td className="py-2 pr-6 text-center">Data 6</td>
      <td className="py-2 px-4 text-end">
        <FontAwesomeIcon className="text-[15px] mt-1" icon={faArrowUpRightFromSquare} />
      </td>
    </tr>
    <tr className="border-b border-black">
      <td className="py-2 px-2"><SqSVG className="w-5" /></td>
      <td className="py-2 px-2 text-center">Data 2</td>
      <td className="py-2 pr-16  text-center">Data 3</td>
      <td className="py-2 pr-6 text-center">Data 4</td>
      <td className="py-2 pr-6 text-center">Data 5</td>
      <td className="py-2 pr-6 text-center">Data 6</td>
      <td className="py-2 px-4 text-end">
        <FontAwesomeIcon className="text-[15px] mt-1" icon={faArrowUpRightFromSquare} />
      </td>
    </tr>
    <tr className="border-b border-black">
      <td className="py-2 px-2"><SqSVG className="w-5" /></td>
      <td className="py-2 px-2 text-center">Data 2</td>
      <td className="py-2 pr-16  text-center">Data 3</td>
      <td className="py-2 pr-6 text-center">Data 4</td>
      <td className="py-2 pr-6 text-center">Data 5</td>
      <td className="py-2 pr-6 text-center">Data 6</td>
      <td className="py-2 px-4 text-end">
        <FontAwesomeIcon className="text-[15px] mt-1" icon={faArrowUpRightFromSquare} />
      </td>
    </tr>
    <tr className="border-b border-black">
      <td className="py-2 px-2"><SqSVG className="w-5" /></td>
      <td className="py-2 px-2 text-center">Data 2</td>
      <td className="py-2 pr-16  text-center">Data 3</td>
      <td className="py-2 pr-6 text-center">Data 4</td>
      <td className="py-2 pr-6 text-center">Data 5</td>
      <td className="py-2 pr-6 text-center">Data 6</td>
      <td className="py-2 px-4 text-end">
        <FontAwesomeIcon className="text-[15px] mt-1" icon={faArrowUpRightFromSquare} />
      </td>
    </tr>
    
  </tbody>
</table>

</div>


        </div>
   
  )
}

export default Chart
