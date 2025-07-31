--create database ShoppingDB_Hadassah_Lugassi_project2025
use ShoppingDB_Hadassah_Lugassi_project2025

CREATE TABLE CategoryTbl
(
CategoryID int identity(1,1) primary key,
CategoryName varchar(25)
)

CREATE TABLE GamesTbl
(
GamesID int identity(11,1) primary key,
GamesName varchar(25),
CategoryID int REFERENCES CategoryTbl not null,
Price float not null ,
Img varchar(150),
Amount int not null
)

CREATE TABLE CustomersTbl
(
CustID int identity(101,1) primary key,
CustName varchar(25) not null,
CustPass varchar(10) unique not null,
CreditDetails varchar(100) not null,
)

CREATE TABLE BayingTbl
(
BayingID int identity(1000,1) primary key,
CustID int  REFERENCES CustomersTbl not null,
DateOfBaying DATE,
Price float not null
)

CREATE TABLE BayingDetailsTbl 
(
BayingDetailsID int identity(2000,1) primary key,
BayingID int references BayingTbl not null,
GameID int  references GamesTbl not null,
Amount int
)

insert into CategoryTbl
values
('משחקי קופסה'),
('משחקי הרכבה'),
('צעצועי פעוטות'),
('כלי רכיבה'),
('משחקים אלקטרוניים')

insert into GamesTbl(GamesName ,CategoryID, Price, Amount)
values 
('קליקס',2,95,20),
('אליאס',1,150,30),
('קאטן',1,200,15),
('בימבה',4,85,10),
('בית בובות',3,110,25),
('גמבוי',5,130,40)

insert into CustomersTbl
values
('Michael Shabtay','M123','כרטיס 12301233012301 תוקף 09/12/29 3ספרות 123'),
('Daniel Gross','M44123','כרטיס 15656512812121 תוקף 01/12/30 3ספרות 222'),
('Refael Levi','M12344','כרטיס 12585858585858 תוקף 12/05/28 3ספרות 525'),
('Yehuda Gerlitz','M777123','כרטיס 12525874747444 תוקף 11/12/24 3ספרות 989'),
('Shlomo Cohen','M12898983','כרטיס 12121115555555 תוקף 12/03/31 3ספרות 777')

insert into BayingTbl
values
(101,'2022-05-01',400),
(101,'2023-08-11',285),
(102,'2024-01-10',220),
(103,'2024-10-04',750),
(104,'2024-12-21',260),
(105,'2024-12-29',85)


insert into BayingDetailsTbl
values
(1000,14,1),
(1001,13,2),
(1002,11,3),
(1003,15,2),
(1004,12,5),
(1005,16,2)







--drop table BayingDetailsTbl
--drop table BayingTbl
--drop table  CustomersTbl
--drop table GamesTbl
--drop table CategoryTbl
select * from CustomersTbl