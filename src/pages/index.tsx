import HomeSwiper from "@/components/home/Swiper";
import { Box, Grid, GridItem, Link, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box minH="90vh" pb={20}>
      <HomeSwiper />
      <Box px={{ sm: "5", md: "14", lg: "36" }}>
        <Box
          mt={10}
          mb={5}
          display="flex"
          alignItems="end"
          justifyContent="space-between"
        >
          <Text fontSize="3xl" fontWeight="extrabold">
            인기 반찬
          </Text>
          <Link>더보기</Link>
        </Box>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <GridItem w="300" h="300" bg="blue.500" />
          <GridItem w="300" h="300" bg="blue.500" />
          <GridItem w="300" h="300" bg="blue.500" />
          <GridItem w="300" h="300" bg="blue.500" />
          <GridItem w="300" h="300" bg="blue.500" />
          <GridItem w="300" h="300" bg="blue.500" />
          <GridItem w="300" h="300" bg="blue.500" />
          <GridItem w="300" h="300" bg="blue.500" />
          <GridItem w="300" h="300" bg="blue.500" />
          <GridItem w="300" h="300" bg="blue.500" />
          <GridItem w="300" h="300" bg="blue.500" />
          <GridItem w="300" h="300" bg="blue.500" />
        </Grid>
      </Box>
    </Box>
  );
}
