// Todos los ramos con nombre, prerrequisitos y a qué abren
const ramos = {
  // Primer año - I Semestre (todos desbloqueados)
  BIOL034: { nombre: "Biología Celular", prerrequisitos: [], desbloquea: ["BIOL162", "DEBD220"] },
  BIOL035: { nombre: "Laboratorio de Biología Celular", prerrequisitos: [], desbloquea: ["BIOL162", "DEBD220"] },
  FMMP002: { nombre: "Fundamentos de Matemáticas", prerrequisitos: [], desbloquea: ["FMMP134", "DEBD130"] },
  QUIM002: { nombre: "Química General y Orgánica", prerrequisitos: [], desbloquea: ["BIMA540"] },
  BIMA030: { nombre: "Introducción a la Biología Marina", prerrequisitos: [], desbloquea: ["BIMA031"] },

  // Primer año - II Semestre
  BIOL162: { nombre: "Bioquímica General", prerrequisitos: ["BIOL034", "BIOL035"], desbloquea: ["BIOL152", "BIOL153"] },
  FMMP134: { nombre: "Cálculo Aplicado", prerrequisitos: ["FMMP002"], desbloquea: [] },
  DEBD220: { nombre: "Invertebrados Marinos", prerrequisitos: ["BIOL034", "BIOL035"], desbloquea: ["DEBD241"] },
  BIMA031: { nombre: "Buceo", prerrequisitos: ["BIMA030"], desbloquea: [] },
  ING119: { nombre: "Inglés I", prerrequisitos: [], desbloquea: ["ING129"] },
  CEGHC11: { nombre: "Habilidades Comunicativas", prerrequisitos: [], desbloquea: [] },

  // Segundo Año - III Semestre
  CFIS021: { nombre: "Física", prerrequisitos: [], desbloquea: ["BIMA540"] },
  DEBD241: { nombre: "Ictiología", prerrequisitos: ["DEBD220"], desbloquea: ["BIMA220"] },
  DEBD230: { nombre: "Botánica Marina", prerrequisitos: [], desbloquea: [] },
  DEBD130: { nombre: "Métodos Cuantitativos en RRNN", prerrequisitos: ["FMMP002"], desbloquea: ["DEBD240"] },
  ING129: { nombre: "Inglés II", prerrequisitos: ["ING119"], desbloquea: ["ING239"] },

  // Segundo Año - IV Semestre
  BIOL152: { nombre: "Microbiología General", prerrequisitos: ["BIOL162"], desbloquea: ["DEBD262"] },
  BIOL153: { nombre: "Laboratorio de Microbiología General", prerrequisitos: ["BIOL162"], desbloquea: ["DEBD262"] },
  DEBD240: { nombre: "Métodos Cuantitativos Multivariados", prerrequisitos: ["DEBD130"], desbloquea: ["BIMA275"] },
  BIMA540: { nombre: "Oceanografía Física y Química", prerrequisitos: ["QUIM002", "CFIS021"], desbloquea: ["BIMA550"] },
  DEBD140: { nombre: "Ecología General", prerrequisitos: [], desbloquea: ["DEBD250", "DEBD160", "DEBD263"] },
  ING239: { nombre: "Inglés III", prerrequisitos: ["ING129"], desbloquea: ["ING249"] },

  // Tercer Año - V Semestre
  BIMA220: { nombre: "Biología del Desarrollo", prerrequisitos: ["DEBD241"], desbloquea: ["DEBD260"] },
  DEBD250: { nombre: "Ecología Marina", prerrequisitos: ["DEBD140"], desbloquea: ["BIMA275"] },
  BIMA550: { nombre: "Plancton", prerrequisitos: ["BIMA540"], desbloquea: ["BIMA275"] },
  CEGT12: { nombre: "Razonamiento y Tecnología de la Información", prerrequisitos: [], desbloquea: [] },
  ING249: { nombre: "Inglés IV", prerrequisitos: ["ING239"], desbloquea: [] },

  // Tercer Año - VI Semestre
  DEBD260: { nombre: "Genética y Evolución", prerrequisitos: ["BIMA220"], desbloquea: [] },
  DEBD263: { nombre: "Ficología Aplicada", prerrequisitos: ["DEBD140"], desbloquea: ["BIMA352"] },
  DEBD262: { nombre: "Microbiología Marina", prerrequisitos: ["BIOL152", "BIOL153"], desbloquea: [] },
  DEBD261: { nombre: "Limnología", prerrequisitos: [], desbloquea: [] },
  DEBD160: { nombre: "Biología de la Conservación", prerrequisitos: ["DEBD140"], desbloquea: ["DEBD280"] },
  BIMA275: { nombre: "Integrador I: Técnicas de Muestreo Biológico", prerrequisitos: ["DEBD240", "DEBD250", "BIMA550"], desbloquea: ["BIMA440"] },

  // Cuarto Año - IIV Semestre (séptimo semestre)
  DEBD270: { nombre: "Aves y Mamíferos Marinos", prerrequisitos: [], desbloquea: [] },
  DEBD271: { nombre: "Contaminación y Ecotoxicología Acuática", prerrequisitos: [], desbloquea: ["BIMA440"] },
  IAMB662: { nombre: "Legislación y Evaluación de Impacto Ambiental", prerrequisitos: [], desbloquea: ["DEBD180", "DEBD280"] },
  BIMA352: { nombre: "Acuicultura", prerrequisitos: ["DEBD263"], desbloquea: ["BIMA455"] },
  CEGPC13: { nombre: "Pensamiento Crítico", prerrequisitos: [], desbloquea: [] },

  // Cuarto Año - IIIV Semestre (octavo semestre)
  DEBD280: { nombre: "Manejo y Uso del Borde Costero", prerrequisitos: ["DEBD160", "IAMB662"], desbloquea: ["BIMA440", "BIMA580", "DEBD180", "BIMA455"] },
  BIMA580: { nombre: "Elaboración y Análisis de Líneas Base Acuáticas", prerrequisitos: ["DEBD271"], desbloquea: ["BIMA440"] },
  DEBD180: { nombre: "Formulación y Evaluación de Proyectos de RRNN", prerrequisitos: ["IAMB662"], desbloquea: ["BIMA595", "BIMA440"] },
  BIMA455: { nombre: "Manejo de Recursos Marinos", prerrequisitos: ["BIMA352"], desbloquea: ["BIMA699"] },
  BIMA440: { nombre: "Integrador II: Estudio de casos", prerrequisitos: ["BIMA275", "DEBD280", "BIMA580", "DEBD180"], desbloquea: ["BIMA591"] },

  // Quinto Año - IX Semestre (noveno)
  BIMA490: { nombre: "Biotecnología Marina", prerrequisitos: [], desbloquea: [] },
  BIMA590: { nombre: "Transferencia Tecnológica", prerrequisitos: [], desbloquea: [] },
  BIMA453: { nombre: "Evaluación de Stock de Recursos Pesqueros", prerrequisitos: [], desbloquea: [] },
  BIMA596: { nombre: "Innovación y Emprendimiento", prerrequisitos: [], desbloquea: [] },
  BIMA591: { nombre: "Integrador III: Tesis I", prerrequisitos: ["BIMA440"], desbloquea: ["BIMA595"] },
  BIMA699: { nombre: "Práctica Profesional", prerrequisitos: [], desbloquea: [] },

  // Quinto Año - X Semestre (décimo)
  BIMA592: { nombre: "Electivo Profesional I", prerrequisitos: [], desbloquea: [] },
  BIMA593: { nombre: "Electivo Profesional II", prerrequisitos: [], desbloquea: [] },
  CEGRS14: { nombre: "Responsabilidad Social", prerrequisitos: [], desbloquea: [] },
  BIMA595: { nombre: "Integrador IV: Tesis II", prerrequisitos: ["BIMA591"], desbloquea: [] }
};

