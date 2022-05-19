from fastapi import APIRouter
from config.db import connection
from models.index import users
from schemas.index import User
from sqlalchemy import sql

user = APIRouter(prefix="/user")

@user.get("/")
async def read_all_users():
    return connection.execute(users.select()).fetchall()

@user.get("/{id}")
async def read_one_user(id: int):
    return connection.execute(users.select().where(users.c.personID == id)).fetchall()

@user.post("/")
async def create_user(user: User):
    connection.execute(
            users.insert().values(
                personID = user.personID,
                names = user.names,
                familyName = user.familyName,
                RFC = user.RFC if user.RFC != "" else sql.null(),
                sex = user.sex,
                DOB = user.DOB,
                addressID = user.addressID if user.addressID != -1 else sql.null(),
                dateAdded = user.dateAdded,
                email = user.email,
                phoneNum = user.phoneNum,
                rol = user.rol
            )
        )
    return connection.execute(users.select()).fetchall()

@user.put("/{id}")
async def update_user(id: int, user: User):
    connection.execute(
        users.update().values(
                personID = user.personID,
                names = user.names,
                familyName = user.familyName,
                RFC = user.RFC if user.RFC != "" else sql.null(),
                sex = user.sex,
                DOB = user.DOB,
                addressID = user.addressID if user.addressID != -1 else sql.null(),
                dateAdded = user.dateAdded,
                email = user.email,
                phoneNum = user.phoneNum,
                rol = user.rol
        ).where(users.c.userID == id)
    )
    return connection.execute(users.select()).fetchall()

@user.delete("/{id}")
async def delete_user(id: int):
    connection.execute(users.delete().where(users.c.personID == id))
    return connection.execute(users.select()).fetchall()


    