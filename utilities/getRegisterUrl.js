export const getRegisterUrl = (locale) => {
  switch (locale) {
    case "ar":
      return "https://my.primexcapital.com/ar/register/?sl=1";
    case "ku":
      return "https://my.primexcapital.com/ku/register/?sl=1";
    case "fa":
      return "https://my.primexcapital.com/fa/register/?sl=1";
    case "tr":
      return "https://my.primexcapital.com/tr/register/?sl=1";
    default:
      return "https://my.primexcapital.com/register/?sl=1";
  }
};
