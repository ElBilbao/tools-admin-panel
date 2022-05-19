from sqlalchemy import Table, Column, Integer, String, Date
from config.db import meta

users = Table(
    'Persons', meta,
    Column('personID', Integer, primary_key=True, nullable=False, autoincrement=True), # auto incr
    Column('names', String, nullable=False),
    Column('familyName', String, nullable=True),
    Column('RFC', String, nullable=True),
    Column('sex', String(1), nullable=True),
    Column('DOB', Date, nullable=True),
    Column('addressID', Integer, nullable=True),
    Column('dateAdded', Date, nullable=True),
    Column('email', String, nullable=True),
    Column('phoneNum', String, nullable=True),
    Column('rol', String, nullable=True),
)