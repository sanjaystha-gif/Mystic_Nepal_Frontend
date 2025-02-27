import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const Bookings = () => {
  // Mock data for bookings
  const bookings = [
    {
      id: 1,
      destination: 'Everest Base Camp Trek',
      date: '2025-03-15',
      duration: '14 days',
      people: 2,
      status: 'upcoming',
      price: 2400
    },
    {
      id: 2,
      destination: 'Annapurna Circuit',
      date: '2025-04-01',
      duration: '12 days',
      people: 1,
      status: 'upcoming',
      price: 1800
    },
    {
      id: 3,
      destination: 'Kathmandu Cultural Tour',
      date: '2025-01-15',
      duration: '3 days',
      people: 4,
      status: 'completed',
      price: 600
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Your Bookings</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            View and manage your travel bookings.
          </p>
        </div>

        <div className="border-t border-gray-200">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="px-4 py-6 sm:px-6 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-900">{booking.destination}</h4>
                  <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaCalendarAlt className="mr-2 text-gray-400" />
                      {booking.date} ({booking.duration})
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaUsers className="mr-2 text-gray-400" />
                      {booking.people} {booking.people === 1 ? 'person' : 'people'}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaMapMarkerAlt className="mr-2 text-gray-400" />
                      Nepal
                    </div>
                  </div>
                </div>
                <div className="ml-6 flex flex-col items-end">
                  <span className="text-lg font-medium text-gray-900">
                    ${booking.price.toLocaleString()}
                  </span>
                  <span
                    className={`mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-3">
                {booking.status === 'upcoming' && (
                  <>
                    <button className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Modify
                    </button>
                    <button className="bg-red-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                      Cancel
                    </button>
                  </>
                )}
                <button className="bg-blue-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
