from fastapi import APIRouter
from config.db import connection
from models.index import tools
from schemas.index import Tool

tool = APIRouter()

@tool.get("/")
async def read_all_tools():
    return connection.execute(tools.select()).fetchall()

@tool.get("/{id}")
async def read_one_tool(id: int):
    return connection.execute(tools.select().where(tools.c.toolID == id)).fetchall()

@tool.post("/")
async def write_tool(tool: Tool):
    connection.execute(
            tools.insert().values(
                toolID=tool.toolID,
                toolName=tool.toolName
            )
        )
    return connection.execute(tools.select()).fetchall()

@tool.put("/{id}")
async def write_update_tool(id: int, tool: Tool):
    connection.execute(
        tools.update().values(
            toolID=tool.toolID,
            toolName=tool.toolName
        ).where(tools.c.toolID == id)
    )
    return connection.execute(tools.select()).fetchall()

@tool.delete("/{id}")
async def write_delete_tool(id: int):
    connection.execute(tools.delete().where(tools.c.toolID == id))
    return connection.execute(tools.select()).fetchall()