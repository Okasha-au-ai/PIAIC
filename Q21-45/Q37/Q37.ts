function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`Creating a ${size}-sized shirt with the message: "${message}"`);
  }
  
  // Creating a large shirt with the default message
  make_shirt();
  
  // Creating a medium shirt with the default message
  make_shirt('Medium');
  
  // Creating a custom-sized shirt with a different message
  make_shirt('Small', 'Hello, World!');
  