class Calculator {
    add(num1, num2) {
      return num1 + num2;
    }
  
    subtract(num1, num2) {
      return num1 - num2;
    }
  
    multiply(num1, num2) {
      return num1 * num2;
    }
  
    divide(num1, num2) {
      return num1 / num2;
    }
  }
  
  class ScientificCalculator extends Calculator {
    square(num) {
      return num * num;
    }
  
    cube(num) {
      return num * num * num;
    }
  
    power(base, exponent) {
      return Math.pow(base, exponent);
    }
  }
  
  const scientificCalc = new ScientificCalculator();
  
  // Using the "call" method to invoke the "add" method of Calculator class
  const addResult = Calculator.prototype.add.call(scientificCalc, 10, 5);
  console.log(addResult); // Output: 15
  
  // Using the "apply" method to invoke the "subtract" method of Calculator class
  const subtractResult = Calculator.prototype.subtract.apply(scientificCalc, [10, 5]);
  console.log(subtractResult); // Output: 5
  
  // Using the "bind" method to create a new method "multiplyByTwo" and bind it to the ScientificCalculator instance
  const multiplyByTwo = Calculator.prototype.multiply.bind(scientificCalc, 2);
  console.log(multiplyByTwo(5)); // Output: 10
  
  // Using the "bind" method to create a new method "powerOfThree" and bind it to the ScientificCalculator instance
  const powerOfThree = Calculator.prototype.power.bind(scientificCalc, 3);
  console.log(powerOfThree(2)); // Output: 8
  