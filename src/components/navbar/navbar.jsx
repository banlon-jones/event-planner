import {CiUser} from "react-icons/ci";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fbauth} from "../../configs/firebaseConfig.js";
import {onAuthStateChanged} from "firebase/auth";
import {addUser, logOutUser} from "../../store/user/userSlice.js";
import {useNavigate} from "react-router-dom";

export const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.user)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(fbauth, (user) => {
      if (user) {
        dispatch(addUser(user));
      } else {
        console.log('error');
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const logoutUser = async () => {
    dispatch(logOutUser);
    navigate('/')
  }

  return (
    <>
      <div className="w-full mb-4 p-4 bg-gray-50 shadow-lg">
        <div className="flex items-center gap-2 justify-end">
          <CiUser />
          <span>{user?.email}</span>
          <button onClick={logoutUser} className="text-black px-2 py-2 rounded-md hover:bg-blue-700 border border-black">
            Logout
          </button>
        </div>
      </div>
    </>
  )
}
