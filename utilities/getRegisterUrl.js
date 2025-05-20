export const getRegisterUrl = (locale) => {
  switch (locale) {
    case "ar":
      return "https://primexcapital.com/ar/registration";
    case "ku":
      return "https://primexcapital.com/ku/registration";
    case "es":
      return "https://primexcapital.com/es/registration";
    case "ps":
      return "https://primexcapital.com/ps/registration";
    default:
      return "https://primexcapital.com/en/registration";
  }
};
