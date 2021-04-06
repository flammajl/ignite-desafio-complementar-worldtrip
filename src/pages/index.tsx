import { Divider } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Slider } from '../components/Slider';
import { TravelTypes } from '../components/TravelTypes';

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Divider w={90} h="2px" m="auto" bg="dark.text" mb="14" />
      <Slider />
    </>
  );
}
