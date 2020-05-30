function login() {
    if (validacion() == true) {
        var valor = $("#loginform").serialize();
        $.ajax({
            type: "POST",
            url: "../controladores/loginUser.php",
            data: valor,
            cache: false,
            success: function (r) {
                if (r == 2) {
                    alertify.set("notifier", "position", "top-center");
                    alertify.warning("Usuario o password no existe en la DATA");
                    $("#user").focus();
                } else {
                    alertify.set("notifier", "position", "top-center");
                    alertify.success("Bienvenido Usuario");
                    $("#loginform")[0].reset();
                }
            }
        });
    }
}






//validaciones
function validacion() {
    var user = $("#user").val();
    var pass = $("#pass").val();
    if ($.trim(user) == "") {
        alertify.set("notifier", "position", "top-center");
        alertify.error("Ingrese su Email");
        $("#user").focus();
        return false;
    } else if ($.trim(pass) == "") {
        alertify.set("notifier", "position", "top-center");
        alertify.error("Ingrese su contraseña");
        $("#pass").focus();
        return false;
    } else if ($.trim(user) != "") {
        if (validarEmail(user) == true) {
            return true;
        } else {
            return false;
        }
    }

}

function validarEmail(valor) {
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(valor)) {
        return true;
    } else {
        alertify.set("notifier", "position", "top-center");
        alertify.warning("Formato de Email no existe: xyz@dominio.com");
        $('#user').focus();
        return false;
    }
}