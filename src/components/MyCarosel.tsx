import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Image } from '@chakra-ui/react';
import carosel0 from '../assets/carosel/carosel0.png';
import carosel1 from '../assets/carosel/carosel1.png';
import carosel2 from '../assets/carosel/carosel2.png';
import carosel3 from '../assets/carosel/carosel3.png';
import carosel4 from '../assets/carosel/carosel4.png';

export const MyCarosel = () => {
  return (
    <Carousel style={{ padding: '10px' }} variant="dark" indicators={false}>
      <Carousel.Item>
        <Image margin="auto" src={carosel0} />
      </Carousel.Item>
      <Carousel.Item>
        <Image margin="auto" src={carosel1} />
      </Carousel.Item>
      <Carousel.Item>
        <Image margin="auto" src={carosel2} />
      </Carousel.Item>
      <Carousel.Item>
        <Image margin="auto" src={carosel3} />
      </Carousel.Item>
      <Carousel.Item>
        <Image margin="auto" src={carosel4} />
      </Carousel.Item>
    </Carousel>
  );
};
