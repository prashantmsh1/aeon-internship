import pully from "../assets/Images/pully.png"


export default function PageThree({ page, setpage }) {
    return (
        <div>

            <div className="grid grid-flow-row mx-auto md:grid-cols-2 w-9/10">
                <div className="">
                    <img src={pully} alt="" className="mx-auto " />
                </div>
                <div className="grid grid-flow-row ">
                    <h1 className="my-auto text-4xl font-bold text-left ">You're in the right place</h1>
                    <p className="text-lg font-semibold text-left md:-mt-24 ">
                        Brilliant gets you hands-on to help improve your professional
                        skills and knowledge. You'll interact with concepts and solve
                        fun problems in math, science, and computer science.
                    </p>
                </div>
            </div>
            <button className="p-2 px-12 text-xl text-center text-white bg-black rounded-lg " onClick={() => {
                setpage(page + 1)
            }}>
                Continue
            </button>

        </div>
    );
}