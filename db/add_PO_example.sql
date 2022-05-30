INSERT INTO Projects VALUES (
	5,
	"projectDescription TEXT"
);

INSERT INTO Purchaser_Departments VALUES (
	5,
	"YSS_Purchasing TEXT",
	"YNA_Purchasing TEXT",
	"YNA_IT TEXT",
	"YSS_IT TEXT",
	"other TEXT"
);

INSERT INTO Accounts VALUES (
  5,
  "username varchar(50) NOT NULL",
  "password varchar(255) NOT NULL",
  "email varchar(100) NOT NULL",
  1,
  "accountType TINYTEXT"
);

INSERT INTO PurchaseOrders VALUES (
5, 
CURDATE(),
"type",
1,
"details",
"status",
1,
1,
CURDATE(),
CURDATE(),
10,
1,
1,
1,
"notes",
"costcentercharged",
1,
"purchasestatus",
1
)