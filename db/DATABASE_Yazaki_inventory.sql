/*
DROP DATABASE Yazaki_inventory;
*/

CREATE DATABASE IF NOT EXISTS Yazaki_inventory;

USE Yazaki_inventory;

--
-- Table structure for table Addresses
--

DROP TABLE IF EXISTS Addresses;
CREATE TABLE Addresses (
  addressID INT NOT NULL AUTO_INCREMENT,
  country VARCHAR(50) DEFAULT NULL,
  state VARCHAR(50) DEFAULT NULL,
  city VARCHAR(50) DEFAULT NULL,
  zipCode INT DEFAULT NULL,
  street VARCHAR(50) DEFAULT NULL,
  exteriorNum VARCHAR(15) DEFAULT NULL,
  interiorNum VARCHAR(15) DEFAULT NULL,
  extra_info VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (addressID)
);



DROP TABLE IF EXISTS TaxData;
CREATE TABLE TaxData (
  RFC varchar(15) NOT NULL,
  businessName varchar(50) DEFAULT NULL,
  addressID INT DEFAULT NULL,
  PRIMARY KEY (RFC),
  FOREIGN KEY (addressID) REFERENCES Addresses (addressID)
);

INSERT INTO TaxData VALUES ('XAXX010101000','RFC Genérico', NULL);

--
-- Table structure for table Empresas
--

DROP TABLE IF EXISTS Companies;
CREATE TABLE Companies (
  companyID INT NOT NULL AUTO_INCREMENT,
  nombreEmpresa varchar(105) NOT NULL,
  RFC varchar(15) DEFAULT NULL,
  addressID INT DEFAULT NULL,
  dateJoined datetime DEFAULT NOW(),
  email varchar(105) DEFAULT NULL,
  dedication varchar(150) DEFAULT NULL,
  PRIMARY KEY (companyID),
  FOREIGN KEY (RFC) REFERENCES TaxData (RFC),
  FOREIGN KEY (addressID) REFERENCES Addresses (addressID)
);



--
-- Table structure for table Persons
--

DROP TABLE IF EXISTS Persons;
CREATE TABLE Persons (
  personID INT NOT NULL AUTO_INCREMENT,
  names varchar(55) NOT NULL,
  familyName varchar(55) DEFAULT NULL,
  RFC varchar(15) DEFAULT NULL,
  sex char(1) DEFAULT NULL,
  DOB date DEFAULT NULL,
  addressID INT DEFAULT NULL,
  dateAdded datetime DEFAULT NOW(),
  email varchar(105) DEFAULT NULL,
  phoneNum varchar(25) DEFAULT NULL,
  rol varchar(105) DEFAULT NULL,
  PRIMARY KEY (personID),
  FOREIGN KEY (RFC) REFERENCES TaxData (RFC),
  FOREIGN KEY (addressID) REFERENCES Addresses (addressID)
);

INSERT INTO Persons (names, familyName, sex, email, phoneNum, rol) VALUES ('Edgar','Rios', 'M', 'prueba@yazaki.com', '81 3388 3030', 'Software Engineer Manager');

--
-- Table structure for table Accounts
--

DROP TABLE IF EXISTS Accounts;
CREATE TABLE Accounts (
  accountID INT NOT NULL AUTO_INCREMENT,
  username varchar(50) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(100) NOT NULL,
  personID INT DEFAULT NULL,
  accountType TINYTEXT,
  PRIMARY KEY (accountID),
  FOREIGN KEY (personID) REFERENCES Persons (personID)
);

INSERT INTO Accounts VALUES (DEFAULT,'pruebaAdminUser','prueba8133883030','prueba@yazaki.com', 1, 'admin-master');

--
-- Table structure for table Employees
--

DROP TABLE IF EXISTS Employees;
CREATE TABLE Employees (
  employeeID INT NOT NULL AUTO_INCREMENT,
  personID INT NOT NULL,
  companyID INT DEFAULT NULL,
  bossID INT DEFAULT NULL,
  PRIMARY KEY (employeeID),
  FOREIGN KEY (personID) REFERENCES Persons (personID),
  FOREIGN KEY (bossID) REFERENCES Employees (employeeID),
  FOREIGN KEY (companyID) REFERENCES Companies (companyID)
);


--
-- Table structure for table Clients
--

DROP TABLE IF EXISTS Clients;
CREATE TABLE Clients (
  clientID INT NOT NULL AUTO_INCREMENT,
  personID INT DEFAULT NULL,
  companyID INT DEFAULT NULL,
  dateAdded datetime DEFAULT NOW(),
  clientOfEmployee INT DEFAULT NULL,
  PRIMARY KEY (clientID),
  FOREIGN KEY (personID) REFERENCES Persons (personID),
  FOREIGN KEY (clientOfEmployee) REFERENCES Employees (employeeID),
  FOREIGN KEY (companyID) REFERENCES Companies (companyID)
);


--
-- Table structure for table Suppliers
--

DROP TABLE IF EXISTS Suppliers;
CREATE TABLE Suppliers (
  supplierID INT NOT NULL AUTO_INCREMENT,
  personID INT DEFAULT NULL,
  companyID INT DEFAULT NULL,
  PRIMARY KEY (supplierID),
  FOREIGN KEY (personID) REFERENCES Persons (personID),
  FOREIGN KEY (companyID) REFERENCES Companies (companyID)
);

