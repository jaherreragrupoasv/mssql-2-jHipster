mssql-2-jHipster
================

Sample based in mssql-2-sequelize-bo (https://github.com/blue-saber/mssql-2-sequelize-bo)

Reverse engineer an existing mssql database into a JHiptser jh model

How to use:

1.- Set in mainJHipster the connection.

2.- In libJhipster/index.js set the tables that have to be analized:

SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_NAME LIKE 'DECESOS%'

3.- Run with node .

4.- The resulted files are set in /OUT