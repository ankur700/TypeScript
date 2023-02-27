

export function returnGreeting(greeting: string) {
  let greetingLength = getLength(greeting);
  console.log(`The mmessage from Greetings_module is ${greeting}. It is ${greetingLength} characters long.`);
}

function getLength(message: string): number {
  return message.length;
}