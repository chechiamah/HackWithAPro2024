'use client'
import { useRouter } from 'next/navigation';
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import {useState} from "react";
import TextBox from "../components/text_box";
import { cn } from "../utils/cn";
import Link from 'next/link';


export default function Page() {
    const [bot, setBot] = useState("hello how can i help you");
    const [user, setUser] = useState("");
    const [displayUser, setDisplayUser] = useState("");
    console.log(user);
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!user) return;

        // const response = await fetch("http://localhost:8000/", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({question: user}),
        // })
        // .then((response) => response.json())
        // .then((response) => {
        //   setBot(response);
        // });
        setDisplayUser(user);
        setUser("");
        setBot("this is your response");
    }
    // setBot("this is your response");


    return (
      <div class="pl-12 bg-white max-md:pl-5">
      <div class="flex gap-5 max-md:flex-col max-md:gap-0">
        <div class="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
          <div
            class="shrink-0 mx-auto mt-9 rounded-xl bg-zinc-300 h-[34px] w-[177px] max-md:mt-10"
          ></div>
        </div>
        <div class="flex flex-col ml-5 w-[18%] max-md:ml-0 max-md:w-full">
          <div
            class="shrink-0 mx-auto mt-9 rounded-xl bg-zinc-300 h-[34px] w-[177px] max-md:mt-10"
          ></div>
        </div>
        <div class="flex flex-col ml-5 w-[18%] max-md:ml-0 max-md:w-full">
          <div
            class="justify-center items-start px-10 py-2.5 mt-9 w-full text-base tracking-wide leading-6 text-black bg-lime-400 rounded-xl max-md:px-5 max-md:mt-10"
          >
            
            <div>
        

            <form action="upload.php" method="post" enctype="multipart/form-data">
              <input type="file" name="pdfFile" accept="application/pdf"/>

            <Link href="/survey"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-color hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
                  rel="noopener noreferrer" >
            <p> PDF upload </p>
            </Link>
            </form>
 
        </div>

          </div>
        </div>
        <div class="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
          <div
            class="flex flex-col grow pt-8 pr-6 pb-16 pl-12 w-full text-base tracking-wide leading-6 bg-zinc-300 bg-opacity-60 max-md:px-5 max-md:mt-10 max-md:max-w-full"
          >
            <div class="flex flex-col py-7 bg-white shadow-sm rounded-[36px]">
              <img
                loading="lazy"
                srcset="..."
                class="self-end mr-6 aspect-[1.35] w-[68px] max-md:mr-2.5"
              />
              <div class="flex flex-col px-8 mt-3.5 max-md:px-5">
                {/* <div class="flex gap-0 text-lime-900">
                  <div
                    class="shrink-0 w-1 bg-lime-400 border-lime-400 border-solid border-[3px] h-[58px]"
                  ></div>
                  <div
                    class="grow items-start px-3.5 pt-3.5 pb-8 bg-lime-200 bg-opacity-50 w-fit max-md:pr-5"
                  >
                    hello how can i help you...
                  </div>
                </div> */}
                <TextBox isBot={false} message={displayUser} />
                <TextBox isBot={true} message={bot} />
                {/* <div class="flex gap-2.5 mt-1 text-black">
                  <div
                    class="shrink-0 bg-purple-600 border-purple-600 border-solid border-[3px] h-[58px] w-[3px]"
                  ></div>
                  <div class="flex-auto self-start">
                    can you summarize this text
                  </div>
              </div> */}
                {/* <TextBox isBot={false} message={user} /> */}
                <div class="flex gap-5 py-2 pr-10 pl-2.5 mt-72 text-purple-500 rounded-lg border border-purple-500 border-solid max-md:pr-5 max-md:mt-10"
               >
                  
                  <div class="flex-auto">
                    <form onSubmit={handleSubmit}>
                      <input type="text" id="huey" name="e" placeholder='message to bot...' onChange={(e) => setUser(e.target.value)}/>
                    </form>
                 
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fddac4899e90e8cdc833af32f1e8a48bf9c015e4395dd7a2c37f5d9fad37fe66?"
                    class="shrink-0 my-auto w-2 border border-purple-500 border-solid aspect-square stroke-[1px] stroke-purple-500"
                  />
                </div>
              </div>
            </div>
            <div class="flex gap-0 px-px mt-20 text-white max-md:mt-10">
        
            </div>
          </div>
        </div>
      </div>
    </div>
    
    );
}

const LabelInputContainer = ({ children, className }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };
  
