import ContactAlternatives from "@/components/contact/ContactAlternatives";
import ContactAreas from "@/components/contact/ContactAreas";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactNextSteps from "@/components/contact/ContactNextSteps";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactAreas />
      <ContactForm />
      <ContactNextSteps />
      <ContactAlternatives />
    </main>
  );
}