function fibonacci(n) {
      if (n <= 1) return n;
      return fibonacci(n - 1) + fibonacci(n - 2);
}


// Initialize with any number
const num = 15;
console.log(`Fibonacci sequence up to ${num}:`);
for (let i = 0; i < num; i++) {
      console.log(fibonacci(i));
}
window.open('https://javascript.info/')