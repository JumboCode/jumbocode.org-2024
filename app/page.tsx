import Button from "@/components/button";
import Hero from "@/components/hero";

export default function HomePage() {
  return (
    <div>
      <Hero
        title={
          <>
            Jumbo<span className="text-brand">Code</span>
          </>
        }
        subtitle={<>Empowering students, Elevating non-profits.</>}
        buttons={
          <>
            <Button text="What we do" href="/about" variant="secondary" />
            <Button text="Get involved" href="/apply" variant="primary" />
          </>
        }
      />
    </div>
  );
}
