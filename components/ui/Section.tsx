import Container from "./Container";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  tone?: "ivory" | "cream" | "blush";
  className?: string;
};

const Section = ({
  children,
  id,
  tone = "ivory",
  className = "",
}: SectionProps) => {
  const toneClasses = {
    ivory: "bg-(--ivory) text-(--ink)",
    cream: "bg-(--cream) text-(--ink)",
    blush: "bg-(--blush) text-(--ink)",
  };

  return (
    <section
      id={id}
      className={`scroll-mt-28 py-16 sm:py-20 lg:py-24 ${toneClasses[tone]} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
