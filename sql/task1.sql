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


-- 8. +Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.
-- SELECT *FROM application 
--   JOIN client ON idClient= Client_idClient
--   WHERE Sum > 5000;
-- 9. +Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
-- SELECT COUNT(idDepartment) FROM (department)
SELECT COUNT(idDepartment) FROM (department)
WHERE DepartmentCity = 'Lviv';
-- SELECT COUNT(column_name)
-- FROM table_name
-- WHERE condition;

-- 10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
-- SELECT * FROM application order by Client_idClient;
-- SELECT DISTINCT client_idClient WHERE MAX(Sum) 