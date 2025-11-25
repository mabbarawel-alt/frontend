import Link from "next/link";
import { MoveRight } from 'lucide-react';
import Image from "next/image";

// --------------------
// Mock Services Data
// --------------------
const services = [
  { 
    title: "P2P NETWORK", 
    icon: "📡",
    points: ["Wireless Network", "Up to 10 MPBS", "Unlimited Data"],
    href: "/service"
  },
  { 
    title: "FIBER NETWORK", 
    icon: "🌐", 
    points: ["Wired Network", "Up to 30 MBPS", "Unlimited Data"],
    href: "/service"
  },
  { 
    title: "CCTV INSTALLATION", 
    icon: "🎥", 
    points: ["Wireless CCTV", "Wired CCTV", "Dahua, Hikvision, Tplink & V380"],
    href: "/service"
  },
  { 
    title: "COMPUTER SHOP", 
    icon: "🖥️", 
    points: ["AMD 7000 Series", "RTX 4060 Series", "120hz Monitor"],
    href: "/service"
  },
];

// --------------------
// Component for a Service Card
// --------------------


export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/70 via-white to-pink-50/70 -z-10"></div>
      
      {/* -------------------- 
        1. NAVIGATION BAR
      -------------------- */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <div className="text-2xl font-bold text-green-600">
            <span className="text-4xl text-red-500">GBX</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <Link href="/" className="hover:text-red-500 transition duration-150">HOME</Link>
            <Link href="#service" className="hover:text-red-500 transition duration-150">SERVICES</Link>
            <Link href="#contact" className="hover:text-red-500 transition duration-150">CONTACT</Link>
            <Link href="/about" className="hover:text-red-500 transition duration-150">ABOUT</Link>
            <Link href="/portfolio" className="hover:text-red-500 transition duration-150">PORTFOLIO</Link>
          </nav>
          <div className="hidden md:block space-x-4">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold shadow-lg px-4 py-2 rounded">
              Sign Up
            </button>
            <button className="text-red-500 border border-red-500 hover:bg-red-50 px-4 py-2 rounded">
              Log In
            </button>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* -------------------- 
          2. HERO SECTION
        -------------------- */}
        <section className="flex flex-col md:flex-row items-center pt-5 pb-16 relative overflow-hidden">
          
          {/* Text Content (Left Side) */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 z-10">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-black leading-tight">
              <span className="text-red-500">G</span>o <span className="text-red-500">B</span>eyond <span className="text-black">e<span className="text-red-500">X</span>pectation</span>
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-700 mt-1">
              INTERNET SERVICE PROVIDER
            </h2>
            <p className="text-lg text-gray-600 mt-1 max-w-md mx-auto md:mx-0">
              It's time for an internet connection that works as hard as you do.
            </p>
            <div className="mt-8 space-x-4">
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold shadow-lg px-6 py-3 rounded text-lg">
                Apply Now
              </button>
              <button className="border border-red-500 text-red-500 hover:bg-red-50 px-6 py-3 rounded text-lg">
                Let's Talk
              </button>
            </div>
          </div>
          
          {/* Image (Right Side) - Updated with Next.js Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end z-10 relative">
            <Image 
              src="/makmak1.jpg" 
              alt="Mark Barawel - INSTALLER" 
              width={600}
              height={400}
              className="rounded-lg shadow-2xl max-w-full h-auto object-cover"
              priority
            />
          </div>
          
          {/* Abstract circles/blobs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        </section>
        
        <hr className="my-16" />

        {/* -------------------- 
          3. SERVICES SECTION
        -------------------- */}
        

         <hr className="my-16" />

        {/* -------------------- 
          4. Call to Action
        -------------------- */}
        <section id="contact" className="py-16">
          <div className="flex flex-col md:flex-row items-center bg-white/70 backdrop-blur-md rounded-lg p-10 shadow-xl border border-gray-100">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <img 
                src="/jietech.png" 
                alt="Mark Pointing" 
                className="rounded-lg max-w-full h-auto" 
              />
            </div>
            <div className="md:w-2/3 md:pl-10 text-center md:text-left">
              <h3 className="text-3xl font-extrabold text-gray-900">
                CONTACT US
              </h3>
              <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-700">
                <p className="flex items-center">📞 09912830262</p>
                <p className="flex items-center">📩 markfreelancer30@gmail.com</p>
                <p className="flex items-center">📍 Zone 6, Belen, Calabanga, Camarines Sur</p>
                <p className="flex items-center">📩 markanthonybarawel01@gmail.com</p>
              </div>
              <div className="mt-8 space-x-4">
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                  <Link href="/contact" className="text-white">Read more</Link>
                </button>
                <button className="border border-red-500 text-red-500 hover:bg-red-50 px-4 py-2 rounded">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </section>
        
      </main>
      
      <footer className="bg-gray-100 py-8 text-center text-gray-600">
        <p>&copy; 2023 GBX Internet Service Provider. All rights reserved.</p>
      </footer>
    </div>
  );
}
