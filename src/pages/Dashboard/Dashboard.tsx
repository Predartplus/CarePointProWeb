import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 - Patient 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                <p className="text-gray-600 mb-1">
                  <strong>Age:</strong> 45
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Condition:</strong> Hypertension
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Last Visit:</strong> 12th Sept 2024
                </p>
                <span className="text-green-500 font-bold">
                  Next Appointment: 20th Sept 2024
                </span>
              </div>
              <div className="mt-4 flex justify-between">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                  Approve
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  Reject
                </button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                <p className="text-gray-600 mb-1">
                  <strong>Age:</strong> 45
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Condition:</strong> Hypertension
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Last Visit:</strong> 12th Sept 2024
                </p>
                <span className="text-green-500 font-bold">
                  Next Appointment: 20th Sept 2024
                </span>
              </div>
              <div className="mt-4 flex justify-between">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                  Approve
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  Reject
                </button>
              </div>
            </div>

            {/* Card 2 - Patient 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
                <p className="text-gray-600 mb-1">
                  <strong>Age:</strong> 30
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Condition:</strong> Diabetes
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Last Visit:</strong> 5th Sept 2024
                </p>
                <span className="text-yellow-500 font-bold">
                  Next Appointment: Pending
                </span>
              </div>
              <div className="mt-4 flex justify-between">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                  Approve
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  Reject
                </button>
              </div>
            </div>

            {/* Card 3 - Patient 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Michael Lee</h3>
                <p className="text-gray-600 mb-1">
                  <strong>Age:</strong> 62
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Condition:</strong> Arthritis
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Last Visit:</strong> 1st Sept 2024
                </p>
                <span className="text-red-500 font-bold">
                  Next Appointment: 25th Sept 2024
                </span>
              </div>
              <div className="mt-4 flex justify-between">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                  Approve
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  Reject
                </button>
              </div>
            </div>

            {/* Card 4 - Patient 4 */}
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Emily Clark</h3>
                <p className="text-gray-600 mb-1">
                  <strong>Age:</strong> 52
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Condition:</strong> Asthma
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Last Visit:</strong> 8th Sept 2024
                </p>
                <span className="text-green-500 font-bold">
                  Next Appointment: 18th Sept 2024
                </span>
              </div>
              <div className="mt-4 flex justify-between">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                  Approve
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
