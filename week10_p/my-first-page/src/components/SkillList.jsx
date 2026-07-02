import SkillCard from './SkillCard';

function SkillList({ skills }) {
  return (
    <section className="skill-list">
      <h2>보유 기술</h2>
      <div className="skill-grid">
        <SkillCard skill={skills[0]} />
        <SkillCard skill={skills[1]} />
        <SkillCard skill={skills[2]} />
        <SkillCard skill={skills[3]} />
        <SkillCard skill={skills[4]} />
      </div>
    </section>
  );
}

export default SkillList;