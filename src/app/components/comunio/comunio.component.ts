import { Component, OnInit } from '@angular/core';
import { Posicion } from 'src/app/models/enum';
import { Jugador } from 'src/app/models/jugador';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-comunio',
  templateUrl: './comunio.component.html',
  styleUrls: ['./comunio.component.css']
})
export class ComunioComponent implements OnInit {

  posiblesJugadoresPlantilla: Jugador[] = [];
  usuarios: Usuario[] = [];
  nombreUsuario: string = '';
  mostrarPlantillas: boolean = false;
  porteros!: number;
  porterosArray: Jugador[] = [];
  porterosPlantilla: Jugador[] = [];
  defensas!: number;
  defensasArray: Jugador[] = [];
  defensasPlantilla: Jugador[] = [];
  centrocampistas!: number;
  centrocampistasArray: Jugador[] = [];
  centrocampistasPlantilla: Jugador[] = [];
  delanteros!: number;
  delanterosArray: Jugador[] = [];
  delanterosPlantilla: Jugador[] = [];
  totalPrecioPlantilla: number = 0;

  constructor() { }

  ngOnInit(): void {

    this.porterosArray = [
      { nombre: 'Manuel Neuer', posicion: Posicion.PORTERO, precio: 40},
      { nombre: 'Jan Oblak', posicion: Posicion.PORTERO, precio: 55},
      { nombre: 'Ter Stegen', posicion: Posicion.PORTERO, precio: 35},
      { nombre: 'David de Gea', posicion: Posicion.PORTERO, precio: 30},
      { nombre: 'Gianluigi Donnarumma', posicion: Posicion.PORTERO, precio: 65},
      { nombre: 'Thibaut Courtouis', posicion: Posicion.PORTERO, precio: 65}
    ]

    this.defensasArray = [
      { nombre: 'Alexander-Arnold', posicion: Posicion.DEFENSA, precio: 80},
      { nombre: 'Eder Militao', posicion: Posicion.DEFENSA, precio: 60},
      { nombre: 'David Alaba', posicion: Posicion.DEFENSA, precio: 55},
      { nombre: 'Alphonso Davies', posicion: Posicion.DEFENSA, precio: 70},
      { nombre: 'Achraf Hakimi', posicion: Posicion.DEFENSA, precio: 70},
      { nombre: 'Ronald Araujo', posicion: Posicion.DEFENSA, precio: 60},
      { nombre: 'Rubén Dias', posicion: Posicion.DEFENSA, precio: 75},
      { nombre: 'Marquinhos', posicion: Posicion.DEFENSA, precio: 75},
      { nombre: 'Matthijs de Light', posicion: Posicion.DEFENSA, precio: 65},
      { nombre: 'Andrew Robertson', posicion: Posicion.DEFENSA, precio: 65},
      { nombre: 'Milan Skriniar', posicion: Posicion.DEFENSA, precio: 65},
      { nombre: 'Raphael Varane', posicion: Posicion.DEFENSA, precio: 65},
      { nombre: 'Jules Koundé', posicion: Posicion.DEFENSA, precio: 60},
      { nombre: 'Alessandro Bastoni', posicion: Posicion.DEFENSA, precio: 60},
      { nombre: 'Marcos Llorente', posicion: Posicion.DEFENSA, precio: 60},
      { nombre: 'Virgil Van Dijk', posicion: Posicion.DEFENSA, precio: 55},
      { nombre: 'Sergio Ramos', posicion: Posicion.DEFENSA, precio: 8},
      { nombre: 'Reece James', posicion: Posicion.DEFENSA, precio: 55},
    ]

    this.centrocampistasArray = [
      { nombre: 'Bruno Fernandes', posicion: Posicion.CENTROCAMPISTA, precio: 90},
      { nombre: 'Kevin De Bruyne', posicion: Posicion.CENTROCAMPISTA, precio: 90},
      { nombre: 'Phil Foden', posicion: Posicion.CENTROCAMPISTA, precio: 85},
      { nombre: 'Jadon Sancho', posicion: Posicion.CENTROCAMPISTA, precio: 85},
      { nombre: 'Joshua Kimmich', posicion: Posicion.CENTROCAMPISTA, precio: 85},
      { nombre: 'Pedri', posicion: Posicion.CENTROCAMPISTA, precio: 80},
      { nombre: 'Jack Grealish', posicion: Posicion.CENTROCAMPISTA, precio: 80},
      { nombre: 'Fede Valverde', posicion: Posicion.CENTROCAMPISTA, precio: 65},
      { nombre: 'Luka Modric', posicion: Posicion.CENTROCAMPISTA, precio: 10},
      { nombre: 'Toni Kroos', posicion: Posicion.CENTROCAMPISTA, precio: 25},
      { nombre: 'Federico Chiesa', posicion: Posicion.CENTROCAMPISTA, precio: 70},
      { nombre: 'Leroy Sané', posicion: Posicion.CENTROCAMPISTA, precio: 70},
      { nombre: 'Ngolo Kanté', posicion: Posicion.CENTROCAMPISTA, precio: 50},
      { nombre: 'Casemiro', posicion: Posicion.CENTROCAMPISTA, precio: 60},
      { nombre: 'Paul Pogba', posicion: Posicion.CENTROCAMPISTA, precio: 55}
    ]

    this.delanterosArray = [
      { nombre: 'Kylian Mbappé', posicion: Posicion.DELANTERO, precio: 160},
      { nombre: 'Erling Haaland', posicion: Posicion.DELANTERO, precio: 150},
      { nombre: 'Vinicius Jr', posicion: Posicion.DELANTERO, precio: 100},
      { nombre: 'Mohamed Salah', posicion: Posicion.DELANTERO, precio: 100},
      { nombre: 'Harry Kane', posicion: Posicion.DELANTERO, precio: 100},
      { nombre: 'Romelu Lukaku', posicion: Posicion.DELANTERO, precio: 100},
      { nombre: 'Neymar', posicion: Posicion.DELANTERO, precio: 90},
      { nombre: 'Marcus Rashford', posicion: Posicion.DELANTERO, precio: 85},
      { nombre: 'Raheem Sterling', posicion: Posicion.DELANTERO, precio: 85},
      { nombre: 'Lautaro Martínez', posicion: Posicion.DELANTERO, precio: 80},
      { nombre: 'Sadio Mané', posicion: Posicion.DELANTERO, precio: 80},
      { nombre: 'Heung-Min Son', posicion: Posicion.DELANTERO, precio: 80},
      { nombre: 'Cristiano Ronaldo', posicion: Posicion.DELANTERO, precio: 35},
      { nombre: 'Lionel Mesi', posicion: Posicion.DELANTERO, precio: 60},
      { nombre: 'Robert Lewandowski', posicion: Posicion.DELANTERO, precio: 50},
      { nombre: 'Karim Benzema', posicion: Posicion.DELANTERO, precio: 25},
      { nombre: 'Joao Félix', posicion: Posicion.DELANTERO, precio: 60},
      { nombre: 'Dusan Vlahovic', posicion: Posicion.DELANTERO, precio: 70},
      { nombre: 'Ansu Fati', posicion: Posicion.DELANTERO, precio: 60}
    ]
  
  }

