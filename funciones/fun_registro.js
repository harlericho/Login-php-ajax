function registro() {
    if (validacion() == true) {
        var valor = $("#registroform").serialize();
        $.ajax({
            type: "POST",
            url: "../controladores/registroUser.php",
            data: valor,
            cache: false,
            success: function (r) {
                if (r == 2) {
                    alertify.set("notifier", "position", "top-center");
                    alertify.warning("Dni ya existen en la DATA");
                    $("#dni").focus();
                } else if (r == 3) {
                    alertify.set("notifier", "position", "top-center");
                    alertify.warning("Email ya existen en la DATA");
                    $("#email").focus();
                } else {
                    alertify.set("notifier", "position", "top-center");
                    alertify.success("Usuario guardado correctamente");
                    $("#registroform")[0].reset();
                }
            },
        });
    }
}

//validaciones
function validacion() {
    var apellidos = $("#apellidos").val();
    var nombres = $("#nombres").val();
    var dni = $("#dni").val();
    var email = $("#email").val();
    var password = $("#password").val();
    if ($.trim(apellidos) == "") {
        alertify.set("notifier", "position", "top-center");
        alertify.error("Ingrese sus apellidos");
        $("#apellidos").focus();
        return false;
    } else if ($.trim(nombres) == "") {
        alertify.set("notifier", "position", "top-center");
        alertify.error("Ingrese sus nombres");
        $("#nombres").focus();
        return false;
    } else if ($.trim(dni) == "") {
        alertify.set("notifier", "position", "top-center");
        alertify.error("Ingrese su dni o identificacion");
        $("#dni").focus();
        return false;
    } else if ($.trim(email) == "") {
        alertify.set("notifier", "position", "top-center");
        alertify.error("Ingrese su email");
        $("#email").focus();
        return false;
    } else if ($.trim(password) == "") {
        alertify.set("notifier", "position", "top-center");
        alertify.error("Ingrese su contraseña");
        $("#password").focus();
        return false;
    } else if ($.trim(email) != "") {
        if (validarEmail(email)==true) {
            return true;
        } else{
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
        $('#email').focus();
        return false;
    }
}
