import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <div className="nav-container">
        <div className="branding">
          <h1><i><b>AQSA</b></i></h1>
          
        </div>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contact-us">Contact us</Link></li>
            <div className="relative-group">
              <li><Link href="/about-us">About us &#9662;</Link></li>
              <ul>
                <li><Link href="/about-us/our-goal">Our Goal</Link></li>
                <li><Link href="/about-us/our-mission">Our Mission</Link></li>
              </ul>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
