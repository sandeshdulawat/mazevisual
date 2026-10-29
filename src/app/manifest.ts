import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maze Visual Studio",
    short_name: "Maze Visual",
    description: "Premier creative studio specializing in Branding, Architecture, Digital, Visualization, and Interior Design.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/mazevisualfavicon.avif",
        sizes: "192x192",
        type: "image/avif",
      },
      {
        src: "/mazevisuallogo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
