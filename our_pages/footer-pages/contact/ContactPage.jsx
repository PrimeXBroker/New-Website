import ContactBanner from "@/components/footer-pages/contact/Banner";
import HaveQuestion from "@/components/footer-pages/contact/HaveQuestion";
// import FormTabs from "@/components/forms/FormTabs";
import LocationContextProvider from "@/context/location-context";

const ContactPage = () => {
  return (
    <>
      <LocationContextProvider>
        <ContactBanner />
        <HaveQuestion />
        {/* <FormTabs /> */}
      </LocationContextProvider>
    </>
  );
};

export default ContactPage;
