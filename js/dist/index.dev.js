"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contraseña = exports.usuario = void 0;

var _registros = require("./registros.js");

// Importaciones
// DOM
var usuario = document.getElementById("usuario");
exports.usuario = usuario;
var contraseña = document.getElementById("contraseña");
exports.contraseña = contraseña;
var boton_ingreso = document.getElementById("btn_ingreso");
var boton_registro = document.getElementById("btn_registro"); //EVENTOS

boton_ingreso.addEventListener('click', function () {
  (0, _registros.redirigirPagina)(); //   
});
boton_registro.addEventListener('click', function () {
  (0, _registros.paginaRegistro)();
});