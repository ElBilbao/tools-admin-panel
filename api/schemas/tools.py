from pydantic import BaseModel

class Tool(BaseModel):
    toolID: int
    quotationID: int
    toolName: str
    toolName: str
    toolNotes: str
    toolCategory: str
    toolType: str
    pathToToolImage: str
    purchasePrice_NoTAX: float
    salePrice_NoTAX: float
    material: str