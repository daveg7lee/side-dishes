import HomeSwiper from "@/components/home/Swiper";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box minH="90vh" pb={20}>
      <HomeSwiper />
      <Text textAlign="center" my={5} fontSize="3xl" fontWeight="extrabold">
        인기 반찬
      </Text>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        px={{ sm: "5", md: "14", lg: "36" }}
      >
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
  );
}
