import React, { useMemo, useState } from "react";
import "./App.css";
import {
  Search,
  Stethoscope,
  Home,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    name: "Dovail Health",
    description: "Book doctors, appointments and healthcare services.",
    url: "https://health.dovail.com",
    icon: Stethoscope,
    color: "#0c6fb2",
  },
  {
    name: "Dovail Stay",
    description: "Find stays, trips and host travel experiences.",
    url: "https://stay.dovail.com",
    icon: Home,
    color: "#7e4ff5",
  },
];

export default function App() {
  const [search, setSearch] = useState("");

  const filteredServices = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) return services;

    return services.filter((service) =>
      `${service.name} ${service.description}`.toLowerCase().includes(keyword)
    );
  }, [search]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (filteredServices.length === 1) {
      window.location.href = filteredServices[0].url;
    }
  };

  return (
    <main className="page">
      <header className="topNav">
        <div />

        <nav className="navLinks" aria-label="Dovail navigation">
          <a href="https://health.dovail.com">Health</a>
          <a href="https://stay.dovail.com">Stay</a>
          <a href="mailto:business@dovail.com">Business</a>
        </nav>
      </header>

      <section className="hero">
        <img src="/logo.png" alt="Dovail" className="centerLogo" />

        <form className="searchBox" onSubmit={handleSearchSubmit}>
          <Search size={22} />
          <input
            type="search"
            placeholder="Search Dovail services"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <div className="quickLinks">
          <a href="https://health.dovail.com">Dovail Health</a>
          <a href="https://stay.dovail.com">Dovail Stay</a>
        </div>

        <div className="serviceGrid">
          {filteredServices.map((service) => {
            const Icon = service.icon;

            return (
              <a
                key={service.name}
                href={service.url}
                className="serviceCard"
                style={{ "--service-color": service.color }}
              >
                <div className="serviceIcon">
                  <Icon size={28} />
                </div>

                <div>
                  <h2>{service.name}</h2>
                  <p>{service.description}</p>
                </div>

                <span className="openLink">
                  Open <ArrowUpRight size={16} />
                </span>
              </a>
            );
          })}
        </div>

        <div className="comingSoon">
          <Sparkles size={16} />
          More Dovail services coming soon
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} Dovail · business@dovail.com
      </footer>
    </main>
  );
}