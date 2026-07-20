"use server";

import axios from "axios";

export const getNews = async (page, lang, locale) => {
  try {
    const newsRes = await axios.get(
      `https://primexbroker.com/api/fetch/published/blogs/${page}/6/${lang}/${locale}`,
    );

    console.log(newsRes, "newsRes");

    if (newsRes.data.success) {
      return { result: newsRes.data, success: true };
    } else {
      return { error: "No News found" };
    }
  } catch (error) {
    console.log(error, "error");
    return { error: "No News found" };
  }
};

export const getBlogs = async (page = 1, limit = 9) => {
  try {
    const res = await axios.get(
      `https://primexbroker.com/api/fetch/publish/related/all-blog/${page}/${limit}`,
    );

    if (res.data.success) {
      return { result: res.data, success: true };
    } else {
      return { error: "No Blogs found", success: false };
    }
  } catch (error) {
    console.log("Error fetching blogs:", error);
    return { error: "Failed to fetch blogs", success: false };
  }
};
