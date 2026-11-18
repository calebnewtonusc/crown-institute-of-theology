import type { Metadata } from "next";
import { ApplicationLetter } from "@/components/ApplicationLetter";
import { PageHeader } from "@/components/ui";
import { application } from "@/lib/content";

export const metadata: Metadata = {
  title: "Application",
  description:
    "Getting started at Crown Institute of Theology. Send your name, address and email to begin a program built around you.",
};

export default function ApplicationPage() {
  return (
    <>
      <PageHeader
        title="Let's talk."
        lead={application.body[0]}
        verse={{
          text: "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you.",
          ref: "Matthew 7:7",
        }}
      />
      <section className="bg-paper-2 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ApplicationLetter />
        </div>
      </section>
    </>
  );
}
