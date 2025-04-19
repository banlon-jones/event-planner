import {Event} from "../../components/event/event.jsx";
import {Navbar} from "../../components/navbar/navbar.jsx";
import {useEffect, useState} from "react";
import {Dialog} from "primereact/dialog";
import {CreateAndEditEvent} from "../../components/createAndEditEvent/createAndEditEvent.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getMyEvent} from "../../services/eventService.js";
import {fetchMyEvents} from "../../store/event/eventSlice.js";

const Dashboard = () => {
  const {events} = useSelector(state => state.event);
  const [visible, setVisible] = useState(false);
  const hideModal = (value) => setVisible(value);
  const dispatch = useDispatch()
  useEffect(
    () => {
      const events = getMyEvent();
      dispatch(fetchMyEvents(events))
    },
    [dispatch]
  )
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen bg-gray-50 p-6 font-sans">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">My Events</h1>
          <button onClick={() => setVisible(true)} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            + Create Event
          </button>
        </div>

        {/* Event Cards */}
        {events && <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Event key={event.id} event={event} showEdit={true} showDelete={true} />
          ))}
        </div>
        }
        {
          events.length === 0 && <p className="text-center">No events found</p>
        }
      </div>

      <Dialog header="Event" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
        <CreateAndEditEvent onHide={hideModal}/>
      </Dialog>
    </>
  )
}

export default Dashboard;
