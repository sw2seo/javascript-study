function SkillCard({ skill }) {
  return (
    <div
      className="skill-card"
      style={{ borderLeft: `4px solid ${skill.color}` }}
    >
      <h4>{skill.name}</h4>
      <p>{skill.level}</p>
    </div>
  );
}

export default SkillCard;