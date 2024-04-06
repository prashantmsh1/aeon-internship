
export default function PageFour({ page, setpage }) {
    return (

        <div className="w-full ">
            <div className="grid grid-flow-row mx-auto space-y-4 md:w-4/5 ">
                <h1 className="text-4xl font-bold ">What describes you the best</h1>
                <h4 className="text-lg font-bold text-gray-500 ">Choose the highest level you feel confident in — you can always adjust later.</h4>


            </div>
            <div className="items-center justify-center w-4/5 mx-auto mt-12 ">
                <div className="grid justify-center grid-flow-row gap-4 md:justify-between md:grid-flow-col " >
                    <button className='w-56 h-40 bg-white border-2 rounded-md shadow-lg border-white-300 p-7 hover:border-orange-300'>
                        <p className='mb-4 font-bold'>5 × 1/2 = ?</p>
                        <p className='font-bold'>Arithmetic</p>
                        <p className="text-xl text-gray-500 ">Introductory</p>
                    </button>
                    <button className='w-56 h-40 bg-white border-2 rounded-md shadow-lg border-white-300 p-7 hover:border-orange-300'>
                        <p className='mb-4 font-bold'>3x + 5 = 4</p>
                        <p className='font-bold'>Basic Algebra</p>
                        <p className="text-xl text-gray-500 ">Foundational</p>
                    </button>
                    <button className='w-56 h-40 bg-white border-2 rounded-md shadow-lg border-white-300 p-7 hover:border-orange-300'>
                        <p className='mb-4 font-bold'>x = (-b ± √(b^2 - 4ac)) / 2a</p>
                        <p className='font-bold'>Intermediate Algebra</p>
                        <p className="text-xl text-gray-500 ">Intermediate</p>
                    </button>
                    <button className='w-56 h-40 bg-white border-2 rounded-md shadow-lg border-white-300 p-7 hover:border-orange-300'>
                        <p className='mb-4 font-bold'>∫ x^2 dx = ?</p>
                        <p className='font-bold'>Calculus</p>
                        <p className="text-xl text-gray-500 ">Advanced</p>
                    </button>
                </div>
            </div>
            <button className="p-2 px-12 mt-12 text-xl text-center text-white bg-black rounded-lg" onClick={() => {
                setpage(page + 1)
            }}>
                Continue
            </button>
        </div>
    );
}    
