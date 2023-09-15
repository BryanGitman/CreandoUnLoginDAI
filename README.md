# Iniciar BD
1) Abrir SQL server y escribir el nombre de la máquina en "server name" y escribirlo también en /API/dbconfig.js, en "server"
1) Crear base de datos "LoginDAI"
2) Abrir script en /API/src/BD/ y ejecutar

# Usuario y permisos BD 
Correr la siguiente query:

```
USE [master]
GO
CREATE LOGIN [Admin] WITH PASSWORD=N'Admin', DEFAULT_DATABASE=[LoginDAI], CHECK_EXPIRATION=OFF,
CHECK_POLICY=OFF
GO

USE [LoginDAI]
GO
CREATE USER [Admin] FOR LOGIN [Admin]
GO
USE [LoginDAI]
GO
ALTER ROLE [db_owner] ADD MEMBER [Admin]
GO
```

# Iniciar Proyecto API
Abrir una nueva terminal:

1) cd api
2) npm i
3) npm start

# Iniciar Proyecto Expo
Abrir una nueva terminal:

1) cd 1parternexpo
2) yarn
3) expo start --web
