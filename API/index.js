// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_REV_DzFGtNOn3bws7VrEqaOqWyQzvVw",
  authDomain: "perfildemiapp.firebaseapp.com",
  projectId: "perfildemiapp",
  storageBucket: "perfildemiapp.appspot.com",
  messagingSenderId: "239217514029",
  appId: "1:239217514029:web:f70325aee8605427998aa4",
  measurementId: "G-SDMM3P0T8C"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


import express from "express";
import cors from "cors";
import 'dotenv/config';
import { UserService } from "./src/services/user-services.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.post('/info', async (req, res) =>
{
    const usuario = await UserService.getUser(req.body.Usuario);
    res.status(200).send(usuario);
});

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
    const usuario = await UserService.getUser(req.body.Usuario);
    if(!usuario)
    {
        try {
            await UserService.insertUser(req.body);
            res.status(200).json({message: 'Usuario creado'});
        } catch(error){
            console.log(error);
            res.status(500).json({message: 'Falló el insert'});
        }
    }
    else
    {
        res.status(200).json({message: 'El usuario ya existe'});
    }
});

app.put('/perfil', async (req, res) =>
{
    const usuario = await UserService.getUser(req.body.Usuario);
    if(!usuario || req.body.Usuario === req.body.UsuarioAnterior)
    {
        try {
            await UserService.updateUser(req.body);
            res.status(200).json({message: 'Usuario editado'});
        } catch(error){
            console.log(error);
            res.status(500).json({error: 'Falló el update'});
        }
    }
    else
    {
        res.status(200).json({message: 'El usuario ya existe'});
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

