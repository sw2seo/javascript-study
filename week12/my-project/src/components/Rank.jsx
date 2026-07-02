function Rank() {
  const students = [
    { id: "S001", name: "홍길동", score: 92 },
    { id: "S002", name: "김철수", score: 75 },
    { id: "S003", name: "박지영", score: 88 },
    { id: "S004", name: "이수진", score: 58 },
    { id: "S005", name: "최영호", score: 100 },
  ];

  const getBg = (score) => {
    if (score >= 90) return '#e3f2fd';
    if (score < 60) return '#ffebee';
    return '#ffffff';
  }

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto'}}>
        <h1>학생 점수표</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {students.map(student => (
                <li
                    key={student.id}
                    style={{
                        padding: '12px',
                        marginBottom: '6px',
                        border: '1px solid #ddd',
                        borderRadius: '6px',
                        //background: student.score >=90 ? '#ef2fd' : student.score < 60 ? '#ffebee' : '#ffffff'
                        background: getBg(student.score)
                    }}>
                        <strong>{student.name}</strong>: {student.score}점
                        {student.score >= 90 && <span style={{ marginLeft: '10px '}}>(우수)</span>}
                        {student.score < 60 && <span style={{marginLeft: '10px'}}>(보충필요)</span>}
                </li>
            ))}
        </ul>

    </div>
  )
}

export default Rank;
