import { Heading, HStack } from "@chakra-ui/react";

import { SearchInput } from "./SearchInput";

export function Header() {
  return (
    <HStack
      direction="row"
      justify="flex-start"
      align="center"
      spacing={8}
      boxShadow="md"
      p={2}
      w="100vw"
    >
      <Heading as="h1" size="lg">
        Employee&nbsp;&nbsp;Directory
      </Heading>
      <SearchInput />
    </HStack>
  );
}
