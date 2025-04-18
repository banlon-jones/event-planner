import {CiCalendarDate} from "react-icons/ci";
import {BiSolidEdit} from "react-icons/bi";
import {BsTrash} from "react-icons/bs";
import {HiOutlineUserGroup} from "react-icons/hi";

export const Event = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <div className="bg-white rounded-xl shadow-lg">
        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 flex items-center gap-3">
              <CiCalendarDate/>
              Mar 15, 2025
            </p>
            <div className="flex items-center gap-4">
              <BiSolidEdit />
              <BsTrash />
            </div>
          </div>
          <h3 className="font-semibold">Music Festival 2025</h3>
          <p className="text-sm text-gray-600">Join us for an unforgettable night of music and entertainment.</p>
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-2">
              <HiOutlineUserGroup />
              <span>10</span><span>/</span><span>6</span>
            </div>
            <button className="bg-blue-500 text-white text-sm px-4 py-1.5 rounded hover:bg-blue-700">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )

}
