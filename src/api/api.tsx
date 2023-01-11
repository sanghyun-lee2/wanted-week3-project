import axios from "axios";

export const request = axios.create({
   baseURL: process.env.REACT_APP_BASE_URL,
});

export const recommandAPI = {
   getRecommends: (word: string) => request.get(`/sick?q=${word}`),
};
