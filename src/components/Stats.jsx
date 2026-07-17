export default function Stats({ site }) {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {site.stats.map((item) => (
          <article
            className="stat-item"
            key={item.label}
          >
            <strong>{item.value}</strong>

            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}