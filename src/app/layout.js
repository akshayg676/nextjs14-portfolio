import { CustomCursor, Footer, Navbar } from "@/components";
import "../styles/globals.css";
import localFont from "next/font/local";
import { AOSInit } from "@/utils/aos";

export const Bigilla = localFont({
  src: "../../public/font/Bigilla-Bold.otf",
});

const Modernist = localFont({
  src: "../../public/font/Sk-Modernist-Mono.otf",
});

export const metadata = {
  title: "Akshay G - Front-End Developer & Web Security Advocate",
  description:
    "Welcome to the portfolio of Akshay G, a Front-End Developer and Web Security Advocate. Explore my projects and expertise in web development and cybersecurity.",
  keywords: [
    "Akshay G",
    "Front-End developer",
    "Web Security Advocate",
    "portfolio",
    "projects",
    "web development",
    "cybersecurity",
  ],
  author: "Akshay G",
  referrer: "origin-when-cross-origin",
  creator: "Akshay G",
  publisher: "Akshay G",
  applicationName: "Akshay G's Portfolio",
  robots: "index, follow",
  og: {
    title: "Akshay G - Front-End Developer & Web Security Advocate",
    description:
      "Welcome to the portfolio of Akshay G, a Front-End Developer and Web Security Advocate. Explore my projects and expertise in web development and cybersecurity.",
    type: "website",
    url: "https://www.akshayg.tech/",
    // image: "",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay G - Front-End Developer & Web Security Advocate",
    description:
      "Welcome to the portfolio of Akshay G, a Front-End Developer and Web Security Advocate. Explore my projects and expertise in web development and cybersecurity.",
    // image: "",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/akshay-g-700183181/",
    github: "https://github.com/akshayg676",
    telegram: "https://t.me/ChingChong5",
    codepen: "https://codepen.io/akshay-g",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Modernist.className}>
        <AOSInit />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
