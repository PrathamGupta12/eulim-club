import { ReactNode } from "react";
import Navbar from "./Navbar";
import InfiniteGrid from "./InfiniteGrid";
import "../styles/PageLayout.css";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="page-wrapper">
      <InfiniteGrid />
      <Navbar />
      <main className="main-content">{children}</main>
      <footer className="page-footer">
        <div className="footer-content">
          <span className="footer-brand">EULIM Science Club</span>
          <p className="footer-copy">
            © {new Date().getFullYear()} EULIM Science Club — School of Sciences. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
