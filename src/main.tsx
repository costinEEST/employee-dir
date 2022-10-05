import { ChakraProvider, HStack } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Employee } from "./components/Employee";
import { SearchInput } from "./components/SearchInput";

import { theme } from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HStack>
        <SearchInput />
      </HStack>
    ),
  },
  {
    path: "employees/:employeeId",
    element: <Employee />,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);
