import { useState } from 'react';

function Validation_1() {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === '') {
      setError('내용을 입력해주세요');
      return;
    }

    if (text.length < 3) {
      setError('최소 3자 이상 입력해주세요');
      return;
    }

    // 검증 통과
    setError('');
    console.log('제출:', text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
      <button type="submit">제출</button>
    </form>
  );
}

export default Validation_1;