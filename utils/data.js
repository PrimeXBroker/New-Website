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

export const convertToSeconds = (interval = 1) => {
  const now = new Date();
  console.log(interval, "interval", typeof interval);

  let fromDate;
  let toDate;

  switch (interval) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 10:
    case 15:
    case 30:
      const thirtyDaysAgo = new Date(now);
      thirtyDaysAgo.setUTCDate(now.getUTCDate() - 30);
      thirtyDaysAgo.setUTCHours(0, 0, 0, 0);
      fromDate = Math.floor(thirtyDaysAgo.getTime() / 1000);
      toDate = Math.floor(
        new Date(now.setUTCHours(23, 59, 59, 999)).getTime() / 1000
      );
      break;

    case 60:
    case 120:
    case 240:
    case 480:
    case 720:
      const twoMonthsAgo = new Date(now);
      twoMonthsAgo.setUTCMonth(now.getUTCMonth() - 2);
      twoMonthsAgo.setUTCHours(0, 0, 0, 0);

      fromDate = Math.floor(twoMonthsAgo.getTime() / 1000);
      toDate = Math.floor(
        new Date(now.setUTCHours(23, 59, 59, 999)).getTime() / 1000
      );
      break;

    case 1440:
    case 10080:
    case 43800:
      const threeMonthsAgo = new Date(now);
      threeMonthsAgo.setUTCMonth(now.getUTCMonth() - 3);
      threeMonthsAgo.setUTCHours(0, 0, 0, 0);

      fromDate = Math.floor(threeMonthsAgo.getTime() / 1000);
      toDate = Math.floor(
        new Date(now.setUTCHours(23, 59, 59, 999)).getTime() / 1000
      );
      break;

    // case 10080:
    // case 43800:
    //   const fourMonthsAgo = new Date(now);
    //   fourMonthsAgo.setUTCMonth(now.getUTCMonth() - 4);
    //   fourMonthsAgo.setUTCHours(0, 0, 0, 0);

    //   fromDate = Math.floor(fourMonthsAgo.getTime() / 1000);
    //   toDate = Math.floor(
    //     new Date(now.setUTCHours(23, 59, 59, 999)).getTime() / 1000
    //   );
    //   break;

    case "Previous Month":
      const firstDayOfPreviousMonth = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        1
      );
      firstDayOfPreviousMonth.setUTCHours(0, 0, 0, 0);
      fromDate = Math.floor(firstDayOfPreviousMonth.getTime() / 1000);

      const lastDayOfPreviousMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      );
      lastDayOfPreviousMonth.setUTCHours(23, 59, 59, 999);
      toDate = Math.floor(lastDayOfPreviousMonth.getTime() / 1000);
      break;

    default:
      fromDate = 0;
      toDate = Math.floor(
        new Date(now.setUTCHours(23, 59, 59, 999)).getTime() / 1000
      );
      break;
  }

  return { from: fromDate, to: toDate };
};
export const graphTimeList = [
  { label: "M1", time: "Minute", interval: 1 },
  { label: "M2", time: "2 Minutes", interval: 2 },
  { label: "M3", time: "3 Minutes", interval: 3 },
  { label: "M4", time: "4 Minutes", interval: 4 },
  { label: "M5", time: "5 Minutes", interval: 5 },
  { label: "M10", time: "10 Minutes", interval: 10 },
  { label: "M15", time: "15 Minutes", interval: 15 },
  { label: "M30", time: "30 Minutes", interval: 30 },
  { label: "H1", time: "Hour", interval: 60 },
  { label: "H2", time: "2 Hours", interval: 120 },
  { label: "H4", time: "4 Hours", interval: 240 },
  { label: "H8", time: "8 Hours", interval: 480 },
  { label: "H12", time: "12 Hours", interval: 720 },
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
