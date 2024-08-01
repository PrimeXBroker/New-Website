"use client"
import React, { useEffect, useState, useContext, useMemo, useRef } from "react";
import { BsFillChatLeftFill } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { CiPaperplane } from "react-icons/ci";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { PiPaperPlaneRightBold } from "react-icons/pi";
import { CiCamera } from "react-icons/ci";
import { FaTimesCircle } from "react-icons/fa"; // Example using react-icons
import { GoDotFill } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import StartChat from "./startChatBox";
import MyContext from "../context/MyContext";
import {
  FaMinus,
  FaEllipsisV,
  FaBell,
  FaBellSlash,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import { Button, Popconfirm, Switch } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { FcAssistant } from "react-icons/fc";
import { Rate } from "antd";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import Link from "next/link";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import io from "socket.io-client";
import axios from "axios";
import { useForm } from "react-hook-form";
import Spinner from "react-bootstrap/Spinner";
import { Result } from "antd";
import moment from "moment";
// import "./mychat.css"
function chat() {
  const [isMsgSeen, setIsMsgSeen] = useState(false);
  const [unread, setUnread] = useState(false);
  const [AgentId, setAgentId] = useState(null);
  // const [isChatOpen, SetChatOpen] = useState(false);
  const { isChatOpen, SetChatOpen } = useContext(MyContext);
  const { language, setLanguage } = useContext(MyContext);
  const { isGreetingVisible, setIsGreetingVisible, socket, setSocket } =
    useContext(MyContext);
  const [isChatNew, SetIsChatNew] = useState(true);
  const [isleaveTicket, setIsLeaveTicket] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState("");
  const [availability, setAvailability] = useState(true);
  const { queue, setQueue } = useContext(MyContext);
  const [arrow, setArrow] = useState("Show");
  const [sound, setSound] = useState(true);
  const [restore, setRestore] = useState(false);
  const [finished, setFinished] = useState(false);
  const messageListRef = useRef(null);
  const imageDivRef = useRef(null);
  const [Feedback, setFeedback] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [openImagesDiv, setOpenImagesDiv] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [minimizeImagesDiv, setMinimizeImagesDiv] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  // const sessionID = localStorage.getItem("session_id");
  // const [sessionID, setSessionId] = useState(() => localStorage.getItem("session_id") || '');
  const [sessionID, setSessionID] = useState(null);
  const [isAgentTyping, setIsAgentTyping] = useState(false);
  // const [isMsgSeen, setIsMsgSeen] = useState(false);
  const [isAgentFirstName, setIsAgentFirstName] = useState();
  const [isAgentLastName, setIsAgentLastName] = useState();
  const [likeState, setLikeState] = useState({ liked: false, disliked: false });
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message
  const [errorMessageResolved, setErrorMessageResolved] = useState(""); // New state for error message
  const [disableFeedbackButton, setDisableFeedbackButton] = useState(false);
  const [loading, setLoading] = useState();
  const [ticketSubmission, setTicketSubmission] = useState(false);
  const [comment, setComment] = useState("");
  const [image, setImage] = useState(null);
  const [chatLoading, setChatLoading] = useState(false);

  // leave ticket form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsGreetingVisible(true);
  //   }, 15000);

  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    const hasGreeted = sessionStorage.getItem("hasGreeted");

    if (!hasGreeted) {
      const timer = setTimeout(() => {
        setIsGreetingVisible(true);
        sessionStorage.setItem("hasGreeted", "true");
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedSessionID = localStorage.getItem("session_id") || null;
      setSessionID(storedSessionID);
    }
  }, [socket]);

  const onSubmit = async (data) => {
    console.log("clicked", data);
    setLoading(true);
    try {
      const info = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        body: data.body,
      };
      const resp = await axios.post(
        `${process.env.NEXT_PUBLIC_SUPPORT_KEY}/api/create/ticket`,
        info
      );
      if (resp?.data?.success) {
        setLoading(false);
        setTicketSubmission(true);
        reset();
      }
    } catch (err) {
      console.log(err, "here is the error");
    }
  };
  const handleTicketBack = () => {
    setIsLeaveTicket(false);
    setTicketSubmission(false);
  };

  function linkify(text) {
    const urlRegex =
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|?]+)/gi;
    return text.replace(urlRegex, function (url) {
      return (
        '<a href="' +
        url +
        '" target="_blank" rel="noopener noreferrer">' +
        url +
        "</a>"
      );
    });
  }
  //console hello world
  const SubmitFeedback = async (e) => {
    setDisableFeedbackButton(true);
    console.log("disableFeedbackButtonFalse1", disableFeedbackButton);
    console.log("disableFeedbackButtonTrue", disableFeedbackButton);
    const isResolvedSelected = Feedback?.resolved ?? null;
    if (
      (likeState.liked || likeState.disliked) &&
      isResolvedSelected === null
    ) {
      setErrorMessageResolved("Please select yes or no before proceeding.");
      console.log("condition1");
    } else if (
      !likeState.liked &&
      !likeState.disliked &&
      isResolvedSelected !== null
    ) {
      setErrorMessage("Please select liked or disliked before proceeding.");
      console.log("condition2");
    } else if (
      !likeState.liked &&
      !likeState.disliked &&
      isResolvedSelected === null
    ) {
      console.log("condition3");
      setConversation([]);
      setFinished(false);
      SetIsChatNew(true);
      setFeedback(null);
    } else {
      setErrorMessage("");
      setErrorMessageResolved("");
    }
    console.log("disableFeedbackButtonFalse1", disableFeedbackButton);
    if (Feedback && (likeState.liked || likeState.disliked)) {
      console.log("condition4");
      console.log("JFeedbackust Before Submitting ", Feedback);
      console.log(conversation, "conversationtesting");
      let feedback = Feedback;
      Object.assign(feedback, {
        userId: conversation?.support_userId,
        conversationId: conversation?._id,
        liked: likeState.liked,
      });
      if (comment != "") {
        Object.assign(feedback, { comment: comment });
      }

      try {
        console.log(feedback, "feedbacktesting");
        const feedbackRes = await axios.post(
          `${process.env.NEXT_PUBLIC_SUPPORT_KEY}/api/create/feedback`,
          feedback
        );
        if (feedbackRes.data.success) {
          console.log("Chat Feedback Entered succesfully ", feedbackRes);
          setDisableFeedbackButton(false);
          setConversation([]);
          setFinished(false);
          SetIsChatNew(true);
          setFeedback(null);
          setComment("");
          setLikeState({ liked: false, disliked: false });
          console.log("disableFeedbackButtonFalse2", disableFeedbackButton);
        } else {
          console.log("Error Chat Feedback ", feedbackRes);
        }
      } catch (error) {
        console.log("Error While Adding Feedback ", error);
      }
    }
    console.log("Form Data", Feedback);
  };
  const setFeedbackData = (e) => {
    var key = null;
    var value = null;
    if (e >= 0 && e <= 5) {
      key = "stars";
      value = e;
    } else {
      key = e.target.name;
      if (e.target.value === "Yes") {
        value = true;
      } else {
        value = false;
      }
    }
    setFeedback((prevState) => ({
      ...prevState,
      [key]: value,
      ["id"]: conversation.support_userId,
    }));
    setErrorMessageResolved("");
  };
  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }
    if (arrow === "Show") {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);
  // cvzx
  const handlehange = () => {
    setSound(!sound);
  };

  const playNotificationSound = () => {
    const audio = new Audio("/assets/message.mp3");
    audio.play();
  };

  const removeImage = (indexToRemove) => {
    setSelectedImages(
      selectedImages.filter((_, index) => index !== indexToRemove)
    );
    setFiles(selectedImages.filter((_, index) => index !== indexToRemove));
  };

  useEffect(() => {
    if (!selectedImages.length) {
      setOpenImagesDiv(false);
    }
  }, [selectedImages]);

  console.log(image, "image");

  const JoinChat = async () => {
    // Fetch the user's IP address from a public IP API
    const fetchIP = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        return data.ip;
      } catch (error) {
        console.error("Failed to fetch IP address:", error);
        return "IP not found";
      }
    };

    const customerIP = await fetchIP();
    // const sessionID = localStorage.getItem('session_id');
    socket.emit("join", {
      formName,
      formEmail,
      sessionID,
      language,
      customerIP,
    });
  };

  const changeUnread = () => {
    SetChatOpen((open) => {
      if (!open) {
        console.log("isChatOpen", open);
        setUnread(true);
      }
      return open;
    });
  };

  const createConnection = () => {
    try {
      const newSocket = io(
        // "http://localhost:4001",
        // "http://192.168.70.25:4001",

        // {
        //     query: { sessionID: sessionID },
        // }
        process.env.NEXT_PUBLIC_SUPPORT_KEY,
        // "https://primexbroker.online",
        {
          path: "/api/socket.io",
          withCredentials: true,
          transports: ["websocket"],
          query: { sessionID: sessionID },
          // autoConnect: true, // Prevent automatic connection
          reconnection: true,
          reconnectionDelay: 1000,
          reconnectionDelayMax: 5000,
          reconnectionAttempts: Infinity,
        }
        // ,
        // {
        //     query: { sessionID: sessionID }
        // }
      );

      if (sessionID) {
        const data = {
          customer: true,
          sessionID: sessionID,
        };
        newSocket.emit("update_socket", data);
      }
      // const data = {
      //   customer: true,
      //   sessionID: sessionID,
      // };
      // newSocket.emit("update_socket", data);
      console.log("socket Connected ", newSocket);
      setSocket(newSocket);

      newSocket.on("reconnect");

      newSocket.on("new_message", (message) => {
        console.log("New message Recieved", message);
        setIsMsgSeen(false);
        setChatLoading((load) => {
          if (load) {
            return false;
          }
        });
        if (message.ended) {
          setRestore(false);
          SetIsChatNew(true);
          setFinished(true);
        } else if (message.queue) {
          console.log("index is here buddy", message.index);
          setQueue(message.index);
        } else if (message.conversation) {
          setQueue(null);
          setAgentId(message.conversation.support_userId);
          setConversation(message.conversation);
          changeUnread();
          setUserImage(message.conversation.support_userId);
          if (message.conversation.messages.length) {
            console.log("entered", message?.conversation?.messages);
            if (sound) {
              if (
                message.conversation?.messages[
                  message?.conversation?.messages?.length - 1
                ]?.support
              ) {
                playNotificationSound();
              }
            }
          } else if (!message.conversation.messages.length && sound) {
            playNotificationSound();
          }
        }
      });
      if (isChatNew) {
        newSocket.on("availability_response", (message) => {
          console.log(message, "availability_response");
          setAvailability(message.availability);
        });
      }

      newSocket.on("sessionID", (newSessionID) => {
        if (!localStorage.getItem("session_id")) {
          localStorage.setItem("session_id", newSessionID);
        } else {
          const data = {
            customer: true,
            sessionID: localStorage.getItem("session_id"),
          };
          newSocket.emit("update_socket", data);
          console.log(conversation, "setting update Socket again");
        }
        // localStorage.setItem("session_id", newSessionID);

        console.log("newSessionID===>", newSessionID);
      });

      newSocket.on("update_socket_result", (convers) => {
        console.log("new conversation", convers);
        console.log("old conversation", conversation);
        if (convers.found) {
          setRestore(true);
          setConversation(convers.conversation);
          SetIsChatNew(false);
        }
      });
      let typingTimeout = null;

      newSocket.on("agentTyping", (data) => {
        console.log("agentTypingdata", data);
        setIsAgentTyping(true);
        setIsAgentFirstName(data.name.firstName);
        setIsAgentLastName(data.name.lastName);
        clearTimeout(typingTimeout);
        typingTimeout = setTimeout(() => {
          setIsAgentTyping(false);
        }, 2000);
      });

      newSocket.on("agentStopTyping", () => {
        setIsAgentTyping(false);
        clearTimeout(typingTimeout);
      });

      newSocket.on("msgSeen", (data) => {
        setIsMsgSeen(true);
      });

      return () => {
        newSocket.off("new_message");
        newSocket.off("availability_response");
        newSocket.off("sessionID");
        newSocket.off("update_socket_result");
        newSocket.off("agentTyping");
        newSocket.off("agentStopTyping");
        newSocket.off("msgSeen");
      };
      //
      // j
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //     const handleBeforeUnload = (event) => {
  //         // Check the condition
  //         if (!isChatNew) {
  //             // Cancel the event and show the warning if isChatNew is true
  //             event.preventDefault(); // Cancel the event as stated by the standard.
  //             event.returnValue = 'Your chat connection will be lost if you reload'; // Chrome requires returnValue to be set
  //         }
  //         // If isChatNew is false, nothing is done, allowing the reload to proceed
  //     };

  //     window.addEventListener("beforeunload", handleBeforeUnload);

  //     return () => {
  //         window.removeEventListener("beforeunload", handleBeforeUnload);
  //     };
  // }, [isChatNew]);
  useEffect(() => {
    // Scroll to the bottom when messages change
    scrollToBottomMessageDiv();
  }, [conversation]);
  // listerner for wifi connection
  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    // Cleanup
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  useEffect(() => {
    scrollToBottomMessageDiv();
  }, [isOnline]);

  useEffect(() => {
    if (isChatOpen) createConnection();
  }, [isChatOpen]);

  // ddf
  const EndChat = () => {
    if (socket) {
      const EndChatSocketRes = socket.emit("end_chat", {
        conversationId: conversation?._id,
        support_socket: conversation?.support_socket_Id,
        customer_socket: conversation?.customer_socket_Id,
        customer: true,
      });
      console.log("Socket Result After Ending", EndChatSocketRes);
    } else {
      console.log("The Socket is Null I think", socket);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (socket && conversation?._id) {
        // console.log('This will run every 5 seconds!');
        if (
          conversation.customer_socket_Id.toString() != socket.id.toString()
        ) {
          socket.emit("updation", {
            conversationId: conversation?._id,
            customer_socket: conversation?.customer_socket_Id,
          });
        }
      }
      // Action to be performed every 5 seconds
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [socket, conversation]);
  // const sendImages = async () => {
  //   if (files?.length) {
  //     console.log(files, "files");
  //     let _id = "1";
  //     const formData = new FormData();
  //     formData.append("action", "attachments");
  //     formData.append("_id", _id);
  //     for (const file of files) {
  //       formData.append("files[]", file);
  //     }

  //     const imageSendRes = await axios.post(
  //       `${process.env.NEXT_PUBLIC_API_KEY}/api/upload`,
  //       formData
  //     );
  //     console.log(imageSendRes, "imageSendRes");
  //     if (imageSendRes?.data?.success) {
  //       console.log(
  //         "Image Send to Database Succesfully Now Moving To send Emit",
  //         imageSendRes
  //       );
  //       setSelectedImages([]);
  //       setFiles([]);
  //       const results = imageSendRes.data.result;

  //       if (results?.length) {
  //         results?.map((res) =>
  //           socket.emit("send_message", {
  //             message: {
  //               body: "",
  //               support: false,
  //               file: true,
  //               file_path: res.result.file_path,
  //             },
  //             to: conversation?.support_socket_Id,
  //             conversation_id: conversation?._id,
  //             from: conversation?.customer_socket_Id,
  //           })
  //         );
  //       } else {
  //         socket.emit("send_message", {
  //           message: {
  //             body: "",
  //             support: false,
  //             file: true,
  //             file_path: results.file_path,
  //           },
  //           to: conversation?.support_socket_Id,
  //           conversation_id: conversation?._id,
  //           from: conversation?.customer_socket_Id,
  //         });
  //       }
  //       setOpenImagesDiv(false);
  //       console.log("All images truggered", results);
  //     } else {
  //       console.log(
  //         "There Is some Problem while uploading the images",
  //         imageSendRes
  //       );
  //     }
  //   }
  // };
  console.log("setIsMsgSeen", isMsgSeen);
  console.log("unread", unread);
  const sendImages = async () => {
    // Check if there are files to upload
    if (files && files.length) {
      console.log(files, "files");
      const _id = "1"; // Assuming this is a placeholder or test value
      const formData = new FormData();
      formData.append("action", "attachments");
      formData.append("_id", _id);

      // Append each file to the formData
      files.forEach((file) => {
        formData.append("files[]", file);
      });
      setImageLoading(true);
      try {
        const imageSendRes = await axios.post(
          `${process.env.NEXT_PUBLIC_SUPPORT_KEY}/api/upload`,
          // `http://192.168.70.25:4000/api/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (imageSendRes.data.success) {
          console.log(
            "Image Send to Database Successfully Now Moving To send Emit",
            imageSendRes
          );
          setSelectedImages([]);
          setFiles([]);

          const results = imageSendRes.data.result;

          // Check if results is an array and has length
          if (Array.isArray(results) && results.length) {
            results.forEach((res) => {
              socket.emit("send_message", {
                message: {
                  body: "",
                  support: false,
                  file: true,
                  file_path: res.result.file_path, // Assuming each result has a file_path
                },
                to: conversation?.support_socket_Id,
                conversation_id: conversation?._id,
                from: conversation?.customer_socket_Id,
              });
            });
            setIsMsgSeen(false);
          } else if (results) {
            // Fallback for single result handling
            socket.emit("send_message", {
              message: {
                body: "",
                support: false,
                file: true,
                file_path: results.file_path,
              },
              to: conversation?.support_socket_Id,
              conversation_id: conversation?._id,
              from: conversation?.customer_socket_Id,
            });
            setIsMsgSeen(false);
          }
          setOpenImagesDiv(false);
          console.log("All images triggered", results);
        } else {
          console.error(
            "There Is some Problem while uploading the images",
            imageSendRes
          );
        }
        setImageLoading(false);
      } catch (error) {
        console.error("Error uploading images:", error);
        // Handle errors (e.g., network error, server error) here
        setImageLoading(false);
      }
    }
  };

  const sendMessage = () => {
    if (socket) {
      const data = {
        message: {
          body: null,
        },
        to: conversation?.support_socket_Id,
        conversation_id: conversation?._id,
        from: socket.id,
      };
      socket.emit("user_typing_chat", data);
      if (message !== "") {
        const data = {
          message: {
            body: message,
            support: false,
          },
          to: conversation?.support_socket_Id,
          conversation_id: conversation?._id,
          from: socket.id,
        };

        const newMessage = {
          body: message,
          support: false,
        };

        // Assume `conversation` is your state variable and `setConversation` is the function to update the state
        if (conversation !== "") {
          setConversation((prevConversation) => ({
            ...prevConversation, // Copy previous state
            messages: [...prevConversation.messages, newMessage], // Add new message to the messages array
          }));
        }

        socket.emit("send_message", data);
        setIsMsgSeen(false);
        setMessage("");
      }
    }
  };
  console.log(conversation, "updated");
  useEffect(() => {
    if (!isChatNew && !restore) {
      JoinChat();
    }
  }, [isChatNew]);

  useEffect(() => {
    if (isChatNew && socket) {
      socket.emit("support_availability");
    }
  }, [isChatNew, socket, isChatOpen]);

  const setUserImage = async (userId) => {
    const imageRes = await axios.get(
      `${process.env.NEXT_PUBLIC_SUPPORT_KEY}/api/get/user/profile/image/${userId}`
    );
    console.log(imageRes.data, "imageRes");
    if (imageRes.data.success) {
      setImage(imageRes.data.image);
    }
  };
  const sendTypingMessage = () => {
    if (socket && message !== "") {
      const data = {
        message: {
          body: message,
        },
        to: conversation?.support_socket_Id,
        conversation_id: conversation?._id,
        from: socket.id,
      };
      socket.emit("user_typing_chat", data);
    }
  };
  // useEffect(() => {
  //   if (socket) {
  //     socket.on("new_message", (message) => {
  //       console.log("New message Recieved", message);
  //       if (message.ended) {
  //         setRestore(false);
  //         SetIsChatNew(true);
  //         setFinished(true);
  //       } else if (message.queue) {
  //         console.log("index is here buddy", message.index);
  //         setQueue(message.index);
  //       } else if (message.conversation) {
  //         setQueue(null);
  //         setAgentId(message.conversation.support_userId);
  //         setConversation(message.conversation);

  //         setUserImage(message.conversation.support_userId);
  //         if (message.conversation.messages.length) {
  //           console.log("entered", message?.conversation?.messages);
  //           if (sound) {
  //             if (
  //               message.conversation?.messages[
  //                 message?.conversation?.messages?.length - 1
  //               ]?.support
  //             ) {
  //               playNotificationSound();
  //             }
  //           }
  //         } else if (!message.conversation.messages.length && sound) {
  //           playNotificationSound();
  //         }
  //       }
  //     });
  //     if (isChatNew) {
  //       socket.on("availability_response", (message) => {
  //         console.log(message, "availability_response");
  //         setAvailability(message.availability);
  //       });
  //     }

  //     socket.on("ping", () => {
  //       console.log("Ping received", sessionID);
  //       const data = {
  //         sessionID,
  //       };
  //       socket.emit("pong", data); // Respond with pong
  //     });

  //     socket.on("sessionID", (newSessionID) => {
  //       setSessionId((old)=> (newSessionID))
  //       localStorage.setItem("session_id", newSessionID);

  //       console.log("newSessionID===>", newSessionID);
  //     });

  //     socket.on("update_socket_result", (convers) => {
  //       console.log("new conversation", convers);
  //       console.log("old conversation", conversation);
  //       if (convers.found) {
  //         setRestore(true);
  //         setConversation(convers.conversation);
  //         SetIsChatNew(false);
  //       }
  //     });
  //   }
  // }, [socket]);

  const content = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Switch
        checkedChildren={
          <div style={{ color: "rgb(64,64,64)", fontWeight: "bold" }}>
            {" "}
            Off{" "}
          </div>
        }
        unCheckedChildren={
          <div style={{ color: "rgb(64,64,64)", fontWeight: "bold" }}> On </div>
        }
        style={{ backgroundColor: "#FCCD0A" }}
        checked={sound}
        onClick={handlehange}
      />
      {sound ? (
        <FaBell style={{ fontSize: "18px", color: "#FCCD0A" }} />
      ) : (
        <FaBellSlash style={{ fontSize: "20px", color: "#FCCD0A" }} />
      )}
    </div>
  );

  const adjustInputHeight = (input) => {
    input.style.height = "45px";
    input.style.height = input.scrollHeight + "px";
  };

  //handlers

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && event.shiftKey) {
      // Insert newline for Shift + Enter
      event.preventDefault(); // Prevents default Enter key behavior
      setMessage((value) => value + "\n"); // Append newline character
      event.target.style.height = "auto"; // Adjust height if necessary
    } else if (event.key === "Enter") {
      sendMessage();
      event.preventDefault();
      event.target.style.height = "45px";
    }
  };

  const handleChat = () => {
    SetChatOpen(!isChatOpen);
    setUnread(false);
    setIsGreetingVisible(false);
  };

  const handleTicket = () => {
    setIsLeaveTicket(!isleaveTicket);
  };
  // const handleImage = (e) => {
  //     if (e.target.files) {
  //         console.log("Files Found", e.target.files);
  //         const selectedFIles = [];
  //         const fil = e.target.files;
  //         const targetFilesObject = [...fil];
  //         targetFilesObject.map((file) => {
  //             return selectedFIles.push(URL.createObjectURL(file));
  //         });
  //         setSelectedImages( (selectedImages ) => [...selectedImages, selectedFIles]);
  //         setFiles((files) => [...files, e.target.files]);
  //         setOpenImagesDiv(true);
  //         setMinimizeImagesDiv(true);
  //     }
  // };
  const handleImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log("Files Found", e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...e.target.files]);
      // Convert FileList to Array and create object URLs
      const selectedFiles = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // Update state for selected images
      setSelectedImages((prevImages) => [...prevImages, ...selectedFiles]);

      // Update state for file

      setOpenImagesDiv(true);
      setMinimizeImagesDiv(true);
    }
  };

  const scrollToBottomMessageDiv = () => {
    if (messageListRef.current) {
      console.log(
        messageListRef.current.scrollTop,
        "====",
        messageListRef.current.scrollHeight
      );
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    } else if (imageDivRef.current) {
      imageDivRef.current.scrollTop = imageDivRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (openImagesDiv) {
      scrollToBottomMessageDiv();
    }
  }, [openImagesDiv]);

  const toggleLike = () => {
    setLikeState((prevState) => ({
      liked: !prevState.liked,
      disliked: prevState.liked ? prevState.disliked : false,
    }));
    setErrorMessage("");
  };

  const toggleDislike = () => {
    setLikeState((prevState) => ({
      liked: prevState.disliked ? prevState.liked : false,
      disliked: !prevState.disliked,
    }));
    setErrorMessage("");
  };

  // Function to handle clicking on the cross button
  const handleGreetingClose = () => {
    setIsGreetingVisible(false); // Hide greeting and button
  };

  // const handleSetLanguage = (selectedLanguage) => {
  //   setLanguage(selectedLanguage);
  // };

  console.log("language-chat", language);

  return (
    <>
      {/* Chat box Start */}

      <div
        className={
          isChatOpen
            ? "primex_chat-box  primex_chat-box-active  primex_p-0"
            : "  primex_chat-box  primex_chat-not-active  "
        }
        style={{
          backgroundColor: "#f7f7f7",
          zIndex: 23000,
        }}
        dir="ltr"
      >
        <div
          id="chat-header"
          className="primex_chat-header  primex_row primex_p-0 primex_container-fluid primex_m-0 primex_position-absolute "
          style={{
            backgroundColor: "#FCCD0A",
            top: "0%",
            height: "60px",
            boxShadow: "0px 0px 7px 0px black",
          }}
        >
          <div
            id="header-option"
            className="primex_container-fluid primex_d-flex primex_justify-content-center primex_align-items-center primex_col-2 primex_p-0"
          >
            <Popover
              trigger="click"
              style={{ zIndex: 1000000 }}
              placement="bottomRight"
              title={"Message Sound"}
              content={content}
              arrow={mergedArrow}
            >
              <a
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  color: "rgb(63,63,63)",
                  cursor: "pointer",
                }}
              >
                <FaEllipsisV />{" "}
              </a>
            </Popover>
          </div>

          <div
            id="header-text"
            className="primex_container-fluid primex_d-flex primex_justify-content-center primex_align-items-center primex_col-7 primex_p-0"
          >
            <p className="primex_m-0  primex_font-weight-bold primex_text-dark primex_welcome_text">
              {language === "arabic"
                ? "مرحبا بكم في برايم اكس"
                : "Welcome to PrimeX"}
            </p>
          </div>
          <div
            id="header-close-window"
            className="primex_col-3  primex_d-flex primex_justify-content-around primex_align-items-center "
          >
            <a className=" primex_minimize-window-and-btn" onClick={handleChat}>
              <FaMinus />
            </a>
            {!isChatNew && (
              <div className={language === "arabic" ? "rtl" : "ltr"}>
                <Popconfirm
                  placement="leftTop"
                  className="zIndex_pop"
                  title={
                    language === "arabic" ? "هل أنت متأكد!" : "Are you sure!"
                  }
                  description={
                    language === "arabic"
                      ? " سيتم قطع الاتصال"
                      : "The connection  will be disconnected "
                  }
                  okText={language === "arabic" ? "نهاية المحادثة" : "End Chat"}
                  onConfirm={EndChat}
                  icon={
                    <QuestionCircleOutlined
                      style={{
                        color: "red",
                      }}
                    />
                  }
                  cancelText={language === "arabic" ? "الغاء" : "Cancel"}
                >
                  <a className=" primex_minimize-window-and-btn">
                    <FaXmark />
                  </a>
                </Popconfirm>
              </div>
            )}
          </div>
        </div>
        <div
          className=" primex_chat-area primex_container-fluid primex_d-flex  primex_overflow-auto primex_px-0"
          ref={(messageListRef, imageDivRef)}
          style={{
            height: "90%",
            margin: "60px 60px 0px 0px",
            zIndex: "-1",
            flexDirection: "column",
          }}
        >
          <div className=" primex_mb-5 ">
            {queue && (
              <div
                className="primex_text-center primex_mt-2"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "70%",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#E9EAEC",
                    width: "80%",
                    paddingTop: 5,
                    borderRadius: 10,
                  }}
                >
                  <p
                    style={{ fontSize: 14 }}
                  >{`your number in queue ${queue}`}</p>
                </div>
              </div>
            )}
            {conversation?.messages && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={image ? image : "/assets/images/icon.png"}
                  style={{ borderRadius: "50%", width: "50px" }}
                />
                <p className="primex_joined_chat_title">{`${conversation.support_name} joined the chat`}</p>
              </div>
            )}

            {conversation &&
              conversation.messages?.map((mes, ind) => {
                return (
                  <div
                    key={ind}
                    className="primex_mx-auto primex_px-2 primex_rounded primex_mt-2 primex_d-flex primex_overflow-hidden   "
                    style={{
                      width: "330px",
                      alignItems: "end",
                      justifyContent: mes.support ? "start" : "end",
                      textAlign: mes.support ? "left" : "right",
                    }}
                  >
                    {mes.file ? (
                      // <img src={mes.file_path} className='  py-2 rounded img-fluid img-center  img-thumbnail     ' style={{ width: "max-content", maxWidth: "60%" }} />
                      <PhotoProvider>
                        <PhotoView src={mes.file_path}>
                          <img
                            className="primex_py-2 primex_rounded primex_img-fluid primex_img-center  primex_img-thumbnail "
                            style={{ width: "max-content", maxWidth: "60%" }}
                            src={mes.file_path}
                            alt=""
                          />
                        </PhotoView>
                      </PhotoProvider>
                    ) : (
                      // <div
                      //     dir={conversation.language === "arabic" ? "rtl" : "ltr"}
                      //     className="primex_rounded primex_px-3 primex_text-left  " style={{
                      //         width: "max-content",
                      //         maxWidth: "330px",
                      //         backgroundColor: mes.support ? "#FCCD0A" : "white",
                      //         // lineHeight: 1
                      //     }}>
                      //     <span style={{ fontSize: 8, fontWeight: "bolder", color: "black" }}> {mes.support ? conversation.support_name : "You"}</span>
                      //     <p style={conversation.language === "arabic" ? { marginBottom: 0, textAlign: "right", whiteSpace: 'pre-wrap' } : { marginBottom: 0, whiteSpace: 'pre-wrap' }}>
                      //         {mes.body}
                      //     </p>
                      //     <span style={{ fontSize: 8, color: "black" }}>
                      //         {moment(mes.createdOn).format("hh:mmA")}
                      //     </span>

                      // </div>
                      !mes.ended && (
                        <div
                          dir={
                            conversation.language === "arabic" ? "rtl" : "ltr"
                          }
                          className="primex_rounded px-3 text-left"
                          style={{
                            width: "max-content",
                            maxWidth: "330px",
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            paddingBottom: "0.3rem",
                            backgroundColor: mes.support ? "#FCCD0A" : "white",
                          }}
                        >
                          <span
                            style={{
                              fontSize: 8,
                              fontWeight: "bolder",
                              color: "#686868",
                            }}
                          >
                            {mes.support
                              ? mes.supportName
                                ? mes.supportName
                                : conversation.support_name
                              : "You"}
                          </span>
                          <p
                            style={
                              conversation.language === "arabic"
                                ? {
                                    marginBottom: 0,
                                    textAlign: "right",
                                    whiteSpace: "pre-wrap",
                                    // Use overflow-wrap: "anywhere" for better handling of long words
                                    overflowWrap: "anywhere",
                                  }
                                : {
                                    marginBottom: 0,
                                    whiteSpace: "pre-wrap",
                                    textAlign: "left",
                                    // Use overflow-wrap: "anywhere" here as well
                                    overflowWrap: "anywhere",
                                  }
                            }
                            dangerouslySetInnerHTML={{
                              __html: linkify(mes.body),
                            }}
                            className="primex_chats__text_color"
                          ></p>
                          <span style={{ fontSize: 8, color: "#686868" }}>
                            {moment(mes.createdOn).format("hh:mmA")}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                );
              })}
            {isMsgSeen && (
              <span
                style={{
                  fontSize: 8,
                  display: "block",
                  textAlign: "right",
                  paddingRight: "0.5rem",
                }}
              >
                seen
              </span>
            )}
            {!isOnline && (
              <div
                className="primex_text-center primex_mt-2"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "40px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#E9EAEC",
                    width: "80%",
                    paddingTop: 5,
                    borderRadius: 10,
                  }}
                >
                  <p style={{ fontSize: 14 }}>{`Trying to reconnect ...`}</p>
                </div>
              </div>
            )}
          </div>
          {openImagesDiv ? (
            <div
              className="primex_bg-white primex_shadow primex_rounded primex_images-display-div primex_container-fluid  primex_position-relative"
              style={{ marginBottom: 120 }}
            >
              {imageLoading && (
                <div className="loader-overlay">
                  <Spinner
                    className="primex_spinner-border"
                    animation="spinner-border"
                    style={{ color: "#fccd0a" }}
                  />
                </div>
              )}
              <header className="primex_row primex_bg-white  primex_p-2">
                <div className=" col-10">
                  {selectedImages?.length} of {selectedImages?.length} uploaded
                </div>
                <div className="primex_col-2">
                  <a
                    className="primex_minimize-window-and-btn"
                    onClick={() => setMinimizeImagesDiv(!minimizeImagesDiv)}
                  >
                    {minimizeImagesDiv ? <FaAngleUp /> : <FaAngleDown />}
                  </a>
                </div>
              </header>
              {minimizeImagesDiv ? (
                <>
                  <body
                    className="primex_bg-white primex_row primex_h-100"
                    style={{ overflowY: "scroll" }}
                  >
                    {selectedImages?.length > 0 &&
                      selectedImages.map((image, index) => (
                        <div
                          key={index}
                          className="primex_col-6 primex_col-sm-12 primex_px-2 primex_rounded primex_d-flex primex_overflow-hidden"
                          style={{ maxWidth: "50%", position: "relative" }} // Added position: relative
                        >
                          <img
                            src={image}
                            className="primex_img-fluid primex_img-center primex_img-thumbnail"
                          />
                          <button
                            onClick={() => removeImage(index)}
                            className="btn"
                            style={{
                              position: "absolute",
                              width: "100%",
                              height: "100%",
                              top: "5px",
                              right: "5px",
                              zIndex: 1, // Ensures the button is above the image
                              opacity: 0, // Hide by default
                              transition: "opacity 0.3s",
                              background: "none",
                              borderWidth: "0px", // Smooth transition for hover
                            }}
                            onMouseOver={(e) =>
                              (e.currentTarget.style.opacity = 1)
                            }
                            onMouseOut={(e) =>
                              (e.currentTarget.style.opacity = 0)
                            }
                          >
                            <FaTimesCircle size={24} color="red" />{" "}
                            {/* Example icon */}
                          </button>
                        </div>
                      ))}
                  </body>
                  <footer className="bg-white row text-center">
                    <button
                      type="button"
                      onClick={sendImages}
                      className="primex_btn primex_w-100 primex_font-weight-bold primex_my-2"
                      style={{ backgroundColor: "#FCCD0A" }}
                    >
                      Send Images
                    </button>
                  </footer>
                </>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}

          {isChatNew ? (
            finished ? (
              ""
            ) : (
              <div
                className="primex_chat-area primex_container-fluid primex_position-absolute primex_overflow-auto primex_px-0"
                style={{ height: "100%", top: 50, bottom: 10, zIndex: "-1" }}
              >
                <StartChat
                  availability={availability}
                  SetIsChatNew={SetIsChatNew}
                  handleTicket={handleTicket}
                  formName={formName}
                  formEmail={formEmail}
                  setFormName={setFormName}
                  setFormEmail={setFormEmail}
                  setLanguage={setLanguage}
                  setChatLoading={setChatLoading}
                />
              </div>
            )
          ) : (
            ""
          )}
        </div>

        {
          //submit feedback Form
          finished && (
            <div
              className="primex_chat-area primex_container-fluid primex_position-absolute primex_overflow-auto primex_px-0"
              style={{
                height: "100%",
                top: 50,
                bottom: 10,
                zIndex: "-1",
                backgroundColor: "rgb(247, 247, 247)",
              }}
            >
              <form
                onSubmit={(e) => SubmitFeedback(e)}
                className="primex_start-chat-form primex_position-relative primex_container-fluid primex_d-flex primex_flex-column  primex_align-items-center  primex_mb-5  primex_rounded primex_p-3"
                style={{ maxWidth: "85%", marginTop: "1rem" }}
              >
                <div
                  className=" primex_rounded-circle primex_d-flex primex_align-items-center primex_justify-content-center  "
                  style={{
                    height: "40px",
                    width: "40px",
                    backgroundColor: "#FCCD0A",
                  }}
                >
                  <FcAssistant style={{ fontSize: "25px" }} />
                </div>

                <p className=" primex_p-0 primex_my-1 primex_text-center primex_chat_case_text">
                  {language === "arabic"
                    ? "كيف تريد تقييم خدمتنا؟"
                    : "How you would like to rate our agent?"}
                </p>
                {errorMessage && (
                  <p className="primex_feedback-error">{errorMessage}</p>
                )}
                <div
                  className="primex_d-flex primex_justify-content-center"
                  style={{ gap: "15px", marginTop: "6px" }}
                >
                  <BiSolidLike
                    onClick={toggleLike}
                    style={{
                      color: likeState.liked
                        ? "#fccd0a"
                        : "rgba(0, 0, 0, 0.65)",
                      fontSize: "24px",
                      cursor: "pointer",
                    }}
                  />
                  <BiSolidDislike
                    onClick={toggleDislike}
                    style={{
                      color: likeState.disliked
                        ? "#fccd0a"
                        : "rgba(0, 0, 0, 0.65)",
                      fontSize: "24px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <p
                  className="primex_text-left primex_mt-3 primex_chat_case_text"
                  style={{ fontWeight: "bold" }}
                >
                  {language === "arabic"
                    ? "هل تم حل المشكله أثناء الدردشة؟"
                    : "Was the case resolved during the chat?"}
                </p>
                {errorMessageResolved && (
                  <p className="primex_feedback-error">
                    {errorMessageResolved}
                  </p>
                )}
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginTop: -15,
                  }}
                  dir={language === "arabic" ? "rtl" : "ltr"}
                >
                  <input
                    type="radio"
                    name="resolved"
                    id="resolved"
                    value={"Yes"}
                    style={{ width: "30px" }}
                    onChange={setFeedbackData}
                  />
                  <label
                    htmlFor="resolved"
                    className="mt-2 primex_chats_radio"
                    style={{
                      color: "rgb(63,63,63)",
                      marginTop: "0.5rem",
                      fontSize: "14px",
                    }}
                  >
                    {language === "arabic" ? "نعم " : "Yes"}
                  </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginTop: -15,
                  }}
                  dir={language === "arabic" ? "rtl" : "ltr"}
                >
                  <input
                    type="radio"
                    name="resolved"
                    id="resolved"
                    value={"No"}
                    style={{ width: "30px" }}
                    onChange={setFeedbackData}
                  />
                  <label
                    htmlFor="resolved"
                    className="mt-2 primex_chats_radio"
                    style={{
                      color: "rgb(63,63,63)",
                      marginTop: "0.5rem",
                      fontSize: "14px",
                    }}
                  >
                    {language === "arabic" ? "لا" : "No"}
                  </label>
                </div>
                {console.log(Feedback, "feedback")}

                {(Feedback?.resolved === true ||
                  Feedback?.resolved === false) && (
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      //   marginTop: ,
                    }}
                  >
                    <textarea
                      //   value={"No"}
                      placeholder={
                        Feedback?.resolved
                          ? "Describe what you liked ?"
                          : "Describe what you didn't like ?"
                      }
                      style={{
                        width: "100%",
                        height: 100,
                        opacity: 0.7,
                        fontSize: "15px",
                      }}
                      onChange={(e) => setComment(e.target.value)}
                      //   onChange={setFeedbackData}
                    />
                  </div>
                )}
                <button
                  type="button"
                  disabled={!disableFeedbackButton ? false : true}
                  className="primex_btn primex_w-50 primex_font-weight-bold primex_mt-3 primex_mb-3"
                  style={{
                    color: "grey",
                    backgroundColor: "#FCCD0A",
                    borderRadius: "25px",
                    padding: "10px",
                  }}
                  onClick={SubmitFeedback}
                >
                  {disableFeedbackButton ? (
                    <Spinner
                      className="primex_spinner-border primex_spinner-border-sm"
                      animation="spinner-border"
                      role="status"
                      style={{ color: "#686868" }}
                    />
                  ) : language === "arabic" ? (
                    "تقديم"
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          )
        }
        {/* Image Display Div start */}
        <div
          style={{
            marginBottom: "6px",
            fontSize: "12px",
            marginLeft: "10px",
          }}
        >
          {isAgentTyping && (
            <p>{`${isAgentFirstName} ${isAgentLastName}`} is typing...</p>
          )}
        </div>
        {isChatNew ? (
          ""
        ) : finished ? (
          "" //changed from absolute to relative in below div
        ) : (
          <div
            className=" primex_container-fluid  primex_w-100 primex_rounded primex_shadow primex_row primex_p-0 primex_m-0"
            style={{
              position: "relative",
              bottom: "21px",
              left: "0%",
              right: "0%",
            }}
            dir={language === "arabic" ? "rtl" : "ltr"}
          >
            <textarea
              type="text"
              name="Messagebox"
              placeholder={
                language === "arabic"
                  ? "اكتب رسالة هنا...."
                  : "Write A Message Here...."
              }
              onChange={(e) => {
                setMessage(e.target.value);
                adjustInputHeight(e.target);
                sendTypingMessage();
              }}
              onKeyDown={handleKeyPress}
              value={message}
              className=" primex_chat-message-input primex_col-9 primex_w-100 primex_border-0"
              style={{ height: "45px" }}
              dir={language === "arabic" ? "rtl" : "ltr"}
            />

            <div className="  primex_col-2 primex_d-flex primex_justify-content-between primex_align-items-center primex_w-100 primex_p-0 primex_m-0 ">
              <label
                className="primex_btn  primex_bg-white  primex_d-flex primex_justify-content-start primex_align-items-center primex_h-100 primex_m-0   "
                name="uploadImagebtn"
              >
                <CiCamera
                  size={25}
                  style={{ transform: "scale(1)", transition: "all 0.2s ease" }}
                />
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  name="ImageUpload"
                  onChange={handleImage}
                  multiple
                />
              </label>
              <a
                className={`primex_btn primex_bg-white primex_d-flex primex_justify-content-center primex_align-items-center primex_h-100 ${
                  language === "arabic" ? "primex_pr-0" : "primex_pl-0"
                }`}
                name="sendMessagebtn"
                onClick={sendMessage}
                style={{ pointerEvents: message ? "" : "none" }}
              >
                {message ? (
                  <PiPaperPlaneRightFill
                    size={25}
                    style={{
                      color: "#FCCD0A",
                      transform: "scale(1)",
                      transition: "all 0.2s ease",
                    }}
                  />
                ) : (
                  <PiPaperPlaneRightBold
                    size={25}
                    style={{
                      transform: "scale(1)",
                      transition: "all 0.2s ease",
                    }}
                  />
                )}
              </a>
            </div>
          </div>
        )}

        <div
          className="primex_chat-footer  primex_container-fluid primex_d-flex primex_justify-content-center primex_align-items-center primex_position-absolute  "
          style={{
            paddingTop: "2px",
            paddingBottom: "2px",
            bottom: "0%",
            height: "20px",
            backgroundColor: "#eaeaea",
          }}
        >
          <p
            className="primex_m-0 primex_font-weight-light primex_text-dark primex_chat_powered_by"
            style={{ fontSize: "10px" }}
          >
            Powered By{" "}
          </p>
          <p
            className="primex_ml-1 primex_p-0 primex_my-0 primex_font-weight-bold primex_chat_powered"
            style={{ fontSize: "12px" }}
          >
            PrimeX
          </p>
        </div>
        {/* Leave message box start */}

        <div
          className={
            isChatNew && isleaveTicket
              ? " primex_leave-ticket-box-active primex_container-fluid primex_leave-ticket-box  "
              : "primex_leave-ticket-box-not-active primex_leave-ticket-box  primex_container-fluid  "
          }
        >
          <div
            id=" primex_chat-header"
            className="primex_chat-header primex_bg-white  primex_row primex_p-0 primex_container-fluid primex_m-0 primex_position-absolute "
            style={{
              top: "0%",
              height: "60px",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
              boxShadow: "0px 0px 7px 0px black",
            }}
          >
            <div
              id="header-text"
              className="primex_container-fluid primex_d-flex primex_justify-content-center primex_align-items-center primex_col-10 primex_p-0"
            >
              <p className=" primex_m-0  primex_font-weight-bolder primex_text-dark primex_leave_card_title">
                {language === "arabic" ? "ترك تذكرة" : "Leave Ticket"}
              </p>
            </div>
            <div
              id=" header-close-window"
              className="primex_col-2 primex_d-flex primex_justify-content-center primex_align-items-center"
            >
              <a
                onClick={handleTicket}
                className=" primex_btn primex_text-decoration-none "
              >
                <FaXmark />
              </a>
            </div>
          </div>
          <div
            className="primex_chat-area primex_container-fluid  primex_h-100  primex_position-absolute primex_overflow-auto  "
            style={{
              margin: "60px 0px 0px 0px",
              paddingBottom: "100px",
              zIndex: "-1",
              backgroundColor: "#f7f7f7",
            }}
          >
            {ticketSubmission ? (
              <Result
                status="success"
                title=<p style={{ fontSize: "18px" }}>
                  Submitted Successfully!
                </p>
                extra=<button
                  type="submit"
                  className=" primex_btn primex_w-100 primex_font-weight-bolder  primex_mt-2"
                  style={{ backgroundColor: "#FCCD0A" }}
                  onClick={handleTicketBack}
                >
                  Go Back
                </button>
                style={{
                  marginTop: "50px",
                }}
              />
            ) : (
              <form
                className=" primex_container-fluid primex_leave-ticket-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h5 className="primex_chat_contact_title">Contact Us</h5>
                <p className=" primex_p-0 primex_my-1 primex_text-start primex_chat_contact_text">
                  Your thoughts are important to us. To submit comments or
                  questions, please complete the form below.
                </p>

                <div className=" primex_input-group  primex_my-1  ">
                  <label
                    for="LeaveTicketName"
                    className="primex_m-0 primex_text-black-50 primex_chat_label"
                  >
                    Name :
                  </label>
                  <input
                    className="primex_rounded  primex_w-100 "
                    type="text"
                    name="LeaveTicketName"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p style={{ color: "red" }}>Name is required</p>
                  )}
                </div>
                <div className="primex_input-group input-group my-1">
                  <label
                    for="LeaveTicketEmail"
                    className="primex_m-0 primex_text-black-50 primex_chat_label"
                  >
                    Email :
                  </label>
                  <input
                    className=" primex_rounded  primex_w-100 "
                    type="text"
                    name="LeaveTicketEmail"
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p style={{ color: "red" }}>
                      {errors.email.message
                        ? errors.email.message
                        : "Email is required"}
                    </p>
                  )}
                </div>
                <div className=" primex_input-group primex_my-1">
                  <label
                    for="LeaveTicketSubject"
                    className="primex_m-0 primex_text-black-50 primex_chat_label"
                  >
                    Subject :
                  </label>
                  <input
                    className=" primex_rounded  primex_w-100 "
                    type="text"
                    name="subject"
                    {...register("subject", { required: true })}
                  />
                  {errors.subject && (
                    <p style={{ color: "red" }}>Subject is required</p>
                  )}
                </div>
                <div className=" primex_input-group primex_my-1">
                  <label
                    for="LeaveTicketMessage"
                    className="primex_m-0 primex_text-black-50 primex_chat_label"
                  >
                    Message :
                  </label>
                  <textarea
                    className=" primex_rounded  primex_w-100 "
                    type="text"
                    name="LeaveTicketMessage"
                    {...register("body", { required: true })}
                  />
                  {errors.body && (
                    <p style={{ color: "red" }}>Message is required</p>
                  )}
                </div>
                <button
                  className=" primex_btn primex_w-100 primex_font-weight-bolder  primex_mt-2 primex_chat_contact_btn"
                  style={
                    loading
                      ? { cursor: "not-allowed", backgroundColor: "#FCCD0A" }
                      : { backgroundColor: "#FCCD0A" }
                  }
                  disabled={loading}
                  type="submit"
                >
                  {" "}
                  {/* <i className="bi bi-gear" />  */}
                  {/* <FormattedMessage id="contact_btn" /> {""} */}
                  Send
                  {loading && (
                    <Spinner
                      className="primex_spinner-border"
                      animation="spinner-border"
                      role="status"
                      size="sm"
                    ></Spinner>
                  )}
                </button>
                {/* <button
                type="submit"
                className=" btn w-100 font-weight-bolder  mt-2"
                style={{ backgroundColor: "#FCCD0A" }}
              >
                Send
              </button> */}
              </form>
            )}
          </div>
          <div
            className="primex_chat-footer  primex_container-fluid primex_d-flex primex_justify-content-center primex_align-items-center primex_position-absolute  "
            style={{
              paddingTop: "2px",
              paddingBottom: "2px",
              bottom: "0%",
              height: "20px",
              backgroundColor: "#eaeaea",
            }}
          >
            <p
              className="primex_m-0 primex_font-weight-light primex_text-dark primex_chat_powered_by"
              style={{ fontSize: "10px" }}
            >
              Powered By{" "}
            </p>
            <p
              className="primex_ml-1 primex_p-0 primex_my-0 primex_font-weight-bolder primex_chat_powered"
              style={{ fontSize: "12px" }}
            >
              PrimeX
            </p>
          </div>
        </div>
        {/* Leave message box end */}
      </div>
      {/* Chat box End */}
      {isGreetingVisible && (
        <>
          <div className="help-wave-hand" style={{ zIndex: "4000" }}>
            <span role="img" aria-label="waving hand" className="wave">
              👋
            </span>
          </div>
          <div
            style={{
              position: "fixed",
              bottom: "calc(3.5% + 70px)",
              right: "1.8%",
              display: "flex",
              alignItems: "center",
              zIndex: 4000,
            }}
          >
            <div
              style={{
                marginRight: "10px",
                backgroundColor: "#fccd0a",
                padding: "3px 8px",
                borderRadius: "50%",
              }}
            >
              <RxCross1
                onClick={handleGreetingClose}
                style={{
                  cursor: "pointer",
                  color: "#232323",
                  zIndex: 4000,
                  marginBottom: "4px",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              />
            </div>
            <h1
              style={{
                margin: 0,
                backgroundColor: "#fccd0a",
                padding: "10px",
                borderRadius: "8px",
                color: "#232323",
                fontSize: "12px",
                fontWeight: "400",
                zIndex: 4000,
                cursor: "pointer",
              }}
              onClick={handleChat}
            >
              How can we help you?
            </h1>
          </div>
        </>
      )}
      {/* Chat box button Start */}
      <button
        type="button"
        className={
          isChatOpen
            ? " primex_btn  primex_position-fixed primex_chat-button-on-active  primex_rounded-circle  "
            : " primex_btn primex_position-fixed primex_chat-button-on-not-active primex_rounded-circle  "
        }
        onClick={handleChat}
        style={{
          zIndex: 4000,
          bottom: "3.5%",
          // left: "1.8%",
          right: "1.8%",
          padding: "10px",
          height: "62px",
          width: "62px",
          maxHeight: "100%",
          maxWidth: "100%",
          backgroundColor: "#FCCD0A",
        }}
      >
        {unread && (
          <GoDotFill
            className="primex_text-danger"
            style={{
              color: "#232323",
              position: "absolute",
              fontSize: "24px",
              right: "-2px",
              top: "-3px",
            }}
          />
        )}
        <BsFillChatLeftFill size={25} />{" "}
      </button>

      {/* Chat box button End */}
    </>
  );
}

export default chat;
