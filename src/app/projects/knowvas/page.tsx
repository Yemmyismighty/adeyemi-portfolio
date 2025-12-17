import TechnicalBreakdown from "@/components/TechnicalBreakdown";

export default function KnowvasBreakdown() {
  return (
    <TechnicalBreakdown
      title="Knowvas — Secure Digital Publishing Platform"
      overview="Knowvas is a secure, cloud-based digital publishing platform built to protect African creators from piracy while enabling controlled distribution and monetization of digital content."
      stack={[
        "HTML, CSS, JavaScript, Next.js & React(New Version ongoing Development)",
        "Flask backend services",
        "PostgreSQL",
        "AWS (CloudFront, RDS, App Runner)",
        "Paystack payment integration",
        "AI moderation and DRM systems",
      ]}
      architecture={[
        "Client-server architecture with secure API boundaries",
        "Content delivery via CDN with access control",
        "Anti-piracy protections at content and delivery layers",
        "Scalable cloud infrastructure with isolated services",
      ]}
      responsibilities={[
        "Designed and implemented the full system architecture",
        "Built frontend and backend systems end-to-end",
        "Integrated DRM, payment, and moderation pipelines",
        "Deployed and monitored production infrastructure",
      ]}
    />
  );
}
