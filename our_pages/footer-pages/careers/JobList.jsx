"use client";
import React, { useState, useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { MdOutlineSort } from "react-icons/md";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import axios from "axios";
import Moment from "react-moment";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor as MyEditor } from "draft-js";
import { useTranslations, useLocale } from "next-intl";

const JobList = () => {
  const locale = useLocale();
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("View All");
  const [jobCounts, setJobCounts] = useState({
    "View All": 0,
    Dubai: 0,
    "South Africa": 0,
    Remote: 0,
  });
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Departments");
  const [loading, setLoading] = useState(false);

  const departments = [
    "Marketing Department",
    "IT Department",
    "Support Department",
    "Sales Department",
  ];

  const backgroundColors = [
    ["#e3e4e6", "#fccd0a", "#e3e4e6"],
    ["#fccd0a", "#e3e4e6", "#3f3e3e"],
  ];

  const getStyles = (index) => {
    const rowNumber = Math.floor(index / 3);
    const sequenceIndex = rowNumber % 2;
    const backgroundColor = backgroundColors[sequenceIndex][index % 3];
    const textColor = backgroundColor === "#3f3e3e" ? "#e3e4e6" : "#3f3f3e";
    const textBadgeColor = backgroundColor === "#3f3e3e" ? "#3f3e3e" : "#fff";
    const badgeBackgroundColor =
      backgroundColor === "#3f3e3e" ? "#e3e4e6" : "#3f3e3e";
    const lineColor = backgroundColor === "#3f3e3e" ? "#e3e4e6" : "#3f3f3e";
    return {
      backgroundColor,
      textColor,
      badgeBackgroundColor,
      textBadgeColor,
      lineColor,
    };
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://primexbroker.com/api/get/jobs/category"
      );
      const fetchedJobs = response.data.data;
      setJobs(fetchedJobs);
      calculateCounts(fetchedJobs);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs", error);
      setLoading(false);
    }
  };

  const calculateCounts = (jobs) => {
    const counts = { "View All": 0, Dubai: 0, "South Africa": 0, Remote: 0 };

    jobs.forEach((job) => {
      if (job.status === "Active" || job.status === "New") {
        counts["View All"]++;
        if (job.location in counts) {
          counts[job.location]++;
        }
      }
    });

    setJobCounts(counts);
  };

  const handleDepartmentSelect = (department) => {
    setSelectedDepartment(department);
  };

  const handleFilterChange = (location) => {
    setLoading(true);
    setFilter(location);
    setLoading(false);
  };

  const getDescriptionEditorState = (rawDraftContentState) => {
    if (!rawDraftContentState) return EditorState.createEmpty();
    const contentState = convertFromRaw(JSON.parse(rawDraftContentState));
    return EditorState.createWithContent(contentState);
  };

  const filteredJobs = jobs.filter(
    (job) =>
      (filter === "View All" || job.location === filter) &&
      (selectedDepartment === "All Departments" ||
        job.department === selectedDepartment) &&
      (job.status === "New" || job.status === "Active")
  );

  return (
    <section className="container my-20" dir="ltr">
      <div className="grid grid-cols-12 px-8 md:bg-accent mb-32 sm:mb-20 md:mb-12 h-14 rounded-2xl">
        <div className="col-span-12 md:col-span-9 flex items-center justify-center md:justify-start">
          <div className="flex justify-center md:justify-start flex-wrap items-center gap-4 md:gap-6 lg:gap-12">
            <button
              className="flex items-center bg-secondary text-white md:bg-transparent md:text-black text-sm md:text-base py-1 px-4 md:py-0 md:px-0 rounded-full"
              onClick={() => handleFilterChange("View All")}
            >
              View All
              <span
                className="bg-white text-secondary md:bg-secondary md:text-white text-xs inline-block py-[.25em] px-[.4em] text-center align-baseline rounded-[.25rem] ml-2"
                style={{ lineHeight: "1" }}
              >
                {jobCounts["View All"]}
              </span>
            </button>
            <button
              className="flex items-center bg-secondary text-white md:bg-transparent md:text-black text-sm md:text-base py-1 px-4 md:py-0 md:px-0 rounded-full"
              onClick={() => handleFilterChange("Dubai")}
            >
              Dubai
              <span
                className="bg-white text-secondary md:bg-secondary md:text-white text-xs inline-block py-[.25em] px-[.4em] text-center align-baseline rounded-[.25rem] ml-2"
                style={{ lineHeight: "1" }}
              >
                {jobCounts["Dubai"]}
              </span>
            </button>
            <button
              className="flex items-center bg-secondary text-white md:bg-transparent md:text-black text-sm md:text-base py-1 px-4 md:py-0 md:px-0 rounded-full"
              onClick={() => handleFilterChange("South Africa")}
            >
              South Africa
              <span
                className="bg-white text-secondary md:bg-secondary md:text-white text-xs inline-block py-[.25em] px-[.4em] text-center align-baseline rounded-[.25rem] ml-2"
                style={{ lineHeight: "1" }}
              >
                {jobCounts["South Africa"]}
              </span>
            </button>
            <button
              className="flex items-center bg-secondary text-white md:bg-transparent md:text-black text-sm md:text-base py-1 px-4 md:py-0 md:px-0 rounded-full"
              onClick={() => handleFilterChange("Remote")}
            >
              Remote
              <span
                className="bg-white text-secondary md:bg-secondary md:text-white text-xs inline-block py-[.25em] px-[.4em] text-center align-baseline rounded-[.25rem] ml-2"
                style={{ lineHeight: "1" }}
              >
                {jobCounts["Remote"]}
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 flex items-center justify-center md:justify-end mt-5 md:mt-0">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="bg-white hover:bg-secondary hover:text-white group"
              >
                {selectedDepartment}{" "}
                <span className="w-[26px] h-[26px] rounded-full bg-secondary flex justify-center items-center group-hover:bg-white">
                  <MdOutlineSort
                    className=" text-white group-hover:text-secondary"
                    size={18}
                  />
                </span>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem
                key="all-departments"
                onClick={() => handleDepartmentSelect("All Departments")}
              >
                All Departments
              </DropdownItem>
              {departments.map((dept, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => handleDepartmentSelect(dept)}
                >
                  {dept}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30vh",
            width: "100%",
          }}
        >
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"></div>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {filteredJobs.map((job, index) => {
            const {
              backgroundColor,
              textColor,
              badgeBackgroundColor,
              textBadgeColor,
              lineColor,
            } = getStyles(index);

            const editorState = getDescriptionEditorState(job.description);

            return (
              <div
                className="col-span-12 md:col-span-6 lg:col-span-4"
                key={job._id}
              >
                <div
                  className="job-card rounded-3xl"
                  style={{ backgroundColor: backgroundColor }}
                >
                  <div className="px-6 py-6 rounded-2xl">
                    <div className="flex justify-between items-center">
                      <div
                        className="w-[38px] h-[3px]"
                        style={{ backgroundColor: lineColor }}
                      ></div>
                      <div
                        className="text-white text-xs font-normal px-3 py-1 rounded-full"
                        style={{
                          color: textBadgeColor,
                          backgroundColor: badgeBackgroundColor,
                        }}
                      >
                        {job.department}
                      </div>
                    </div>
                    <div className="pt-3 pb-1">
                      <h2
                        className="text-xl font-semibold"
                        style={{ color: textColor }}
                      >
                        {job.title}
                      </h2>
                    </div>
                    <div
                      style={{
                        color: textColor,
                        maxHeight: "3em",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      <MyEditor editorState={editorState} readOnly={true} />
                    </div>
                    <div
                      className="flex justify-between py-4 mt-2"
                      style={{
                        borderTop: `1px solid ${lineColor}`,
                        borderBottom: `1px solid ${lineColor}`,
                      }}
                    >
                      <div>
                        <div
                          className="flex items-center gap-1 text-xs font-normal mb-2"
                          style={{ color: textColor }}
                        >
                          <IoLocationSharp />
                          Location
                        </div>
                        <div
                          className="text-xs font-semibold"
                          style={{ color: textColor }}
                        >
                          {job.location}
                        </div>
                      </div>
                      <div>
                        <div
                          className="flex items-center gap-1 text-xs font-normal mb-2"
                          style={{ color: textColor }}
                        >
                          <GiMoneyStack />
                          Salary
                        </div>
                        <div
                          className="text-xs font-semibold"
                          style={{ color: textColor }}
                        >
                          Market Competitive
                        </div>
                      </div>
                      <div>
                        <div
                          className="flex items-center gap-1 text-xs font-normal mb-2"
                          style={{ color: textColor }}
                        >
                          <MdWork />
                          How to Work
                        </div>
                        <div
                          className="text-xs font-semibold"
                          style={{ color: textColor }}
                        >
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end items-center mt-6">
                      {/* <div className="text-xs" style={{ color: textColor }}>
                        Posted:
                        <Moment
                          date={job.createdAt}
                          format="Do MMM YYYY"
                          className="ml-1"
                        />
                      </div> */}
                      <div>
                        <div className="flex items-center gap-2">
                          <BsArrowDownRight style={{ color: lineColor }} />
                          <div className="bg text-xs px-4 py-1 rounded-full text-white bg-[#274192] hover:bg-[#2d51c3] font-normal">
                            <Link
                              href={`/${locale}/careers/${job._id}`}
                              className="flex justify-center items-center gap-1"
                            >
                              <MdWork />
                              See Detail
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default JobList;
