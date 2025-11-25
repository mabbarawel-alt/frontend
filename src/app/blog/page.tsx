// pages/blog.js (or pages/index.js if you want it as the homepage)
import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - GBX Internet Service Provider</title>
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
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }
        .blog-post {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .blog-post img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 20px;
        }
        .blog-post h3 {
          color: #d32f2f; /* Red title */
          margin-bottom: 10px;
          font-size: 1.5em;
        }
        .blog-post p {
          font-size: 1em;
          margin-bottom: 10px;
        }
        .post-meta {
          font-size: 0.9em;
          color: #666;
          font-style: italic;
          margin-bottom: 15px;
        }
        .read-more {
          color: #d32f2f;
          text-decoration: none;
          font-weight: bold;
        }
        .read-more:hover {
          text-decoration: underline;
        }
        .featured-post {
          background-color: #ffebee; /* Light red background */
          color: #333;
          border-radius: 15px;
          padding: 60px 20px;
        }
        .featured-post .blog-grid {
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        }
        .categories {
          background-color: #fafafa; /* Subtle gray background */
          text-align: center;
        }
        .categories ul {
          list-style: none;
          padding: 0;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .categories li {
          font-size: 1.2em;
          color: #d32f2f;
          cursor: pointer;
        }
        .categories li:hover {
          text-decoration: underline;
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
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .categories ul {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
      <header>
        <h1>📝 GBX Blog - Insights & Updates</h1>
        <p>Stay informed with the latest news, tips, and insights from GBX. Discover how we're revolutionizing internet connectivity and technology solutions.</p>
      </header>

      <section id="categories" className="categories">
        <h2 className="section-title">📂 Categories</h2>
        <ul>
          <li>Internet Tips</li>
          <li>Technology News</li>
          <li>Customer Stories</li>
          <li>Industry Updates</li>
        </ul>
      </section>

      <section id="featured-posts" className="featured-post">
        <h2 className="section-title">🌟 Featured Posts</h2>
        <div className="blog-grid">
          <div className="blog-post">
            <img src="https://via.placeholder.com/400x250/ff0000/ffffff?text=Future+of+Internet" alt="Future of Internet" />
            <h3>The Future of High-Speed Internet in Rural Areas</h3>
            <div className="post-meta">Published: October 15, 2023 | Author: GBX Team</div>
            <p>Explore how advancements in wireless technology are bridging the digital divide, bringing reliable internet to underserved communities.</p>
            <a href="#" className="read-more">Read More</a>
          </div>
          <div className="blog-post">
            <img src="https://via.placeholder.com/400x250/ff0000/ffffff?text=Security+Tips" alt="Security Tips" />
            <h3>Top 10 Tips for Securing Your Home Network</h3>
            <div className="post-meta">Published: September 28, 2023 | Author: GBX Team</div>
            <p>Learn essential steps to protect your Wi-Fi and devices from cyber threats, ensuring a safe online experience for your family.</p>
            <a href="#" className="read-more">Read More</a>
          </div>
        </div>
      </section>

      <section id="recent-posts">
        <h2 className="section-title">📰 Recent Posts</h2>
        <div className="blog-grid">
          <div className="blog-post">
            <img src="https://via.placeholder.com/350x250/ff0000/ffffff?text=Fiber+vs+Wireless" alt="Fiber vs Wireless" />
            <h3>Fiber Internet vs. Wireless: Which is Right for You?</h3>
            <div className="post-meta">Published: August 10, 2023 | Author: GBX Team</div>
            <p>A comparison of fiber and wireless options, helping you choose the best internet solution for your needs.</p>
            <a href="#" className="read-more">Read More</a>
          </div>
          <div className="blog-post">
            <img src="https://via.placeholder.com/350x250/ff0000/ffffff?text=CCTV+Guide" alt="CCTV Guide" />
            <h3>Ultimate Guide to Choosing CCTV Systems</h3>
            <div className="post-meta">Published: July 22, 2023 | Author: GBX Team</div>
            <p>Everything you need to know about selecting and installing CCTV for home or business security.</p>
            <a href="#" className="read-more">Read More</a>
          </div>
          <div className="blog-post">
            <img src="https://via.placeholder.com/350x250/ff0000/ffffff?text=Gaming+Setup" alt="Gaming Setup" />
            <h3>Building the Perfect Gaming Setup with GBX</h3>
            <div className="post-meta">Published: June 15, 2023 | Author: GBX Team</div>
            <p>Tips on optimizing your gaming experience with high-speed internet and custom PC builds.</p>
            <a href="#" className="read-more">Read More</a>
          </div>
          <div className="blog-post">
            <img src="https://via.placeholder.com/350x250/ff0000/ffffff?text=Community+Impact" alt="Community Impact" />
            <h3>How GBX is Impacting Local Communities</h3>
            <div className="post-meta">Published: May 5, 2023 | Author: GBX Team</div>
            <p>Stories of how our services have empowered families, students, and businesses in remote areas.</p>
            <a href="#" className="read-more">Read More</a>
          </div>
          <div className="blog-post">
            <img src="https://via.placeholder.com/350x250/ff0000/ffffff?text=Tech+Trends" alt="Tech Trends" />
            <h3>Emerging Tech Trends in Internet Services</h3>
            <div className="post-meta">Published: April 18, 2023 | Author: GBX Team</div>
            <p>Stay ahead with insights on 5G, IoT, and future innovations shaping connectivity.</p>
            <a href="#" className="read-more">Read More</a>
          </div>
          <div className="blog-post">
            <img src="https://via.placeholder.com/350x250/ff0000/ffffff?text=Customer+Testimonial" alt="Customer Testimonial" />
            <h3>Customer Spotlight: A Success Story</h3>
            <div className="post-meta">Published: March 30, 2023 | Author: GBX Team</div>
            <p>Hear from a satisfied customer about their experience with GBX's fiber installation.</p>
            <a href="#" className="read-more">Read More</a>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2023 GBX Internet Service Provider. All rights reserved.</p>
      </footer>
    </>
  );
}
