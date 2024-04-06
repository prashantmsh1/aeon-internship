import pully from "../assets/Images/pully.png"


export default function PageThree({ page, setpage }) {
    return (
        <div>

            <div className="grid grid-cols-2 mx-auto w-9/10">
                <div className="">
                    <img src={pully} alt="" />
                </div>
                <div className="grid grid-flow-row ">
                    <h1 className="my-auto text-4xl font-bold text-left ">You're in the right place</h1>
                    <p className="-mt-24 text-lg font-semibold text-left ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit nobis maiores perspiciatis illum laudantium at placeat. Ipsa nostrum voluptate cum laudantium totam cupiditate ab! Facere distinctio, omnis ullam adipisci sit veniam hic. A iste molestias quae voluptatem omnis labore possimus!
                    </p>
                </div>
            </div>
            <button className="p-2 px-12 text-xl text-center text-white bg-black rounded-lg" onClick={() => {
                setpage(page + 1)
            }}>
                Continue
            </button>

        </div>
    );
}