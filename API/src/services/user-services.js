import {config} from '../../dbconfig.js';
import sql from 'mssql';

export class UserService
{
    static getUser = async (nomUser) =>
    {
        let usuario = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request().input('pUser', sql.NVarChar, nomUser).query('SELECT * FROM Usuario WHERE NombreUsuario = @pUser');
            usuario = result.recordsets[0][0];
        } catch(error){
            console.log(error);
        }
        return usuario;
    }

    static insertUser = async (user) =>
    {
        const {Usuario, Contraseña, Nombre, Apellido} = user;
        let pool = await sql.connect(config);
        const request = new sql.Request(pool);
        request
            .input('pUser',sql.NVarChar,Usuario)
            .input('pContra',sql.NVarChar,Contraseña)
            .input('pNombre',sql.NVarChar,Nombre)
            .input('pApellido',sql.NVarChar,Apellido)
            .query('INSERT INTO Usuario (NombreUsuario, Contraseña, Nombre, Apellido) VALUES (@pUser, @pContra, @pNombre, @pApellido)');
    }

    static updateUser = async (user) =>
    {
        const {Id, Usuario, Contraseña, Nombre, Apellido, Mail, FechaNacimiento} = user;
        let pool = await sql.connect(config);
        const request = new sql.Request(pool);
        request
            .input('pId',sql.Int,Id)
            .input('pUser',sql.NVarChar,Usuario)
            .input('pContra',sql.NVarChar,Contraseña)
            .input('pNombre',sql.NVarChar,Nombre)
            .input('pApellido',sql.NVarChar,Apellido)
            .input('pMail',sql.NVarChar,Mail)
            .input('pFecha',sql.NVarChar,FechaNacimiento)
            .query('UPDATE Usuario SET NombreUsuario = @pUser, Contraseña = @pContra, Nombre = @pNombre, Apellido = @pApellido, Mail = @pMail, FechaNacimiento = @pFecha WHERE Id = @pId');
    }
}