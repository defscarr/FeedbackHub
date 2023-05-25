import { Feedback404 } from "@/components/no-feedback";

export default function SuggestionPage(){

  const generateList = () => {
    const listItems = [];
    for (let i = 1; i <= 8; i++) {
      listItems.push(
      <div key={i} className="px-8 py-7 bg-white hover:cursor-pointer  rounded-lg">
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
              <p className="mt-1 mb-3 text-16x font-light text-xSlate-500 leading-23">Easier to search for solutions based on a specific stack.</p>

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

      );
    }
    return listItems;
  };


  return (
    <main className="flex flex-row space-x-7 w-full">

      <section className="flex flex-col space-y-6 ">
        <div className="flex flex-col bg-image bg-norepeat rounded-md">
          <span className="pl-6 pb-6 pt-16 pr-16 text-white">
            <h2 className="font-bold text-20x leading-29 tracking-closer">Frontend Mentor</h2>
            <span className="font-normal text-15x leading-22">Feedback Board</span>
          </span>
        </div>

        <div>
          <div className="py-6 pl-6 pr-12 bg-white hover:cursor-pointer rounded-lg">
            <div className="flex flex-col space-y-3.5">
              <div className="flex space-x-2 text-xIndigo-600 text-13x font-semibold">
                  <span className="bg-xIndigo-600 text-white rounded-xl">
                    <h6 className="px-4 py-2">All</h6>
                  </span>
                  <span className="bg-xSiolet-50 hover:bg-indigo-200 hover:cursor-pointer  rounded-xl">
                    <h6 className="px-4 py-2">UI</h6>
                  </span>
                  <span className="bg-xSiolet-50 hover:bg-indigo-200 hover:cursor-pointer  rounded-xl">
                    <h6 className="px-4 py-2">UX</h6>
                  </span>

                </div>
                <div className="flex space-x-2 text-xIndigo-600 text-13x font-semibold"> 
                  <span className="bg-xSiolet-50 hover:bg-indigo-200 hover:cursor-pointer  rounded-xl">
                    <h6 className="px-4 py-2">Enhancement</h6>
                  </span>
                  <span className="bg-xSiolet-50 hover:bg-indigo-200 hover:cursor-pointer  rounded-xl">
                    <h6 className="px-4 py-2">Bug</h6>
                  </span>
              </div>
              <div className="flex space-x-2 text-xIndigo-600 text-13x font-semibold"> 
                  <span className="bg-xSiolet-50 hover:bg-indigo-200 hover:cursor-pointer  rounded-xl">
                    <h6 className="px-4 py-2">Feature</h6>
                  </span>

              </div>


            </div>
          </div>
        </div>
        <div className="flex flex-col p-6 bg-white">
          <div className="flex justify-between items-center">
            <h3 className="text-18x text-xSlate-600 font-bold leading-26 tracking-closer">Roadmap</h3>
            <span className="font-semibold text-13x leading-19 text-xIndigo-600 hover:cursor-pointer  hover:text-indigo-400 hover:opacity-75 underline">View</span>
          </div>

          <div className="flex flex-col mt-4 space-y-2 rounded-lg">
            <div className="flex items-center text-16x leading-23 text-xSlate-500">
              <div className="h-2 w-2 rounded-full bg-xOrange-300 mr-4"></div>
              <span className="font-light   flex-1 ">Planned</span>
              <span className=" font-bold">2</span>
            </div>
            <div className="flex items-center text-16x leading-23 text-xSlate-500">
              <div className="h-2 w-2 rounded-full bg-xFuchisia-600 mr-4"></div>
              <span className="font-light   flex-1 ">In-Progress</span>
              <span className=" font-bold">3</span>
            </div>
            <div className="flex items-center text-16x leading-23 text-xSlate-500">
              <div className="h-2 w-2 rounded-full bg-xBlue-400 mr-4"></div>
              <span className="font-light   flex-1 ">Live</span>
              <span className=" font-bold">1</span>
            </div>

          </div>
        </div>
      </section>

      <section className="flex flex-col space-y-6 w-full">
        <div className="bg-xSlate-700 space-x-9 pl-6 pr-4 rounded-lg flex items-center"> 
          <div className="flex space-x-4 items-center text-white py-6">
            <span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 2.274c2.237 0 4.339.854 5.923 2.408a8.123 8.123 0 012.465 5.839 8.084 8.084 0 01-1.7 4.979 8.457 8.457 0 01-3.652 2.71l-.31.112.003.826h.369c.262 0 .475.21.475.469a.47.47 0 01-.39.46l-.085.008h-.365l.004 1.02h.36c.263 0 .476.21.476.469a.47.47 0 01-.39.461l-.085.008h-.358l.006 1.487a.466.466 0 01-.381.46l-.094.01H9.23a.478.478 0 01-.466-.378l-.01-.092.006-1.487h-.357a.472.472 0 01-.475-.47.47.47 0 01.39-.46l.085-.008h.361l.004-1.02h-.365a.472.472 0 01-.475-.468.47.47 0 01.39-.462l.085-.007h.368l.004-.826a8.452 8.452 0 01-3.996-2.867 8.08 8.08 0 01-1.666-5.056c.032-2.127.923-4.152 2.511-5.7 1.508-1.471 3.448-2.322 5.493-2.416l.324-.009h.06zm1.791 19.769H9.709l-.004 1.02h3.59l-.004-1.02zm-.007-1.958H9.716l-.003 1.02h3.574l-.003-1.02zM11.5 3.212h-.054c-3.946.027-7.327 3.325-7.384 7.2-.048 3.266 2.14 6.192 5.322 7.118.174.05.3.193.332.364l.008.088-.004 1.166h3.56l-.004-1.166a.47.47 0 01.34-.452c3.134-.912 5.323-3.794 5.323-7.01a7.197 7.197 0 00-2.185-5.173A7.453 7.453 0 0011.5 3.212zm.829 1.782a.4.4 0 01.401.397v.322c.48.12.932.307 1.346.552l.228-.226a.405.405 0 01.569 0L16.046 7.2a.393.393 0 010 .56l-.23.228c.247.41.437.858.557 1.333h.323a.4.4 0 01.402.397v1.645a.4.4 0 01-.402.396h-.323c-.12.476-.31.924-.557 1.333l.23.228a.393.393 0 010 .56l-1.173 1.163a.405.405 0 01-.57 0l-.227-.227a5.02 5.02 0 01-1.346.553v.322a.4.4 0 01-.401.396H10.67a.4.4 0 01-.402-.396v-.322a5.022 5.022 0 01-1.345-.553l-.228.227a.405.405 0 01-.569 0L6.954 13.88a.393.393 0 010-.56l.23-.228a4.924 4.924 0 01-.557-1.333h-.324a.4.4 0 01-.401-.396V9.719a.4.4 0 01.401-.397h.324c.12-.475.31-.923.557-1.333l-.23-.228a.393.393 0 010-.56L8.127 6.04a.405.405 0 01.569 0l.228.226a5.021 5.021 0 011.345-.552V5.39a.4.4 0 01.402-.397zM11.5 7.721c-1.572 0-2.846 1.263-2.846 2.82 0 1.558 1.274 2.82 2.846 2.82s2.846-1.262 2.846-2.82c0-1.557-1.274-2.82-2.846-2.82zm11.025 4.152c.262 0 .475.21.475.469a.47.47 0 01-.39.461l-.085.008h-.498a.472.472 0 01-.475-.469.47.47 0 01.39-.461l.085-.008h.498zm-21.552 0c.262 0 .475.21.475.469a.47.47 0 01-.39.461l-.085.008H.475A.472.472 0 010 12.342a.47.47 0 01.39-.461l.085-.008h.498zM3.112 3.45l.074.06.46.451c.185.183.186.48 0 .663a.476.476 0 01-.596.062l-.075-.06-.459-.451a.465.465 0 01-.001-.663.48.48 0 01.597-.062zm17.373.062c.162.16.182.408.06.59l-.061.073-.46.45a.476.476 0 01-.67 0 .464.464 0 01-.06-.59l.06-.074.46-.45a.48.48 0 01.671 0zM11.5 0c.233 0 .427.166.467.384l.008.085v.49a.472.472 0 01-.475.468.473.473 0 01-.467-.384l-.008-.084v-.49c0-.26.213-.469.475-.469z" fill="#FFF" /></svg>
            </span>
            <h3 className="font-bold text-18x leading-26 tracking-closer">6 Suggestions</h3>
          </div>
          <div className="flex-1 flex text-xSiolet-50 items-center">
            <span className="font-light text-14x hover:cursor-pointer ">{`Sort by : `}</span>
            <h4 className="font-bold text-14x mr-2 leading-20 tracking-close">{`  Most Upvotes`}</h4>
            <span>
              <svg className="h-2 w-2" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="white" stroke-width="2"/></svg>
            </span>
          </div>

          <button className="flex items-center bg-xFuchisia-600 hover:bg-fuchsia-500 hover:cursor-pointer  rounded-lg">
            <h2 className="font-bold text-14x text-xSiolet-50 leading-20 tracking-closest px-6 py-3">+ Add Feedback</h2>
          </button>

        </div>

        
        <div className="flex flex-col space-y-4 overflow-hidden">
          {generateList()}
        </div>
      </section>

    </main>


  );
}