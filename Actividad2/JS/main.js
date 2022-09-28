function seleccionarLenguaje() {
  var valuesOption = document.getElementById('exampleFormControlSelect1').value;
  let alertas = document.getElementById('alertas');

  if(valuesOption == 'Python'){
  
    alertas.className = "alert alert-primary container"
  }else if(valuesOption == 'Javascript'){
    alertas.className = "alert alert-danger container"
  }else if(valuesOption == 'Java'){
    alertas.className = "alert alert-warning container"
  }
     document.getElementById('alertas').innerHTML = "El lenguaje seleccionado es: " + valuesOption;

}
 