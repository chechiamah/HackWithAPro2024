'use client'
import { useRouter } from 'next/navigation';
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import {useState} from "react";
import MultipleChoice from "../components/multiple_choice";
import { cn } from "../utils/cn";


export default function Page() {
    const [ans1, setAns1] = useState("");
    const [ans2, setAns2] = useState("");
    const [ans3, setAns3] = useState("");
    const [ans4, setAns4] = useState("");
    const [ans5, setAns5] = useState("");
    const [ans6, setAns6] = useState("none");
    const router = useRouter();
    const q1 = "1. How would you rate your overall happiness today? (1=worst, 5=best)";
    const q2 = "2. How would you rate your stress levels today? (1=worst, 5=best)";
    const q3 = "3. How motivated do you feel today? (1=worst, 5=best)";
    const q4 = "4. How well do you manage your work-life balance? (1=worst, 5=best)";
    const q5 = "5. How do you feel confident about achieving your study goal? (1=worst, 5=best)";
    const q6 = "6. Anything you wanna add?";
    
    console.log(ans6);


    function compile_data() {
        const suffix = " out of 5";
        const result = {
            q1: q1, q2: q2, q3: q3, q4: q4, q5: q5, q6: q6,
            a1: ans1 + suffix,
            a2: ans2 + suffix,
            a3: ans3 + suffix,
            a4: ans4 + suffix,
            a5: ans5 + suffix,
            a6: ans6
        }
        return result;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // if(!ans1 || !ans2 || !ans3 || !ans4 || !ans5) return;
        // else console.log(ans1 + ans2 + ans3 + ans4 + ans5);

        const data = compile_data();
        // try {
        //     const response = fetch('http://localhost:8000/test', {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json'
        //       },
        //       body: JSON.stringify(data)
        //     });
        //     const responseData = response.json();
        //     console.log('Response from backend:', responseData);
        //   } catch (error) {
        //     console.error('Error sending data to backend:', error);
        //   }
        
        const response = await fetch("http://localhost:8000/test", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({a: "", b: "love"}),
          })
            .then((response) => response.json())
            .then((response) => {
              console.log(response);
            });

        // how to call a python function from

        // sessionStorage.setItem('survey_output', JSON.stringify(dataToSend));
        // router.push(`/output`);
        }

    return (
        <div>
        {/* <div className="backdrop-blur-sm  w-full mx-auto rounded-2xl p-4 md:p-8  bg-white"> */}
        <h2 className="font-bold text-xl text-[#2774AE] dark:text-[#2774AE]">
          Mental Questions
        </h2>
        <form className="my-8 bg-white rounded" onSubmit={handleSubmit}>
  
            <Label htmlFor="email" >{q1}</Label>
            <MultipleChoice setAns={setAns1} id={'a'} />

            <Label htmlFor="email">{q2}</Label>
            <MultipleChoice setAns={setAns2} id={'b'} />

            <Label htmlFor="password">{q3}</Label>
            <MultipleChoice setAns={setAns3} id={'c'}/>

            <Label htmlFor="email">{q4}</Label>
            <MultipleChoice setAns={setAns4} id={'d'}/>

            <Label htmlFor="email">{q5}</Label>
            <MultipleChoice setAns={setAns5} id={'e'}/>
          
            <Label htmlFor="email">{q6}</Label>
            <br />
         
            <textarea  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder='I also feel myself...' name="Text1" cols="40" rows="5" onChange={(e) => setAns6(e.target.value || "none")}></textarea>

          <button
            className="relative group/btn w-full text-white h-10 font-bold bg-[#2774AE] btn overflow-hidden rounded-xl uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-orange-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-[#FFD100] hover:before:animate-ping transition-all duration-300 hover:-translate-y-1 transform hover:shadow-md"
            type="submit"
          >
            Send
          </button>
        </form>
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
  