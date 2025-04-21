export const getLoginUrl = (locale) => {
  switch (locale) {
    case "ar":
      return "https://my.primexcapital.com/ar/login?sl=1";
    case "ku":
      return "https://my.primexcapital.com/ku/login?sl=1";
    case "fa":
      return "https://my.primexcapital.com/fa/login?sl=1";
    case "tr":
      return "https://my.primexcapital.com/tr/login?sl=1";
    default:
      return "https://my.primexcapital.com/login?sl=1";
  }
};
