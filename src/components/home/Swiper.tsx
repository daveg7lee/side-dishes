import { Center } from "@chakra-ui/react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeSwiper() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Center h="80vh">Slide 1</Center>
      </SwiperSlide>
      <SwiperSlide>
        <Center h="80vh">Slide 2</Center>
      </SwiperSlide>
      <SwiperSlide>
        <Center h="80vh">Slide 3</Center>
      </SwiperSlide>
      <SwiperSlide>
        <Center h="80vh">Slide 4</Center>
      </SwiperSlide>
    </Swiper>
  );
}
