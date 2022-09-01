import React from "react";

const Footer = () => {
  return (
    <>
    {/* Part 1 */}
      <div className="bg-[#BCD6E8] h-[60%] flex flex-col justify-center items-center relative overflow-hidden z-0">
        <div className="relative z-[2] flex flex-col justify-center items-center">
          <h1 className="text-primary font-gilroy-heavy text-2xl text-center">
            GET EARLY ACCESS
          </h1>
          <p className="text-[#434343] font-bold text-[11px] text-center">
            Excited to try out fightSquare?
            <br />
            We&apos;re excited too!
          </p>

          <button className="bg-primary text-lightBlue text-[11px] font-bold border-2 border-lightBlue rounded-[50px] py-2 px-5 cursor-pointer mt-5">
            Join the waitlist
          </button>
        </div>

        <div className="absolute -bottom-[50%] h-[100%] z-[1]">
          <img
            src="/footer_banner.svg"
            alt="just a ticket image"
            height={100}
            width={100}
            className="h-full w-full"
          />
        </div>
      </div>

      {/* Part 2 */}
      <div className="bg-lightBlue flex flex-col justify-center items-center gap-5 py-6">
        {/* Brand Logo */}
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="60" height="60" rx="16.6667" fill="#E0F3FF" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.2886 18.5513C26.3031 18.5375 31.2835 13.7369 38.8414 18.4824C39.1158 18.6552 39.1984 19.0179 39.0254 19.2927C38.8527 19.5671 38.4899 19.6497 38.2152 19.4767C31.4356 15.2196 27.1064 19.3958 27.0937 19.4078C26.8574 19.6303 26.4852 19.619 26.263 19.3824C26.0405 19.1461 26.0518 18.7738 26.2884 18.5517L26.2886 18.5513ZM20.7685 19.625C20.6819 23.5013 20.902 29.9354 22.0644 32.9337C22.1813 33.236 22.0308 33.5762 21.7285 33.6931C21.4261 33.81 21.086 33.6595 20.9691 33.3572C20.0762 31.055 19.7499 27.1264 19.6372 24.0459C17.9423 24.3115 13.3599 25.6145 15.6087 31.8628L15.6108 31.8621C15.62 31.8872 15.627 31.9126 15.6323 31.9377C15.7902 32.4308 17.3075 36.804 22.2777 39.637H40.8858C41.2598 39.21 41.602 38.7544 41.9146 38.2744C44.369 34.505 45.0839 29.1847 44.9924 24.6267C44.9023 20.1252 44.0765 16.4492 43.3726 15.8028C43.3677 15.7982 43.3733 15.801 43.3698 15.7989L43.368 15.7999C43.3182 15.7674 43.2748 15.7286 43.2384 15.6855C41.8988 14.3151 39.4436 13.3085 36.6223 12.8221C34.1966 12.4039 31.5193 12.3764 29.0537 12.837C26.6244 13.2905 24.4074 14.2158 22.8604 15.7057C21.7994 16.7275 21.0514 18.0233 20.7685 19.625Z"
            fill="#BCD6E8"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.488 47.815H37.6809C38.4572 47.815 39.1633 47.4971 39.6757 46.9846C40.1878 46.4721 40.5061 45.766 40.5061 44.9898V40.7783H22.6629V44.9898C22.6629 45.7661 22.9808 46.4722 23.4933 46.9846C24.0058 47.4967 24.7118 47.815 25.488 47.815Z"
            fill="#BCD6E8"
          />
        </svg>

        <div className="flex items-center gap-1 cursor-pointer">
          {/* Mail icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1666 2.9165H5.83329C3.33329 2.9165 1.66663 4.1665 1.66663 7.08317V12.9165C1.66663 15.8332 3.33329 17.0832 5.83329 17.0832H14.1666C16.6666 17.0832 18.3333 15.8332 18.3333 12.9165V7.08317C18.3333 4.1665 16.6666 2.9165 14.1666 2.9165ZM14.5583 7.9915L11.95 10.0748C11.4 10.5165 10.7 10.7332 9.99996 10.7332C9.29996 10.7332 8.59163 10.5165 8.04996 10.0748L5.44163 7.9915C5.31413 7.88567 5.23252 7.73461 5.21388 7.56996C5.19524 7.40531 5.24101 7.23983 5.34163 7.10817C5.55829 6.8415 5.94996 6.7915 6.21663 7.00817L8.82496 9.0915C9.45829 9.59984 10.5333 9.59984 11.1666 9.0915L13.775 7.00817C14.0416 6.7915 14.4416 6.83317 14.65 7.10817C14.8666 7.37484 14.825 7.77484 14.5583 7.9915Z"
              fill="#000E17"
            />
          </svg>
          <span className="text-primary font-bold text-xs">Email Us</span>
        </div>

        <p className="text-[#BCD6E8] text-center text-xs font-bold">© 2022 fightSquare. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
