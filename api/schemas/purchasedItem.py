from pydantic import BaseModel

class PurchasedItem(BaseModel):
    purchasedItemID: int
    purchaseID: int
    unitCost: int
    quantity: int
    itemTotal: int
    purchaseJustification: str
    purchasedItemNotes: str
    versionOfPurchase: str
    licenseType: str