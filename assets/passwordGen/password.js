/* Plan outline: 
1) Prompt user for parameters
2) generate 1 emergency value for each item with an emergency location
3) make sure the emergency locations have no overlap
4) make a number array of ASCII values
5) Convert the values to their corresponding char values
6) Substitute the emergency values in
*/

// Get the User's input on what the password needs
var password = {
    length: prompt("How many characters will the password have?"),
    capital: confirm("Are there capital letters?"),
    lowercase: confirm("Are there lowercase letters?"),
    numbers: confirm("Are there numbers?"),
    special: confirm("Are there special characters?"),

    makePassword: function(string){
        // Generate a random number from 0-3 to determine what will go in each index of the password
        // 0 = capital
        // 1 = lowercase
        // 2 = number
        // 3 = special character
        for(var i=0; i<this.length;i++)
        {
            var x = Math.floor(Math.random() * 4)

            if (x == 0 && this.capital == true)
                string[i] = this.generateCapital();
            else if (x == 1 && this.lowercase == true)
                string[i] = this.generateLowerCase();
            else if (x == 2 && this.numbers == true)
               string[i] = this.generateNumber();
            else if (x == 3 && this.special == true)
                string[i] = this.generateSpecial();
            else{
                i--;
                continue;
            }

            string[i] = String.fromCharCode(string[i]);
            console.log("Current string = "+ string.join(""))
        }
        string = this.makeEmergencyValues(string)
        return string;
    },

    generateCapital(){
        return Math.floor(Math.random()*26 + 65)
    },
    generateLowerCase(){
        return Math.floor(Math.random()*26 + 97)
    },
    generateNumber(){
        return Math.floor(Math.random()*10 + 48)
    },
    generateSpecial(){
        var i = Math.floor(Math.random() * 4)
        if (i == 0)
        {
            return Math.floor(Math.random()*15 + 33)
        }
        else if(i == 1){
            return Math.floor(Math.random()*7 + 58)
        }
        else if(i == 2){
            return Math.floor(Math.random()*6 + 91)
        }
        else if(i == 3){
            return Math.floor(Math.random()*4 + 123)
        }
    },
    // Create a capital, lowercase, number, and special char that will definitely be in the password
    makeEmergencyValues: function(string){
        console.log(string.join(''))
        // Determine where they will go
        var i = Math.floor(Math.random()* this.length-1) 
        var j = Math.floor(Math.random()* this.length-1)
        var k = Math.floor(Math.random()* this.length-1) 
        var l = Math.floor(Math.random()* this.length-1) 

        // Ensure none of them go to the same place
        while (j == i || j == k || j == l){
            j = Math.floor(Math.random()* this.length-1)
        }
        while (k == i || k == j || k == l){
            k = Math.floor(Math.random()* this.length-1)
        }
        while (l == i || l == j || l == k){
            l = Math.floor(Math.random()* this.length-1)
        }

        if (this.capital == true)
            string[i] = String.fromCharCode(this.generateCapital());
        if (this.lowercase == true)
          string[j] = String.fromCharCode(this.generateLowerCase());
        if (this.numbers == true)
           string[k] = String.fromCharCode(this.generateNumber());
        if (this.special == true)
            string[l] = String.fromCharCode(this.generateSpecial());


        console.log("New password is" + string.join(""))


       // string[i] = String.fromCharCode(Math.floor(Math.random() *26 + 65))
        return string;
    }
}
var string = []
string = password.makePassword(string)
console.log(string.join(''))
