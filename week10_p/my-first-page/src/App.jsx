import ProfileHeader from './components/ProfileHeader';
import Bio from './components/Bio';
import SkillList from './components/SkillList';
import ProjectList from './components/ProjectList';
import ContactFooter from './components/ContactFooter';
import './App.css';

const profile = {
  name: "홍길동",
  job: "프론트엔드 개발자 지망생",
  imageUrl: "https://via.placeholder.com/150",
  bio: "비전공으로 시작해서 React를 배우고 있는 새내기 개발자입니다."
};

const skills = [
  { name: "HTML", level: "중급", color: "#e34f26" },
  { name: "CSS", level: "중급", color: "#1572b6" },
  { name: "JavaScript", level: "중급", color: "#f7df1e" },
  { name: "React", level: "초급", color: "#61dafb" },
  { name: "Git", level: "초급", color: "#f05032" },
];

const projects = [
  {
    title: "To-Do List 앱",
    description: "바닐라 JS로 만든 첫 프로젝트. localStorage 활용",
    link: "https://github.com/example/todo"
  },
  {
    title: "날씨 검색 앱",
    description: "fetch API로 외부 데이터를 받아오는 SPA",
    link: "https://github.com/example/weather"
  },
];

const contact = {
  email: "example@email.com",
  github: "github.com/example",
  blog: "example.tistory.com"
};

function App() {
  return (
    <div className="container">
      <ProfileHeader profile={profile} />
      <Bio text={profile.bio} />
      <SkillList skills={skills} />
      <ProjectList projects={projects} />
      <ContactFooter contact={contact} />
    </div>
  );
}

export default App;