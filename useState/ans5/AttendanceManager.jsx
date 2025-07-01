import React, { useState } from "react";

function AttendanceManager() {
  const initialStudents = [
    { id: 1, name: "Alice", present: true },
    { id: 2, name: "Bob", present: false },
    { id: 3, name: "Charlie", present: true },
    { id: 4, name: "Diana", present: false },
    { id: 5, name: "Ethan", present: true },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [filter, setFilter] = useState("All");

  const toggleAttendance = (id) => {
    const updated = students.map((student) =>
      student.id === id ? { ...student, present: !student.present } : student
    );
    setStudents(updated);
  };

  const filteredStudents = students.filter((student) => {
    if (filter === "All") return true;
    if (filter === "Present") return student.present;
    if (filter === "Absent") return !student.present;
    return true;
  });

  const presentCount = students.filter((s) => s.present).length;

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px" }}>
      <h2>🎓 Attendance Manager</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Filter:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option value="All">All</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredStudents.map((student) => (
          <li
            key={student.id}
            style={{
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: student.present ? "#e0ffe0" : "#ffe0e0",
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid #ccc",
            }}
          >
            <span>
              <strong>{student.name}</strong> -{" "}
              <span style={{ color: student.present ? "green" : "red" }}>
                {student.present ? "Present" : "Absent"}
              </span>
            </span>
            <button onClick={() => toggleAttendance(student.id)}>Toggle</button>
          </li>
        ))}
      </ul>

      <p>
        ✅ Total Present: <strong>{presentCount}</strong>
      </p>
    </div>
  );
}

export default AttendanceManager;
