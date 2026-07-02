function Header(pro) { //컴포넌트함수는 앞에 대문자로 써줘야함
    return ( 
        <header>
            <h1>안녕하세요, {pro.name} 입니다"</h1>
            <p>{pro.job}입니다.</p>
            <p>{pro.age}세 입니다</p>
        </header>
    );
}

export default Header; //이걸 안적으면 다른곳으로 보낼수가 없음