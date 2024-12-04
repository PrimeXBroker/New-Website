"use client";
import React, { useEffect, useState } from "react";
import { EditorState, convertFromRaw, CompositeDecorator } from "draft-js";
import { Editor as MyEditor } from "draft-js";
import axios from "axios";
import { useLocale } from "next-intl";
import Moment from "react-moment";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function AnalysisNewsBody({ slug }) {
  const locale = useLocale();
  const [detail, setDetail] = useState(null);
  const [content, setContent] = useState(null);

  const ImageComponent = ({ src }) => (
    <img src={src} alt="PrimeX Capital" style={{ maxWidth: "100%" }} />
  );

  const mediaBlockRenderer = (block) => {
    if (block.getType() === "atomic") {
      return {
        component: MediaComponent,
        editable: false,
      };
    }
    return null;
  };

  const MediaComponent = (props) => {
    const entity = props.contentState.getEntity(props.block.getEntityAt(0));
    const type = entity.getType();
    const data = entity.getData();

    if (type === "IMAGE") {
      return <ImageComponent src={data.src} />;
    }
    return null;
  };

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

  const fetchdetails = async () => {
    // setLoading(true);
    try {
      const res = await axios.get(
        `https://primexbroker.com/api/fetch/one/market-news/${slug}`,
        { cache: "no-store" }
      );
      if (res?.data?.success) {
        setDetail(res?.data?.data);
        if (locale === "en") {
          const contentState = convertFromRaw(
            JSON.parse(res?.data?.data?.contentEn)
          );
          const editorState = EditorState.createWithContent(
            contentState,
            decorator
          );
          setContent(editorState);
        } else {
          const contentState = convertFromRaw(
            JSON.parse(res?.data?.data?.contentAr)
          );
          const editorState = EditorState.createWithContent(
            contentState,
            decorator
          );
          setContent(editorState);
        }
        // setLoading(false);
      }
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchdetails();
    }
  }, []);

  useEffect(() => {
    if (slug) {
      fetchdetails();
    }
  }, [slug]);

  if (content) {
    return (
      <>
        <div className="text-white py-8 px-4 pt-20 pb-10">
          <Link
            className="text-[#ffffff] hover:text-[#FED100] font-medium flex justify-center sm:justify-start items-center mb-4"
            href={`/${locale}/academy`}
          >
            <span className={`${locale === "ar" ? "ml-2 " : "mr-2 "}`}>
              {locale === "ar" ? <FaArrowRight /> : <FaArrowLeft />}
            </span>
            {locale === "ar" ? "العودة للأكاديمية" : "Back to Academy"}
          </Link>

          <div className="text-[#c6c6c6] text-sm mb-2 text-center">
            <Moment
              date={detail?.createdOn}
              format={locale === "ar" ? "YYYY/MM/DD" : "DD/MM/YYYY"}
            />{" "}
            • 5 Min Read
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-6 text-center text-[#ffffff] w[96%] sm:w-[80%] mx-auto">
            {locale === "ar" ? detail.titleAr : detail.titleEn}
          </h2>
          {/* <div className="flex items-center space-x-4">
            <span className="text-gray-300">Share Article</span>
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
            >
              <FaLink />
            </a>
          </div> */}
        </div>

        <div className="text-[#ffffff]">
          <img src={detail.image} alt="PrimeX Capital" className="mb-4" />
          <h1 className="text-[25px] mb-0 font-semibold">
            {locale === "ar" ? detail.titleAr : detail.titleEn}
          </h1>
          <MyEditor
            editorState={content}
            readOnly={true}
            blockRendererFn={mediaBlockRenderer}
          />

          {slug === "65375aae3611bcf247769e8f" && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                className="about-button text-center"
                onClick={handleDownload}
              >
                <Link legacyBehavior href="#">
                  <a
                    style={{
                      textAlign: "center",
                      paddingRight: 30,
                    }}
                  >
                    {" "}
                    {detail?.language === "ar"
                      ? "تحميل الملف"
                      : "Download file"}
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default AnalysisNewsBody;
