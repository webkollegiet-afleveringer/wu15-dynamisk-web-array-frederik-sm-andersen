document.addEventListener("DOMContentLoaded", function() {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny", "Sniffles",];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]
    

    // --- Løs opgaverne herunder --- 
    function over(value) {
        return value >= 20;
    }
    
    let newNumbers = numbersArray.filter(over)
    console.log("Opgave 1", newNumbers)

    console.log("Opgave 2", catsArray)

    console.log("Opgave 3a", dogsArray.includes("Trixie") )
    console.log("Opgave 3b", dogsArray.includes("Baxter"))

    console.log("Opgave 4a", catsArray.includes("Bagheera")? "Bagheera" : undefined)
    console.log("Opgave 4b", catsArray.includes("Salem")? "Salem" : undefined)

    let multy = numbersArray.map((x) => x * 3)
    console.log("Opgave 5", multy)

    let allDog = ""
    dogsArray.forEach((dogs, index) => {
        allDog += dogs
    })
    console.log("Opgave 6", allDog)


    console.log("Opgave 7a", fruitsArray.indexOf("Mango"))
    console.log("Opgave 7b", fruitsArray.indexOf("Blåbær"))

    
    let pollyIndex = dogsArray.indexOf("Polly");


    let removeDog = dogsArray.toSpliced(pollyIndex, 1)
    console.log("Opgave 8", removeDog)
}) // ends DOMContentLoaded

