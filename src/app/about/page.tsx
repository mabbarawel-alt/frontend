// pages/about.js (or pages/index.js if you want it as the homepage)
import Head from 'next/head';
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        
        <title>About GBX - Go Beyond eXpectation</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-2 flex justify-between items-center h-1">
          <div className="text-2xl font-bold text-white-600">
            <span className="text-4xl text-white-500">GBX</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-black-700 font-medium">
            <Link href="/" className="hover:text-red-500 transition duration-150">HOME</Link>
            <Link href="//" className="hover:text-red-500 transition duration-150">SERVICES</Link>
            <Link href="//" className="hover:text-red-500 transition duration-150">CONTACT</Link>
            <Link href="/about" className="hover:text-red-500 transition duration-150">ABOUT</Link>
            <Link href="/portfolio" className="hover:text-red-500 transition duration-150">PORTFOLIO</Link>
          </nav>
          <div className="hidden md:block space-x-4">
            <button className="">
              
            </button>
            <button className="">
              
            </button>
          </div>
        </div>
      </header>
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
        .card h3 {
          color: #d32f2f; /* Red card title */
          margin-bottom: 10px;
        }
        .card p {
          font-size: 1em;
        }
        .why-choose {
          background-color: #ffebee; /* Light red background */
          color: #333;
        }
        .why-choose ul {
          list-style-type: none;
          padding: 0;
          text-align: center;
        }
        .why-choose li {
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
          
          
      `
      
      }</style>
      
      <header>
        <h1>🌐 About GBX – Go Beyond eXpectation Internet Service Provider</h1>
        <p>At GBX, our mission is simple: to provide faster, stronger, and more reliable internet service for every home and business. We believe that connectivity is more than just a signal — it’s the foundation of communication, work, entertainment, and opportunity.</p>
        <p>GBX was built with the promise to Go Beyond eXpectation, delivering innovative solutions and exceptional customer service to our growing community. From high-speed P2P wireless connections to stable fiber internet and professional CCTV installations, we aim to make technology accessible, dependable, and affordable for all.</p>
      </header>

      <section id="vision">
        <h2 className="section-title">🚀 Our Vision</h2>
        <p>To become one of the most trusted internet service providers by delivering fast, reliable, and secure digital connectivity—empowering families, students, entrepreneurs, and professionals to succeed in everything they do.</p>
      </section>

      <section id="mission">
        <h2 className="section-title">🎯 Our Mission</h2>
        <ul>
          <li>Provide high-speed internet with stable and uninterrupted service.</li>
          <li>Expand coverage to underserved areas and remote communities.</li>
          <li>Offer affordable plans without compromising quality.</li>
          <li>Deliver excellent customer support with quick response and on-site assistance.</li>
          <li>Introduce modern technology solutions, including CCTV systems and computer services.</li>
        </ul>
      </section>

      <section id="offerings">
        <h2 className="section-title">💼 What We Offer</h2>
        <div className="card-container">
          <div className="card">
            <h3>📡 P2P Wireless Network</h3>
            <p>Ideal for areas without fiber lines. Experience speeds suitable for browsing, online classes, and daily use.</p>
          </div>
          <div className="card">
            <h3>🌐 Fiber Internet</h3>
            <p>Our fastest and most stable connection, designed for businesses, gamers, streamers, and heavy users.</p>
          </div>
          <div className="card">
            <h3>🎥 CCTV Installation Services</h3>
            <p>Protect your home or business with high-quality wired and wireless CCTV systems from trusted brands.</p>
          </div>
          <div className="card">
            <h3>🖥️ Computer Shop & Tech Services</h3>
            <p>From high-performance gaming PCs to workstation setups — we build, repair, and maintain computers based on your needs.</p>
          </div>
        </div>
      </section>

      <section id="why-choose" className="why-choose">
        <h2 className="section-title">❤️ Why Choose GBX?</h2>
        <ul>
          <li>✔ Consistent and reliable connection</li>
          <li>✔ Fast response and customer support</li>
          <li>✔ Affordable plans for every budget</li>
          <li>✔ Modern solutions customized for your location</li>
          <li>✔ Trusted by hundreds of households and small businesses</li>
        </ul>
        <p>At GBX, we don’t just provide internet… We connect people, support communities, and help you Go Beyond eXpectation.</p>
      </section>

      <footer>
        <p>&copy; 2023 GBX Internet Service Provider. All rights reserved.</p>
      </footer>
    </>
  );
}
