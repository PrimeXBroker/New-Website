import ContactBanner from "@/components/footer-pages/contact/Banner";
import HaveQuestion from "@/components/footer-pages/contact/HaveQuestion";
// import ContactForm from "@/components/forms/ContactForm";
// import SuggestionForm from "@/components/forms/SuggestionForm";
import LocationContextProvider from "@/context/location-context";

const ContactPage = () => {
  return (
    <>
      <LocationContextProvider>
        <ContactBanner />
        <HaveQuestion />
        {/* <ContactForm /> */}
        {/* <SuggestionForm /> */}
      </LocationContextProvider>
    </>
  );
};

export default ContactPage;
