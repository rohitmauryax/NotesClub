import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const raw = await fetch(url);
    const dataApi = await raw.json();
    setData(dataApi);
  };

  return data;
};

export default useFetch;