// Ramos aprobados desde el inicio (los del primer semestre)
let ramosAprobados = new Set([
  "BIOL034",
  "BIOL035",
  "FMMP002",
  "QUIM002",
  "BIMA030"
]);

// Al cargar la página
window.onload = () => {
  actualizarBloqueos();
};

// Mostrar info del ramo
function mostrarInfo(codigo) {
  const ramo = ramos[codigo];
  const aprobado = ramosAprobados.has(codigo);

  const content = ramo
    ? `<h2>${ramo.nombre}</h2>
      <p><strong>Código:</strong> ${codigo}</p>
      <p><strong>Estado:</strong> ${aprobado ? "✅ Aprobado" : "⛔ No aprobado"}</p>
      <p><strong>Prerrequisitos:</strong> ${ramo.prerrequisitos.length > 0 ? ramo.prerrequisitos.join(", ") : "Ninguno"}</p>
      <p><strong>Desbloquea:</strong> ${ramo.desbloquea.length > 0 ? ramo.desbloquea.join(", ") : "Ninguno"}</p>
      <button onclick="marcarAprobado('${codigo}')">Marcar como ${aprobado ? "No Aprobado ❌" : "Aprobado ✅"}</button>`
    : `<p>Ramo no encontrado.</p>`;

  document.getElementById("info-content").innerHTML = content;
  document.getElementById("info-box").classList.remove("hidden");
}

// Cerrar modal
function cerrarInfo() {
  document.getElementById("info-box").classList.add("hidden");
}

// Marcar como aprobado o no aprobado
function marcarAprobado(codigo) {
  if (ramosAprobados.has(codigo)) {
    ramosAprobados.delete(codigo);
  } else {
    // Solo permite aprobar si está desbloqueado
    if (estaDesbloqueado(codigo)) {
      ramosAprobados.add(codigo);
    } else {
      alert("Este ramo está bloqueado. Debes aprobar primero los prerrequisitos.");
    }
  }
  cerrarInfo();
  actualizarBloqueos();
}

// Verifica si un ramo está desbloqueado (cumple todos sus prereqs)
function estaDesbloqueado(codigo) {
  // Los del primer semestre ya están desbloqueados (sin prereqs)
  const prereqs = ramos[codigo]?.prerrequisitos || [];
  if (prereqs.length === 0) return true;
  return prereqs.every(req => ramosAprobados.has(req));
}

// Actualiza el estado visual de todos los ramos
function actualizarBloqueos() {
  for (const codigo in ramos) {
    // Busca el botón/elemento con onclick mostrarInfo del ramo
    const el = document.querySelector(`[onclick="mostrarInfo('${codigo}')"]`);
    if (!el) continue;

    if (ramosAprobados.has(codigo)) {
      el.style.opacity = "1";
      el.style.backgroundColor = "#a5d6a7"; // verde aprobado
      el.style.pointerEvents = "auto";
    } else if (estaDesbloqueado(codigo)) {
      el.style.opacity = "1";
      el.style.backgroundColor = "#4dd0e1"; // desbloqueado normal
      el.style.pointerEvents = "auto";
    } else {
      el.style.opacity = "0.3";
      el.style.backgroundColor = "#eeeeee"; // bloqueado gris
      el.style.pointerEvents = "none"; // no clickeable
    }
  }
}
