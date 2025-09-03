// se piden 3 numeros al usuario
const numero1 = parseInt(prompt("INGRESA UN NUMERO:"));
const numero2 = parseInt(prompt("INGRESA UN NUMERO:"));
const numero3 = parseInt(prompt("INGRESA UN NUMERO:"));


  // todos los números son iguales
  if (numero1 === numero2 && numero2 === numero3) {
    console.log("Todos los números son iguales");
  } 
  // Maneja los casos en que solo dos números son iguales
  else if (numero1 === numero2) {
    console.log("Los primeros dos números son iguales.");
  } else if (numero1 === numero3) {
    console.log("El primer y último número son iguales.");
  } else if (numero2 === numero3) {
    console.log("Los últimos dos números son iguales.");
  } 

  
  //  todos los números son diferentes
  else {
    // numero1 es el mayor
    if (numero1 > numero2 && numero1 > numero3) {
      if (numero2 > numero3) {
        console.log("El número "+ numero1+" es el mayor y "+numero3+" el menor.");
      } else {
        console.log("El número "+ numero1+" es el mayor y "+ numero2+" el menor.");
      }
      // numero2 es el mayor
    } else {if (numero2 > numero1 && numero2 > numero3) {
      if (numero1 > numero3) {
        console.log("El número "+ numero2+" es el mayor y "+ numero3+" el menor.");
      } else {
        console.log("El número "+ numero2+" es el mayor y "+ numero1+" el menor.");
      }
    
    } else {
      // numero3 es el mayor
      if (numero1 > numero2) {
        console.log("El número "+ numero3+" es el mayor y "+ numero2+" el menor.");
      } else {
        console.log("El número "+ numero3+" es el mayor y "+ numero1+" el menor.");
      }
    }
  }
}  
