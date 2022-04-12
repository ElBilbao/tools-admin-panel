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


--
-- Table structure for table Quotations
--

DROP TABLE IF EXISTS Quotations;
CREATE TABLE Quotations (
  quotationID INT NOT NULL AUTO_INCREMENT,
  quotationDate datetime NOT NULL,
  discountPercentaje decimal(5,2) DEFAULT NULL,
  totalPriceItems_NoTAX decimal(10,2) DEFAULT NULL,
  employeeID INT DEFAULT NULL,
  clientID INT DEFAULT NULL,
  supplierID INT DEFAULT NULL,
  status varchar(55) DEFAULT NULL,
  shippingPrice decimal(10,2) DEFAULT NULL,
  TDC_Sale decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (quotationID),
  FOREIGN KEY (employeeID) REFERENCES Employees (employeeID),
  FOREIGN KEY (clientID) REFERENCES Clients (clientID),
  FOREIGN KEY (supplierID) REFERENCES Suppliers (supplierID)
);


--
-- Table structure for table AdditionalServices
--

DROP TABLE IF EXISTS AdditionalServices;
CREATE TABLE ServiciosAdicionales(
  serviceID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  quotationID INT NOT NULL,
  serviceName TINYTEXT,
  servicePrice decimal(10,2),
  FOREIGN KEY (quotationID) REFERENCES Quotations (quotationID)
);


--
-- Table structure for table Tools
--


DROP TABLE IF EXISTS Tools;
CREATE TABLE Tools (
  toolID INT NOT NULL AUTO_INCREMENT,
  quotationID INT DEFAULT NULL,
  toolName varchar(150) NOT NULL,
  toolNotes TEXT NOT NULL,
  toolCategory TEXT NOT NULL,
  toolType varchar(150) DEFAULT NULL,
  pathToToolImage varchar(255) NOT NULL,
  purchasePrice_NoTAX decimal(10,2) DEFAULT NULL,
  salePrice_NoTAX decimal(10,2) DEFAULT NULL,
  material TINYTEXT DEFAULT NULL,
  PRIMARY KEY (toolID),
  FOREIGN KEY (quotationID) REFERENCES Quotations (quotationID)
);

create table Projects (
	projectID INT NOT NULL auto_increment,
	projectDescription TEXT,
	PRIMARY KEY (projectID)
);


create TABLE Purchaser_Departments (
	purchaser_departmentID INT not NULL AUTO_INCREMENT,
	YSS_Purchasing TEXT,
	YNA_Purchasing TEXT,
	YNA_IT TEXT,
	YSS_IT TEXT,
	other TEXT,
	PRIMARY KEY (purchaser_departmentID)
);

create TABLE Purchases (
	purchaseID INT NOT NULL AUTO_INCREMENT,
	purchaseType TEXT,
	purchaseInitiatorID INT,
	purchaseOrder TEXT,
	purchaseResponsibleDepartment INT,
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
	PRIMARY KEY (purchaseID),
	FOREIGN KEY (purchaseResponsibleDepartment) REFERENCES Purchaser_Departments (purchaser_departmentID),
	FOREIGN KEY (targetProjectID) REFERENCES Projects (projectID),
	FOREIGN KEY (accountID) REFERENCES Accounts (accountID)
);


DROP TABLE IF EXISTS PurchasedItems;
CREATE TABLE PurchasedItems (
  purchasedItemID INT NOT NULL AUTO_INCREMENT,
  purchaseID INT,
  unitCost decimal(10,2) DEFAULT NULL,
  quantity INT,
  itemTotal INT,
  purchaseJustification TEXT,
  purchasedItemNotes TEXT,
  versionOfPurchase tinytext,
  licenseType tinytext,
  PRIMARY KEY (purchasedItemID),
  FOREIGN KEY (purchaseID) REFERENCES Purchases (purchaseID)
);


DROP TABLE IF EXISTS PurchaseOrders;
CREATE TABLE OrdenesDeCompra (
  purchaseOrderID INT NOT NULL AUTO_INCREMENT,
  quotationID INT DEFAULT NULL,
  dateAdded datetime DEFAULT NOW(),
  PRIMARY KEY (purchaseOrderID),
  FOREIGN KEY (quotationID) REFERENCES Quotations (quotationID)
);

