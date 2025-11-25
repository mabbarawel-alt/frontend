// pages/portfolio.js (or pages/index.js if you want it as the homepage)
import Head from 'next/head';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio - GBX Internet Service Provider</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <style>{`
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #ffffff; /* White background */
          color: #333;
          line-height: 1.6;
        }
        header {
          background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); /* Gradient red header */
          color: white;
          text-align: center;
          padding: 60px 20px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        header h1 {
          margin: 0;
          font-size: 3em;
          font-weight: bold;
        }
        header p {
          font-size: 1.3em;
          margin-top: 15px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        section {
          padding: 50px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-title {
          text-align: center;
          font-size: 2.5em;
          color: #d32f2f; /* Red title */
          margin-bottom: 30px;
          font-weight: bold;
        }
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 40px;
        }
        .project-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .project-item img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 20px;
        }
        .project-item h3 {
          color: #d32f2f; /* Red title */
          margin-bottom: 10px;
          font-size: 1.5em;
        }
        .project-item p {
          font-size: 1em;
          margin-bottom: 10px;
        }
        .project-details {
          font-size: 0.9em;
          color: #666;
          font-style: italic;
        }
        .case-studies {
          background-color: #ffebee; /* Light red background */
          color: #333;
          border-radius: 15px;
          padding: 60px 20px;
        }
        .case-studies .project-grid {
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        }
        .gallery {
          background-color: #fafafa; /* Subtle gray background for gallery */
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
        }
        .gallery-item img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .gallery-item:hover img {
          transform: scale(1.05);
        }
        .gallery-item h3 {
          position: absolute;
          bottom: 10px;
          left: 10px;
          color: white;
          background: rgba(211, 47, 47, 0.8); /* Semi-transparent red */
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 1.2em;
          margin: 0;
        }
        footer {
          background-color: #d32f2f; /* Red footer */
          color: white;
          text-align: center;
          padding: 30px 20px;
          font-size: 1.1em;
        }
        footer p {
          margin: 0;
        }
        @media (max-width: 768px) {
          header h1 {
            font-size: 2.5em;
          }
          header p {
            font-size: 1.1em;
          }
          .section-title {
            font-size: 2em;
          }
          .project-grid {
            grid-template-columns: 1fr;
          }
          .gallery-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }
      `}</style>
      <header>
        <h1>📂 GBX Portfolio - Showcasing Our Work</h1>
        <p>Explore our portfolio of successful projects, from internet installations to technology solutions. See how GBX has delivered reliable connectivity and innovative services to homes and businesses.</p>
      </header>

      <section id="featured-projects">
        <h2 className="section-title">🌟 Featured Projects</h2>
        <div className="project-grid">
          <div className="project-item">
            <img src="https://via.placeholder.com/400x250/ff0000/ffffff?text=Rural+Home+Setup" alt="Rural Home Internet Setup" />
            <h3>🏡 Rural Home Connectivity</h3>
            <p>Installed P2P wireless network for a family in a remote area, enabling smooth online schooling and work-from-home capabilities.</p>
            <div className="project-details">Duration: 2 weeks | Speed: 50 Mbps | Satisfied Clients: 1 Family</div>
          </div>
          <div className="project-item">
            <img src="https://via.placeholder.com/400x250/ff0000/ffffff?text=Business+Office+Fiber" alt="Business Office Fiber Installation" />
            <h3>🏢 Business Office Fiber Upgrade</h3>
            <p>Upgraded a small business to fiber internet, reducing downtime and improving productivity for 20 employees.</p>
            <div className="project-details">Duration: 1 month | Speed: 1 Gbps | Satisfied Clients: 1 Business</div>
          </div>
          <div className="project-item">
            <img src="https://via.placeholder.com/400x250/ff0000/ffffff?text=Security+CCTV" alt="Home Security CCTV" />
            <h3>🔒 Home Security System</h3>
            <p>Designed and installed a comprehensive CCTV system for a residential property, including wired and wireless cameras.</p>
            <div className="project-details">Duration: 3 days | Cameras: 8 | Satisfied Clients: 1 Homeowner</div>
          </div>
          <div className="project-item">
            <img src="https://via.placeholder.com/400x250/ff0000/ffffff?text=Gaming+PC+Build" alt="Custom Gaming PC" />
            <h3>🎮 Custom Gaming PC Build</h3>
            <p>Built a high-performance gaming PC for a client, tailored for competitive gaming with top-tier components.</p>
            <div className="project-details">Duration: 1 week | Specs: RTX 3080, i9 Processor | Satisfied Clients: 1 Gamer</div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="case-studies">
        <h2 className="section-title">📖 Case Studies</h2>
        <div className="project-grid">
          <div className="project-item">
            <img src="https://via.placeholder.com/350x250/ff0000/ffffff?text=Community+Network" alt="Community Network Expansion" />
            <h3>🌐 Community Network Expansion</h3>
            <p>Expanded wireless coverage to an underserved community, connecting 100+ households with affordable internet.</p>
            <div className="project-details">Challenge: Limited infrastructure | Solution: P2P Wireless | Impact: Improved access to education and services</div>
          </div>
          <div className="project-item">
            <img src="https://via.placeholder.com/350x250/ff0000/ffffff?text=Tech+Support+Success" alt="Tech Support Success Story" />
            <h3>🛠️ Tech Support Success</h3>
            <p>Provided ongoing maintenance and support for a business network, resolving issues within 24 hours.</p>
            <div className="project-details">Challenge: Frequent outages | Solution: Proactive monitoring | Impact: 99% uptime achieved</div>
          </div>
          <div className="project-item">
            <img src="https://via.placeholder.com/350x250/ff0000/ffffff?text=Affordable+Plans+Case" alt="Affordable Plans Implementation" />
            <h3>💰 Affordable Plans Rollout</h3>
            <p>Implemented customized plans for low-income households, making high-speed internet accessible without compromising quality.</p>
            <div className="project-details">Challenge: High costs | Solution: Subsidized packages | Impact: 200+ new subscribers</div>
          </div>
          <div className="project-item">
            <img src="https://via.placeholder.com/350x250/ff0000/ffffff?text=Innovation+Project" alt="Innovation in Connectivity" />
            <h3>🚀 Innovative Connectivity Solutions</h3>
            <p>Developed hybrid wireless-fiber solutions for mixed urban-rural areas, ensuring seamless connectivity.</p>
            <div className="project-details">Challenge: Varied terrain | Solution: Hybrid tech | Impact: Reliable service in diverse locations</div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <h2 className="section-title">🖼️ Project Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="https://via.placeholder.com/250x200/ff0000/ffffff?text=Installation+Site+1" alt="Installation Site 1" />
            <h3>Before & After: Rural Setup</h3>
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/250x200/ff0000/ffffff?text=Installation+Site+2" alt="Installation Site 2" />
            <h3>Office Network Upgrade</h3>
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/250x200/ff0000/ffffff?text=Installation+Site+3" alt="Installation Site 3" />
            <h3>CCTV Installation</h3>
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/250x200/ff0000/ffffff?text=Installation+Site+4" alt="Installation Site 4" />
            <h3>PC Build Workshop</h3>
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/250x200/ff0000/ffffff?text=Installation+Site+5" alt="Installation Site 5" />
            <h3>Community Expansion</h3>
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/250x200/ff0000/ffffff?text=Installation+Site+6" alt="Installation Site 6" />
            <h3>Tech Support On-Site</h3>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2023 GBX Internet Service Provider. All rights reserved.</p>
      </footer>
    </>
  );
}
