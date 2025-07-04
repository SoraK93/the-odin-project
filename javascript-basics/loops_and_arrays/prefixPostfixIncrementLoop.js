// Prefix
let i = 0;
// Since ++i increments and returns new value, the comparison and console.log() takes new value of i
while (++i < 5) console.log("Value i:", i );

// Postfix
let j = 0;
// Since i++ increments and returns old value, the comparison happens on old value and console.log() takes new value of i
while (j++ < 5) console.log("Value j:", j );

// Since ++i & j++ is not getting used immediately, both loops will return the same result.
for (let i = 0; i < 5; ++i) console.log("Value i:", i );
for (let j = 0; j < 5; j++) console.log("Value j:", j );