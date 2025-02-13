import CurrentProjects from "@/components/Projects/CurrentProjects";

const projects = [...Array(4)].map((_, idx) => ({
    name: `HomeStart v${idx}`,
    img: {
      src: "/projects/2023-24/homestart/homestart.png",
      altText: "Tufts Logo"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    href: "/dev/projects/homestart",
  }));

projects.push(
  {
    name: 'HomeStart vX',
    img: {
      src: "/projects/2023-24/homestart/homestart.png",
      altText: "Tufts Logo"
    },
    description: "some text here",
    href: "/dev/projects/homestart",
  }
);

export default function MainProjectPage() {
  return (
    <>
      <CurrentProjects projects={projects} />
    </>
  )
}