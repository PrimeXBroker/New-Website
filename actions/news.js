"use server";

import axios from "axios";

export const getNews = async (page, lang, locale) => {
  try {
    const newsRes = await axios.get(
      `https://primexbroker.com/api/fetch/published/blogs/${page}/6/${lang}/${locale}`
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
