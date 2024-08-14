import SignUp from "@/components/education/webinar/SignUp"
import WebinarBanner from "@/components/education/webinar/WebinarBanner"
import WebinarExperts from "@/components/education/webinar/WebinarExperts"
import WeeklyWebinars from "../../../components/education/webinar/WeeklyWebinars"


const WebinarPage = () => {
  return (
    <>
    <WebinarBanner/>
    <WeeklyWebinars/>
    <WebinarExperts/>
    <SignUp/>
    </>
  )
}

export default WebinarPage