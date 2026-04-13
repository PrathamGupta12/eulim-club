import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import eulimLogo from "@/assets/eulim-logo.jpeg";
import JoinUsDialog from "./JoinUsDialog";
import "../styles/Navbar.css";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "History", to: "/history" },
  { label: "Activities", to: "/activities" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
  { label: "Sponsor Us", to: "/sponsors" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={eulimLogo} alt="Eulim Science Club" className="navbar-logo-img" />
            <span className="navbar-logo-text">EULIM <span>Science Club</span></span>
          </Link>

          <div className="navbar-links">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`navbar-link ${
                  location.pathname === l.to ? "navbar-link-active" : "navbar-link-inactive"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setJoinOpen(true)}
            className="navbar-join-btn"
          >
            Join Us
          </button>

          <button onClick={() => setOpen(!open)} className="navbar-mobile-toggle">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="navbar-mobile-menu"
            >
              <div className="navbar-mobile-links">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`navbar-link ${
                      location.pathname === l.to ? "navbar-link-active" : "navbar-link-inactive"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
                <button
                  onClick={() => { setOpen(false); setJoinOpen(true); }}
                  className="navbar-mobile-join-btn"
                >
                  Join Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <JoinUsDialog open={joinOpen} onOpenChange={setJoinOpen} />
    </>
  );
}
