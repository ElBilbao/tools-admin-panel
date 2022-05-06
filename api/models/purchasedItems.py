from tkinter import NUMERIC
from sqlalchemy import Table, Column, Integer, String, Numeric
from config.db import meta

purchasedItems = Table(
    'PurchasedItems', meta,
    Column('purchasedItemID', Integer, primary_key=True, nullable=False, autoincrement=True), # auto incr
    Column('purchaseID', Integer, nullable=True),
    Column('unitCost', Numeric(10,2), nullable=True),
    Column('quantity', Integer, nullable=False),
    Column('itemTotal', Integer, nullable=False),
    Column('purchaseJustification', String(255), nullable=False),
    Column('purchasedItemNotes', String(255), nullable=False),
    Column('versionOfPurchase', String(255), nullable=False),
    Column('licenseType', String(255), nullable=False),
    
)

