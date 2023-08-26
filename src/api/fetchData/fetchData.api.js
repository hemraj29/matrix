import { APIInstance } from "../baseUrl";

export const fetchDataApi = () => {
  return APIInstance({
    url: `/latest/dex/search?q=WBNB%20USDC`,
    method: "GET",
  });
};