import {CiCalendarDate, CiMapPin} from "react-icons/ci";
import {BiSolidEdit} from "react-icons/bi";
import {BsTrash} from "react-icons/bs";
import {HiOutlineUserGroup} from "react-icons/hi";
import {useDispatch, useSelector} from "react-redux";
import {addParticipant, deleteEvent} from "../../services/eventService.js";
import {removeEvent} from "../../store/event/eventSlice.js";
import {Dialog} from "primereact/dialog";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {CreateAndEditEvent} from "../createAndEditEvent/createAndEditEvent.jsx";

export const Event = ({event, showBooking, showEdit, showDelete, fetchEvent}) => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const {user} = useSelector((state) => state.user);
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
  const closeEditDialog = () => {
    setShowEditDialog(false);
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
                {showEdit && <button onClick={() => setShowEditDialog(true)} className="hover:cursor-pointer"> <BiSolidEdit /> </button>}
                {showDelete &&<button onClick={trashEvent} className="px-4 py-1 hover:cursor-pointer"><BsTrash /></button> }
              </div>
            </div>
            <div className="hover:cursor-pointer" onClick={() => setShowDetails(!showDetails)}>
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-600 h-10 overflow-ellipsis overflow-hidden">{event.description}</p>
            </div>
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
      <Dialog header={event.title} visible={showDetails} style={{ width: '80vw' }} onHide={() => {if (!showDetails) return; setShowDetails(false); }}>
        <div>
          {event.description}
        </div>
        <div className="grid md:grid-cols-1 sm:grid-cols-1 gap-4 mt-4">
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <CiCalendarDate />
              {event.date}
            </div>
            <div className="flex items-center gap-2">
              <CiCalendarDate />
              {event.time}
            </div>
            <div className="flex items-center gap-2">
              <CiMapPin />
              {event.location}
            </div>
          </div>
          { event.uid === user?.uid && <div>
            <h3 className="font-semibold mb-4">Participants {event.capacity} / {event.participants.length}</h3>
            <div>
              {event.participants.length > 0 && event.participants.map((participant) => <div>{participant}</div>)}
            </div>
          </div>}
        </div>
      </Dialog>
      <Dialog header={`Edit ${event.title}`} visible={showEditDialog} style={{ width: '50vw' }} onHide={() => {if (!showEdit) return; setShowEditDialog(false); }}>
        <CreateAndEditEvent selectedEvent={event} onHide={closeEditDialog}/>
      </Dialog>
    </>
  )

}
