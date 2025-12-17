import TechnicalBreakdown from "@/components/TechnicalBreakdown";

export default function KnowvasBreakdown() {
  return (
    <TechnicalBreakdown
      title="Bulgaria Africa Hub (Clone and potential replacement)"
      overview="Bulgaria Africa Hub (Clone) is a full-stack web application modeled after a real cross-continental platform that connects African students, entrepreneurs, and businesses with opportunities in Bulgaria. The project was built as a technical case study to explore domain modeling, role-based systems, and scalable platform architecture for international opportunity and consulting platforms.
        This clone focuses on functionality, structure, and system design."
      stack={[
        "Next.js & React",
        "PostgreSQL + Prisma ORM",
      ]}
      architecture={[
        "Modern component-based UI (React / Next.js)",
        "Cloud-based hosting with environment separation (Vercel)",
        "Relational database design with Prisma ORM",
      ]}
      responsibilities={[
        "Designed and replicated the full website with my own logic and improvements",
        "Built frontend componnents end-to-end and from scratch",
        "Included foundation for extensive backend services and proper auth flows",
        "Deployed the system on vercel",
      ]}
    />
  );
}
