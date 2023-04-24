// Ques1. In the following shopping cart add, remove, edit itemsconst shoppingCart = ['Milk','Coffee', 'Tea', 'Honey']
//  a. add 'Meat' in the beginning of your shopping cart if it has not been already added
let shoppingCart=['Milk','Coffee','Tea','Honey']
shoppingCart.splice(0,0,"Meat")
console.log(shoppingCart)

//b. add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar")
console.log(shoppingCart)

//c. remove 'Honey' if you are allergic to honey
shoppingCart.splice(4,1)
console.log(shoppingCart)

//d. modify Tea to 'Green Tea' 
shoppingCart[3]="Green Tea" 
console.log(shoppingCart)
