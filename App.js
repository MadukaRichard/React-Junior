import React, { useState } from 'react'

const App = () => {
  
  const [students, setStudents] = useState([
    { name: "Richard", school: "SQI Dugbe" },
    { name: "Sodiq", school: "SQI Challenge" },
    { name: "Olaide", school: "SQI Ojoo" }
  ])

  const [showTable, setShowTable] = useState(true)

  
  const deleteOneItem = (indexToDelete) => {
    console.log("I am deleting item at index:", indexToDelete)
    
    const newStudentList = students.filter((student, index) => {
      return index !== indexToDelete
    })

    setStudents(newStudentList)
  }

  const deleteTheTable = () => {
    console.log("Table deleted!")
    setShowTable(false) 
    setStudents([])     
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Student List</h1>

      {showTable && (
        <div>
          <table border="1" width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>School</th>
                <th>Button</th>
              </tr>
            </thead>
            
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.school}</td>
                  <td>
                    <button onClick={() => deleteOneItem(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <br />
          
          <button onClick={deleteTheTable}>
            Delete The Table
          </button>
        </div>
      )}

     
      
    </div>
  )
}

export default App