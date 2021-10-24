interface CalculateValues {
  value1: number;
  value2: number;
  op: string;
}

const parseArguments = (args: Array<string>): CalculateValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 5) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3]),
      op: (args[4])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

const calculator = (a: number, b: number, op : string, result: string) : string => {
  switch(op) {
    case 'multiply':
      return (result + (a * b));
    case 'divide':
      if( b === 0) throw new Error('Can\'t divide by 0!');
      return (result + (a / b));
    case 'add':
      return (result + (a + b));
    default:
      throw new Error('Operation is not multiply, add or divide!');
  }
}

try {
  const { value1, value2, op } = parseArguments(process.argv);
  console.log(calculator(value1, value2, op, `Calculated ${value1} and ${value2}, the result is:`));
} catch (e) {
  console.log('Error, something bad happened, message: ', e.message);
}

export default calculator