import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Felicity Hackathon 2025 | IIIT Hyderabad",
  description: "Felicity Hackathon 2025 is the flagship technical competition of IIIT Hyderabad's annual techno-cultural fest, Felicity. In collaboration with Virtual Labs, this year's hackathon is dedicated to tackling challenges in the realm of digital education. Participants will explore ways to enhance accessibility, engagement, and effectiveness of online learning platforms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="google-site-verification" content="X5e62mXqbrZBMrkMNDH4DhhIq1NymrNYN3KvDJOwdfI" />
        {/* open sans */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />

      <link
        href="https://fonts.googleapis.com/css2?family=Anton&family=Neue+Montreal:wght@400;700&family=Neue+Machina:wght@400;700&display=swap"
        rel="stylesheet"/>

        {/* montserrat */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" 
          rel="stylesheet"
        />

        {/* dosis */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" 
          rel="stylesheet"
        />

        {/* Roboto */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" 
          rel="stylesheet"
        />

        {/* Charm */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Charm:wght@400;700&family=Dosis:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Petit+Formal+Script&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" 
          rel="stylesheet"
        />

        {/* Space Grotesk */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Charm:wght@400;700&family=Dosis:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Petit+Formal+Script&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Space+Grotesk:wght@300..700&display=swap" 
          rel="stylesheet"
        />

        {/* Parisienne */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Charm:wght@400;700&family=Dosis:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Parisienne&family=Petit+Formal+Script&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Space+Grotesk:wght@300..700&display=swap" 
          rel="stylesheet"
        />

        {/* Eagle Lake */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Charm:wght@400;700&family=Dosis:wght@200..800&family=Eagle+Lake&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Parisienne&family=Petit+Formal+Script&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Space+Grotesk:wght@300..700&display=swap" 
          rel="stylesheet"
        />

        {/* Oleo Script */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Charm:wght@400;700&family=Dosis:wght@200..800&family=Eagle+Lake&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oleo+Script:wght@400;700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Parisienne&family=Petit+Formal+Script&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Space+Grotesk:wght@300..700&display=swap" 
          rel="stylesheet"
        />

        {/* Tourney */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Audiowide&family=Charm:wght@400;700&family=Dosis:wght@200..800&family=Eagle+Lake&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oleo+Script:wght@400;700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Parisienne&family=Petit+Formal+Script&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Space+Grotesk:wght@300..700&family=Tourney:ital,wght@0,100..900;1,100..900&display=swap" 
          rel="stylesheet"
        />

        {/* Michroma */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Audiowide&family=Charm:wght@400;700&family=Dosis:wght@200..800&family=Eagle+Lake&family=Michroma&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oleo+Script:wght@400;700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Parisienne&family=Petit+Formal+Script&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Space+Grotesk:wght@300..700&family=Tourney:ital,wght@0,100..900;1,100..900&display=swap" 
          rel="stylesheet"
        />

        {/* Nova Square */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Audiowide&family=Charm:wght@400;700&family=Dosis:wght@200..800&family=Eagle+Lake&family=Michroma&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nova+Square&family=Oleo+Script:wght@400;700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Parisienne&family=Petit+Formal+Script&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Space+Grotesk:wght@300..700&family=Tourney:ital,wght@0,100..900;1,100..900&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
