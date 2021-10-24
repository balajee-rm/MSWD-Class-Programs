const multiplicator = (a: number, b: number, printText: string) => {
  return (printText +  (a * b));
}

console.log (multiplicator(5, 4, 'Multiplied 5 and 4, the result is:'));

export default multiplicator