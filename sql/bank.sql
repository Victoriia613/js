-- SELECT * FROM client WHERE FirstName LIKE '%o%'
-- +Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
-- SELECT * FROM client WHERE LENGTH(FirstName) <6; -- 
-- 2. +Вибрати львівські відділення банку.+
-- SELECT * FROM department WHERE DepartmentCity = 'Lviv';
-- 3. +Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
-- SELECT * FROM client WHERE Education = 'High' ORDER BY LastName;

-- 4. +Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
-- SELECT *FROM application ORDER BY idApplication DESC LIMIT 5 OFFSET 10;


-- 5. +Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.

-- SELECT * FROM client WHERE LastName LIKE '%iv'OR LastName LIKE '%iva'

-- 6. +Вивести клієнтів банку, які обслуговуються київськими відділеннями.
-- SELECT *FROM client WHERE City = 'Kyiv'

-- 7. +Вивести імена клієнтів та їхні номера телефону, погрупувавши їх за іменами.??????????
-- SELECT *FROM client
-- 8. +Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.
-- SELECT *FROM application 
--   JOIN client ON idClient= Client_idClient
--   WHERE Sum > 5000;
-- 9. +Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
-- SELECT COUNT(idClient) FROM client;
-- SELECT COUNT(idClient) FROM client
-- WHERE City = 'Lviv';
-- Select * from client;

-- 10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
-- SELECT sum(Sum) AS MaxCreditSum, FirstName,LastName,idClient FROM application
-- JOIN client c ON application.Client_idClient = c.idClient group by idClient order by maxCreditSum desc;

-- --11. Визначити кількість заявок на крeдит для кожного клієнта.
-- SELECT FirstNAme, LastName, count(Client_idClient) as NumOfApplications from application
-- join client c on application.Client_idClient = c.idClient group by Client_idClient;

-- 12. Визначити найбільший та найменший кредити.
-- select max(Sum) AS MaxCreditSum,FirstName,LastName,idClient FROM application
-- JOIN client c ON application.Client_idClient = c.idClient;
-- select min(Sum) AS MinCreditSum, FirstName,LastName,idClient FROM application
-- JOIN client c ON application.Client_idClient = c.idClient;
-- min(Sum) from application;

-- 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
-- SELECT FirstName, LastName,  COUNT(Client_idClient) Num_of_Credits FROM application
-- JOIN client c ON application.Client_idClient = c.idClient WHERE Education = 'High'  group by Client_idClient;

-- 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
-- SELECT FirstName, LastName,  AVG(Sum) AVGSUMOFCredits FROM application
-- JOIN client c ON application.Client_idClient = c.idClient group by Client_idClient ORDER BY AVGSUMOFCredits DESC LIMIT 1;

-- 16. Вивести відділення, яке видало найбільший кредит.
-- select idDepartment,DepartmentCity,Sum from (
-- SELECT idClient,FirstName,LastName,Sum,Department_idDepartment from application
-- join client c on application.Client_idClient = c.idClient
-- order by Sum desc limit 1) as T  join department d on Department_idDepartment=d.idDepartment;

/*#17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
update application join client c on application.Client_idClient = c.idClient
set Sum=6000
where Education='high';*/

#18. Усіх клієнтів київських відділень пересилити до Києва.
-- update client  join department d on client.Department_idDepartment = d.idDepartment
-- set City='Kyiv'
-- where DepartmentCity='Kyiv';

#19. Видалити усі кредити, які є повернені.
-- delete  from application where CreditState='Returned';

#20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
-- delete a from application a
    -- join client c on a.Client_idClient = c.idClient
-- where LastName like '_e%' or  LastName like '_u%' or LastName like '_i%' or LastName like '_o%' or LastName like '_a%' ;

#Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
/*select idClient, FirstName, LastName, Sum, CreditState, Currency  from client
join application a on client.idClient = a.Client_idClient
where Sum>5000 and CreditState ='returned';*/

#/* Знайти максимальний неповернений кредит.*/
-- select idClient, FirstName, LastName, Sum, CreditState, Currency from client
-- join application a on client.idClient = a.Client_idClient
--  where CreditState = 'Not returned' ORDER BY Sum DESC limit 1;

#/*Знайти клієнта, сума кредиту якого найменша*/
-- SELECT idClient, FirstName, LastName,  Sum, Currency FROM application
-- JOIN client c ON application.Client_idClient = c.idClient group by Client_idClient ORDER BY Sum limit 1;

#/*Знайти кредити, сума яких більша за середнє значення усіх кредитів*/

SELECT idApplication,CreditState,Currency,suma,(select avg(Sum) from application) as average from (
SELECT *,Sum(sum) as suma from application
group by Client_idClient) as t where suma> (select avg(Sum) from application);


