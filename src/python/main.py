from fastapi import FastAPI


app = FastAPI()


@app.get('/')
def Start():
    return "Hello Tuwaiq student! this is from Python APP"