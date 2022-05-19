
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.index import tool
from routes.index import purchasedItem
from routes.index import user

import uvicorn

app = FastAPI()

# Handle CORS
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(tool)
app.include_router(purchasedItem)
app.include_router(user)

@app.get("/api")
def test_api_response():
    return {"message": "success"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)