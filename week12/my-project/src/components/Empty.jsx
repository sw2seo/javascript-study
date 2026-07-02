function Empty() {
  const items = []; // 일부러 빈 배열

  return (
    <div style={{ padding: "40px" }}>
      <h1>장바구니</h1>

      {/* 방식 1. 삼항연산자 */}
      {items.length === 0 ? (
        <p style={{ color: "#888" }}>장바구니가 비어있어요.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}

      {/* 방식 2. && 두번 */}
      {items.length === 0 && (<p style={{ color: "#888" }}>장바구니가 비어있어요.</p>)}
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}

      {/* 방식 3. length 안 체크, .map 빈 상태 메시지 */}
      {items.length === 0 && (<p style={{ color: "#888" }}>장바구니가 비어있어요.</p>)}
      <ul>
        {items.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>

    </div>
  );
}

export default Empty;
