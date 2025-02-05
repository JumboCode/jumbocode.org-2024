import Button from "@/app/components/button";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="p-4 space-y-4 bg-black">
        <Button
          text="Email Us"
          route="/testing"
          variant="primary"
          icon={EnvelopeIcon}
        />

        <Button
          text="Email Us"
          route="/testing"
          variant="secondary"
          icon={EnvelopeIcon}
        />

        <Button
          text="Email Us"
          route="/testing"
          variant="ghost"
          icon={EnvelopeIcon}
        />

        <Button text="Email Us" route="/testing" variant="primary" />

    </div>
  );
}
