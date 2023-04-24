//9. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
//    using a for loop or for of loop and print out the items.
let array=["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

for(let i=0; i<array.length;i++){
    console.log(array[i])
}
for (let numbers of array){
    console.log(numbers)
}