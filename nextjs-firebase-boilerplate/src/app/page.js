import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="LandingPage" style={{ width: '100vw', height: '100vh', position: 'relative', background: 'white', overflow: 'hidden' }}>
      <div className="z-10 w-full max-w-5xl flex items-center justify-center font-mono text-3xl lg:text-5xl absolute top-20 left-1/2 transform -translate-x-1/2">
        Study Buddy
      </div>
      <div className="Rectangle2" style={{ width: '100vw', height: '160vh', left: '0vw', top: '-10vh', position: 'absolute', transform: 'rotate(30.07deg)', transformOrigin: '0 0', background: 'radial-gradient(rgba(140, 27, 228,.6) 9%, rgba(255, 255, 255, 0) 40%)' }} />
      <div className="Rectangle4" style={{ width: '100vw', height: '160vh', left: '0vw', top: '-10vh', position: 'absolute', transform: 'rotate(-30.07deg)', transformOrigin: '0 0', background: 'radial-gradient(rgba(140, 27, 228,.6) 9%, rgba(255, 255, 255, 0) 40%)' }} />
      <div className="Rectangle6" style={{ width: '100vw', height: '130vh', left: '-25vw', top: '-45vh', position: 'absolute', transform: 'rotate(16.07deg)', transformOrigin: '0 0', background: 'radial-gradient(rgba(168, 253, 77, 1) 10%, rgba(255, 255, 255, 0) 40%)' }} />
      <div className="Rectangle1" style={{ width: '150vw', height: '240vh', left: '0vw', top: '50vh', position: 'absolute', transform: 'rotate(-30.07deg)', transformOrigin: '0 0', background: 'radial-gradient(rgba(168, 253, 77, 1) 10%, rgba(255, 255, 255, 0) 40%)' }} />

      <div
        class="flex flex-col items-center px-12 pb-20 bg-white leading-[145%] max-md:px-5"
      >
        <div
          class="flex justify-center items-center px-16 py-20 w-full max-w-[1140px] max-md:px-5 max-md:max-w-full"
        >
          <div class="flex flex-col mt-40 max-w-full w-[549px] max-md:mt-10">
            <img
              loading="lazy"
              src="/hackthonicon1.png"
              class="w-full aspect-[3.45] max-md:max-w-full"
              style={{position: 'relative', zindex: '1'}}
            />
            <div
              class="justify-center px-12 py-10 mx-7 mt-6 text-base tracking-wide text-black rounded-3xl shadow-sm bg-white bg-opacity-50 max-md:px-5 max-md:mr-2.5 max-md:max-w-full"
            >
              let us figure out how your feeling about the task ahead?
            </div>


            <div
              class="justify-center self-center px-14 py-6 mt-10 text-xl tracking-wide text-white whitespace-nowrap bg-black shadow-sm rounded-[30.5px] max-md:px-5 max-md:mt-10"
            >
              {/*Link to survey*/}
              <Link
                href="/survey"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
                target="_blank"
                rel="noopener noreferrer"
              >


                continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


