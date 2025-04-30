export const getLoginUrl = (locale) => {
  switch (locale) {
    case "ar":
      return "https://my.primexcapital.com/ar/login?sl=1";
    case "ku":
      return "https://my.primexcapital.com/ku/login?sl=1";
    case "es":
      return "https://my.primexcapital.com/es/login?sl=1";
    case "ps":
      return "https://my.primexcapital.com/ps/login?sl=1";
    default:
      return "https://my.primexcapital.com/login?sl=1";
  }
};
