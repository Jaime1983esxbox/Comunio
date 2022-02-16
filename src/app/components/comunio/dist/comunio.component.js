"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ComunioComponent = void 0;
var core_1 = require("@angular/core");
var enum_1 = require("src/app/models/enum");
var usuario_1 = require("src/app/models/usuario");
var ComunioComponent = /** @class */ (function () {
    function ComunioComponent() {
        this.posiblesJugadoresPlantilla = [];
        this.usuarios = [];
        this.nombreUsuario = '';
        this.mostrarPlantillas = false;
        this.porterosArray = [];
        this.porterosPlantilla = [];
        this.defensasArray = [];
        this.defensasPlantilla = [];
        this.centrocampistasArray = [];
        this.centrocampistasPlantilla = [];
        this.delanterosArray = [];
        this.delanterosPlantilla = [];
        this.totalPrecioPlantilla = 0;
    }
    ComunioComponent.prototype.ngOnInit = function () {
        this.porterosArray = [
            { nombre: 'Manuel Neuer', posicion: enum_1.Posicion.PORTERO, precio: 40 },
            { nombre: 'Jan Oblak', posicion: enum_1.Posicion.PORTERO, precio: 55 },
            { nombre: 'Ter Stegen', posicion: enum_1.Posicion.PORTERO, precio: 35 },
            { nombre: 'David de Gea', posicion: enum_1.Posicion.PORTERO, precio: 30 },
            { nombre: 'Gianluigi Donnarumma', posicion: enum_1.Posicion.PORTERO, precio: 65 },
            { nombre: 'Thibaut Courtouis', posicion: enum_1.Posicion.PORTERO, precio: 65 }
        ];
        this.defensasArray = [
            { nombre: 'Alexander-Arnold', posicion: enum_1.Posicion.DEFENSA, precio: 80 },
            { nombre: 'Eder Militao', posicion: enum_1.Posicion.DEFENSA, precio: 60 },
            { nombre: 'David Alaba', posicion: enum_1.Posicion.DEFENSA, precio: 55 },
            { nombre: 'Alphonso Davies', posicion: enum_1.Posicion.DEFENSA, precio: 70 },
            { nombre: 'Achraf Hakimi', posicion: enum_1.Posicion.DEFENSA, precio: 70 },
            { nombre: 'Ronald Araujo', posicion: enum_1.Posicion.DEFENSA, precio: 60 },
            { nombre: 'Rubén Dias', posicion: enum_1.Posicion.DEFENSA, precio: 75 },
            { nombre: 'Marquinhos', posicion: enum_1.Posicion.DEFENSA, precio: 75 },
            { nombre: 'Matthijs de Light', posicion: enum_1.Posicion.DEFENSA, precio: 65 },
            { nombre: 'Andrew Robertson', posicion: enum_1.Posicion.DEFENSA, precio: 65 },
            { nombre: 'Milan Skriniar', posicion: enum_1.Posicion.DEFENSA, precio: 65 },
            { nombre: 'Raphael Varane', posicion: enum_1.Posicion.DEFENSA, precio: 65 },
            { nombre: 'Jules Koundé', posicion: enum_1.Posicion.DEFENSA, precio: 60 },
            { nombre: 'Alessandro Bastoni', posicion: enum_1.Posicion.DEFENSA, precio: 60 },
            { nombre: 'Marcos Llorente', posicion: enum_1.Posicion.DEFENSA, precio: 60 },
            { nombre: 'Virgil Van Dijk', posicion: enum_1.Posicion.DEFENSA, precio: 55 },
            { nombre: 'Sergio Ramos', posicion: enum_1.Posicion.DEFENSA, precio: 8 },
            { nombre: 'Reece James', posicion: enum_1.Posicion.DEFENSA, precio: 55 },
        ];
        this.centrocampistasArray = [
            { nombre: 'Bruno Fernandes', posicion: enum_1.Posicion.CENTROCAMPISTA, precio: 90 },
            { nombre: 'Kevin De Bruyne', posicion: enum_1.Posicion.CENTROCAMPISTA, precio: 90 },
            { nombre: 'Phil Foden', posicion: enum_1.Posicion.CENTROCAMPISTA, precio: 85 },
            { nombre: 'Jadon Sancho', posicion: enum_1.Posicion.CENTROCAMPISTA, precio: 85 },
            { nombre: 'Joshua Kimmich', posicion: enum_1.Posicion.CENTROCAMPISTA, precio: 85 },
            { nombre: 'Pedri', posicion: enum_1.Posicion.CENTROCAMPISTA, precio: 80 },
            { nombre: 'Jack Grealish', posicion: enum_1.Posicion.CENTROCAMPISTA, precio: 80 },
            { nombre: 'Fede Valverde', posicion: enum_1.Posicion.CENTROCAMPISTA, precio: 65 },
            { nombre: 'Luka Modric', posicion: enum_1.Posicion.CENTROCAMPISTA, precio: 10 },
            { nombre: 'Toni Kroos', posicion: enum_1.Posicion.CENTROCAMPISTA, precio: 25 },
            { nombre: 'Federico Chiesa', posicion: enum_1.Posicion.CENTROCAMPISTA, precio: 70 },
            { nombre: 'Leroy Sané', posicion: enum_1.Posicion.CENTROCAMPISTA, precio: 70 },
            { nombre: 'Ngolo Kanté', posicion: enum_1.Posicion.CENTROCAMPISTA, precio: 50 },
            { nombre: 'Casemiro', posicion: enum_1.Posicion.CENTROCAMPISTA, precio: 60 },
            { nombre: 'Paul Pogba', posicion: enum_1.Posicion.CENTROCAMPISTA, precio: 55 }
        ];
        this.delanterosArray = [
            { nombre: 'Kylian Mbappé', posicion: enum_1.Posicion.DELANTERO, precio: 160 },
            { nombre: 'Erling Haaland', posicion: enum_1.Posicion.DELANTERO, precio: 150 },
            { nombre: 'Vinicius Jr', posicion: enum_1.Posicion.DELANTERO, precio: 100 },
            { nombre: 'Mohamed Salah', posicion: enum_1.Posicion.DELANTERO, precio: 100 },
            { nombre: 'Harry Kane', posicion: enum_1.Posicion.DELANTERO, precio: 100 },
            { nombre: 'Romelu Lukaku', posicion: enum_1.Posicion.DELANTERO, precio: 100 },
            { nombre: 'Neymar', posicion: enum_1.Posicion.DELANTERO, precio: 90 },
            { nombre: 'Marcus Rashford', posicion: enum_1.Posicion.DELANTERO, precio: 85 },
            { nombre: 'Raheem Sterling', posicion: enum_1.Posicion.DELANTERO, precio: 85 },
            { nombre: 'Lautaro Martínez', posicion: enum_1.Posicion.DELANTERO, precio: 80 },
            { nombre: 'Sadio Mané', posicion: enum_1.Posicion.DELANTERO, precio: 80 },
            { nombre: 'Heung-Min Son', posicion: enum_1.Posicion.DELANTERO, precio: 80 },
            { nombre: 'Cristiano Ronaldo', posicion: enum_1.Posicion.DELANTERO, precio: 35 },
            { nombre: 'Lionel Mesi', posicion: enum_1.Posicion.DELANTERO, precio: 60 },
            { nombre: 'Robert Lewandowski', posicion: enum_1.Posicion.DELANTERO, precio: 50 },
            { nombre: 'Karim Benzema', posicion: enum_1.Posicion.DELANTERO, precio: 25 },
            { nombre: 'Joao Félix', posicion: enum_1.Posicion.DELANTERO, precio: 60 },
            { nombre: 'Dusan Vlahovic', posicion: enum_1.Posicion.DELANTERO, precio: 70 },
            { nombre: 'Ansu Fati', posicion: enum_1.Posicion.DELANTERO, precio: 60 }
        ];
    };
    ComunioComponent.prototype.agregarUsuario = function () {
        this.mostrarPlantillas = true;
        var usuario = new usuario_1.Usuario();
        usuario.plantilla = [];
        usuario.nombre = this.nombreUsuario;
        usuario.precioTotalPlantilla = 0;
        usuario.plantilla = usuario.plantilla.concat(this.seleccionarPorteroPlantilla());
        usuario.plantilla = usuario.plantilla.concat(this.seleccionarDefensaPlantilla());
        usuario.plantilla = usuario.plantilla.concat(this.seleccionarCentrocampistaPlantilla());
        usuario.plantilla = usuario.plantilla.concat(this.seleccionarDelanteroPlantilla());
        for (var i = 0; i < usuario.plantilla.length; i++) {
            var element = usuario.plantilla[i].precio;
            usuario.precioTotalPlantilla = usuario.precioTotalPlantilla + element;
        }
        this.usuarios.push(usuario);
    };
    ComunioComponent.prototype.seleccionarPorteroPlantilla = function () {
        this.porterosPlantilla = [];
        for (var i = 0; i < this.porteros; i++) {
            var porteroPlantilla = Math.floor(Math.random() * this.porterosArray.length);
            var rValue = this.porterosArray[porteroPlantilla];
            this.porterosPlantilla.push(rValue);
            var index = this.porterosArray.indexOf(rValue);
            if (index !== -1) {
                this.porterosArray.splice(index, 1);
            }
        }
        return this.porterosPlantilla;
    };
    ComunioComponent.prototype.seleccionarDefensaPlantilla = function () {
        this.defensasPlantilla = [];
        for (var i = 0; i < this.defensas; i++) {
            var defensaPlantilla = Math.floor(Math.random() * this.defensasArray.length);
            var rValue = this.defensasArray[defensaPlantilla];
            this.defensasPlantilla.push(rValue);
            var index = this.defensasArray.indexOf(rValue);
            if (index !== -1) {
                this.defensasArray.splice(index, 1);
            }
        }
        return this.defensasPlantilla;
    };
    ComunioComponent.prototype.seleccionarCentrocampistaPlantilla = function () {
        this.centrocampistasPlantilla = [];
        for (var i = 0; i < this.centrocampistas; i++) {
            var centrocampistaPlantilla = Math.floor(Math.random() * this.centrocampistasArray.length);
            var rValue = this.centrocampistasArray[centrocampistaPlantilla];
            this.centrocampistasPlantilla.push(rValue);
            var index = this.centrocampistasArray.indexOf(rValue);
            if (index !== -1) {
                this.centrocampistasArray.splice(index, 1);
            }
        }
        return this.centrocampistasPlantilla;
    };
    ComunioComponent.prototype.seleccionarDelanteroPlantilla = function () {
        this.delanterosPlantilla = [];
        for (var i = 0; i < this.delanteros; i++) {
            var delanteroPlantilla = Math.floor(Math.random() * this.delanterosArray.length);
            var rValue = this.delanterosArray[delanteroPlantilla];
            this.delanterosPlantilla.push(rValue);
            var index = this.delanterosArray.indexOf(rValue);
            if (index !== -1) {
                this.delanterosArray.splice(index, 1);
            }
        }
        return this.delanterosPlantilla;
    };
    ComunioComponent = __decorate([
        core_1.Component({
            selector: 'app-comunio',
            templateUrl: './comunio.component.html',
            styleUrls: ['./comunio.component.css']
        })
    ], ComunioComponent);
    return ComunioComponent;
}());
exports.ComunioComponent = ComunioComponent;
