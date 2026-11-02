function App() {
  const students = [
    { id: 1, name: "Rahul", branch: "CSE" },
    { id: 2, name: "Priya", branch: "ECE" },
    { id: 3, name: "Arjun", branch: "CSE" },
    { id: 4, name: "Sneha", branch: "IT" }
  ];

  return (
    <div>
      <h1>Student List</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Branch: {student.branch}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
