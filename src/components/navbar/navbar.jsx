import {CiUser} from "react-icons/ci";
import {useSelector} from "react-redux";

export const Navbar = () => {
  const {user} = useSelector((state) => state.user)
  return (
    <>
      <div className="w-full mb-4 p-4 bg-gray-50 shadow-lg">
        <div className="flex items-center gap-2 justify-end">
          <CiUser />
          <span>{user?.user?.email}</span>
          <button className="text-black px-2 py-2 rounded-md hover:bg-blue-700 border border-black">
            Logout
          </button>
        </div>
      </div>
    </>
  )
}
