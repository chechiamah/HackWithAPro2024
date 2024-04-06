'use client'
import { useRouter } from 'next/navigation';
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import {useState} from "react";
import { cn } from "../utils/cn";


export default function Page() {
    const [ans1, setAns1] = useState("");
    const [ans2, setAns2] = useState("");
    const [ans3, setAns3] = useState("");
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("submmitted");
        if(!ans1 || !ans2 || !ans3) return;
        else console.log(ans1 + ans2 + ans3);
    }

    return (
        <div>
        {/* <div className="backdrop-blur-sm  w-full mx-auto rounded-2xl p-4 md:p-8  bg-white"> */}
        <h2 className="font-bold text-xl text-[#2774AE] dark:text-[#2774AE]">
          Mental Questions
        </h2>
        <form className="my-8 bg-white rounded" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email" >Overall, on a scale 1 to 5 (1 =worst, 5= best) how would you rate your overall happiness today?
</Label>
</LabelInputContainer>
            
            <input type="radio" id="huey" name="drone" value="huey"  />
            <label for="huey" class="blue-text">1</label>
            <input type="radio" id="huey" name="drone" value="huey"  />
            <label for="huey" class="blue-text">2</label>
            
          
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">On a scale from 1 to 5 (1 =least, 5= most) how would you rate your stress levels today?</Label>
            <Input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="I want to get very rich"
              type="text"
              onChange={(e) => setAns2(e.target.value)}
            />
          </LabelInputContainer>


          <label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Min-max range</label>
          <input id="minmax-range" type="range" min="0" max="10" value="5" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">On a scale from 1 to 5 (1 =least, 5= most) how motivated do you feel today?
</Label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="I love Hack with A Pro"
              onChange={(e) => setAns3(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">On a scale from 1 to 5 (1 =worst, 5= best) how well do you manage your work-life balance?</Label>
            <Input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="I want to get very rich"
              type="text"
              onChange={(e) => setAns2(e.target.value)}
            />
          </LabelInputContainer>
        <h2 className="font-bold text-xl text-[#2774AE] dark:text-[#2774AE]">
          Goals Questions
        </h2>

        <LabelInputContainer className="mb-4">
            <Label htmlFor="email">On a scale from 1 to 5 (1 =worst, 5= best) how well do you manage your work-life balance?</Label>
            <Input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="I want to get very rich"
              type="text"
              onChange={(e) => setAns2(e.target.value)}
            />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
            <Label htmlFor="email">On a scale from 1 to 5 (1 =worst, 5= best) how do you feel confident about achieving your study goal?
</Label>
            <Input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="I want to get very rich"
              type="text"
              onChange={(e) => setAns2(e.target.value)}
            />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
            <Label htmlFor="email">On a scale from 1 to 5 (1 =worst, 5= best) how do you feel confident about achieving your study goal?
</Label>
            <Input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="I want to get very rich"
              type="text"
              onChange={(e) => setAns2(e.target.value)}
            />
        </LabelInputContainer>

          <button
            className="relative group/btn w-full text-white h-10 font-bold bg-[#2774AE] btn overflow-hidden rounded-xl uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-orange-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-[#FFD100] hover:before:animate-ping transition-all duration-300 hover:-translate-y-1 transform hover:shadow-md"
            type="submit"
          >
            Send
          </button>
        </form>
    </div>
    //   </div>
    );
}

const LabelInputContainer = ({ children, className }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };
  