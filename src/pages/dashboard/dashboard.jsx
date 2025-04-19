import {MdOutlineCalendarMonth} from "react-icons/md";
import {IoTimeOutline} from "react-icons/io5";
import {Event} from "../../components/event/event.jsx";
import {Navbar} from "../../components/navbar/navbar.jsx";
import {useState} from "react";
import {Dialog} from "primereact/dialog";
import {CreateAndEditEvent} from "../../components/createAndEditEvent/createAndEditEvent.jsx";

const Dashboard = () => {
  const events = [
    {
      id: 1,
      title: 'Tech Conference 2025',
      description: 'Annual technology conference featuring industry experts and networking opportunities.',
      date: 'Mar 15, 2025',
      time: '9:00 AM',
      status: 'Upcoming',
      statusColor: 'bg-green-100 text-green-700',
    },
    {
      id: 2,
      title: 'Design Workshop',
      description: 'Hands-on workshop covering the latest design trends and tools.',
      date: 'Mar 20, 2025',
      time: '2:00 PM',
      status: 'Ongoing',
      statusColor: 'bg-blue-100 text-blue-700',
    },
    {
      id: 3,
      title: 'Marketing Webinar',
      description: 'Digital marketing strategies for growing your business online.',
      date: 'Mar 10, 2025',
      time: '11:00 AM',
      status: 'Past',
      statusColor: 'bg-gray-100 text-gray-700',
    },
  ];
  const [visible, setVisible] = useState(false);


  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen bg-gray-50 p-6 font-sans">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Events</h1>
          <button onClick={() => setVisible(true)} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            + Create Event
          </button>
        </div>

        {/* Event Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Event key={event.id} event={event} />
          ))}
        </div>
      </div>

      <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
        <CreateAndEditEvent />
      </Dialog>
    </>
  )
}

export default Dashboard;
