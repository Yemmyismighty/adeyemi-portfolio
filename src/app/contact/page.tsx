import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/Motion";
import Portrait from "@/components/Portrait";
import {
  Mail,
  Linkedin,
  Github,
  Twitter as X,
  Instagram,
} from "lucide-react";

export default function ContactPage() {
  return (
    <Section>
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Copy */}
          <div className="space-y-10">
            <FadeUp>
              <div>
                <p className="text-sm uppercase tracking-widest text-muted">
                  Contact
                </p>

                <h1 className="mt-4 font-heading text-5xl font-medium tracking-tight">
                  Let’s build something
                  <br />
                  meaningful.
                </h1>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="max-w-xl text-muted text-lg">
                I’m always open to conversations around ambitious products,
                security-critical systems, and long-term technical leadership.
                If you’re building something serious, let’s talk.
              </p>
            </FadeUp>

            {/* Primary CTA */}
            <FadeUp delay={0.2}>
              <Button asChild size="lg">
                <a href="mailto:yemmyakitoye@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send me an email
                </a>
              </Button>
            </FadeUp>
          </div>

          {/* Right: Contact Surface */}
          <FadeUp>
            <div className="flex justify-center">
                <div className="max-w-[260px]">
                    <Portrait />
                </div>
            </div>
            </FadeUp>

          <FadeUp delay={0.15}>
            <div className="rounded-xl border border-white/10 bg-surface p-10 space-y-10">
              <div>
                <h2 className="font-heading text-xl font-medium">
                  Direct contact
                </h2>

                <p className="mt-2 text-muted">
                  Prefer a direct approach? Reach out through any of the
                  channels below.
                </p>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <p className="text-sm text-muted">Email</p>
                <a
                  href="mailto:yemmyakitoye@gmail.com"
                  className="text-lg hover:text-primary transition-colors"
                >
                  yemmyakitoye@gmail.com
                </a>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <p className="text-sm text-muted">Social</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <SocialLink
                    href="https://linkedin.com/in/adeyemi-akitoye"
                    icon={<Linkedin size={16} />}
                    label="LinkedIn"
                  />

                  <SocialLink
                    href="https://github.com/Yemmyismighty"
                    icon={<Github size={16} />}
                    label="GitHub"
                  />

                  <SocialLink
                    href="https://x.com/akitoyedeyemi?s=21"
                    icon={<X size={16} />}
                    label="Twitter / X"
                  />

                  <SocialLink
                    href="https://www.instagram.com/yemmy_is_mighty?igsh=MXc3ZDUwOG1sM3JwNA%3D%3D&utm_source=qr "
                    icon={<Instagram size={16} />}
                    label="Instagram"
                  />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </Section>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-3 rounded-md border border-white/5 px-4 py-3 text-muted hover:text-text hover:border-primary/40 transition-colors"
    >
      {icon}
      {label}
    </a>
  );
}
