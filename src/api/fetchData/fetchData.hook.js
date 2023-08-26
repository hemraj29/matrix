import { useQuery } from "@tanstack/react-query";
import { fetchDataApi } from "./fetchData.api";

const useFetchData = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ["fetchData"],
    () => fetchDataApi()
  );
  return { data: data?.data?.pairs, isLoading, isError, error, isFetching };
};

export default useFetchData;