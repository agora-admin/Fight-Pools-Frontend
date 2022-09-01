import { BrandLogo } from "../utils/SvgHub";

const LoadingScreen = () => {
    return (
        <div className="w-screen h-screen overflow-hidden bg-[#101D26] flex flex-col items-center justify-center gap-4">
            <BrandLogo />
            <div className="w-20 h-1 rounded-full bg-[#212427] flex items-center relative overflow-clip">
                <div className="absolute inset-y-0 left-0 my-auto bg-orange w-[100%] animate-load rounded-full">
                </div>
            </div>
        </div>
    );
}

export default LoadingScreen;