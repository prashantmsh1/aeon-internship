import seven from "../assets/Images/seven.png"

export default function PageSeven({ page, setpage }) {

    return (
        <div className="w-full ">
            <div className="w-4/5 mx-auto mt-24">
                <h1 className="text-4xl font-bold ">Learning paths based on your answers</h1>
                <h4 className="mt-8 text-lg font-medium text-gray-500">This will help us personalize your experience</h4>
            </div>
            <div className="grid w-4/5 grid-flow-col gap-6 mx-auto mt-12 ">
                <div className="relative grid items-center justify-center grid-flow-col p-8 text-lg font-semibold text-left border rounded-md border-r-gray-300">
                    <span className="absolute top-0 left-0 grid p-2 px-3 -mt-4 text-xs font-bold transform bg-orange-300 translate-x-44 rounded-2xl">MOST POPULAR</span>

                    <div ><span className="font-bold ">Foundational Math </span>Build
                        your foundational skills in
                        algebra, geometry, and
                        probability.</div>
                    <div>
                        <img src={seven} alt="" />
                    </div>
                </div>
                <div className="relative grid items-center justify-center grid-flow-col p-8 text-lg font-semibold text-left border rounded-md border-r-gray-300">

                    <div><span className="font-bold ">Mathematical Thinking </span>
                        Build your foundational
                        skills in algebra, geometry,
                        and probability.</div>
                    <div>
                        <img src={seven} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}