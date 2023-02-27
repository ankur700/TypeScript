// nested namespace
import greet = AllGreetings.Greetings;


namespace AllGreetings {
  export namespace Greetings{
    export function returnGreetings(greetings: string) {
      console.log(`The message from the namespace Greetings is: ${greetings}`);
    }
  }

  export namespace GreetingsWithLength{
    export function returnGreetings(greetings: string) {
      let length: number = getLength(greetings);
      console.log(`The message from the namespace GreetingsWithLength is: ${greetings}. It has ${length} characters.`);
    }

    function getLength(greetings: string) {
      return greetings.length;
    }
  }
}

console.log(greet.returnGreetings('Bonjour'));