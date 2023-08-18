# Iniciar Proyecto API
node index.js

# Usuario y permisos BD 
USE [master]
GO
CREATE LOGIN [Usuario] WITH PASSWORD=N'Contraseña', DEFAULT_DATABASE=[LoginDAI], CHECK_EXPIRATION=OFF,
CHECK_POLICY=OFF
GO

USE [LoginDAI]
GO
CREATE USER [Usuario] FOR LOGIN [Usuario]
GO
USE [LoginDAI]
GO
ALTER ROLE [db_owner] ADD MEMBER [Pizzas]
GO


# Iniciar Proyecto Expo
1) cd 1parternexpo
2) npm start
