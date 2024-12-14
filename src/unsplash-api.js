// src/articles-api.js
import axios from "axios";

const API_KEY = "nmMQbO2J997t5bzDRKDSMh3l1djlqzWLPyO2ggAd9SQ";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchPhotosForGallery = async ({
  query,
  page = 1,
  per_page = 10,
}) => {
  try {
    const res = await axios.get("search/photos", {
      params: {
        client_id: API_KEY,
        query,
        page,
        per_page,
      },
    });

    console.log(res.data.results);
    return res.data.results;
  } catch (error) {
    console.error("Error in API request:", error);
    throw error;
  }
};