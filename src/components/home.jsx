import PageOne from "./pageone";
import PageTwo from "./pagetwo";
import PageThree from "./pagethree";
import PageFour from "./pagefour";
import PageFive from "./pagefive";
import PageSix from "./pagesix";
import PageSeven from "./pageseven";
import { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";

export default function Home() {

    const [page, setpage] = useState(0);
    const components = [
        <PageOne key="pageOne" page={page} setpage={setpage} />,
        <PageTwo key="pageTwo" page={page} setpage={setpage} />,
        <PageThree key="pageThree" page={page} setpage={setpage} />,
        <PageFour key="pageFour" page={page} setpage={setpage} />,
        <PageFive key="pageFive" page={page} setpage={setpage} />,
        <PageSix key="pageSix" page={page} setpage={setpage} />,
        <PageSeven key="pageSeven" page={page} setpage={setpage} />
    ];
    console.log(page)




    return (
        <div>

            {/* <PageOne />
            <PageTwo />
            <PageThree />
            <PageFour />
            <PageFive /> */}

            <div className={`flex items-center justify-center mb-8 space-x-4 `}>
                {page > 0 && page < 5 && <IoChevronBackOutline className={`text-2xl `} onClick={() => {
                    setpage(page - 1)
                }} />}
                <div className={`w-full bg-gray-200 rounded-full `}>
                    {
                        page < 5 && <div className={`h-1.5 bg-green-700 rounded-full transition-all duration-500 `} style={{ width: `${(page + 1) * (100) / (5)}%` }} ></div>
                    }

                </div>
            </div>


            <div>
                {components[page]}
            </div>

        </div>
    );
}