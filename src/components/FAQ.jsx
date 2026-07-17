export default function FAQ({ site }) {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">FAQ</span>
          <h2>Perguntas frequentes.</h2>
        </div>

        <div className="faq-list">
          {site.faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
