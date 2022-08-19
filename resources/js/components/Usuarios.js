document.getElementById("tipo").onchange = function() { 
    getSelectValue = document.getElementById("tipo").value;
    if (getSelectValue == "Estudiante") {
        document.getElementById("estudiante").style.display = "flex";
        document.getElementById("personal").style.display = "none";
        document.getElementById("visitante").style.display = "none";
        document.getElementById("servicios").style.display = "none";
        document.getElementById("proveedor").style.display = "none";
        document.getElementById("administrador").style.display = "none";
        document.getElementById("otro").style.display = "none";
    } else if (getSelectValue == "Personal") {
        document.getElementById("estudiante").style.display = "none";
        document.getElementById("personal").style.display = "flex";
        document.getElementById("visitante").style.display = "none";
        document.getElementById("servicios").style.display = "none";
        document.getElementById("proveedor").style.display = "none";
        document.getElementById("administrador").style.display = "none";
        document.getElementById("otro").style.display = "none";
    } else if (getSelectValue == "Visitante") {
        document.getElementById("estudiante").style.display = "none";
        document.getElementById("personal").style.display = "none";
        document.getElementById("visitante").style.display = "flex";
        document.getElementById("servicios").style.display = "none";
        document.getElementById("proveedor").style.display = "none";
        document.getElementById("administrador").style.display = "none";
        document.getElementById("otro").style.display = "none";
    } else if (getSelectValue == "Servicios") {
        document.getElementById("estudiante").style.display = "none";
        document.getElementById("personal").style.display = "none";
        document.getElementById("visitante").style.display = "none";
        document.getElementById("servicios").style.display = "flex";
        document.getElementById("proveedor").style.display = "none";
        document.getElementById("administrador").style.display = "none";
        document.getElementById("otro").style.display = "none";
    } else if (getSelectValue == "Proveedor") {
        document.getElementById("estudiante").style.display = "none";
        document.getElementById("personal").style.display = "none";
        document.getElementById("visitante").style.display = "none";
        document.getElementById("servicios").style.display = "none";
        document.getElementById("proveedor").style.display = "flex";
        document.getElementById("administrador").style.display = "none";
        document.getElementById("otro").style.display = "none";
    } else if (getSelectValue == "Administrador") {
        document.getElementById("estudiante").style.display = "none";
        document.getElementById("personal").style.display = "none";
        document.getElementById("visitante").style.display = "none";
        document.getElementById("servicios").style.display = "none";
        document.getElementById("proveedor").style.display = "none";
        document.getElementById("administrador").style.display = "flex";
        document.getElementById("otro").style.display = "none";
    }
    else if (getSelectValue == "Otro") {
        document.getElementById("estudiante").style.display = "none";
        document.getElementById("personal").style.display = "none";
        document.getElementById("visitante").style.display = "none";
        document.getElementById("servicios").style.display = "none";
        document.getElementById("proveedor").style.display = "none";
        document.getElementById("administrador").style.display = "none";
        document.getElementById("otro").style.display = "flex";
    }
}