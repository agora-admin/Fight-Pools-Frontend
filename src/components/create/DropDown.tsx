import { Dispatch, FC, SetStateAction, useState } from "react";

interface Props {
  fightStyle: string;
  setFightStyle: Dispatch<SetStateAction<string>>;
}

const DropDown: FC<Props> = ({ fightStyle, setFightStyle }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const changeFightingStyle = (newFightingStyle: string) => {
        setFightStyle(newFightingStyle);
        setShowDropDown(false);
  }

  return (
    <>
      <div className="relative inline-block text-primary/80">
        <label className="input-s cursor-pointer" onClick={() => {
            setShowDropDown(!showDropDown);
        }}>
            {fightStyle}
            <span className={`inline-block ml-4 w-2 h-2 border-b-[1px] border-l-[1px] rounded-bl-[2px] ${!showDropDown && "rotate-45 translate-x-[50%] translate-y-0"} origin-center transition-transform ease-in-out duration-100 border-solid border-current ${showDropDown && "-rotate-45 translate-x-[0%] -translate-y-[40%]"}`}/>
        </label>

        <ul className={`${!showDropDown && "hidden"} input-s ring-2 p-0 overflow-hidden bg-lightBlue absolute top-10 min-w-[160px] shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] z-10`}>
          <li className="p-2 cursor-pointer hover:bg-[#141515]" onClick={() => changeFightingStyle('Boxing')}>Boxing</li>
          <li className="p-2 cursor-pointer hover:bg-[#141515]" onClick={() => changeFightingStyle('MMA')}>MMA</li>
          <li className="p-2 cursor-pointer hover:bg-[#141515]" onClick={() => changeFightingStyle('Muay Thai')}>Muay Thai</li>
          <li className="p-2 cursor-pointer hover:bg-[#141515]" onClick={() => changeFightingStyle('Free Style Wrestling')}>Free Style Wrestling</li>
        </ul>
      </div>
    </>
  );
};

export default DropDown;
