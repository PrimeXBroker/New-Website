"use client";
import React, { useEffect, useState } from "react";
import {
  EditorState,
  ContentState,
  convertToRaw,
  convertFromRaw,
  CompositeDecorator,
} from "draft-js";
import { Editor as MyEditor } from "draft-js";
import axios from "axios";

function NewsBody({ slug }) {
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
        `https://primexbroker.com/api/fetch/one/blog/${slug}`,
        { cache: "no-store" }
      );
      if (res?.data?.success) {
        console.log(res?.data, "parsing");
        setDetail(res?.data?.data);
        // const currentUrl = router.asPath;
        // if (currentUrl) {
        const contentState = convertFromRaw(
          JSON.parse(res?.data?.data?.content)
        );
        const editorState = EditorState.createWithContent(
          contentState,
          decorator
        );
        console.log(editorState, "editorState");
        setContent(editorState);
        // }
        // setLoading(false);
      }
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
  };

  console.log("slug content", slug);

  useEffect(() => {
    fetchdetails();
  }, []);

  if (content) {
    return (
      <div>
        <img src={detail.image} className="mb-7" />
        <h1 className="text-[25px] mb-0 font-semibold">{detail?.title}</h1>
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

export default NewsBody;
