function CPF() {
    "user_strict";

    function r(r) {
        for (var t = null, n = 0; 9 > n; ++n) t += r.toString().charAt(n) * (10 - n);
        var i = t % 11;
        return i = 2 > i ? 0 : 11 - i
    }

    function t(r) {
        for (var t = null, n = 0; 10 > n; ++n) t += r.toString().charAt(n) * (11 - n);
        var i = t % 11;
        return i = 2 > i ? 0 : 11 - i
    }
    var n = "CPF Inválido",
        i = "CPF Válido";
    this.gera = function() {
        for (var n = "", i = 0; 9 > i; ++i) n += Math.floor(9 * Math.random()) + "";
        var o = r(n),
            a = n + "-" + o + t(n + "" + o);
        return a
    }, this.valida = function(o) {
        for (var a = o.replace(/\D/g, ""), u = a.substring(0, 9), f = a.substring(9, 11), v = 0; 10 > v; v++)
            if ("" + u + f == "" + v + v + v + v + v + v + v + v + v + v + v) return n;
        var c = r(u),
            e = t(u + "" + c);
        return f.toString() === c.toString() + e.toString() ? i : n
    }
}



var CPF = new CPF();
document.write(CPF.valida("123.456.789-00"));

document.write("<br> Utilizando o proprio gerador da lib<br><br><br>");
for (var i = 0; i < 40; i++) {
    var temp_cpf = CPF.gera();
    document.write(temp_cpf + " = " + CPF.valida(temp_cpf) + "<br>");
}

$("#input").keypress(function() {
    $("#resposta").html(CPF.valida($(this).val()));
});

$("#input").blur(function() {
    $("#resposta").html(CPF.valida($(this).val()));
});
