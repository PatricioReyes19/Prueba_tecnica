/** Variables para cada marca  */
var marca_FORD = ["EcoSport", "Raptor" ];
var marca_CHEVROLET = ["Trucker", "Sail"];
var marca_SUZUKI = ["Baleno", "Swift"];
var marca_TESLA = ["Cybertruck", "Model S"];
var marca_HONDA = ["Civic", "Impresa"];

function cambia_marca() {
    //Capturar el valor del select marca
    var marca;
    marca = document.getElementById('marcas').value;

    if (marca!=0){
        //selecciona el array de la marca
        mis_modelos = eval("marca_"+marca);
        //identifica la cantidad de modelos
        num_modelos = mis_modelos.length;
        //se marca el numero de modelos en el select modelos
        document.registro.modelos.length = num_modelos;
        //para cada modelo del array, se introduce en el select modelos
        for(i=0;i<num_modelos;i++){
            document.registro.modelos.options[i].value = mis_modelos[i];
            document.registro.modelos.options[i].text = mis_modelos[i];
        }
    }else{
        document.registro.modelos.length = 1;
        document.registro.modelos.options[0].value = " ";
        document.registro.modelos.options[0].text = "No Asignado";
    }
}