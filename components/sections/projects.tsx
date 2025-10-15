import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "Enactus Website",
    description:
      "This website is made to represent the enactus slc, it is made using the top-notch technologies. End to end encrypted with secure data. Handling the Attendance system in a robust way and promoting the products of the society.",
    tags: ["Next.js", "Typesript", "Charts", "TailwindCSS", "Supabase"],
    imageSrc: "/enactus.png",
  },
  {
    title: "LinkedIn Engagement",
    description:
      "This is an automation tool that helps you to automate your LinkedIn engagement. It comments on the posts based on the type of post that is.",
    tags: ["n8n", "JavaScript"],
    imageSrc: "/n8n.webp",
  },
  {
    title: "Crypto App",
    description:
      "A mobile app that shows the real-time prices of various cryptocurrencies. It also shows the historical data of the cryptocurrencies in the form of charts. With the real-time price alerts and news updates. Made using react native for cross-platform compatibility.",
    tags: [
      "React-Native",
      "JavaScript",
      "APIs",
      "Charts",
      "TailwindCSS",
      "Firebase",
      "Expo",
    ],
    imageSrc: "/crypto.webp",
  },
];

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Selected Projects
        </h2>
        <a
          href="https://github.com/HardikJain25-dev"
          className="text-sm text-primary hover:underline"
        >
          More Projects →
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
