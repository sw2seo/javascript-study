import { useState } from 'react';

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const cards = [
    { id: 1, title: '카드 A' },
    { id: 2, title: '카드 B' },
    { id: 3, title: '카드 C' },
    { id: 4, title: '카드 D' },
    { id: 5, title: '카드 E' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>카드를 클릭해보세요</h1>

      <div style={{ display: 'flex', gap: '10px' }}>
        {cards.map(card => (
            <div
                key={card.id}
                onClick={() => setSelectedId(card.id)}
                style={{
                    padding: '20px',
                    border: selectedId === card.id ? '3px solid blue' : '1px solid #ccc',
                    cursor: 'pointer'
                }}
            >
                {card.title}
            </div>
            
        ))}

        {/* <div
          onClick={() => setSelectedId(1)}
          style={{
            padding: '20px',
            border: selectedId === 1 ? '3px solid blue' : '1px solid #ccc',
            cursor: 'pointer'
          }}
        >
          카드 A
        </div>
        <div
          onClick={() => setSelectedId(2)}
          style={{
            padding: '20px',
            border: selectedId === 2 ? '3px solid blue' : '1px solid #ccc',
            cursor: 'pointer'
          }}
        >
          카드 B
        </div>
        <div
          onClick={() => setSelectedId(3)}
          style={{
            padding: '20px',
            border: selectedId === 3 ? '3px solid blue' : '1px solid #ccc',
            cursor: 'pointer'
          }}
        >
          카드 C
        </div> */}
      </div>

      {selectedId && <p>선택된 카드: {selectedId}번</p>}
    </div>
  );
}

export default App;