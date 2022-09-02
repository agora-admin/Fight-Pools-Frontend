import React, { FC } from "react";
import { uuid } from "uuidv4";

const cardImages = ["decentralized.svg", "tickets.svg", "love-smile.svg"];
const cardHeadings = [
  "Decentralized Fight Matching",
  "Gamified Fight Promotion and Monetization",
  "Fan and Fighter-Led Governance",
];
const cardContent = [
  "Fans crowd fund fights they want to see by contributing to staking pools and earning yield through social tokens.",
  "Promote to earn mechanism to facilitate fight pools to incentivize fan participation through funding fighters and the treasury with real-time GIF NFTs and ticket NFTs",
  "Fans and Verified Fighters use a governance token to vote to allocate treasury funds to ignite fight promotion.",
];

const Features = () => {
  return (
    <div className="flex flex-col justify-start items-center bg-lightBlue pt-10 sm:pt-20">
      <h1 className="font-gilroy-heavy text-[#101D26] text-2xl sm:text-3xl">
        MORE POWER TO
      </h1>
      <h1 className="font-gilroy-heavy text-orange text-2xl sm:text-3xl">
        FIGHTERS & FANS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-10 sm:mt-14">
        {Array(cardImages.length)
          .fill(0)
          .map((_, i) => (
            <FeatureCard
              imageUrl={cardImages[i]}
              heading={cardHeadings[i]}
              content={cardContent[i]}
              key={uuid()}
            />
          ))}
      </div>
    </div>
  );
};

interface FeatureCardProps {
  imageUrl: string;
  heading: string;
  content: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ imageUrl, content, heading }) => {
  return (
    <div className="flex flex-col gap-1 items-center bg-lightBlue rounded-[32px] shadow-lg h-[350px] sm:h-[400px] w-[300px] border-4 border-[#E0F2FF]">
      <div className="h-[80%] flex justify-center items-center">
        <img src={`/${imageUrl}`} width={100} height={100} className="h-[70%] w-[70%]" alt="cardImage" />
      </div>

      <div className="px-5 pb-5">
        <h4 className="font-gilroy text-center">{heading}</h4>
        <p className="text-center text-xs font-semibold">{content}</p>
      </div>
    </div>
  );
};

export default Features;
