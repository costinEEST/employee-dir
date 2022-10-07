import { Heading } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { useDebounce } from "../hooks/useDebounce";
import { EmployeeResult } from "./EmployeeResult";

export function SearchResults() {
  const [searchParams] = useSearchParams({ q: "" });
  const searchTerm = searchParams.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { isLoading, data } = useQuery(
    ["term", debouncedSearchTerm],
    async () => {
      const response = await fetch(
        `http://localhost:3030/employees?q=${debouncedSearchTerm}`
      );
      return response.json();
    }
  );

  if (isLoading)
    return (
      <Heading as="h2" size="md">
        Loading...
      </Heading>
    );

  return (
    <>
      <Heading as="h2" size="md" paddingBottom="4">
        {!searchTerm ? "All Employees" : `Search Results (${data.length})`}
      </Heading>

      <EmployeeResult employees={data} />
    </>
  );
}
