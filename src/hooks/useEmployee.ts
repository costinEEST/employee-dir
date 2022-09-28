import { useQuery } from "@tanstack/react-query";

export function useEmployee(url: string, id: string | undefined) {
  const { data, error, isLoading } = useQuery(["employee", id], async () => {
    const res = await fetch(`${url}/${id}`);

    return res.json();
  });

  return { data, error, isLoading };
}
