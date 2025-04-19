import {CiCalendarDate} from "react-icons/ci";
import {BiSolidEdit} from "react-icons/bi";
import {BsTrash} from "react-icons/bs";
import {HiOutlineUserGroup} from "react-icons/hi";
import {useDispatch} from "react-redux";
import {addParticipant, deleteEvent} from "../../services/eventService.js";
import {removeEvent} from "../../store/event/eventSlice.js";
import {Dialog} from "primereact/dialog";
import {useState} from "react";
import {useForm} from "react-hook-form";

export const Event = ({event, showBooking, showEdit, showDelete, fetchEvent}) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch()
  const trashEvent = () => {
    deleteEvent(event.id)
    dispatch(removeEvent(event.id));
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    fetchEvent();
    addParticipant(event.id, data.email)
    reset();
    setVisible(false);
  }
  return (
    <>
      <div className="w-full">
        <div className="bg-white rounded-xl shadow-lg">
          <div className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-gray-500 flex items-center gap-3">
                <CiCalendarDate/>
                {event.date}
              </p>
              <div className="flex items-center gap-4">
                {showEdit && <BiSolidEdit />}
                {showDelete &&<button onClick={trashEvent} className="px-4 py-1 hover:cursor-pointer"><BsTrash /></button> }
              </div>
            </div>
            <h3 className="font-semibold">{event.title}</h3>
            <p className="text-sm text-gray-600 h-10 overflow-ellipsis overflow-hidden">{event.description}</p>
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-2">
                <HiOutlineUserGroup />
                <span>{event.capacity}</span><span>/</span><span>{event.participants.length}</span>
              </div>
              {showBooking && event.capacity > event.participants.length && <button className="bg-blue-500 text-white text-sm px-4 py-1.5 rounded hover:bg-blue-700" onClick={() => setVisible(true)}>Book Now</button>}
            </div>
          </div>
        </div>
      </div>
      <Dialog header="Book Event" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter your Email"
            {...register("email", { required: true })}
          />
          <div className="flex items-center justify-center pt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white text-sm px-4 py-1.5 rounded hover:bg-blue-700"
            >Book Now</button>
          </div>
        </form>
      </Dialog>
    </>
  )

}
