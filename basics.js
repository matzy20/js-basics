/* Create a `myName` variable and assign it a String value */

function Person (name) {

    var myName = name;
    document.createElement(myName);
  return myName;
 }
  console.log(Person('Gail'));


/* Create a `person` variable and give it 2 properties,
 * `name`, assign it the same name as before,
 * as well as an `age` (number);
 */
var Person = ['Gail', 40];


/* Create a function called `greet`,
 * it should take a 1 parameter, `name`
 * and it should print "Hello, my name is {name}"
 */
function greet (name) {
return "Hello, my name is " + name;

}
console.log(greet());
/* Create a variable called `canDrive`,
 * if it should be true if your person object is at least 16 years old
 */
function canDrive (age) {

if (age >= 16) {return true;}
else if (age < 16) {return false;}
}
console.log(greet('Hector'));
console.log(canDrive(29));
/* Create an array called `dataTypes` with atleast 1 of every data type;
 * (there are 6 different data types);
 */
var dataTypes = ['hello', true, null, undefined, 1020, '']
var

function findDataType (dataTypes) {

var types = ['string', 'booleans', null, 'undefined', 'numbers', 'symbols'];
      for ( var i = 0; i < dataTypes.length; i++ ) {
       dataTypes = types[i];

        if ( dataTypes[i] === null ) {
          types.push( null );
        }
        else {
          types.push( typeof dataTypes[i] );
        }
      }
    }

      findDataType ();
      types.should.include( 'string' );
      types.should.include( 'number' );
      types.should.include( 'undefined' );
      types.should.include( 'object' );
      types.should.include( 'boolean' );
      types.should.include( null );



/* Create a Dog object
 * it should have a `bark` function that makes your dog bark!
 * It should also have a name attribute with the value of 'Spot'
 */
function bark (sound, name){

    var dog = {

    name: 'Spot',
    age: 15,
    color: 'yellow',
    };

    return  name + " " + "really likes to" + " " + sound + "!";
  }
  console.log(bark('bark', 'Spot'));