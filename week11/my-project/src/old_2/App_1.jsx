import { useState } from 'react';

function App() {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    return (
        <div>
            <input type="text" value={name} onChange={handleChange} />
            <p>입력한 이름: {name}</p>

            {/* 혼동할 포인트 1. */}
            {/* <input type="text" defaultValue={"홍길동"} /> */}
            {/* 혼동할 포인트 2. */}
            {/* 제어하는 핸들러가 없기때문에 값이 변경되지 않는다 */}
            {/* <input type="text" value={name}  /> */}
            <button onClick={() => setName('')}>리셋</button>
        </div>
    )
}

export default App;