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
        const {Usuario, Contraseña} = user;
        let pool = await sql.connect(config);
        const request = new sql.Request(pool);
        request
            .input('pUser',sql.NVarChar,Usuario)
            .input('pContra',sql.NVarChar,Contraseña)
            .query('INSERT INTO Usuario (NombreUsuario, Contraseña) VALUES (@pUser, @pContra)');
    }
}