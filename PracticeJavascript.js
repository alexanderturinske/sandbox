/************************************************
* PracticeJavascript.js
* Alexander James Turinske
*
* Sandbox for Javascript
************************************************/

var expect = chai.expect;

// Eloquent Javascript Exercises
/******************************************************/
// Chapter 1
// none
/******************************************************/
// Chapter 2
// Looping a triangle

var loopingTriangle = function(number) {
	var total = '\n'
	var string = "";
	for (var i = 0; i <= number; i++) {
		string += '*';
		total += string + '\n';
	}
	console.log(total);
}

loopingTriangle(10);

// FizzBuzz

var fizzBuzz = function(number) {
	for (var i = 1; i <= number; i++) {
		i % 3 == 0 ? (i % 5 == 0 ? console.log('FizzBuzz') : console.log('Fizz')) : (i % 5 == 0 ? console.log('Buzz') : console.log(i));
	}
}

fizzBuzz(100);

// Chess Board

var chessBoard = function(height) {
	var counter = 0;
	var string = Array(height + 1).join('# ') + '\n';
	var total = '';
	while (counter < height) {
		counter % 2 == 0 ? total += (' ' + string) : total += string;
		counter ++;
	}
	console.log(total);
}

chessBoard(10);

/******************************************************/
// Chapter 3

describe('Chapter 3', function() {
	describe('Minimum', function() {

		var minimum = function(arg1, arg2) {
			return arg1 <= arg2 ? arg1 : arg2;
		};

		it('should return the minimum of two numbers if the first number is minimum', function() {
			expect(minimum(2,5)).to.equal(2);
		});

		it('should return the minimum of two numbers if both numbers are the same', function() {
			expect(minimum(3,3)).to.equal(3);
		});

		it('should return the minimum of two numbers if the second number is minimum', function() {
			expect(minimum(5,1)).to.equal(1);
		});
	});

	describe('Recursion', function() {

		var even = 'The number is even.';
		var odd = 'The number is odd.';

		var recursion = function(number) {
			var num = Math.abs(number);

			if (num == 0) {
				return 'The number is even.';
			} else if (num == 1) {
				return 'The number is odd.';
			} else {
				return recursion(number - 2);
			}
		};

		it('should return even', function() {
			expect(recursion(0)).to.equal(even);
		});
		it('should return odd', function() {
			expect(recursion(1)).to.equal(odd);
		});
		it('should return even', function() {
			expect(recursion(2)).to.equal(even);
		});
		it('should handle negative numbers', function() {
			expect(recursion(-1)).to.equal(odd);
		});
	});

	describe('Bean Counting', function() {

		var beanCounting = function(string, character) {
			var charCounter = 0;
			var nonCharCounter = 0;
			var array = string.split('');
			_.each(array, function(element, index) {
				element == character ? charCounter++ : nonCharCounter++;
			})
			return character + ': ' + charCounter;
		};

		it('should count the number of characters in a string', function() {
			expect(beanCounting('hey','e')).to.equal('e: 1');
		});
		it('should count the number of characters in a string', function() {
			expect(beanCounting('heyyyy','e')).to.equal('e: 1');
		});
		it('should count the number of characters in a string', function() {
			expect(beanCounting('heyyyy','y')).to.equal('y: 4');
		});
	});
});

