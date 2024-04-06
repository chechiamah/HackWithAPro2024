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
          Survey Questions
        </h2>
        <form className="my-8 bg-white rounded" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Question 1</Label>
            <Input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="I want to to get rich"
              type="text"
              onChange={(e) => setAns1(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Question 2</Label>
            <Input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="I want to get very rich"
              type="text"
              onChange={(e) => setAns2(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Question 3</Label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="I love Hack with A Pro"
              onChange={(e) => setAns3(e.target.value)}
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
  