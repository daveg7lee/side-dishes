import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      w="full"
      px={{ sm: "5", md: "14", lg: "36" }}
      py="3"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Box minW="20%">로고</Box>
      <Box mx="auto">
        <InputGroup size="md" w={{ sm: "48", md: "56", lg: "sm" }}>
          <Input pr="4.5rem" placeholder="검색" />
          <InputRightElement>
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
      </Box>
      <Box minW="20%" display="flex" alignItems="center" justifyContent="end">
        <Button mr="2" variant="ghost">
          로그인
        </Button>
        <Button>회원가입</Button>
      </Box>
    </Box>
  );
}
