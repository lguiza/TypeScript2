import { series } from "./data.js";
function cargarSeries(series) {
    var tbody = document.querySelector("#seriesTable tbody");
    tbody.innerHTML = "";
    series.forEach(function (serie) {
        var row = document.createElement("tr");
        row.innerHTML = "\n      <td>".concat(serie.id, "</td>\n      <td style=\"color:blue; cursor:pointer;\">").concat(serie.name, "</td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>\n    ");
        // Al hacer clic en el nombre, muestra el detalle
        row.cells[1].addEventListener("click", function () {
            mostrarDetalleSerie(serie);
        });
        tbody.appendChild(row);
    });
}
function mostrarPromedioTemporadas(series) {
    var divPromedio = document.getElementById("promedioTemporadas");
    var totalTemporadas = series.reduce(function (sum, s) { return sum + s.seasons; }, 0);
    var promedio = totalTemporadas / series.length;
    divPromedio.innerHTML = "<strong>Promedio de temporadas:</strong> ".concat(promedio.toFixed(2));
}
function mostrarDetalleSerie(serie) {
    var detalleDiv = document.getElementById("serieDetailCard");
    detalleDiv.innerHTML = "\n    <div class=\"card\">\n      <img class=\"card-img-top\" src=\"".concat(serie.imageUrl, "\" alt=\"").concat(serie.name, "\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n        <p class=\"card-text\">").concat(serie.description, "</p>\n        <a href=\"").concat(serie.link, "\" class=\"btn btn-primary\" target=\"_blank\">Ver m\u00E1s</a>\n      </div>\n    </div>\n  ");
}
document.addEventListener("DOMContentLoaded", function () {
    cargarSeries(series);
    mostrarPromedioTemporadas(series);
});
