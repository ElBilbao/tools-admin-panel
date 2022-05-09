from pydantic import BaseModel

class Tool(BaseModel):
    toolID: int
    purchaseOrderID: int
    toolName: str
    toolNotes: str
    toolCategory: str
    properties: str
    status: str
    userID: int
    pathToToolImage: str
    purchasePrice_NoTAX: float
    salePrice_NoTAX: float
    material: str