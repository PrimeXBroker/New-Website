export const phoneOptions = [
  {
    label: "Afghanistan",
    code: "+93",
    flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/Samoa+Am%C3%A9ricaines.svg",
  },
  {
    label: "Albania",
    code: "+355",
    flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/Albanie.svg",
  },
  {
    label: "Algeria",
    code: "+213",
    flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/Alg%C3%A9rie.svg",
  },
  {
    label: "Andorra",
    code: "+376",
    flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/Afghanistan.svg",
  },
];

export const convertToSeconds = (filter, customDate) => {
  const now = new Date();

  let fromDate;
  let toDate = Math.floor(now.getTime() / 1000);

  switch (filter) {
    case "Minute":
      fromDate = Math.floor(
        new Date(now.setMinutes(now.getMinutes() - 1)).getTime() / 1000
      );
      break;
    case "Hour":
      fromDate = Math.floor(
        new Date(now.setHours(now.getHours() - 1)).getTime() / 1000
      );
      break;
    case "Today":
      fromDate = Math.floor(
        new Date(now.setUTCHours(0, 0, 0, 0)).getTime() / 1000
      );
      toDate = Math.floor(
        new Date(now.setUTCHours(23, 59, 59, 999)).getTime() / 1000
      );
      break;
    case "Current Week":
      const dayOfWeek = now.getUTCDay();
      const daysToMonday = (dayOfWeek + 6) % 7;
      const startOfWeek = new Date(now);
      startOfWeek.setUTCDate(now.getUTCDate() - daysToMonday);
      startOfWeek.setUTCHours(0, 0, 0, 0);
      fromDate = Math.floor(startOfWeek.getTime() / 1000);
      toDate = Math.floor(
        new Date(now.setUTCHours(23, 59, 59, 999)).getTime() / 1000
      );
      break;
    case "Current Month":
      const startOfMonth = new Date(
        Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)
      );
      fromDate = Math.floor(startOfMonth.getTime() / 1000);
      toDate = Math.floor(
        new Date(now.setUTCHours(23, 59, 59, 999)).getTime() / 1000
      );
      break;
    case "Three Months":
      const startOfThreeMonths = new Date(now);
      startOfThreeMonths.setMonth(now.getUTCMonth() - 3);
      startOfThreeMonths.setUTCHours(0, 0, 0, 0);
      fromDate = Math.floor(startOfThreeMonths.getTime() / 1000);
      break;
    case "6 Month":
      const startOfSixMonths = new Date(now);
      startOfSixMonths.setMonth(now.getUTCMonth() - 6);
      startOfSixMonths.setUTCHours(0, 0, 0, 0);
      fromDate = Math.floor(startOfSixMonths.getTime() / 1000);
      break;
    case "1 Year":
      const startOfOneYear = new Date(now);
      startOfOneYear.setFullYear(now.getUTCFullYear() - 1);
      startOfOneYear.setUTCHours(0, 0, 0, 0);
      fromDate = Math.floor(startOfOneYear.getTime() / 1000);
      break;
    case "custom":
      const from = new Date(customDate?.from);
      const to = new Date(customDate?.to);
      // Start of from day
      fromDate = Math.floor(
        new Date(from.setHours(0, 0, 0, 0)).getTime() / 1000
      );
      // End of to day
      toDate = Math.floor(
        new Date(to.setHours(23, 59, 59, 999)).getTime() / 1000
      );
      break;
    default:
      fromDate = 0;
      break;
  }

  return { from: fromDate, to: toDate };
};
