import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image
            src="https://links.papareact.com/gi1"
            alt="Graham Norton Book Club"
            layout="intrinsic"
            objectFit="cover"
            height={614}
            width={1536}
            priority={true}
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src="https://links.papareact.com/6ff"
            alt="Prime video"
            layout="intrinsic"
            objectFit="cover"
            height={614}
            width={1536}
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src="https://links.papareact.com/7ma"
            alt="Amazon music"
            layout="intrinsic"
            objectFit="cover"
            height={614}
            width={1536}
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
