export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="container">
      <main>
        <section className="hero">
          <h1>Shannon Tai</h1>
          <p className="tagline">Electrical Engineering major at UH Manoa</p>
        </section>

        <section className="about">
          <h2>About</h2>
          <p>Electrical Engineering major at UH Manoa</p>
        </section>

        <section className="semester">
          <h2>This semester</h2>
          <ul>
            <li>PACE</li>
            <li>School work</li>
            <li>Internship</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {year} Shannon Tai</p>
      </footer>
    </div>
  );
}
