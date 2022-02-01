
var localStorageKeyName = 'data';
window.onload =cargarTabla
var datos =  new Array(); 

function guardar() {
        /** Captura de datos de los inputs */
        var nameInput     = document.getElementById("nombreAp-txt").value,
            rutInput      = document.getElementById("rutTxt").value,
            patenteInput  = document.getElementById("patenteTxt").value,
            marcaSelect   = document.getElementById("marcas").value,
            modeloSelect  = document.getElementById("modelos").value,
            colorSelect   = document.getElementById("color").value;
        var valido = true;

        /** validaciones */
        document.querySelector("#nombreAp-txt").classList.remove("is-invalid");
     /*   if(nameInput.trim() == ""){
            alert("El campo de nombres y apellidos esta vacio");
            document.querySelector("#nombreAp-txt").classList.add("is-invalid");
            valido = false;
        }

        document.querySelector("#rutTxt").classList.remove("is-invalid");
        if(rutInput.trim() == "" ){
            alert("El campo de rut esta vacio");
            document.querySelector("#rutTxt").classList.add("is-invalid");
            valido = false;
        }

        if(rutInput.length > 9 || rutInput.length < 8){
            alert("La cantidad de digitos del rut es incorrecta");
            document.querySelector("#rutTxt").classList.add("is-invalid");
            valido = false;
        }

        document.querySelector("#patente-txt").classList.remove("is-invalid");
        if(patenteInput.trim() == "" ){
            alert("El campo de patente esta vacio");
            document.querySelector("#patente-txt").classList.add("is-invalid");
            valido = false;
        }

        if(patenteInput.length > 6 || patenteInput.length < 6){
            alert("La cantidad de digitos de la patente es incorrecta");
            document.querySelector("#patente-txt").classList.add("is-invalid");
            valido = false;
        }

        document.querySelector("#marcas").classList.remove("is-invalid");
        if(marcaSelect.value == 0 || marcaSelect.value == ""){
            alert("Selecciona una opcion");
            document.querySelector("#marcas").classList.add("is-invalid");
            valido = false;
        }
*/
        /** Guardado de datos en el LocalStorage */
        if(valido) {
        var rts={
            "nameInput": nameInput,
            "rutInput": rutInput,
            "patenteInput": patenteInput,
            "marcaSelect": marcaSelect,
            "modeloSelect": modeloSelect,
            "colorSelect": colorSelect}
        
        datos.push(JSON.stringify(rts))

        localStorage.setItem('datos', datos);

        }
       // preventDefault();
        
}


function appendObjectToLocalStorage(obj) {
    var rts = [],
        dataInLocalStorage = localStorage.getItem(localStorageKeyName);

    if (dataInLocalStorage !== null) {
        rts = JSON.parse(dataInLocalStorage);
    }

    rts.push(obj);
    registrosJSON=JSON.stringify(rts);

    localStorage.setItem(localStorageKeyName,registrosJSON); 
    cargarTabla();
}

/** obtener datos en la tabla */
function cargarTabla(){
    var el = document.getElementById('overlayBtn');
if(el){
  el.addEventListener('click', swapper, false);
}
    var result = []
    var result=JSON.parse(JSON.stringify(localStorage.getItem("datos")));
    console.log(result)

    var split=result.split(",")
    console.log(split)

    var array = JSON.parse("[" + result + "]");
    console.log(array)
    
    /*---*/

    var tbody = document.querySelector("#tbody-registros");
    //body.innerHTML = "";
    /**recorre la cantidad de registros que hay */
    for(let i=0; i<array.length; i++){
        /** obtiene el numero de filas */

        //console.log(datoslocalStorage[i]);
        let r = array[i];
        
        var obj = JSON.parse(JSON.stringify(r));
        console.log(obj);
        // var obj =JSON.parse(r);
        /** se crea la fila */
        var tr = document.createElement("tr"),
        /** se crean las columanas */
        tdName = document.createElement("td"),
        tdRut = document.createElement("td"),
        tdPatente = document.createElement("td"),
        tdMarca = document.createElement("td"),
        tdModelo = document.createElement("td"),
        tdColor = document.createElement("td"),
        botonRemove = document.createElement("button");

        /** se rellenan las colunmas */
        tdName.innerHTML = obj.nameInput;
        tdRut.innerHTML = obj.rutInput;
        tdPatente.innerHTML = obj.patenteInput;
        tdMarca.innerHTML = obj.marcaSelect;
        tdModelo.innerHTML = obj.modeloSelect;
        tdColor.innerHTML = obj.colorSelect;

        /** se crea boton y columna para eliminar */
        botonRemove.className = 'btn btn-success';
        
        /** se crea la accion de eliminar */
        tr.appendChild(tdName);
        tr.appendChild(tdRut);
        tr.appendChild(tdPatente);
        tr.appendChild(tdMarca);
        tr.appendChild(tdModelo);
        tr.appendChild(tdColor);
        

        tbody.appendChild(tr);
    }
}



