import Container from "./Container";

export default function Section({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-24">
      <Container>{children}</Container>
    </section>
  );
}
