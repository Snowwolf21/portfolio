import { cn } from "@/lib/utils";
import SectionHeading from "../ui/SectionHeading";

interface Props {
  className?: string;
}

export default function ContactSection({ className }: Props) {
  return (
    <section
      id="contact"
      className={cn("py-20", className)}
    >
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Ready to collaborate?"
          subtitle="Let’s bring your ideas to life."
        />

      </div>
    </section>
  );
}