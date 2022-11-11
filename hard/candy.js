/**
 * There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.
 */
const candy = (ratings) => {
    const n = ratings.length;
    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);
    let sum = 0;
    
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1;
        }
    }
    
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            right[i] = right[i + 1] + 1;
        }
    }
    
    for (let i = 0; i < n; i++) {
        sum += Math.max(left[i], right[i]);
    }
    
    return sum;
}

/* Here is the explanation for the code above:
1. We initialize a variable called n to the length of the array ratings.

2. We initialize an array called left of size n with all values set to 1. 
   We will use this array to store the number of candies that the children with 
   ratings[i] will get if they are not in the right order.

3. We initialize an array called right of size n with all values set to 1. We will 
   use this array to store the number of candies that the children with ratings[i] 
   will get if they are not in the right order.

4. We initialize a variable called sum to 0. We will use this variable to store the 
   total number of candies that all children will get.

5. We iterate through the array ratings starting from the second child. If the child 
   has a higher rating than the child to the left of them, we set the value at the 
   index of their rating to the value at the index to the left of them plus 1. This 
   ensures that the child with the higher rating will have more candies than the child 
   to the left of them.

6. We iterate through the array ratings starting from the second to last child. If the 
   child has a higher rating than the child to the right of them, we set the value at the i
   ndex of their rating to the value at the index to the right of them plus 1. This ensures 
   that the child with the higher rating will have more candies than the child to the right 
   of them.

7. We iterate through the array ratings. We set the value of sum to the sum of itself and the 
   maximum value between the value at the index of their rating in the left array and the value 
   at the index of their rating in the right array.

8. We return the value of sum. */

// best solution.
const _candy = function(ratings) {
    ratings.unshift(0)
    const N = ratings.length
    let total = 0
    let incMax = 0
    let decMax = 0

    for (let i = 1; i < N; i++) {
        if (ratings[i] == ratings[i - 1]) {
            if (incMax > decMax) total -= decMax - 1
            if (decMax > incMax) total -= incMax - 1
            incMax = 1
            decMax = 1
            total++
        } else if (ratings[i] > ratings[i - 1]) {
            if (decMax > 1 && decMax < incMax) {
                total -= decMax - 1
                incMax = 1
            }
            decMax = 1
            incMax++
            total += incMax
        } else {
            decMax++
            if (decMax == incMax) {
                total -= incMax - 1
                incMax = 1
            }
            total += decMax
        }
    }

    if (incMax > decMax) total -= decMax - 1
    if (decMax > incMax) total -= incMax - 1
    return total
};