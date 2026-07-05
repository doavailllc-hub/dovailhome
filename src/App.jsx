import React, { useMemo, useState } from "react";
import "./App.css";

import {
  Search,
  Stethoscope,
  Home,
  Globe2,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
const services = [
  {
    name: "Dovail Health",
    description: "Doctor booking, appointments and healthcare services.",
    url: "https://health.dovail.com",
    icon: Stethoscope,
    color: "#0c6fb2",
    status: "Live",
  },
  {
    name: "Dovail Stay",
    description: "Stays, trips, hosts and guest booking platform.",
    url: "https://stay.dovail.com",
    icon: Home,
    color: "#7e4ff5",
    status: "Live",
  },
  {
    name: "More Services",
    description: "Future Dovail products will appear here.",
    url: "#",
    icon: Globe2,
    color: "#df9d21",
    status: "Coming soon",
    disabled: true,
  },
];

export default function App() {
  const [search, setSearch] = useState("");

  const filteredServices = useMemo(() => {
    return services.filter((service) =>
      `${service.name} ${service.description}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const openService = (service) => {
    if (service.disabled) return;
    window.location.href = service.url;
  };

  return (
    <main className="page">
      <header className="header">
        <div className="brand">
          <div className="brandLogo">D</div>
          <span>Dovail</span>
        </div>

        <nav>
          <a href="mailto:business@dovail.com">Business</a>
        </nav>
      </header>

      <section className="hero">
        <div className="badge">
          <Sparkles size={15} />
          Dovail Products
        </div>

        <h1>Dovail</h1>

        <p className="subtitle">
          Search and open all Dovail services from one simple homepage.
        </p>

        <div className="searchBox">
          <Search size={22} />
          <input
            type="text"
            placeholder="Search Dovail Health, Dovail Stay..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid">
          {filteredServices.map((service) => {
            const Icon = service.icon;

            return (
              <button
                key={service.name}
                className={`card ${service.disabled ? "disabled" : ""}`}
                onClick={() => openService(service)}
              >
                <div
                  className="iconBox"
                  style={{
                    color: service.color,
                    backgroundColor: `${service.color}16`,
                  }}
                >
                  <Icon size={30} />
                </div>

                <div>
                  <h2>{service.name}</h2>
                  <p>{service.description}</p>
                </div>

                <div className="cardFooter">
                  <span>
                    <ShieldCheck size={14} />
                    {service.status}
                  </span>

                  {!service.disabled && <ArrowUpRight size={19} />}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Dovail</span>
        <span>business@dovail.com</span>
      </footer>
    </main>
  );
}