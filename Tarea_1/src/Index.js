function IniciarSesion(){

    usuario = document.getElementById('txtusuario').value;
    password = document.getElementById('txtpassword').value;
    email = document.getElementById('txtemail').value;
 
    if(usuario == 'admin' && password == '123456' && email == 'Tarea1@gmail.com'){
    swal({
     title: "Bienvenido",
     text : "Has iniciado sesión",
     icon : 'success',
    }).then(()=>{
        window.location.href = window.location.href = "./pages/Inicio/Inicio.html"
     })

    }else{
     swal({
         title: "Datos incorrectos",
         text : "Usuario o contraseña incorrecta",
         icon : 'error',
      })
    }

 }

 /* function checkForm(form)
 {
   if(!form.terms.checked) {
     alert("Please indicate that you accept the Terms and Conditions");
     form.terms.focus();
     return false;
   }
   return true;
 } */

