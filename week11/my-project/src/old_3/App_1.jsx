import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit이 들어가면 필수로 들어감
    if (text.trim === "") {
      alert("내용을 입력하세요");
      return; // 함수 즉시 종료
    }

    setText("");
  };

  const handleSubmitMulti = (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      alert("내용을 입력해주세요");
      return;
    }

    if (text.length > 100) {
      alert("100자를 넘을 수 없습니다.");
      return;
    }

    if (text.length < 3) {
      alert("최소 3자  이상 입력하세요.");
      return;
    }

    console.log("제출", text);
    setText("");
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("이메일에 @가 들어가야 합니다");
      return;
    }

    if (!email.includes(".")) {
      alert("이메일 형식이 올바르지 않습니다");
      return;
    }

    console.log("가입:", email);
  };

  return (
    <form onSubmit={handleEmailSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="입력 후 Enter 또는 제출"
      />
      <button type="submit">제출</button>
    </form>
  );
}

export default App;
