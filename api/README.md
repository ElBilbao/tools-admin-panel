# API

The backend of the tools admin consists of a FastAPI that enables the endpoints through which the client will connect to the database.

## Run Dev Environment

### FastAPI Server Setup

Make sure you are in the api directory, you have all requirements installed (`pip install`) and that you run `uvicorn index:app --reload`. The reload tag will redeploy server when a change is made in source code. Use `http://localhost:8000/docs` to test endpoints.

### MySQL Server Setup

It is recommended to use a mysql container with docker, we recommend [this guide for setup of database](https://medium.com/swlh/how-to-connect-to-mysql-docker-from-python-application-on-macos-mojave-32c7834e5afa). Below some of the main queries to run. If you plan to use root and not use container change the access URL in `db.py` and use a MySQL server like XAMPP.

#### SQL for quick testing

Use the database sql in the db directory to create your local schema.

##### Basic setup

`CREATE DATABASE test_db;`

`CREATE USER 'newuser'@'%' IDENTIFIED BY 'newpassword';`

`GRANT ALL PRIVILEGES ON test_db.* to 'newuser'@'%';`

##### Tools WITHOUT quotation testing values

`INSERT INTO test_db.Tools VALUES (0, null, "example", "example note", "category example", "tool type", "pathtoimage", null, null, "material");`
