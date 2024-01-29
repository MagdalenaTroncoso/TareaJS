//-----------------------EJERCICIO 1-----------------------
let arrayPalInusuales= ['Petricor','Arrebol', 'Bonhomía', 'Ataraxia','Sempiterno'];
let arrayPalAnimales= ['Huron','Erizo', 'Pez payaso', 'Tarántula','Nutria'];
let arrayPalColores= ['Rojo','Turquesa', 'Amarillo', 'Rosado','Verde'];

//funcion aleatorio
function aleatorio(a){
  let indice= Math.floor(Math.random()*a.length);
  return a [indice];
}

let palInusualAleatoria= aleatorio (arrayPalInusuales)
let animalAleatorio=aleatorio (arrayPalAnimales)
let colorAleatorio=aleatorio (arrayPalColores)

//funcion para concatenar las palabras aleatorias.
function nombreBanda(){
  let cadena=  `${palInusualAleatoria} ${animalAleatorio} ${colorAleatorio}`;
  return cadena;
}
console.log(nombreBanda());

//-----------------------EJERCICIO 2-----------------------

function asignarEmoji (emocion){
  switch(emocion){
    case "feliz":
      emoji="😀";
      break;
    
    case "triste":
      emoji="😞";
      break;
    
    case "sorprendido":
      emoji="😲";
      break;
    
    default:
      emoji = "No reconocido";
      break;
  }
}
asignarEmoji ("sorprendido")
console.log(emoji)

//-----------------------EJERCICIO 3-----------------------
let personajes = ['un perro con muchas plumas','un melon con feo olor','un dragón multicolor'];
let problemas = ['perdió su billetera','se enamoró de una planta','no podía parar de gritar'];
let finales= ['su amiga la cereza que le dio un abrazo y todo mejoró.','su primo, el carpintero del pueblo, que lo invitó a viajar por el mundo.','un perro callejero que lo invitó a comer tallarines con tuco.'];

//Aca estoy utilizando la function Aleatorio del primer ejercicio
let personajeAleatorio=aleatorio (personajes);
let problemaAleatorio=aleatorio (problemas);
let finalAleatorio=aleatorio (finales);

function historia(){
  let cadena= `Habia una vez, ${personajeAleatorio} que ${problemaAleatorio}, pero por suerte apareció ${finalAleatorio}`;
  return cadena;
}
console.log(historia());


//-----------------------EJERCICIO 4-----------------------

//Almacené informacion sobre la historia y recomendacion musical para cada década
let decada60={
  historia:"estuvo marcada por conflictos políticos, crisis económicas y cambios sociales significativos. Entre ellos el golpe de Estado militar del 62.",
  canciones: "La Balsa, interpretada por Los Gatos. Esta canción marcó un hito en la historia del rock argentino y se considera el comienzo del rock nacional. La letra habla sobre la sensación de alienación y la búsqueda de libertad de la juventud de la época."
}

let decada70={
  historia:"fue un período de profundos cambios políticos, sociales y culturales, marcado por eventos como el golpe de Estado de 1976 y el comienzo de la dictadura militar.",
  canciones: "Sobreviviendo de Victor Heredia. La misma se convirtió en un himno de resistencia durante los años de la dictadura militar en Argentina."
}

let decada80={
  historia:"estuvo marcada por el retorno a la democracia luego del fin de la dictadura militar en 1983.",
  canciones: "Yo no quiero volverme tan loco de Charly García. Esta canción es un reflejo de la rebeldía y la búsqueda de identidad de los jóvenes argentinos durante la década del 80."
}

let decada90={
  historia:"estuvo marcada por la presidencia de Carlos Menem y la implementación de políticas neoliberales.",
  canciones: "Un Millón de Años Luz de Soda Stereo. Esta canción refleja el espíritu de cambio y transformación de la época, así como la evolución musical de la banda."
}

let decada2000={
  historia:"estuvo marcada por la crisis económica de 2001 que desencadenó caos social y político, con protestas masivas y la renuncia de varios presidentes. A pesar de los desafíos, Argentina experimentó períodos de crecimiento económico y se implementaron importantes reformas, como la Ley de Medios Audiovisuales y la Ley de Matrimonio Igualitario.",
  canciones: "Al Lado del Camino de Fito Paez. Es una canción que invita a reflexionar sobre la vida, el amor y el sentido de la existencia, transmitiendo un mensaje de perseverancia y búsqueda de la felicidad y la plenitud personal."
}
let ultimosAños={
  historia:"estuvieron marcados por una economía que ha enfrentado varios desafíos, incluyendo altos niveles de inflación, deuda externa, restricciones cambiarias y recesión económica. A pesar de los desafíos, implementaron importantes reformas como la Legalizacion del aborto y avances en Derechos LGBT+.",
  canciones: "Creo de Eruca Sativa. Es una composición que, en su contexto, puede interpretarse como un himno de empoderamiento y superación personal."
}

