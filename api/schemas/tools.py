from pydantic import BaseModel

class Tool(BaseModel):
    toolID: int
    toolName: str