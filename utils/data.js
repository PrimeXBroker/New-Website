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
      fromDate = Math.floor(now.getTime() / 1000) - 60;
      break;
    case "5 Minutes":
      fromDate = Math.floor(now.getTime() / 1000) - 5 * 60;
      break;
    case "15 Minutes":
      fromDate = Math.floor(now.getTime() / 1000) - 15 * 60;
      break;
    case "30 Minutes":
      fromDate = Math.floor(now.getTime() / 1000) - 30 * 60;
      break;
    case "Hour":
      fromDate = Math.floor(now.getTime() / 1000) - 3600;
      break;
    case "4 Hours":
      fromDate = Math.floor(now.getTime() / 1000) - 4 * 3600;
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
      const weekStart = new Date(now);
      weekStart.setUTCDate(now.getUTCDate() - now.getUTCDay());
      weekStart.setHours(0, 0, 0, 0);
      fromDate = Math.floor(weekStart.getTime() / 1000);
      break;
    case "Current Month":
      const monthStart = new Date(now.getUTCFullYear(), now.getUTCMonth(), 1);
      fromDate = Math.floor(monthStart.getTime() / 1000);
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

export const graphTimeList = [
  { label: "M1", time: "Minute", interval: 1 },
  { label: "M5", time: "5 Minutes", interval: 5 },
  { label: "M15", time: "15 Minutes", interval: 15 },
  { label: "M30", time: "30 Minutes", interval: 30 },
  { label: "H1", time: "Hour", interval: 60 },
  { label: "H4", time: "4 Hours", interval: 240 },
  { label: "D", time: "Today", time: "Today", interval: 1440 },
  { label: "W", item: "Current Week", interval: 10080 },
  {
    label: "M",
    item: "Current Month",
    interval: 43800,
  },
];

export const graphDurationList = [
  { label: "D", time: "Today" },
  { label: "W", time: "Current Week" },
  {
    label: "M",
    time: "Current Month",
  },
];
