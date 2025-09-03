//tablas de verdad  AND    A | B | R
 let uno = 1<0 && 1<0    //0 | 0 | 0
 let dos = 1<0 && 0<1    //0 | 1 | 0
 let tres = 0<1 && 1<0   //1 | 0 | 0
 let cuat = 0<1 && 0<1   //1 | 1 | 1 

//imprimimos los resultados de la tabla
 console.log(uno);
 console.log(dos);
 console.log(tres);
 console.log(cuat);
 
 

 //tablas de verdad  OR    A | B | R
 let unoo = 1<0 || 1<0    //0 | 0 | 0
 let doss = 1<0 || 0<1    //0 | 1 | 1
 let tress = 0<1 || 1<0   //1 | 0 | 1
 let cuatr = 0<1 || 0<1   //1 | 1 | 1

 
//imprimimos los resultados de la tabla
 console.log(unoo);
 console.log(doss);
 console.log(tress);
 console.log(cuatr);
 