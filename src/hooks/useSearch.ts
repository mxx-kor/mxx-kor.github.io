import debounce from "lodash.debounce";
import { useCallback, useState } from "react";

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    }, 300),
    [],
  );

  return {
    searchTerm,
    handleSearchTerm,
  };
};

export default useSearch;
