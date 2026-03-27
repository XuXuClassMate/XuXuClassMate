import Link from 'next/link';

export default function QuickLinks() {
  const links = [
    {
      href: '/en/learn.html',
      title: 'Learning Path',
      description: 'View my learning notes and resources'
    },
    {
      href: '/en/work.html',
      title: 'Project Gallery',
      description: 'Explore my recent projects and works'
    },
    {
      href: '/en/life.html',
      title: 'Life Journey',
      description: 'Share my life experiences and stories'
    }
  ];

  return (
    <section className="quick-links">
      <div className="container">
        <div className="links-grid">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="link-card">
              <h3>{link.title}</h3>
              <p>{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
