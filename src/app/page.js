"use client";
import React from "react";
import styles from "./page.module.css";
import { useState } from "react";
// import { Helmet } from 'react-helmet';
import Timeline from "./timeline";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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

      {/* Landing Page */}
      <section id="landing" className={styles.landingSection}>
        <div className={styles.leftSection}>
          <h1 className={styles.title}>Felicity Hackathon</h1>
          <button className={styles.registerButton}>Register Now</button>
        </div>
        <div className={styles.rightSection}>
          <img src="/hack_bg.png" alt="Hackathon" className={styles.image} />
        </div>
      </section>

      {/* Problem Statements Section */}
      <section id="problem-statements" className={styles.section}>
        <div className={styles.probbody}>
          <div className={styles.probcontainer}>
            <h1 className={styles.sectionTitle}>Problem Statements</h1>
            <div className={styles.problemsection}>
              <div className={`${styles.problemcard} ${styles.probcard1}`}>
                <div className={styles.probicon}>🔒</div>
                <h2 className={styles.problemtitle}>PROBLEM STATEMENT 1</h2>
                <p className={styles.problemdescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              <div className={`${styles.problemcard} ${styles.probcard2}`}>
                <div className={styles.probicon}>🌍</div>
                <h2 className={styles.problemtitle}>PROBLEM STATEMENT 2</h2>
                <p className={styles.problemdescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
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
                Equal prizes for both problem statements
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
                  <span>Digital Certificates for All Participants</span>
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
            <img src="./iiit-image.jpeg" className={styles.iiitImage}/>
            <div className={styles.collegeLogos}>
              <div>
                <img src="./iiit-logo.png" className={styles.aboutLogo}/>
              </div>
              <div>
                <img src="./felicity-logo.png" className={styles.aboutLogo}/>
              </div>
            </div>
          </div>
          <div className={styles.aboutText}>
            <div>
              <p>
                <b>Felicity Hackathon 2025</b> is the flagship technical competition of IIIT
                Hyderabad's annual techno-cultural fest, Felicity. In collaboration
                with Virtual Labs, this year's hackathon is dedicated to tackling
                challenges in the realm of digital education. Participants will
                explore ways to enhance accessibility, engagement, and effectiveness
                of online learning platforms.
              </p> 
              <br />
              <p>
                Through cutting-edge problem statements
                and exciting rewards, Felicity Hackathon 2025 offers an unparalleled
                platform for participants to ideate and create impactful solutions for
                the future of learning. Whether you&apos;re a student, a developer, or
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
        <div className={styles.sponsorContainer}>
          {/* VLABS - Primary Sponsor */}
          <div className={`${styles.sponsorCard} ${styles.vlabsCard}`}>
            <img
              src="./vlabs_logo.png"
              alt="VLABS Logo"
              className={styles.sponsorLogo}
            />
            <div className={styles.sponsorDetails}>
              <h3 className={styles.sponsorName}>VLABS</h3>
              <p className={styles.sponsorDescription}>
                Our primary sponsor driving innovation and collaboration.
              </p>
            </div>
          </div>

          <div className={`${styles.sponsorCard} ${styles.vlabsCard}`}>
            <img
              src="./vlead-logo.png"
              alt="VLABS Logo"
              className={styles.sponsorLogo2}
            />
            <div className={styles.sponsorDetails}>
              <h3 className={styles.sponsorName}>VLEAD</h3>
              <p className={styles.sponsorDescription}>
                Our primary sponsor driving innovation and collaboration.
              </p>
            </div>
          </div>
        </div>

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
          Powered by <img src="./unstop-logo.png" alt="Unstop Logo" />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={styles.section}>
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
                    The hackathon is entirely online, allowing participants to
                    join from anywhere in India.
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
                  <p>● Registration Opens: January 20, 2025</p>
                  <p>● Problem Statements Released: January 20, 2025</p>
                  <p>● Registration and Submission Close: February 10, 2025</p>
                  <p>● Phase 1 (Ideation Phase) Ends: February 10, 2025</p>
                  <p>● Phase 2 (Implementation Phase): Feb 25</p>
                  <p>● Winners Announcement: March 1, 2025</p>
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
                    ● Phase 1 (Ideation): Teams submit an ideation document
                    outlining their solution.
                  </p>

                  <p>
                    ● Phase 2 (Implementation): The top 20 teams from Phase 1
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
                    Registration can be completed through the Unstop platform
                    once it opens on January 20, 2025. Click here to register.
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
                    All solutions for Phase 1 will be through Unstop only.
                    Submission details regarding the second phase will be
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
                    There are two problem statements. They described in detail
                    on the website as well as the Unstop Page.
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
                    each phase.
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
                  <p>9727009060 - Akshat Shah</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </section>

      {/* Socials Section */}
      <section id="contact" className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <div className={styles.socialContainerdetails}>
          <h2>For queries or support, reach out to us at:</h2>
          <h2>Email: felicity@iiit.ac.in</h2>
          <h2>Phone: 8884616346 - Tejas Cavale, 9727009060 - Akshat Shah</h2>
        </div>
        <div className={styles.socialContainer}>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <div className={styles.iconContainer}>
              <img
                src="./twitter_logo.png"
                alt="Twitter"
                className={styles.socialIcon}
              />
            </div>
            <span className={styles.username}>@YourTwitterHandle</span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <div className={styles.iconContainer}>
              <img
                src="./facebook_logo.png"
                alt="Facebook"
                className={styles.socialIcon}
              />
            </div>
            <span className={styles.username}>@YourFacebookHandle</span>
          </a>
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
        </div>
      </section>
    </div>
  );
};

export default function Helper() {
  return Home();
}
