"use client"
import React, { useState, useEffect, useContext } from "react";
import { FaEnvelope, FaUser, FaVideo } from "react-icons/fa6";
// import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import moment from "moment";
import Spinner from "react-bootstrap/Spinner";
import { TimePicker } from "antd";
import axios from "axios";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Button, Result } from "antd";
import MyContext from "../context/MyContext";
dayjs.extend(customParseFormat);
function StartChat(params) {
  const { language, setLanguage } = useContext(MyContext);
  const [selectedValue, setSelectedValue] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [meetingEmail, setMeetingEmail] = useState("");
  const [agenda, setAgenda] = useState("");
  const [booked, setBooked] = useState(null);
  const [scheduleLoading, setScheduleLoading] = useState(false);
  const [meetingEmailValidation, setMeetingEmailValidation] = useState(null);
  const [meetingEmailError, setMeetingEmailError] = useState(null);
  const [meetingSuccess, setMeetingSuccess] = useState(false);
  const [meetingError, setMeetingError] = useState(false);
  const [timeError, setTimeError] = useState("");
  const [scheduleResponse, setScheduleResponse] = useState(null);

  const {
    setFormName,
    setFormEmail,
    formEmail,
    formName,
    handleTicket,
    SetIsChatNew,
    availability,
    setChatLoading,
  } = params;

  const handleCHat = () => {
    SetIsChatNew(false);
    setChatLoading(true);
  };

  // const handleChange = (event) => {
  //   if (event.target.value == 1 || event.target.value == 2) {
  //     if (event.target.value == 1) {
  //       setLanguage("english");
  //     } else {
  //       setLanguage("arabic");
  //     }

  //     setSelectedValue(event.target.value);
  //   } else setSelectedValue(null);
  // };

  const handleName = (val) => {
    if (val) {
      setName(val);
    } else setEmail(null);
  };

  const handleEmail = (val) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(val)) {
      console.log("Email is valid");
      setEmail(val);
      setError(null); // Clear the error if email is valid
    } else {
      console.log("Email is not valid");
      setEmail(null);
      setError("Email is not valid"); // Set the error only if email is invalid
    }
  };

  const handleMeetingEmail = (val) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(val)) {
      console.log("Email is valid");
      setMeetingEmailValidation(val);
      setMeetingEmailError(null); // Clear the error if email is valid
    } else {
      console.log("Email is not valid");
      setMeetingEmailValidation(null);
      setMeetingEmailError("Email is not valid"); // Set the error only if email is invalid
    }
  };

  console.log(error, "error");

  const fetchScheduledDates = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SUPPORT_KEY}/api/fetch/scheduled/dates/calender`
    );
    console.log(res, "res");
    if (res.data.success) {
      setBooked(res.data.data);
    }
  };

  useEffect(() => {
    fetchScheduledDates();
  }, [date, time]);

  const handleError = () => {
    setMeetingError(false);
    setDate(null);
    setTime(null);
    setScheduleLoading(false);
  };

  const disabledDate = (current) => {
    // Check if the current day is before today or after two days from now
    const isBeforeToday = current && current < moment().startOf("day");
    const isAfterTwoDays = current && current > moment().add(5, "days");

    // Check if the current day is a Saturday
    const isSaturday = current.day() === 0;

    // Can not select days before today, after two days, and all Saturdays
    return isBeforeToday || isAfterTwoDays || isSaturday;
  };

  const now = moment();
  const thirtyMinutesLater = now.clone().add(30, "minutes");
  let disabledHours = [];
  let disabledMinutes = [];
  const disabledDateTime = () => {
    // Assuming 'now' is the current moment and 'thirtyMinutesLater' is calculated elsewhere
    if (date.isSame(now, "day")) {
      console.log("I'm disabling every thing", date, now);
      // Disable hours before 'thirtyMinutesLater'
      for (let i = 0; i < thirtyMinutesLater.hour(); i++) {
        disabledHours.push(i);
      }

      // Function to determine disabled minutes based on the current hour selection
      const calculateDisabledMinutes = (hour) => {
        console.log(
          hour,
          "hour<<<<",
          thirtyMinutesLater.hour(),
          "thirtyMinutesLater.hour()"
        );
        let minutes = [];
        if (hour > 0) {
          if (hour === thirtyMinutesLater.hour()) {
            if (thirtyMinutesLater.minute() > 45) {
              minutes = [0, 15, 30, 45];
            } else if (thirtyMinutesLater.minute() > 30) {
              minutes = [0, 15, 30];
            } else if (thirtyMinutesLater.minute() > 15) {
              minutes = [0, 15];
            } else if (thirtyMinutesLater.minute() > 0) {
              minutes = [0];
            }
          }
        } else {
          minutes = [0, 15, 30, 45];
        }

        booked?.forEach((booking) => {
          console.log(moment(booking).hour(), "===", hour);
          if (
            moment(date).isSame(moment(booking), "day") &&
            moment(booking).hour() === hour
          ) {
            const bookingMinute = moment(booking).minute();
            // Round down to the nearest quarter to align with your disabled minutes logic
            const roundedMinute = bookingMinute - (bookingMinute % 15);
            // Ensure the minute isn't already included
            if (!minutes.includes(roundedMinute)) {
              minutes.push(roundedMinute);
            }
          }
        });
        console.log(minutes, "minutes");
        return minutes.sort((a, b) => a - b);
      };

      // Adjust 'disabledMinutes' to call 'calculateDisabledMinutes' with the selected hour
      disabledMinutes = (selectedHour) =>
        calculateDisabledMinutes(selectedHour);
    } else {
      const calculateDisabledMinutesOfDay = (hour) => {
        let min = [];
        console.log("date is not same calculateDisabledMinutesOfDay", booked);
        booked.forEach((booking) => {
          console.log("date is not same date==>", date, "booking", booking);
          if (
            !moment(date).isSame(moment(booking), "day") &&
            moment(booking).hour() === hour
          ) {
            console.log("date is not same matched");
            const bookingMinute = moment(booking).minute();
            // Round down to the nearest quarter to align with your disabled minutes logic
            const roundedMinute = bookingMinute - (bookingMinute % 15);
            // Ensure the minute isn't already included
            if (!min.includes(roundedMinute)) {
              min.push(roundedMinute);
            }
          }
          // else {
          //   min.push(0, 15, 30, 45)
          // }
        });
        console.log("date is not same min ====>", min);
        return min.sort((a, b) => a - b);
      };

      disabledMinutes = (selectedHour) =>
        calculateDisabledMinutesOfDay(selectedHour);
      // Adjust 'disabledMinutes' to call 'calculateDisabledMinutes' with the selected hour
    }

    console.log(disabledMinutes);

    return {
      disabledHours: () => disabledHours,
      disabledMinutes: Array.isArray(disabledMinutes)
        ? () => disabledMinutes
        : disabledMinutes, // Pass the function directly without calling it here
      disabledSeconds: () => [],
    };
  };

  const onChange = (time, timeString) => {
    console.log("onChange time ", time);

    if (
      time &&
      (time.minute() == 0 ||
        time.minute() == 15 ||
        time.minute() == 30 ||
        time.minute() == 45)
    ) {
      setTime(time);
      setTimeError(false);
      return;
    } else {
      setTimeError(true);
      return;
    }
  };

  const onChangeDate = (date, dateString) => {
    setDate(date);
  };

  const combineDateTime = (date, time) => {
    if (!date || !time) return null;

    let combinedDateTime = new Date(date.getTime());
    combinedDateTime.setHours(time.getHours());
    combinedDateTime.setMinutes(time.getMinutes());
    combinedDateTime.setSeconds(time.getSeconds());

    return combinedDateTime;
  };

  const scheduleMeeting = async () => {
    setScheduleLoading(true);
    if (meetingEmail != "" && agenda != "" && date && time) {
      const dateTime = combineDateTime(new Date(date), new Date(time));
      const now = moment();
      const selectedDateTime = moment(dateTime);
      if (selectedDateTime.diff(now, "minutes") < 20) {
        setTimeError(true);
        setScheduleLoading(false);
        return;
      } else {
        setTimeError(false);
      }
      const data = {
        email: meetingEmail,
        agenda: agenda,
        date: dateTime,
      };
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SUPPORT_KEY}/api/add/event/calenders`,
        data
      );
      if (res.data.success) {
        setDate(null);
        setMeetingEmail("");
        setAgenda("");
        setTime(null);
        setScheduleLoading(false);
        setMeetingSuccess(true);
      } else {
        setMeetingError(true);
        setScheduleResponse(res.data.message);
      }
    }
  };

  const handleSetLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };
  return (
    <>
      {language ? (
        <>
          {!availability && (
            <div
              className="primex_start-chat-form primex_position-relative primex_container-fluid primex_d-flex primex_flex-column primex_justify-content-center primex_align-items-center primex_bg-white primex_my-5  primex_rounded primex_p-3"
              style={{ maxWidth: "85%" }}
            >
              <div
                className=" primex_position-absolute primex_rounded-circle primex_d-flex primex_align-items-center primex_justify-content-center  "
                style={{
                  top: "-14%",
                  height: "40px",
                  width: "40px",
                  backgroundColor: "#FCCD0A",
                  color: "#686868",
                }}
              >
                <FaEnvelope />
              </div>

              <p className="primex_p-0 primex_my-1 primex_text-center primex_leave-ticket-text">
                {language === "arabic"
                  ? "فريق الدعم غير متوفر حالياً الرجاء ارسال تذكرة، وسوف يتم الاجابة على اسألتكم على البريد الالكتروني"
                  : "The customer support team is unavailable currently. Please leave a ticket, and we’ll answer your questions using your email address."}
              </p>

              <button
                type="button"
                onClick={handleTicket}
                className="primex_btn primex_mt-2 primex_leave-ticket-button primex_font-weight-bolder"
                style={{ width: "100%" }}
              >
                {language === "arabic" ? "ترك تذكرة" : "Leave Ticket"}
              </button>
            </div>
          )}

          {availability && (
            <form
              className="primex_start-chat-form primex_position-relative primex_container-fluid primex_d-flex primex_flex-column primex_justify-content-center primex_align-items-center primex_bg-white primex_my-5 primex_mb-5  primex_rounded primex_p-3"
              style={{ maxWidth: "85%" }}
            >
              <div
                className="primex_position-absolute primex_rounded-circle primex_d-flex primex_align-items-center primex_justify-content-center  "
                style={{
                  top: "-7%",
                  height: "40px",
                  width: "40px",
                  backgroundColor: "#FCCD0A",
                  color: "#686868",
                }}
              >
                <FaUser />
              </div>

              <p className=" primex_p-0 primex_my-1 primex_text-center primex_live-chat-text">
                {language === "arabic"
                  ? "مرحبًا بك في الدردشة المباشرة ! يرجى ملء النموذج أدناه قبل بدء الدردشة"
                  : "Welcome to our LiveChat! Please fill in the form below before starting the chat."}
              </p>

              <div
                className="primex_input-group primex_my-1"
                dir={language === "arabic" ? "rtl" : "ltr"}
              >
                <label
                  htmlFor="startChatName"
                  className="primex_m-0 primex_text-black-50 primex_chat_label"
                >
                  {language === "arabic" ? "اسم" : "Name* :"}
                </label>
                <input
                  className="primex_rounded primex_w-100 "
                  type="text"
                  name="startChatName"
                  onChange={(e) => handleChatName(e)}
                  value={formName}
                />
              </div>
              <div
                className="primex_input-group primex_my-1"
                dir={language === "arabic" ? "rtl" : "ltr"}
              >
                <label
                  htmlFor="startChatEmail"
                  className="primex_m-0 primex_text-black-50 primex_chat_label"
                >
                  {language === "arabic" ? "بريد إلكتروني" : "Email* :"}
                </label>
                <input
                  className=" primex_rounded  primex_w-100 "
                  type="text"
                  name="startChatEmail"
                  onChange={(e) => handleChatEmail(e)}
                  value={formEmail}
                />
              </div>
              {error && (
                <p style={{ color: "red" }} className="email-error-color">
                  {error}
                </p>
              )}
              {/* <div>
                <select
                  className="primex_form-select primex_mt-1"
                  style={{ color: "grey", padding: "3px", fontWeight: "600" }}
                  aria-label="Default select example"
                  value={selectedValue}
                  onChange={handleChange}
                >
                  <option value={""}>Preferred Language </option>
                  <option value="1">English</option>
                  <option value="2">Arabic</option>
                </select>
              </div> */}
              <button
                type="button"
                disabled={name && email ? false : true}
                style={
                  selectedValue
                    ? { backgroundColor: "#FCCD0A" }
                    : { color: "grey", backgroundColor: "#FCCD0A" }
                }
                onClick={handleCHat}
                className=" primex_btn primex_w-100 primex_font-weight-bold primex_mt-2 primex_mb-3 primex_start_chat_btn"
              >
                {language === "arabic" ? "ابدأ الدردشة" : "Start the chat"}
              </button>
            </form>
          )}
          <div
            className="primex_start-chat-form primex_position-relative primex_container-fluid primex_d-flex primex_flex-column primex_justify-content-center primex_align-items-center primex_bg-white primex_my-5 primex_rounded primex_p-3"
            style={{ maxWidth: "85%" }}
          >
            {!meetingSuccess && !meetingError && (
              <>
                <div
                  className="primex_position-absolute primex_rounded-circle primex_d-flex primex_align-items-center primex_justify-content-center"
                  style={{
                    top: "-6%",
                    height: "40px",
                    width: "40px",
                    backgroundColor: "#FCCD0A",
                    color: "#686868",
                  }}
                >
                  <FaVideo />
                </div>

                <p className="primex_p-0 primex_my-1 primex_text-center">
                  {language === "arabic"
                    ? "الرجاء إدخال التفاصيل لتحديد موعد للاجتماع"
                    : "Please Enter Details to Schedule a meeting"}
                </p>

                <div
                  className="primex_input-group primex_my-1"
                  dir={language === "arabic" ? "rtl" : "ltr"}
                >
                  <label
                    htmlFor="startChatName"
                    className="primex_m-0 primex_text-black-50"
                  >
                    {language === "arabic" ? "نوع المشكله" : "Meeting Agenda"}{" "}
                    <span style={{ color: "red" }}>*</span> :
                  </label>
                  <input
                    className="primex_rounded primex_w-100"
                    type="text"
                    name="agenda"
                    onChange={(e) => setAgenda(e.target.value)}
                    value={agenda}
                  />
                </div>
                <div
                  className=" primex_input-group primex_my-1"
                  dir={language === "arabic" ? "rtl" : "ltr"}
                >
                  <label
                    htmlFor="startChatName"
                    className="primex_m-0 primex_text-black-50"
                  >
                    {language === "arabic" ? "بريد إلكتروني" : "Email"}
                    <span style={{ color: "red" }}>*</span> :
                  </label>
                  <input
                    className="primex_rounded primex_w-100"
                    type="email"
                    name="Email"
                    onChange={(e) => {
                      handleMeetingEmail(e.target.value);
                      setMeetingEmail(e.target.value);
                    }}
                    value={meetingEmail}
                    disabled={agenda ? false : true}
                    style={{ cursor: agenda ? "auto" : "not-allowed" }}
                  />
                </div>
                {meetingEmailError && (
                  <p style={{ color: "red" }}>{meetingEmailError}</p>
                )}
                <div
                  className="primex_input-group primex_my-1"
                  dir={language === "arabic" ? "rtl" : "ltr"}
                >
                  <label
                    htmlFor="startChatName"
                    className="primex_m-0 primex_text-black-50"
                  >
                    {language === "arabic"
                      ? "الرجاء تحديد التاريخ"
                      : "Please Select Date"}
                    <span style={{ color: "red" }}>*</span> :
                  </label>
                  <DatePicker
                    className="primex_w-100"
                    style={{
                      height: 40,
                      cursor: meetingEmailValidation ? "auto" : "not-allowed",
                    }}
                    format="YYYY-MM-DD"
                    onChange={onChangeDate}
                    disabledDate={disabledDate}
                    disabled={meetingEmailValidation ? false : true}
                    value={date}
                  />
                </div>

                <div
                  className=" primex_input-group primex_my-1"
                  dir={language === "arabic" ? "rtl" : "ltr"}
                >
                  <label
                    htmlFor="startChatName"
                    className="primex_m-0 primex_text-black-50"
                  >
                    {language === "arabic"
                      ? "الرجاء تحديد الوقت"
                      : "Please Select Time"}
                    <span style={{ color: "red" }}>*</span> :
                  </label>
                  <TimePicker
                    use12Hours
                    format="h:mm a"
                    onChange={onChange}
                    className="primex_w-100"
                    style={{ height: 40 }}
                    disabledTime={disabledDateTime}
                    disabled={date ? false : true}
                    minuteStep={15}
                    showNow={false}
                    value={time}
                    inputReadOnly={true}
                  />
                  {timeError && (
                    <p style={{ color: "red" }}>Please select a valid time.</p>
                  )}
                </div>
                <button
                  type="button"
                  disabled={
                    date && agenda && meetingEmail && time && !scheduleLoading
                      ? false
                      : true
                  }
                  style={
                    selectedValue
                      ? { backgroundColor: "#FCCD0A" }
                      : { color: "grey", backgroundColor: "#FCCD0A" }
                  }
                  onClick={scheduleMeeting}
                  className="primex_btn primex_w-100 primex_font-weight-bold primex_mt-2 primex_mb-3"
                >
                  {scheduleLoading ? (
                    <Spinner
                      className="primex_spinner-border primex_spinner-border-sm"
                      animation="spinner-border"
                      role="status"
                      style={{ color: "#686868" }}
                    />
                  ) : language === "arabic" ? (
                    "جدول"
                  ) : (
                    "Schedule"
                  )}
                </button>
              </>
            )}
            {meetingSuccess && (
              <div style={{ marginTop: "-25%" }}>
                <Result
                  status="success"
                  title="Meeting Scheduled Successfully"
                  subTitle="Please check your email and mark it as yes to ensure that you'll attend the meeting"
                />
              </div>
            )}
            {meetingError && (
              <>
                {scheduleResponse ===
                "You have already scheduled a meeting on this date." ? (
                  <Result
                    status="403"
                    title="Failed to Schedule Meeting"
                    subTitle="You have already scheduled a meeting on this date."
                    extra={
                      <Button type="primary" onClick={handleError}>
                        Back Home
                      </Button>
                    }
                  />
                ) : (
                  <div style={{ marginTop: "-25%" }}>
                    <Result
                      status="500"
                      title={<span style={{ color: "red" }}>Failed</span>}
                      subTitle="Please try again later"
                      extra={
                        <Button
                          onClick={handleError}
                          type="primary"
                          style={{ backgroundColor: "#fccd0a" }}
                        >
                          Try again
                        </Button>
                      }
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="chat-screen primex_px-0">
            <div className="chat-screen-logo">
              <img src="/assests/images/chat-screen-logo.svg" alt="" />
            </div>
            <div className="select-language">
              <p className="primex_text-dark ">Select Language</p>
            </div>
            <div
              className="primex_d-flex primex_flex-column primex_align-items-center primex_justify-content-center"
              style={{ width: "55%" }}
            >
              <button
                type="button"
                style={{
                  color: "grey",
                  backgroundColor: "#FCCD0A",
                }}
                className="chat-screen-btn-img primex_btn primex_w-100 primex_font-weight-bold primex_mt-1 primex_mb-1"
                onClick={() => handleSetLanguage("arabic")}
              >
                <img src="/assests/images/chat-screen-icon2.svg" alt="" />
                عربی
              </button>
              <button
                type="button"
                style={{ color: "grey", backgroundColor: "#FCCD0A" }}
                className="chat-screen-btn primex_btn primex_w-100 primex_font-weight-bold primex_mt-1 primex_mb-1"
                onClick={() => handleSetLanguage("english")}
              >
                <img src="/assests/images/chat-screen-icon1.svg" alt="" />
                English
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default StartChat;
