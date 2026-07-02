function Menu() {
    const menus = [
        { id: 1, name: '김치찌개', price: 9000 },
        { id: 2, name: '된짱찌개', price: 8500 },
        { id: 3, name: '제육볶음', price: 10000 },
        { id: 4, name: '비빔밥', price: 9500 },
    ];

    return (
        <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto'}}>
            <h1>오늘의 메뉴</h1>
            <ul style={{ listStyle: 'none', padding: 0}}>
                {menus.map(menu => (
                    <li
                        key={menu.id}
                        style={{
                            padding: '12px',
                            border: '1px solid #ddd',
                            borderRadius: '6px',
                            marginBottom: '8px',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <span>{menu.name}</span>
                        <span>{menu.price.toLocaleString()}원</span>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Menu;