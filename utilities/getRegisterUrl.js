export const getRegisterUrl = (locale) => {
  switch (locale) {
    case "ar":
      return "https://my.primexcapital.com/ar/register/?sl=1";
    case "ku":
      return "https://my.primexcapital.com/ku/register/?sl=1";
    case "es":
      return "https://my.primexcapital.com/es/register/?sl=1";
    case "ps":
      return "https://my.primexcapital.com/ps/register/?sl=1";
    default:
      return "https://my.primexcapital.com/register/?sl=1";
  }
};
