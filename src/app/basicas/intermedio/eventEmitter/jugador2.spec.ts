import { Jugador2 } from './jugador2';

describe('Pruebas de EventEmitter', () => {
  let jugador: Jugador2;
  beforeEach(() => (jugador = new Jugador2())); //se va a ejecutar antes de cada prueba test

  it('Debe de emitir un evento cuando recibe daño', () => {
    let nuevoHp = 0;
    jugador.hpCambia.subscribe((hp) => (nuevoHp = hp));
    jugador.recibeDanio(1000);

    expect(nuevoHp).toBe(0);
  });

  it('Debe de emitir un evento cuando recibe daño y sobrevivir si es menos de 100 el daño', () => {
    let nuevoHp = 0;
    jugador.hpCambia.subscribe((hp) => (nuevoHp = hp));
    jugador.recibeDanio(50);

    expect(nuevoHp).toBe(50);
  });
});
