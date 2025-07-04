/** Label can be used to 'break' out of outer loop when inside a nested loop.
 * Label is an identifier with a color before a loop ('outer' in the code below)
 * Similarly we can use 'continue' when inside a nested loop to jump to the next iteration in outer loop */

outer: for (let i=0; i<10; i++) {
    for (let j=0; j<10; j++) {
        if (j > 5) {
            break;
        } else if (i > 3) {
            break outer;
        }
        console.log(`Values: ${i} ${j}`);
    }
}