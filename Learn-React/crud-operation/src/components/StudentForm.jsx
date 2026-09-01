import React, { useState, useEffect } from 'react';

function StudentForm(props) {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');

  // When editStudent prop changes, populate input fields
  useEffect(() => {
    if (props.currentStudent) {
      setName(props.currentStudent.name);
      setCourse(props.currentStudent.course);
    } else {
      setName('');
      setCourse('');
    }
  }, [props.currentStudent]);

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !course.trim()) {
      alert('Please fill out all fields!');
      return;
    }

    if (props.currentStudent) {
      // Update existing student
      props.onUpdateStudent({
        id: props.currentStudent.id,
        name: name,
        course: course,
      });
    } else {
      // Add new student
      props.onAddStudent({
        id: Date.now(),
        name: name,
        course: course,
      });
    }

    setName('');
    setCourse('');
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header bg-secondary text-white">
        {props.currentStudent ? 'Edit Student' : 'Add New Student'}
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Student Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Course</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. React & JavaScript"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success me-2">
            {props.currentStudent ? 'Update Student' : 'Add Student'}
          </button>

          {/* Conditional Rendering: Show Cancel only when editing */}
          {props.currentStudent && (
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={props.onCancelEdit}
            >
              Cancel
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default StudentForm;