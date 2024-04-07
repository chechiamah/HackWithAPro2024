import React from "react";

export default function TextBox({isBot, message}){

  if(!isBot) {
    if(!message) return;
    return (
      <>
        <div class="flex gap-2.5 mt-1 text-black">
          <div
            class="shrink-0 bg-purple-600 border-purple-600 border-solid border-[3px] h-[58px] w-[3px]"
          ></div>
            <div class="flex-auto self-start">
              {message}
              </div>
          </div>
      </>
    );
  }
  else {
    return (
      <>
      <div class="flex gap-0 text-lime-900">
        <div
          class="shrink-0 w-1 bg-lime-400 border-lime-400 border-solid border-[3px] h-[58px]"
        ></div>
          <div
          class="grow items-start px-3.5 pt-3.5 pb-8 bg-lime-200 bg-opacity-50 w-fit max-md:pr-5"
          >
            {message}
           </div>
        </div>
      </>
    );
  }
}
