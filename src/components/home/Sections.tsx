import React, { FC } from "react";
import Card from "./Card";

const cardImages = ["sectionCard1.svg", "sectionCard2.svg"];
const cardFirstHeading = [
  "The DAO to Promote and Fund Fights",
  "Power the Ecosystem through $FIGHT",
];
const cardSecondHeading = [
  "Get exactly what fighters and fans want to see",
  "Get exactly what fighters and fans want to see",
];

const Sections = () => {
  return (
    <div className="bg-lightBlue md2:px-0 lg:px-48">
      <Section
        imageUrl={cardImages[0]}
        firstHeading={cardFirstHeading[0]}
        secondHeading={cardSecondHeading[0]}
        alternate={false}
      />
      <Section
        imageUrl={cardImages[1]}
        firstHeading={cardFirstHeading[1]}
        secondHeading={cardSecondHeading[1]}
        alternate={true}
      />

      <div className="flex flex-col items-center mt-12 sm:mt-24">
        <Card
          imageUrl="card1.svg"
          firstHeading="Get Early Pay-Per-View Access"
          secondHeading="Access the Hottest fights on the platform before they go public"
          alternate={false}
        />
        <Card
          imageUrl="card2.svg"
          firstHeading="Get brand visibility"
          secondHeading="Advertise your brand on the platform to get a loyal fighting audience"
          alternate={true}
        />
      </div>
    </div>
  );
};

interface SectionProps {
  imageUrl: string;
  firstHeading: string;
  secondHeading: string;
  alternate: boolean;
}

const Section: FC<SectionProps> = ({
  imageUrl,
  firstHeading,
  secondHeading,
  alternate,
}) => {
  return (
    <div className={`flex flex-col-reverse ${alternate && "md2:flex-row-reverse"} md2:flex-row gap-[20%] justify-center items-center pt-8 sm:pt-16 md2:pt-24`}>
      <div className="flex flex-col text-center mt-6 md2:mt-0 md2:text-left max-w-xs">
        <h1 className="text-primary font-gilroy-heavy text-lg sm:text-2xl md2:text-3xl">
          {firstHeading}
        </h1>
        <h1 className="text-orange font-gilroy-heavy text-lg sm:text-2xl md2:text-3xl">
          {secondHeading}
        </h1>
      </div>

      <div className="bg-[#FFF0F1] flex justify-center items-center h-[350px] w-[350px] border-4 border-[#E0F2FF] rounded-[60px]">
        <img
          src={`/${imageUrl}`}
          className="h-[60%] w-[60%]"
          alt="some image"
        />
      </div>
    </div>
  );
};

export default Sections;
