$pages = @(
  @{
    file = "google-meet.html"
    title = "Google Meet"
    tag = "En vivo"
    meta = "Clases sincronizadas · Coordinación con profesor"
    lead = "Charlas y temas orientados a tu curso o carrera, vinculadas clase a clase con el profesor mediante Google Meet."
    blocks = @(
      @{ h = "Cómo funciona"; items = @(
        "Cada clase del programa tiene su sesión en Meet, agendada y publicada en el aula virtual.",
        "El profesor coordina temas, ejercicios y espacios de consulta en vivo.",
        "Las charlas complementarias (invitados, repasos, Q&A) también se dictan por Meet.",
        "Grabaciones disponibles para quienes no puedan asistir en directo."
      )}
      @{ h = "Para el estudiante"; items = @(
        "Accedés al link de Meet desde tu aula virtual, sin buscar enlaces sueltos.",
        "Participás con cámara y micrófono en dinámicas prácticas y trabajo en grupo.",
        "Recibís recordatorios antes de cada sesión vinculada a tu módulo."
      )}
    )
  },
  @{
    file = "nivelacion.html"
    title = "Cursos de nivelación"
    tag = "Gratis"
    meta = "Acceso gratuito · Pre-carrera"
    lead = "Cursos introductorios de nivelación gratuitos para llegar al mismo punto de partida antes de arrancar tu carrera."
    blocks = @(
      @{ h = "Qué incluye"; items = @(
        "Módulos de fundamentos según la carrera elegida: lógica, matemática, herramientas o inglés técnico.",
        "Material en aula virtual con videos, lecturas y ejercicios de autocorrección.",
        "Sin costo: incluido en tu proceso de admisión a VOROX.",
        "Certificado de nivelación al completar los módulos obligatorios."
      )}
      @{ h = "Cuándo conviene"; items = @(
        "Si nunca programaste y vas a Full Stack o Data Science.",
        "Si necesitás refrescar conceptos antes del inicio de cohorte.",
        "Si el test vocacional o el asesor te recomiendan reforzar bases."
      )}
    )
  },
  @{
    file = "aula-virtual.html"
    title = "Aula virtual"
    tag = "Online"
    meta = "En vivo y asincrónico · Campus digital"
    lead = "Aula virtual para cursos y carreras en vivo y online: cronograma, materiales, clases y seguimiento en un solo lugar."
    blocks = @(
      @{ h = "Tu campus digital"; items = @(
        "Cronograma semanal con clases en vivo, deadlines y checkpoints.",
        "Materiales, slides, notebooks y enlaces a Meet por cada clase.",
        "Entrega de tareas, quizzes y proyectos desde la misma plataforma.",
        "Historial de avance y comunicación con profesores y tutores."
      )}
      @{ h = "Coordinación con el profesor"; items = @(
        "Cada módulo publica su syllabus, objetivos y criterios de evaluación.",
        "Foros o consultas por clase para dudas entre sesiones.",
        "Feedback personalizado sobre entregas y proyectos."
      )}
    )
  },
  @{
    file = "agente-ia.html"
    title = "Agente IA de acompañamiento"
    tag = "IA"
    meta = "24/7 · Cursado y empleabilidad"
    lead = "Asistente con inteligencia artificial entrenado con toda la información de las clases para acompañarte durante el cursado y tu inserción laboral."
    blocks = @(
      @{ h = "Qué puede hacer"; items = @(
        "Responder dudas sobre contenidos de cada clase y módulo.",
        "Sugerir repasos según tu avance y resultados en quizzes.",
        "Ayudarte a preparar entrevistas técnicas y optimizar tu CV.",
        "Orientarte en el proyecto final y portfolio de VOROX Lab."
      )}
      @{ h = "Cómo se alimenta"; items = @(
        "Indexa syllabus, apuntes, código de ejemplo y FAQs del curso.",
        "Se actualiza cuando el profesor publica nuevos materiales.",
        "Complementa — no reemplaza — la mentoría humana de VOROX."
      )}
    )
  },
  @{
    file = "whatsapp.html"
    title = "Grupo WhatsApp"
    tag = "Comunidad"
    meta = "Por curso · Avisos y soporte"
    lead = "Grupo de WhatsApp por curso para avisos, consultas rápidas y coordinación con compañeros y el equipo VOROX."
    blocks = @(
      @{ h = "Uso del grupo"; items = @(
        "Avisos de clase, cambios de horario y recordatorios de entregas.",
        "Enlaces directos a Meet y materiales del día.",
        "Canal informal para dudas rápidas entre compañeros.",
        "Moderado por coordinación académica para mantener el foco."
      )}
      @{ h = "Buenas prácticas"; items = @(
        "Consultas técnicas profundas van al Discord o al profesor.",
        "Respeto, horarios razonables y sin spam comercial.",
        "Solo alumnos activos de la cohorte tienen acceso."
      )}
    )
  },
  @{
    file = "discord.html"
    title = "Discord VOROX"
    tag = "Comunidad"
    meta = "Alumnos y profesores · Canales por materia"
    lead = "Servidor de Discord para alumnos y profesores: mentorías, networking y resolución de dudas entre clases."
    blocks = @(
      @{ h = "Estructura del servidor"; items = @(
        "Canales por carrera, módulo y proyecto.",
        "Salas de voz para pair programming y study groups.",
        "Profesores y mentores con horarios de office hours.",
        "Anuncios, recursos y eventos de la comunidad VOROX."
      )}
      @{ h = "Beneficios"; items = @(
        "Networking con alumnos de otras cohortes y países.",
        "Historial de conversaciones técnicas para consultar después.",
        "Integración con bots de recordatorios y roles por nivel."
      )}
    )
  },
  @{
    file = "editor-codigo.html"
    title = "Editor de código"
    tag = "Proyectos"
    meta = "IDE en el navegador · Ejecutar y testear"
    lead = "Plataforma con editor de código integrado para crear, ejecutar y testear tus proyectos sin salir del campus virtual."
    blocks = @(
      @{ h = "Funcionalidades"; items = @(
        "Editor con syntax highlighting para los lenguajes de tu carrera.",
        "Ejecución en sandbox y consola integrada.",
        "Tests automáticos en ejercicios y desafíos semanales.",
        "Exportar o publicar directo a VOROX Lab y GitHub."
      )}
      @{ h = "En la práctica"; items = @(
        "Resolvés ejercicios de clase sin instalar entorno local (opcional local también).",
        "Proyectos evaluados con mismos tests que usa el profesor.",
        "Ideal para pair programming en vivo durante Meet o Discord."
      )}
    )
  },
  @{
    file = "vorox-lab.html"
    title = "VOROX Lab"
    tag = "Portfolio"
    meta = "Biblioteca de proyectos · Exhibición"
    lead = "Biblioteca donde se almacenan y exhiben los proyectos de alumnos — tu portfolio crece clase a clase."
    blocks = @(
      @{ h = "Qué es VOROX Lab"; items = @(
        "Repositorio curado de proyectos finales y entregas destacadas.",
        "Fichas con stack, descripción, demo y enlace al código.",
        "Visible para empresas aliadas que buscan talento VOROX.",
        "Versionado por cohorte y carrera."
      )}
      @{ h = "Tu portfolio"; items = @(
        "Publicás proyectos aprobados con un clic desde el aula.",
        "Recibís feedback de mentores antes de exhibir.",
        "Compartís tu perfil de Lab en LinkedIn y entrevistas."
      )}
    )
  },
  @{
    file = "quiz.html"
    title = "Quiz y ejercicios prácticos"
    tag = "Práctica"
    meta = "Feedback inmediato · Por módulo"
    lead = "Quizzes para ejercicios prácticos con corrección automática y feedback para reforzar cada módulo."
    blocks = @(
      @{ h = "Tipos de evaluación"; items = @(
        "Preguntas de opción múltiple, código y casos cortos.",
        "Intentos múltiples con pistas progresivas.",
        "Nota mínima para avanzar al siguiente módulo (según carrera).",
        "Reportes de desempeño para vos y tu tutor."
      )}
      @{ h = "Integración"; items = @(
        "Vinculados a cada clase del syllabus en el aula virtual.",
        "El agente IA sugiere repaso según tus respuestas incorrectas.",
        "Complementan proyectos y entregas semanales."
      )}
    )
  },
  @{
    file = "campus-empleo.html"
    title = "Campus de empleabilidad"
    tag = "Empleo"
    meta = "CV · Entrevistas · Ofertas"
    lead = "Monitor y herramientas para búsqueda de empleo, armado de CV y preparación para entrevistas técnicas."
    blocks = @(
      @{ h = "Herramientas"; items = @(
        "Constructor de CV con plantillas validadas por RR.HH. tech.",
        "Simulador de entrevistas técnicas y comportamentales.",
        "Tablero de ofertas de empresas aliadas VOROX.",
        "Seguimiento de postulaciones y recordatorios."
      )}
      @{ h = "Acompañamiento"; items = @(
        "Career coach asignado en etapa final de la carrera.",
        "Revisiones de portfolio y perfil LinkedIn.",
        "Conexión directa con empresas del carrusel de egresados."
      )}
    )
  },
  @{
    file = "certificacion.html"
    title = "Certificación oficial"
    tag = "Certificado"
    meta = "Dos copias · Aval VOROX"
    lead = "Al completar tu carrera recibís certificado oficial VOROX con dos copias: una digital y una física para empleadores."
    blocks = @(
      @{ h = "Entrega"; items = @(
        "Certificado digital con código verificable online.",
        "Copia física enviada o retiro en sede según tu país.",
        "Detalle de módulos, horas y competencias adquiridas.",
        "Válido para presentar ante empresas y procesos de selección."
      )}
      @{ h = "Requisitos"; items = @(
        "Aprobar evaluaciones y proyecto final de la carrera.",
        "Asistencia mínima a clases en vivo (según programa).",
        "Entregas de quizzes y proyectos al día."
      )}
    )
  },
  @{
    file = "pagos.html"
    title = "Plataforma de pago"
    tag = "Pagos"
    meta = "Argentina · Paraguay"
    lead = "Pagá en tu moneda local: pesos argentinos (ARG) o guaraníes paraguayos (PY), con medios adaptados a cada país."
    blocks = @(
      @{ h = "Argentina (ARG)"; items = @(
        "Precios en pesos argentinos.",
        "Transferencia, débito y medios locales integrados.",
        "Cuotas en carreras seleccionadas.",
        "Facturación según normativa vigente."
      )}
      @{ h = "Paraguay (PY)"; items = @(
        "Precios en guaraníes paraguayos.",
        "Opciones de pago locales y cuotas según plan.",
        "Confirmación automática y acceso al aula virtual.",
        "Soporte de facturación con el equipo administrativo."
      )}
    )
  },
  @{
    file = "e-commerce.html"
    title = "E-commerce VOROX"
    tag = "Tienda"
    meta = "Inscripciones · Materiales"
    lead = "Tienda online para inscripciones, materiales, merchandising y productos complementarios del ecosistema educativo."
    blocks = @(
      @{ h = "Qué podés comprar"; items = @(
        "Inscripción y renovación de carreras.",
        "Materiales opcionales y bundles de estudio.",
        "Merchandising y productos de la comunidad VOROX.",
        "Addons: mentorías extra, certificaciones adicionales."
      )}
      @{ h = "Experiencia"; items = @(
        "Carrito unificado con la plataforma de pago local.",
        "Historial de compras en tu cuenta de alumno.",
        "Promociones por referidos y early bird.",
        "Soporte post-venta integrado con WhatsApp y aula."
      )}
    )
  }
)

