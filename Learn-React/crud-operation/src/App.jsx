import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
function App() {
  // 1. Initial State
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('students_data');
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, name: 'Rahul Sharma', course: 'React Basics' },
          { id: 2, name: 'Pooja Patil', course: 'Web Development' },
        ];
  });

  const [currentStudent, setCurrentStudent] = useState(null);

  // 2. useEffect: Save to localStorage whenever student list updates
  useEffect(() => {
    localStorage.setItem('students_data', JSON.stringify(students));
  }, [students]);

  // CREATE: Add new student
  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  // UPDATE: Edit existing student record
  const handleUpdateStudent = (updatedStudent) => {
    const updatedList = students.map((s) =>
      s.id === updatedStudent.id ? updatedStudent : s
    );
    setStudents(updatedList);
    setCurrentStudent(null); // Reset edit state
  };

  // DELETE: Remove student by id
  const handleDeleteStudent = (id) => {
    const filteredList = students.filter((s) => s.id !== id);
    setStudents(filteredList);

    // If currently editing the deleted student, reset edit mode
    if (currentStudent && currentStudent.id === id) {
      setCurrentStudent(null);
    }
  };

  // Set selected student for editing
  const handleSelectEdit = (student) => {
    setCurrentStudent(student);
  };

  // Cancel edit mode
  const handleCancelEdit = () => {
    setCurrentStudent(null);
  };

  return (
    <div>
      <Header title="Student Portal" totalCount={students.length} />

      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <StudentForm
              onAddStudent={handleAddStudent}
              onUpdateStudent={handleUpdateStudent}
              currentStudent={currentStudent}
              onCancelEdit={handleCancelEdit}
            />
          </div>

          <div className="col-md-7">
            <StudentList
              students={students}
              onDeleteStudent={handleDeleteStudent}
              onSelectEdit={handleSelectEdit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;