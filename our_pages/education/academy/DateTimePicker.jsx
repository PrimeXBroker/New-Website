import React, { useState, useEffect, useRef } from "react";
import { IoMdCalendar } from "react-icons/io";
import moment from "moment-timezone";

export default function DateTimePicker({
  selectedDate,
  onChange,
  placeholder,
}) {
  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState(selectedDate || new Date());
  const [viewMode, setViewMode] = useState("date");
  const pickerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (pickerRef.current && !pickerRef.current.contains(e.target))
        setOpen(false);
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Set the default date to tomorrow
  useEffect(() => {
    if (!selectedDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      onChange(tomorrow);
    }
  }, [selectedDate, onChange]);

  const startDay = new Date(
    viewDate.getFullYear(),
    viewDate.getMonth(),
    1
  ).getDay();
  const daysInMonth = new Date(
    viewDate.getFullYear(),
    viewDate.getMonth() + 1,
    0
  ).getDate();
  const weeks = [];
  let dayNum = 1 - startDay;
  for (let w = 0; w < 6; w++) {
    const days = [];
    for (let d = 0; d < 7; d++, dayNum++) {
      days.push(dayNum > 0 && dayNum <= daysInMonth ? dayNum : null);
    }
    weeks.push(days);
  }

  const months = moment.months();
  const startYear = Math.floor(viewDate.getFullYear() / 20) * 20;
  const years = [];
  for (let y = startYear; y < startYear + 20; y++) {
    years.push(y);
  }

  function sameDate(d1, d2) {
    return (
      d1 &&
      d2 &&
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  // function onSelectDate(day) {
  //   const selectedDay = new Date(
  //     viewDate.getFullYear(),
  //     viewDate.getMonth(),
  //     day
  //   ).getDay();
  //   // Disable past dates only, but allow Saturdays and Sundays
  //   if (
  //     new Date(viewDate.getFullYear(), viewDate.getMonth(), day) <= new Date()
  //   ) {
  //     return;
  //   }
  //   const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
  //   onChange(newDate);
  //   setOpen(false);
  // }

  function onSelectDate(day) {
    const dateObj = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    const selectedDay = dateObj.getDay();
    if (dateObj <= new Date() || selectedDay === 0 || selectedDay === 6) {
      return;
    }

    onChange(dateObj);
    setOpen(false);
  }

  function onSelectMonth(monthIndex) {
    setViewDate(new Date(viewDate.getFullYear(), monthIndex, 1));
    setViewMode("date");
  }

  function onSelectYear(year) {
    setViewDate(new Date(year, viewDate.getMonth(), 1));
    setViewMode("date");
  }

  function prevPage() {
    if (viewMode === "date") {
      const prevMonthDate = new Date(viewDate);
      prevMonthDate.setMonth(viewDate.getMonth() - 1);
      setViewDate(prevMonthDate);
    } else if (viewMode === "month") {
      setViewDate(new Date(viewDate.getFullYear() - 1, viewDate.getMonth(), 1));
    } else if (viewMode === "year") {
      setViewDate(
        new Date(viewDate.getFullYear() - 20, viewDate.getMonth(), 1)
      );
    }
  }

  function nextPage() {
    if (viewMode === "date") {
      const nextMonthDate = new Date(viewDate);
      nextMonthDate.setMonth(viewDate.getMonth() + 1);
      setViewDate(nextMonthDate);
    } else if (viewMode === "month") {
      setViewDate(new Date(viewDate.getFullYear() + 1, viewDate.getMonth(), 1));
    } else if (viewMode === "year") {
      setViewDate(
        new Date(viewDate.getFullYear() + 20, viewDate.getMonth(), 1)
      );
    }
  }

  return (
    <div className="relative w-full" ref={pickerRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="appearance-none text-left flex items-center justify-between font-medium border border-e1 dark:border-e1-dark bg-e1 dark:bg-e1-dark focus:outline-none rounded-md sm:rounded-lg w-full p-4 text-sm sm:text-base"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Choose date"
      >
        <span
          className={`${
            selectedDate
              ? "text-tm dark:text-tm-dark"
              : "text-ts dark:text-ts-dark"
          }`}
        >
          {selectedDate
            ? moment(selectedDate).format("DD/MM/yyyy")
            : placeholder}
        </span>
        <IoMdCalendar className="text-ts dark:text-ts-dark text-xl sm:text-2xl" />
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="absolute z-50 mt-1 p-3 w-full max-w-xs bg-cc dark:bg-cc-dark border border-e2 dark:border-e2-dark rounded-md sm:rounded-lg shadow-lg text-ts dark:text-ts-dark"
        >
          <div className="flex justify-between items-center mb-3 select-none font-semibold text-sm">
            <button
              type="button"
              onClick={prevPage}
              className="px-2 py-1 rounded hover:bg-pcp dark:hover:bg-pcp-dark hover:text-nb dark:hover:text-nb-dark text-tm dark:text-tm-dark"
              aria-label="Previous"
            >
              &#8592;
            </button>
            <div className="flex space-x-2 items-center">
              <button
                type="button"
                onClick={() => setViewMode("month")}
                className="cursor-pointer hover:underline text-ts dark:text-ts-dark"
                aria-label="Select month"
              >
                {moment(viewDate).format("MMMM")}
              </button>
              <button
                type="button"
                onClick={() => setViewMode("year")}
                className="cursor-pointer hover:underline text-ts dark:text-ts-dark"
                aria-label="Select year"
              >
                {viewDate.getFullYear()}
              </button>
            </div>
            <button
              type="button"
              onClick={nextPage}
              className="px-2 py-1 rounded hover:bg-pcp dark:hover:bg-pcp-dark hover:text-nb dark:hover:text-nb-dark text-tm dark:text-tm-dark"
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
          {viewMode === "date" && (
            <>
              <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-tm dark:text-tm-dark select-none mb-2">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <div key={day}>{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium">
                {weeks.map((week, wi) =>
                  week.map((day, di) => (
                    <button
                      key={`${wi}-${di}`}
                      type="button"
                      disabled={
                        !day ||
                        new Date(
                          viewDate.getFullYear(),
                          viewDate.getMonth(),
                          day
                        ) <= new Date() ||
                        [0, 6].includes(
                          new Date(
                            viewDate.getFullYear(),
                            viewDate.getMonth(),
                            day
                          ).getDay()
                        )
                      }
                      onClick={() => day && onSelectDate(day)}
                      className={`rounded py-1 ${
                        day
                          ? sameDate(
                              selectedDate,
                              new Date(
                                viewDate.getFullYear(),
                                viewDate.getMonth(),
                                day
                              )
                            )
                            ? "bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark"
                            : "hover:bg-pcp dark:hover:bg-pcp-dark hover:text-nb dark:hover:text-nb-dark text-ts dark:text-ts-dark"
                          : "cursor-default"
                      }`}
                      tabIndex={
                        !day ||
                        new Date(
                          viewDate.getFullYear(),
                          viewDate.getMonth(),
                          day
                        ) <= new Date() ||
                        [0, 6].includes(
                          // CHANGED
                          new Date( // CHANGED
                            viewDate.getFullYear(), // CHANGED
                            viewDate.getMonth(), // CHANGED
                            day // CHANGED
                          ).getDay() // CHANGED
                        ) // CHANGED
                          ? -1
                          : 0
                      } // CHANGED
                      aria-pressed={
                        day &&
                        sameDate(
                          selectedDate,
                          new Date(
                            viewDate.getFullYear(),
                            viewDate.getMonth(),
                            day
                          )
                        )
                      }
                    >
                      {day || ""}
                    </button>
                  ))
                )}
              </div>
            </>
          )}
          {viewMode === "month" && (
            <div className="grid grid-cols-3 gap-2 text-center text-sm font-medium select-none">
              {months.map((month, idx) => (
                <button
                  key={month}
                  type="button"
                  onClick={() => onSelectMonth(idx)}
                  className={`rounded py-2 ${
                    viewDate.getMonth() === idx
                      ? "bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark"
                      : "hover:bg-pcp dark:hover:bg-pcp-dark hover:text-nb dark:hover:text-nb-dark text-ts dark:text-ts-dark"
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>
          )}
          {viewMode === "year" && (
            <div className="grid grid-cols-4 gap-2 text-center text-sm font-medium select-none">
              {years.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => onSelectYear(year)}
                  className={`rounded py-2 ${
                    viewDate.getFullYear() === year
                      ? "bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark"
                      : "hover:bg-pcp dark:hover:bg-pcp-dark hover:text-nb dark:hover:text-nb-dark text-ts dark:text-ts-dark"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