CREATE TABLE Purchaser_Departments (
	purchaser_departmentID INT not NULL AUTO_INCREMENT,
	YSS_Purchasing TEXT,
	YNA_Purchasing TEXT,
	YNA_IT TEXT,
	YSS_IT TEXT,
	other TEXT,
	PRIMARY KEY (purchaser_departmentID)
);

CREATE TABLE Projects (
	projectID INT NOT NULL auto_increment,
	projectDescription TEXT,
	PRIMARY KEY (projectID)
);

--
-- Table structure for table PurchaseOrders
--

CREATE TABLE PurchaseOrders (
	purchaseOrderID INT NOT NULL AUTO_INCREMENT,
  purchaseOrderDate datetime NOT NULL,
	purchaseType TEXT,
	purchaseInitiatorID INT,
	details TEXT,
  status TEXT,
	purchaseResponsibleDepartment INT,
  supplierID INT DEFAULT NULL,
	dateOrdered datetime,
	dateReceived datetime,
	purchaseTotal  decimal(10,2),
	financeApproverID INT,
	approverInSAP INT,
	FAA INT,
	purchaseNotes TEXT,
	costCenterCharged TEXT,
	targetProjectID INT,
	purchaseStatus tinytext,
	accountID INT,
	PRIMARY KEY (purchaseOrderID),
	FOREIGN KEY (purchaseResponsibleDepartment) REFERENCES Purchaser_Departments (purchaser_departmentID),
	FOREIGN KEY (targetProjectID) REFERENCES Projects (projectID),
	FOREIGN KEY (accountID) REFERENCES Accounts (accountID),
  FOREIGN KEY (supplierID) REFERENCES Suppliers (supplierID),
  FOREIGN KEY (purchaseInitiatorID) REFERENCES Persons (personID)
);


--
-- Table structure for table AdditionalServices
--

DROP TABLE IF EXISTS AdditionalServices;
CREATE TABLE AdditionalServices(
  serviceID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  purchaseOrderID INT NOT NULL,
  serviceName TINYTEXT,
  servicePrice decimal(10,2),
  FOREIGN KEY (purchaseOrderID) REFERENCES PurchaseOrders (purchaseOrderID)
);


--
-- Table structure for table Tools
--


DROP TABLE IF EXISTS Tools;
CREATE TABLE Tools (
  toolID INT NOT NULL AUTO_INCREMENT,
  purchaseOrderID INT DEFAULT NULL,
  toolName varchar(150) NULL,
  toolNotes TEXT NULL,
  toolCategory TEXT  NULL,
  properties TEXT DEFAULT NULL,
  status TINYTEXT,
  userID INT,
  pathToToolImage varchar(255) NULL,
  purchasePrice_NoTAX decimal(10,2) DEFAULT NULL,
  salePrice_NoTAX decimal(10,2) DEFAULT NULL,
  material TINYTEXT DEFAULT NULL,
  PRIMARY KEY (toolID),
  FOREIGN KEY (purchaseOrderID) REFERENCES PurchaseOrders (purchaseOrderID),
  FOREIGN KEY (userID) REFERENCES Persons (personID)
);



DROP TABLE IF EXISTS PurchasedItems;
CREATE TABLE PurchasedItems (
  purchasedItemID INT NOT NULL AUTO_INCREMENT,
  purchaseOrderID INT,
  toolID INT,
  unitCost decimal(10,2) DEFAULT NULL,
  quantity INT,
  itemTotal INT,
  purchaseJustification TEXT,
  purchasedItemNotes TEXT,
  versionOfPurchase tinytext,
  licenseType tinytext,
  PRIMARY KEY (purchasedItemID),
  FOREIGN KEY (purchaseOrderID) REFERENCES PurchaseOrders (purchaseOrderID),
  FOREIGN KEY (toolID) REFERENCES Tools (toolID)
);

--
-- Inserts for testing purposes
--

INSERT INTO Tools (purchaseOrderID, toolName, toolNotes, toolCategory, properties, status, pathToToolImage, purchasePrice_NoTAX, salePrice_NoTAX, material)
VALUES (NULL, "Tool 1", "No notes", NULL, "Properties tool 1", "Available", NULL, NULL, NULL, NULL);

INSERT INTO Persons (names, familyName, email, phoneNum, rol)
VALUES ("Juan Carlos", "Pérez González", "juan.perez@yazaki.com", "+52 1 81 3388 3030", "Project Manager");

INSERT INTO Tools (purchaseOrderID, toolName, toolNotes, toolCategory, properties, status, userID, pathToToolImage, purchasePrice_NoTAX, salePrice_NoTAX, material)
VALUES (NULL, "Tool 2", "Project Yazaki", NULL, "Properties tool 2", "In use", 2, NULL, NULL, NULL, NULL);

-- Queries

SELECT personID, names, familyName, email, phoneNum, rol
FROM Persons;

SELECT toolID, purchaseOrderID, toolName, toolNotes, toolCategory, properties, status, userID, pathToToolImage, purchasePrice_NoTAX, salePrice_NoTAX, material
FROM Tools;

SELECT *
FROM Tools
WHERE status = 'Available';