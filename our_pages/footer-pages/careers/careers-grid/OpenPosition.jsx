"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoMdTime } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { GrBriefcase } from "react-icons/gr";
import { useLocale, useTranslations } from "next-intl";
import axios from "axios";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FiArrowUpLeft } from "react-icons/fi";

const OpenPosition = () => {
  const locale = useLocale();
  const t = useTranslations("careersPage.openPositions");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [hasFiltered, setHasFiltered] = useState(false);
  const [hovered, setHovered] = useState(null);

  const departmentOptions = [
    { id: 1, name: "All", value: "all" },
    { id: 2, name: "Marketing", value: "marketing" },
    { id: 3, name: "IT", value: "it" },
    { id: 4, name: "Support", value: "support" },
    { id: 5, name: "Sales", value: "sales" },
  ];

  const locationOptions = [
    { id: 1, name: "All", value: "all" },
    { id: 2, name: "Dubai", value: "dubai" },
    { id: 3, name: "South Africa", value: "south-africa" },
    { id: 4, name: "Remote", value: "remote" },
  ];

  const handleDepartmentClick = (option) => {
    setSelectedDepartment(option.value);
    setIsDepartmentOpen(false);
    setHasFiltered(true);
  };

  const handleLocationClick = (option) => {
    setSelectedLocation(option.value);
    setIsLocationOpen(false);
    setHasFiltered(true);
  };

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://primexbroker.com/api/get/jobs/category"
      );
      const fetchedJobs = response.data.data;
      setJobs(fetchedJobs);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const departmentMatch =
      selectedDepartment === "all" ||
      job.department.toLowerCase().includes(selectedDepartment.toLowerCase());

    const locationMatch =
      selectedLocation === "all" ||
      job.location.toLowerCase() === selectedLocation.toLowerCase();

    return departmentMatch && locationMatch;
  });

  return (
    <section className="bg-p dark:bg-p-dark pb-16 sm:pb-28">
      <div className="container">
        <div className="text-center md:text-start">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-tm dark:text-tm-dark mb-6">
            {t("title_part1")}
            <span className="text-pcp dark:text-pcp-dark">
              {t("title_part2")}
            </span>
          </h2>
        </div>
        <div className="flex justify-center md:justify-end gap-5" dir="ltr">
          <div className="relative w-56 mb-6">
            <div
              className="bg-cc dark:bg-cc-dark text-ts dark:text-ts-dark border border-e1 dark:border-e1-dark rounded-lg py-[16px] px-[12px] w-full flex justify-between items-center cursor-pointer text-xs sm:text-sm"
              onClick={() => {
                setIsDepartmentOpen(!isDepartmentOpen);
                setIsLocationOpen(false);
              }}
            >
              <span>
                {departmentOptions.find(
                  (option) => option.value === selectedDepartment
                )?.name || "Departments"}
              </span>
              {isDepartmentOpen ? (
                <BiChevronUp size={18} className="text-tm dark:text-tm-dark" />
              ) : (
                <BiChevronDown
                  size={18}
                  className="text-tm dark:text-tm-dark"
                />
              )}
            </div>

            {isDepartmentOpen && (
              <ul className="absolute left-0 right-0 mt-2 bg-cc dark:bg-cc-dark border border-e1 dark:border-e1-dark rounded-lg z-10 text-xs sm:text-sm">
                {departmentOptions.map((option) => (
                  <li
                    key={option.id}
                    className="py-[12px] px-[14px] cursor-pointer hover:bg-tm dark:hover:bg-tm-dark hover:text-p dark:hover:text-p-dark text-ts dark:text-ts-dark text-xs sm:text-sm"
                    onClick={() => handleDepartmentClick(option)}
                  >
                    {option.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="relative w-56">
            <div
              className="bg-cc dark:bg-cc-dark text-ts dark:text-ts-dark border border-e1 dark:border-e1-dark rounded-lg py-[16px] px-[12px] w-full flex justify-between items-center cursor-pointer text-xs sm:text-sm"
              onClick={() => {
                setIsLocationOpen(!isLocationOpen);
                setIsDepartmentOpen(false);
              }}
            >
              <span>
                {locationOptions.find(
                  (option) => option.value === selectedLocation
                )?.name || "Location"}
              </span>
              {isLocationOpen ? (
                <BiChevronUp size={18} className="text-tm dark:text-tm-dark" />
              ) : (
                <BiChevronDown
                  size={18}
                  className="text-tm dark:text-tm-dark"
                />
              )}
            </div>

            {isLocationOpen && (
              <ul className="absolute left-0 right-0 mt-2 bg-cc dark:bg-cc-dark border border-e1 dark:border-e1-dark rounded-lg z-10 text-xs sm:text-sm">
                {locationOptions.map((option) => (
                  <li
                    key={option.id}
                    className="py-[12px] px-[14px] cursor-pointer hover:bg-tm dark:hover:bg-tm-dark hover:text-p dark:hover:text-p-dark text-ts dark:text-ts-dark text-xs sm:text-sm"
                    onClick={() => handleLocationClick(option)}
                  >
                    {option.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <div className="ellipsis">
              <span className="dot text-pcp">.</span>
              <span className="dot text-pcp">.</span>
              <span className="dot text-pcp">.</span>
            </div>
          </div>
        ) : filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div
              className="bg-cc dark:bg-cc-dark border-2 border-cc dark:border-cc-dark hover:border-tl dark:hover:border-tl-dark rounded-lg p-6 sm:p-8 mb-6  group transition-all duration-500 ease-in-out"
              key={index}
              onMouseEnter={() => setHovered(job.id)}
              onMouseLeave={() => setHovered(null)}
              dir="ltr"
            >
              <Link href={`/${locale}/careers/${job._id}`}>
                <div>
                  <div className="flex justify-between w-full">
                    <p className="text-ts dark:text-ts-dark text-xs sm:text-sm">
                      {job.department}
                    </p>
                    <div className="text-tm dark:text-tm-dark">
                      <Link
                        href={`/${locale}/careers/${job._id}`}
                        className="flex items-center gap-x-1 text-xs sm:text-sm group-hover:text-pcp"
                      >
                        View Job
                        {locale === "ar" ||
                        locale === "ps" ||
                        locale === "ku" ? (
                          <FiArrowUpLeft
                            className={`text-base font-semibold transition-transform duration-500 ease-in-out group-hover:text-pcp ${
                              hovered === job.id
                                ? "rotate-[-45deg] text-ts dark:text-ts-dark"
                                : "text-ts dark:text-ts-dark"
                            }`}
                          />
                        ) : (
                          <FiArrowUpRight
                            className={`text-base font-semibold transition-transform duration-500 ease-in-out group-hover:text-pcp ${
                              hovered === job.id
                                ? "rotate-45 text-ts dark:text-ts-dark"
                                : "text-ts dark:text-ts-dark"
                            }`}
                          />
                        )}
                      </Link>
                    </div>
                  </div>
                  <h2 className="text-lg sm:text-2xl font-semibold mt-2 text-tm dark:text-tm-dark">
                    {job.title}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-4 mt-7">
                  <div className="flex items-center justify-center gap-x-2 bg-e1 dark:bg-e1-dark border-2 border-e2 dark:border-e2-dark rounded px-3 py-1">
                    <MdOutlineLocationOn className="text-[15px] text-tm dark:text-tm-dark font-semibold" />
                    <span className="text-tm dark:text-tm-dark text-xs sm:text-xs">
                      {job.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-x-2 bg-e1 dark:bg-e1-dark border-2 border-e2 dark:border-e2-dark rounded px-3 py-1">
                    <IoMdTime className="text-[16px] text-tm dark:text-tm-dark font-semibold" />
                    <span className="text-tm dark:text-tm-dark  text-xs sm:text-xs">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-x-2 bg-e1 dark:bg-e1-dark border-2 border-e2 dark:border-e2-dark rounded px-3 py-1">
                    <GrBriefcase className="text-[13px] text-tm dark:text-tm-dark font-semibold" />
                    <span className="text-tm dark:text-tm-dark  text-xs sm:text-xs">
                      {job.experience} Years Experience
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-x-2 bg-e1 dark:bg-e1-dark border-2 border-e2 dark:border-e2-dark rounded px-3 py-1">
                    <CgProfile className="text-[15px] text-tm dark:text-tm-dark font-semibold" />
                    <span className="text-tm dark:text-tm-dark  text-xs sm:text-xs">
                      {job.position} Openings
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          hasFiltered && (
            <div className="flex justify-center items-center pt-20">
              <p className="text-ts dark:text-ts-dark">
                No jobs found matching your criteria.
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default OpenPosition;