describe ('Chapter 4', function() {
	describe('Sum of a range', function() {

		var range = function(num1, num2, step) {
			if (step == undefined) { var step = 1;}
			var array = [];
			var counter = num1;
			if (step > 0) {
				while (counter <= num2) {
					array.push(counter);
					counter += step;
				}
			} else {
				while (counter >= num2) {
					array.push(counter);
					counter += step;
				}			
			}
			return array;
		};

		var sum = function(array) {
			return _.reduce(array, function(a,b) {return a + b;});
		};

		it('should create an array with no step size given', function() {
			expect(range(1,10)).to.eql([1,2,3,4,5,6,7,8,9,10]);
		});	
		it('should create an array using positive steps', function() {
			expect(range(1,10, 2)).to.eql([1,3,5,7,9]);
		});	
		it('should create an array using negative steps', function() {
			expect(range(4,1,-2)).to.eql([4,2]);
		});	
		it('should take an array and add up its values', function() {
			expect(sum([1,2])).to.equal(3);
		});	
		it('should take an array made by range() and add up its values', function() {
			expect(sum(range(1,10))).to.equal(55);
		});
	});
	
	describe('Reversing an array', function() {
		
		var reverseArray = function(array) {
			var temp = [];
			for (var i = array.length - 1; i >= 0; i--) {
				temp.push(array[i]);
			}
			return temp;
		};

		var reverseArrayInPlace = function(array) {
			for (var i = 0; i < array.length/2; i++) {
				var temp = array[array.length - i - 1];
				array[array.length - i - 1] = array[i];
				array[i] = temp;
			}
			return array;
		};
		it('should create a reversed array', function() {
			expect(reverseArray([1,2,3])).to.eql([3,2,1]);
		});	
		it('should create a reversed array without mutating the original', function() {
			var array = [1,2,3];
			reverseArray(array);
			expect(array).to.eql([1,2,3]);
		});	
		it('should create a reversed array', function() {
			expect(reverseArrayInPlace([1,2,3])).to.eql([3,2,1]);
		});	
		it('should create a reversed array while mutating the original', function() {
			var array = [1,2,3];
			reverseArrayInPlace(array);
			expect(array).to.eql([3,2,1]);
		});	
	});
});

