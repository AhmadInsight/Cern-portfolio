import logo from "../images/3-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";

/**
 * Modern, sticky, glassy Navbar with:
 * - Accessible brand link
 * - Image dimension hints to prevent CLS
 * - Mobile menu with ESC/Backdrop/Outside-click close
 * - Scroll-aware subtle shadow
 * - React-Scroll links with offsets
 */
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  // Elevate nav on scroll a bit for depth
  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        btnRef.current &&
        !btnRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const navClasses =
    "navbar navbar-expand-lg fixed-top rounded-pill-md modern-navbar" +
    (elevated ? " is-elevated" : "");

  return (
    <nav className={navClasses} aria-label="Primary">
      <div className="container modern-navbar__inner">
        {/* Brand */}
        <a className="navbar-brand" href="/" aria-label="Go to homepage">
          <img
            src={logo}
            alt="Ahmad Hassan logo"
            className="logo"
            width={128}
            height={32}
            loading="eager"
            decoding="async"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = "none";
              const sibling = target.nextElementSibling as HTMLElement | null;
              if (sibling) sibling.style.display = "inline";
            }}
          />
          <span className="sr-only" style={{ display: "none" }}>
            Ahmad Hassan
          </span>
        </a>

        {/* Toggler (custom + accessible) */}
        <button
          ref={btnRef}
          className="navbar-toggler toggler-btn modern-navbar__toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((v) => !v)}
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>

        {/* Backdrop via pseudo-element: no extra DOM node; click on host closes */}
        <div
          className={"modern-navbar__backdrop-host" + (open ? " is-open" : "")}
          aria-hidden={!open}
          onClick={() => open && setOpen(false)}
        />

        {/* Menu */}
        <div
          id="navbarSupportedContent"
          ref={menuRef}
          className={
            "collapse navbar-collapse mobile-navbar-menu modern-navbar__menu" + (open ? " show" : "")
          }
          role="menu"
        >
          <ul className="navbar-nav ms-auto modern-navbar__list">
            <li className="nav-item">
              <Link
                smooth={true}
                duration={500}
                to="home"
                spy={true}
                hashSpy={true}
                className="nav-link"
                activeClass="active"
                offset={-100}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                duration={500}
                to="about"
                spy={true}
                hashSpy={true}
                activeClass="active"
                offset={-100}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                duration={500}
                to="services"
                spy={true}
                hashSpy={true}
                activeClass="active"
                offset={-100}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                duration={500}
                to="contacts"
                spy={true}
                hashSpy={true}
                activeClass="active"
                offset={-100}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                Contacts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                duration={500}
                to="portfolio"
                spy={true}
                hashSpy={true}
                activeClass="active"
                offset={-100}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                Websites
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
