import { Link } from "react-router-dom";

const StartPage = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center gap-5">
            <div className="flex flex-col gap-2">
                <Link className="bg-[#0F62FE] px-5 py-2 text-white flex justify-center rounded-md" to={"/founder"}>Founder</Link>
                <Link className="bg-[#0F62FE] px-5 py-2 text-white flex justify-center rounded-md" to={"/founder/investors"}>Founder/investors</Link>
            </div>
            <div className="flex flex-col gap-2">
                <Link className="bg-[#0F62FE] px-5 py-2 text-white flex justify-center rounded-md" to={"/investor"}>Investor</Link>
                <Link className="bg-[#0F62FE] px-5 py-2 text-white flex justify-center rounded-md" to={"/investor/explore-projects"}>Investor/explore-projects</Link>
            </div>
        </div>
    );
};

export default StartPage;
