from pydantic import BaseModel
from datetime import datetime

class User(BaseModel):
    personID: int
    names: str
    familyName: str
    RFC: str
    sex: str
    DOB: datetime
    addressID: int
    dateAdded: datetime
    email: str
    phoneNum: str
    rol: str