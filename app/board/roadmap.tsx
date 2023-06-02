export default function Roadmap(){

    const GenerateCards = () =>{
        const cards: any[] = [];
        for(let i = 0; i <= 8; i++){
            cards.push(
            <div className="flex flex-col p-8 bg-white border-t-4 border-xOrange-300 rounded-lg">
                <div className="flex flex-row items-center space-x-4 mb-2">
                    <span className="h-2 w-2 rounded-full bg-xOrange-300"></span>
                    <span className="flex-1 font-normal text-16x text-xSlate-500">Planned</span>
                </div>
                <div className="mb-4">
                    <h1 className="leading-26 tracking-closer font-bold text-18x text-xSlate-600 cursor-pointer hover:text-xIndigo-600">More comprehensive reports</h1>
                    <p className="text-16x font-normal text-xSlate-500">It would be great to see a more detailed breakdown of solutions.</p>
                </div>
                <div className="flex flex-row items-center mb-4">
                    <span className="rounded-lg text-center bg-xSiolet-50">
                        <h5 className="text-xIndigo-600 font-semibold text-13x leading-19 py-1.5 px-4">Feature</h5>
                    </span>
                </div>
                <div className="flex flex-row items-center">
                    <div className="flex-1 flex items-center">
                        <span className="flex items-center cursor-pointer px-4 py-2.5 bg-xSiolet-50 rounded-xl hover:bg-indigo-200">
                            <span>
                                <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                            </span>
                            <h1 className="ml-2 font-bold text-x13x leading-19 tracking-close text-xSlate-600">4</h1>
                        </span>
                    </div>

                    <span className="flex space-x-2 items-center">
                        <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fill-rule="nonzero"/></svg>
                        <h1 className="leading-26 tracking-closer font-bold text-xSlate-600 text-16x">4</h1>
                    </span>
                </div>
            </div>
            );
        }

        return cards;
    }

    return (
        <main className="flex flex-col px-40 pt-20 pb-20 space-y-12 h-screen w-screen">
            <header className="flex flex-row bg-xSlate-700 px-8 py-4 rounded-xl">
                <div className="flex-1 flex flex-col text-white">
                    <button className="flex items-center hover:underline hover:decoration-xSlate-500">
                        <span className="-mt-1">
                            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#CDD2EE" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                        </span>
                        <span className='ml-4 leading-20 tracking-close text-14x font-bold mb-1'>Go Back</span>
                    </button>

                    <h1 className="leading-35 tracking-closest font-bold text-24x">Roadmap</h1>

                </div>

                <button className="flex items-center bg-xFuchisia-600 hover:bg-fuchsia-500 hover:cursor-pointer  rounded-lg">
                    <h2 className="font-bold text-14x text-xSiolet-50 leading-20 tracking-closest px-6 py-3">+ Add Feedback</h2>
                </button>
            </header>

            <section className="flex-1 flex overflow-hidden space-x-8">

                <div className="flex flex-col w-1/3">
                    <span className="mb-8 relative">
                        <h1 className="font-bold text-18x leading-26 tracking-closer text-xSlate-600">Planned (4)</h1>
                        <p className="font-normal text-16x text-xSlate-500">Ideas prioritized for research</p>
                    </span>

                    <div className="flex flex-col space-y-6 overflow-y-auto">
                        {GenerateCards()}
                    </div>
                </div>

                <div className="flex flex-col  w-1/3">
                    <span className="mb-8 relative">
                        <h1 className="font-bold text-18x leading-26 tracking-closer text-xSlate-600">In-Progress (3)</h1>
                        <p className="font-normal text-16x text-xSlate-500">Currently being developed</p>
                    </span>

                    <div className="flex flex-col space-y-6  overflow-y-auto">
                        {GenerateCards()}
                    </div>
                </div>

                <div className="w-1/3 flex flex-col">
                    <span className="mb-8">
                        <h1 className="font-bold text-18x leading-26 tracking-closer text-xSlate-600">Live (1)</h1>
                        <p className="font-normal text-16x text-xSlate-500">Released features</p>
                    </span>

                    <div className="flex flex-col space-y-6 overflow-y-auto">
                        {GenerateCards()}
                    </div>
                </div>

            </section>
        </main>

    );
}