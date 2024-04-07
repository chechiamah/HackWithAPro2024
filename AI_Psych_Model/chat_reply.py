from langchain_openai import ChatOpenAI
from pydantic import BaseModel
import os
import json

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS to the application
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)  

@app.post("/test")
def test_request(data: Request):
    data = data.json()
    response = gen_response(data)
    return {"message": response}

def gen_response(data = {}):
    if len(data) == 0:
        return []
    
    prompt_template = "Given the results of a survey in Question/Answer format, answer the following Prompt in a numbereed list format: return three suggestions to improve the user's mental health If the user seems healthy, then return the phrase \"5\ with no additional text."". Survey responses:\n\n"
    count = 0
    for k, v, in data.items():
        count +=1
        prompt_template += f"Survey Question {count}: {k}\nSurvey Answer {count}: {v}\n"

    #take the prompt_template and query the model
    model = ChatOpenAI()
    response_text = model.invoke(prompt_template)
    if response_text == "5":
        return ["Looks like you're doing great! Keep up the good work!"]
    
    #take the response list, and convert it into a list of strings, with each element being a suggestion
    response_list = (response_text.content).split("\n")
    suggestions = []
    for i in range(0,3):
        suggestions.append(response_list[i])
    
    return suggestions

sample_data = {
    "Overall, on a scale 1 to 5 (1 =worst, 5= best) how would you rate your overall happiness today?": "4",
    "On a scale from 1 to 5 (1 =least, 5= most), how would you rate your stress levels today?": "2",
    "On a scale from 1 to 5 (1 =least, 5= most) how motivated do you feel today?": "5",
    "On a scale from 1 to 5 (1 =worst, 5= best) how well do you manage your work-life balance?": "4",
}

def main():
    reponses = gen_response(sample_data)

if __name__ == "__main__":
    main()

