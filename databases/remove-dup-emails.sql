-- Write an SQL query to delete all the duplicate emails, keeping only one unique email with the smallest id. Note that you are supposed to write a DELETE statement and not a SELECT one.

-- After running your script, the answer shown is the Person table. The driver will first compile and run your piece of code and then show the Person table. The final order of the Person table does not matter.

-- The query result format is in the following example.

-- Person table:
+----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+

delete p1 from Person p1, Person p2 where p1.Email = p2.Email and p1.Id > p2.Id;

-- best solution
WITH sub as (select min(id) As id from person group by email)
delete person where id not in (select id from sub);