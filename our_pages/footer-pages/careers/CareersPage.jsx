import Banner from "@/components/footer-pages/careers/Banner";
import CareerForm from "@/components/footer-pages/careers/CareerForm";
import LocationContextProvider from "@/context/location-context";
import JobList from "./JobList";

const CareersPage = () => {
  return (
    <>
      <LocationContextProvider>
        <Banner />
        <JobList />
        {/* <CareerForm/> */}
      </LocationContextProvider>
    </>
  );
};

export default CareersPage;
