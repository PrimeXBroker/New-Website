import React from "react";

const Countdown = () => {
  const timeGroups = [
    {
      label: "HOURS",
      digits: [{ value: "1" }, { value: "2" }],
    },
    {
      label: "MINUTES",
      digits: [{ value: "5" }, { value: "6" }],
    },
    {
      label: "SECONDS",
      digits: [{ value: "4" }, { value: "7" }],
    },
  ];
  return (
    <section className="flex justify-center items-center gap-4 mt-20">
      <div className="flex justify-center items-center gap-8">
        {timeGroups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className={`flex flex-col items-center ${
              groupIndex < timeGroups.length - 1 ? "mr-10" : ""
            }`}
          >
            <div className="flex gap-2">
              {group.digits.map((digit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-lg"
                  style={{
                    backgroundImage:
                      "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/top-trader/countdown.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "110px",
                    height: "150px",
                  }}
                >
                  <span className="text-7xl font-bold text-secondary">
                    {digit.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-sm font-semibold mt-2">{group.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;
