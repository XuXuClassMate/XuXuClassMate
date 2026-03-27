export default function Values() {
  const values = [
    {
      title: 'Continuous Learning',
      description: 'Always stay curious and keep learning new technologies and skills'
    },
    {
      title: 'Share & Grow',
      description: 'Share knowledge and experience to help others grow together'
    },
    {
      title: 'Build Excellence',
      description: 'Strive for excellence in every project and challenge'
    }
  ];

  return (
    <section className="values">
      <div className="container">
        <h2 className="section-title">My Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
