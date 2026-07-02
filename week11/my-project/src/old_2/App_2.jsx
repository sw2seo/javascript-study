import { useState } from 'react';

function App() {
    const [text, setText] = useState('');

    return (
        <div>
           <input type="text" value={text} onChange={(e) => setText(e.target.value)} /> 
           <p>입력한 내용: {text} </p>
           <p>대문자 변환: {text.toUpperCase()} </p>
           <p>거꾸로: {text.split('').reverse().join('')} </p>
        </div>
    )
}

export default App;