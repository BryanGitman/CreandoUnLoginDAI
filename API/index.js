import express from "express";
import cors from "cors";
import 'dotenv/config';
import { UserService } from "./src/services/user-services.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.post('/login', async (req, res) =>
{
    const usuario = await UserService.getUser(req.body.Usuario);
    if(!usuario)
    {
        res.status(200).json({message: 'El usuario no existe'});
    }
    else
    {
        if(req.body.Contraseña != usuario.Contraseña)
        {
            res.status(200).json({message: 'Contraseña incorrecta'});
        }
        else
        {
            res.status(200).json({message: 'Sesion iniciada correctamente'});
        }
    }
});

app.post('/register', async (req, res) =>
{
    try {
        await UserService.insertUser(req.body);
        res.status(200).json({message: 'Usuario creado'});
    } catch(error){
        console.log(error);
        res.status(500).json({message: 'Falló el insert'});
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

