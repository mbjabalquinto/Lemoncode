export function barajarArray(array: any[]): any[] {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // Mientras queden elementos a mezclar...
  while (0 !== currentIndex) {
    // Selecciona un elemento sin mezclar...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // E intercambia con el elemento actual.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
