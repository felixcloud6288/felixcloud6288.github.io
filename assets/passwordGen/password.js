/* Plan outline: 
1) Prompt user for parameters
2) generate 1 emergency value for each item with an emergency location
3) make sure the emergency locations have no overlap
4) make a number array of ASCII values
5) Convert the vslues to their corresponding char values
6) SUbstitute in the emergency values in
*/

// Get the User's input on what the password needs
var password = {
    length: prompt("How many characters will the password have?"),
    Capital: confirm("Are there capital letters?"),
    lowercase: confirm("Are there lowercase letters?"),
    numbers: confirm("Are there numbers?"),
    special: confirm("Are there special characters?")
}
