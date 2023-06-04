import Image from "next/image";

export default function FeedbackDetail(){

    const GenerateCardsMDplus = () => {
        const all = [];
        
        for (let i = 1; i <= 8; i++){

            all.push(

                    <div className="relative ml-6 py-8" key={i}>           
                        <ol className="border-l border-l-slate-100">

                            <div className="flex relative">
                                <span className="absolute -ml-5  bg-white ring-8 rounded-full ring-white">
                                    <Image className="bg-white rounded-full mb-4" width={40} height={40} alt="Elijah" src={`/assets/user-images/image-elijah.jpg`} />
                                </span>                            
                                <li className="flex flex-col">
                                    <div className="flex ml-20">
                                        <span className="flex-1">
                                            <h4 className="font-bold leading-20 tracking-close text-14x text-xSlate-600">Elijah Moss</h4>
                                            <p className="text-14x font-normal text-xSlate-500">@hexagon.pentagon</p>
                                        </span>
                                        <h6 className="font-semibold text-13x leading-19 cursor-pointer text-xIndigo-600 hover:underline hover:decoration-xIndigo-600">Reply</h6>                                
                                    </div>                            

                                    <p className="ml-10 mb-6 mt-4 leading-22 text-15x text-xSlate-500 font-normal"> 
                                        Also, please allow styles to be applied based on system preferences. 
                                        I would love to be able to browse Frontend Mentor in the evening after my device’s dark 
                                        mode turns on without the bright background it currently has.
                                    </p>

                                {/* reply start */}

                                    <div className="flex justify-between space-x-4">
                                        <div className="flex-1 h-20 rounded-md mb-2 pl-14">
                                            <textarea id="message" rows={4} className="resize-none w-full h-full placeholder-slate-400  text-15x bg-xSiolet-50 rounded-xl px-6 py-4 outline-none focus:ring-xIndigo-600 focus:border focus:border-xIndigo-600 text-xSlate-600" placeholder="Type Your comment here"></textarea>
                                        </div>

                                        <div className="flex items-start">
                                            <button className='flex bg-xFuchisia-600 hover:bg-fuchsia-500 rounded-lg'>
                                                <span className="px-6 py-3 leading-20 tracking-close font-bold text-14x text-xSiolet-50">Post Reply</span>
                                            </button>
                                        </div>


                                    </div>

                                {/* reply end */}
                            

                                </li>


                            </div>

                            <ul className="flex flex-row py-8 pl-6">
                                <span className="mr-8 shrink-0">
                                    <Image className="rounded-full object-cover" width={40} height={40} alt="Elijah" src={`/assets/user-images/image-anne.jpg`} />
                                </span>
                                <div className="flex flex-col grow">

                                    <div className=" flex flex-row justify-between items-center space-x-8">
                                        <span className="flex-1 mb-4 items-center">
                                            <h4 className="font-bold leading-20 tracking-close text-14x text-xSlate-600">Anne Valentine </h4>
                                            <p className="text-14x font-normal text-xSlate-500">@annev1990</p>
                                        </span>
                                        <h6 className="font-semibold text-13x leading-19 text-xIndigo-600 cursor-pointer hover:underline hover:decoration-xIndigo-600">Reply</h6>

                                    </div>

                                    <p className="leading-22 text-15x text-xSlate-500 font-normal">
                                        <span className="font-bold text-15x text-xFuchisia-600">@hummingbird1&nbsp;</span>
                                        While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. 
                                        There might be a need to turn off the extension for sites with naturally black backgrounds though.
                                    </p>
                                </div>                            
                            </ul>                    



                        </ol>

                    </div>

            );


            
            
            
        }
        return all;
    }
    const GenerateCardsSM = () => {
        const cards = [];
        for(let i = 0; i <= 9; i++){
            cards.push(

                <div className="flex flex-col py-6">

                    <div className="flex items-center pb-6">
                        <Image className='rounded-full mr-6' src={`/assets/user-images/image-elijah.jpg`} alt="Elijah Moss" width={40} height={40} />
                        <span className="flex-1">
                            <h4 className="font-bold leading-20 tracking-close text-14x text-xSlate-600">Elijah Moss</h4>
                            <p className="text-14x font-normal text-xSlate-500">@hexagon.pentagon</p>
                        </span>
                        <h6 className="font-semibold text-13x leading-19 cursor-pointer text-xIndigo-600 hover:underline hover:decoration-xIndigo-600">Reply</h6>                                

                    </div>

                    <p className="leading-22 text-15x text-xSlate-500 font-normal pb-6">
                        While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. 
                        There might be a need to turn off the extension for sites with naturally black backgrounds though.
                    </p>

                                {/* reply start */}

                                <div className="flex justify-between space-x-4">
                                        <div className="flex-1 h-20 rounded-md mb-2">
                                            <textarea id="message" rows={4} className="resize-none w-full h-full placeholder-slate-400  text-15x bg-xSiolet-50 rounded-xl px-6 py-4 outline-none focus:ring-xIndigo-600 focus:border focus:border-xIndigo-600 text-xSlate-600" placeholder="Type Your reply here"></textarea>
                                        </div>

                                        <div className="flex items-start">
                                            <button className='flex bg-xFuchisia-600 hover:bg-fuchsia-500 rounded-lg'>
                                                <span className="px-6 py-3 leading-20 tracking-close font-bold text-14x text-xSiolet-50">Post Reply</span>
                                            </button>
                                        </div>


                                </div>

                                {/* reply end */}                    
                    



                    <div className="flex flex-col py-6 pl-6 pt-6">
                        <div className="flex items-center pb-6">
                            <Image className='rounded-full mr-6' src={`/assets/user-images/image-elijah.jpg`} alt="Elijah Moss" width={40} height={40} />
                            <span className="flex-1">
                                <h4 className="font-bold leading-20 tracking-close text-14x text-xSlate-600">Elijah Moss</h4>
                                <p className="text-14x font-normal text-xSlate-500">@hexagon.pentagon</p>
                            </span>
                            <h6 className="font-semibold text-13x leading-19 cursor-pointer text-xIndigo-600 hover:underline hover:decoration-xIndigo-600">Reply</h6>                                

                        </div>

                        <p className="leading-22 text-15x text-xSlate-500 font-normal">
                            <span className="font-bold text-15x text-xFuchisia-600">@hummingbird1&nbsp;</span>
                            While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. 
                            There might be a need to turn off the extension for sites with naturally black backgrounds though.
                        </p>
                    </div>



                </div>


            );

        }
        return cards;
    }
    return (
        <main className="flex space-y-6 px-6 pt-6 pb-20 md:px-10 md:pt-14 md:pb-28 lg:px-96 lg:pb-36 lg:pt-20 h-screen w-screen overflow-scroll">
            <div className="flex-1 flex-col space-y-6 ">
                
                <section className="flex flex-col space-y-6">
                    <nav className="flex flex-row items-center">
                        <button className="flex-1 flex items-center">
                            <span className="">
                                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>                        </span>
                            <span className='ml-4 leading-20 tracking-close text-14x text-xSlate-500 font-bold hover:underline'>Go Back</span>
                        </button>

                        <button className='bg-xIndigo-600 hover:bg-indigo-400 rounded-lg px-6 py-3'>
                            <span className="leading-20 tracking-close text-14x font-bold text-xSiolet-50">Edit Feedback</span>
                        </button>


                    </nav>

                    <header className="hidden md:block px-8 py-7 bg-white hover:cursor-pointer rounded-lg">
                        <div className="flex flex-row">
                            <div className="flex items-start">
                                <div className="flex-none flex bg-xSiolet-50 hover:bg-indigo-200 pb-2 px-3 pt-3.5 hover:cursor-pointer rounded-xl">
                                    <div className="flex flex-col  items-center">
                                        <span>
                                            <svg className="h-2 w-2 stroke-xIndigo-600" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4"  stroke-width="2"/></svg>
                                        </span>
                                        <h1 className="font-bold text-24 text-xSlate-600 leading-35 tracking-closest">99</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-10 flex-1 flex flex-col">
                                <h3 className='leading-26 tracking-closer text-xSlate-600 text-26x font-bold'>Add tags for solutions</h3>
                                <p className="mt-1 mb-3 text-16x font-normal text-xSlate-500 leading-23">Easier to search for solutions based on a specific stack.</p>

                                <div className="flex items-start">
                                    <span className="bg-xSiolet-50 rounded-xl text-xIndigo-600 text-13x font-semibold">
                                    <h6 className="px-4 py-2">Enhancement</h6>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row space-x-2 items-center">
                                <span>
                                    <svg className="h-4 w-5 fill-slate-300" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" /></svg>
                                </span>
                                <span className="text-16x font-bold text-xSlate-600">2</span>
                            </div>
                        </div>
                    </header>

{/* Mobile Version start */}
                    <header className="px-6 py-6 bg-white rounded-lg flex flex-col md:hidden">
                        <h3 className='leading-26 mb-2 tracking-closer text-xSlate-600 text-26x font-bold'>Add tags for solutions</h3>
                        <p className="mt-1 mb-2.5 text-16x font-normal text-xSlate-500 leading-23">Easier to search for solutions based on a specific stack.</p>
                        <div className="flex items-start mb-3.5">
                            <span className="bg-xSiolet-50 rounded-xl text-xIndigo-600 text-13x font-semibold">
                                <h6 className="px-4 py-2">Enhancement</h6>
                            </span>
                        </div>

                        <div className="flex justify-between items-center">

                            <div className="flex-none flex bg-xSiolet-50 hover:bg-indigo-200 px-4 py-1.5 hover:cursor-pointer rounded-xl">
                                <div className="flex items-center">
                                    <span>
                                        <svg className="h-2 w-2 stroke-xIndigo-600" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4"  stroke-width="2"/></svg>
                                    </span>
                                    <h1 className="font-bold text-24 text-xSlate-600 leading-35 tracking-closest ml-4">99</h1>
                                </div>
                            </div>
                            <div className="flex flex-row space-x-2 items-center">
                                    <span>
                                        <svg className="h-4 w-5 fill-slate-300" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" /></svg>
                                    </span>
                                    <span className="text-16x font-bold text-xSlate-600">2</span>
                            </div>


                        </div>
                    </header>
{/* Mobile Version end */}

                </section>


{/* comment section starts here */}

                <section className="flex-none flex flex-col rounded-xl bg-white py-8 px-6 h-3/5">

                    <p className="relative mt-6 leading-26 tracking-closer text-18x font-bold text-xSlate-600 pb-4">4 Comments</p>

                    <div className="hidden md:block flex flex-col overflow-y-auto divide-y divide-slate-100">
                        {GenerateCardsMDplus()}
                    </div>

                    <div className="flex flex-col overflow-y-auto divide-y divide-slate-100 md:hidden">
                        {GenerateCardsSM()}
                    </div>


                </section>

{/* comment section ends here */}


                <footer className="flex flex-col bg-white rounded-xl px-6 pb-8">
                    <p className="leading-26 my-8 tracking-closer text-18x font-bold text-xSlate-600">Add Comment</p>
                    <div className="h-20 rounded-md mb-2">
                        <textarea id="message" rows={4} className="resize-none w-full h-full placeholder-slate-400  text-15x bg-xSiolet-50 rounded-xl px-6 py-4 outline-none focus:ring-xIndigo-600 focus:border focus:border-xIndigo-600 text-xSlate-600" placeholder="Type Your comment here"></textarea>

                    </div>
                    <div className="flex flex-row justify-between">
                        <span className="leading-22 text-15x text-xSlate-500 font-normal mt-7">205 Characters left</span>
                        <button className='flex bg-xFuchisia-600 hover:bg-fuchsia-500 rounded-lg mt-4'>
                            <span className="px-6 py-3 leading-20 tracking-close font-bold text-14x text-xSiolet-50">Post Comment</span>
                        </button>
                    </div>
                </footer>



            </div>

        </main>
    );
}