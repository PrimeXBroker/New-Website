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
    <section className="bg-[#000000] pt-24 sm:pt-28 md:pt-32">
      <div className="container">
        <div className="sm:w-[95%] lg:w-[80%] mx-auto">
          {loading ? (
            <div className="flex justify-center items-center h-[50vh]">
              <div className="ellipsis">
                <span className="dot text-[#FED100]">.</span>
                <span className="dot text-[#FED100]">.</span>
                <span className="dot text-[#FED100]">.</span>
              </div>
            </div>
          ) : (
            <main>
              <Link
                className="text-[#ffffff] hover:text-[#FED100] font-medium flex justify-center sm:justify-start items-center mb-8"
                href={`/${locale}/careers`}
              >
                <span className="mr-2">
                  <FaArrowLeft />
                </span>
                Back to Careers
              </Link>
              <div className="flex flex-col md:flex-row md:justify-between w-full">
                <div>
                  <p className="text-[#C6C6C6] text-xs sm:text-lg text-center sm:text-left">
                    {detail.department}
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 text-[#FFFFFF] group-hover:text-[#FED100] text-center sm:text-left">
                    {detail.title}
                  </h2>
                </div>
                <div className="mt-2 md:mt-5 flex justify-center sm:justify-start">
                  <button
                    className="py-[16px] px-[46px] font-semibold mt-5 w-full sm:w-[50%] md:w-auto custom-button"
                    onClick={handleApplyClick}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-4 mt-10">
                <div className="flex items-center justify-center gap-x-1 bg-[#1D1D1D] border-[#222222] border-2 rounded px-3 py-1">
                  <MdOutlineLocationOn className="text-[15px] text-[#ffffff] font-semibold" />
                  <span className="text-[#FFFFFF] text-xs sm:text-[15px]">
                    {detail.location}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-x-1 bg-[#1D1D1D] border-[#222222] border-2 rounded px-3 py-1">
                  <IoMdTime className="text-[16px] text-[#ffffff] font-semibold" />
                  <span className="text-[#FFFFFF]  text-xs sm:text-[15px]">
                    {detail.type}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-x-1 bg-[#1D1D1D] border-[#222222] border-2 rounded px-3 py-1">
                  <GrBriefcase className="text-[13px] text-[#ffffff] font-semibold" />
                  <span className="text-[#FFFFFF]  text-xs sm:text-[15px]">
                    {`${detail.experience} Years Experience`}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-x-1 bg-[#1D1D1D] border-[#222222] border-2 rounded px-3 py-1">
                  <CgProfile className="text-[15px] text-[#ffffff] font-semibold" />
                  <span className="text-[#FFFFFF]  text-xs sm:text-[15px]">
                    {`${detail.position} Openings`}
                  </span>
                </div>
              </div>
              <div className="mt-12 text-[#ffffff]">
                <MyEditor editorState={content} readOnly={true} />
              </div>
            </main>
          )}
          <div ref={formRef}>
            <CareersForm jobTitle={detail?.title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersDetail;
