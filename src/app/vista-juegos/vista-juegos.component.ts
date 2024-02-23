export class VistaJuegosComponent {
  featuredGames = [
    { id: 1, name: 'Juego Destacado 1', description: 'Descripción del Juego 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Juego Destacado 2', description: 'Descripción del Juego 2', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Juego Destacado 3', description: 'Descripción del Juego 3', imageUrl: 'https://via.placeholder.com/150' },
  ];

  reserveGame(gameId: number) {
    console.log(`Reservando juego con ID: ${gameId}`);
  }
}
