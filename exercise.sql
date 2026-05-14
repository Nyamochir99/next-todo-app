--1.1
select username, age from users;
--1.2
select * from users where age>50;
--1.3
select * from users where username LIKE '%mary%';
--1.4
select * from users where age BETWEEN 20 and 30 and gender = 'F';
--1.5
select * from users order by age desc limit 10;

--2.1
update users set bio='Би мэдээллийн санд дуртай' where id=5;
--2.2
update users set age = age + 1;
--2.3
update users set bio = 'Мэдээлэл байхгүй' where bio is NULL or bio = '';

--3.1
delete from users where id = 10;
--3.2
delete from users where age < 18;
--3.3
'Where nuhtsul bichilgui ustgaval buh data ustana, where nuhtsuliig bichij ugsnuur ymar datag zaana' 

--4.1
INSERT INTO users (username, password, age, gender, bio) VALUES ('sql_master', 'password123', 25, 'M', 'SQL бол хүч!');
--4.2
INSERT INTO users (username, password) VALUES ('new_user', 'secure_pass');

--1
SELECT COUNT(*) from users where gender='F';
--2
SELECT COUNT(DISTINCT age) from users;
--3
SELECT MAX(amount), MIN(amount) from bank_transactions;
--4
SELECT COUNT(*) from users where username LIKE 'a%';
--5
SELECT SUM(amount) from bank_transactions where transaction_type='deposit' and user_id=101;
--6
SELECT AVG(age) from users where age > 30;
--7
SELECT COUNT(*) from users where bio IS NULL;
--8
SELECT * from bank_transactions where transaction_type = 'withdraw' order by amount desc limit 5;
--9
SELECT AVG(age) from users where username LIKE 'j%' and age > 18 and gender = 'M';
--10
SELECT COUNT(*), SUM(amount) from bank_transactions where transaction_type='withdraw';
--11
SELECT MAX(age) as Oldest_Young_Adult from users where age > 20 and age <40;
--12
SELECT SUM(amount) from bank_transactions where transaction_type = 'deposit' and transaction_date > '2024-01-01';
--13
SELECT COUNT(DISTINCT user_id) from bank_transactions;
--14 
SELECT COUNT(*) from users where username LIKE '%\_99' or username LIKE '%\_01';
--15
SELECT amount, transaction_type, balance from bank_transactions order by balance asc limit 1; 