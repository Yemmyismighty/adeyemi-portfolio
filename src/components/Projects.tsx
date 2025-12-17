import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { FadeUp } from "./Motion";
import ProjectVisual from "./ProjectVisual";

export default function Projects() {
  return (
    <Section>
      <div id="projects" className="space-y-20">
        {/* Section Header */}
        <FadeUp>
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-muted">
            Selected Work
          </p>

          <h2 className="mt-4 font-heading text-4xl font-medium tracking-tight">
            Projects & Case Studies
          </h2>

          <p className="mt-6 text-muted">
            A selection of projects where I owned the technical direction,
            architecture, and delivery from the ground up.
          </p>
        </div>
        </FadeUp>

        {/* Project: Knowvas */}
        <FadeUp delay={0.2}>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div className="space-y-6">
            <h3 className="font-heading text-3xl font-medium">
              Knowvas — Secure Digital Publishing Platform
            </h3>

            <p className="text-muted">
              A cloud-based publishing platform built to protect African
              creators from piracy while enabling secure distribution and
              monetization of digital content.
            </p>

            <ul className="space-y-2 text-sm text-muted">
              <li>• Designed and built the entire platform end-to-end</li>
              <li>• Implemented DRM and anti-piracy protections</li>
              <li>• Integrated AI moderation and secure payment flows</li>
              <li>• Deployed scalable infrastructure on AWS</li>
            </ul>

            <div className="flex gap-4">
              <Button asChild>
                <a href="https://knowvas.com" target="_blank">
                  View Platform
                </a>
              </Button>

              <Button asChild variant="outline">
                <a href="/projects/knowvas">Technical Breakdown</a>
              </Button>
            </div>
          </div>

          {/* Visual Placeholder */}
          <ProjectVisual
            label="Knowvas — Publishing Platform Interface"
            darkImage="/images/projects/knowvas/light.png"
            lightImage="/images/projects/knowvas/dark.png"
          />
        </div>
        </FadeUp>

        {/* Project: AI Trading Platform */}
        <FadeUp delay={0.2}>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Visual Placeholder */}
        <div className="order-last lg:order-first">
          <ProjectVisual
            label="AI Trading Platform — Live Dashboard"
            darkImage="/images/projects/ai-trading/light.png"
            lightImage="/images/projects/ai-trading/dark.png"
            flipped
          />
        </div>

        {/* Text */}
        <div className="space-y-6">
            <h3 className="font-heading text-3xl font-medium">
            AI-Powered Trading & Investment Platform
            </h3>

            <p className="text-muted">
            A fully functional prototype of an automated trading and investment
            platform designed to abstract complexity while maintaining system
            transparency and reliability.
            </p>

            <ul className="space-y-2 text-sm text-muted">
            <li>• Built full-stack application logic from scratch</li>
            <li>• Implemented authentication and session management</li>
            <li>• Designed relational database models and workflows</li>
            <li>• Deployed live demo using Vercel and AWS RDS</li>
            </ul>

            <div className="flex gap-4">
            <Button asChild>
                <a href="https://innvercel.vercel.app" target="_blank">
                View Demo
                </a>
            </Button>

            <Button asChild variant="outline">
                <a href="/projects/ai-trading">Technical Breakdown</a>
            </Button>
            </div>
        </div>
        </div>
        </FadeUp>

        <FadeUp delay={0.2}>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div className="space-y-6">
            <h3 className="font-heading text-3xl font-medium">
              Bulgaria Africa Hub (Clone and potential replacement)
            </h3>

            <p className="text-muted">
              Per the request of the Country Director (Nigeria), Bulgaria Africa Hub, this is a full-stack web application modeled after a real cross-continental platform that connects African students, entrepreneurs, and businesses with opportunities in Bulgaria.
            </p>

            <ul className="space-y-2 text-sm text-muted">
              <li>• Designed and replicated the full website with my own logic and improvements</li>
              <li>• Built frontend components end-to-end and from scratch</li>
              <li>• Included foundation for extensive backend services and proper auth flows</li>
              <li>• Deployed the system on vercel</li>
            </ul>

            <div className="flex gap-4">
              <Button asChild>
                <a href="https://bulgaria-africa-hub.vercel.app/" target="_blank">
                  View Website
                </a>
              </Button>

              <Button asChild variant="outline">
                <a href="/projects/bulgaria-africa-hub">Technical Breakdown</a>
              </Button>
            </div>
          </div>

          {/* Visual Placeholder */}
          <ProjectVisual
            label="Bulgaria Africa Hub — Platform Interface"
            darkImage="/images/projects/bulgaria/light.png"
            lightImage="/images/projects/bulgaria/dark.png"
          />
        </div>
        </FadeUp>
      </div>
    </Section>
  );
}
