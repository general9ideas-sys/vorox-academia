window.FS_MODULES = [
  {
    id: 1,
    title: "Fundamentos de desarrollo web",
    weeks: "2 semanas",
    lessons: [
      {
        n: 1,
        title: "¿Qué es el desarrollo web full stack?",
        duration: "90 min",
        objectives: [
          "Definir desarrollo full stack y sus capas principales",
          "Identificar tecnologías típicas de frontend, backend y datos",
          "Reconocer perfiles profesionales y rutas de especialización"
        ],
        content: "<p>El desarrollo <strong>full stack</strong> abarca la construcción completa de aplicaciones web: interfaz de usuario, lógica de servidor, bases de datos e infraestructura de despliegue. Un desarrollador full stack puede participar en todo el ciclo, desde el diseño de una pantalla hasta la API que persiste los datos.</p><p>Las capas principales son: <strong>frontend</strong> (HTML, CSS, JavaScript, frameworks como React), <strong>backend</strong> (Node.js, Express, APIs REST), <strong>datos</strong> (SQL, NoSQL) y <strong>DevOps básico</strong> (Git, Docker, deploy).</p><ul><li><strong>Frontend:</strong> lo que ve e interactúa el usuario.</li><li><strong>Backend:</strong> reglas de negocio, autenticación y persistencia.</li><li><strong>Full stack:</strong> integración coherente de ambos mundos.</li></ul>",
        code: "",
        exercise: "Elige una app que uses a diario (por ejemplo, un banco online o una red social). Dibuja un diagrama simple indicando qué partes serían frontend, backend y base de datos. Enumera al menos tres tecnologías que imaginas que usa cada capa."
      },
      {
        n: 2,
        title: "Cómo funciona la web: clientes, servidores y protocolos",
        duration: "90 min",
        objectives: [
          "Explicar el ciclo request-response entre navegador y servidor",
          "Diferenciar HTTP, HTTPS, DNS y URLs",
          "Interpretar códigos de estado HTTP comunes"
        ],
        content: "<p>Cuando visitás una página, el navegador (cliente) envía una <strong>solicitud HTTP</strong> a un servidor. El servidor procesa la petición, consulta datos si hace falta y devuelve una respuesta con HTML, JSON u otro formato.</p><p>El protocolo <strong>HTTPS</strong> cifra la comunicación mediante TLS. <strong>DNS</strong> traduce nombres como <code>vorox.com</code> en direcciones IP. Una URL incluye esquema, dominio, puerto, ruta y parámetros de consulta.</p><p>Códigos HTTP frecuentes: <code>200</code> OK, <code>201</code> creado, <code>400</code> petición inválida, <code>401</code> no autenticado, <code>404</code> no encontrado, <code>500</code> error del servidor.</p>",
        code: "// Ejemplo de petición con fetch (navegador)\nfetch('https://api.ejemplo.com/productos')\n  .then(res => {\n    console.log('Status:', res.status);\n    return res.json();\n  })\n  .then(data => console.log(data))\n  .catch(err => console.error('Error de red:', err));",
        exercise: "Abrí las DevTools del navegador (pestaña Network), recargá una página y analizá tres peticiones. Para cada una anotá: método HTTP, URL, código de estado y tipo de recurso (document, script, fetch)."
      },
      {
        n: 3,
        title: "Herramientas del desarrollador: VS Code, terminal y npm",
        duration: "90 min",
        objectives: [
          "Configurar VS Code con extensiones esenciales para web",
          "Ejecutar comandos básicos en terminal (Windows/macOS/Linux)",
          "Inicializar un proyecto Node.js con npm"
        ],
        content: "<p>Un entorno profesional incluye editor, terminal y gestor de paquetes. <strong>VS Code</strong> con extensiones como ESLint, Prettier, Live Server y GitLens acelera el desarrollo diario.</p><p>La terminal permite navegar carpetas (<code>cd</code>, <code>ls</code>/<code>dir</code>), crear archivos y ejecutar scripts. <strong>npm</strong> (Node Package Manager) instala dependencias y define scripts en <code>package.json</code>.</p><p>Convenciones útiles: un proyecto por carpeta, <code>.gitignore</code> para excluir <code>node_modules</code>, y README con instrucciones de instalación.</p>",
        code: "# Crear proyecto\nmkdir mi-primer-proyecto\ncd mi-primer-proyecto\nnpm init -y\nnpm install express\n\n# package.json incluirá:\n# \"scripts\": { \"start\": \"node index.js\" }",
        exercise: "Creá una carpeta de proyecto, inicializá npm con `npm init -y` e instalá `express`. Agregá un script `start` en package.json que ejecute un archivo index.js con un console.log. Corré `npm start` desde la terminal."
      },
      {
        n: 4,
        title: "Git y GitHub para proyectos colaborativos",
        duration: "90 min",
        objectives: [
          "Usar Git para versionar código con commits descriptivos",
          "Trabajar con ramas, merge y resolución básica de conflictos",
          "Publicar repositorios y colaborar con pull requests"
        ],
        content: "<p><strong>Git</strong> registra el historial de cambios de tu código. Cada <strong>commit</strong> es un snapshot con mensaje claro. Las <strong>ramas</strong> permiten desarrollar features en paralelo sin romper la rama principal (<code>main</code>).</p><p>Flujo típico: <code>git clone</code> → crear rama → editar → <code>git add</code> → <code>git commit</code> → <code>git push</code> → abrir Pull Request en GitHub. Los PR facilitan revisión de código antes de integrar.</p><p>Buenas prácticas: commits pequeños y atómicos, mensajes en imperativo (\"Agrega validación de email\"), nunca commitear secretos ni <code>node_modules</code>.</p>",
        code: "git init\ngit add .\ngit commit -m \"Agrega estructura inicial del proyecto\"\ngit branch feature/navbar\ngit checkout feature/navbar\n# ... trabajar ...\ngit checkout main\ngit merge feature/navbar",
        exercise: "Inicializá un repo Git local, hacé al menos tres commits con mensajes descriptivos y creá una rama `feature/readme`. Subí el proyecto a GitHub y abrí un Pull Request (aunque sea solo para practicar el flujo)."
      },
      {
        n: 5,
        title: "Metodologías ágiles y flujo de trabajo en equipos tech",
        duration: "90 min",
        objectives: [
          "Comprender Scrum, sprints y ceremonias básicas",
          "Estimar tareas y priorizar backlog de producto",
          "Aplicar Definition of Done en entregas de software"
        ],
        content: "<p>Los equipos de desarrollo suelen trabajar con metodologías <strong>ágiles</strong>. Scrum organiza el trabajo en <strong>sprints</strong> (1-2 semanas) con objetivos concretos. Ceremonias clave: planning, daily standup, review y retrospectiva.</p><p>El <strong>backlog</strong> lista historias de usuario priorizadas. Cada ticket debe ser estimable, testeable y tener criterios de aceptación claros. La <strong>Definition of Done</strong> define qué significa \"terminado\": código revisado, tests pasando, documentado y desplegado en staging.</p><p>Comunicación asíncrona (Slack, issues en GitHub) y documentación breve reducen fricción en equipos remotos.</p>",
        code: "",
        exercise: "Escribí tres user stories para una app de tareas (formato: \"Como [rol], quiero [acción], para [beneficio]\"). Para cada una definí criterios de aceptación y estimación en puntos de story (1, 2, 3, 5, 8)."
      }
    ]
  },
  {
    id: 2,
    title: "HTML y CSS moderno",
    weeks: "2 semanas",
    lessons: [
      {
        n: 6,
        title: "Introducción a HTML semántico",
        duration: "90 min",
        objectives: [
          "Estructurar documentos con etiquetas semánticas HTML5",
          "Usar encabezados, párrafos, listas y enlaces correctamente",
          "Validar accesibilidad básica con landmarks y texto alternativo"
        ],
        content: "<p>HTML describe la <strong>estructura y significado</strong> del contenido. HTML5 introduce etiquetas semánticas: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code>. Esto mejora SEO y lectores de pantalla.</p><p>Jerarquía de encabezados (<code>h1</code>-<code>h6</code>) debe ser lógica: un solo <code>h1</code> por página. Las imágenes requieren atributo <code>alt</code> descriptivo. Los enlaces usan texto significativo, no \"click aquí\".</p><p>Un documento mínimo incluye <code>&lt;!DOCTYPE html&gt;</code>, <code>lang</code>, <code>meta charset</code> y <code>viewport</code> para responsive.</p>",
        code: "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Mi Portfolio</title>\n</head>\n<body>\n  <header>\n    <h1>María López — Desarrolladora Web</h1>\n    <nav aria-label=\"Principal\">\n      <a href=\"#proyectos\">Proyectos</a>\n      <a href=\"#contacto\">Contacto</a>\n    </nav>\n  </header>\n  <main>\n    <section id=\"proyectos\">\n      <h2>Proyectos destacados</h2>\n      <article>\n        <h3>App de tareas</h3>\n        <p>CRUD con React y Node.js.</p>\n      </article>\n    </section>\n  </main>\n  <footer><p>&copy; 2026 María López</p></footer>\n</body>\n</html>",
        exercise: "Creá una página de portfolio personal con HTML semántico: header, nav, main con al menos dos sections, y footer. Incluí un h1, tres h2, una lista de habilidades y una imagen con alt descriptivo. Validá en validator.w3.org."
      },
      {
        n: 7,
        title: "Formularios, accesibilidad y buenas prácticas HTML",
        duration: "90 min",
        objectives: [
          "Construir formularios accesibles con labels y tipos de input",
          "Aplicar atributos ARIA básicos cuando corresponda",
          "Asociar validación HTML5 nativa con feedback al usuario"
        ],
        content: "<p>Los formularios son el puente entre usuario y backend. Cada campo debe tener un <code>&lt;label for=\"id\"&gt;</code> asociado al input. Tipos útiles: <code>email</code>, <code>password</code>, <code>number</code>, <code>tel</code>, <code>date</code>.</p><p>Accesibilidad: contraste suficiente, foco visible, navegación por teclado, mensajes de error vinculados con <code>aria-describedby</code>. HTML5 ofrece validación nativa con atributos <code>required</code>, <code>minlength</code>, <code>pattern</code>.</p><p>Evitá depender solo del placeholder como label. Agrupá campos relacionados con <code>&lt;fieldset&gt;</code> y <code>&lt;legend&gt;</code>.</p>",
        code: "<form action=\"/registro\" method=\"post\" novalidate>\n  <div>\n    <label for=\"email\">Correo electrónico</label>\n    <input id=\"email\" name=\"email\" type=\"email\" required\n           aria-describedby=\"email-hint\" />\n    <small id=\"email-hint\">Usaremos tu correo solo para acceso.</small>\n  </div>\n  <div>\n    <label for=\"password\">Contraseña</label>\n    <input id=\"password\" name=\"password\" type=\"password\"\n           minlength=\"8\" required />\n  </div>\n  <button type=\"submit\">Crear cuenta</button>\n</form>",
        exercise: "Armá un formulario de contacto accesible con campos nombre, email, asunto y mensaje. Agregá validación HTML5 (required, minlength) y probá navegarlo solo con teclado (Tab, Enter)."
      },
      {
        n: 8,
        title: "CSS: selectores, box model y cascada",
        duration: "90 min",
        objectives: [
          "Aplicar selectores CSS (elemento, clase, ID, combinadores)",
          "Calcular dimensiones con box model (content, padding, border, margin)",
          "Resolver especificidad y herencia en la cascada"
        ],
        content: "<p>CSS controla presentación visual. <strong>Selectores</strong> apuntan a elementos: <code>.clase</code>, <code>#id</code>, <code>div p</code> (descendiente), <code>ul &gt; li</code> (hijo directo), <code>a:hover</code> (pseudo-clase).</p><p>El <strong>box model</strong> define que cada elemento es una caja con content, padding, border y margin. <code>box-sizing: border-box</code> incluye padding y border en el width declarado — práctica recomendada global.</p><p><strong>Especificidad</strong> determina qué regla gana: inline &gt; ID &gt; clase &gt; elemento. Usá clases reutilizables en lugar de estilos inline excesivos.</p>",
        code: "*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.card {\n  width: 320px;\n  padding: 1.5rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n\n.card h2 {\n  margin-top: 0;\n  color: #1e293b;\n}\n\n.card--destacada {\n  border-color: #3b82f6;\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);\n}",
        exercise: "Estilizá tu página de portfolio: reset con border-box, tipografía base, y al menos tres componentes (.card, .btn, .nav-link) usando clases. Experimentá cambiando especificidad y observá qué regla prevalece."
      },
      {
        n: 9,
        title: "Flexbox para layouts modernos",
        duration: "90 min",
        objectives: [
          "Configurar contenedores flex con direction, wrap y gap",
          "Alinear y distribuir items con justify y align",
          "Construir navbar y cards responsive con Flexbox"
        ],
        content: "<p><strong>Flexbox</strong> organiza elementos en una dimensión (fila o columna). El contenedor usa <code>display: flex</code>. Propiedades clave del contenedor: <code>flex-direction</code>, <code>flex-wrap</code>, <code>justify-content</code>, <code>align-items</code>, <code>gap</code>.</p><p>En items: <code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code> o shorthand <code>flex: 1</code>. Flexbox resuelve centrado vertical/horizontal, navbars y filas de cards sin floats.</p><p>Patrón común: navbar con <code>justify-content: space-between</code> y <code>align-items: center</code>.</p>",
        code: ".navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background: #0f172a;\n  color: #fff;\n}\n\n.nav-links {\n  display: flex;\n  gap: 1.5rem;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.cards {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n}\n\n.card {\n  flex: 1 1 280px;\n}",
        exercise: "Convertí la navbar de tu portfolio a Flexbox. Debajo, creá una fila de tres cards que se apilen en columna en pantallas estrechas usando flex-wrap. Probá distintos valores de justify-content."
      },
      {
        n: 10,
        title: "CSS Grid y diseño responsive",
        duration: "90 min",
        objectives: [
          "Definir grillas con grid-template-columns y grid-template-areas",
          "Combinar Grid con media queries para breakpoints",
          "Elegir Flexbox vs Grid según el layout requerido"
        ],
        content: "<p><strong>CSS Grid</strong> diseña layouts en dos dimensiones. Definís columnas y filas explícitas: <code>grid-template-columns: repeat(3, 1fr)</code> o <code>1fr 2fr</code>. <code>gap</code> separa celdas sin márgenes hack.</p><p><strong>Responsive design</strong> adapta la UI al viewport con <strong>media queries</strong>: <code>@media (max-width: 768px) { ... }</code>. Mobile-first parte de estilos base móviles y agrega complejidad en pantallas grandes.</p><p>Regla práctica: Flexbox para componentes lineales (nav, toolbar); Grid para layouts de página (sidebar + contenido + aside).</p>",
        code: ".layout {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  grid-template-areas: \"sidebar main\";\n  min-height: 100vh;\n  gap: 0;\n}\n\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; padding: 2rem; }\n\n@media (max-width: 768px) {\n  .layout {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      \"sidebar\"\n      \"main\";\n  }\n}",
        exercise: "Rediseñá tu portfolio con CSS Grid: header a ancho completo, sidebar de navegación y área main. Agregá un breakpoint a 768px donde sidebar pase arriba del contenido. Probá en DevTools con modo responsive."
      },
      {
        n: 11,
        title: "Variables CSS, transiciones y animaciones",
        duration: "90 min",
        objectives: [
          "Centralizar diseño con custom properties (variables CSS)",
          "Aplicar transiciones suaves en hover y focus",
          "Crear animaciones keyframe accesibles y performantes"
        ],
        content: "<p>Las <strong>custom properties</strong> (<code>--color-primary</code>) viven en <code>:root</code> y permiten theming consistente. Se consumen con <code>var(--color-primary)</code> y pueden cambiar en media queries o clases (.dark-theme).</p><p><strong>Transiciones</strong> animan cambios de propiedad: <code>transition: color 0.2s ease, transform 0.2s</code>. Preferí animar <code>transform</code> y <code>opacity</code> por performance (evitar layout thrashing).</p><p><strong>@keyframes</strong> define animaciones cíclicas. Respetá <code>prefers-reduced-motion</code> para usuarios sensibles al movimiento.</p>",
        code: ":root {\n  --color-primary: #3b82f6;\n  --color-bg: #f8fafc;\n  --radius: 8px;\n  --shadow: 0 4px 12px rgba(0,0,0,0.08);\n}\n\n.btn {\n  background: var(--color-primary);\n  color: #fff;\n  border: none;\n  border-radius: var(--radius);\n  padding: 0.75rem 1.5rem;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.btn:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .btn { transition: none; }\n}",
        exercise: "Definí un sistema de diseño mínimo con al menos 5 variables CSS (colores, spacing, radius). Aplicá transiciones a botones y links. Agregá una animación sutil de entrada (@keyframes fadeIn) en las cards respetando prefers-reduced-motion."
      }
    ]
  },
  {
    id: 3,
    title: "JavaScript esencial",
    weeks: "2 semanas",
    lessons: [
      {
        n: 12,
        title: "Fundamentos de JavaScript",
        duration: "90 min",
        objectives: [
          "Declarar variables con let, const y tipos primitivos",
          "Usar condicionales, bucles y funciones",
          "Aplicar operadores de comparación estricta (===)"
        ],
        content: "<p>JavaScript es el lenguaje del navegador y también del backend (Node.js). Usá <code>const</code> por defecto y <code>let</code> cuando reasignás. Evitá <code>var</code> en código moderno.</p><p>Tipos primitivos: string, number, boolean, null, undefined, symbol, bigint. Funciones pueden ser declaraciones o arrow functions: <code>(a, b) =&gt; a + b</code>.</p><p>Comparación estricta <code>===</code> evita coerción implícita. Template literals (<code>`Hola ${nombre}`</code>) facilitan strings dinámicos.</p>",
        code: "const PI = 3.14159;\n\nfunction areaCirculo(radio) {\n  return PI * radio ** 2;\n}\n\nconst esMayorDeEdad = (edad) => edad >= 18;\n\nfor (let i = 1; i <= 3; i++) {\n  console.log(`Iteración ${i}, área r=2:`, areaCirculo(2));\n}\n\nconsole.log(esMayorDeEdad(17)); // false",
        exercise: "Escribí un script que reciba (hardcodeado) nombre, edad y lista de precios. Calculá el total con un bucle, aplicá 10% de descuento si el total supera 1000, e imprimí un mensaje personalizado con template literals."
      },
      {
        n: 13,
        title: "Arrays, objetos y métodos modernos",
        duration: "90 min",
        objectives: [
          "Manipular arrays con map, filter, reduce y find",
          "Crear y destructurar objetos anidados",
          "Aplicar spread y rest operator en funciones y colecciones"
        ],
        content: "<p>Los <strong>arrays</strong> almacenan colecciones ordenadas. Métodos funcionales evitan mutaciones innecesarias: <code>map</code> transforma, <code>filter</code> filtra, <code>reduce</code> acumula, <code>find</code> busca el primero que cumple condición.</p><p>Los <strong>objetos</strong> modelan entidades con propiedades. Destructuring extrae valores: <code>const { nombre, edad } = usuario</code>. Spread copia o combina: <code>{ ...defaults, ...overrides }</code>.</p><p>Estos patrones son la base de React (props, state) y de manipular respuestas JSON de APIs.</p>",
        code: "const productos = [\n  { id: 1, nombre: 'Teclado', precio: 45, stock: 10 },\n  { id: 2, nombre: 'Mouse', precio: 25, stock: 0 },\n  { id: 3, nombre: 'Monitor', precio: 180, stock: 5 }\n];\n\nconst disponibles = productos.filter(p => p.stock > 0);\nconst nombres = disponibles.map(p => p.nombre);\nconst total = disponibles.reduce((acc, p) => acc + p.precio, 0);\n\nconsole.log({ nombres, total });",
        exercise: "Partí de un array de 8 estudiantes con nombre y nota. Obtené: (1) aprobados (nota >= 6), (2) promedio general con reduce, (3) el mejor estudiante con reduce o sort. No uses bucles for tradicionales."
      },
      {
        n: 14,
        title: "DOM manipulation y eventos",
        duration: "90 min",
        objectives: [
          "Seleccionar y modificar elementos del DOM",
          "Escuchar eventos click, input y submit",
          "Crear y eliminar nodos dinámicamente"
        ],
        content: "<p>El <strong>DOM</strong> representa el HTML como árbol de nodos. JavaScript puede leer y modificar contenido, clases y estilos. Selectores: <code>document.querySelector</code>, <code>getElementById</code>.</p><p>Los <strong>event listeners</strong> reaccionan a interacción: <code>addEventListener('click', handler)</code>. En formularios, <code>preventDefault()</code> evita recarga al submit.</p><p>Para listas dinámicas, creá nodos con <code>document.createElement</code> o insertá HTML con cuidado (preferí createElement para evitar XSS).</p>",
        code: "const lista = document.querySelector('#tareas');\nconst input = document.querySelector('#nueva-tarea');\nconst form = document.querySelector('#form-tareas');\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const texto = input.value.trim();\n  if (!texto) return;\n\n  const li = document.createElement('li');\n  li.textContent = texto;\n  li.classList.add('tarea-item');\n  lista.appendChild(li);\n  input.value = '';\n});",
        exercise: "Construí una mini app de lista de tareas en HTML+JS: agregar tarea, marcar completada (toggle class) y eliminar. Persistí las tareas en localStorage y recargá la página para verificar que se mantienen."
      },
      {
        n: 15,
        title: "Async JavaScript: promises, async/await y fetch",
        duration: "90 min",
        objectives: [
          "Diferenciar código síncrono y asíncrono en JavaScript",
          "Encadenar Promises y usar async/await con try/catch",
          "Consumir APIs REST públicas con fetch"
        ],
        content: "<p>Operaciones asíncronas (red, timers, archivos) no bloquean el hilo principal. Las <strong>Promises</strong> representan un valor futuro: pending → fulfilled/rejected. <code>async/await</code> escribe código asíncrono con aspecto síncrono.</p><p><strong>fetch</strong> realiza peticiones HTTP. Siempre verificá <code>response.ok</code> antes de parsear JSON. Manejá errores con try/catch y mostrá feedback al usuario.</p><p>Patrón típico en frontend: cargar datos al iniciar, mostrar loading, renderizar resultado o error.</p>",
        code: "async function obtenerUsuarios() {\n  const loading = document.querySelector('#loading');\n  loading.hidden = false;\n\n  try {\n    const res = await fetch('https://jsonplaceholder.typicode.com/users');\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    const usuarios = await res.json();\n    return usuarios;\n  } catch (err) {\n    console.error('Error al cargar usuarios:', err);\n    throw err;\n  } finally {\n    loading.hidden = true;\n  }\n}\n\nobtenerUsuarios().then(u => console.log(u.length));",
        exercise: "Consumí la API JSONPlaceholder (/posts) y renderizá una lista de títulos en el DOM. Mostrá un spinner o texto \"Cargando...\" mientras esperás. Si falla la red, mostrá mensaje de error amigable."
      },
      {
        n: 16,
        title: "ES6+ modules y organización de código",
        duration: "90 min",
        objectives: [
          "Separar código en módulos con import y export",
          "Organizar carpetas por responsabilidad (utils, api, components)",
          "Configurar type module en HTML o bundler básico"
        ],
        content: "<p>Los <strong>módulos ES6</strong> dividen el código en archivos reutilizables. Export named: <code>export function suma(a,b)</code>. Export default: un componente o clase principal por archivo. Import: <code>import { suma } from './math.js'</code>.</p><p>Estructura sugerida: <code>src/utils/</code>, <code>src/api/</code>, <code>src/components/</code>, <code>src/main.js</code>. En HTML: <code>&lt;script type=\"module\" src=\"main.js\"&gt;</code>.</p><p>Modularizar facilita tests, code review y trabajo en equipo. Evitá archivos monolíticos de miles de líneas.</p>",
        code: "// src/utils/format.js\nexport function formatearPrecio(monto, moneda = 'USD') {\n  return new Intl.NumberFormat('es-AR', {\n    style: 'currency',\n    currency: moneda\n  }).format(monto);\n}\n\n// src/main.js\nimport { formatearPrecio } from './utils/format.js';\nconsole.log(formatearPrecio(1299.99));",
        exercise: "Refactorizá tu app de tareas separando: (1) módulo storage.js para localStorage, (2) módulo dom.js para manipular la UI, (3) main.js que orquesta. Usá import/export y script type=\"module\"."
      },
      {
        n: 17,
        title: "Debug y manejo de errores en JavaScript",
        duration: "90 min",
        objectives: [
          "Usar console, breakpoints y DevTools para depurar",
          "Implementar try/catch/finally y errores personalizados",
          "Registrar errores de forma útil sin exponer datos sensibles"
        ],
        content: "<p>Depurar es habilidad central. <strong>console.log</strong> ayuda pero los <strong>breakpoints</strong> en DevTools Sources permiten inspeccionar variables paso a paso. La pestaña Network muestra fallos de fetch.</p><p><code>try/catch</code> captura errores en runtime. Podés lanzar errores descriptivos: <code>throw new Error('Email inválido')</code>. Clases custom extienden <code>Error</code> para tipos de fallo de dominio.</p><p>En producción, logueá contexto (timestamp, acción) pero nunca passwords ni tokens. Mostrá mensajes genéricos al usuario y detalle técnico solo en logs.</p>",
        code: "class ValidationError extends Error {\n  constructor(campo, mensaje) {\n    super(mensaje);\n    this.name = 'ValidationError';\n    this.campo = campo;\n  }\n}\n\nfunction validarEmail(email) {\n  if (!email || !email.includes('@')) {\n    throw new ValidationError('email', 'Formato de email inválido');\n  }\n  return email.toLowerCase().trim();\n}\n\ntry {\n  validarEmail('usuario-sin-arroba');\n} catch (err) {\n  if (err instanceof ValidationError) {\n    console.warn(`Campo ${err.campo}: ${err.message}`);\n  } else {\n    console.error('Error inesperado', err);\n  }\n}",
        exercise: "Agregá validación robusta a tu formulario de contacto: función validate() que lance ValidationError por campo. Mostrá errores inline en la UI. Probá con breakpoints en DevTools al submit."
      }
    ]
  },
  {
    id: 4,
    title: "React y frontend moderno",
    weeks: "2 semanas",
    lessons: [
      {
        n: 18,
        title: "Introducción a React y componentes",
        duration: "90 min",
        objectives: [
          "Comprender el modelo de componentes y Virtual DOM",
          "Crear un proyecto React con Vite",
          "Renderizar componentes funcionales básicos"
        ],
        content: "<p><strong>React</strong> construye interfaces con componentes reutilizables. Cada componente es una función que retorna JSX (HTML-like). React actualiza el DOM de forma eficiente comparando el Virtual DOM.</p><p>Con <strong>Vite</strong> iniciás rápido: <code>npm create vite@latest mi-app -- --template react</code>. Estructura típica: <code>src/App.jsx</code>, <code>src/main.jsx</code>, componentes en <code>src/components/</code>.</p><p>Principio clave: UI = f(state). Los componentes reciben datos y describen cómo debe verse la interfaz.</p>",
        code: "import { createRoot } from 'react-dom/client';\nimport App from './App.jsx';\n\ncreateRoot(document.getElementById('root')).render(\n  <App />\n);\n\n// App.jsx\nfunction App() {\n  return (\n    <main>\n      <h1>Bienvenido a mi app React</h1>\n      <p>Componentes = bloques reutilizables de UI.</p>\n    </main>\n  );\n}\n\nexport default App;",
        exercise: "Creá un proyecto React con Vite. Implementá tres componentes: Header, Main y Footer en archivos separados. Importálos en App.jsx y verificá que rendericen correctamente con npm run dev."
      },
      {
        n: 19,
        title: "JSX, props y composición",
        duration: "90 min",
        objectives: [
          "Escribir JSX válido con expresiones JavaScript",
          "Pasar y tipar props entre componentes padre e hijo",
          "Componer interfaces con children y componentes pequeños"
        ],
        content: "<p><strong>JSX</strong> mezcla markup con lógica. Reglas: un solo elemento raíz (o Fragment <code>&lt;&gt;</code>), className en lugar de class, expresiones entre llaves <code>{variable}</code>.</p><p><strong>Props</strong> son argumentos del componente, inmutables desde el hijo. Composición favorece muchos componentes pequeños sobre props gigantes. <code>children</code> permite slots de contenido.</p><p>Diseñá APIs de componentes claras: Button con variant y size; Card con title, children y optional footer.</p>",
        code: "function Badge({ label, variant = 'default' }) {\n  return <span className={`badge badge--${variant}`}>{label}</span>;\n}\n\nfunction Card({ title, children, footer }) {\n  return (\n    <article className=\"card\">\n      <h2>{title}</h2>\n      <div className=\"card__body\">{children}</div>\n      {footer && <footer className=\"card__footer\">{footer}</footer>}\n    </article>\n  );\n}\n\n// Uso:\n// <Card title=\"React\" footer={<Badge label=\"Nuevo\" variant=\"info\" />}>\n//   <p>Contenido del curso.</p>\n// </Card>",
        exercise: "Creá componentes Button, Badge y Card con props documentadas. Armá una página que muestre 4 cards de cursos usando composición y map sobre un array de datos."
      },
      {
        n: 20,
        title: "Estado con useState y useEffect",
        duration: "90 min",
        objectives: [
          "Gestionar estado local con el hook useState",
          "Ejecutar efectos secundarios con useEffect y dependencias",
          "Evitar renders innecesarios y bugs de stale state"
        ],
        content: "<p><strong>useState</strong> agrega estado a componentes funcionales: <code>const [count, setCount] = useState(0)</code>. Actualizaciones son asíncronas; usá forma funcional <code>setCount(c =&gt; c + 1)</code> cuando dependés del valor previo.</p><p><strong>useEffect</strong> corre después del render: fetching, suscripciones, sincronizar con localStorage. El array de dependencias controla cuándo re-ejecutar. Cleanup en return para evitar memory leaks.</p><p>No abuses de useEffect para derivar estado que podés calcular en render.</p>",
        code: "import { useState, useEffect } from 'react';\n\nfunction Contador() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `Clicks: ${count}`;\n    return () => { document.title = 'Mi App'; };\n  }, [count]);\n\n  return (\n    <div>\n      <p>Contador: {count}</p>\n      <button onClick={() => setCount(c => c + 1)}>+1</button>\n    </div>\n  );\n}",
        exercise: "Implementá un contador con incremento, decremento y reset. Sincronizá el valor con localStorage usando useEffect. Al recargar la página, el contador debe restaurar su último valor."
      },
      {
        n: 21,
        title: "Formularios controlados y listas en React",
        duration: "90 min",
        objectives: [
          "Manejar inputs controlados con state unificado",
          "Renderizar listas con map y keys estables",
          "Implementar CRUD básico en memoria para una lista de items"
        ],
        content: "<p>En formularios <strong>controlados</strong>, React es la fuente de verdad: <code>value={email} onChange={e =&gt; setEmail(e.target.value)}</code>. Un objeto de state para todo el formulario simplifica validación.</p><p>Listas se renderizan con <code>items.map(item =&gt; &lt;li key={item.id}&gt;...)</code>. La <code>key</code> debe ser estable y única (preferí ID, no índice si hay reorder/delete).</p><p>Patrón CRUD: state array, funciones add/update/delete que retornan nuevo array (inmutabilidad).</p>",
        code: "import { useState } from 'react';\n\nfunction TodoList() {\n  const [tareas, setTareas] = useState([]);\n  const [texto, setTexto] = useState('');\n\n  const agregar = (e) => {\n    e.preventDefault();\n    if (!texto.trim()) return;\n    setTareas(prev => [...prev, { id: crypto.randomUUID(), texto }]);\n    setTexto('');\n  };\n\n  const eliminar = (id) => {\n    setTareas(prev => prev.filter(t => t.id !== id));\n  };\n\n  return (\n    <form onSubmit={agregar}>\n      <input value={texto} onChange={e => setTexto(e.target.value)} />\n      <button type=\"submit\">Agregar</button>\n      <ul>{tareas.map(t => (\n        <li key={t.id}>{t.texto} <button onClick={() => eliminar(t.id)}>X</button></li>\n      ))}</ul>\n    </form>\n  );\n}",
        exercise: "Construí una app Todo List completa en React: agregar, completar (checkbox), filtrar (todas/activas/completadas) y eliminar. Usá IDs únicos y estado inmutable."
      },
      {
        n: 22,
        title: "React Router y navegación SPA",
        duration: "90 min",
        objectives: [
          "Configurar rutas con React Router v6",
          "Implementar navegación con Link y NavLink",
          "Manejar rutas dinámicas y página 404"
        ],
        content: "<p>Una <strong>SPA</strong> (Single Page Application) cambia vistas sin recargar el documento. <strong>React Router</strong> mapea URLs a componentes: <code>&lt;Routes&gt;</code>, <code>&lt;Route path=\"/\" element={&lt;Home /&gt;} /&gt;</code>.</p><p><code>Link</code> y <code>NavLink</code> navegan sin full reload. NavLink aplica clase active automáticamente. Rutas dinámicas: <code>/productos/:id</code> con <code>useParams()</code>.</p><p>Layout routes con <code>&lt;Outlet /&gt;</code> comparten navbar entre páginas hijas.</p>",
        code: "import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';\n\nfunction Layout() {\n  return (\n    <>\n      <nav>\n        <Link to=\"/\">Inicio</Link>\n        <Link to=\"/about\">Acerca de</Link>\n      </nav>\n      <Outlet />\n    </>\n  );\n}\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route element={<Layout />}>\n          <Route path=\"/\" element={<Home />} />\n          <Route path=\"/about\" element={<About />} />\n          <Route path=\"*\" element={<NotFound />} />\n        </Route>\n      </Routes>\n    </BrowserRouter>\n  );\n}",
        exercise: "Agregá React Router a tu app: rutas Home, Cursos (/cursos), Detalle (/cursos/:id) y 404. Creá un layout con navbar persistente. Pasá el id de curso a la página de detalle con useParams."
      },
      {
        n: 23,
        title: "Context API y consumo de APIs en React",
        duration: "90 min",
        objectives: [
          "Compartir estado global con createContext y useContext",
          "Separar lógica de fetch en custom hooks",
          "Manejar estados loading, success y error en UI"
        ],
        content: "<p><strong>Context</strong> evita prop drilling: ThemeContext, AuthContext o CartContext. Provider envuelve el árbol; consumidores usan <code>useContext</code>. No reemplaza a un state manager complejo, pero sirve para estado global moderado.</p><p>Custom hooks encapsulan fetch: <code>useFetch(url)</code> retorna { data, loading, error }. Separar UI de lógica mejora testabilidad.</p><p>Mostrá skeletons o spinners en loading, contenido en success, y retry button en error.</p>",
        code: "import { createContext, useContext, useState, useEffect } from 'react';\n\nconst ThemeContext = createContext('light');\n\nfunction useFetch(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    setLoading(true);\n    fetch(url)\n      .then(r => r.json())\n      .then(setData)\n      .catch(setError)\n      .finally(() => setLoading(false));\n  }, [url]);\n\n  return { data, loading, error };\n}",
        exercise: "Creá ThemeContext (light/dark) con toggle en navbar. Implementá useFetch y una página Posts que liste datos de JSONPlaceholder mostrando loading y error states. Aplicá estilos distintos según el tema."
      }
    ]
  },
  {
    id: 5,
    title: "Node.js y backend con Express",
    weeks: "2 semanas",
    lessons: [
      {
        n: 24,
        title: "Introducción a Node.js y npm",
        duration: "90 min",
        objectives: [
          "Explicar el event loop y modelo non-blocking de Node.js",
          "Gestionar dependencias y scripts con npm",
          "Crear un servidor HTTP básico sin framework"
        ],
        content: "<p><strong>Node.js</strong> ejecuta JavaScript en el servidor con motor V8. Su modelo <strong>non-blocking I/O</strong> y event loop permiten manejar muchas conexiones concurrentes sin un hilo por request.</p><p>npm gestiona paquetes en <code>node_modules</code> y lockfile (<code>package-lock.json</code>). Scripts comunes: <code>start</code>, <code>dev</code> (con nodemon), <code>test</code>.</p><p>El módulo <code>http</code> nativo crea servidores básicos; en producción se usa Express u otro framework por ergonomía.</p>",
        code: "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  if (req.url === '/api/health' && req.method === 'GET') {\n    res.writeHead(200, { 'Content-Type': 'application/json' });\n    res.end(JSON.stringify({ status: 'ok', uptime: process.uptime() }));\n    return;\n  }\n  res.writeHead(404);\n  res.end('Not Found');\n});\n\nserver.listen(3000, () => console.log('Servidor en http://localhost:3000'));",
        exercise: "Creá un servidor HTTP nativo con rutas GET / (mensaje de bienvenida) y GET /api/health (JSON). Probá con curl o navegador. Luego migrá el mismo comportamiento a Express en la siguiente práctica."
      },
      {
        n: 25,
        title: "Express: rutas, middleware y REST",
        duration: "90 min",
        objectives: [
          "Configurar una app Express con rutas modulares",
          "Usar middleware para parsing JSON y logging",
          "Diseñar endpoints RESTful para un recurso CRUD"
        ],
        content: "<p><strong>Express</strong> simplifica routing y middleware. <code>app.use(express.json())</code> parsea body JSON. Los middlewares son funciones <code>(req, res, next) =&gt; {}</code> encadenadas.</p><p>APIs <strong>REST</strong> usan verbos HTTP sobre recursos: GET /productos, POST /productos, GET /productos/:id, PUT/PATCH, DELETE. Respuestas JSON con códigos HTTP apropiados.</p><p>Organizá routers por dominio: <code>routes/productos.js</code> montado en <code>app.use('/api/productos', productosRouter)</code>.</p>",
        code: "const express = require('express');\nconst app = express();\napp.use(express.json());\n\nlet productos = [{ id: 1, nombre: 'Notebook', precio: 999 }];\n\napp.get('/api/productos', (req, res) => res.json(productos));\n\napp.post('/api/productos', (req, res) => {\n  const { nombre, precio } = req.body;\n  const nuevo = { id: Date.now(), nombre, precio };\n  productos.push(nuevo);\n  res.status(201).json(nuevo);\n});\n\napp.listen(3000, () => console.log('API en puerto 3000'));",
        exercise: "Implementá CRUD completo in-memory para /api/tareas (id, titulo, completada). Usá códigos 200, 201, 404 correctamente. Probá todos los endpoints con Thunder Client o curl."
      },
      {
        n: 26,
        title: "Validación de datos y manejo de errores",
        duration: "90 min",
        objectives: [
          "Validar request body con librerías como Zod o express-validator",
          "Centralizar errores con middleware de error handling",
          "Devolver respuestas de error consistentes en JSON"
        ],
        content: "<p>Nunca confíes en input del cliente. Validá tipo, formato y rangos antes de persistir. <strong>Zod</strong> define schemas declarativos; <strong>express-validator</strong> encadena reglas en rutas.</p><p>Middleware de errores (4 parámetros: err, req, res, next) captura excepciones y devuelve formato uniforme: <code>{ error: { code, message } }</code>.</p><p>Diferenciá errores de validación (400), no encontrado (404), no autorizado (401) y fallos internos (500 sin filtrar stack al cliente).</p>",
        code: "const { z } = require('zod');\n\nconst tareaSchema = z.object({\n  titulo: z.string().min(1).max(200),\n  completada: z.boolean().optional().default(false)\n});\n\napp.post('/api/tareas', (req, res, next) => {\n  const result = tareaSchema.safeParse(req.body);\n  if (!result.success) {\n    return res.status(400).json({ error: result.error.flatten() });\n  }\n  // crear tarea con result.data\n  res.status(201).json(result.data);\n});\n\napp.use((err, req, res, next) => {\n  console.error(err);\n  res.status(500).json({ error: { message: 'Error interno' } });\n});",
        exercise: "Agregá validación Zod a POST y PATCH de tareas. Implementá middleware de errores global. Intentá enviar payloads inválidos y verificá respuestas 400 estructuradas."
      },
      {
        n: 27,
        title: "Archivos estáticos y servir el frontend",
        duration: "90 min",
        objectives: [
          "Servir assets estáticos con express.static",
          "Integrar build de React en el mismo servidor Express",
          "Configurar proxy de desarrollo entre Vite y API"
        ],
        content: "<p>En producción, Express puede servir el build de React desde <code>dist/</code> con <code>express.static</code>. Rutas API bajo <code>/api</code>; fallback <code>*</code> devuelve index.html para SPA routing.</p><p>En desarrollo, Vite corre en puerto 5173 y proxyea <code>/api</code> a Express en 3000 — evita CORS y mantiene DX rápida.</p><p>Separá configuración por entorno: variables en .env, CORS restrictivo en producción.</p>",
        code: "const path = require('path');\nconst express = require('express');\nconst app = express();\n\napp.use('/api', apiRouter);\n\nif (process.env.NODE_ENV === 'production') {\n  app.use(express.static(path.join(__dirname, 'dist')));\n  app.get('*', (req, res) => {\n    res.sendFile(path.join(__dirname, 'dist', 'index.html'));\n  });\n}\n\n// vite.config.js (dev):\n// server: { proxy: { '/api': 'http://localhost:3000' } }",
        exercise: "Buildá tu frontend React (npm run build) y servilo desde Express en producción. Configurá proxy en Vite para desarrollo. Verificá que /api funcione y que rutas del SPA no den 404 al refrescar."
      },
      {
        n: 28,
        title: "Middleware avanzado y arquitectura por capas",
        duration: "90 min",
        objectives: [
          "Separar controllers, services y repositories",
          "Implementar middleware de autenticación básico",
          "Aplicar principios SOLID en backend Node.js"
        ],
        content: "<p>Proyectos escalables usan <strong>capas</strong>: routes → controllers (HTTP) → services (lógica) → repositories (datos). Cada capa tiene una responsabilidad clara.</p><p>Middleware de auth verifica token o sesión antes de rutas protegidas. Logger middleware registra método, path y duración. Rate limiting protege contra abuso.</p><p>Evitá lógica de negocio en handlers de ruta; facilita testing unitario de services sin HTTP.</p>",
        code: "// services/tareaService.js\nfunction crearTarea(repo, datos) {\n  if (!datos.titulo?.trim()) throw new Error('Título requerido');\n  return repo.create(datos);\n}\n\n// middleware/auth.js\nfunction requireAuth(req, res, next) {\n  const header = req.headers.authorization;\n  if (!header?.startsWith('Bearer ')) {\n    return res.status(401).json({ error: 'Token requerido' });\n  }\n  // verificar JWT...\n  next();\n}\n\n// routes\nrouter.post('/', requireAuth, tareaController.create);",
        exercise: "Refactorizá tu API de tareas en carpetas routes/, controllers/, services/ y data/ (array in-memory). Agregá middleware requireAuth mock que acepte Bearer test-token. Documentá la estructura en README."
      },
      {
        n: 29,
        title: "Integración con servicios externos",
        duration: "90 min",
        objectives: [
          "Consumir APIs de terceros desde el backend",
          "Manejar timeouts, retries y API keys de forma segura",
          "Cachear respuestas frecuentes para reducir latencia"
        ],
        content: "<p>El backend actúa como <strong>BFF</strong> (Backend for Frontend): oculta API keys, normaliza respuestas y aplica reglas de negocio. Nunca expongas secretos en el cliente.</p><p>Usá variables de entorno para keys. Configurá timeout en fetch/axios. Cache en memoria o Redis para datos que cambian poco (tipos de cambio, catálogos).</p><p>Manejá rate limits del proveedor y degradación graceful si el servicio externo falla.</p>",
        code: "require('dotenv').config();\nconst express = require('express');\nconst app = express();\n\nconst cache = new Map();\n\napp.get('/api/clima/:ciudad', async (req, res) => {\n  const { ciudad } = req.params;\n  if (cache.has(ciudad)) return res.json(cache.get(ciudad));\n\n  try {\n    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.WEATHER_KEY}`;\n    const r = await fetch(url);\n    if (!r.ok) throw new Error('Clima no disponible');\n    const data = await r.json();\n    cache.set(ciudad, data);\n    res.json(data);\n  } catch (err) {\n    res.status(502).json({ error: 'Servicio externo falló' });\n  }\n});",
        exercise: "Creá un endpoint /api/exchange-rates que consuma una API pública de tipos de cambio. Guardá la API key en .env. Implementá cache de 10 minutos en memoria. Probá respuesta cacheada vs fresh."
      }
    ]
  },
  {
    id: 6,
    title: "Bases de datos SQL y NoSQL",
    weeks: "2 semanas",
    lessons: [
      {
        n: 30,
        title: "Modelado relacional y SQL básico",
        duration: "90 min",
        objectives: [
          "Diseñar tablas con claves primarias y foráneas",
          "Escribir consultas SELECT, INSERT, UPDATE y DELETE",
          "Aplicar normalización básica para reducir redundancia"
        ],
        content: "<p>Las bases <strong>relacionales</strong> organizan datos en tablas con filas y columnas tipadas. Clave primaria identifica cada fila; claves foráneas enlazan tablas (usuarios → pedidos).</p><p>SQL esencial: <code>SELECT * FROM productos WHERE precio &gt; 100 ORDER BY nombre</code>, <code>INSERT INTO ...</code>, <code>UPDATE ... WHERE id = 1</code>, <code>DELETE ...</code>.</p><p>Normalización (1FN, 2FN, 3FN) reduce duplicación. Ejemplo: no repetir datos de cliente en cada pedido; referenciar user_id.</p>",
        code: "CREATE TABLE usuarios (\n  id SERIAL PRIMARY KEY,\n  email VARCHAR(255) UNIQUE NOT NULL,\n  nombre VARCHAR(100) NOT NULL,\n  created_at TIMESTAMP DEFAULT NOW()\n);\n\nCREATE TABLE tareas (\n  id SERIAL PRIMARY KEY,\n  usuario_id INT REFERENCES usuarios(id),\n  titulo VARCHAR(200) NOT NULL,\n  completada BOOLEAN DEFAULT FALSE\n);\n\nINSERT INTO tareas (usuario_id, titulo)\nVALUES (1, 'Aprender SQL');\n\nSELECT titulo, completada FROM tareas WHERE usuario_id = 1;",
        exercise: "Diseñá un esquema ER para una app de blog: usuarios, posts, comentarios y tags (N:M). Escribí DDL CREATE TABLE y tres consultas: posts recientes, comentarios de un post, tags más usados."
      },
      {
        n: 31,
        title: "JOINs, agregaciones y consultas avanzadas",
        duration: "90 min",
        objectives: [
          "Combinar tablas con INNER, LEFT y RIGHT JOIN",
          "Usar GROUP BY, HAVING y funciones de agregación",
          "Optimizar consultas con índices básicos"
        ],
        content: "<p><strong>JOIN</strong> une tablas por condición: INNER devuelve coincidencias; LEFT incluye filas de la izquierda aunque no haya match. Esencial para reportes relacionales.</p><p>Agregaciones: <code>COUNT</code>, <code>SUM</code>, <code>AVG</code>, <code>MAX</code>, <code>MIN</code> con <code>GROUP BY</code>. <code>HAVING</code> filtra grupos (como WHERE pero post-agrupación).</p><p>Índices en columnas de búsqueda frecuente (email, foreign keys) aceleran SELECT pero ralentizan INSERT — diseñá con criterio.</p>",
        code: "SELECT u.nombre, COUNT(t.id) AS total_tareas\nFROM usuarios u\nLEFT JOIN tareas t ON t.usuario_id = u.id\nGROUP BY u.id, u.nombre\nHAVING COUNT(t.id) > 0\nORDER BY total_tareas DESC;\n\n-- Promedio de precio por categoría\nSELECT c.nombre, AVG(p.precio)::numeric(10,2) AS precio_promedio\nFROM productos p\nINNER JOIN categorias c ON c.id = p.categoria_id\nGROUP BY c.nombre;",
        exercise: "Sobre tu esquema de blog, escribí: (1) LEFT JOIN posts sin comentarios, (2) COUNT comentarios por post, (3) top 5 autores con más posts. Explicá qué JOIN elegiste y por qué."
      },
      {
        n: 32,
        title: "PostgreSQL en proyectos reales",
        duration: "90 min",
        objectives: [
          "Instalar y conectar PostgreSQL local o en la nube",
          "Usar transacciones para operaciones atómicas",
          "Aplicar migraciones para evolucionar el esquema"
        ],
        content: "<p><strong>PostgreSQL</strong> es RDBMS robusto, open source y muy usado en producción. Soporta JSON, arrays, constraints e integridad referencial estricta.</p><p><strong>Transacciones</strong> garantizan atomicidad: BEGIN → operaciones → COMMIT o ROLLBACK si algo falla. Crítico en transferencias o creación de pedido + items.</p><p><strong>Migraciones</strong> versionan cambios de esquema (tablas nuevas, columnas) de forma reproducible en dev/staging/prod.</p>",
        code: "BEGIN;\n\nUPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;\nUPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;\n\nINSERT INTO movimientos (desde, hacia, monto)\nVALUES (1, 2, 100);\n\nCOMMIT;\n-- Si falla cualquier paso: ROLLBACK;",
        exercise: "Instalá PostgreSQL (o usá Supabase/Neon free tier). Creá tu esquema de tareas/blog, insertá datos de prueba y ejecutá una transacción que falle a propósito para verificar ROLLBACK."
      },
      {
        n: 33,
        title: "Introducción a MongoDB y NoSQL",
        duration: "90 min",
        objectives: [
          "Comparar modelos relacional vs documental",
          "Diseñar documentos JSON en colecciones MongoDB",
          "Ejecutar CRUD con el driver oficial o Mongoose"
        ],
        content: "<p><strong>NoSQL documental</strong> (MongoDB) almacena BSON flexible. Ideal para catálogos variables, content management o prototipado rápido. Trade-off: menos joins nativos, más responsabilidad en diseño de documentos.</p><p>Patrones: embedding (datos relacionados dentro del doc) vs referencing (ObjectId a otra colección). Embedding para lecturas frecuentes juntas; referencing para relaciones N:M grandes.</p><p>Mongoose añade schemas, validación y middleware sobre MongoDB en Node.js.</p>",
        code: "const mongoose = require('mongoose');\n\nconst tareaSchema = new mongoose.Schema({\n  titulo: { type: String, required: true },\n  completada: { type: Boolean, default: false },\n  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }\n}, { timestamps: true });\n\nconst Tarea = mongoose.model('Tarea', tareaSchema);\n\n// Crear\nconst t = await Tarea.create({ titulo: 'Deploy app', usuario: userId });\n\n// Leer con populate\nconst lista = await Tarea.find({ usuario: userId }).populate('usuario');",
        exercise: "Modelá un catálogo de productos con variantes (talle, color) en MongoDB. Decidí qué embeber y qué referenciar. Implementá CRUD con Mongoose desde un script Node.js."
      },
      {
        n: 34,
        title: "ORMs y conexión desde Node.js",
        duration: "90 min",
        objectives: [
          "Conectar Express a PostgreSQL con Prisma o Sequelize",
          "Mapear modelos ORM a tablas SQL existentes",
          "Reemplazar almacenamiento in-memory por persistencia real"
        ],
        content: "<p>Los <strong>ORMs</strong> abstraen SQL con objetos y métodos tipados. <strong>Prisma</strong> usa schema declarativo y client generado; <strong>Sequelize</strong> es ORM clásico para Node.</p><p>Flujo Prisma: definir modelos en schema.prisma → migración → PrismaClient en services. Ventajas: type safety, migraciones, queries legibles.</p><p>Migrá tu API de tareas de array in-memory a PostgreSQL. Mantené la misma interfaz REST; solo cambia la capa de datos.</p>",
        code: "// schema.prisma\n// model Tarea {\n//   id        Int      @id @default(autoincrement())\n//   titulo    String\n//   completada Boolean @default(false)\n//   createdAt DateTime @default(now())\n// }\n\nconst { PrismaClient } = require('@prisma/client');\nconst prisma = new PrismaClient();\n\nasync function listarTareas() {\n  return prisma.tarea.findMany({ orderBy: { createdAt: 'desc' } });\n}\n\nasync function crearTarea(titulo) {\n  return prisma.tarea.create({ data: { titulo } });\n}",
        exercise: "Integrá Prisma en tu API de tareas: schema, migración, y reemplazá el array in-memory. Verificá que CRUD persista tras reiniciar el servidor. Documentá comandos prisma migrate en README."
      }
    ]
  },
  {
    id: 7,
    title: "Autenticación, testing y deploy",
    weeks: "2 semanas",
    lessons: [
      {
        n: 35,
        title: "Autenticación con JWT y sesiones",
        duration: "90 min",
        objectives: [
          "Diferenciar autenticación y autorización",
          "Implementar registro, login y hash de passwords con bcrypt",
          "Emitir y verificar JSON Web Tokens en rutas protegidas"
        ],
        content: "<p><strong>Autenticación</strong> verifica identidad (¿quién sos?); <strong>autorización</strong> verifica permisos (¿qué podés hacer?). Nunca guardes passwords en texto plano: usá <strong>bcrypt</strong> con salt.</p><p><strong>JWT</strong> es token firmado con payload (userId, exp). Tras login exitoso, el servidor emite JWT; el cliente lo envía en header Authorization: Bearer. Middleware verifica firma y expiración.</p><p>Refresh tokens y cookies httpOnly son alternativas más seguras para apps web con sesiones largas.</p>",
        code: "const bcrypt = require('bcrypt');\nconst jwt = require('jsonwebtoken');\n\nasync function registrar(email, password) {\n  const hash = await bcrypt.hash(password, 10);\n  return db.createUser({ email, passwordHash: hash });\n}\n\nasync function login(email, password) {\n  const user = await db.findByEmail(email);\n  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {\n    throw new Error('Credenciales inválidas');\n  }\n  return jwt.sign({ sub: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });\n}",
        exercise: "Implementá POST /api/auth/register y /api/auth/login con bcrypt y JWT. Protegé GET /api/tareas para usuarios autenticados. Desde React, guardá el token y envialo en fetch. Probá acceso sin token (401)."
      },
      {
        n: 36,
        title: "Testing con Jest y Supertest",
        duration: "90 min",
        objectives: [
          "Escribir unit tests para funciones y services",
          "Probar endpoints HTTP con Supertest",
          "Integrar tests en scripts npm y CI básico"
        ],
        content: "<p>Los <strong>tests</strong> previenen regresiones. Jest es runner popular en Node: describe/it, expect, mocks. Testeá services sin levantar HTTP; testeá rutas con <strong>Supertest</strong> sobre app Express.</p><p>Patrón AAA: Arrange (setup), Act (ejecutar), Assert (verificar). Mock de DB o Prisma en unit tests; tests de integración pueden usar DB de test.</p><p>Script <code>\"test\": \"jest\"</code> y corrélos antes de cada PR. Objetivo: confianza para refactorizar.</p>",
        code: "const request = require('supertest');\nconst app = require('../app');\n\ndescribe('GET /api/tareas', () => {\n  it('devuelve 401 sin token', async () => {\n    const res = await request(app).get('/api/tareas');\n    expect(res.status).toBe(401);\n  });\n\n  it('devuelve lista con token válido', async () => {\n    const token = 'Bearer ' + generarTokenTest();\n    const res = await request(app)\n      .get('/api/tareas')\n      .set('Authorization', token);\n    expect(res.status).toBe(200);\n    expect(Array.isArray(res.body)).toBe(true);\n  });\n});",
        exercise: "Agregá Jest y Supertest. Escribí al menos 5 tests: 2 unitarios para tareaService y 3 de integración para auth y CRUD tareas. Configurá npm test y documentá cómo correrlos."
      },
      {
        n: 37,
        title: "Variables de entorno y seguridad básica",
        duration: "90 min",
        objectives: [
          "Gestionar configuración con dotenv y .env.example",
          "Aplicar helmet, CORS y rate limiting en Express",
          "Prevenir vulnerabilidades OWASP Top 10 comunes en web apps"
        ],
        content: "<p>Secretos (JWT_SECRET, DATABASE_URL) van en <strong>variables de entorno</strong>, nunca en Git. Commiteá <code>.env.example</code> sin valores reales. En producción, el hosting inyecta env vars.</p><p><strong>helmet</strong> configura headers HTTP seguros. <strong>CORS</strong> restringe orígenes permitidos. <strong>express-rate-limit</strong> mitiga fuerza bruta en login.</p><p>OWASP: inyección SQL (usar ORM/parametrizado), XSS (escapar output, CSP), CSRF (tokens en forms cookie-based), broken auth (JWT corto, bcrypt fuerte).</p>",
        code: "require('dotenv').config();\nconst helmet = require('helmet');\nconst cors = require('cors');\nconst rateLimit = require('express-rate-limit');\n\napp.use(helmet());\napp.use(cors({ origin: process.env.CLIENT_URL }));\napp.use('/api/auth/login', rateLimit({\n  windowMs: 15 * 60 * 1000,\n  max: 10,\n  message: { error: 'Demasiados intentos' }\n}));",
        exercise: "Auditá tu API: agregá helmet, CORS restrictivo, rate limit en login y .env.example. Verificá que .env esté en .gitignore. Listá 3 riesgos OWASP que tu app mitiga y uno pendiente."
      },
      {
        n: 38,
        title: "Docker y containerización",
        duration: "90 min",
        objectives: [
          "Crear Dockerfile multi-stage para app Node + React",
          "Orquestar app y PostgreSQL con docker-compose",
          "Entender imágenes, contenedores y volúmenes"
        ],
        content: "<p><strong>Docker</strong> empaqueta app + dependencias en contenedores reproducibles. Dockerfile define build; docker-compose levanta varios servicios (api, db, redis).</p><p>Multi-stage build: stage 1 build React, stage 2 copia dist + instala deps de producción Node — imagen final más liviana.</p><p>Volúmenes persisten datos de PostgreSQL. Networks conectan contenedores por nombre de servicio (db:5432).</p>",
        code: "# docker-compose.yml\nservices:\n  db:\n    image: postgres:16\n    environment:\n      POSTGRES_PASSWORD: secret\n      POSTGRES_DB: tareas\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n  api:\n    build: .\n    ports:\n      - \"3000:3000\"\n    environment:\n      DATABASE_URL: postgres://postgres:secret@db:5432/tareas\n    depends_on:\n      - db\n\nvolumes:\n  pgdata:",
        exercise: "Dockerizá tu stack: Dockerfile para la API y docker-compose con PostgreSQL. Levantá con docker compose up, ejecutá migraciones y verificá CRUD. Documentá comandos en README."
      },
      {
        n: 39,
        title: "Deploy en Vercel, Render o Railway",
        duration: "90 min",
        objectives: [
          "Desplegar frontend estático o SSR en plataforma cloud",
          "Publicar API Node.js con variables de entorno configuradas",
          "Conectar base de datos managed y verificar health checks"
        ],
        content: "<p><strong>Deploy</strong> pone tu app en internet. Frontend React (build estático) encaja en Vercel o Netlify con CI desde GitHub. Backend Node en Render, Railway o Fly.io.</p><p>Checklist: DATABASE_URL de servicio managed (Neon, Supabase), JWT_SECRET generado, NODE_ENV=production, migraciones ejecutadas, endpoint /api/health para monitoreo.</p><p>Configurá dominio custom y HTTPS automático. Revisá logs del hosting ante errores 502/503.</p>",
        code: "# render.yaml (ejemplo simplificado)\nservices:\n  - type: web\n    name: tareas-api\n    env: node\n    buildCommand: npm install && npx prisma migrate deploy\n    startCommand: npm start\n    envVars:\n      - key: DATABASE_URL\n        sync: false\n      - key: JWT_SECRET\n        generateValue: true",
        exercise: "Desplegá frontend en Vercel y API en Render/Railway con PostgreSQL managed. Configurá env vars, ejecutá migraciones y probá login + CRUD desde la URL pública. Compartí links en tu README."
      }
    ]
  },
  {
    id: 8,
    title: "Proyecto final y empleabilidad",
    weeks: "2 semanas",
    lessons: [
      {
        n: 40,
        title: "Arquitectura de un proyecto full stack completo",
        duration: "90 min",
        objectives: [
          "Diseñar arquitectura de capas para un MVP full stack",
          "Definir contratos API entre frontend y backend",
          "Planificar estructura de carpetas y convenciones del equipo"
        ],
        content: "<p>Antes de codear, definí <strong>alcance MVP</strong>: features imprescindibles vs nice-to-have. Arquitectura típica: React SPA → Express API REST → PostgreSQL, auth JWT, deploy separado o monorepo.</p><p>Documentá contratos API (OpenAPI/Swagger o README con ejemplos JSON). Estructura sugerida: <code>/client</code>, <code>/server</code>, shared types si usás TypeScript.</p><p>Decisiones clave: paginación, manejo de errores uniforme, estrategia de auth, y plan de tests mínimo viable.</p>",
        code: "mvp_features = [\n  \"Registro y login\",\n  \"CRUD recurso principal\",\n  \"Listado con filtros\",\n  \"Deploy frontend + API + DB\"\n]\n\napi_contract = {\n  \"POST /api/auth/login\": { \"body\": [\"email\", \"password\"], \"response\": \"{ token }\" },\n  \"GET /api/items\": { \"auth\": \"Bearer JWT\", \"response\": \"[{ id, ... }]\" }\n}",
        exercise: "Elegí idea de proyecto final (ej: gestor de gastos, marketplace de cursos, app de reservas). Escribí doc de arquitectura de 1 página: diagrama, stack, endpoints API, modelo de datos ER y MVP scope."
      },
      {
        n: 41,
        title: "Diseño e implementación del MVP",
        duration: "90 min",
        objectives: [
          "Implementar features core siguiendo la arquitectura definida",
          "Integrar frontend React con API persistida en PostgreSQL",
          "Entregar flujo end-to-end funcional para el usuario principal"
        ],
        content: "<p>Fase de construcción: priorizá el <strong>happy path</strong> del usuario principal. Ejemplo en app de tareas: registrarse → login → crear tarea → marcar completada → logout.</p><p>Trabajá en vertical slices (una feature completa por iteración) en lugar de terminar todo el backend antes del frontend.</p><p>Commits frecuentes, ramas por feature, y demo al final de cada slice mantienen momentum y feedback temprano.</p>",
        code: "",
        exercise: "Implementá el MVP de tu proyecto: auth + CRUD del recurso principal + al menos una vista list/detail en React conectada a la API real. Grabá un GIF o screenshot del flujo completo funcionando."
      },
      {
        n: 42,
        title: "Code review, refactoring y documentación",
        duration: "90 min",
        objectives: [
          "Aplicar checklist de code review en pull requests",
          "Refactorizar código duplicado y mejorar naming",
          "Redactar README profesional con setup y arquitectura"
        ],
        content: "<p><strong>Code review</strong> mejora calidad y transmite conocimiento. Checklist: ¿funciona?, ¿tests?, ¿naming claro?, ¿seguridad?, ¿performance obvia?, ¿documentado?</p><p>Refactoring seguro: tests primero, cambios pequeños, extraer funciones/componentes repetidos, eliminar dead code. README debe permitir a un desconocido levantar el proyecto en &lt;15 min.</p><p>Incluí: descripción, stack, prerequisitos, env vars, comandos dev/test/build/deploy, capturas y roadmap opcional.</p>",
        code: "",
        exercise: "Hacé code review de tu propio proyecto con checklist de 10 ítems. Refactorizá al menos un módulo duplicado. Escribí README completo y abrí un PR (aunque sea solo tuyo) simulando revisión por pares."
      },
      {
        n: 43,
        title: "Portafolio, LinkedIn y preparación técnica",
        duration: "90 min",
        objectives: [
          "Presentar proyectos full stack en portafolio y GitHub",
          "Optimizar perfil LinkedIn para roles junior full stack",
          "Preparar respuestas para entrevistas técnicas y live coding"
        ],
        content: "<p>Tu <strong>portafolio</strong> debe destacar 2-3 proyectos con problema, solución, stack y links (demo + repo). GitHub: commits limpios, README, topics y pinned repos relevantes.</p><p>LinkedIn: titular claro (\"Desarrollador Full Stack | React, Node.js\"), proyectos en featured, recomendaciones de compañeros de curso.</p><p>Entrevistas junior cubren: HTML/CSS/JS, React hooks, APIs REST, SQL básico, Git, y un live coding simple (reverse string, CRUD, fetch). Practica en voz alta explicando tu razonamiento.</p>",
        code: "",
        exercise: "Actualizá LinkedIn y portafolio con tu proyecto final. Prepará elevator pitch de 60 segundos. Resolvé 3 ejercicios LeetCode easy (arrays/strings) explicando complejidad temporal en voz alta."
      },
      {
        n: 44,
        title: "Proyecto final de portafolio Full Stack Developer",
        duration: "90 min",
        objectives: [
          "Entregar proyecto full stack deployado y documentado",
          "Demostrar auth, persistencia, tests y buenas prácticas",
          "Presentar el proyecto como pieza central de empleabilidad"
        ],
        content: "<p>El <strong>proyecto final</strong> certifica tus competencias: React + Node + PostgreSQL + auth + deploy + tests + README profesional. Debe ser demostrable en 5 minutos ante un reclutador o tech lead.</p><p>Formato de entrega: repo público, URL de demo, video corto opcional (2-3 min) mostrando features, y documento de decisiones técnicas (por qué Prisma, por qué JWT, trade-offs).</p><p>Este proyecto es tu carta de presentación: invertí en pulir UX, manejo de errores y presentación visual.</p>",
        code: "project_checklist = [\n  \"Frontend React desplegado\",\n  \"API Express con auth JWT\",\n  \"PostgreSQL + migraciones\",\n  \"Tests Jest/Supertest\",\n  \"Docker o deploy cloud\",\n  \"README con demo link\"\n]\nfor item in project_checklist:\n  print('[ ]', item)",
        exercise: "Entregá tu proyecto final completo: deploy funcional, repo documentado, tests pasando y presentación de 5 minutos (slides o Loom) explicando arquitectura, desafíos y aprendizajes. Usá el checklist del material para autoevaluarte."
      }
    ]
  }
];
