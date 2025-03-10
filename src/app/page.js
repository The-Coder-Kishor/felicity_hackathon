"use client";
import React from "react";
import styles from "./page.module.css";
import { useState } from "react";
// import { Helmet } from 'react-helmet';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaCertificate,
  FaSquareFull,
  FaTimes,
} from "react-icons/fa";
import Timeline from "./timeline";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const isProduction = process.env.NEXT_PUBLIC_MODE === "production";
export const basePath = isProduction ? "/hackathon" : "";

const sponsorsData = [
  {
    name: "Virtual Labs (VLabs)",
    logo: `${basePath}/vlabs_logo.png`,
    page: "https://vlab.co.in",
    introduction:
      "Virtual Labs (VLabs) is an initiative by the Ministry of Education, Government of India, under the National Mission on Education through ICT (NMEICT). Started by IIT Delhi in collaboration with 12 premier institutes, it provides remote access to laboratory experiments in science and engineering, bridging the gap between theoretical knowledge and practical application. It benefits learners who lack quality labs due to financial, geographical, or infrastructural constraints, offering a scalable, flexible, and safe environment for experimentation.",
    highlights: [
      "Offers 150+ labs with over 1,500 experiments for undergraduate and postgraduate levels.",
      "Attracted over 16 million unique users and 120+ million pageviews since 2020.",
      "Supports multilingual content.",
    ],
  },
  {
    name: "VLEAD",
    logo: `${basePath}/vlead-logo.png`,
    page: "https://vlead.vlabs.ac.in",
    introduction:
      "VLEAD (Virtual Labs Engineering Architecture and Design), based at IIIT Hyderabad, drives the technical development of VLabs by ensuring robust infrastructure, scalability, and innovation.",
    highlights: [
      "Provides infrastructure to support thousands of concurrent users.",
      "Collaborates with lab developers to integrate advanced technologies.",
      "Ensures scalability and security for exponential growth.",
    ],
  },
];

