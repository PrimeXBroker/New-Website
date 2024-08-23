import SignUp from "@/components/education/webinar/SignUp";
import WebinarBanner from "@/components/education/webinar/WebinarBanner";
import WebinarExperts from "@/components/education/webinar/WebinarExperts";
// import WeeklyWebinars from "../../../components/education/webinar/WeeklyWebinars";
import WeeklyWebinarsNew from "@/components/education/webinar/WeeklyWebinarsNew";

const WebinarPage = () => {
  return (
    <>
      <WebinarBanner />
      <WeeklyWebinarsNew />
      {/* <WeeklyWebinars/> */}
      <WebinarExperts />
      <SignUp />
    </>
  );
};

export default WebinarPage;
