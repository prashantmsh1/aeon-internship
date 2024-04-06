import { FaRegCircle } from "react-icons/fa";



export default function PageSix({ page, setpage }) {
    setTimeout(() => {
        setpage(page + 1)
    }, 1000);
    return (
        <div className="flex items-center justify-center h-screen " >
            <div className="flex flex-col items-center justify-center w-4/5 ">
                <FaRegCircle className="mx-auto -mt-24 text-orange-300 text-8xl" />

                <h1 className="mt-8 text-3xl font-bold "> Finding learning path recommendations for you based on your responses</h1>
            </div>
        </div>
    )
}


