import Button from "@/components/button";
import Hero from "@/components/hero";

export default function ApplyPage() {
  return (
    <div>
      <Hero
        title={<>Apply</>}
        subtitle={
          <>
            Join us — we’re a passionate community of developers and designers
            committed to building meaningful products for non-profits.
          </>
        }
        buttons={
          <>
            <Button text="For students" href="/" variant="secondary" />
            <Button text="For non-profits" href="/" variant="secondary" />
          </>
        }
      />
    </div>
  );
}
