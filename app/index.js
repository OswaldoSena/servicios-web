//importaciones de las librerias a utilizar

import express from "express";
import path from "path";
import {fileURLToPath} from "url";
import {methods as authentication} from "./controllers/auth.js";


const __dirname = path.dirname(fileURLToPath(import.meta.url));

//server 
const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log("Servidor corriendo en puerto", app.get("port"))

//configuracion para que express pueda leer html y json
app.use(express.static(__dirname + "/public"));
app.use(express.json());

//rutas 
app.get("/",(req,res)=> res.sendFile(__dirname + "/pages/login.html"));
app.get("/register",(req,res)=> res.sendFile(__dirname + "/pages/register.html"));
app.get("/home",(req,res)=> res.sendFile(__dirname + "/pages/home.html"));
app.post("/api/login",authentication.login)
app.post("/api/register",authentication.register);

