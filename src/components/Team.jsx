export default function Team({ site }) {
  return (
    <section className="section">
      <div className="container">

        <div className="section-heading">
          <span className="eyebrow">
            Diferenciais
          </span>

          <h2>
            Por que escolher a Rynova?
          </h2>

          <p>
            Desenvolvemos projetos modernos, rápidos e preparados para ajudar
            sua empresa a crescer.
          </p>
        </div>

        <div className="team-grid">
          {site.team.map((member) => (
            <article
              className="team-card"
              key={member.name}
            >
              <img
                src={member.image}
                alt={member.name}
              />

              <div className="team-card-content">

                <h3>{member.name}</h3>

                <strong>{member.role}</strong>

                <p>{member.specialty}</p>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}