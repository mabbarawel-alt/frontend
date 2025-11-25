// pages/accomplishments.js (or pages/index.js if you want it as the homepage)
import Head from 'next/head';

export default function Accomplishments() {
  return (
    <>
      <Head>
        <title>Service Accomplishments - GBX Internet Service Provider</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <style>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #ffffff; /* White background */
          color: #333;
        }
        header {
          background-color: #d32f2f; /* Red header */
          color: white;
          text-align: center;
          padding: 50px 20px;
        }
        header h1 {
          margin: 0;
          font-size: 2.5em;
        }
        header p {
          font-size: 1.2em;
          margin-top: 10px;
        }
        section {
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-title {
          text-align: center;
          font-size: 2em;
          color: #d32f2f; /* Red title */
          margin-bottom: 20px;
        }
        .card-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          gap: 20px;
        }
        .card {
          background-color: #f9f9f9; /* Light white card */
          border: 2px solid #d32f2f; /* Red border */
          border-radius: 8px;
          width: 300px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 15px;
        }
        .card h3 {
          color: #d32f2f; /* Red card title */
          margin-bottom: 10px;
        }
        .card p {
          font-size: 1em;
        }
        .testimonial {
          font-style: italic;
          margin-top: 10px;
        }
        .stats-section {
          background-color: #ffebee; /* Light red background */
          color: #333;
          text-align: center;
        }
        .stats-section ul {
          list-style-type: none;
          padding: 0;
        }
        .stats-section li {
          font-size: 1.2em;
          margin: 10px 0;
        }
        footer {
          background-color: #d32f2f; /* Red footer */
          color: white;
          text-align: center;
          padding: 20px;
        }
        footer p {
          margin: 0;
        }
      `}</style>
      <header>
        <h1>🏆 GBX Service Accomplishments</h1>
        <p>Discover the milestones and successes we've achieved in delivering exceptional internet and technology services. From completed installations to satisfied customers, see how GBX has made a difference.</p>
      </header>

      <section id="project-highlights">
        <h2 className="section-title">📋 Project Highlights</h2>
        <div className="card-container">
          <div className="card">
            <img src="https://via.placeholder.com/300x200/ff0000/ffffff?text=Rural+Connectivity" alt="Rural Connectivity Project" />
            <h3>🌍 Rural Connectivity Expansion</h3>
            <p>Successfully brought high-speed P2P wireless internet to over 500 households in remote areas, enabling online education and remote work.</p>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300x200/ff0000/ffffff?text=Fiber+Rollout" alt="Fiber Internet Rollout" />
            <h3>🌐 Fiber Internet Rollout</h3>
            <p>Completed fiber optic installations for 200+ businesses, reducing latency by 90% and boosting productivity for gamers and streamers.</p>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300x200/ff0000/ffffff?text=CCTV+Installations" alt="CCTV Installations" />
            <h3>🎥 CCTV Security Systems</h3>
            <p>Installed advanced CCTV systems in 150 homes and offices, enhancing security and providing peace of mind with 24/7 monitoring.</p>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300x200/ff0000/ffffff?text=Custom+PC+Builds" alt="Custom PC Builds" />
            <h3>🖥️ Custom PC Builds & Repairs</h3>
            <p>Delivered 300+ custom gaming PCs and workstation setups, with a 98% customer satisfaction rate for repairs and maintenance.</p>
          </div>
        </div>
      </section>

      <section id="customer-testimonials">
        <h2 className="section-title">💬 Customer Testimonials</h2>
        <div className="card-container">
          <div className="card">
            <img src="https://via.placeholder.com/300x200/ff0000/ffffff?text=Happy+Customer+1" alt="Customer 1" />
            <h3>John D., Homeowner</h3>
            <p>"GBX transformed our rural home with reliable wireless internet. Online classes for my kids are now seamless!"</p>
            <div className="testimonial">- Rated 5/5</div>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300x200/ff0000/ffffff?text=Happy+Customer+2" alt="Customer 2" />
            <h3>Sarah L., Business Owner</h3>
            <p>"The fiber installation boosted our office productivity. GBX's support team was outstanding."</p>
            <div className="testimonial">- Rated 5/5</div>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300x200/ff0000/ffffff?text=Happy+Customer+3" alt="Customer 3" />
            <h3>Mike R., Gamer</h3>
            <p>"Custom PC build from GBX is a game-changer. Fast, reliable, and affordable!"</p>
            <div className="testimonial">- Rated 5/5</div>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300x200/ff0000/ffffff?text=Happy+Customer+4" alt="Customer 4" />
            <h3>Emily T., Security Enthusiast</h3>
            <p>"CCTV installation by GBX gave us complete security coverage. Highly recommend!"</p>
            <div className="testimonial">- Rated 5/5</div>
          </div>
        </div>
      </section>

      <section id="stats" className="stats-section">
        <h2 className="section-title">📊 Our Achievements</h2>
        <ul>
          <li>✔ 1,000+ Successful Installations</li>
          <li>✔ 95% Customer Satisfaction Rate</li>
          <li>✔ Expanded to 50+ Underserved Communities</li>
          <li>✔ 24/7 Support Resolved 10,000+ Issues</li>
          <li>✔ Trusted by 500+ Households and Businesses</li>
        </ul>
        <p>At GBX, our accomplishments reflect our commitment to going beyond expectations. Join our growing community of satisfied customers!</p>
      </section>

      <footer>
        <p>&copy; 2023 GBX Internet Service Provider. All rights reserved.</p>
      </footer>
    </>
  );
}
