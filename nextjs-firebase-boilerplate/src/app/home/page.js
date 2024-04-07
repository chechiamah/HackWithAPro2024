export default function HomeScript() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl flex items-center justify-center font-mono text-3xl lg:text-5xl">
          Study Buddy
        </div>
        <div className="green-big -10 w-full max-w-5xl flex items-center justify-center font-mono text-sm lg:text-base"> {/* Reduced text size for description */}
            Welcome to Study Buddy, your companion in conquering mental hurdles that hinder your productivity.Life's unexpected moments can disrupt your focus, but fear not! Study Buddy is here to guide you through reflection and action steps, fostering a focused and serene mindset.
            Empowering you with tools to declutter complex notes and distill key insights, Study Buddy is your gateway to efficient studying. Embrace a journey of enhanced learning and productivity. Happy studying!
        </div>
        <div className="mb-32 grid justify-center lg:mb-0">
          {/* Button Link*/}
          <Link
            href="/survey"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              How are you feeling?
            </h2>
          </Link>
        </div>
        <div class="background">
            <div class="top-left image" id="topLeft"></div>
            <div class="top-right image" id="topRight"></div>
            <div class="bottom-left image" id="bottomLeft"></div>
            <div class="bottom-right image" id="bottomRight"></div>
        </div>
        <script src="homescript.js"></script>
        </main>

    )
}