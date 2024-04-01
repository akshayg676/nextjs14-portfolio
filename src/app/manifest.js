export default function manifest() {
  return {
    name: "Akshay G - Front-End Developer & Web Security Advocate",
    short_name: "Akshay G",
    description: "Akshay G's Portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/images/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
