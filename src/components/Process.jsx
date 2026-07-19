export default function Process({ site }) {
  return (
    <section className="section section-soft" id="processo">
      <div className="container">

        <div className="section-heading">

          <span className="eyebrow">
            NOSSO PROCESSO
          </span>

          <h2>
            Desenvolvemos projetos com método, estratégia e foco em resultados.
          </h2>

          <p>
            Cada etapa foi pensada para entregar um projeto moderno,
            organizado e alinhado aos objetivos do seu negócio.
          </p>

        </div>

        <div className="process-grid">

          {site.process.map((step) => (

            <article
              className="process-card"
              key={step.number}
            >

              <span className="process-number">
                {step.number}
              </span>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}