import Image from "next/image";

export default function FeedbackDetail(){
    return (
        <main className="flex flex-col space-y-6  overflow-hidden">
            <section className="flex flex-col space-y-6">
                <div className="flex flex-row items-center">
                    <button className="flex-1 flex items-center">
                        <span className="">
                            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>                        </span>
                        <span className='ml-4 leading-20 tracking-close text-14x text-xSlate-500 font-bold hover:underline'>Go Back</span>
                    </button>

                    <button className='bg-xIndigo-600 hover:bg-indigo-400 rounded-lg px-6 py-3'>
                        <span className="leading-20 tracking-close text-14x font-bold text-xSiolet-50">Edit Feedback</span>
                    </button>


                </div>
                <div className="px-8 py-7 bg-white hover:cursor-pointer  rounded-lg">
                    <div className="flex flex-row">
                        <div>
                            <div className="flex-none flex bg-xSiolet-50 hover:bg-indigo-200 hover:cursor-pointer rounded-xl">
                            <div className="flex flex-col pb-2 px-3 pt-3.5 items-center">
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
                </div>                
            </section>








            <section className="flex flex-col rounded-xl bg-white py-8">

                <p className="mt-6 ml-8 leading-26 tracking-closer text-18x mb-4 font-bold text-xSlate-600">4 Comments</p>
                <div className="divide-y px-8 relative ml-4 mt-7">           
                    <ol className="border-l border-xSlate-500">

                        <div className="relative">
                            <span className="absolute -ml-5  bg-white ring-8 rounded-full ring-white">
                                <Image className="bg-white rounded-full mb-4" width={40} height={40} alt="Elijah" src={`/assets/user-images/image-elijah.jpg`} />
                            </span>                            
                            <li>
                                <div className="flex ml-20">
                                    <span className="flex-1">
                                        <h4 className="font-bold leading-20 tracking-close text-14x text-xSlate-600">Elijah Moss</h4>
                                        <p className="text-14x font-normal text-xSlate-500">@hexagon.pentagon</p>
                                    </span>
                                    <h6 className="font-semibold text-13x leading-19 text-xIndigo-600">Reply</h6>                                
                                </div>                            

                                <p className="ml-10 mt-4 leading-22 text-15x text-xSlate-500 font-normal"> 
                                    Also, please allow styles to be applied based on system preferences. 
                                    I would love to be able to browse Frontend Mentor in the evening after my device’s dark 
                                    mode turns on without the bright background it currently has.
                                </p>                            

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
                                    <h6 className="font-semibold text-13x leading-19 text-xIndigo-600">Reply</h6>

                                </div>

                                <p className="leading-22 text-15x text-xSlate-500 font-normal"> <span className="font-bold text-15x text-xFuchisia-600">@hummingbird1&nbsp;</span>While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.</p>
                            </div>                            
                        </ul>                    
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
                                    <h6 className="font-semibold text-13x leading-19 text-xIndigo-600">Reply</h6>

                                </div>

                                <p className="leading-22 text-15x text-xSlate-500 font-normal"> <span className="font-bold text-15x text-xFuchisia-600">@hummingbird1&nbsp;</span>While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.</p>
                            </div>                            
                        </ul>  


                    </ol>

                </div>

                <div className="divide-y px-8 relative ml-4 mt-7">           
                    <ol className="border-l border-xSlate-500">

                        <div className="relative">
                            <span className="absolute -ml-5  bg-white ring-8 rounded-full ring-white">
                                <Image className="bg-white rounded-full mb-4" width={40} height={40} alt="Elijah" src={`/assets/user-images/image-elijah.jpg`} />
                            </span>                            
                            <li>
                                <div className="flex ml-20">
                                    <span className="flex-1">
                                        <h4 className="font-bold leading-20 tracking-close text-14x text-xSlate-600">Elijah Moss</h4>
                                        <p className="text-14x font-normal text-xSlate-500">@hexagon.pentagon</p>
                                    </span>
                                    <h6 className="font-semibold text-13x leading-19 text-xIndigo-600">Reply</h6>                                
                                </div>                            

                                <p className="ml-10 mt-4 leading-22 text-15x text-xSlate-500 font-normal"> 
                                    Also, please allow styles to be applied based on system preferences. 
                                    I would love to be able to browse Frontend Mentor in the evening after my device’s dark 
                                    mode turns on without the bright background it currently has.
                                </p>                            

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
                                    <h6 className="font-semibold text-13x leading-19 text-xIndigo-600">Reply</h6>

                                </div>

                                <p className="leading-22 text-15x text-xSlate-500 font-normal"> <span className="font-bold text-15x text-xFuchisia-600">@hummingbird1&nbsp;</span>While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.</p>
                            </div>                            
                        </ul>                    



                    </ol>

                </div>

            </section>



















            <section className="flex flex-col bg-white rounded-xl px-6 pb-8">
                <p className="leading-26 my-8 tracking-closer text-18x font-bold text-xSlate-600">Add Comment</p>
                <div className="h-20 rounded-md mb-2">
                    <textarea id="message" rows={4} className="resize-none w-full h-full placeholder-slate-400 text-15x bg-xSiolet-50 rounded-xl px-6 py-4 outline-none focus:ring-xIndigo-600 focus:border focus:border-xIndigo-600 text-xSlate-600" placeholder="Type Your comment here"></textarea>

                </div>
                <div className="flex flex-row justify-between">
                    <span className="leading-22 text-15x text-xSlate-500 font-normal mt-7">205 Characters left</span>
                    <button className='flex bg-xFuchisia-600 hover:bg-fuchsia-500 rounded-lg mt-4'>
                        <span className="px-6 py-3 leading-20 tracking-close font-bold text-14x text-xSiolet-50">Post Comment</span>
                    </button>
                </div>
            </section>
        </main>
    );
}