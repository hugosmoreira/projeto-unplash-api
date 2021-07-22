import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID RUETMkqDf2jxLNIOVsNtNA14vPPKx4qSQEmP0kFIjlY",
  },
});
