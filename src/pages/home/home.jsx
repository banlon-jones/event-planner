import {Event} from "../../components/event/event.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";

const Home = () => {
  const [events, setEvents] = useState( JSON.parse(localStorage.getItem('events')) || []);
  const fetchEvents = () => {
     setEvents(JSON.parse(localStorage.getItem('events')));
  }
  return (
    <>
      <div>
        <section className="py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Amazing Events Near You</h1>
          <p className="text-gray-600 mb-6">Find and book tickets for the best events happening in your city.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-2xl mx-auto">
            <input type="text" placeholder="Search events..."
                   className="w-full md:w-1/2 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <button
              className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-700 flex items-center justify-center">
              Search
            </button>
          </div>
        </section>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-5">
        {events && <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Event key={event.id} event={event} showBooking={true} showEdit={false} showDelete={false} fetchEvent={fetchEvents} />
          ))}
        </div>
        }
        {
          events.length === 0 && <p className="text-center">No events found</p>
        }
      </section>

      <section className="bg-blue-500 text-white py-14 mt-10">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Create Your Own Event</h2>
          <p className="text-sm text-gray-300">Want to host an event? We make it easy to create, manage and promote your
            events.</p>
          <button
            className="bg-white text-black px-6 py-2 rounded font-medium hover:bg-gray-200">
            <Link to="/get-started">Get Started</Link>
          </button>
        </div>
      </section>
    </>
  )
}

export default Home
