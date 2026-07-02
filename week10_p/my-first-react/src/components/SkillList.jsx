function SkillList({ skills }) {
  return (
    <section>
      <h3>보유 기술 ({skills.length}개)</h3>
      <ul>
        <li>{skills[0]}</li>
        <li>{skills[1]}</li>
        <li>{skills[2]}</li>
      </ul>
    </section>
  );
}

export default SkillList;