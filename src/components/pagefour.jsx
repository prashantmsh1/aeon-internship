import React, { useState } from 'react';
export default function PageFour({ page, setpage }) {
    const buttonData = [
        {
            question: '5 × 1/2 = ?',
            topic: 'Arithmetic',
            level: 'Introductory'
        },
        {
            question: '3x + 5 = 4',
            topic: 'Basic Algebra',
            level: 'Foundational'
        },
        {
            question: 'x = (-b ± √(b^2 - 4ac)) / 2a',
            topic: 'Intermediate Algebra',
            level: 'Intermediate'
        },
        {
            question: '∫ x^2 dx = ?',
            topic: 'Calculus',
            level: 'Advanced'
        }
    ];
    const [active, setActive] = useState(false)
    const [selected, setselected] = useState(null)
    return (

        <div className="w-full ">
            <div className="grid grid-flow-row mx-auto space-y-4 md:w-4/5 ">
                <h1 className="text-4xl font-bold ">What describes you the best</h1>
                <h4 className="text-lg font-bold text-gray-500 ">Choose the highest level you feel confident in — you can always adjust later.</h4>


            </div>
            <div className="items-center justify-center w-4/5 mx-auto mt-12 ">
                <div className="grid justify-center grid-flow-row gap-4 md:justify-between md:grid-flow-col " >
                    {buttonData.map((data, index) => {
                        return (
                            <button className={`w-56 h-40 bg-white border-2 rounded-md shadow-lg border-white-300 p-7 hover:border-orange-300 ${index === selected ? "border-orange-300" : ""} `} key={index} onClick={() => {
                                setselected(index)
                                setActive(true)
                            }} >
                                <p className='mb-4 font-bold'>{data.question}</p>
                                <p className='font-bold'>{data.topic}</p>
                                <p className="text-xl text-gray-500 ">{data.level}</p>
                            </button>
                        )

                    })}

                </div>
            </div>
            <button className={`p-2 px-12 mt-12 text-xl text-center text-white bg-black rounded-lg ${active ? " " : " bg-gray-300"} `} onClick={() => {
                setpage(page + 1)
            }}>
                Continue
            </button>
        </div>
    );
}    