const SponsorPopup = ({ isOpen, onClose, sponsor }) => {
  if (!isOpen) return null;

  const [vlabs, vlead] = sponsorsData;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        <div className={styles.popupContent}>
          <div className={styles.logoSection}>
            <div className={styles.logoWrapper}>
              <img
                src={vlabs.logo}
                alt={vlabs.name}
                className={styles.popupLogo}
              />
            </div>
            <div className={styles.logoWrapper}>
              <img
                src={vlead.logo}
                alt={vlead.name}
                className={styles.popupLogo}
              />
            </div>
          </div>

          <div className={styles.popupDescription}>
            {/* VLABS Section */}
            <div className={styles.orgSection}>
              <h3 className={styles.orgTitle}>{vlabs.name}</h3>
              <div className={styles.introduction}>
                {vlabs.introduction}
              </div>
              <div className={styles.highlights}>
                <h4 className={styles.highlightsTitle}>Key Highlights</h4>
                <ul className={styles.highlightsList}>
                  {vlabs.highlights.map((highlight, index) => (
                    <li key={`vlabs-${index}`} className={styles.highlightItem}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <h3 className={styles.orgLinkText}>Visit VLabs at: <a href="https://vlab.co.in" target="_blank" className={styles.orgLink}>https://vlab.co.in</a></h3>
            </div>

            {/* VLEAD Section */}
            <div className={styles.orgSection}>
              <h3 className={styles.orgTitle}>{vlead.name}</h3>
              <div className={styles.introduction}>
                {vlead.introduction}
              </div>
              <div className={styles.highlights}>
                <h4 className={styles.highlightsTitle}>Key Highlights</h4>
                <ul className={styles.highlightsList}>
                  {vlead.highlights.map((highlight, index) => (
                    <li key={`vlead-${index}`} className={styles.highlightItem}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <h3 className={styles.orgLinkText}>Visit VLEAD at: <a href="https://vlead.vlabs.ac.in" target="_blank" className={styles.orgLink}>https://vlead.vlabs.ac.in</a></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [isSponsorPopupOpen, setSponsorPopupOpen] = useState(null);

  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <i className={`fas fa-bars ${styles.hamburgerIcon}`}></i>
        </div>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
          <li>
            <a href="#landing" className={styles.navLink} onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a
              href="#problem-statements"
              className={styles.navLink}
              onClick={closeMenu}
            >
              Problem Statements
            </a>
          </li>
          <li>
            <a href="#prizes" className={styles.navLink} onClick={closeMenu}>
              Prizes
            </a>
          </li>
          <li>
            <a href="#about" className={styles.navLink} onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#timeline" className={styles.navLink} onClick={closeMenu}>
              Timeline
            </a>
          </li>
          <li>
            <a href="#sponsors" className={styles.navLink} onClick={closeMenu}>
              Sponsors
            </a>
          </li>
          <li>
            <a href="#faq" className={styles.navLink} onClick={closeMenu}>
              FAQs
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.navLink} onClick={closeMenu}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      /* Landing Page */
        <section id="landing" className={styles.landingSection}>
          <div className={styles.leftSection}>
            <div className={styles.title}>
          <img
            src={`${basePath}/felicity-logo-light.png`}
            className={styles.titleImage}
          />
          <h1 className={styles.title}>Hackathon</h1>
          <a href="https://unstop.com/o/iG2dMn0?lb=wT7umzSn" target="_blank">
            <button className={styles.registerButton}>
              Register Now for Free
            </button>
          </a>
            </div>
            <div className={styles.logosLanding}>
          <a href="https://vlab.co.in/" target="_blank">
            <img src={`${basePath}/vlabs_logo.png`} className={styles.logoLanding} />
          </a>
          <a href="https://vlead.vlabs.ac.in/" target="_blank">
            <img src={`${basePath}/vlead-logo.png`} className={styles.logoLanding2} />
          </a>
            </div>
          </div>
          <div className={styles.rightSection}>
            <img src={`${basePath}/hack_bg.png`} alt="Hackathon" className={styles.image} />
          </div>
        </section>

        {/* Problem Statements Section */}
      <section id="problem-statements" className={styles.section}>
        <div className={styles.probbody}>
          <div className={styles.probcontainer}>
            <h1 className={`${styles.sectionTitle} ${styles.probsTitle}`}>
              Problem Statements
            </h1>
            <div className={styles.problemsection}>
              <div className={styles.problemCards}>
                <div className={`${styles.problemcard} ${styles.probcard1}`}>
                  <img
                    src={`${basePath}/ui-ux-image.avif`}
                    className={styles.probCardImage}
                  />
                  <h2 className={styles.problemtitle}>PROBLEM STATEMENT 1</h2>
                  <p className={styles.problemdescription}>
                    Design an aesthetic and interactive user interface for
                    Virtual Labs platform, serving over 17 million users.
                    Explore cutting edge browser and mobile OS features to help
                    users have a smooth and intuitive experience with our
                    platform.
                  </p>
                </div>
                <div className={`${styles.problemcard} ${styles.probcard2}`}>
                  <img
                    src={`${basePath}/content-creation.webp`}
                    className={styles.probCardImage}
                  />
                  <h2 className={styles.problemtitle}>PROBLEM STATEMENT 2</h2>
                  <p className={styles.problemdescription}>
                    Take on the challenge of designing innovative solutions that
                    streamline and scale the creation of high-quality Virtual
                    Labs experiments. Leverage the use of AI/ML,
                    low-code/no-code platforms, and other unique ideas to
                    enhance content generation speed, and scalability, while
                    maintaining content quality.
                  </p>
                </div>
              </div>
              <div className={styles.problemDocDiv}>
                Find detailed problem statements{" "}
                <a
                  href={`${basePath}/Virtual%20Labs%20Felicity%20Hackathon-v2.pdf`}
                  target="_blank"
                  className={styles.linkURL}
                >
                  here
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className={styles.section}>
        <h2 className={styles.sectionTitle}>Prizes</h2>
        <section className={styles.prizesSection}>
          <div className={styles.prizesContainer}>
            {/* Total Prize Pool */}
            <div className={styles.prizesTotalWrapper}>
              <h2 className={styles.prizesTotalAmount}>₹3,00,000</h2>
              <p className={styles.prizesTotalText}>Total Prize Pool</p>
            </div>

            {/* Prize Distribution Info */}
            <div className={styles.prizesDistributionInfo}>
              <p className={styles.prizesDistributionText}>
                🎯 Two Problem Statements - Two sets of winners.
              </p>
              <div className={styles.prizesDivider}></div>
            </div>

            {/* Prize Cards */}
            <div className={styles.prizesCardGrid}>
              {/* First Prize Card */}
              <div className={styles.prizesCardWrapper}>
                <div className={styles.prizesCardGlow}></div>
                <div className={styles.prizesCard}>
                  <div className={styles.prizesEmoji}>🏆</div>
                  <h3 className={styles.prizesCardTitle}>First Prize</h3>
                  <div className={styles.prizesAmountWrapper}>
                    <p className={styles.prizesAmount}>₹75,000</p>
                    <p className={styles.prizesPerStatement}>
                      Per Problem Statement
                    </p>
                  </div>
                  <div className={styles.prizesExtras}>
                    <p className={styles.prizesExtrasText}>
                      + Exclusive Goodies
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Prize Card */}
              <div className={styles.prizesCardWrapper}>
                <div className={styles.prizesCardGlow}></div>
                <div className={styles.prizesCard}>
                  <div className={styles.prizesEmoji}>🥈</div>
                  <h3 className={styles.prizesCardTitle}>Second Prize</h3>
                  <div className={styles.prizesAmountWrapper}>
                    <p className={styles.prizesAmount}>₹50,000</p>
                    <p className={styles.prizesPerStatement}>
                      Per Problem Statement
                    </p>
                  </div>
                  <div className={styles.prizesExtras}>
                    <p className={styles.prizesExtrasText}>
                      + Exclusive Goodies
                    </p>
                  </div>
                </div>
              </div>

              {/* Third Prize Card */}
              <div className={styles.prizesCardWrapper}>
                <div className={styles.prizesCardGlow}></div>
                <div className={styles.prizesCard}>
                  <div className={styles.prizesEmoji}>🥉</div>
                  <h3 className={styles.prizesCardTitle}>Third Prize</h3>
                  <div className={styles.prizesAmountWrapper}>
                    <p className={styles.prizesAmount}>₹25,000</p>
                    <p className={styles.prizesPerStatement}>
                      Per Problem Statement
                    </p>
                  </div>
                  <div className={styles.prizesExtras}>
                    <p className={styles.prizesExtrasText}>
                      + Exclusive Goodies
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Perks */}
            <div className={styles.prizesCertificateWrapper}>
              <div className={styles.prizesCertificateBox}>
                <p className={styles.prizesCertificateText}>
                  <span>
                    <FaCertificate className={styles.certificateIcon} /> Digital
                    Certificates for All Participants
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <h2 className={styles.sectionTitle}>About the Hackathon</h2>

        <div className={styles.aboutContainer}>
          <div className={styles.aboutLeft}>
            <img src={`${basePath}/iiit-image.jpeg`} className={styles.iiitImage} />
            <div className={styles.collegeLogos}>
              <div>
                <a href="https://felicity.iiit.ac.in/" target="_blank">
                <img src={`${basePath}/felicity-logo.png`} className={styles.aboutLogo} />
                </a>
              </div>
              <div>
                <a href="https://vlab.co.in" target="_blank">
                <img src={`${basePath}/vlabs_logo.png`} className={styles.aboutLogo} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.aboutText}>
            <div>
              <p>
                <b>Felicity Hackathon 2025</b> is the flagship technical
                competition of IIIT Hyderabad's annual techno-cultural fest,
                Felicity. In collaboration with Virtual Labs, this year's
                hackathon is dedicated to tackling challenges in the realm of
                digital education. Participants will explore ways to enhance
                accessibility, engagement, and effectiveness of online learning
                platforms.
              </p>

              <br />
              <p>
                Through cutting-edge problem statements and exciting rewards,
                Felicity Hackathon 2025 offers an unparalleled platform for
                participants to ideate and create impactful solutions for the
                future of learning. Whether you're a student, a developer, or
                someone passionate about innovation, this hackathon is your
                opportunity to make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />

      <section id="sponsors" className={styles.section}>
        <h2 className={styles.sectionTitle}>Sponsors</h2>
        <div className={styles.sponsorCard}>
          <div className={styles.logoRow}>
            {sponsorsData.map((data, index) => (
              <div key={index} className={styles.logoItem}>
                <a href={data.page} target="_blank">
                <img
                  src={data.logo}
                  alt={data.name}
                  className={styles.sponsorLogo}
                />
                </a>
                <h3 className={styles.sponsorName}>{data.name}</h3>
              </div>
            ))}
          </div>
          <div className={styles.sponsorDescription}>
            Our primary sponsors driving <i>innovation</i> and <i>collaboration</i>. {" "} 
            {/* <br /> */}
            <span
              className={styles.linkURL}
              onClick={() => setSponsorPopupOpen(true)}
            >
              Learn More
            </span>
          </div>
        </div>

        <SponsorPopup
          isOpen={isSponsorPopupOpen}
          onClose={() => setSponsorPopupOpen(false)}
        />

        {/* Powered by Unstop */}
        {/* <div className={styles.poweredByContainer}>
          <h3 className={styles.poweredByTitle}>Powered By</h3>
          <div className={styles.poweredByCard}>
            <img src="./unstop-logo.png" alt="Unstop Logo" className={styles.poweredByLogo} />
            <div className={styles.poweredByDetails}>
              <h3 className={styles.poweredByName}>Unstop</h3>
              <p className={styles.poweredByDescription}>
                Empowering innovation and opportunities through Unstop.
              </p>
            </div>
          </div>
        </div> */}

        <div className={styles.poweredBy}>
          Powered by <img src={`${basePath}/unstop-logo.png`} alt="Unstop Logo" />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={`${styles.section} ${styles.faqSection}`}>
        <h2 className={styles.sectionTitle}>FAQs</h2>
        <div className={styles.faqbody}>
          <main>
            <section className={styles.accordion} id="what-is-hackathon">
              <h1 className={styles.faqtitle}>
                <a href="#what-is-hackathon">
                  {" "}
                  What is Felicity Hackathon 2025?
                </a>
              </h1>
              <div className={styles.faqcontent}>
                <div className={styles.faqwrapper}>
                  <p>
                    Felicity Hackathon 2025 is an online competition organized
                    by IIIT Hyderabad&apos;s annual techno-cultural fest,
                    Felicity, in collaboration with Virtual Labs. The hackathon
                    focuses on developing innovative solutions to enhance
                    digital education through simulation and technology.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.accordion} id="who-can-participate">
              <h1 className={styles.faqtitle}>
                <a href="#who-can-participate"> Who can participate?</a>
              </h1>
              <div className={styles.faqcontent}>
                <div className={styles.faqwrapper}>
                  <p>
                    The hackathon is open to college students from any stream
                    across India. Participants can form teams of 1 to 5 members.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.accordion} id="registration-fee">
              <h1 className={styles.faqtitle}>
                <a href="#registration-fee">Is there a registration fee?</a>
              </h1>
              <div className={styles.faqcontent}>
                <div className={styles.faqwrapper}>
                  <p>
                    No, participation in Felicity Hackathon 2025 is free of
                    charge.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.accordion} id="mode-of-hackathon">
              <h1 className={styles.faqtitle}>
                <a href="#mode-of-hackathon">
                  What is the mode of the hackathon?
                </a>
              </h1>
              <div className={styles.faqcontent}>
                <div className={styles.faqwrapper}>
                  <p>
                    The hackathon is fully online, allowing participants to join
                    from anywhere in India.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.accordion} id="key-dates">
              <h1 className={styles.faqtitle}>
                <a href="#key-dates">What are the key dates?</a>
              </h1>
              <div className={styles.faqcontent}>
                <div className={styles.faqwrapper}>
                  <p>● Registration Opens: February 3rd, 2025</p>
                  <p>● Problem Statements Released: February 3rd, 2025</p>
                  <p>
                    ● Registration and Round 1 Submission Close: February 17th,
                    2025
                  </p>
                  <p>● Round 1 Results: February 24th, 2025</p>
                  <p>● Round 2 Submission Deadline: March 4th, 2025</p>
                  <p>● Final Presentations: March 5th, 2025</p>
                </div>
              </div>
            </section>

            <section className={styles.accordion} id="structure">
              <h1 className={styles.faqtitle}>
                <a href="#structure">How is the hackathon structured?</a>
              </h1>
              <div className={styles.faqcontent}>
                <div className={styles.faqwrapper}>
                  <p>The hackathon consists of two phases:</p>
                  <p>
                    ● Round 1 (Ideation): Teams submit an ideation document
                    outlining their solution.
                  </p>

                  <p>
                    ● Round 2 (Implementation): The top teams from Round 1
                    proceed to develop and implement their ideas.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.accordion} id="what-are-prizes">
              <h1 className={styles.faqtitle}>
                <a href="#what-are-prizes">What are the prizes?</a>
              </h1>
              <div className={styles.faqcontent}>
                <div className={styles.faqwrapper}>
                  <p>
                    The total prize pool is of INR 3,00,000. Each of the two
                    problem statements will have the following prizes:
                  </p>
                  <p>● Winner: INR 75,000</p>
                  <p>● 1st Runner-Up: INR 50,000</p>
                  <p>● 2nd Runner-Up: INR 25,000</p>
                  <p>● Certificates for all participants</p>
                </div>
              </div>
            </section>

            <section className={styles.accordion} id="how-to-register">
              <h1 className={styles.faqtitle}>
                <a href="#how-to-register"> How can I register?</a>
              </h1>
              <div className={styles.faqcontent}>
                <div className={styles.faqwrapper}>
                  <p>
                    Registration must be completed through the Unstop platform
                    once it opens on February 3rd, 2025 and closes on February
                    17th, 2025. Click{" "}
                    <a
                      href="https://unstop.com/o/iG2dMn0?lb=wT7umzSn"
                      target="_blank"
                      className={styles.linkURL}
                    >
                      here
                    </a>{" "}
                    to register.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.accordion} id="submission">
              <h1 className={styles.faqtitle}>
                <a href="#submission">Where do I submit my solutions?</a>
              </h1>
              <div className={styles.faqcontent}>
                <div className={styles.faqwrapper}>
                  <p>
                    All solutions for Round 1 will be through Unstop only.
                    Submission details regarding the second round will be
                    intimidated to the teams on qualification.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.accordion} id="individual-participation">
              <h1 className={styles.faqtitle}>
                <a href="#individual-participation">
                  Can I participate individually?
                </a>
              </h1>
              <div className={styles.faqcontent}>
                <div className={styles.faqwrapper}>
                  <p>Yes, individual participation is allowed.</p>
                </div>
              </div>
            </section>

            <section
              className={styles.accordion}
              id="how-many-problem-statements"
            >
              <h1 className={styles.faqtitle}>
                <a href="#how-many-problem-statements">
                  How many problem statements are there?
                </a>
              </h1>
              <div className={styles.faqcontent}>
                <div className={styles.faqwrapper}>
                  <p>
                    There are two problem statements. They are described in
                    detail on the website as well as the Unstop Page. Click <a href='#problem-statements' className={styles.linkURL}>here</a> to view
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.accordion} id="submission-requirements">
              <h1 className={styles.faqtitle}>
                <a href="#submission-requirements">
                  {" "}
                  What are the submission requirements?
                </a>
              </h1>
              <div className={styles.faqcontent}>
                <div className={styles.faqwrapper}>
                  <p>
                    Submissions must align with the problem statements provided
                    by Virtual Labs and adhere to the guidelines specified for
                    each Round.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.accordion} id="judging">
              <h1 className={styles.faqtitle}>
                <a href="#judging"> How will the submissions be judged?</a>
              </h1>
              <div className={styles.faqcontent}>
                <div className={styles.faqwrapper}>
                  <p>
                    Submissions will be evaluated based on innovation,
                    feasibility, and alignment with solving the problem.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.accordion} id="more-info">
              <h1 className={styles.faqtitle}>
                <a href="#more-info">Who can I contact for more information?</a>
              </h1>
              <div className={styles.faqcontent}>
                <div className={styles.faqwrapper}>
                  <p>For queries or support, reach out to us at:</p>
                  <p>Email: felicity@iiit.ac.in</p>
                  <p>Phone: 8884616346 - Tejas Cavale,</p>
                  <p>Phone: 9740101754 - Vishak Kashyap K</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </section>

      {/* Socials Section */}
      <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <div className={styles.socialContainerdetails}>
          <h2 className={styles.contactCallout}>
            For queries or support, reach out to us at:
          </h2>
          <table className={styles.contactTable}>
            <tbody>
              <tr>
                <td className="table-cell">Email</td>
                <td className="table-cell">
                  <a
                    href="mailto:felicity@iiit.ac.in"
                    className={styles.linkURL}
                  >
                    <FaEnvelope className={styles.contactIcon} />{" "}
                    felicity@iiit.ac.in
                  </a>
                </td>
              </tr>
              <tr>
                <td className="table-cell">Tejas Cavale</td>
                <td className="table-cell">
                  <a href="tel:+918884616346" className={styles.linkURL}>
                    <FaPhoneAlt className={styles.contactIcon} /> +91 88846
                    16346
                  </a>
                </td>
              </tr>
              <tr>
                <td className="table-cell">Vishak Kashyap</td>
                <td className="table-cell">
                  <a href="tel:+919740101754" className={styles.linkURL}>
                    <FaPhoneAlt className={styles.contactIcon} /> +91 97401
                    01754
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div className={styles.socialContainer}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <div className={styles.iconContainer}>
              <img
                src="./instagram_logo.png"
                alt="Instagram"
                className={styles.socialIcon}
              />
            </div>
            <span className={styles.username}>@YourInstagramHandle</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <div className={styles.iconContainer}>
              <img
                src="./linkedin_logo.png"
                alt="LinkedIn"
                className={styles.socialIcon}
              />
            </div>
            <span className={styles.username}>@YourLinkedInHandle</span>
          </a>
        </div> */}
      </section>
    </div>
  );
};

export default function Helper() {
  return Home();
}
