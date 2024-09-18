"use client";
import React, { useEffect, useState } from "react";
import { EditorState, convertFromRaw, CompositeDecorator } from "draft-js";
import { Editor as MyEditor } from "draft-js";
import axios from "axios";
import { useLocale } from "next-intl";

function AnalysisNewsBody({ slug }) {
  const locale = useLocale();
  const [detail, setDetail] = useState(null);
  const [content, setContent] = useState(null);
  console.log(content, "content");

  const ImageComponent = ({ src }) => (
    <img src={src} alt="" style={{ maxWidth: "100%" }} />
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
      <div>
        <img src={detail.image} className="mb-4" />
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
            <div className="about-button text-center" onClick={handleDownload}>
              <Link legacyBehavior href="#">
                <a
                  style={{
                    textAlign: "center",
                    paddingRight: 30,
                  }}
                >
                  {" "}
                  {detail?.language === "ar" ? "تحميل الملف" : "Download file"}
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AnalysisNewsBody;
