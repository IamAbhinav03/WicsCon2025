import { useState } from "react";
const speakersData = {
  "Day 1: Workshops": [
    {
      id: 1,
      name: "Dr. Emma Reynolds",
      role: "CTO, Future Tech Industries",
      topic: "Building Resilient AI Systems",
      image: `/api/placeholder/400/400`
    },
    {
      id: 2,
      name: "Prof. Alan Turing",
      role: "Professor, University of Computing",
      topic: "Quantum Computing 101",
      image: `/api/placeholder/400/400`
    },
    {
      id: 3,
      name: "Ms. Ada Lovelace",
      role: "Software Engineer, CodeMasters",
      topic: "The Evolution of Programming Languages",
      image: `/api/placeholder/400/400`
    }
  ],
  "Day 2: Keynotes": [
    {
      id: 4,
      name: "Mr. John Doe",
      role: "CEO, Innovatech",
      topic: "The Future of Technology",
      image: `/api/placeholder/400/400`
    },
    {
      id: 5,
      name: "Ms. Grace Hopper",
      role: "Rear Admiral, U.S. Navy",
      topic: "Pioneering Computer Science",
      image: `/api/placeholder/400/400`
    },
    {
      id: 6,
      name: "Mr. Elon Musk",
      role: "CEO, SpaceX",
      topic: "Space Exploration and Technology",
      image: `/api/placeholder/400/400`
    }
  ],
  "Day 3: Panels": [
    {
      id: 7,
      name: "Ms. Jane Smith",
      role: "CTO, TechWorld",
      topic: "Diversity in Tech Panels",
      image: `/api/placeholder/400/400`
    },
    {
      id: 8,
      name: "Mr. Tim Berners-Lee",
      role: "Inventor of the World Wide Web",
      topic: "The Web: Past, Present, and Future",
      image: `/api/placeholder/400/400`
    },
    {
      id: 9,
      name: "Ms. Sheryl Sandberg",
      role: "COO, Facebook",
      topic: "Leadership in Tech",
      image: `/api/placeholder/400/400`
    }
  ]
};

const App = () => {
  const [activeDay, setActiveDay] = useState<string>(Object.keys(speakersData)[0]);

  return (
    <div className="font-sans text-gray-800">
      {/* Navigation Bar */}
      <nav className="bg-white bg-opacity-95 shadow-sm border-b">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <div className="text-red-700 font-bold text-2xl">WICSCON</div>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a className="hover:text-red-600 transition-colors">About</a>
            <a className="hover:text-red-600 transition-colors">Highlights</a>
            <a className="hover:text-red-600 transition-colors">Speakers</a>
            <a className="hover:text-red-600 transition-colors">Sponsors</a>
            <a className="hover:text-red-600 transition-colors">FAQs</a>
          </div>
          <button className="bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-4 rounded-md">
            Register Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-red-900">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-800/80"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/api/placeholder/1920/1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Empowering Innovation Through Diversity
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Join us for the annual conference where women in technology connect,
            inspire, and transform the future.
          </p>
          <button className="text-lg px-8 py-3 rounded-full bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white font-medium shadow-lg">
            Register Now
          </button>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-red-700">
                About WiCS & WICSCON
              </h2>
              <p className="text-lg mb-6">
                The Women in Computing Society (WiCS) is a global community
                dedicated to increasing gender diversity in technology. We
                empower women through mentorship, education, and networking
                opportunities.
              </p>
              <button className="text-red-700 border border-red-700 hover:bg-red-50 py-2 px-4 rounded-md flex items-center">
                Learn More About Our Mission
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-xl">
                <div className="bg-gray-100 aspect-video flex items-center justify-center">
                <img
                  src="/BannerImage.jpg"
                  alt="Women in Tech Conference"
                  className="w-full h-full object-cover"
                />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section Preview */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-red-700">
            Last Year's Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="p-6">
                <div className="text-5xl font-bold text-red-700 mb-4">
                  2.5K+
                </div>
                <div className="text-xl">Attendees from over 40 countries</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="p-6">
                <div className="text-5xl font-bold text-red-700 mb-4">48</div>
                <div className="text-xl">Workshops & technical sessions</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="p-6">
                <div className="text-5xl font-bold text-red-700 mb-4">92%</div>
                <div className="text-xl">
                  Attendees reported valuable networking
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Speakers Preview */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center text-red-700">
                        Speakers & Events
                    </h2>

                    <div className="flex mb-8 border-b">
                        {Object.keys(speakersData).map((day) => (
                            <button
                                key={day}
                                onClick={() => setActiveDay(day)}
                                className={`px-4 py-2 font-medium ${
                                    activeDay === day
                                        ? "text-red-700 border-b-2 border-red-700"
                                        : "text-gray-500"
                                }`}
                            >
                                {day}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {speakersData[activeDay].map((speaker) => (
                            <div
                                key={speaker.id}
                                className="overflow-hidden transition-all duration-300 hover:shadow-lg border rounded-lg"
                            >
                                <div className="aspect-square relative overflow-hidden bg-gray-100">
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-1">
                                        {speaker.name}
                                    </h3>
                                    <p className="text-red-700 mb-3">
                                        {speaker.role}
                                    </p>
                                    <p className="text-sm text-gray-600 mb-4">
                                        {speaker.topic}
                                    </p>
                                    <button className="w-full border border-gray-300 py-2 px-4 rounded-md">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

      {/* Sponsors Preview */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-red-700">
            Sponsors & Partners
          </h2>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-center">
              Platinum Sponsors
            </h3>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 w-36 h-36 flex items-center justify-center"
                >
                  <img
                    src={`/api/placeholder/120/120`}
                    alt={`Sponsor ${index}`}
                    className="max-w-full max-h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-100 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-red-700">
              Interested in Sponsoring?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Join our diverse community of sponsors and connect with the
              brightest talent and industry leaders in tech.
            </p>
            <button className="bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-6 rounded-md">
              Contact Our Sponsorship Team
            </button>
          </div>
        </div>
      </section>

      {/* Footer Preview */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">WICSCON</h3>
              <p className="mb-4 text-gray-300">
                The premier conference for women in computing and technology.
              </p>
              <div className="flex space-x-4">
                <a className="text-gray-300 hover:text-white" href="https://www.facebook.com/ashokawics/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-300 hover:text-white" href="https://x.com/wics_ashoka">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a className="text-gray-300 hover:text-white" href="https://www.instagram.com/wics.ashoka/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a className="text-gray-300 hover:text-white" href="https://www.linkedin.com/company/wics-ashoka-university">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a className="text-gray-300 hover:text-white">About WiCS</a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-white">Speakers</a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-white">Schedule</a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-white">FAQs</a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
              <p className="mb-4 text-gray-300">
                Subscribe to our newsletter for updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 px-4 py-2 rounded-l-md flex-1"
                />
                <button className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-400 flex justify-between">
            <div>© 2025 Women in Computing Society</div>
            <div className="flex space-x-4">
              <a className="hover:text-white">Privacy</a>
              <a className="hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
