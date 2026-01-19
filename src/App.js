import React, { useState } from 'react'

const App = () => {
  const [user, setUser] = useState([
    {id: 1, name: "Richard", age: 23, gender: "Male"},
    {id: 2, name: "Tochukwu", age: 24, gender: "Male"},
    {id: 3, name: "Feranmi", age: 22, gender: "Male"},
    {id: 4, name: "Daniel", age: 29, gender: "Male"},
    {id: 5, name: "Evans", age: 20, gender: "Male"},
    {id: 6, name: "Femi", age: 26, gender: "Male"},
    {id: 7, name: "Stella", age: 21, gender: "Female"},
    {id: 8, name: "Rosabel", age: 19, gender: "Female"},
    {id: 9, name: "Precious", age: 20, gender: "Female"},
    {id: 10, name: "Fatima", age: 18, gender: "Female"},
    {id: 11, name: "Eriayo", age: 20, gender: "Female"},
  ])

  
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")

  // 3. NEW STATE FOR FILTER (Default is "All")
  const [filterOption, setFilterOption] = useState("All")

  // DELETE FUNCTION
  const deleteUser = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete?")
    if (confirmed) {
      const updatedUser = user.filter((person) => person.id !== id)
      setUser(updatedUser);
    }
  }

  // ADD USER FUNCTION
  const addUSer = () => {
    if (!name || !age || !gender) {
      alert("Please fill in all fields")
      return
    }

    const newUser = {
      id: Date.now(),
      name: name,
      age: age,
      gender: gender
    }
    setUser([...user, newUser])

    setName("")
    setAge("")
    setGender("")
  }

  
  const filteredUsers = user.filter((person) => {
    if (filterOption === "All") {
      return true; 
    } else {
      return person.gender === filterOption; 
    }
  })

  return (
    <>
     
      <div className='container-fluid w-50 shadow text-center mx-auto mt-5 p-4 rounded bg-white'>
        <h3 className='mb-4 fw-bold'>Add Details</h3>

        <div className="mb-3 text-start">
          <label className="form-label fw-bold">Name</label>
          <input type="text" className="form-control" placeholder="Enter full name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="mb-3 text-start">
          <label className="form-label fw-bold">Age</label>
          <input type="number" className="form-control" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>

        <div className="mb-4 text-start">
          <label className="form-label fw-bold">Gender</label>
          <select className="form-select" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button className='btn btn-success w-50 fw-bold' onClick={addUSer}>Submit</button>
      </div>

      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h4>User List</h4>
          
          <div style={{ width: "200px" }}>
             <label className="fw-bold">Filter by Gender:</label>
             <select 
               className="form-select" 
               value={filterOption} 
               onChange={(e) => setFilterOption(e.target.value)}
             >
               <option value="All">All Users</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
             </select>
          </div>
        </div>

        <div className="table-responsive shadow rounded">
          <table className="table table-striped table-hover table-bordered mb-0 text-center">
            <thead className="table-dark">
              <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {filteredUsers.map((person, i) => (
                <tr key={person.id} className="align-middle">
                  <td>{i + 1}</td>
                  <td className="fw-bold">{person.name}</td>
                  <td>{person.age}</td>
                  <td>
                    <span className="badge bg-secondary">{person.gender}</span>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteUser(person.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center text-muted py-3">
                    No users found for this filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App