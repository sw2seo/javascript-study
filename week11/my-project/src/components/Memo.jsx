import { useState } from "react";

function Memo() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const [memos, setMemos] = useState([
    { id: 1, content: "첫 번째 메모입니다." },
    { id: 2, content: "두 번째 메모입니다." },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      setError("메모를 입력해주세요.");
      return;
    }

    if (text.length > 100) {
      setError("100자를 넘을 수 없습니다.");
      return;
    }

    const newMemo = {
      id: Date.now(),
      content: text,
    };
    setMemos([...memos, newMemo]);

    setText("");
    setError("");
  };

  const handleDelete = (id) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  return (
    <div className="container">
      <h1>메모장</h1>

      <form onSubmit={handleSubmit} className="memo-form">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="메모 입력하고  Enter 또는 추가 버튼"
        />
        <div className="form-footer">
          <span className={text.length > 100 ? "count over" : "count"}>
            {text.length} / 100자
          </span>
          <button type="submit">추가</button>
        </div>
        {error && <p className="error">{error}</p>}
      </form>

      <div className="memo-list">
        <h2>메모 목록 ({memos.length}개)</h2>
        {memos.length === 0 && <p className="empty">아직 메모가 없어요</p>}
        {memos.map(memo => (
          <div className="memo-item">
            <p>{memo.content}</p>
            <button onClick={() => handleDelete(memo.id)}>삭제</button>
          </div>
        ))

        }
        {/* {memos[0] && (
          <div className="memo-item">
            <p>{memos[0].content}</p>
            <button onClick={() => handleDelete(memos[0].id)}>삭제</button>
          </div>
        )}
        {memos[1] && (
          <div className="memo-item">
            <p>{memos[1].content}</p>
            <button onClick={() => handleDelete(memos[1].id)}>삭제</button>
          </div>
        )}
        {memos[2] && (
          <div className="memo-item">
            <p>{memos[2].content}</p>
            <button onClick={() => handleDelete(memos[2].id)}>삭제</button>
          </div>
        )}
        {memos[3] && (
          <div className="memo-item">
            <p>{memos[3].content}</p>
            <button onClick={() => handleDelete(memos[3].id)}>삭제</button>
          </div>
        )}
        {memos[4] && (
          <div className="memo-item">
            <p>{memos[4].content}</p>
            <button onClick={() => handleDelete(memos[4].id)}>삭제</button>
          </div>
        )}
        {memos.length > 5 && (
          <p>...그외 {memos.length - 5}개 (나중에 .map()으로!)</p>
        )} */}
      </div>
    </div>
  );
}

export default Memo;
