import { useState } from 'react';
import student from '../assets/Images/student.png';
import professional from '../assets/Images/professional.png';
import parent from '../assets/Images/parent.png';
import learner from '../assets/Images/learner.png';
import teacher from '../assets/Images/teacher.png';
import other from '../assets/Images/other.png';
export default function PageOne({ page, setpage }) {



    const options = [
        {
            id: 1,
            title: "Student",
            description: "or soon to be enrolled",
            image_url: student,
        },
        {
            id: 2,
            title: "Professional",
            description: "pursuing a career",
            image_url: professional,
        },
        {
            id: 3,
            title: "Parent",
            description: "of a school-age child",
            image_url: parent,
        },
        {
            id: 4,
            title: "Lifelong learner",
            description: "",
            image_url: learner,
        },
        {
            id: 5,
            title: "Teacher",
            description: "",
            image_url: teacher,
        },
        {
            id: 6,
            title: "Other",
            description: "",
            image_url: other,
        },
    ];
    const [selected, setSelected] = useState(null)
    function handleClick(e) {
        setSelected(e)
    }
    return (
        <div className="w-full ">
            <div className="grid grid-flow-row mx-auto space-y-4 md:w-4/5 ">
                <h1 className="text-4xl font-bold ">Which describes you the best</h1>
                <h4 className="text-lg font-medium text-gray-500 ">This will help us personalize your experience</h4>


            </div>
            <div className="mx-auto mt-12 md:w-1/2 ">
                <div className="grid space-y-2 ">
                    {
                        options.map((option, index) => {
                            return (
                                <button key={option.id} className={`flex flex-row p-1 border border-gray-300 rounded-xl ${index === selected ? ' bg-slate-300' : 'hover:bg-slate-300'} `} onClick={() => handleClick(index)}>
                                    <div className="flex items-center justify-center ">
                                        <img src={option.image_url} alt="" className="w-12 h-12 mr-4 rounded-lg " />
                                        <h2 className="font-semibold ">{option.title}&nbsp;</h2>
                                        <p>{option.description}</p>
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