window.FS_NIV_MODULES = [
  {
    id: 1,
    title: "Fundamentos del desarrollador web",
    weeks: "1 semana",
    lessons: [
      {
        n: 1,
        title: "Qué hace un Full Stack Developer",
        duration: "45 min",
        objectives: [
          "Diferenciar frontend, backend y full stack",
          "Identificar tecnologías típicas de la carrera",
          "Reconocer entregables: sitios, APIs, bases de datos y despliegue"
        ],
        content: "<p>El <strong>Full Stack Developer</strong> construye aplicaciones web de punta a punta: diseña interfaces, escribe lógica del servidor, conecta bases de datos y despliega en producción.</p><p><strong>Frontend:</strong> lo que ve el usuario (HTML, CSS, JavaScript, React). <strong>Backend:</strong> lógica, autenticación y datos (Node.js, Express, bases de datos). <strong>Full stack:</strong> integra ambas capas.</p><p><strong>Entregables típicos:</strong> landing responsive, API REST, app con login, integración con base de datos y deploy en Vercel o similar.</p>",
        code: "",
        exercise: "Elegí una app que uses a diario (Mercado Libre, Spotify, banco online). Escribí: (1) qué hace el frontend, (2) qué probablemente hace el backend, (3) qué datos guardaría en una base de datos."
      },
      {
        n: 2,
        title: "Cómo funciona la web",
        duration: "50 min",
        objectives: [
          "Describir el flujo cliente → servidor → respuesta",
          "Diferenciar HTTP, URL, DNS y navegador",
          "Entender qué es una API y un endpoint"
        ],
        content: "<p>Cuando visitás una página ocurre esto:</p><ol><li>El navegador resuelve el dominio (DNS) y pide la URL al servidor.</li><li>El servidor responde con <strong>HTML, CSS y JS</strong> (frontend) o con <strong>JSON</strong> (API).</li><li>El navegador renderiza la página o tu app consume los datos.</li></ol><p><strong>HTTP</strong> es el protocolo de comunicación. Los métodos comunes: <code>GET</code> (leer), <code>POST</code> (crear), <code>PUT/PATCH</code> (actualizar), <code>DELETE</code> (borrar).</p><p>Una <strong>API REST</strong> expone endpoints como <code>/api/users</code> que devuelven JSON en lugar de HTML.</p>",
        code: "# Flujo simplificado\n# 1. GET https://api.ejemplo.com/productos\n# 2. Servidor responde:\n{\n  \"productos\": [\n    {\"id\": 1, \"nombre\": \"Notebook\", \"precio\": 450000},\n    {\"id\": 2, \"nombre\": \"Mouse\", \"precio\": 15000}\n  ]\n}\n# 3. El frontend muestra la lista en pantalla",
        exercise: "Abrí DevTools (F12) → pestaña Network. Recargá una página y encontrá una request. Anotá: URL, método HTTP, status code y tipo de contenido (HTML o JSON)."
      },
      {
        n: 3,
        title: "Herramientas del desarrollador",
        duration: "45 min",
        objectives: [
          "Configurar editor de código (VS Code / Cursor)",
          "Usar DevTools del navegador para inspeccionar HTML y CSS",
          "Organizar carpetas de un proyecto web mínimo"
        ],
        content: "<p>Antes del bootcamp, tené listo tu entorno:</p><ul><li><strong>Editor:</strong> VS Code o Cursor con extensiones Live Server, Prettier y ESLint.</li><li><strong>Navegador:</strong> Chrome o Edge con DevTools (F12).</li><li><strong>Terminal:</strong> PowerShell, Git Bash o terminal integrada del editor.</li><li><strong>Git:</strong> instalado y configurado con tu nombre y email.</li></ul><p>Estructura mínima de proyecto:</p><pre>mi-proyecto/\n  index.html\n  css/\n    styles.css\n  js/\n    main.js\n  assets/\n    imagen.png</pre>",
        code: "<!-- index.html mínimo -->\n<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Mi primer proyecto</title>\n  <link rel=\"stylesheet\" href=\"css/styles.css\">\n</head>\n<body>\n  <h1>Hola, Full Stack</h1>\n  <script src=\"js/main.js\"></script>\n</body>\n</html>",
        exercise: "Creá la carpeta `nivelacion-fsd` con la estructura de arriba. Abrí `index.html` con Live Server. Modificá el título y verificá el cambio en el navegador."
      }
    ]
  },
  {
    id: 2,
    title: "Lógica y algoritmos básicos",
    weeks: "1 semana",
    lessons: [
      {
        n: 4,
        title: "Pensamiento computacional y pseudocódigo",
        duration: "50 min",
        objectives: [
          "Descomponer problemas en pasos ordenados",
          "Escribir pseudocódigo legible antes de codear",
          "Identificar entradas, procesos y salidas"
        ],
        content: "<p>Programar no empieza escribiendo código: empieza <strong>pensando el problema</strong>. Técnica útil: descomponer (dividir en partes), reconocer patrones y abstraer lo repetible.</p><p><strong>Pseudocódigo</strong> es lenguaje intermedio entre humano y máquina. Ejemplo: calcular el total de un carrito de compras.</p><pre>ENTRADA: lista de precios\nPROCESO:\n  total = 0\n  PARA cada precio EN lista:\n    total = total + precio\nSALIDA: total</pre><p>En la carrera traducís esto a JavaScript, Python o la sintaxis del framework que uses.</p>",
        code: "// Pseudocódigo → JavaScript\n// ENTRADA: [1200, 3500, 800]\nlet total = 0;\nconst precios = [1200, 3500, 800];\n\nfor (const precio of precios) {\n  total = total + precio;\n}\n\nconsole.log(\"Total:\", total); // 5500",
        exercise: "Escribí pseudocódigo para: dado un número, decir si es par o impar. Luego traducilo a JavaScript y probalo con 3 números distintos."
      },
      {
        n: 5,
        title: "Variables, tipos y operadores",
        duration: "55 min",
        objectives: [
          "Declarar variables con let y const",
          "Reconocer tipos: string, number, boolean",
          "Usar operadores aritméticos, de comparación y lógicos"
        ],
        content: "<p>Las <strong>variables</strong> guardan datos. En JavaScript moderno:</p><ul><li><code>const</code> → valor que no cambia (preferilo cuando podés).</li><li><code>let</code> → valor que puede cambiar.</li></ul><p><strong>Tipos básicos:</strong> texto (<code>\"Hola\"</code>), número (<code>42</code>, <code>3.14</code>), booleano (<code>true</code>/<code>false</code>).</p><p><strong>Operadores:</strong> <code>+ - * /</code>, comparación <code>=== !== &lt; &gt;</code>, lógicos <code>&amp;&amp;</code> (y), <code>||</code> (o), <code>!</code> (no).</p>",
        code: "const nombre = \"Ana\";\nlet edad = 25;\nconst esEstudiante = true;\n\nconst precio = 1500;\nconst descuento = 0.15;\nconst total = precio - (precio * descuento);\n\nconst mayorDeEdad = edad >= 18;\nconst puedeInscribirse = mayorDeEdad && esEstudiante;\n\nconsole.log(`${nombre} paga $${total}`);\nconsole.log(\"Puede inscribirse:\", puedeInscribirse);",
        exercise: "Declará variables para un producto (nombre, precio, stock). Calculá el valor total del inventario (precio × stock). Probá con descuento del 10% si stock > 50."
      },
      {
        n: 6,
        title: "Condicionales y bucles",
        duration: "60 min",
        objectives: [
          "Usar if/else y switch para tomar decisiones",
          "Iterar con for, while y for...of",
          "Evitar bucles infinitos y lógica redundante"
        ],
        content: "<p><strong>Condicionales</strong> ejecutan código según una condición:</p><pre>if (condición) {\n  // camino A\n} else if (otraCondición) {\n  // camino B\n} else {\n  // camino C\n}</pre><p><strong>Bucles</strong> repiten acciones:</p><ul><li><code>for (let i = 0; i &lt; 10; i++)</code> → índice numérico.</li><li><code>for (const item of array)</code> → cada elemento.</li><li><code>while (condición)</code> → mientras se cumpla.</li></ul><p>Patrón común: recorrer un array, filtrar elementos o acumular un total.</p>",
        code: "const notas = [8, 4, 9, 6, 3, 7];\nlet aprobados = 0;\nlet suma = 0;\n\nfor (const nota of notas) {\n  suma += nota;\n  if (nota >= 6) {\n    aprobados++;\n  } else {\n    console.log(`Recuperatorio necesario: ${nota}`);\n  }\n}\n\nconst promedio = suma / notas.length;\nconsole.log(`Promedio: ${promedio.toFixed(1)}`);\nconsole.log(`Aprobados: ${aprobados}/${notas.length}`);",
        exercise: "Dado un array de precios, imprimí solo los mayores a 1000. Al final, mostrá cuántos productos son «premium» y el precio promedio de esos."
      },
      {
        n: 7,
        title: "Funciones y resolución de problemas",
        duration: "55 min",
        objectives: [
          "Declarar funciones con parámetros y return",
          "Reutilizar lógica en lugar de repetir código",
          "Aplicar pasos: entender → planear → implementar → probar"
        ],
        content: "<p>Las <strong>funciones</strong> encapsulan lógica reutilizable. Reciben inputs (parámetros) y devuelven un output (<code>return</code>).</p><pre>function calcularIVA(precio, tasa = 0.21) {\n  return precio * tasa;\n}</pre><p>Metodología para resolver ejercicios:</p><ol><li><strong>Entender</strong> qué pide el enunciado con ejemplos.</li><li><strong>Planear</strong> en pseudocódigo o papel.</li><li><strong>Implementar</strong> la función más simple primero.</li><li><strong>Probar</strong> con casos normales, vacíos y extremos.</li></ol>",
        code: "function esPalindromo(texto) {\n  const limpio = texto.toLowerCase().replace(/\\s/g, \"\");\n  const invertido = limpio.split(\"\").reverse().join(\"\");\n  return limpio === invertido;\n}\n\nfunction fahrenheitACelsius(f) {\n  return ((f - 32) * 5) / 9;\n}\n\nconsole.log(esPalindromo(\"Reconocer\")); // true\nconsole.log(fahrenheitACelsius(98.6).toFixed(1)); // 37.0",
        exercise: "Escribí una función `calcularDescuento(precio, porcentaje)` que devuelva el precio final. Agregá otra `esEnvioGratis(precio)` que retorne true si el total supera $50000. Probá ambas juntas."
      }
    ]
  },
  {
    id: 3,
    title: "HTML y CSS esencial",
    weeks: "1.5 semanas",
    lessons: [
      {
        n: 8,
        title: "Estructura HTML y etiquetas semánticas",
        duration: "55 min",
        objectives: [
          "Escribir documento HTML5 válido con DOCTYPE y meta charset",
          "Usar etiquetas semánticas: header, nav, main, section, footer",
          "Aplicar jerarquía correcta de headings (h1–h6)"
        ],
        content: "<p><strong>HTML</strong> define la estructura y el significado del contenido. Un documento válido incluye:</p><ul><li><code>&lt;!DOCTYPE html&gt;</code> y <code>lang=\"es\"</code></li><li><code>&lt;meta charset=\"UTF-8\"&gt;</code> para tildes y ñ</li><li><code>&lt;title&gt;</code> visible en la pestaña del navegador</li></ul><p>Etiquetas <strong>semánticas</strong> mejoran accesibilidad y SEO:</p><ul><li><code>&lt;header&gt;</code> → cabecera del sitio</li><li><code>&lt;nav&gt;</code> → menú de navegación</li><li><code>&lt;main&gt;</code> → contenido principal (uno por página)</li><li><code>&lt;section&gt;</code> / <code>&lt;article&gt;</code> → bloques temáticos</li><li><code>&lt;footer&gt;</code> → pie de página</li></ul>",
        code: "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Portfolio — Nivelación FSD</title>\n</head>\n<body>\n  <header>\n    <h1>María López</h1>\n    <p>Desarrolladora web en formación</p>\n  </header>\n  <nav>\n    <a href=\"#sobre-mi\">Sobre mí</a>\n    <a href=\"#proyectos\">Proyectos</a>\n  </nav>\n  <main>\n    <section id=\"sobre-mi\">\n      <h2>Sobre mí</h2>\n      <p>Estudio Full Stack Development en Vorox Academia.</p>\n    </section>\n  </main>\n  <footer>\n    <p>&copy; 2026 María López</p>\n  </footer>\n</body>\n</html>",
        exercise: "Creá una página «Sobre mí» con header, nav (3 links internos), main con 2 sections y footer. Validá en validator.w3.org y corregí errores si los hay."
      },
      {
        n: 9,
        title: "Formularios y atributos HTML",
        duration: "50 min",
        objectives: [
          "Crear formularios con input, label, textarea y button",
          "Usar atributos type, name, placeholder, required",
          "Entender la diferencia entre method GET y POST"
        ],
        content: "<p>Los <strong>formularios</strong> capturan datos del usuario. Buenas prácticas:</p><ul><li>Asociar cada <code>&lt;label&gt;</code> con su input via <code>for</code> e <code>id</code>.</li><li>Usar <code>type</code> correcto: <code>email</code>, <code>password</code>, <code>number</code>, <code>tel</code>.</li><li>Agregar <code>required</code>, <code>minlength</code> y <code>pattern</code> para validación básica.</li><li>Nunca confíes solo en validación del frontend: el backend también valida.</li></ul><p><code>method=\"GET\"</code> envía datos en la URL (búsquedas). <code>method=\"POST\"</code> envía en el cuerpo (registros, login).</p>",
        code: "<form action=\"/registro\" method=\"POST\">\n  <label for=\"nombre\">Nombre completo</label>\n  <input type=\"text\" id=\"nombre\" name=\"nombre\" required minlength=\"2\">\n\n  <label for=\"email\">Email</label>\n  <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"tu@email.com\" required>\n\n  <label for=\"mensaje\">Mensaje</label>\n  <textarea id=\"mensaje\" name=\"mensaje\" rows=\"4\"></textarea>\n\n  <button type=\"submit\">Enviar</button>\n</form>",
        exercise: "Armá formulario de contacto con nombre, email, asunto (select con 3 opciones) y mensaje. Todos los campos obligatorios excepto teléfono opcional. Probá enviar vacío y verificá mensajes del navegador."
      },
      {
        n: 10,
        title: "CSS: selectores, colores y tipografía",
        duration: "55 min",
        objectives: [
          "Vincular CSS externo, interno e inline (preferir externo)",
          "Aplicar selectores de elemento, clase e id",
          "Configurar color, font-family, font-size y line-height"
        ],
        content: "<p><strong>CSS</strong> controla la presentación visual. Formas de incluirlo (de peor a mejor): inline → <code>&lt;style&gt;</code> en head → archivo <code>.css</code> externo.</p><p><strong>Selectores clave:</strong></p><ul><li><code>p</code> → todos los párrafos</li><li><code>.card</code> → elementos con class=\"card\"</li><li><code>#hero</code> → elemento con id=\"hero\" (usar con moderación)</li><li><code>a:hover</code> → estado al pasar el mouse</li></ul><p>Tipografía legible: <code>font-family</code> sans-serif, <code>line-height: 1.5–1.7</code>, contraste suficiente entre texto y fondo.</p>",
        code: "/* styles.css */\n:root {\n  --color-primary: #2563eb;\n  --color-text: #1e293b;\n  --color-bg: #f8fafc;\n}\n\nbody {\n  font-family: \"Segoe UI\", system-ui, sans-serif;\n  color: var(--color-text);\n  background: var(--color-bg);\n  line-height: 1.6;\n}\n\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.card h2 {\n  color: var(--color-primary);\n  font-size: 1.25rem;\n}",
        exercise: "Estilizá la página «Sobre mí» con variables CSS para colores, tipografía sans-serif y tarjetas (.card) con sombra suave. El link del nav debe cambiar color en :hover."
      },
      {
        n: 11,
        title: "Box model y Flexbox introductorio",
        duration: "60 min",
        objectives: [
          "Entender margin, padding, border y content en el box model",
          "Usar box-sizing: border-box",
          "Alinear elementos con display flex básico"
        ],
        content: "<p>Cada elemento HTML es una <strong>caja</strong> con capas:</p><ul><li><strong>Content</strong> → texto o imagen</li><li><strong>Padding</strong> → espacio interno</li><li><strong>Border</strong> → borde</li><li><strong>Margin</strong> → espacio externo entre cajas</li></ul><p><code>box-sizing: border-box</code> hace que padding y border no agranden el ancho total — es el estándar moderno.</p><p><strong>Flexbox</strong> alinea hijos en fila o columna:</p><pre>.nav { display: flex; gap: 1rem; justify-content: space-between; align-items: center; }</pre>",
        code: "* {\n  box-sizing: border-box;\n}\n\n.container {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 0;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.nav-links {\n  display: flex;\n  gap: 1.5rem;\n  list-style: none;\n}\n\n.card-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.card-grid .card {\n  flex: 1 1 280px;\n}",
        exercise: "Convertí tu nav en flexbox horizontal con logo a la izquierda y links a la derecha. Debajo, creá 3 cards en fila que se apilen en pantallas angostas (flex-wrap)."
      },
      {
        n: 12,
        title: "Diseño responsive y media queries",
        duration: "55 min",
        objectives: [
          "Configurar viewport meta para móviles",
          "Aplicar media queries con breakpoints comunes",
          "Priorizar diseño mobile-first"
        ],
        content: "<p><strong>Responsive design</strong> adapta el layout al tamaño de pantalla. Sin <code>&lt;meta name=\"viewport\"&gt;</code>, los móviles renderizan la página «de escritorio» miniaturizada.</p><p><strong>Mobile-first:</strong> escribís CSS base para móvil y agregás reglas con <code>min-width</code> para pantallas más grandes.</p><pre>@media (min-width: 768px) {\n  .card-grid { grid-template-columns: 1fr 1fr; }\n}</pre><p>Breakpoints habituales: 480px (móvil grande), 768px (tablet), 1024px (desktop).</p>",
        code: "/* Mobile first */\n.hero {\n  padding: 2rem 1rem;\n  text-align: center;\n}\n\n.hero h1 {\n  font-size: 1.75rem;\n}\n\n.card-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n\n@media (min-width: 768px) {\n  .hero h1 {\n    font-size: 2.5rem;\n  }\n\n  .card-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (min-width: 1024px) {\n  .card-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}",
        exercise: "Hacé tu portfolio responsive: 1 columna en móvil, 2 en tablet, 3 en desktop. Probá con DevTools → Toggle device toolbar (Ctrl+Shift+M)."
      }
    ]
  },
  {
    id: 4,
    title: "JavaScript introductorio",
    weeks: "1.5 semanas",
    lessons: [
      {
        n: 13,
        title: "Primeros pasos en JavaScript",
        duration: "50 min",
        objectives: [
          "Vincular script externo al final del body o con defer",
          "Usar console.log para depurar",
          "Diferenciar string, number, boolean, null y undefined"
        ],
        content: "<p><strong>JavaScript</strong> agrega interactividad al HTML. Formas de incluirlo:</p><ul><li><code>&lt;script src=\"main.js\" defer&gt;&lt;/script&gt;</code> en el head (recomendado).</li><li><code>&lt;script src=\"main.js\"&gt;&lt;/script&gt;</code> antes de cerrar <code>&lt;/body&gt;</code>.</li></ul><p>Depurá con <code>console.log()</code> y la consola de DevTools (F12 → Console). Errores de sintaxis aparecen en rojo con número de línea.</p><p>Tipos especiales: <code>null</code> (valor vacío intencional), <code>undefined</code> (variable sin asignar).</p>",
        code: "// main.js\nconst saludo = \"Bienvenido a la nivelación\";\nconst version = 1;\nconst activo = true;\n\nconsole.log(saludo);\nconsole.log(\"Versión:\", version, \"| Activo:\", activo);\n\nlet usuario;\nconsole.log(usuario); // undefined\n\nconst perfil = null; // aún no cargado\nconsole.log(typeof perfil); // \"object\" (quirk histórico de JS)",
        exercise: "Creá `main.js` vinculado a tu HTML. Declará 5 variables de tipos distintos e imprimilas en consola con mensajes descriptivos. Provocá un error tipográfico a propósito y leé el mensaje en consola."
      },
      {
        n: 14,
        title: "DOM: seleccionar y modificar elementos",
        duration: "55 min",
        objectives: [
          "Seleccionar nodos con querySelector y querySelectorAll",
          "Modificar textContent, innerHTML y classList",
          "Crear y agregar elementos dinámicamente"
        ],
        content: "<p>El <strong>DOM</strong> (Document Object Model) es la representación en árbol del HTML que JavaScript puede leer y modificar.</p><p>Métodos esenciales:</p><ul><li><code>document.querySelector(\"#id\")</code> → primer match</li><li><code>document.querySelectorAll(\".clase\")</code> → todos los matches</li><li><code>element.textContent = \"...\"</code> → cambiar texto</li><li><code>element.classList.add(\"activo\")</code> → agregar clase CSS</li><li><code>document.createElement(\"li\")</code> → crear nodo nuevo</li></ul><p>Preferí <code>textContent</code> sobre <code>innerHTML</code> cuando insertás texto de usuario (evita XSS).</p>",
        code: "const titulo = document.querySelector(\"#titulo-principal\");\ntitulo.textContent = \"Portfolio actualizado con JS\";\n\ntitulo.classList.add(\"destacado\");\n\nconst lista = document.querySelector(\"#proyectos-lista\");\nconst proyectos = [\"Landing page\", \"Calculadora\", \"To-do list\"];\n\nfor (const nombre of proyectos) {\n  const li = document.createElement(\"li\");\n  li.textContent = nombre;\n  li.classList.add(\"proyecto-item\");\n  lista.appendChild(li);\n}",
        exercise: "En tu HTML agregá `<h1 id=\"titulo\">` y `<ul id=\"lista\">`. Con JS, cambiá el título, agregá clase CSS y generá 4 `<li>` desde un array de strings."
      },
      {
        n: 15,
        title: "Eventos e interactividad",
        duration: "60 min",
        objectives: [
          "Escuchar eventos con addEventListener",
          "Manejar click, submit y input",
          "Prevenir comportamiento default con preventDefault"
        ],
        content: "<p>Los <strong>eventos</strong> conectan acciones del usuario con tu código:</p><ul><li><code>click</code> → clic en botón o link</li><li><code>submit</code> → envío de formulario</li><li><code>input</code> → cada tecla en un campo de texto</li><li><code>keydown</code> → tecla presionada</li></ul><p>Patrón estándar:</p><pre>boton.addEventListener(\"click\", (event) => {\n  // tu lógica\n});</pre><p>En formularios, <code>event.preventDefault()</code> evita recargar la página para procesar datos con JS.</p>",
        code: "const btn = document.querySelector(\"#btn-saludo\");\nconst output = document.querySelector(\"#output\");\n\nbtn.addEventListener(\"click\", () => {\n  output.textContent = `Hola! Son las ${new Date().toLocaleTimeString()}`;\n});\n\nconst form = document.querySelector(\"#form-contacto\");\nform.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n  const email = form.email.value.trim();\n  if (!email.includes(\"@\")) {\n    output.textContent = \"Email inválido\";\n    return;\n  }\n  output.textContent = `Gracias! Te escribiremos a ${email}`;\n  form.reset();\n});",
        exercise: "Creá botón «Modo oscuro» que alterne clase `dark-mode` en `<body>`. Agregá contador de clicks que se actualice en pantalla cada vez que presionás el botón."
      },
      {
        n: 16,
        title: "Arrays y objetos en JavaScript",
        duration: "55 min",
        objectives: [
          "Crear y recorrer arrays con map, filter y find",
          "Modelar datos con objetos y acceder a propiedades",
          "Combinar arrays de objetos (lista de productos, usuarios, etc.)"
        ],
        content: "<p>Los <strong>arrays</strong> guardan listas ordenadas. Métodos clave:</p><ul><li><code>.map(fn)</code> → transforma cada elemento (nuevo array).</li><li><code>.filter(fn)</code> → filtra según condición.</li><li><code>.find(fn)</code> → primer elemento que cumple.</li><li><code>.reduce(fn, inicial)</code> → acumula a un valor.</li></ul><p>Los <strong>objetos</strong> agrupan propiedades relacionadas:</p><pre>const producto = { id: 1, nombre: \"Teclado\", precio: 25000 };</pre><p>Acceso: <code>producto.nombre</code> o <code>producto[\"precio\"]</code>.</p>",
        code: "const productos = [\n  { id: 1, nombre: \"Mouse\", precio: 8500, stock: 12 },\n  { id: 2, nombre: \"Teclado\", precio: 22000, stock: 5 },\n  { id: 3, nombre: \"Monitor\", precio: 180000, stock: 2 }\n];\n\nconst nombres = productos.map((p) => p.nombre);\nconsole.log(nombres);\n\nconst disponibles = productos.filter((p) => p.stock > 0);\nconst caros = productos.filter((p) => p.precio > 20000);\n\nconst totalInventario = productos.reduce(\n  (acc, p) => acc + p.precio * p.stock,\n  0\n);\nconsole.log(`Valor inventario: $${totalInventario}`);",
        exercise: "Creá array de 5 películas con título, año y rating. Filtrá las de rating ≥ 8, mapeá solo títulos y calculá el rating promedio con reduce. Mostrá resultados en consola."
      },
      {
        n: 17,
        title: "Fetch, JSON y consumo de APIs",
        duration: "60 min",
        objectives: [
          "Entender formato JSON para intercambio de datos",
          "Consumir API pública con fetch y async/await",
          "Manejar estados loading, success y error en la UI"
        ],
        content: "<p><strong>JSON</strong> es el formato estándar de APIs web. Ejemplo:</p><pre>{ \"id\": 1, \"nombre\": \"Ana\", \"activo\": true }</pre><p><strong>fetch</strong> hace requests HTTP desde el navegador:</p><pre>const resp = await fetch(url);\nconst data = await resp.json();</pre><p>Siempre manejá errores con <code>try/catch</code> y mostrá feedback al usuario (cargando…, error, sin resultados).</p><p>APIs públicas para practicar: JSONPlaceholder,pokeapi.co, api.github.com.</p>",
        code: "async function cargarUsuarios() {\n  const contenedor = document.querySelector(\"#usuarios\");\n  contenedor.textContent = \"Cargando...\";\n\n  try {\n    const resp = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);\n\n    const usuarios = await resp.json();\n    contenedor.innerHTML = \"\";\n\n    for (const u of usuarios.slice(0, 5)) {\n      const div = document.createElement(\"div\");\n      div.className = \"card\";\n      div.innerHTML = `<strong>${u.name}</strong><br>${u.email}`;\n      contenedor.appendChild(div);\n    }\n  } catch (err) {\n    contenedor.textContent = `Error: ${err.message}`;\n  }\n}\n\ncargarUsuarios();",
        exercise: "Consumí https://pokeapi.co/api/v2/pokemon/pikachu y mostrá nombre, altura y un sprite en tu página. Agregá manejo de error si la API no responde."
      }
    ]
  },
  {
    id: 5,
    title: "Git, terminal y checklist pre-carrera",
    weeks: "1 semana",
    lessons: [
      {
        n: 18,
        title: "Terminal y comandos esenciales",
        duration: "50 min",
        objectives: [
          "Navegar carpetas con cd, ls/dir y pwd",
          "Crear y eliminar archivos y directorios",
          "Ejecutar scripts npm básicos (concepto)"
        ],
        content: "<p>La <strong>terminal</strong> es tu interfaz de texto para el sistema operativo. Comandos esenciales (PowerShell / Bash):</p><ul><li><code>pwd</code> / <code>cd</code> → dónde estás y a dónde ir</li><li><code>ls</code> / <code>dir</code> → listar archivos</li><li><code>mkdir nombre</code> → crear carpeta</li><li><code>touch archivo.js</code> / <code>ni archivo.js</code> → crear archivo</li><li><code>rm archivo</code> / <code>del archivo</code> → borrar (¡cuidado!)</li><li><code>cat archivo</code> / <code>type archivo</code> → ver contenido</li></ul><p>En la carrera usarás <code>npm install</code>, <code>npm run dev</code> y <code>node archivo.js</code> constantemente.</p>",
        code: "# Secuencia típica al iniciar un proyecto\nmkdir mi-app\ncd mi-app\nmkdir css js assets\ntouch index.html css/styles.css js/main.js\n\n# Ver estructura\nls -la    # Bash\n# dir     # PowerShell\n\n# Ejecutar JS con Node (instalado previamente)\nnode js/main.js",
        exercise: "Desde terminal, creá carpeta `ejercicio-terminal`, entrá, creá 3 subcarpetas y un `README.md` con tu nombre. Listá el contenido y copiá el output en un documento de notas."
      },
      {
        n: 19,
        title: "Git: control de versiones básico",
        duration: "60 min",
        objectives: [
          "Inicializar repo con git init y configurar identidad",
          "Hacer commit con add y commit -m",
          "Conectar remoto, push y pull en GitHub"
        ],
        content: "<p><strong>Git</strong> registra el historial de cambios de tu código. Flujo diario:</p><ol><li><code>git status</code> → qué cambió</li><li><code>git add .</code> → preparar cambios</li><li><code>git commit -m \"mensaje claro\"</code> → guardar snapshot</li><li><code>git push</code> → subir a GitHub</li></ol><p>Buenos mensajes de commit: «Agrega formulario de contacto», «Corrige validación de email» — verbos en imperativo, descripción breve.</p><p>Nunca subas <code>.env</code>, contraseñas ni <code>node_modules/</code>. Usá <code>.gitignore</code>.</p>",
        code: "# Configuración inicial (una vez)\ngit config --global user.name \"Tu Nombre\"\ngit config --global user.email \"tu@email.com\"\n\n# Primer repo\ngit init\ngit add .\ngit commit -m \"Initial commit: estructura base del portfolio\"\n\n# Conectar con GitHub\ngit remote add origin https://github.com/tu-usuario/mi-portfolio.git\ngit branch -M main\ngit push -u origin main\n\n# Día a día\ngit pull          # traer cambios del remoto\ngit add .\ngit commit -m \"Agrega sección de proyectos responsive\"\ngit push",
        exercise: "Inicializá repo Git en tu proyecto de nivelación. Hacé 3 commits separados (estructura HTML, estilos CSS, interactividad JS). Creá repo en GitHub y hacé push. Pegá la URL del repo."
      },
      {
        n: 20,
        title: "Checklist pre-carrera Full Stack",
        duration: "45 min",
        objectives: [
          "Autoevaluar dominio de HTML, CSS, JS y Git",
          "Armar plan de repaso personalizado",
          "Conocer qué verás en el módulo 1 del bootcamp"
        ],
        content: "<p>Antes de la cohorte, deberías poder:</p><ul><li>Crear página HTML semántica con formulario y CSS responsive</li><li>Usar Flexbox o Grid para layouts básicos</li><li>Manipular el DOM y escuchar eventos en JavaScript</li><li>Trabajar con arrays, objetos y fetch a una API pública</li><li>Resolver ejercicios de lógica con funciones y bucles</li><li>Usar terminal y Git (init, add, commit, push)</li></ul><p>En la carrera profundizás: React, Node.js, Express, bases de datos (SQL/NoSQL), autenticación, testing y despliegue en producción.</p><p><strong>Mini-proyecto integrador sugerido:</strong> portfolio responsive que cargue proyectos desde un array en JS o una API, con modo oscuro y formulario de contacto validado.</p>",
        code: "",
        exercise: "Autoevaluación 1–5 en: HTML, CSS, JavaScript, lógica/algoritmos, Git/terminal. Listá 3 temas a reforzar y armá un plan de 5 horas de repaso antes del inicio. Opcional: publicá tu portfolio en GitHub Pages."
      }
    ]
  }
];