function Get-PageHtml($p) {
  $blocksHtml = ""
  foreach ($b in $p.blocks) {
    $itemsHtml = ($b.items | ForEach-Object { "            <li>$_</li>`n" }) -join ""
    $blocksHtml += @"
        <div class="feature-block">
          <h2>$($b.h)</h2>
          <ul class="feature-list">
$itemsHtml          </ul>
        </div>

"@
  }

  return @"
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="$($p.lead)" />
  <title>$($p.title) | VOROX Academia</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Raleway:wght@400;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../styles.css?v=platform-pages" />
</head>
<body>

  <header class="navbar" id="navbar">
    <div class="container navbar__inner">
      <a href="../index.html#inicio" class="navbar__logo" aria-label="VOROX Academia">
        <img src="../assets/logo-vorox.png?v=academia" alt="VOROX Academia" class="logo" width="171" height="48" />
      </a>
      <div class="navbar__actions">
        <div class="navbar__buttons">
          <a href="#" class="btn btn--cta btn--sm">Ingresar</a>
        </div>
      </div>
    </div>
  </header>

  <main>
    <section class="feature-hero">
      <div class="container">
        <a href="../index.html#plataforma" class="feature-hero__back">← Ecosistema VOROX</a>
        <span class="feature-hero__tag">$($p.tag)</span>
        <h1>$($p.title)</h1>
        <p class="feature-hero__lead">$($p.lead)</p>
        <p class="feature-hero__meta">$($p.meta)</p>
        <div class="feature-hero__actions">
          <a href="../index.html#inscripcion" class="btn btn--cta btn--lg">Quiero información</a>
          <a href="../index.html#plataforma" class="btn btn--outline-nav btn--lg">Ver todo el ecosistema</a>
        </div>
      </div>
    </section>

    <section class="feature-section">
      <div class="container feature-content">
$blocksHtml      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer__bottom" style="border:none;padding:24px 0;">
      <p>&copy; 2026 VOROX Academia. <a href="../index.html#plataforma" style="color:var(--yellow);">Volver al ecosistema</a></p>
    </div>
  </footer>

  <script src="../script.js?v=platform-pages"></script>
</body>
</html>
"@
}

$outDir = Join-Path $PSScriptRoot "..\plataforma"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

foreach ($page in $pages) {
  $html = Get-PageHtml $page
  $path = Join-Path $outDir $page.file
  Set-Content -Path $path -Value $html -Encoding UTF8
  Write-Host "Created $path"
}

Write-Host "Done: $($pages.Count) pages"
