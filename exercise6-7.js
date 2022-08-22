      //Exercise 6 items
      //Simple greeting function that takes a name and says Hello to that individual.
      function greeting (firstName) {
        console.log (`Hello ${firstName}`)
      }

      //Converts 1 string to uppercase and console logs result.
      function toUpper (ourString) {
        upperCaseString = ourString.toUpperCase();
        console.log (upperCaseString);
      }

      //converts a value in inches to centimeters
      function lengthToCmConverter (length) {
        let centimeters = 0;
        centimeters = (length * 2.54);
        console.log (centimeters);
      }

      //Exercise 6 driver code
      greeting ("Simon");
      toUpper ("simon");

      lengthToCmConverter (5);

      //Exercise 7
      //Void function that Intakes an array of strings and converts them into uppercase in a new array
      function toUpperArray (arrayOfStrings) {
        let upperCaseArray= [];
        for (i = 0; i < arrayOfStrings.length; i++) {
          upperCaseString = arrayOfStrings[i].toUpperCase();
          upperCaseArray.push(upperCaseString);
        }
        
        for (j = 0; j < upperCaseArray.length; j++) {
          console.log (upperCaseArray[j]);
        }
      }
      
      //7.2 Void function that takes an input array and repeats each element twice in the new array
      function doubleArray (singleArray) {
        doubledArray = [];
        for (i = 0; i < singleArray.length; i++) {
          //push current entry twice
          for (j = 0; j < 2; j++) {
            doubledArray.push (singleArray[i]);
          }
        }
        for (k = 0; k < doubledArray.length; k++) {
          console.log (doubledArray [k]);
        }
      }

      //7.3 Void Function that will take an array of numbers and console log the sum
      function arraySum (numbersArray) {
        sumOfNums = 0;
        for (i = 0; i < numbersArray.length; i++) {
          // console.log (`Current Sum: ${sumOfNums}`);
          // console.log(`Current num to be added: ${numbersArray[i]}`);
          sumOfNums += numbersArray[i];
        }
        // console.log (`Final Sum: ${sumOfNums}`);
        console.log (sumOfNums);
      }

      //Exercise 7 driver code
      toUpperArray (["hello", "world"]);
      doubleArray (["testing", "1 2 3"]);
      arraySum ([1,2,3]);
      arraySum ([5,-2,7,0]);
      arraySum ([1,5,3,2]);