describe('Recursion', function() {
	describe('Fibonacci Sequence', function() {
		/*
		var fibonacci = function(n) {
			if (arguments.length === 1) {
				arguments[1] = 0;
				arguments[2] = 1;
			}
			var fibNum = arguments[1] + arguments[2];
			// Termination case
			if (n < 0) {
				var str = 'Your input was invalid!';
				return str; 
			// Special cases
			} else if (n === 0) {
				return 0;
			} else if (n === 1) {
				return 1;
			// Base case
			} else if (n === 2) {
				return fibNum;
			}
			return fibonacci(n-1, arguments[2], fibNum);
		};
		*/
		var fibonacci = function(n) {
			// termination cases
			if (n < 0) {
				var str = 'Your input was invalid!';
				return str;
			} else if (n === 0) {
				return 0;
			// base case
			} else if (n <= 2) {
				return 1;
			}
			return fibonacci(n - 1) + fibonacci(n - 2);
		};

		it('should work for termination case', function() {
			expect(fibonacci(-1)).to.eql('Your input was invalid!');
		});
		it('should work for special case', function() {
			expect(fibonacci(0)).to.eql(0);
		});
		it('should work for lowest case', function() {
			expect(fibonacci(1)).to.eql(1);
		});	
		it('should work for any number', function() {
			expect(fibonacci(5)).to.eql(5);
		});		
		it('should work for any number', function() {
			expect(fibonacci(3)).to.eql(2);
		});	
		it('should work for any number', function() {
			expect(fibonacci(18)).to.eql(2584);
		});		
	});

	describe('Tribonacci Sequence', function() {
		var tribonacci = function(n) {
			// termination cases
			if (n < 0) {
				var str = 'Your input was invalid!'
				return str;
			// base cases
			} else if (n === 0) {
				return 0;
			} else if (n <= 2) {
				return 1;
			}
			// recursive case
			return tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
		};

		it('should work for termination case', function() {
			expect(tribonacci(-1)).to.eql('Your input was invalid!');
		});
		it('should work for base case', function() {
			expect(tribonacci(0)).to.eql(0);
		});
		it('should work for base case', function() {
			expect(tribonacci(1)).to.eql(1);
		});	
		it('should work for base case', function() {
			expect(tribonacci(2)).to.eql(1);
		});
		it('should work for lowest case', function() {
			expect(tribonacci(3)).to.eql(2);
		});			
		it('should work for any number', function() {
			expect(tribonacci(5)).to.eql(7);
		});		
		it('should work for any number', function() {
			expect(tribonacci(6)).to.eql(13);
		});	
		it('should work for any number', function() {
			expect(tribonacci(10)).to.eql(149);
		});		
	});
	describe('Factorial', function() {
		var facto = function(n) {
			// terminatin case
			if (n < 0) {
				return console.log('Your input was invalid!');
			// base case
			} else if (n === 0) {
				return 1;
			}
			return n*facto(n-1);
		};
		it('should work for termination case', function() {
			expect(facto(-1)).to.eql();
		});
		it('should work for base case', function() {
			expect(facto(0)).to.eql(1);
		});
		it('should work for any number', function() {
			expect(facto(1)).to.eql(1);
		});	
		it('should work for any number', function() {
			expect(facto(3)).to.eql(6);
		});	
		it('should work for any number', function() {
			expect(facto(4)).to.eql(24);
		});		
	});
	describe('Factorial Array', function() {
		var facta = function(n, result) {
			if (!result) {var result = [];}
			// termination case
			if (n < 0) {
				return console.log('Your input is invalid!');
			} else if (n === 0) {
				result.push(1);
			} else {
				facta(n-1, result);
				result.push(n * result[n - 1]);
			}
			return result; 
		};
		it('should work for termination case', function() {
			expect(facta(-1)).to.eql();
		});
		it('should work for base case', function() {
			expect(facta(0)).to.eql([1]);
		});
		it('should work for any number', function() {
			expect(facta(1)).to.eql([1,1]);
		});	
		it('should work for any number', function() {
			expect(facta(3)).to.eql([1,1,2,6]);
		});	
		it('should work for any number', function() {
			expect(facta(4)).to.eql([1,1,2,6,24]);
		});			
	});
	describe('Power', function(){
		var power = function(base, exp) {
			// base case
			if (exp === 0) {
				return 1;
			}
			// recursive case
			return base * power(base, exp - 1);
		};
		it('should work for base case', function() {
			expect(power(2,0)).to.eql(1);
		});
		it('should work for random case', function() {
			var random = Math.floor(Math.random()*10);
			expect(power(2, random)).to.eql(Math.pow(2, random));
		});
		it('should work for random case', function() {
			var random = Math.floor(Math.random()*10);
			expect(power(2, random)).to.eql(Math.pow(2, random));
		});
		it('should work for random case', function() {
			var random = Math.floor(Math.random()*10);
			expect(power(2, random)).to.eql(Math.pow(2, random));
		});
		it('should work for random case', function() {
			var random = Math.floor(Math.random()*10);
			expect(power(2, random)).to.eql(Math.pow(2, random));
		});	
	});
	describe('Binary Search', function() {
		var bins = function(target, array) {
			var index;
			arguments.length === 2 ? index = 0 : index = arguments[2];
			var num = Math.floor(array.length/2);
			// base case
			if (array[num] === target) {
				index += num;
				return index;
			}
			if (array.length === 1) {
				return -1;
			}
			// recursive case
			if (array[num] < target) {
				index += num;
				var newArray = array.slice(num);
				return bins(target, newArray, index);
			} else {
				var newArray = array.slice(0, num);
				return bins(target, newArray, index);
			}
		};
		it('should work for base case', function() {
			expect(bins(2, [2])).to.eql(0);
		});
		it('should work for recursive case', function() {
			expect(bins(2, [1,2,3])).to.eql(1);
		});
		it('should work for recursive case', function() {
			expect(bins(2, [1,2,3,4])).to.eql(1);
		});
		it('should work for number at the beginning of the array', function() {
			expect(bins(2, [1,2,3,4,5,6])).to.eql(1);
		});	
		it('should work for number at end of array', function() {
			expect(bins(6, [1,2,3,4,5,6,])).to.eql(5);
		});
		it('should work for when the array does not contain the target', function() {
			expect(bins(8, [1,3,4,5,6,7,9,10,11,12,13,14,15,16,17])).to.eql(-1);
		});
	})
	describe('Factorial From Array', function() {
		var counting = function(num) {
			var array = [];
			while (num > 0) {
				array.unshift(num);
				num--;
			}
			return array;
		};
		var factorialPop = function(n) {
			var array = counting(n);
			var val = array.pop();
			var x = array.length;
			// termination case
			if (n < 0) {
				return console.log('Nope');
			// base case
			} else if (x === 0) {
				return 1;
			}
			return val * factorialPop(n - 1);
		};
		it('should work for termination case', function() {
			expect(factorialPop(-5)).to.eql();
		});
		it('should work for base case', function() {
			expect(factorialPop(0)).to.eql(1);
		});
		it('should work for number', function() {
			expect(factorialPop(3)).to.eql(6);
		});
	});
});
