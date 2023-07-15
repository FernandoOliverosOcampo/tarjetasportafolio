"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redirigirPagina = exports.registrate = exports.paginaRegistro = void 0;

var _index = require("./index.js");

var paginaRegistro = function paginaRegistro() {
  window.location.href = "./paginas/registro_datos.html";
};

exports.paginaRegistro = paginaRegistro;
var registro = [];

var registrate = function registrate() {
  var usuarioValor = _index.usuario.value;
  var contraseñaValor = _index.contraseña.value;
  var datos = {
    usuario: usuarioValor,
    contraseña: contraseñaValor
  };

  var llenarDatos = function llenarDatos() {
    if (datos.usuario.length === 0 || !datos.usuario.match(/[a-zA-Z]/) || datos.contraseña.length === 0 || !datos.contraseña.match(/[a-zA-Z]/)) {
      alert("Asegurese de llenar los datos con valores correctos");
      console.error("Esta fallando algo");
    } else {
      registro.push(usuarioValor, contraseñaValor);
      alert("datos ingresados correctamente");
      _index.usuario.value = "";
      _index.contraseña.value = "";
      console.log(datos);
    }
  };

  llenarDatos();
};

exports.registrate = registrate;

var redirigirPagina = function redirigirPagina() {
  window.location.href = "./paginas/principal.html";
};

exports.redirigirPagina = redirigirPagina;