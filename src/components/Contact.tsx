export default function Contact() {
  return (
    <section className="contact-section" style={{ marginBottom: '3rem' }}>
      <div className="container">
        <div className="contact-info" style={{ textAlign: 'left', paddingLeft: 0 }}>
          <h2>Contact：</h2>
          <a
            href="mailto:mail@xuxuclassmate.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4a90e2', textDecoration: 'none' }}
          >
            mail@xuxuclassmate.com
          </a>
        </div>
      </div>
    </section>
  );
}
