
import './App.css';

import React, { useState } from 'react';

// import React, { useState } from 'react';

const App = () => {
  const [rows, setRows] = useState([]);

  const handleAddRow = () => {
    setRows([...rows, { name: '', email: '' }]);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform CRUD operations here
    console.log('Rows:', rows);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">
                  <input
                    className="w-full py-2 px-4 border focus:outline-none focus:shadow-outline"
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={row.name}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <input
                    className="w-full py-2 px-4 border focus:outline-none focus:shadow-outline"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={row.email}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="text-red-500 hover:text-red-700"
                    type="button"
                    onClick={() => handleRemoveRow(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleAddRow}
        >
          Add Row
        </button>
        </form>
        </div>
       

  );
};



export default App;
