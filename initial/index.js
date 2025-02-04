function slidingWindow(arr, k) {
      let result = [];
      let windowSum = 0;
      let windowStart = 0;

      for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
            windowSum += arr[windowEnd]; // add the next element

            // slide the window, we don't need to slide if we've not hit the required window size of 'k'
            if (windowEnd >= k - 1) {
                  result.push(windowSum); // store the sum of the current window
                  windowSum -= arr[windowStart]; // subtract the element going out
                  windowStart += 1; // slide the window ahead
            }
      }

      return result;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const k = 3;
console.log(slidingWindow(arr, k)); // Output: [6, 9, 12, 15, 18, 21, 24]