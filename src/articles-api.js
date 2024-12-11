// src/articles-api.js
import axios from "axios";

const API_KEY = "46483987-c8443b8397d1fa46fa83b5f89";

axios.defaults.baseURL = "https://pixabay.com/api";

export const fetchArticlesWithTopic = async ({ q, page, per_page }) => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    page,
    per_page,
    maxPage: 1,
  });

  try {
    const res = await axios.get(`?${searchParams.toString()}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error in API request:", error);
    throw error;
  }
};
