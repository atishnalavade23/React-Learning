import React from 'react';

function StudentList(props) {
  // Conditional Rendering: Display message if list is empty
  if (props.students.length === 0) {
    return (
      <div className="alert alert-warning text-center" role="alert">
        No students found. Add a new record above!
      </div>
    );
  }

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-dark text-white">Student Records</div>
      <div className="card-body p-0">
        <table className="table table-striped table-hover mb-0">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Course</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Map Method iterating over the array */}
            {props.students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td className="text-center">
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => props.onSelectEdit(student)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => props.onDeleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;