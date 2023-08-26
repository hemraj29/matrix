import axios from "axios";

const API_URL = "https://api.dexscreener.com/";

export const APIInstance = axios.create({
  baseURL: `${API_URL}`,
});

