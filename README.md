# james-lightening-talks

## weeek 4 - Database Indexing
Knex on the commandline CLI command-line interface tool

The first thing i learnt was you can use a database on the commandline so that is what we are going to be doing today rather then live on a server for simplicity sake.

This is just "knex-todo-cli" exercise that we did in week 3 with SQL Lite 3 as the DB 

I chose my topic was Database indexing because I can see a real practical value in read/writing information in table.

When there is a lot of informatino in the database it makes sence to me and I get off on organizing that data for maxaimum efficentcy when retriving it. Hence database indexing was born.

 If not sorted/indexed the computer will have to sort through each line linearly

We also lernt "increments" does not need .primary() as it does this automatically

//---------- LINEAR SEARCH ----------
NOT in alphabetical order
See slow-sort imgage
SELECT *ALL*
    employee_id,
    name,
    location,
FROM
    employee_database
WHERE
    employee_id = 2222
//----------












