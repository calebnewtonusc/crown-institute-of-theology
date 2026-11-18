import type { Metadata } from "next";
import { DegreeExplorer } from "@/components/DegreeExplorer";
import { PageHeader } from "@/components/ui";
import { accreditation } from "@/lib/content";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Four degrees in Kingdom and New Covenant theology: Bachelor of Theology, Master of Theological Studies, Doctor of Ministry and Doctor of Theology. Every course, in order.",
};

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        title="Four degrees, each grounded in the Word."
        lead="Biblical exegesis, Christocentric hermeneutics, and the present and advancing kingdom of God, from the bachelor level to the doctorate."
        verse={{
          text: "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.",
          ref: "2 Timothy 2:15",
        }}
      />

      <DegreeExplorer />

      <section
        id="accreditation"
        className="scroll-mt-16 border-t border-ink/15 bg-paper-2 py-16 md:py-24"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-ink md:text-4xl">
            Accreditation and operating status
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink">
            {accreditation.about}
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
            {accreditation.operatingStatus}
          </p>
        </div>
      </section>
    </>
  );
}
