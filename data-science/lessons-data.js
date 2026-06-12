window.DS_MODULES = [
  {
    id: 1,
    title: "Fundamentos de Data Science",
    weeks: "2 semanas",
    lessons: [
      {
        n: 1,
        title: "¿Qué es Data Science?",
        duration: "90 min",
        objectives: [
          "Definir Data Science y distinguirla de disciplinas relacionadas",
          "Identificar las competencias clave de un científico de datos",
          "Reconocer casos de uso reales en distintos sectores"
        ],
        content: "<p>Data Science es la disciplina que combina <strong>estadística</strong>, <strong>programación</strong> y <strong>conocimiento del dominio</strong> para extraer valor de los datos. No se trata solo de construir modelos: implica formular preguntas, recolectar información, limpiarla, analizarla y comunicar hallazgos accionables.</p><p>A diferencia de la analítica de negocios tradicional —centrada en reportes e indicadores—, el científico de datos diseña experimentos, prueba hipótesis y automatiza predicciones. Tampoco es lo mismo que ingeniería de software: el foco está en la evidencia numérica y la incertidumbre, no solo en el despliegue de sistemas.</p><ul><li><strong>Sectores:</strong> salud (diagnóstico asistido), finanzas (detección de fraude), retail (recomendaciones), logística (optimización de rutas).</li><li><strong>Perfil profesional:</strong> curiosidad, pensamiento crítico, comunicación clara y ética en el uso de datos personales.</li></ul>",
        code: "",
        exercise: "Investiga un caso real de Data Science en un sector que te interese (por ejemplo, Spotify o un hospital). Escribe un párrafo describiendo qué problema resolvían, qué datos usaron y qué resultado obtuvieron. Compártelo con un compañero y debate si la solución requería solo estadística o también ingeniería de datos."
      },
      {
        n: 2,
        title: "El ciclo de vida de un proyecto de datos",
        duration: "90 min",
        objectives: [
          "Describir las fases de un proyecto de ciencia de datos de principio a fin",
          "Relacionar cada fase con entregables concretos",
          "Anticipar riesgos comunes en proyectos reales"
        ],
        content: "<p>Todo proyecto de datos sigue un ciclo iterativo, no un camino lineal perfecto. Las fases típicas son: <strong>comprensión del negocio</strong>, <strong>comprensión de los datos</strong>, <strong>preparación</strong>, <strong>modelado</strong>, <strong>evaluación</strong> y <strong>despliegue</strong>, con retroalimentación constante hacia fases anteriores.</p><p>En la fase de comprensión del negocio se define la pregunta clave: ¿qué decisión mejorará si resolvemos esto? Luego se auditan fuentes (bases SQL, APIs, archivos CSV), se evalúa calidad (completitud, consistencia, actualidad) y se documenta un diccionario de datos antes de cualquier modelado.</p><p>Errores frecuentes incluyen saltar la exploración, entrenar modelos sobre datos filtrados incorrectamente (data leakage) o desplegar sin monitorear deriva del modelo. Un buen proyecto documenta supuestos, limitaciones y criterios de éxito medibles desde el inicio.</p>",
        code: "",
        exercise: "Elige un problema hipotético: predecir abandono de clientes en una suscripción. Dibuja un diagrama (papel o herramienta digital) con las seis fases del ciclo CRISP-DM e indica al menos una tarea y un entregable por fase. Señala en qué fase correrías más riesgo de sesgo."
      },
      {
        n: 3,
        title: "Tipos de datos y fuentes",
        duration: "90 min",
        objectives: [
          "Clasificar variables según escala de medición y tipo semántico",
          "Diferenciar datos estructurados, semi-estructurados y no estructurados",
          "Evaluar la idoneidad de una fuente para un objetivo analítico"
        ],
        content: "<p>Los datos pueden ser <strong>categóricos</strong> (nominales u ordinales) o <strong>numéricos</strong> (discretos o continuos). Esta clasificación determina qué gráficos, estadísticas y algoritmos son válidos: la media de códigos postales no tiene sentido, pero sí la mediana de ingresos.</p><p>Por estructura distinguimos tablas relacionales (SQL), documentos JSON, logs de texto, imágenes y señales temporales. Cada formato impone un pipeline distinto: ETL para warehouses, parsing para texto, ventanas deslizantes para series de tiempo.</p><ul><li><strong>Calidad:</strong> exactitud, completitud, unicidad, puntualidad.</li><li><strong>Procedencia:</strong> datos primarios (encuestas propias) vs. secundarios (datasets públicos como datos.gob o Kaggle).</li><li><strong>Granularidad:</strong> transacción, usuario-día o agregado mensual — debe alinearse con la pregunta de negocio.</li></ul>",
        code: "",
        exercise: "Descarga un dataset público pequeño (por ejemplo, Titanic o Iris desde la documentación de scikit-learn). Identifica cinco columnas y clasifícalas como nominal, ordinal, discreta o continua. Indica si la fuente es primaria o secundaria y qué limitaciones de calidad observas al leer la descripción del dataset."
      },
      {
        n: 4,
        title: "Ética y privacidad en datos",
        duration: "90 min",
        objectives: [
          "Reconocer sesgos algorítmicos y sus consecuencias sociales",
          "Aplicar principios básicos de privacidad y minimización de datos",
          "Conocer marcos normativos como GDPR y buenas prácticas de anonimización"
        ],
        content: "<p>Los modelos aprenden patrones del pasado; si el pasado es discriminatorio, el modelo puede perpetuar o amplificar injusticias en contratación, crédito o salud. La <strong>equidad algorítmica</strong> exige auditar métricas por subgrupos, no solo precisión global.</p><p>La privacidad protege a las personas: recopilar solo lo necesario (minimización), obtener consentimiento informado y aplicar técnicas como pseudonimización, agregación o differential privacy cuando se publican estadísticas. Re-identificar registros aparentemente anónimos combinando datasets es un riesgo real demostrado en estudios académicos.</p><p>Marcos como el GDPR en Europa establecen derechos de acceso, rectificación y borrado. En proyectos profesionales, la ética incluye documentar decisiones, escalar dudas y rechazar usos de datos que violen la ley o los valores de la organización.</p>",
        code: "",
        exercise: "Lee un artículo sobre un caso de sesgo algorítmico (por ejemplo, en sistemas de contratación o reconocimiento facial). Responde por escrito: (1) ¿qué variable sensible estaba implicada?, (2) ¿qué métrica de equidad propondrías?, (3) ¿qué dato podrías eliminar sin perder utilidad del modelo?"
      }
    ]
  },
  {
    id: 2,
    title: "Python para Data Science",
    weeks: "3 semanas",
    lessons: [
      {
        n: 5,
        title: "Introducción a Python y entorno de trabajo",
        duration: "90 min",
        objectives: [
          "Instalar y configurar un entorno Python con Jupyter o VS Code",
          "Ejecutar scripts básicos y usar el intérprete interactivo",
          "Aplicar convenciones de estilo PEP 8 en código analítico"
        ],
        content: "<p>Python es el lenguaje dominante en Data Science por su ecosistema (NumPy, Pandas, scikit-learn) y su legibilidad. Trabajarás con entornos virtuales (<code>venv</code> o Conda) para aislar dependencias por proyecto y evitar conflictos de versiones.</p><p>Jupyter Notebook y JupyterLab permiten combinar código, gráficos y narrativa — ideal para exploración. VS Code con la extensión Python ofrece depuración y Git integrado, preferible para pipelines de producción.</p><ul><li><strong>Tipos básicos:</strong> int, float, str, bool.</li><li><strong>Control de flujo:</strong> if/elif/else, for, while, list comprehensions.</li><li><strong>Funciones:</strong> parámetros con valor por defecto, docstrings y type hints opcionales.</li></ul>",
        code: "# Crear entorno: python -m venv .venv\n# Activar (Windows): .venv\\Scripts\\activate\n\nedades = [22, 31, 28, 35]\npromedio = sum(edades) / len(edades)\n\nfor i, edad in enumerate(edades, start=1):\n    print(f\"Persona {i}: {edad} años\")\n\nprint(f\"Promedio: {promedio:.1f}\")",
        exercise: "Crea un entorno virtual, instala Jupyter y abre un notebook. Define una lista de cinco calificaciones (0-100), calcula promedio, máximo y mínimo con funciones propias (no uses NumPy aún). Añade una celda markdown explicando tus resultados."
      },
      {
        n: 6,
        title: "Estructuras de datos: listas, tuplas y diccionarios",
        duration: "90 min",
        objectives: [
          "Manipular listas, tuplas, conjuntos y diccionarios con operaciones idiomáticas",
          "Elegir la estructura adecuada según mutabilidad y acceso",
          "Procesar registros tabulares simples representados como listas de diccionarios"
        ],
        content: "<p>Las <strong>listas</strong> son mutables y ordenadas; las <strong>tuplas</strong> son inmutables — útiles como claves o registros fijos. Los <strong>diccionarios</strong> mapean claves a valores y modelan filas de datos o configuraciones. Los <strong>sets</strong> eliminan duplicados y aceleran pertenencia.</p><p>Patrones frecuentes: <code>dict.get()</code> para valores opcionales, comprensiones de diccionario para transformar columnas, y <code>zip()</code> para combinar listas paralelas. Muchos datasets en bruto llegan como JSON → lista de dicts antes de convertirse a DataFrame.</p><p>Comprender estas estructuras evita bucles innecesarios y prepara el terreno para Pandas, cuyo DataFrame es esencialmente una tabla optimizada sobre arrays NumPy con etiquetas.</p>",
        code: "ventas = [\n    {\"producto\": \"A\", \"cantidad\": 12, \"precio\": 9.5},\n    {\"producto\": \"B\", \"cantidad\": 5, \"precio\": 22.0},\n    {\"producto\": \"A\", \"cantidad\": 3, \"precio\": 9.5},\n]\n\ntotal_por_producto = {}\nfor v in ventas:\n    clave = v[\"producto\"]\n    monto = v[\"cantidad\"] * v[\"precio\"]\n    total_por_producto[clave] = total_por_producto.get(clave, 0) + monto\n\nprint(total_por_producto)  # {'A': 142.5, 'B': 110.0}",
        exercise: "Representa tres empleados como lista de diccionarios con campos nombre, departamento y salario. Calcula el salario promedio por departamento usando un diccionario acumulador. Imprime el departamento con mayor salario promedio."
      },
      {
        n: 7,
        title: "NumPy: arrays y operaciones vectorizadas",
        duration: "90 min",
        objectives: [
          "Crear y reshapear arrays NumPy de distintas dimensionalidades",
          "Aplicar operaciones vectorizadas sin bucles explícitos",
          "Usar indexación booleana y broadcasting para filtros y transformaciones"
        ],
        content: "<p>NumPy proporciona arrays homogéneos en memoria contigua, mucho más rápidos que listas de Python para operaciones numéricas masivas. La <strong>vectorización</strong> aplica funciones elemento a elemento en C subyacente, evitando bucles Python lentos.</p><p>Conceptos clave: <code>shape</code>, <code>dtype</code>, slicing multidimensional, <code>np.where</code>, funciones de agregación (<code>mean</code>, <code>std</code>, <code>sum</code> con <code>axis</code>). El <strong>broadcasting</strong> alinea shapes compatibles para operar arrays de distinto tamaño sin replicar memoria innecesariamente.</p><p>Casi todo el stack de ML en Python (Pandas, scikit-learn, PyTorch) descansa sobre arrays NumPy o estructuras compatibles. Dominar indexación booleana es prerequisito para filtrar DataFrames.</p>",
        code: "import numpy as np\n\nnp.random.seed(42)\ntemp = np.random.normal(loc=20, scale=5, size=365)\n\nprint(f\"Media anual: {temp.mean():.2f}°C\")\nprint(f\"Días > 25°C: {(temp > 25).sum()}\")\n\n# Normalizar (z-score)\ntemp_z = (temp - temp.mean()) / temp.std()\nprint(temp_z[:5])",
        exercise: "Genera un array de 1 000 valores simulados de ingresos mensuales con media 3 500 y desviación 800. Calcula percentiles 25, 50 y 75, cuenta cuántos valores superan 5 000 y crea una versión normalizada del array. Verifica que la media de la versión normalizada sea ~0."
      },
      {
        n: 8,
        title: "Pandas: Series y DataFrames",
        duration: "90 min",
        objectives: [
          "Crear DataFrames desde CSV, diccionarios y arrays NumPy",
          "Seleccionar filas y columnas con loc, iloc y filtros booleanos",
          "Inspeccionar datos con head, info, describe y value_counts"
        ],
        content: "<p>Pandas estructura datos tabulares en <strong>Series</strong> (columna etiquetada) y <strong>DataFrames</strong> (tabla 2D). Es la herramienta central para ingestión, transformación y exportación en proyectos analíticos.</p><p>La selección distingue <code>loc</code> (por etiquetas) e <code>iloc</code> (por posición entera). Métodos como <code>read_csv</code>, <code>to_parquet</code> y <code>merge</code> conectan el análisis con archivos y bases de datos. Siempre revisa <code>df.info()</code> para tipos y nulos, y <code>df.describe()</code> para resúmenes numéricos.</p><ul><li><strong>Índices:</strong> default numérico o fechas con <code>DatetimeIndex</code>.</li><li><strong>Copia vs vista:</strong> usa <code>.copy()</code> al modificar subconjuntos para evitar efectos secundarios.</li></ul>",
        code: "import pandas as pd\n\ndf = pd.read_csv(\"https://raw.githubusercontent.com/mwaskom/seaborn-data/master/tips.csv\")\n\nprint(df.head())\nprint(df.info())\n\n# Propina media por día\nprint(df.groupby(\"day\")[\"tip\"].mean().round(2))\n\n# Filtrar mesas grandes\ngrandes = df.loc[df[\"size\"] >= 5, [\"total_bill\", \"tip\", \"size\"]]\nprint(grandes.head())",
        exercise: "Carga el dataset 'tips' de seaborn (URL del ejemplo o archivo local). Responde: ¿cuántas filas y columnas tiene?, ¿qué columnas son categóricas?, ¿cuál es la propina media en fines de semana vs días laborables? Guarda el subconjunto de facturas superiores a 40 USD en un CSV."
      },
      {
        n: 9,
        title: "Manipulación y limpieza de datos con Pandas",
        duration: "90 min",
        objectives: [
          "Tratar valores faltantes con estrategias apropiadas al contexto",
          "Convertir tipos, parsear fechas y estandarizar categorías",
          "Combinar tablas con merge, join y concat"
        ],
        content: "<p>La limpieza consume gran parte del tiempo real en proyectos. Valores faltantes pueden eliminarse (<code>dropna</code>), imputarse (media, mediana, moda o modelos) o señalizarse con indicadores binarios. La elección depende del mecanismo de ausencia: MCAR, MAR o MNAR.</p><p><code>astype</code>, <code>pd.to_datetime</code> y <code>pd.Categorical</code> corrigen tipos erróneos importados desde CSV. Duplicados se detectan con <code>duplicated()</code>; inconsistencias de texto con <code>str.strip().str.lower()</code>.</p><p>Operaciones relacionales usan <code>merge</code> (SQL-like inner/left/right/outer) y <code>concat</code> para apilar vertical u horizontalmente. Documenta cada transformación en un pipeline reproducible.</p>",
        code: "import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    \"fecha\": [\"2024-01-05\", \"2024-02-10\", None, \"2024-03-01\"],\n    \"ventas\": [100, np.nan, 150, 200],\n    \"region\": [\" Norte \", \"sur\", \"SUR\", \"norte\"],\n})\n\ndf[\"fecha\"] = pd.to_datetime(df[\"fecha\"])\ndf[\"region\"] = df[\"region\"].str.strip().str.title()\ndf[\"ventas\"] = df[\"ventas\"].fillna(df[\"ventas\"].median())\n\nprint(df)",
        exercise: "Construye dos DataFrames: clientes (id, nombre) y pedidos (id_pedido, id_cliente, monto). Introduce valores nulos y duplicados a propósito. Limpia categorías de texto, imputa montos faltantes con la mediana y haz un merge left para listar todos los clientes aunque no tengan pedidos."
      },
      {
        n: 10,
        title: "Visualización con Matplotlib y Seaborn",
        duration: "90 min",
        objectives: [
          "Construir gráficos esenciales: histogramas, scatter, boxplot y barras",
          "Personalizar etiquetas, leyendas y estilos para comunicación clara",
          "Usar Seaborn para visualizaciones estadísticas multivariadas"
        ],
        content: "<p>Un gráfico efectivo responde una pregunta concreta. Matplotlib ofrece control de bajo nivel; Seaborn simplifica gráficos estadísticos sobre DataFrames con paletas y temas coherentes.</p><p>Reglas prácticas: titula con la conclusión, etiqueta ejes con unidades, evita gráficos 3D innecesarios y limita categorías en barras apiladas. Para distribuciones usa histogramas o KDE; para relaciones scatter con hue por categoría; para comparar grupos boxplot o violinplot.</p><p>Exporta figuras en alta resolución (<code>dpi=150</code>) para informes. En notebooks, <code>plt.tight_layout()</code> evita recortes.</p>",
        code: "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\ntips = sns.load_dataset(\"tips\")\n\nfig, axes = plt.subplots(1, 2, figsize=(10, 4))\n\nsns.histplot(tips[\"total_bill\"], kde=True, ax=axes[0])\naxes[0].set_title(\"Distribución de la cuenta\")\n\nsns.scatterplot(data=tips, x=\"total_bill\", y=\"tip\", hue=\"time\", ax=axes[1])\naxes[1].set_title(\"Cuenta vs propina\")\n\nplt.tight_layout()\nplt.show()",
        exercise: "Con el dataset tips, crea un dashboard de cuatro gráficos: histograma de total_bill, boxplot de tip por day, scatter total_bill vs tip coloreado por smoker, y countplot de size. Añade títulos descriptivos y guarda la figura como PNG."
      }
    ]
  },
  {
    id: 3,
    title: "Estadística para Data Science",
    weeks: "2 semanas",
    lessons: [
      {
        n: 11,
        title: "Estadística descriptiva",
        duration: "90 min",
        objectives: [
          "Calcular medidas de tendencia central y dispersión e interpretarlas",
          "Construir tablas de frecuencia y visualizar distribuciones",
          "Elegir la estadística resumen adecuada ante asimetría y outliers"
        ],
        content: "<p>La estadística descriptiva resume conjuntos de datos sin generalizar más allá de la muestra observada. La <strong>media</strong> es sensible a valores extremos; la <strong>mediana</strong> representa mejor distribuciones sesgadas (ingresos, tiempos de espera).</p><p>La dispersión se cuantifica con varianza, desviación estándar, rango intercuartílico (IQR) y coeficiente de variación. Percentiles describen posición relativa: el percentil 90 de latencia indica que el 90 % de peticiones fue más rápido que ese valor.</p><ul><li><strong>Asimetría:</strong> cola derecha larga → media &gt; mediana.</li><li><strong>Curtosis:</strong> colas pesadas implican más outliers de lo esperado en una normal.</li></ul>",
        code: "import pandas as pd\nimport numpy as np\n\nsalarios = pd.Series([2800, 3200, 3100, 2900, 15000, 3050, 2950])\n\nprint(f\"Media: {salarios.mean():.0f}\")\nprint(f\"Mediana: {salarios.median():.0f}\")\nprint(f\"IQR: {salarios.quantile(0.75) - salarios.quantile(0.25):.0f}\")\nprint(salarios.describe())",
        exercise: "Genera o importa 200 valores de una variable sesgada (por ejemplo, precios de vivienda simulados). Calcula media, mediana, moda, IQR y dibuja un histograma. Explica en dos frases por qué reportarías mediana en lugar de media a un stakeholder."
      },
      {
        n: 12,
        title: "Probabilidad y distribuciones",
        duration: "90 min",
        objectives: [
          "Aplicar reglas de probabilidad y variables aleatorias discretas y continuas",
          "Reconocer distribuciones clave: Bernoulli, Binomial, Poisson y Normal",
          "Simular experimentos aleatorios para estimar probabilidades empíricamente"
        ],
        content: "<p>La probabilidad cuantifica incertidumbre. Eventos independientes se combinan multiplicando; mutuamente excluyentes, sumando. Una variable aleatoria mapea resultados a números: discreta (conteos) o continua (mediciones).</p><p>Distribuciones frecuentes: <strong>Bernoulli/Binomial</strong> para éxito/fracaso; <strong>Poisson</strong> para llegadas en intervalos fijos; <strong>Normal</strong> para agregados y errores de medición (teorema central del límite). Conocer parámetros (μ, σ, λ, p) permite modelar fenómenos y generar datos sintéticos.</p><p>La simulación Monte Carlo estima probabilidades complejas repetiendo experimentos aleatorios — útil cuando no hay fórmula cerrada.</p>",
        code: "import numpy as np\n\nnp.random.seed(0)\n\n# Binomial: 10 lanzamientos, p=0.3\nx = np.random.binomial(n=10, p=0.3, size=10_000)\nprint(f\"P(X >= 5): {(x >= 5).mean():.3f}\")\n\n# Normal\naltura = np.random.normal(170, 10, size=5_000)\nprint(f\"P(altura > 185): {(altura > 185).mean():.3f}\")",
        exercise: "Simula 50 000 tiradas de dos dados y estima la probabilidad de que la suma sea 7 o 11. Compara con el valor teórico exacto. Repite con NumPy y verifica que la estimación se acerca al teórico al aumentar simulaciones."
      },
      {
        n: 13,
        title: "Inferencia estadística e intervalos de confianza",
        duration: "90 min",
        objectives: [
          "Diferenciar población, muestra y parámetro vs estadístico",
          "Construir e interpretar intervalos de confianza para la media",
          "Comprender el significado frecuentista del nivel de confianza"
        ],
        content: "<p>Inferimos propiedades de una <strong>población</strong> a partir de una <strong>muestra</strong> aleatoria. El error estándar de la media decrece con √n: muestras grandes producen estimaciones más precisas.</p><p>Un intervalo de confianza al 95 % es un procedimiento que, repetido muchas veces, contendría el parámetro verdadero en ~95 % de las repeticiones — no significa 95 % de probabilidad de que μ esté en un intervalo ya calculado. Usamos t-Student si σ es desconocida y n es moderada.</p><p>Reportar IC junto a estimaciones puntuales comunica incertidumbre y evita falsa precisión en dashboards ejecutivos.</p>",
        code: "import numpy as np\nfrom scipy import stats\n\nnp.random.seed(1)\nmuestra = np.random.normal(loc=100, scale=15, size=40)\n\nmedia = muestra.mean()\nse = stats.sem(muestra)\n\nic = stats.t.interval(0.95, df=len(muestra)-1, loc=media, scale=se)\nprint(f\"Media muestral: {media:.2f}\")\nprint(f\"IC 95%: [{ic[0]:.2f}, {ic[1]:.2f}]\")",
        exercise: "Toma una muestra aleatoria de al menos 30 registros de una columna numérica de un dataset público. Calcula media muestral, error estándar e intervalo de confianza al 95 %. Interpreta el intervalo en lenguaje de negocio (una frase)."
      },
      {
        n: 14,
        title: "Pruebas de hipótesis",
        duration: "90 min",
        objectives: [
          "Formular hipótesis nula y alternativa para problemas de negocio",
          "Ejecutar pruebas t, chi-cuadrado y comprender p-valor y significancia",
          "Evitar interpretaciones erróneas del p-valor y el tamaño del efecto"
        ],
        content: "<p>Una prueba de hipótesis evalúa si los datos son compatibles con una hipótesis nula H₀ (efecto nulo). El <strong>p-valor</strong> es la probabilidad, bajo H₀, de observar un estadístico tan extremo como el obtenido — no es P(H₀ es verdadera).</p><p>Prueba t compara medias; chi-cuadrado evalúa independencia en tablas de contingencia. Un p &lt; α (típicamente 0,05) lleva a rechazar H₀, pero la significancia estadística no implica relevancia práctica: con n enorme, diferencias triviales pueden ser «significativas».</p><p>Complementa con tamaño del efecto (Cohen's d) e intervalos de confianza. Planifica α, potencia y tamaño muestral antes de recolectar datos cuando sea posible.</p>",
        code: "from scipy import stats\n\n# ¿La media de un grupo difiere de 100?\nmuestra = [98, 102, 97, 101, 99, 103, 100, 96, 104, 101]\nt_stat, p_val = stats.ttest_1samp(muestra, popmean=100)\n\nprint(f\"t = {t_stat:.3f}, p = {p_val:.4f}\")\n\n# Tabla contingencia: chi-cuadrado\nobs = [[30, 20], [25, 25]]\nchi2, p, dof, expected = stats.chi2_contingency(obs)\nprint(f\"chi2 p-valor: {p:.4f}\")",
        exercise: "Compara la propina media entre fumadores y no fumadores en el dataset tips usando una prueba t de dos muestras. Formula H₀ y H₁, reporta p-valor y concluye a α=0,05. ¿La diferencia es prácticamente relevante? Calcula la diferencia de medias."
      },
      {
        n: 15,
        title: "Correlación y regresión lineal",
        duration: "90 min",
        objectives: [
          "Calcular e interpretar coeficientes de correlación de Pearson y Spearman",
          "Ajustar una recta de mínimos cuadrados y leer pendiente e intercepto",
          "Distinguir correlación de causalidad y detectar puntos influyentes"
        ],
        content: "<p>La correlación mide asociación lineal (Pearson) o monótona (Spearman). Valores cercanos a ±1 indican relación fuerte; cero sugiere ausencia de relación lineal, no necesariamente independencia.</p><p>La regresión lineal modela y ≈ β₀ + β₁x + ε, estimando β por mínimos cuadrados. β₁ cuantifica cambio esperado en y por unidad de x. R² indica proporción de varianza explicada — no implica que el modelo sea correcto ni causal.</p><p>Diagramas de dispersión con línea de ajuste revelan no linealidad, heterocedasticidad y outliers influyentes. Siempre visualiza antes de confiar en un coeficiente.</p>",
        code: "import pandas as pd\nimport numpy as np\nfrom scipy import stats\nimport seaborn as sns\n\ntips = sns.load_dataset(\"tips\")\n\nr, p = stats.pearsonr(tips[\"total_bill\"], tips[\"tip\"])\nslope, intercept, r_val, p_val, se = stats.linregress(tips[\"total_bill\"], tips[\"tip\"])\n\nprint(f\"Correlación r = {r:.3f} (p = {p:.2e})\")\nprint(f\"tip ≈ {intercept:.2f} + {slope:.2f} * total_bill\")",
        exercise: "Con tips, ajusta regresión lineal de tip sobre total_bill. Grafica scatter + recta, reporta R² y predice la propina esperada para una cuenta de 45 USD. Identifica si algún punto se aleja mucho del patrón general."
      }
    ]
  },
  {
    id: 4,
    title: "Análisis Exploratorio de Datos (EDA)",
    weeks: "2 semanas",
    lessons: [
      {
        n: 16,
        title: "Metodología de EDA",
        duration: "90 min",
        objectives: [
          "Planificar un flujo sistemático de exploración antes del modelado",
          "Documentar hallazgos, preguntas y decisiones de limpieza",
          "Integrar visualización, estadística descriptiva y dominio del negocio"
        ],
        content: "<p>El EDA transforma datos crudos en comprensión. John Tukey lo popularizó como iteración entre preguntas, gráficos y transformaciones. Objetivos: detectar errores, entender distribuciones, revelar relaciones y generar hipótesis para modelado.</p><p>Un notebook de EDA debe ser legible por otros: secciones claras, conclusiones por bloque, no solo código. Pregunta siempre: ¿esta variable tiene sentido?, ¿hay unidades coherentes?, ¿qué sorpresa cambiaría el enfoque del proyecto?</p><ul><li><strong>Orden sugerido:</strong> dimensiones → tipos → nulos → univariado → bivariado → multivariado.</li><li><strong>Entregable:</strong> informe con 5-10 insights accionables priorizados.</li></ul>",
        code: "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\ndf = sns.load_dataset(\"penguins\").dropna()\n\nprint(\"Shape:\", df.shape)\nprint(df.dtypes)\nprint(df.isnull().sum())\nprint(df.describe(include=\"all\").T.head())",
        exercise: "Elige un dataset de seaborn (penguins, diamonds o flights). Crea un notebook con plantilla EDA: metadatos, calidad, tres insights univariados y una pregunta abierta para investigar en la siguiente clase. Exporta el notebook a HTML."
      },
      {
        n: 17,
        title: "Análisis univariado",
        duration: "90 min",
        objectives: [
          "Analizar distribuciones de variables numéricas y categóricas por separado",
          "Detectar asimetría, multimodalidad y categorías raras",
          "Aplicar transformaciones log o estandarización cuando proceda"
        ],
        content: "<p>El análisis univariado examina una variable a la vez. Para numéricas: histograma, KDE, boxplot y estadísticas robustas. Para categóricas: frecuencias, proporciones y barras ordenadas por conteo.</p><p>Categorías con muy baja frecuencia pueden agruparse en «Otros» para estabilizar modelos. Distribuciones muy sesgadas (precios, clicks) a menudo se transforman con log1p antes de correlacionar o regresionar.</p><p>Compara siempre varias visualizaciones: un histograma puede ocultar bimodalidad que un boxplot sugiere mediante múltiples «cajas» implícitas en outliers agrupados.</p>",
        code: "import numpy as np\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\ndiamonds = sns.load_dataset(\"diamonds\")\n\nfig, ax = plt.subplots(1, 2, figsize=(10, 4))\nsns.histplot(diamonds[\"price\"], bins=50, ax=ax[0])\nax[0].set_title(\"Precio (sesgado)\")\n\nsns.histplot(diamonds[\"price\"].apply(lambda x: np.log(x)), ax=ax[1])\nax[1].set_title(\"log(precio)\")",
        exercise: "Analiza la variable price del dataset diamonds: histograma, boxplot, media vs mediana. Aplica log-transform y compara forma de la distribución. ¿Cuántos outliers superiores al percentil 99 hay?"
      },
      {
        n: 18,
        title: "Análisis bivariado y multivariado",
        duration: "90 min",
        objectives: [
          "Explorar relaciones entre pares de variables con scatter, heatmap y pairplot",
          "Segmentar análisis por categorías con groupby y facet grids",
          "Identificar interacciones relevantes para features o modelos"
        ],
        content: "<p>Bivariado: num-num → scatter + correlación; cat-num → boxplot/violin por grupo; cat-cat → tabla de contingencia + heatmap de proporciones. Multivariado: pairplot, matriz de correlación con clustering o PCA exploratorio.</p><p>Segmentar por categoría (ej. especie de pingüino) revela relaciones ocultas en agregados globales — fenómeno de Simpson. FacetGrid de Seaborn automatiza paneles por nivel categórico.</p><p>Prioriza pares con significado de negocio; evita matrices de correlación de 80 variables sin filtro — enfoque en hipótesis o top correlaciones absolutas.</p>",
        code: "import seaborn as sns\nimport matplotlib.pyplot as plt\n\npenguins = sns.load_dataset(\"penguins\").dropna()\n\nsns.pairplot(penguins, hue=\"species\", vars=[\"bill_length_mm\", \"flipper_length_mm\", \"body_mass_g\"])\nplt.show()\n\nprint(penguins.groupby(\"species\")[[\"bill_length_mm\", \"body_mass_g\"]].mean().round(1))",
        exercise: "Con penguins, calcula correlación de Pearson solo entre variables numéricas. Crea heatmap y pairplot coloreado por species. Escribe dos insights: uno global y uno que solo aparece al segmentar por especie."
      },
      {
        n: 19,
        title: "Detección de outliers y valores faltantes",
        duration: "90 min",
        objectives: [
          "Aplicar reglas IQR y z-score para detectar valores atípicos",
          "Diagnosticar patrones de missingness: MCAR, MAR y MNAR",
          "Decidir imputación, eliminación o modelado según contexto y riesgo"
        ],
        content: "<p>Outliers pueden ser errores de medición o eventos raros legítimos. Regla IQR: fuera de [Q1−1,5·IQR, Q3+1,5·IQR]. Z-score: |z|&gt;3. Nunca elimines automáticamente: valida con dominio (¿un ingreso de 10 M es posible?).</p><p>Valores faltantes: visualiza con mapa de calor (<code>sns.heatmap(df.isnull())</code>). Si faltan en bloques por fecha, puede ser MAR. Imputación simple (media/mediana) reduce varianza; imputación múltiple o modelos capturan incertidumbre mejor.</p><p>Documenta % de nulos por columna y filas eliminadas. En ML, a veces conviene crear feature <code>was_missing</code>.</p>",
        code: "import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\"x\": [1, 2, 2, 3, 100, 4, 5, np.nan, 6]})\n\nQ1, Q3 = df[\"x\"].quantile([0.25, 0.75])\nIQR = Q3 - Q1\noutliers = df[(df[\"x\"] < Q1 - 1.5*IQR) | (df[\"x\"] > Q3 + 1.5*IQR)]\nprint(\"Outliers IQR:\", outliers)\n\ndf[\"x_imputed\"] = df[\"x\"].fillna(df[\"x\"].median())\nprint(df)",
        exercise: "Introduce 5 % de valores nulos aleatorios y 3 outliers extremos en una columna numérica real. Detecta outliers con IQR, compara con z-score. Prueba imputación por mediana y por media: ¿cómo cambia la desviación estándar?"
      },
      {
        n: 20,
        title: "Feature engineering básico",
        duration: "90 min",
        objectives: [
          "Crear variables derivadas: ratios, bins, fechas y codificaciones categóricas",
          "Evaluar si una transformación mejora interpretabilidad o poder predictivo",
          "Evitar leakage al construir features con información del futuro"
        ],
        content: "<p>Feature engineering convierte datos en representaciones más útiles para modelos. Ejemplos: ratio gasto/ingreso, edad desde fecha de nacimiento, día de la semana desde timestamp, bins de ingreso (cuantiles), interacciones (precio × descuento).</p><p>Categóricas de baja cardinalidad → one-hot encoding; alta cardinalidad → target encoding con validación cruzada cuidadosa. Escalado (StandardScaler, MinMaxScaler) es crítico para modelos basados en distancia o gradiente.</p><p><strong>Data leakage:</strong> no uses estadísticas calculadas sobre todo el dataset antes del split train/test (ej. normalizar con media global incluyendo test).</p>",
        code: "import pandas as pd\n\ndf = pd.DataFrame({\n    \"fecha\": pd.to_datetime([\"2024-03-15\", \"2024-07-02\", \"2024-11-20\"]),\n    \"ingreso\": [3000, 4500, 2800],\n    \"gasto\": [2200, 3800, 3100],\n})\n\ndf[\"mes\"] = df[\"fecha\"].dt.month\ndf[\"ratio_gasto_ingreso\"] = df[\"gasto\"] / df[\"ingreso\"]\ndf[\"ingreso_bin\"] = pd.qcut(df[\"ingreso\"], q=3, labels=[\"bajo\", \"medio\", \"alto\"])\n\nprint(df)",
        exercise: "Partiendo de un dataset con al menos una fecha y dos numéricas, crea tres features nuevas (temporal, ratio y binning). Justifica cada una en una frase. Separa train/test 80/20 y escala solo con estadísticas del train."
      }
    ]
  },
  {
    id: 5,
    title: "Machine Learning Supervisado",
    weeks: "3 semanas",
    lessons: [
      {
        n: 21,
        title: "Introducción al aprendizaje supervisado",
        duration: "90 min",
        objectives: [
          "Diferenciar aprendizaje supervisado, no supervisado y por refuerzo",
          "Clasificar problemas en regresión vs clasificación",
          "Comprender overfitting, underfitting y el trade-off sesgo-varianza"
        ],
        content: "<p>En aprendizaje <strong>supervisado</strong> el modelo aprende una función f(x)→y a partir de ejemplos etiquetados. <strong>Regresión</strong> predice valores continuos (precio); <strong>clasificación</strong> asigna categorías (spam/no spam).</p><p>Partimos datos en entrenamiento y prueba (hold-out) o usamos validación cruzada. Overfitting memoriza ruido; underfitting no captura la señal. La complejidad del modelo debe equilibrarse con cantidad y calidad de datos.</p><p>scikit-learn unifica API: <code>fit</code>, <code>predict</code>, <code>predict_proba</code>. Pipeline reproducible = transformaciones + modelo en un solo objeto.</p>",
        code: "from sklearn.model_selection import train_test_split\nfrom sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.metrics import accuracy_score\nfrom sklearn.datasets import load_iris\n\nX, y = load_iris(return_X_y=True)\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\nmodel = KNeighborsClassifier(n_neighbors=5)\nmodel.fit(X_train, y_train)\npreds = model.predict(X_test)\nprint(f\"Accuracy: {accuracy_score(y_test, preds):.3f}\")",
        exercise: "Carga Iris, divide 70/30 y entrena KNN con k=3 y k=15. Compara accuracy en train y test. ¿Cuál muestra más overfitting? Explica el trade-off sesgo-varianza en una frase."
      },
      {
        n: 22,
        title: "Regresión lineal y polinomial",
        duration: "90 min",
        objectives: [
          "Entrenar regresión lineal múltiple e interpretar coeficientes estandarizados",
          "Extender con features polinomiales para relaciones no lineales",
          "Evaluar con MAE, MSE y R² en conjunto de validación"
        ],
        content: "<p>Regresión lineal múltiple modela y = w₀ + Σ wᵢxᵢ. Con features estandarizados, magnitud de wᵢ refleja importancia relativa. Regularización Ridge (L2) y Lasso (L1) penalizan pesos grandes y seleccionan variables.</p><p>PolynomialFeatures genera x, x², interacciones — permite curvas pero aumenta riesgo de overfitting. Siempre valida en datos no vistos y compara curvas de aprendizaje al subir el grado.</p><p>Métricas: MAE (interpretable en unidades originales), RMSE (penaliza errores grandes), R² (varianza explicada, puede ser negativo en test si el modelo es malo).</p>",
        code: "from sklearn.preprocessing import PolynomialFeatures, StandardScaler\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.model_selection import cross_val_score\nimport numpy as np\n\nX = np.linspace(0, 10, 100).reshape(-1, 1)\ny = 3 + 2*X.ravel() + 0.5*X.ravel()**2 + np.random.normal(0, 2, 100)\n\npipe = Pipeline([\n    (\"poly\", PolynomialFeatures(degree=2)),\n    (\"scale\", StandardScaler()),\n    (\"reg\", LinearRegression()),\n])\n\nscores = cross_val_score(pipe, X, y, cv=5, scoring=\"neg_mean_squared_error\")\nprint(f\"RMSE CV: {(-scores.mean())**0.5:.2f}\")",
        exercise: "Simula datos cuadráticos con ruido. Compara regresión lineal simple vs polinomial grado 2 y 5 usando validación cruzada. Grafica curvas de ajuste y discute cuál generaliza mejor."
      },
      {
        n: 23,
        title: "Regresión logística",
        duration: "90 min",
        objectives: [
          "Modelar probabilidades de clase con la función sigmoide",
          "Entrenar clasificadores binarios y multiclase (one-vs-rest)",
          "Interpretar coeficientes en términos de log-odds y odds ratios"
        ],
        content: "<p>Regresión logística predice P(y=1|x) mediante sigmoide(w·x). Es lineal en el espacio de log-odds pero flexible con feature engineering. Para multiclase, scikit-learn usa OvR o multinomial según el solver.</p><p>Umbral default 0,5 puede no ser óptimo en costos asimétricos (fraude, enfermedad): ajusta umbral maximizando F1 o minimizando costo esperado. Curva ROC y AUC resumen rendimiento sobre todos los umbrales en binario.</p><p>Interpretación: un coeficiente positivo aumenta log-odds de la clase positiva al incrementar la feature (manteniendo otras fijas).</p>",
        code: "from sklearn.linear_model import LogisticRegression\nfrom sklearn.datasets import load_breast_cancer\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import classification_report\n\nX, y = load_breast_cancer(return_X_y=True)\nX_train, X_test, y_train, y_test = train_test_split(X, y, stratify=y, random_state=42)\n\nclf = LogisticRegression(max_iter=1000)\nclf.fit(X_train, y_train)\nprint(classification_report(y_test, clf.predict(X_test)))",
        exercise: "Entrena regresión logística en breast_cancer con split estratificado. Obtén probabilidades predictivas y prueba umbrales 0,3 / 0,5 / 0,7. ¿Cómo cambian precision y recall de la clase positiva?"
      },
      {
        n: 24,
        title: "Árboles de decisión y Random Forest",
        duration: "90 min",
        objectives: [
          "Comprender particiones recursivas por criterios de impureza (Gini, entropía)",
          "Controlar profundidad y hojas mínimas para regularizar árboles",
          "Aplicar Random Forest como ensemble de bagging con importancia de variables"
        ],
        content: "<p>Un árbol de decisión divide el espacio de features en regiones rectangulares maximizando pureza de clases o reduciendo varianza en regresión. Sin límite de profundidad, overfit severo. Podar o limitar <code>max_depth</code>, <code>min_samples_leaf</code> regulariza.</p><p><strong>Random Forest</strong> entrena muchos árboles sobre muestras bootstrap y subconjuntos aleatorios de features; promedia predicciones (regresión) o vota (clasificación). Reduce varianza y ofrece <code>feature_importances_</code> — útil pero sesgado con variables correlacionadas.</p><p>Visualizar un árbol pequeño ayuda a explicar reglas de negocio interpretables antes de pasar a bosques opacos.</p>",
        code: "from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_wine\nfrom sklearn.model_selection import train_test_split\nimport pandas as pd\n\nX, y = load_wine(return_X_y=True)\nX_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)\n\nrf = RandomForestClassifier(n_estimators=200, max_depth=6, random_state=42)\nrf.fit(X_train, y_train)\nprint(f\"Test accuracy: {rf.score(X_test, y_test):.3f}\")\n\nimp = pd.Series(rf.feature_importances_).sort_values(ascending=False)\nprint(imp.head())",
        exercise: "Compara un DecisionTreeClassifier sin límite vs max_depth=4 vs RandomForest en wine. Reporta accuracy train/test de cada uno. Lista las tres features más importantes del bosque."
      },
      {
        n: 25,
        title: "Support Vector Machines (SVM)",
        duration: "90 min",
        objectives: [
          "Entender márgenes máximos y el papel de vectores de soporte",
          "Aplicar kernel RBF para fronteras no lineales",
          "Escalar features y ajustar C y gamma con validación"
        ],
        content: "<p>SVM busca el hiperplano que maximiza el margen entre clases. Puntos en el borde son vectores de soporte. Parámetro C controla trade-off entre margen ancho y errores de entrenamiento (soft margin).</p><p>Kernel RBF mapea implícitamente a espacio de alta dimensión: γ grande → fronteras muy wiggly (overfit); γ pequeño → fronteras suaves. SVM escala mal a millones de filas pero funciona bien en medianas dimensiones con features numéricas escaladas.</p><p>Para probabilidades calibradas usa <code>probability=True</code> (Platt scaling) o calibradores posteriores.</p>",
        code: "from sklearn.svm import SVC\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.datasets import make_moons\nfrom sklearn.model_selection import train_test_split\n\nX, y = make_moons(n_samples=500, noise=0.25, random_state=42)\nX_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)\n\npipe = Pipeline([\n    (\"scale\", StandardScaler()),\n    (\"svm\", SVC(kernel=\"rbf\", C=1.0, gamma=\"scale\")),\n])\npipe.fit(X_train, y_train)\nprint(f\"Accuracy: {pipe.score(X_test, y_test):.3f}\")",
        exercise: "Con make_moons, entrena SVM lineal vs RBF. Visualiza fronteras de decisión (mesh grid). Prueba C=0.1 y C=100: ¿cuál overfittea más en train?"
      },
      {
        n: 26,
        title: "Evaluación de modelos: métricas y validación cruzada",
        duration: "90 min",
        objectives: [
          "Seleccionar métricas alineadas al objetivo de negocio",
          "Implementar k-fold estratificado y curvas de aprendizaje",
          "Interpretar matrices de confusión, precision, recall y F1"
        ],
        content: "<p>Accuracy engaña en clases desbalanceadas. Usa <strong>precision</strong> (de los predichos positivos, cuántos lo son), <strong>recall</strong> (de los positivos reales, cuántos detectamos) y <strong>F1</strong> (media armónica). Macro vs weighted promedian por clase.</p><p>Validación cruzada k-fold estima rendimiento con varianza menor que un solo split. StratifiedKFold preserva proporción de clases. Curvas de aprendizaje muestran si más datos ayudarían o si el modelo está en bias alto.</p><p>Define métrica principal antes de entrenar — alinear con costo de falsos positivos vs falsos negativos en salud o fraude.</p>",
        code: "from sklearn.model_selection import cross_validate, StratifiedKFold\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_digits\n\nX, y = load_digits(return_X_y=True)\n\nclf = RandomForestClassifier(n_estimators=100, random_state=42)\ncv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)\n\nscores = cross_validate(clf, X, y, cv=cv, scoring=[\"accuracy\", \"f1_macro\"])\nprint(f\"Accuracy: {scores['test_accuracy'].mean():.3f} ± {scores['test_accuracy'].std():.3f}\")\nprint(f\"F1 macro: {scores['test_f1_macro'].mean():.3f}\")",
        exercise: "En un problema binario desbalanceado (puedes sub-muestrear o usar make_classification con weights), compara accuracy, F1 y ROC-AUC de un RandomForest. ¿Cuál métrica refleja mejor un contexto donde falsos negativos son muy costosos?"
      },
      {
        n: 27,
        title: "Optimización de hiperparámetros y pipelines",
        duration: "90 min",
        objectives: [
          "Automatizar búsqueda con GridSearchCV y RandomizedSearchCV",
          "Encadenar preprocesamiento y modelo en Pipeline para evitar leakage",
          "Persistir modelos entrenados con joblib para reproducibilidad"
        ],
        content: "<p>Hiperparámetros (k en KNN, profundidad en árboles, C en SVM) no se aprenden en fit estándar — se eligen por búsqueda en validación cruzada anidada cuando hay muchos trials. GridSearch exhaustivo; RandomizedSearch eficiente en espacios grandes.</p><p>Pipeline garantiza que scaler y selector se ajusten solo en folds de entrenamiento dentro de CV. Evita el anti-patrón fit_transform en todo X antes del split.</p><p>Serializa con <code>joblib.dump</code> para despliegue o auditoría. Incluye versión de librerías y hash del dataset en metadatos del experimento.</p>",
        code: "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.svm import SVC\nfrom sklearn.model_selection import GridSearchCV\nfrom sklearn.datasets import load_breast_cancer\n\nX, y = load_breast_cancer(return_X_y=True)\n\npipe = Pipeline([\n    (\"scale\", StandardScaler()),\n    (\"svm\", SVC()),\n])\n\nparam_grid = {\"svm__C\": [0.1, 1, 10], \"svm__gamma\": [\"scale\", 0.01, 0.1]}\nsearch = GridSearchCV(pipe, param_grid, cv=5, scoring=\"f1\", n_jobs=-1)\nsearch.fit(X, y)\nprint(\"Mejores params:\", search.best_params_)\nprint(f\"F1 CV: {search.best_score_:.3f}\")",
        exercise: "Construye un Pipeline con StandardScaler + RandomForestClassifier. Usa RandomizedSearchCV sobre n_estimators, max_depth y min_samples_leaf (al menos 20 combinaciones). Guarda el mejor modelo con joblib y recárgalo verificando misma predicción en una fila."
      }
    ]
  },
  {
    id: 6,
    title: "Machine Learning No Supervisado",
    weeks: "2 semanas",
    lessons: [
      {
        n: 28,
        title: "Clustering: K-Means y jerárquico",
        duration: "90 min",
        objectives: [
          "Aplicar K-Means e interpretar centroides y inercia",
          "Construir dendrogramas con clustering jerárquico aglomerativo",
          "Elegir número de clusters con método del codo y silueta"
        ],
        content: "<p>Clustering agrupa observaciones similares sin etiquetas. <strong>K-Means</strong> alterna asignación a centroides más cercanos y recálculo de centroides; requiere especificar k y escalar features. Inercia (WCSS) decrece al aumentar k — método del codo busca punto de inflexión.</p><p>Clustering jerárquico aglomerativo fusiona clusters cercanos; dendrograma visualiza fusiones. Útil con pocos puntos; costoso en n grande. Métrica de silueta mide cohesión intra-cluster vs separación inter-cluster (−1 a 1).</p><p>Resultados dependen de escala y outliers — estandariza antes. Valida clusters con conocimiento de dominio, no solo métricas internas.</p>",
        code: "from sklearn.cluster import KMeans\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.metrics import silhouette_score\nfrom sklearn.datasets import load_iris\n\nX, _ = load_iris(return_X_y=True)\nX_scaled = StandardScaler().fit_transform(X)\n\nfor k in range(2, 6):\n    km = KMeans(n_clusters=k, random_state=42, n_init=10)\n    labels = km.fit_predict(X_scaled)\n    print(f\"k={k} silueta={silhouette_score(X_scaled, labels):.3f}\")",
        exercise: "Escala features de Iris y prueba K-Means con k=2,3,4. Calcula silueta y grafica clusters en 2D (primeras dos PCA si hace falta). ¿Coincide k=3 con las especies reales? Compara con labels verdaderos solo para evaluación — no uses y en entrenamiento."
      },
      {
        n: 29,
        title: "Reducción de dimensionalidad: PCA",
        duration: "90 min",
        objectives: [
          "Proyectar datos a componentes principales que maximizan varianza",
          "Decidir cuántos componentes retener con gráfico de varianza explicada acumulada",
          "Usar PCA para visualización y como preprocesamiento antes de ML"
        ],
        content: "<p>PCA encuentra direcciones ortogonales de máxima varianza. Componentes son combinaciones lineales de features originales. Estandarizar es casi obligatorio cuando escalas difieren (edad vs ingreso).</p><p>Retén componentes que acumulen 90-95 % de varianza o usa regla del codo en gráfico de valores propios. PCA reduce ruido y acelera modelos, pero componentes pierden interpretabilidad directa — revisa loadings para significado aproximado.</p><p>Visualizar PC1 vs PC2 coloreado por clase ayuda a ver separabilidad lineal antes de clasificar.</p>",
        code: "from sklearn.decomposition import PCA\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.datasets import load_breast_cancer\nimport matplotlib.pyplot as plt\n\nX, y = load_breast_cancer(return_X_y=True)\nX_s = StandardScaler().fit_transform(X)\n\npca = PCA(n_components=2)\nX_pca = pca.fit_transform(X_s)\nprint(f\"Varianza explicada: {pca.explained_variance_ratio_.sum():.2f}\")\n\nplt.scatter(X_pca[:, 0], X_pca[:, 1], c=y, alpha=0.6)\nplt.xlabel(\"PC1\"); plt.ylabel(\"PC2\"); plt.show()",
        exercise: "Aplica PCA a breast_cancer reteniendo componentes hasta 95 % varianza acumulada. ¿Cuántos componentes necesitas? Entrena un clasificador en espacio reducido vs original y compara accuracy y tiempo de entrenamiento."
      },
      {
        n: 30,
        title: "Detección de anomalías",
        duration: "90 min",
        objectives: [
          "Diferenciar detección de anomalías supervisada y no supervisada",
          "Aplicar Isolation Forest e Local Outlier Factor",
          "Calibrar umbrales según tasa de contaminación esperada"
        ],
        content: "<p>Anomalías son observaciones raras que se desvían del patrón mayoritario: fraude, fallas de máquina, intrusiones. En no supervisado asumimos pocas anomalías y muchos «normales».</p><p><strong>Isolation Forest</strong> aísla puntos aleatoriamente — anomalías se aíslan con menos splits. <strong>LOF</strong> compara densidad local de un punto vs sus vecinos. Parámetro <code>contamination</code> estima proporción esperada de outliers.</p><p>Validación es difícil sin etiquetas: revisa manualmente top-N scores con expertos de dominio. No confundas outliers de EDA con anomalías operativas.</p>",
        code: "from sklearn.ensemble import IsolationForest\nimport numpy as np\n\nnp.random.seed(42)\nX_normal = np.random.normal(0, 1, (1000, 2))\nX_anom = np.random.uniform(-4, 4, (20, 2))\nX = np.vstack([X_normal, X_anom])\n\niso = IsolationForest(contamination=0.02, random_state=42)\npred = iso.fit_predict(X)  # -1 outlier, 1 inlier\nprint(f\"Detectados: {(pred == -1).sum()}\")",
        exercise: "Genera 950 puntos de una normal bivariada y 50 puntos uniformes dispersos. Entrena Isolation Forest y LOF. Compara cuántas anomalías verdaderas detecta cada método (tienes etiquetas sintéticas). Visualiza en scatter coloreando scores."
      },
      {
        n: 31,
        title: "Sistemas de recomendación",
        duration: "90 min",
        objectives: [
          "Distinguir filtrado colaborativo basado en usuarios e ítems",
          "Construir recomendaciones con similitud de coseno sobre matriz usuario-ítem",
          "Reconocer cold start y enfoques híbridos con contenido"
        ],
        content: "<p>Recomendadores predicen preferencias no observadas. <strong>User-based CF:</strong> usuarios similares gustaron X → te recomiendo X. <strong>Item-based CF:</strong> ítems similares a los que te gustaron. Matriz sparse usuario×rating es el corazón del problema.</p><p>Similitud coseno mide ángulo entre vectores de ratings (ignora magnitud absoluta). SVD/matrix factorization (surprise, implicit) aprende factores latentes de usuarios e ítems — base de muchos sistemas industriales.</p><p><strong>Cold start:</strong> usuarios/ítems nuevos sin historial requieren features de contenido (género, texto) o popularidad global como fallback.</p>",
        code: "import pandas as pd\nfrom sklearn.metrics.pairwise import cosine_similarity\n\nratings = pd.DataFrame({\n    \"user\": [\"A\",\"A\",\"B\",\"B\",\"C\"],\n    \"item\": [\"i1\",\"i2\",\"i1\",\"i3\",\"i2\"],\n    \"rating\": [5, 3, 4, 5, 2],\n})\n\nmatrix = ratings.pivot_table(index=\"user\", columns=\"item\", values=\"rating\").fillna(0)\nsim_items = cosine_similarity(matrix.T)\n\nprint(pd.DataFrame(sim_items, index=matrix.columns, columns=matrix.columns).round(2))",
        exercise: "Construye una matriz usuario-ítem pequeña (al menos 5 usuarios, 8 ítems, 30 % vacíos). Implementa recomendación item-based: para un usuario, sugiere el ítem no visto más similar a sus ítems mejor puntuados. Evalúa manualmente si las sugerencias tienen sentido."
      }
    ]
  },
  {
    id: 7,
    title: "NLP, Series Temporales e IA",
    weeks: "2 semanas",
    lessons: [
      {
        n: 32,
        title: "Introducción al procesamiento de lenguaje natural",
        duration: "90 min",
        objectives: [
          "Aplicar tokenización, normalización y eliminación de stopwords en español",
          "Representar texto con Bag-of-Words y TF-IDF",
          "Entrenar un clasificador simple sobre vectores TF-IDF"
        ],
        content: "<p>NLP convierte texto en señales numéricas. Pipeline clásico: minúsculas, tokenización, stopwords (de, la, el…), stemming o lematización, vectorización. Reglas dependen del idioma — usa recursos en español cuando analices textos hispanos.</p><p><strong>Bag-of-Words</strong> cuenta frecuencias; <strong>TF-IDF</strong> pondera términos raros en el corpus pero frecuentes en un documento. Sparse matrices de alta dimensionalidad alimentan Naive Bayes, regresión logística o SVM lineales.</p><p>Limitaciones: pierden orden y contexto. Modelos modernos (transformers) superan esto, pero TF-IDF sigue siendo baseline sólido y rápido.</p>",
        code: "from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.model_selection import train_test_split\n\ntextos = [\n    \"excelente producto muy recomendable\",\n    \"pésima calidad no lo compren\",\n    \"me encantó llegó rápido\",\n    \"decepcionante total pérdida de dinero\",\n    \"buen servicio atención amable\",\n    \"horrible experiencia nunca más\",\n]\nlabels = [1, 0, 1, 0, 1, 0]  # 1 positivo, 0 negativo\n\npipe = Pipeline([\n    (\"tfidf\", TfidfVectorizer(max_features=500)),\n    (\"clf\", LogisticRegression()),\n])\n\nX_train, X_test, y_train, y_test = train_test_split(textos, labels, random_state=42)\npipe.fit(X_train, y_train)\nprint(f\"Accuracy: {pipe.score(X_test, y_test):.2f}\")",
        exercise: "Crea un mini-corpus de al menos 20 reseñas en español (positivas/negativas). Entrena TF-IDF + LogisticRegression. Prueba tres frases nuevas y analiza qué términos pesan más en coeficientes positivos y negativos."
      },
      {
        n: 33,
        title: "Series temporales: análisis y descomposición",
        duration: "90 min",
        objectives: [
          "Identificar tendencia, estacionalidad y componente residual en series",
          "Calcular medias móviles y diferencias para estacionarizar",
          "Visualizar series con índices datetime y frecuencia regular"
        ],
        content: "<p>Una serie temporal ordena observaciones en el tiempo (ventas diarias, temperatura horaria). Patrones comunes: <strong>tendencia</strong> (crecimiento), <strong>estacionalidad</strong> (ciclo semanal/anual), <strong>ruido</strong> aleatorio.</p><p>Descomposición clásica (aditiva o multiplicativa) separa componentes con statsmodels. Diferencias y log-transform estabilizan varianza. Estacionariedad (media/varianza constantes) es requisito para muchos modelos ARIMA.</p><p>Usa <code>pd.date_range</code>, índice DatetimeIndex y re-muestreo (<code>resample</code>) para agregar a semana/mes. Cuidado con datos faltantes en fechas — reindexar explícitamente.</p>",
        code: "import pandas as pd\nimport matplotlib.pyplot as plt\nfrom statsmodels.tsa.seasonal import seasonal_decompose\n\nidx = pd.date_range(\"2023-01-01\", periods=365, freq=\"D\")\nserie = pd.Series(100 + 0.05*range(365) + 10*(pd.Series(range(365)) % 7) + pd.Series(range(365)).apply(lambda i: (i % 30) - 15), index=idx)\n\nresult = seasonal_decompose(serie, model=\"additive\", period=7)\nresult.plot()\nplt.show()",
        exercise: "Descarga o simula ventas diarias de un año con tendencia y patrón semanal. Grafica la serie, calcula media móvil de 7 días y descompón en tendencia/estacional/residual. Describe en qué días de la semana sube o baja la estacionalidad."
      },
      {
        n: 34,
        title: "Modelos ARIMA y forecasting",
        duration: "90 min",
        objectives: [
          "Interpretar parámetros p, d, q de modelos ARIMA",
          "Entrenar SARIMA cuando hay estacionalidad explícita",
          "Evaluar pronósticos con MAPE y gráficos train/test"
        ],
        content: "<p>ARIMA(p,d,q) modela series estacionarias: AR(p) usa valores pasados, I(d) diferencias, MA(q) errores pasados. Identificación guiada por ACF/PACF o búsqueda automática (<code>pmdarima.auto_arima</code>).</p><p>SARIMA añade orden estacional (P,D,Q,s) — s=7 para weekly, s=12 para mensual con año. Divide en train/test temporal (nunca shuffle aleatorio en series).</p><p>Métricas: MAE, RMSE, MAPE (cuidado si hay ceros). Comunica intervalos de confianza del pronóstico, no solo punto estimado.</p>",
        code: "import pandas as pd\nfrom statsmodels.tsa.arima.model import ARIMA\nimport numpy as np\n\nnp.random.seed(0)\nidx = pd.date_range(\"2020-01-01\", periods=120, freq=\"MS\")\ny = pd.Series(np.cumsum(np.random.randn(120)) + 50, index=idx)\n\ntrain, test = y.iloc[:-12], y.iloc[-12:]\n\nmodel = ARIMA(train, order=(1, 1, 1))\nfit = model.fit()\nforecast = fit.forecast(steps=12)\n\nmape = (abs(test - forecast) / test).mean() * 100\nprint(f\"MAPE: {mape:.2f}%\")",
        exercise: "Con una serie mensual de al menos 60 puntos, reserva los últimos 12 para test. Ajusta ARIMA manual o auto y grafica histórico + pronóstico. Calcula MAPE y comenta si el error es aceptable para decisiones de inventario."
      },
      {
        n: 35,
        title: "Introducción a redes neuronales y deep learning",
        duration: "90 min",
        objectives: [
          "Comprender perceptrón, capas ocultas y función de activación",
          "Entrenar una red densa con Keras o sklearn MLPClassifier",
          "Reconocer overfitting y técnicas básicas: dropout y early stopping"
        ],
        content: "<p>Redes neuronales apilan transformaciones no lineales (ReLU, sigmoid) aprendidas por gradiente descendente y backpropagation. Capacidad alta → pueden aproximar funciones complejas pero requieren más datos y regularización.</p><p>Frameworks: TensorFlow/Keras, PyTorch. Para tabular pequeño, <code>MLPClassifier</code> de sklearn basta como introducción. Hiperparámetros: capas, neuronas, learning rate, batch size, epochs.</p><p>Monitorea curvas train vs validation loss. Early stopping detiene cuando validation empeora; dropout apaga neuronas al azar en entrenamiento para generalizar mejor.</p>",
        code: "from sklearn.neural_network import MLPClassifier\nfrom sklearn.datasets import load_digits\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.pipeline import Pipeline\n\nX, y = load_digits(return_X_y=True)\nX_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)\n\nmlp = Pipeline([\n    (\"scale\", StandardScaler()),\n    (\"nn\", MLPClassifier(hidden_layer_sizes=(64, 32), max_iter=30, random_state=42)),\n])\nmlp.fit(X_train, y_train)\nprint(f\"Test accuracy: {mlp.score(X_test, y_test):.3f}\")",
        exercise: "Entrena MLPClassifier en digits variando hidden_layer_sizes: (32,) vs (128,64,32). Compara accuracy y tiempo. ¿La red más grande mejora test o overfittea train?"
      },
      {
        n: 36,
        title: "Transfer learning y modelos preentrenados",
        duration: "90 min",
        objectives: [
          "Explicar transfer learning y cuándo usar pesos preentrenados",
          "Usar embeddings o modelos hub para tareas de visión o texto",
          "Fine-tuning responsable con pocos datos y congelación parcial de capas"
        ],
        content: "<p>Entrenar modelos grandes desde cero exige GPU y millones de ejemplos. <strong>Transfer learning</strong> reutiliza representaciones aprendidas en ImageNet o corpus masivos de texto, adaptando solo capas finales a tu tarea con cientos de ejemplos.</p><p>En visión: MobileNet, ResNet vía Keras Applications. En NLP: embeddings Word2Vec, sentence-transformers o APIs de modelos fundacionales. Congela capas base, entrena classifier head, luego descongela parcialmente si hace falta.</p><p>Riesgos: sesgos del modelo base, alucinaciones en LLMs, costo de inferencia. Documenta licencia y limitaciones del checkpoint usado.</p>",
        code: "# Ejemplo conceptual con sentence-transformers (pip install sentence-transformers)\n# from sentence_transformers import SentenceTransformer\n# model = SentenceTransformer(\"paraphrase-multilingual-MiniLM-L12-v2\")\n# emb = model.encode([\"Data Science en español\", \"Machine learning aplicado\"])\n# print(emb.shape)  # (2, 384)\n\nfrom sklearn.metrics.pairwise import cosine_similarity\nimport numpy as np\n\n# Simulación de embeddings ya calculados\na = np.array([[1.0, 0.2, 0.1]])\nb = np.array([[0.9, 0.3, 0.0]])\nc = np.array([[0.1, 0.9, 0.8]])\nprint(cosine_similarity(a, b), cosine_similarity(a, c))",
        exercise: "Instala sentence-transformers (o usa API equivalente). Codifica 10 frases sobre un tema y 10 de otro. Calcula similitud coseno entre grupos: ¿se separan? Propón un clasificador k-NN sobre embeddings sin entrenar red desde cero."
      }
    ]
  },
  {
    id: 8,
    title: "Proyecto Final Integrador",
    weeks: "3 semanas",
    lessons: [
      {
        n: 37,
        title: "Definición del problema y planificación",
        duration: "90 min",
        objectives: [
          "Formular una pregunta de negocio SMART y criterios de éxito medibles",
          "Elaborar cronograma, roles y riesgos del proyecto final",
          "Documentar alcance, fuentes de datos y restricciones éticas"
        ],
        content: "<p>El proyecto final consolida todo el curso. Comienza con una pregunta clara: «¿Qué decisión mejorará nuestro stakeholder si resolvemos X?». Evita preguntas vagas («analizar datos de ventas») sin outcome definido.</p><p>Define métricas de éxito: accuracy mínima, reducción de error MAPE, lift en retención simulada. Establece entregables por semana: charter, dataset limpio, notebook EDA, modelo baseline, informe final.</p><ul><li><strong>Alcance:</strong> qué incluye y qué queda fuera (MVP).</li><li><strong>Riesgos:</strong> datos insuficientes, desbalance extremo, plazos.</li><li><strong>Ética:</strong> variables sensibles, consentimiento, uso permitido del dataset.</li></ul>",
        code: "# Plantilla project_charter.md (crear en tu repo)\n# - Problema y stakeholder\n# - Hipótesis inicial\n# - Datos disponibles y lagunas\n# - Métrica principal y baseline\n# - Cronograma de 3 semanas\n\nprint(\"Define baseline antes de modelos complejos: media, reglas, o modelo nulo.\")",
        exercise: "Redacta un charter de una página para tu proyecto (tema libre: churn, precios, demanda, NLP de reseñas). Incluye pregunta SMART, métrica principal, baseline propuesto y tres riesgos con mitigación. Revísalo con un par."
      },
      {
        n: 38,
        title: "Recolección y preparación de datos",
        duration: "90 min",
        objectives: [
          "Integrar múltiples fuentes en un dataset analítico único",
          "Implementar pipeline reproducible de limpieza documentado",
          "Validar calidad con reglas de negocio y perfiles estadísticos"
        ],
        content: "<p>Recolecta datos de APIs, CSV, bases SQL o datasets públicos — siempre registrando fecha, versión y licencia. Une tablas con claves consistentes; valida cardinalidad post-merge (¿filas duplicadas?).</p><p>Automatiza limpieza en scripts o notebooks parametrizados, no celdas manuales irreproducibles. Genera reporte de calidad: % nulos, duplicados, rangos válidos (edad &gt; 0, precios ≥ 0).</p><p>Split train/validation/test temporal si hay componente de serie; estratificado si clasificación desbalanceada. Nunca uses test hasta la evaluación final.</p>",
        code: "import pandas as pd\nfrom pathlib import Path\n\n# Ejemplo pipeline mínimo reproducible\ndef load_and_clean(path: str) -> pd.DataFrame:\n    df = pd.read_csv(path)\n    df = df.drop_duplicates()\n    df[\"fecha\"] = pd.to_datetime(df[\"fecha\"], errors=\"coerce\")\n    df = df.dropna(subset=[\"fecha\", \"monto\"])\n    df = df[df[\"monto\"] >= 0]\n    return df\n\n# df = load_and_clean(\"data/ventas.csv\")\n# df.to_parquet(\"data/ventas_clean.parquet\", index=False)",
        exercise: "Obtén al menos dos fuentes relacionadas (o simula con merge keys). Limpia, documenta cada paso en funciones y exporta parquet limpio. Escribe cinco reglas de validación y cuántas filas fallan cada una."
      },
      {
        n: 39,
        title: "Análisis exploratorio del proyecto",
        duration: "90 min",
        objectives: [
          "Producir informe EDA orientado al problema del proyecto",
          "Priorizar insights que motiven decisiones de feature y modelado",
          "Comunicar visualizaciones claras para audiencia no técnica"
        ],
        content: "<p>El EDA del proyecto no es genérico: cada gráfico debe responder una pregunta del charter. Segmenta por cohortes relevantes (región, plan, canal). Contrasta hipótesis inicial con evidencia.</p><p>Documenta sorpresas: variables redundantes, leakage potencial (target encoding accidental), estacionalidad fuerte. Decide transformaciones definitivas para el pipeline de modelado.</p><p>Incluye una slide o sección «Para el negocio» con tres bullets sin jerga técnica — practica traducción de correlación a acción.</p>",
        code: "import seaborn as sns\nimport matplotlib.pyplot as plt\n\n# df = pd.read_parquet(\"data/ventas_clean.parquet\")\n# sns.lineplot(data=df, x=\"fecha\", y=\"monto\", estimator=\"sum\", errorbar=None)\n# plt.title(\"Ventas agregadas en el tiempo\")\n# plt.xticks(rotation=45)\n# plt.tight_layout()\n# plt.savefig(\"reports/eda_trend.png\", dpi=150)",
        exercise: "Completa notebook EDA de tu proyecto con mínimo: calidad de datos, tres gráficos univariados, dos bivariados segmentados y lista priorizada de 5 insights. Añade sección «Implicaciones para modelado»."
      },
      {
        n: 40,
        title: "Modelado y evaluación",
        duration: "90 min",
        objectives: [
          "Entrenar baseline y al menos dos modelos comparables con validación rigurosa",
          "Seleccionar modelo final justificando métricas y trade-offs",
          "Analizar errores del modelo (matriz de confusión, residuales)"
        ],
        content: "<p>Empieza con baseline trivial: media histórica, reglas de negocio o regresión/logistic simple. Luego prueba modelos del curso (Random Forest, gradient boosting, etc.) dentro de Pipeline con CV.</p><p>Compara en la misma métrica acordada en el charter. Analiza errores: ¿falla en un segmento?, ¿residuales sistemáticos en regresión? Error analysis guía nuevas features mejor que tunear ciegamente.</p><p>Registra experimentos (params, seed, score) en tabla simple — reproducibilidad es parte de la nota final.</p>",
        code: "from sklearn.model_selection import cross_validate\nfrom sklearn.dummy import DummyClassifier\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import ConfusionMatrixDisplay\nimport matplotlib.pyplot as plt\n\n# X, y = ...  # tu dataset preparado\n\nbaseline = DummyClassifier(strategy=\"most_frequent\")\nmodel = RandomForestClassifier(n_estimators=200, random_state=42)\n\nfor name, est in [(\"baseline\", baseline), (\"rf\", model)]:\n    scores = cross_validate(est, X, y, cv=5, scoring=\"f1_macro\")\n    print(f\"{name} F1: {scores['test_score'].mean():.3f}\")",
        exercise: "Entrena baseline + dos modelos en tu proyecto con la misma CV. Tabla comparativa de métricas. Elige ganador y explica por qué no elegiste el más complejo si un modelo simple empata. Incluye matriz de confusión o gráfico de residuales."
      },
      {
        n: 41,
        title: "Despliegue y comunicación de resultados",
        duration: "90 min",
        objectives: [
          "Exportar modelo y artefactos para inferencia batch o demo",
          "Construir narrativa de resultados con visualizaciones y limitaciones",
          "Definir plan de monitoreo post-despliegue (deriva, retraining)"
        ],
        content: "<p>Despliegue en este curso puede ser batch scoring (CSV salida), API Flask/FastAPI minimal o notebook demo interactivo. Serializa pipeline completo con joblib; incluye versiones de Python y librerías (<code>pip freeze</code>).</p><p>Comunicación efectiva: problema → método → resultado → recomendación → limitaciones → próximos pasos. Evita solo mostrar accuracy sin contexto de negocio.</p><p>Monitoreo: distribución de inputs (PSI), degradación de métrica, feedback loop. Planifica reentrenamiento periódico si la deriva es inevitable.</p>",
        code: "import joblib\nfrom pathlib import Path\n\n# Supón que `best_pipeline` ya está entrenado\n# Path(\"models\").mkdir(exist_ok=True)\n# joblib.dump(best_pipeline, \"models/proyecto_v1.joblib\")\n# loaded = joblib.load(\"models/proyecto_v1.joblib\")\n# pred = loaded.predict(X_new)\n\nprint(\"Incluye README con: cómo inferir, inputs esperados, ejemplo de fila.\")",
        exercise: "Guarda tu pipeline final, crea script predict.py que lea CSV y escriba predicciones, y prepara deck de 5 diapositivas: problema, datos, enfoque, resultados con gráfico, limitaciones y recomendación accionable."
      },
      {
        n: 42,
        title: "Presentación final y retrospectiva",
        duration: "90 min",
        objectives: [
          "Presentar el proyecto en 10-15 minutos con demo opcional",
          "Responder preguntas técnicas y de negocio con solvencia",
          "Realizar retrospectiva personal: aprendizajes y plan de mejora continua"
        ],
        content: "<p>La presentación final evalúa claridad, rigor y honestidad sobre limitaciones. Estructura sugerida: hook del problema (30 s), datos y EDA (2 min), modelado y métricas (3 min), demo o visual clave (2 min), conclusión y Q&A.</p><p>Anticipa preguntas: «¿Por qué no usaste deep learning?», «¿Cómo evitaste leakage?», «¿Qué harías con más tiempo?». Respuestas concisas demuestran dominio más que slides densas.</p><p>Retrospectiva escrita: qué reforzar (estadística, SQL, MLOps), portfolio en GitHub, próximo proyecto Kaggle o contribución open source.</p>",
        code: "# Checklist pre-presentación\n checklist = [\n    \"Repo público o compartido con README\",\n    \"requirements.txt con versiones\",\n    \"Notebook EDA + script entrenamiento\",\n    \"Modelo serializado y ejemplo inferencia\",\n    \"Slides PDF exportadas\",\n]\nfor item in checklist:\n    print(\"- [ ]\", item)",
        exercise: "Ensaya tu presentación cronometrada (máx. 12 min). Graba un video corto o presenta en vivo ante el grupo. Escribe retrospectiva de una página: tres aprendizajes del curso, dos dificultades superadas y un objetivo de aprendizaje para los próximos seis meses."
      }
    ]
  }
];
