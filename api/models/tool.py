from sqlalchemy import Table, Column, Integer, String, Numeric
from config.db import meta

tools = Table(
    'Tools', meta,
    Column('toolID', Integer, primary_key=True, nullable=False, autoincrement=True), # auto incr
    Column('quotationID', Integer, nullable=True),
    Column('toolName', String(150), nullable=False),
    Column('toolNotes', String(150), nullable=False),
    Column('toolCategory', String(150), nullable=False),
    Column('toolType', String(150), nullable=True),
    Column('pathToToolImage', String(255), nullable=False),
    Column('purchasePrice_NoTAX', Numeric(10, 2), nullable=True),
    Column('salePrice_NoTAX', Numeric(10, 2), nullable=True),
    Column('material', String(150), nullable=True)
)