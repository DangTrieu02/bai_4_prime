function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  const numbers = [1, 2, 5, 8, 9, 10, 13, 41, 50];
  
  numbers.forEach(number => {
    const result = isPrime(number) ? 'Prime' : 'Not Prime';
    console.log(`${number} - ${result}`);
  });
  