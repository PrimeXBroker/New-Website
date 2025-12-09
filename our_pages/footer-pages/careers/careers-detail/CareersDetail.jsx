import React, { useState, useEffect, useRef } from "react";
import { EditorState, convertFromRaw, CompositeDecorator } from "draft-js";
import { Editor as MyEditor } from "draft-js";
import { CgProfile } from "react-icons/cg";
import { IoMdTime } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { GrBriefcase } from "react-icons/gr";
import { useLocale } from "next-intl";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import axios from "axios";
import CareersForm from "./CareersForm";
import CustomYellowButton from "@/components/common/CustomYellowButton";

const CareersDetail = ({ id }) => {
  const locale = useLocale();
  const formRef = useRef(null);
  const [detail, setDetail] = useState(null);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  const findLinkEntities = (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges((character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === "LINK"
      );
    }, callback);
  };

  const DraftLink = (props) => {
    const { contentState, entityKey, children } = props;
    if (!contentState || !entityKey) {
      return null;
    }

    const entity = contentState.getEntity(entityKey);
    const { url } = entity.getData();
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  };

  const decorator = new CompositeDecorator([
    {
      strategy: findLinkEntities,
      component: DraftLink,
    },
  ]);

  const fetchdetails = async (page) => {
    const res = await axios.get(
      `https://primexbroker.com/api/get/job/detail/${id}`
    );
    if (res?.data?.success) {
      setDetail(res?.data?.data);
      const contentState = convertFromRaw(
        JSON.parse(res?.data?.data?.description)
      );
      const editorState = EditorState.createWithContent(
        contentState,
        decorator
      );
      setContent(editorState);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchdetails();
    }
  }, [id]);

  const handleApplyClick = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-p dark:bg-p-dark pt-24 sm:pt-28 md:pt-32" dir="ltr">
      <div className="container">
        <div className="sm:w-[95%] lg:w-[80%] mx-auto">
          {loading ? (
            <div className="flex justify-center items-center h-[50vh]">
              <div className="ellipsis">
                <span className="dot text-pcp dark:text-pcp-dark">.</span>
                <span className="dot text-pcp dark:text-pcp-dark">.</span>
                <span className="dot text-pcp dark:text-pcp-dark">.</span>
              </div>
            </div>
          ) : (
            <main>
              <Link
                className="text-tm dark:text-tm-dark hover:text-pcp dark:hover:text-pcp font-medium flex justify-center sm:justify-start items-center mb-8"
                href={`/${locale}/careers`}
              >
                <span className="mr-2">
                  <FaArrowLeft />
                </span>
                Back to Careers
              </Link>
              <div className="flex flex-col md:flex-row md:justify-between w-full">
                <div>
                  <p className="text-ts dark:text-ts-dark text-xs sm:text-lg text-center sm:text-left">
                    {detail.department}
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 text-tm dark:text-tm-dark text-center sm:text-left">
                    {detail.title}
                  </h2>
                </div>
                <div className="mt-2 md:mt-5 flex justify-center sm:justify-start">
                  <CustomYellowButton
                    title="Apply Now"
                    onClick={handleApplyClick}
                    className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full sm:w-auto justify-between sm:justify-center mt-5"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-4 mt-10">
                <div className="flex items-center justify-center gap-x-2 bg-e1 dark:bg-e1-dark border-2 border-e2 dark:border-e2-dark rounded px-3 py-1">
                  <MdOutlineLocationOn className="text-[15px] text-tm dark:text-tm-dark font-semibold" />
                  <span className="text-tm dark:text-tm-dark text-xs sm:text-sm">
                    {detail.location}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-x-2 bg-e1 dark:bg-e1-dark border-2 border-e2 dark:border-e2-dark rounded px-3 py-1">
                  <IoMdTime className="text-[16px] text-tm dark:text-tm-dark font-semibold" />
                  <span className="text-tm dark:text-tm-dark  text-xs sm:text-sm">
                    {detail.type}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-x-2 bg-e1 dark:bg-e1-dark border-2 border-e2 dark:border-e2-dark rounded px-3 py-1">
                  <GrBriefcase className="text-[13px] text-tm dark:text-tm-dark font-semibold" />
                  <span className="text-tm dark:text-tm-dark  text-xs sm:text-sm">
                    {`${detail.experience} Years Experience`}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-x-2 bg-e1 dark:bg-e1-dark border-2 border-e2 dark:border-e2-dark rounded px-3 py-1">
                  <CgProfile className="text-[15px] text-tm dark:text-tm-dark font-semibold" />
                  <span className="text-tm dark:text-tm-dark  text-xs sm:text-sm">
                    {`${detail.position} Openings`}
                  </span>
                </div>
              </div>
              <div className="mt-12 text-tm dark:text-tm-dark">
                <MyEditor editorState={content} readOnly={true} />
              </div>
            </main>
          )}
          <div ref={formRef}>
            <CareersForm jobTitle={detail?.title} formId={detail?.formId} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersDetail;
