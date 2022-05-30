from fastapi import APIRouter
from config.db import connection
from models.index import tools
from schemas.index import Tool
from sqlalchemy import sql

tool = APIRouter(prefix="/tools")

@tool.get("/")
async def read_all_tools():
    return connection.execute(tools.select()).fetchall()

@tool.get("/available")
async def read_all_available():
    return connection.execute(
        tools.select()
        .where(tools.c.status == "Available")
    ).fetchall()

@tool.get("/in_use")
async def read_all_available():
    return connection.execute(
        tools.select()
        .where(tools.c.status == "In Use")
    ).fetchall()

@tool.get("/{id}")
async def read_one_tool(id: int):
    return connection.execute(tools.select().where(tools.c.toolID == id)).fetchall()

@tool.post("/")
async def create_tool(tool: Tool):
    connection.execute(
            tools.insert().values(
                toolID=tool.toolID,
                purchaseOrderID=sql.null(),
                toolName=tool.toolName,
                toolNotes=tool.toolNotes,
                toolCategory=tool.toolCategory,
                properties=tool.properties,
                status=tool.status,
                userID=sql.null(),
                pathToToolImage=tool.pathToToolImage,
                purchasePrice_NoTAX=tool.purchasePrice_NoTAX,
                salePrice_NoTAX=tool.salePrice_NoTAX,
                material=tool.material
            )
        )
    return connection.execute(tools.select()).fetchall()

@tool.put("/{id}")
async def update_tool(id: int, tool: Tool):
    connection.execute(
        tools.update().values(
                toolID=tool.toolID,
                purchaseOrderID=tool.purchaseOrderID if tool.purchaseOrderID != -1 else sql.null(),
                toolName=tool.toolName,
                toolNotes=tool.toolNotes,
                toolCategory=tool.toolCategory,
                properties=tool.properties,
                status=tool.status,
                userID=tool.userID,
                pathToToolImage=tool.pathToToolImage,
                purchasePrice_NoTAX=tool.purchasePrice_NoTAX,
                salePrice_NoTAX=tool.salePrice_NoTAX,
                material=tool.material
        ).where(tools.c.toolID == id)
    )
    return connection.execute(tools.select()).fetchall()

@tool.delete("/{id}")
async def delete_tool(id: int):
    connection.execute(tools.delete().where(tools.c.toolID == id))
    return connection.execute(tools.select()).fetchall()


    