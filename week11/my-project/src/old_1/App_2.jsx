import { useState } from 'react';

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>점수판</h1>

      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '30px 0' }}>
        <div>
          <h2>홈</h2>
          <p style={{ fontSize: '48px', margin: '10px 0' }}>{homeScore}</p>
          <button onClick={() => setHomeScore(homeScore + 1)}>+1</button>
          <button onClick={() => setHomeScore(homeScore - 1)} style={{ marginLeft: '8px' }}>-1</button>
        </div>

        <div>
          <h2>원정</h2>
          <p style={{ fontSize: '48px', margin: '10px 0' }}>{awayScore}</p>
          <button onClick={() => setAwayScore(awayScore + 1)}>+1</button>
          <button onClick={() => setAwayScore(awayScore - 1)} style={{ marginLeft: '8px' }}>-1</button>
        </div>
      </div>

      <button onClick={() => { setHomeScore(0); setAwayScore(0); }}>전체 리셋</button>
    </div>
  );
}

export default App;