  agregarUsuario(){
    this.mostrarPlantillas = true;
    let usuario = new Usuario();
    usuario.plantilla = [];
    usuario.nombre = this.nombreUsuario;
    usuario.precioTotalPlantilla = 0;
    usuario.plantilla = usuario.plantilla.concat(this.seleccionarPorteroPlantilla());
    usuario.plantilla = usuario.plantilla.concat(this.seleccionarDefensaPlantilla());
    usuario.plantilla = usuario.plantilla.concat(this.seleccionarCentrocampistaPlantilla());
    usuario.plantilla = usuario.plantilla.concat(this.seleccionarDelanteroPlantilla());
    for (let i = 0; i < usuario.plantilla.length; i++) {
      const element = usuario.plantilla[i].precio;
      usuario.precioTotalPlantilla = usuario.precioTotalPlantilla + element;
    }
    this.usuarios.push(usuario);
  }

  private seleccionarPorteroPlantilla() {
    this.porterosPlantilla = [];
    for (let i = 0; i < this.porteros; i++) {
      let porteroPlantilla = Math.floor(Math.random()*this.porterosArray.length);
      let rValue = this.porterosArray[porteroPlantilla];
      this.porterosPlantilla.push(rValue);
      const index: number = this.porterosArray.indexOf(rValue);
      if (index !== -1) {
        this.porterosArray.splice(index, 1);
      }
    }
    return this.porterosPlantilla;
  }

  private seleccionarDefensaPlantilla() {
    this.defensasPlantilla = [];
    for (let i = 0; i < this.defensas; i++) {
      let defensaPlantilla = Math.floor(Math.random()*this.defensasArray.length);
      let rValue = this.defensasArray[defensaPlantilla];
      this.defensasPlantilla.push(rValue);
      const index: number = this.defensasArray.indexOf(rValue);
      if (index !== -1) {
        this.defensasArray.splice(index, 1);
      }
    }
    return this.defensasPlantilla;
  }

  private seleccionarCentrocampistaPlantilla() {
    this.centrocampistasPlantilla = [];
    for (let i = 0; i < this.centrocampistas; i++) {
      let centrocampistaPlantilla = Math.floor(Math.random()*this.centrocampistasArray.length);
      let rValue = this.centrocampistasArray[centrocampistaPlantilla];
      this.centrocampistasPlantilla.push(rValue);
      const index: number = this.centrocampistasArray.indexOf(rValue);
      if (index !== -1) {
        this.centrocampistasArray.splice(index, 1);
      }
    }
    return this.centrocampistasPlantilla;
  }

  private seleccionarDelanteroPlantilla() {
    this.delanterosPlantilla = [];
    for (let i = 0; i < this.delanteros; i++) {
      let delanteroPlantilla = Math.floor(Math.random()*this.delanterosArray.length);
      let rValue = this.delanterosArray[delanteroPlantilla];
      this.delanterosPlantilla.push(rValue);
      const index: number = this.delanterosArray.indexOf(rValue);
      if (index !== -1) {
        this.delanterosArray.splice(index, 1);
      }
    }
    return this.delanterosPlantilla;
  }

}
