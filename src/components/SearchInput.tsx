import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

export function SearchInput() {
  const searchInputRef = useRef<HTMLInputElement>();
  const [searchParams, setSearchParams] = useSearchParams({
    q: "",
  });

  const searchTerm = searchParams.get("q");

  const handleReset = () => {
    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }

    if (searchTerm) {
      setSearchParams({ q: "" });
    }
  };

  const handleChange = (e) => {
    // https://stackoverflow.com/a/68017204/1904223
    const { name, value } = e.target;

    setSearchParams({
      [name]: value,
    });
  };
  return (
    <HStack marginLeft="auto !important">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
        >
          <SearchIcon />
        </InputLeftElement>
        <Input
          ref={searchInputRef}
          placeholder="search"
          type="search"
          onChange={handleChange}
          name="q"
        />
        <InputRightElement>
          <Button onClick={handleReset}>
            <CloseIcon />
          </Button>
        </InputRightElement>
      </InputGroup>
    </HStack>
  );
}
