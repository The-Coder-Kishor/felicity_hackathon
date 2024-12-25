"use client"
import React from 'react';
import styles from './page.module.css';
// import { Helmet } from 'react-helmet';
import Timeline from './timeline'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li><a href="#landing" className={styles.navLink}>Home</a></li>
          <li><a href="#problem-statements" className={styles.navLink}>Problem Statements</a></li>
          <li><a href="#prizes" className={styles.navLink}>Prizes</a></li>
          <li><a href="#about" className={styles.navLink}>About</a></li>
          <li><a href="#timeline" className={styles.navLink}>Timeline</a></li>
          <li><a href="#sponsors" className={styles.navLink}>Sponsors</a></li>
          <li><a href="#contact" className={styles.navLink}>Contact Us</a></li>

        </ul>
      </nav>

      {/* Landing Page */}
      <section id="landing" className={styles.landingSection}>
        <h1 className={styles.title}>Felicity Hackathon</h1>
        <button className={styles.registerButton}>Register Now</button>
      </section>

      {/* Problem Statements Section */}
      <section id="problemstatements" className={styles.section}>
        <div className={styles.probbody}>
          <div className={styles.probcontainer}>
            <h1 className={styles.probh1}>PROBLEM STATEMENTS</h1>
            <div className={styles.problemsection}>
              <div className={`${styles.problemcard} ${styles.probcard1}`}>
                <div className={styles.probicon}>🔒</div>
                <h2 className={styles.problemtitle}>PROBLEM STATEMENT 1</h2>
                <p className={styles.problemdescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div className={`${styles.problemcard} ${styles.probcard2}`}>
                <div className={styles.probicon}>🌍</div>
                <h2 className={styles.problemtitle}>PROBLEM STATEMENT 2</h2>
                <p className={styles.problemdescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Prizes Section */}
      <section id="prizes" className={styles.section}>
        <h2 className={styles.sectionTitle}>Prizes</h2>
        <ul className={styles.prizesList}>
          <li className={styles.prizeItem}>
            <div className={styles.prizeIcon}>🥇</div>
            <div className={styles.prizeDetails}>
              <h3 className={styles.prizeTitle}>First Prize</h3>
              <p className={styles.prizeDescription}>5000 Cash Prize + Goodies</p>
            </div>
          </li>
          <li className={styles.prizeItem}>
            <div className={styles.prizeIcon}>🥈</div>
            <div className={styles.prizeDetails}>
              <h3 className={styles.prizeTitle}>Second Prize</h3>
              <p className={styles.prizeDescription}>3000 Cash Prize + Goodies</p>
            </div>
          </li>
          <li className={styles.prizeItem}>
            <div className={styles.prizeIcon}>🥉</div>
            <div className={styles.prizeDetails}>
              <h3 className={styles.prizeTitle}>Third Prize</h3>
              <p className={styles.prizeDescription}>2000 Cash Prize + Goodies</p>
            </div>
          </li>
        </ul>
      </section>


      {/* About Section */}
      <section id="about" className={styles.section}>
        <h2 className={styles.sectionTitle}>About the Hackathon</h2>
        <p className={styles.aboutText}>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac mi id sapien laoreet porttitor. Etiam et posuere purus. Nulla vitae rhoncus metus, non consequat est. Aenean venenatis turpis non tincidunt aliquet. Vestibulum luctus posuere arcu et semper. Sed quis pretium arcu. Nulla rhoncus laoreet metus sed sodales. Aenean ut velit sed elit lacinia varius. Mauris ut tincidunt odio. In hac habitasse platea dictumst. Phasellus porttitor, arcu nec vehicula porttitor, enim odio tristique risus, et convallis arcu arcu eu augue. Praesent quis lacinia dolor. Vivamus nulla enim, ornare non suscipit tempor, pellentesque eu eros. Suspendisse potenti.
        </p>

        <p className={styles.aboutText}>

          Pellentesque metus metus, lacinia eget aliquam interdum, auctor et nisl. Phasellus enim velit, sodales non dui at, pulvinar vehicula purus. Nunc luctus a justo at tincidunt. Integer magna tortor, iaculis eget dictum tempus, mattis sed lacus. Praesent interdum quam et elit aliquet molestie. Mauris at fermentum massa, sit amet ultricies leo. Quisque vulputate, erat a pellentesque interdum, orci diam suscipit est, sit amet malesuada leo lacus vel magna.
        </p>

        <p className={styles.aboutText}>

          Phasellus bibendum consectetur lacinia. Nulla suscipit tincidunt sodales. Mauris viverra nisl venenatis sapien commodo, quis ultricies sem ornare. Phasellus finibus nibh sed sapien finibus suscipit. Praesent suscipit consequat purus, in porta dui tristique at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla consequat sapien enim, in ullamcorper tellus posuere non.
        </p>
      </section>

      {/* Timeline Section */}
      <Timeline />


      {/* Sponsors Section */}
      <section id="sponsors" className={styles.section}>
        <h2 className={styles.sectionTitle}>Sponsors</h2>
        <div className={styles.sponsorContainer}>
          <div className={styles.sponsorCard}>
            <img src="/path/to/logo1.png" alt="Sponsor 1 Logo" className={styles.sponsorLogo} />
            <div className={styles.sponsorDetails}>
              <h3 className={styles.sponsorName}>Sponsor 1</h3>
              <p className={styles.sponsorDescription}>Description of Sponsor 1.</p>
            </div>
          </div>
          <div className={styles.sponsorCard}>
            <img src="/path/to/logo2.png" alt="Sponsor 2 Logo" className={styles.sponsorLogo} />
            <div className={styles.sponsorDetails}>
              <h3 className={styles.sponsorName}>Sponsor 2</h3>
              <p className={styles.sponsorDescription}>Description of Sponsor 2.</p>
            </div>
          </div>
          {/* Add more sponsors as needed */}
        </div>
      </section>

      {/* Socials Section */}
      <section id="contact" className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <div className={styles.socialContainer}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <div className={styles.iconContainer}>
              <img src="./twitter_logo.png" alt="Twitter" className={styles.socialIcon} />
            </div>
            <span className={styles.username}>@YourTwitterHandle</span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <div className={styles.iconContainer}>
              <img src="./facebook_logo.png" alt="Facebook" className={styles.socialIcon} />
            </div>
            <span className={styles.username}>@YourFacebookHandle</span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <div className={styles.iconContainer}>
              <img src="./instagram_logo.png" alt="Instagram" className={styles.socialIcon} />
            </div>
            <span className={styles.username}>@YourInstagramHandle</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <div className={styles.iconContainer}>
              <img src="./linkedin_logo.png" alt="LinkedIn" className={styles.socialIcon} />
            </div>
            <span className={styles.username}>@YourLinkedInHandle</span>
          </a>
        </div>
      </section>

    </div>
  );
}