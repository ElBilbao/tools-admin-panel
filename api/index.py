from fastapi import FastAPI
from routes.index import tool
import uvicorn

app = FastAPI()

app.include_router(tool)

@app.get("/api")
def test_api_response():
    return {"message": "success"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)