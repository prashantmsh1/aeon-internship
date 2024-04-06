import graph from "../assets/Images/graph.png";
import eye from "../assets/Images/eye.png";
import target from "../assets/Images/target.png";
import arrow from "../assets/Images/arrow.png";
import globe from "../assets/Images/globe.png";
import { useState } from "react";
export default function PageTwo({ page, setpage }) {
    const interest = [
        {
            id: 1,
            imageUrl: graph,
            title: "Learning specific skills to advance my career"
        },
        {
            id: 2,
            imageUrl: globe,
            title: "Learning specific skills to advance my career"
        },
        {
            id: 3,
            imageUrl: arrow,
            title: "Parent of a school-age child"
        },
        {
            id: 4,
            imageUrl: target,
            title: "Lifelong learner"
        },
        {
            id: 5,
            imageUrl: eye,
            title: "Teacher"
        },

    ];
    const [selected, setselected] = useState(null)

    const handleClick = (index) => {
        setselected(index)
    }
    return (
        <div className="w-full ">
            <div className="grid w-4/5 grid-flow-row mx-auto space-y-4 ">
                <h1 className="text-4xl font-bold ">What describes you the best</h1>
                <h4 className="text-lg font-medium text-gray-500 ">This will help us personalize your experience</h4>


            </div>
            <div className="w-1/2 mx-auto mt-12 ">
                <div className="grid space-y-3">
                    {
                        interest.map((item, index) => {
                            return (
                                <button key={index} className={`flex flex-row p-2 border border-gray-300 hover:shadow-sm hover:border-2 hover:border-yellow-300 rounded-xl ${index == selected ? ` border-yellow-300 border-2` : ``}`} onClick={() => handleClick(index)}>
                                    <div className="flex items-center justify-center ">
                                        <img src={item.imageUrl} alt="" className="w-12 h-12 mr-4 rounded-lg " />
                                        <h2 className="font-semibold ">{item.title}&nbsp;</h2>
                                    </div>
                                </button>
                            )
                        })
                    }


                </div>
            </div>
            <button className="p-2 px-12 mt-6 text-xl text-center text-white bg-black rounded-lg" onClick={() => {
                setpage(page + 1)
            }}>
                Continue
            </button>
        </div>
    )
}