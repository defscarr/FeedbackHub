export default function AddFeedback(){
    return (
        <main className="h-screen w-screen px-6 pt-8 pb-20  md:px-28 md:pt-14 md:pb-56 lg:px-96 lg:pt-23 lg:pb-48 overflow-scroll">
            <section className="relative ">
                <button className="flex-1 flex items-center mb-10 hover:underline hover:decoration-xSlate-500">
                    <span className="">
                        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>                        </span>
                    <span className='ml-4 leading-20 tracking-close text-14x text-xSlate-500 font-bold '>Go Back</span>
                </button>

                <p>
                    <span>
                        <svg className="ml-10" width="56" height="56" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient cx="103.9%" cy="-10.387%" fx="103.9%" fy="-10.387%" r="166.816%" id="a"><stop stop-color="#E84D70" offset="0%"/><stop stop-color="#A337F6" offset="53.089%"/><stop stop-color="#28A7ED" offset="100%"/></radialGradient></defs><g fill="none" fill-rule="evenodd"><circle fill="url(#a)" cx="28" cy="28" r="28"/><path fill="#FFF" fill-rule="nonzero" d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"/></g></svg>
                    </span>
                </p>


                <div className="flex flex-col px-10 pb-10 pt-12 space-y-6 bg-white rounded-xl -mt-8">
                    <span className="pb-45 font-bold leading-35 tracking-closest text-18x text-xSlate-600">Create New Feedback</span>

                    <div>
                        <h1 className="leading-20 tracking-close font-bold text-14x text-xSlate-600">Feedback Title</h1>
                        <label className="text-14x font-normal text-xSlate-500">Add a short, descriptive headline</label>

                        <div className="h-12 rounded-md mb-2 mt-4">
                            <input id="message" className="resize-none w-full h-full  text-15x bg-xSlate-50 rounded-xl px-6 py-4 outline-none focus:ring-xIndigo-600 focus:border focus:border-xIndigo-600 text-xSlate-600" />
                        </div>

                    </div>

                    <div>
                        <h1 className="leading-20 tracking-close font-bold text-14x text-xSlate-600">Category</h1>
                        <label className="text-14x font-normal text-xSlate-500">Choose a category for your feedback</label>
                        <div className="h-12 mt-4">
                            <select id="countries" className="mt-4 rounded-md bg-xSlate-50 px-6 py-3 text-15x text-xIndigo-600 divide-x outline-none block w-full cursor-pointer focus:ring-xIndigo-600 focus:border focus:border-xIndigo-600">
                                <option value="US">Feature</option>
                                <option value="CA">UI</option>
                                <option value="FR">UX</option>
                                <option value="DE">Enhancement</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <h1 className="leading-20 tracking-close font-bold text-14x text-xSlate-600">Feedback Detail</h1>
                        <label className="text-14x font-normal text-xSlate-500">Include any specific comments on what should be improved, added, etc.</label>

                        <div className="h-30 md:h-24 rounded-md mb-2 mt-4">
                            <textarea id="message" rows={4} className="resize-none w-full h-full placeholder-slate-400 text-15x bg-xSiolet-50 rounded-xl px-6 py-4 outline-none focus:ring-xIndigo-600 focus:border focus:border-xIndigo-600 text-xSlate-600"></textarea>
                        </div>

                    </div>

                    <div className="flex flex-col space-y-4 md:flex-row md:justify-end md:space-x-4 mt-8">
                        <button className='flex bg-xSlate-600 hover:bg-xSlate-500 rounded-xl mt-4 justify-center'>
                            <span className="px-6 py-3 leading-20 tracking-close font-bold text-14x text-xSiolet-50">Cancel</span>
                        </button>
                        <button className='flex bg-xFuchisia-600 hover:bg-fuchsia-500 rounded-xl mt-4 justify-center'>
                            <span className="px-6 py-3 leading-20 tracking-close font-bold text-14x text-xSiolet-50 text-center">Add Comment</span>
                        </button>
                    </div>

                </div>
            </section>
        </main>
        );
}