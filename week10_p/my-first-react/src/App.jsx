import './App.css'

import Header from './components/Header';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import ProductCard from './components/productCard';
import SkillList from './components/SkillList';
import Box from './components/Box';

function App() {

  const laptop = {
    name: "노트북",
    price: 12000000,
    description: "가벼운 휴대용",
    brand: "Apple",
    weight: "1.4kg",
    inStock: true
  };

  const keyboard = {
    name: "키보드",
    price: 80000,
    description: "기계식",
    brand: "Logitech",
    weight: "1.0kg",
    inStock: false
  };

  const mySkills = ["HTML", "CSS", "JacaScript"];

  return (
    <div>
      <Header  job="개발자" age={10}/>
      <Box>
        <h2>안녕하세요</h2>
        <p>박스 안의 내용입니다.</p>
      </Box>

      <Box>
        <p>다른내용입니다</p>
        <button>버튼 OK</button>
      </Box>

      <section>
        <SkillList skills={mySkills} />
      </section>
      {/* <Hobbies /> */}
      <section>
        <h2>오늘의 상품</h2>
        <ProductCard product={laptop} />
        <ProductCard product={keyboard} />

        {/* <ProductCard
          name="노트북"
          price={1200000}
          description="가벼운 휴대용 노트북"
        />
        <ProductCard
          name="키보드"
          price={80000}
          description="기계식 키보드"
        />
        <ProductCard
          name="마우스"
          price={45000}
          description="무선 마우스"
        /> */}
      </section>
      <Footer />
    </div>
  );


// function App() {
//   const myName = '홍길동';
//   const myJob = '개발자 지망';
//   const hobbies = ['코딩', '독서', '산책'];

  // return (
  //   <div>
  //     <h1>안녕하세요!</h1>
  //     <p>제 이름은 {myName} 입니다. </p>
  //     <p>제 직업은 {myJob}</p>
  //     <p>총 {hobbies.length}개의 취미가 있어요</p>
  //     <p>한 달 후 날짜: {new Date(Date.now() + 30 * 24 * 60 *60 * 1000).toLocaleDateString()}</p>
  //   </div>
  // )
}

export default App
