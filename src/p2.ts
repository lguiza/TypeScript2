import { series } from "./data.js";
import { Serie } from "./Serie.js";

function cargarSeries(series: Serie[]): void {
  const tbody = document.querySelector("#seriesTable tbody") as HTMLElement;
  tbody.innerHTML = "";

  series.forEach((serie) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${serie.id}</td>
      <td style="color:blue; cursor:pointer;">${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    // Al hacer clic en el nombre, muestra el detalle
    row.cells[1].addEventListener("click", () => {
      mostrarDetalleSerie(serie);
    });

    tbody.appendChild(row);
  });
}

function mostrarPromedioTemporadas(series: Serie[]): void {
  const divPromedio = document.getElementById("promedioTemporadas")!;
  const totalTemporadas = series.reduce((sum, s) => sum + s.seasons, 0);
  const promedio = totalTemporadas / series.length;
  divPromedio.innerHTML = `<strong>Promedio de temporadas:</strong> ${promedio.toFixed(2)}`;
}

function mostrarDetalleSerie(serie: Serie): void {
  const detalleDiv = document.getElementById("serieDetailCard")!;
  detalleDiv.innerHTML = `
    <div class="card">
      <img class="card-img-top" src="${serie.imageUrl}" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.link}" class="btn btn-primary" target="_blank">Ver más</a>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  cargarSeries(series);
  mostrarPromedioTemporadas(series);
});
