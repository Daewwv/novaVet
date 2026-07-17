export default function Team({ site }) {
  return (
    <section className="section" id="equipe">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Nossa equipe</span>

          <h2>Veterinários apaixonados pelo cuidado animal.</h2>

          <p>
            Profissionais preparados para oferecer atendimento humanizado e
            medicina veterinária moderna.
          </p>
        </div>

        <div className="team-grid">
          {site.team.map((member) => (
            <article className="team-card" key={member.name}>
              <img
                src={member.image}
                alt={`${member.name} - ${member.role}`}
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