import TechnicalBreakdown from "@/components/TechnicalBreakdown";

export default function AITradingBreakdown() {
  return (
    <TechnicalBreakdown
      title="AI-Powered Trading & Investment Platform"
      overview="A fully functional prototype designed to automate trading and investment decisions while maintaining reliability, transparency, and secure user account management. Developed a live demo of a trading and investment web application that helps users trade and invest with 
ease. I developed the entire frontend and backend application logic tailored for the demo's needs. I 
implemented the authentication system that manages users and sessions. I developed the Database models 
and their relationships with one another. To top it off, I deployed the demo on vercel while using AWS RDS 
for the live database server. I made sure the demo was live for testing from anywhere in the world which 
facilitates my capability to work remotely"
      stack={[
        "Next.js frontend",
        "Backend API services",
        "Relational database design",
        "Authentication and session handling",
        "AWS RDS",
        "Vercel deployment",
      ]}
      architecture={[
        "Separation of frontend, backend, and data layers",
        "Secure authentication and session lifecycle",
        "Relational data models with transactional integrity",
        "Cloud-hosted infrastructure for global access",
      ]}
      responsibilities={[
        "Developed frontend and backend logic independently",
        "Designed database schemas and relationships",
        "Implemented authentication and authorization",
        "Deployed live demo for global testing",
      ]}
    />
  );
}
