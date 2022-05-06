from fastapi import APIRouter
from config.db import connection
from models.index import purchasedItems
from schemas.index import PurchasedItem
from sqlalchemy import sql

purchasedItem = APIRouter(prefix="/Tool_Orders")

@purchasedItem.get("/")
async def read_all_ToolOrders():
    return connection.execute(purchasedItems.select()).fetchall()

@purchasedItem.get("/{id}")
async def read_one_ToolOrders(id: int):
    return connection.execute(purchasedItems.select().where(purchasedItems.c.purchasedItemID == id)).fetchall()

@purchasedItem.post("/")
async def create_ToolOrders(purchasedItem: PurchasedItem):
    connection.execute(
            purchasedItems.insert().values(
                purchasedItemID=purchasedItem.purchasedItemID,
                purchaseID=sql.null(),
                unitCost=purchasedItem.unitCost,
                quantity=purchasedItem.quantity,
                itemTotal=purchasedItem.itemTotal,
                purchaseJustification=purchasedItem.purchaseJustification,
                purchasedItemNotes=purchasedItem.purchasedItemNotes,
                versionOfPurchase=purchasedItem.versionOfPurchase,
                licenseType=purchasedItem.licenseType,
                
            )
        )
    return connection.execute(purchasedItems.select()).fetchall()

@purchasedItem.put("/{id}")
async def update_ToolOrders(id: int, purchasedItem: PurchasedItem):
    connection.execute(
        purchasedItems.update().values(
            purchasedItemID=purchasedItem.purchasedItemID,
                purchaseID=sql.null(),
                unitCost=purchasedItem.unitCost,
                quantity=purchasedItem.quantity,
                itemTotal=purchasedItem.itemTotal,
                purchaseJustification=purchasedItem.purchaseJustification,
                purchasedItemNotes=purchasedItem.purchasedItemNotes,
                versionOfPurchase=purchasedItem.versionOfPurchase,
                licenseType=purchasedItem.licenseType,
        ).where(purchasedItems.c.purchasedItemID == id)
    )
    return connection.execute(purchasedItems.select()).fetchall()

@purchasedItem.delete("/{id}")
async def delete_ToolOrders(id: int):
    connection.execute(purchasedItems.delete().where(purchasedItems.c.purchasedItemID == id))
    return connection.execute(purchasedItems.select()).fetchall()