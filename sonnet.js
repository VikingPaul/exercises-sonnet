// Take the contents of the sonnet div and place it in a variable
var sonnet = document.getElementById('sonnet').innerHTML
var sonnetDiv = document.getElementById('sonnet')

// Find and output the starting position of the word "orphans"
console.log("orphans starts @", sonnet.indexOf("orphans"));

// Output the number of characters in the sonnet
console.log("length", sonnet.length);

// Replace the first occurance of the string "winter" with "yuletide"
sonnet = sonnet.replace("winter", "yuletide")


// Replace all occurances of the string "the" with "a large"
sonnet = sonnet.replace(/the\b/ig, "a large")
//sonnet = sonnet.replace(/a largee/g, "thee")

// Set the content of the sonnet div with the new string

sonnetDiv.innerHTML = sonnet