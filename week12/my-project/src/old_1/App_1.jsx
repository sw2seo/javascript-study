import { useState } from 'react'
import './App.css'


function App() {
  //const numbers = [10, 20, 30, 40, 50];

  const users = [
    { id: 1, name: '홍길동', age: 20 },
    { id: 2, name: '김철수', age: 25 },
    { id: 3, name: '박지영', age: 30 },
  ];

  return (
    <div>
      <h1>사용자 목록</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.age}세)
          </li>
        ))}
      </ul>
    </div>

    // <>
    //   {numbers.map(n => {<li>{n}</li>})}
    // </>
  );
}

export default App
