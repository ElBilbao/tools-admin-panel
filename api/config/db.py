from sqlalchemy import create_engine, MetaData

# URL format 'mysql+pymysql://{db_user}:{db_pwd}@{db_host}:{db_port}/{db_name}'
engine = create_engine("mysql+pymysql://newuser:newpassword@localhost:3306/test_db")

connection = engine.connect()

meta = MetaData()