import { useRouter } from "next/router";
const Branding = () => {
  const route = useRouter();

  const handleClick = () => {
    if (route.pathname !== "/discourses") {
      route.push("/discourses");
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        route.pathname === "/discourses" ? "cursor-default" : "cursor-pointer"
      }  flex gap-2 items-center`}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.66667"
          y="1.66667"
          width="56.6667"
          height="56.6667"
          rx="15"
          fill="#1B262E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.2886 18.5513C26.3031 18.5375 31.2835 13.7369 38.8414 18.4824C39.1158 18.6552 39.1984 19.0179 39.0254 19.2927C38.8527 19.5671 38.4899 19.6497 38.2152 19.4767C31.4356 15.2196 27.1064 19.3958 27.0937 19.4078C26.8574 19.6303 26.4852 19.619 26.263 19.3824C26.0405 19.1461 26.0518 18.7738 26.2884 18.5517L26.2886 18.5513ZM20.7685 19.625C20.6819 23.5013 20.902 29.9354 22.0644 32.9337C22.1813 33.236 22.0308 33.5762 21.7285 33.6931C21.4261 33.81 21.086 33.6595 20.9691 33.3572C20.0762 31.055 19.7499 27.1264 19.6372 24.0459C17.9423 24.3115 13.3599 25.6145 15.6087 31.8628L15.6108 31.8621C15.62 31.8872 15.627 31.9126 15.6323 31.9377C15.7902 32.4308 17.3075 36.804 22.2777 39.637H40.8858C41.2598 39.21 41.602 38.7544 41.9146 38.2744C44.369 34.505 45.0839 29.1847 44.9924 24.6267C44.9023 20.1252 44.0765 16.4492 43.3726 15.8028C43.3677 15.7982 43.3733 15.801 43.3698 15.7989L43.368 15.7999C43.3182 15.7674 43.2748 15.7286 43.2384 15.6855C41.8988 14.3151 39.4436 13.3085 36.6223 12.8221C34.1966 12.4039 31.5193 12.3764 29.0537 12.837C26.6244 13.2905 24.4074 14.2158 22.8604 15.7057C21.7994 16.7275 21.0514 18.0233 20.7685 19.625Z"
          fill="#EBF7FF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.488 47.815H37.6809C38.4572 47.815 39.1633 47.4971 39.6757 46.9846C40.1878 46.4721 40.5061 45.766 40.5061 44.9898V40.7783H22.6629V44.9898C22.6629 45.7661 22.9808 46.4722 23.4933 46.9846C24.0058 47.4967 24.7118 47.815 25.488 47.815Z"
          fill="#EBF7FF"
        />
        <rect
          x="1.66667"
          y="1.66667"
          width="56.6667"
          height="56.6667"
          rx="15"
          stroke="#172936"
          strokeWidth="3.33333"
        />
      </svg>

      <div className="flex flex-col">
        <h3 className="font-gilroy text-primary text-[18px]">Fight Pools</h3>
        <p className="font-bold text-primary text-[10px]">
          by{" "}
          <span className="text-orange tracking-wider font-bold">
            Fight Square
          </span>
        </p>
      </div>
    </div>
  );
};

export default Branding;
