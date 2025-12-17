import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import Projects from "@/components/Projects";
import { FadeUp } from "@/components/Motion";
import Portrait from "@/components/Portrait";
import Credentials from "@/components/Credentials";

export default function Home() {
  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="max-w-3xl">
          <FadeUp>
          <h1 className="font-heading text-5xl font-medium tracking-tight">
            Adeyemi Samuel Akitoye
          </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
          <p className="mt-4 text-lg text-muted">
            Cybersecurity Engineer · Full-Stack Developer · Co-founder/CTO @ Knowvas
          </p>
          </FadeUp>

          <FadeUp delay={0.2}>
          <p className="mt-6 text-xl">
            I design and build secure, scalable digital platforms at the
            intersection of cybersecurity, cloud infrastructure, and product
            engineering.
          </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-10 flex gap-4">
              <Button asChild>
                <a href="#projects">View Projects</a>
              </Button>

              <Button
                variant="outline"
                className="text-muted hover:text-text"
                asChild
              >
                <a
                  href="/Adeyemi_Akitoye_CV.pdf"
                  download="Adeyemi_Akitoye_CV.pdf"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </Button>
            </div>
          </FadeUp>
        </div>
        {/* Right */}
          <FadeUp delay={0.15}>
            <div className="flex justify-center lg:justify-end">
              <Portrait priority />
            </div>
          </FadeUp>
      </div>
      <Projects />
      <Credentials />
    </Section>
  );
}
