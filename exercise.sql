--1.1
select username, password from users;
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