from sqlalchemy import Table, Column, Integer, String
from config.db import meta

tools = Table(
    'tools', meta,
    Column('toolID', Integer, primary_key=True),
    Column('toolName', String(150))
)