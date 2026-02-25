const data = {
  'aux-adm': {
    title: 'Auxiliar Administrativo',
    summary:
      'Programa tecnico orientado a apoyar procesos de oficina, atencion al usuario y gestion documental en instituciones publicas o privadas.',
    learn: [
      'Archivo, radicacion y control de documentos.',
      'Atencion al cliente y manejo de PQRS basico.',
      'Herramientas ofimaticas para reportes y seguimiento.'
    ],
    jobs: [
      'Asistente administrativo.',
      'Auxiliar de servicio al cliente.',
      'Apoyo en recepcion y gestion interna.'
    ],
    profile: ['Organizacion.', 'Buena comunicacion.', 'Trabajo en equipo.']
  },
  'aux-contable': {
    title: 'Auxiliar Contable y Financiero',
    summary:
      'Formacion para registrar operaciones basicas contables, apoyar procesos de cartera y colaborar en tareas financieras de la empresa.',
    learn: [
      'Comprobantes, conciliaciones y registros contables.',
      'Facturacion y control de ingresos-egresos.',
      'Manejo inicial de software contable.'
    ],
    jobs: ['Auxiliar contable.', 'Auxiliar de cartera.', 'Apoyo en tesoreria.'],
    profile: ['Analisis numerico.', 'Orden y detalle.', 'Responsabilidad.']
  },
  'aux-talento': {
    title: 'Auxiliar de Talento Humano',
    summary:
      'Capacitacion para apoyar procesos de seleccion, contratacion, bienestar laboral y administracion de personal.',
    learn: [
      'Publicacion de vacantes y filtro de hojas de vida.',
      'Apoyo en nomina y seguridad social.',
      'Documentacion y seguimiento de personal.'
    ],
    jobs: ['Auxiliar de talento humano.', 'Apoyo en bienestar.', 'Asistente de seleccion.'],
    profile: ['Empatia.', 'Discrecion.', 'Buenas relaciones interpersonales.']
  },
  cocina: {
    title: 'Cocina Nacional e Internacional',
    summary:
      'Programa practico para desarrollar habilidades culinarias, estandares de higiene y montaje de preparaciones para distintos tipos de cocina.',
    learn: [
      'Tecnicas base de cocina fria y caliente.',
      'Manipulacion higienica y seguridad alimentaria.',
      'Presentacion de platos y mise en place.'
    ],
    jobs: ['Auxiliar de cocina.', 'Apoyo en restaurantes.', 'Emprendimiento gastronomico.'],
    profile: ['Creatividad.', 'Disciplina.', 'Trabajo bajo presion.']
  },
  investigacion: {
    title: 'Investigadores Criminalisticos y Judiciales',
    summary:
      'Formacion para apoyar recoleccion de informacion, manejo de evidencia y elaboracion de informes de apoyo a procesos judiciales.',
    learn: [
      'Cadena de custodia y preservacion de evidencia.',
      'Tecnicas de observacion y entrevista.',
      'Redaccion de informes tecnico-judiciales.'
    ],
    jobs: ['Auxiliar de investigacion.', 'Apoyo en seguridad.', 'Asistente tecnico judicial.'],
    profile: ['Pensamiento critico.', 'Etica.', 'Atencion al detalle.']
  },
  modas: {
    title: 'Diseno, Confeccion y Mercadeo de Modas',
    summary:
      'Ruta formativa que integra diseno textil, confeccion de prendas y herramientas de comercializacion para proyectos de moda.',
    learn: [
      'Patronaje, corte y confeccion.',
      'Tendencias, color y conceptualizacion de colecciones.',
      'Bases de marca y venta de producto de moda.'
    ],
    jobs: ['Auxiliar de confeccion.', 'Asistente de diseno.', 'Emprendimiento de marca propia.'],
    profile: ['Sentido estetico.', 'Constancia.', 'Innovacion.']
  },
  veterinaria: {
    title: 'Auxiliar en Clinica Veterinaria',
    summary:
      'Programa orientado al apoyo clinico veterinario, cuidado basico del paciente y acompanamiento en procedimientos rutinarios.',
    learn: [
      'Manejo basico de pacientes y bioseguridad.',
      'Apoyo en consulta, hospitalizacion y farmacia.',
      'Orientacion al cuidador sobre bienestar animal.'
    ],
    jobs: ['Auxiliar en clinica veterinaria.', 'Apoyo en pet shop.', 'Asistente de bienestar animal.'],
    profile: ['Vocacion de servicio.', 'Paciencia.', 'Responsabilidad.']
  },
  enfermeria: {
    title: 'Auxiliar en Enfermeria',
    summary:
      'Capacitacion para brindar apoyo al personal de salud en procedimientos basicos y acompanamiento del paciente.',
    learn: [
      'Toma de signos vitales y control basico.',
      'Apoyo en procedimientos y cuidado inicial.',
      'Registro y seguimiento de informacion clinica.'
    ],
    jobs: ['Auxiliar en instituciones de salud.', 'Apoyo domiciliario.', 'Asistente en programas comunitarios.'],
    profile: ['Humanidad.', 'Compromiso.', 'Trabajo en equipo.']
  },
  idiomas: {
    title: 'Conocimientos Academicos en Ingles y Frances',
    summary:
      'Formacion para fortalecer competencias comunicativas en ingles y frances aplicadas al estudio y al entorno laboral.',
    learn: [
      'Comprension y produccion oral-escrita.',
      'Vocabulario academico y profesional.',
      'Expresion para presentaciones y entrevistas.'
    ],
    jobs: ['Apoyo bilingue basico.', 'Servicio al cliente.', 'Base para formaciones internacionales.'],
    profile: ['Interes por idiomas.', 'Practica constante.', 'Buena escucha.']
  },
  animacion: {
    title: 'Animacion 2D y 3D',
    summary:
      'Programa creativo para desarrollar proyectos visuales animados con herramientas digitales de la industria.',
    learn: [
      'Principios de animacion y narrativa visual.',
      'Modelado y composicion digital.',
      'Produccion de piezas para medios digitales.'
    ],
    jobs: ['Asistente de animacion.', 'Apoyo en contenido digital.', 'Freelance creativo.'],
    profile: ['Creatividad.', 'Perseverancia.', 'Gusto por tecnologia.']
  },
  seguridad: {
    title: 'Seguridad Ocupacional',
    summary:
      'Capacitacion para apoyar la prevencion de riesgos laborales y la implementacion de practicas seguras en la empresa.',
    learn: [
      'Identificacion de peligros y evaluacion inicial.',
      'Apoyo en inspecciones y reportes.',
      'Promocion de cultura de prevencion.'
    ],
    jobs: ['Auxiliar SST.', 'Apoyo en seguridad industrial.', 'Asistente de prevencion de riesgos.'],
    profile: ['Liderazgo.', 'Observacion.', 'Disciplina normativa.']
  },
  software: {
    title: 'Operaciones de Software y Redes de Computo',
    summary:
      'Programa tecnico para brindar soporte de sistemas, mantenimiento de equipos y asistencia en conectividad de red.',
    learn: [
      'Instalacion y configuracion de software.',
      'Mantenimiento preventivo y correctivo basico.',
      'Diagnostico inicial de redes y conectividad.'
    ],
    jobs: ['Auxiliar de soporte TI.', 'Mesa de ayuda.', 'Asistente de infraestructura basica.'],
    profile: ['Logica.', 'Resolucion de problemas.', 'Orientacion al usuario.']
  }
};

const params = new URLSearchParams(window.location.search);
const key = params.get('curso');
const selected = data[key] || data['aux-adm'];

document.getElementById('courseTitle').textContent = selected.title;
document.getElementById('courseSummary').textContent = selected.summary;

function fillList(id, items) {
  const target = document.getElementById(id);
  target.innerHTML = '';
  items.forEach((text) => {
    const li = document.createElement('li');
    li.textContent = text;
    target.appendChild(li);
  });
}

fillList('courseLearn', selected.learn);
fillList('courseJobs', selected.jobs);
fillList('courseProfile', selected.profile);
