function ContactFooter({ contact }) {
  return (
    <footer className="contact-footer">
      <h2>연락처</h2>
      <ul>
        <li>이메일: {contact.email}</li>
        <li>GitHub: {contact.github}</li>
        <li>블로그: {contact.blog}</li>
      </ul>
    </footer>
  );
}

export default ContactFooter;