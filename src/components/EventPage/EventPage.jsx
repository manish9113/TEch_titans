import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaUserPlus,
} from "react-icons/fa";
import Navbar from "../Navbar/Navbar";

const dummyEvents = [
  {
    id: 1,
    title: "Annual Alumni Meetup",
    date: "2024-09-30",
    location: "College Auditorium",
    description:
      "Join us for the annual alumni meetup with guest speakers, networking sessions, and more.",
    image: "https://via.placeholder.com/800x400",
  },
  {
    id: 2,
    title: "Tech Innovation Seminar",
    date: "2024-10-15",
    location: "Main Conference Hall",
    description:
      "A seminar on the latest tech innovations by renowned industry leaders and experts.",
    image: "https://via.placeholder.com/800x400",
  },
  {
    id: 3,
    title: "Alumni Sports Day",
    date: "2024-11-10",
    location: "College Sports Complex",
    description: "A fun-filled day of sports, games, and alumni bonding.",
    image: "https://via.placeholder.com/800x400",
  },
];

const EventPage = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="bg-gradient-to-b from-green-100 to-blue-200 py-10 px-4 mt-12">
        {/* Upcoming Events Carousel */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Upcoming Events
          </h1>
          <p className="text-lg text-gray-700">
            Stay updated with our latest events and alumni gatherings.
          </p>
        </header>
        {/* Swiper Carousel */}
        <section className="mb-12">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full h-80 md:h-96"
          >
            {dummyEvents.map((event) => (
              <SwiperSlide key={event.id}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center mb-2 text-gray-600">
                      <FaCalendarAlt className="mr-2 text-indigo-600" />{" "}
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center mb-4 text-gray-600">
                      <FaMapMarkerAlt className="mr-2 text-indigo-600" />{" "}
                      {event.location}
                    </div>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Event Registration Section */}

        <section className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-4xl mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Register for an Event
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Select the event you'd like to register for from the list below. We
            look forward to your participation!
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-lg p-3 w-full"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-lg p-3 w-full"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Year of Graduation"
                className="border border-gray-300 rounded-lg p-3 w-full"
                required
              />
              <input
                type="text"
                placeholder="Field of Study"
                className="border border-gray-300 rounded-lg p-3 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="event" className="block text-gray-700 mb-2">
                Select an Event
              </label>
              <select
                id="event"
                className="border border-gray-300 rounded-lg p-3 w-full"
                required
              >
                <option value="">Select an event</option>
                {dummyEvents.map((event) => (
                  <option key={event.id} value={event.id}>
                    {event.title} - {new Date(event.date).toLocaleDateString()}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              placeholder="Additional Information (optional)"
              className="border border-gray-300 rounded-lg p-3 w-full h-32"
            />
            <div className="flex items-center mb-4">
              <input type="checkbox" id="subscribe" className="mr-2" />
              <label htmlFor="subscribe" className="text-gray-600">
                Subscribe to our newsletter
              </label>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition duration-300 flex items-center"
            >
              Register <FaUserPlus className="ml-2" />
            </button>
          </form>
        </section>

        {/*past events*/}

        <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-4xl mb-12">
          <h2 className="text-4xl font-bold text-center text-indigo-800 mb-6">
            Past Events
          </h2>
          <div className="space-y-6">
            {dummyEvents.slice(1).map((event) => (
              <div key={event.id} className="border-b border-gray-300 pb-6">
                <div className="flex items-center">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-32 h-20 object-cover rounded-lg mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-indigo-700 mb-1">
                      {event.title}
                    </h3>
                    <div className="flex items-center mb-1 text-gray-600">
                      <FaCalendarAlt className="mr-2" />{" "}
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center mb-3 text-gray-600">
                      <FaMapMarkerAlt className="mr-2" /> {event.location}
                    </div>
                    <p className="text-gray-700 mb-2">{event.description}</p>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition duration-300 flex items-center">
                      Learn More <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
