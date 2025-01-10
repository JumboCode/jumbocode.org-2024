import WhatWeDo from "@/app/components/what-we-do";

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="py-24 px-4">
        <div className="max-w-screen-lg mx-auto space-y-32">
          <WhatWeDo variant="compact" />
          <WhatWeDo variant="full-width" />
        </div>
      </div>
    </div>
  );
}
