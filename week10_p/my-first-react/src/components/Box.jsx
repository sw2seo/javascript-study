// { children } 이렇게 호출해야 하위 요소에 jsx 내용을 가져올수 있음
function Box({ children }) {
  return (
    <div className="box">
      {children}
    </div>
  );
}

export default Box;