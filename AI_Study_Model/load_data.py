from langchain_community.document_loaders import DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.schema import Document
from langchain_openai import OpenAIEmbeddings
from langchain.vectorstores.chroma import Chroma        #Database to store the langchain chunk data
import os, shutil
from pdfminer.high_level import extract_text # type: ignore

DATA_PATH = "Data"
CHROMA_PATH = "Chroma_DB"
PROMPT_TEMPLATE = ""

def main():
    if not os.path.exists(DATA_PATH):
        os.makedirs(DATA_PATH)
    if not os.path.exists(CHROMA_PATH):
        os.makedirs(CHROMA_PATH)
    #convert_pdf_to_markdown("/Users/adityacode/Desktop/LA Hacks 2024/HackWithAPro2024/AI_Study_Model/Data/Notes_test1.pdf")
    load_data()

def load_data():
    generate_data_store()    #Already generated the data once, don't need to generate it again.


def generate_data_store():
    documents = load_documents()
    chunks = split_text(documents)
    save_to_chroma(chunks)

def convert_pdf_to_markdown(file_path):
    text = extract_text(file_path)
    #convert the text into a markdown file
    with open(file_path.replace(".pdf", ".md"), "w") as file:
        file.write(text)

def load_documents():
    loader = DirectoryLoader(DATA_PATH, glob="*.md")
    documents = loader.load()
    return documents


def split_text(documents: list[Document]):
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=300,
        chunk_overlap=100,
        length_function=len,
        add_start_index=True,
    )
    chunks = text_splitter.split_documents(documents)
    print(f"Split {len(documents)} documents into {len(chunks)} chunks.")

    return chunks


def save_to_chroma(chunks: list[Document]):
    # Clear out the database first.
    if os.path.exists(CHROMA_PATH):
        shutil.rmtree(CHROMA_PATH)

    # Create a new DB from the documents.
    db = Chroma.from_documents(
        chunks, OpenAIEmbeddings(), persist_directory=CHROMA_PATH
    )
    db.persist()
    print(f"Saved {len(chunks)} chunks to {CHROMA_PATH}.")

def gen_embedidings(query_text):
    embedding_function = OpenAIEmbeddings()
    db = Chroma(persist_directory=CHROMA_PATH, embedding_function=embedding_function)
    results = db.similarity_search_with_relevance_scores(query_text, k=3)   #k = number of best matches to recieve

    if len(results) == 0 or results[0][1] < 0.7:        #has results or has good results
        print("Unable to find matching results.")
        return None
    return results

if __name__ == "__main__":
    main()