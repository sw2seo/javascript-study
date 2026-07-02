import { useState } from 'react';

function App() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    if (liked) {
      // 이미 좋아요 누른 상태 → 취소
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      // 좋아요 안 누른 상태 → 누름
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>좋아요</h1>
      <p>총 {likeCount}명이 좋아합니다</p>
      <button onClick={handleLike}>
        {liked ? '좋아요 취소' : '좋아요'}
      </button>
    </div>
  );
}

export default App;