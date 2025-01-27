import { useEffect, useState } from "react";
import http from "../../lib/http";

type FetchResult<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  dispatch: () => void;
};

const useFetch = <T>(url: string): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = async () => {
    setIsLoading(true);

    try {
      const data = await http.get<T>(url);
      setData(data);
    } catch {
      setError("Erro ao carregar dados!");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    dispatch();
  }, [url]);

  return { data, isLoading, error, dispatch };
};

export default useFetch;