//Ubico el año solicitado en la decada correspondiente
function decada(año){
  if (año>=1960 && año<1970){
    return "decada del 60"; 
  }else if(año>=1970 && año<1980){
    return "decada del 70"; 
  }else if(año>=1980 && año<1990){
    return "decada del 80"; 
  }else if(año>=1990 && año<2000){
    return "decada del 90"; 
  }else if(año>=2000 && año<2010){
    return "decada del 2000"; 
  }else if(año>=2010 && año<2024){
    return "ultimos 14 años"; 
  }else{
    return null; 
  }
}
let decadaAsignada=decada(2015);

//Recomendacion para cada decada
function recomendacion(decadaAsignada){
  if (decadaAsignada==="decada del 60"){
    return `La decada del 60 en Argentina ${decada60.historia} Te recomiendo escuchar ${decada60.canciones}`; 
  }else if(decadaAsignada==="decada del 70"){
    return `La decada del 70 en Argentina ${decada70.historia} Te recomiendo escuchar ${decada70.canciones}`; 
  }else if(decadaAsignada==="decada del 80"){
    return `La decada del 80 en Argentina ${decada80.historia} Te recomiendo escuchar ${decada80.canciones}`; 
  }else if(decadaAsignada==="decada del 90"){
    return `La decada del 90 en Argentina ${decada90.historia} Te recomiendo escuchar ${decada90.canciones}`; 
  }else if(decadaAsignada==="decada del 2000"){
    return `La decada de los 2000 en Argentina ${decada2000.historia} Te recomiendo escuchar ${decada2000.canciones}`; 
  }else if(decadaAsignada==="ultimos 14 años"){
    return `Los ultimos 14 años en Argentina ${ultimosAños.historia} Te recomiendo escuchar ${ultimosAños.canciones}`; 
  }else{
    return "No existe recomendacion musical para la epoca solicitada"; 
    }
}
console.log (recomendacion(decadaAsignada))



//-----------------------EJERCICIO 5-----------------------
let ingredientes= ['algas bioluminiscentes','carne cultivada en laboratorio', 'levadura genéticamente modificada', 'microalgas nutritivas','hongos medicinales','polvo de remolacha liofilizada','sal de hierbas exóticas','aceite de microalgas','extracto de setas salvajes','nectar de flores exóticas','proteína de algas','nubes de humo líquido','polen de abeja','agua de coco en polvo','flor de calabaza']; 

let tecnica= ['el horneado veloz con tecnologia de alta frecuencia','la homogenizacion de los ingredientes mezclando a velocidad de la luz', 'la trituracion con ultrasonido', 'la cocción ultrasónica']; 

let platos = ['Estallido de Sabores Subatómicos','Delicia estelar', 'Mix de Energía utópica']; 

//Aca estoy utilizando la function Aleatorio del primer ejercicio
let ingredienteAleatorio= aleatorio (ingredientes); 
let tecnicaAleatoria= aleatorio (tecnica); 
let platoAleatorio= aleatorio (platos); 


function receta (){
  return (`Te recomiendo cocinar: ${platoAleatorio}. A continuacion iremos paso a paso desarrollando la receta: 
  1- Colocar en un bowl 500gr de ${aleatorio (ingredientes)} y media taza de ${aleatorio (ingredientes)}. 
  2- Una vez lograda una textura pegajosa, continuamos con ${aleatorio (tecnica)} durante 10 segundos y una vez listo seguir con ${aleatorio (tecnica)}. 
  3- Agregamos 2 cucharadas de ${aleatorio (ingredientes)}. 
  4- Dejamos enfriar y ya está listo para disfrutar.`)
}
console.log (receta ())


//-----------------------EJERCICIO 6-----------------------

let colores= ['rojo','azul', 'verde','turquesa','violeta','amarillo']; 

let elementos=['Hidrógeno','Carbono','Hierro','Oro','Plata','Cobre','Helio','Nitrógeno','Calcio']; 

let fenomeno = ['explosión estelar','estallidos de rayos gamma','rayos cósmicos','erupciones de radiación']; 

let planetas =[{
  nombre:"Nebulonia",
  caracteristica: "se caracteriza por tener la mayor poblacion de marcianos con 58 dedos."
},
{
  nombre:"Brocula",
  caracteristica: "se caracteriza porque sus habitantes tienen ojos que brillan en la oscuridad y se alimentan de energía estelar. "
},
{
  nombre:"Galacticus",
  caracteristica: "se caracteriza porque su superficie brilla con destellos de colores fluorescentes, y los habitantes tienen orejas que les permiten comunicarse telepáticamente con los gatos."
},
{
  nombre:"Orbitania",
  caracteristica: "se caracteriza por tener un clima impredecible donde llueven helados de todos los sabores."
}];

//Aca estoy utilizando la function Aleatorio del primer ejercicio
let coloresAleatorio= aleatorio (colores); 
let elementoAleatorio= aleatorio (elementos); 
let fenomenoAleatorio= aleatorio (fenomeno); 
let planetasAleatorio= aleatorio (planetas); 

function planeta (){
  return (`Te toco el planeta: ${planetasAleatorio.nombre}, el cual ${planetasAleatorio.caracteristica} Se forma por la combinacion de ${aleatorio (colores)} y ${aleatorio (colores)}, el elemento ${elementoAleatorio} y el fenomeno ${fenomenoAleatorio}`)
}
console.log (planeta ())

