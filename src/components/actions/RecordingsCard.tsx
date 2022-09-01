import { ArrowCircleRight, ArrowRight, Video, VideoOctagon } from "iconsax-react";
import Link from "next/link";
const RecordingsCard = ({data}: {data: any}) => {
    return (
        <div className="bg-card rounded-xl py-3 px-4 flex justify-between">
            <div className="flex items-center gap-2">
                <Video size='16' color="#526B7A" />
                <p className="text-secondary text-xs">Check Recordings</p>
            </div>
            <Link href={`/watch/${data.id}`} passHref>
            <button className="flex button-i">
                <ArrowRight size='16' color="#526B7A" className="-rotate-45"/>
            </button>
            </Link>
        </div>
    );
}

export default RecordingsCard;