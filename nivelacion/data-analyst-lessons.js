window.DA_NIV_MODULES = [
  {
    id: 1,
    title: "Fundamentos del Data Analyst",
    weeks: "1 semana",
    lessons: [
      {
        n: 1,
        title: "Qué hace un Data Analyst",
        duration: "45 min",
        objectives: [
          "Diferenciar Data Analyst, Data Scientist y Data Engineer",
          "Identificar preguntas de negocio que un analista responde",
          "Reconocer entregables típicos: reportes, dashboards y recomendaciones"
        ],
        content: "<p>El <strong>Data Analyst</strong> transforma datos en respuestas accionables para el negocio. No construye modelos de deep learning ni pipelines a escala industrial: interpreta, comunica y recomienda.</p><p><strong>Preguntas típicas:</strong> ¿Qué producto vende más? ¿Por qué bajó la retención? ¿Qué canal de marketing rinde mejor? ¿Hay estacionalidad en las ventas?</p><p><strong>Entregables:</strong> tableros en Excel o BI, informes semanales, análisis ad hoc para gerencia y presentaciones con hallazgos claros.</p>",
        code: "",
        exercise: "Elegí un negocio que conozcas (cafetería, e-commerce, app). Escribí 5 preguntas que un Data Analyst podría responder con datos y qué decisión tomaría un gerente con cada respuesta."
      },
      {
        n: 2,
        title: "Tipos de datos y fuentes",
        duration: "45 min",
        objectives: [
          "Clasificar datos en numéricos, categóricos, fechas y texto",
          "Distinguir datos estructurados vs semi-estructurados",
          "Mapear fuentes comunes: CRM, ERP, hojas de cálculo, bases SQL"
        ],
        content: "<p><strong>Numéricos:</strong> ventas en pesos, cantidad de usuarios. <strong>Categóricos:</strong> país, plan, canal. <strong>Fechas:</strong> clave para series y cohortes. <strong>Texto:</strong> comentarios de clientes (análisis más avanzado).</p><p>En Excel y SQL trabajás casi siempre con datos <em>estructurados</em> en tablas: filas = observaciones, columnas = variables.</p><p>Antes de analizar, preguntate: ¿de dónde viene el dato? ¿Quién lo generó? ¿Hay duplicados o lagunas? La calidad del análisis depende de la calidad del dato.</p>",
        code: "",
        exercise: "Descargá un CSV público (ej. ventas de muestra en Kaggle) o armá una tabla de 20 filas con columnas: fecha, producto, canal, monto. Clasificá cada columna por tipo de dato."
      },
      {
        n: 3,
        title: "Pensamiento analítico y el ciclo de análisis",
        duration: "50 min",
        objectives: [
          "Aplicar el ciclo: pregunta → datos → limpieza → análisis → conclusión",
          "Formular hipótesis verificables con datos",
          "Evitar conclusiones sin evidencia suficiente"
        ],
        content: "<p>Ciclo práctico del analista:</p><ol><li><strong>Definir la pregunta</strong> con el stakeholder (específica y medible).</li><li><strong>Obtener datos</strong> de la fuente correcta.</li><li><strong>Explorar y limpiar</strong> (nulos, outliers, formatos).</li><li><strong>Analizar</strong> con estadística descriptiva, SQL o visualizaciones.</li><li><strong>Comunicar</strong> en lenguaje de negocio, no solo números.</li></ol><p>Una buena hipótesis: «Las ventas del fin de semana son 30% mayores que entre semana» — se puede contrastar con datos.</p>",
        code: "",
        exercise: "Con la tabla del ejercicio anterior, formulá una hipótesis sobre el canal con mejor rendimiento. Describí qué cálculo harías para comprobarla y qué gráfico mostrarías."
      }
    ]
  },
  {
    id: 2,
    title: "Excel para análisis de negocio",
    weeks: "1 semana",
    lessons: [
      {
        n: 4,
        title: "Fórmulas esenciales",
        duration: "60 min",
        objectives: [
          "Usar SUM, PROMEDIO, CONTAR, SI y SUMAR.SI",
          "Aplicar BUSCARV o XLOOKUP para cruzar tablas",
          "Referenciar celdas absolutas y relativas correctamente"
        ],
        content: "<p>Excel sigue siendo herramienta central del analista en muchas empresas. Dominá:</p><ul><li><strong>SUM / PROMEDIO / CONTAR:</strong> agregaciones básicas.</li><li><strong>SI(condición, verdadero, falso):</strong> lógica condicional.</li><li><strong>SUMAR.SI(rango, criterio, suma_rango):</strong> totales por categoría.</li><li><strong>BUSCARV / XLOOKUP:</strong> traer datos de otra hoja por clave.</li></ul><p>Usá nombres de rangos y tablas estructuradas para que tus fórmulas sean legibles y mantenibles.</p>",
        code: "# Equivalente conceptual en notación\n# Total ventas canal Online:\n# =SUMAR.SI(Canal, \"Online\", Monto)\n# Ticket promedio:\n# =PROMEDIO(Monto)",
        exercise: "En Excel, con al menos 50 filas de ventas simuladas, calculá: total por canal, ticket promedio por producto y % de ventas del canal principal. Usá SUMAR.SI y formato de porcentaje."
      },
      {
        n: 5,
        title: "Tablas dinámicas",
        duration: "60 min",
        objectives: [
          "Crear tablas dinámicas con filas, columnas y valores",
          "Segmentar por fecha, región o categoría",
          "Refrescar datos cuando llega información nueva"
        ],
        content: "<p>Las <strong>tablas dinámicas</strong> resumen miles de filas en segundos. Arrastrá campos a:</p><ul><li><strong>Filas:</strong> dimensión principal (producto, mes).</li><li><strong>Columnas:</strong> segunda dimensión (canal, región).</li><li><strong>Valores:</strong> SUM de monto, PROMEDIO de ticket, CONTAR de pedidos.</li></ul><p>Combiná con <strong>segmentación de datos</strong> (slicers) para dashboards interactivos simples sin salir de Excel.</p>",
        code: "",
        exercise: "Armá una tabla dinámica con ventas por mes y canal. Agregá un segmentador por producto. Escribí en 3 bullets qué insight visual encontrás."
      },
      {
        n: 6,
        title: "Gráficos que comunican",
        duration: "50 min",
        objectives: [
          "Elegir el gráfico correcto según el mensaje",
          "Evitar gráficos engañosos (ejes truncados, 3D)",
          "Titular y etiquetar para audiencia no técnica"
        ],
        content: "<p><strong>Barras:</strong> comparar categorías. <strong>Líneas:</strong> evolución en el tiempo. <strong>Torta:</strong> solo para pocas partes de un total (usar con cuidado). <strong>Histograma:</strong> distribución de valores.</p><p>Reglas de oro: un gráfico = un mensaje; ejes desde cero en barras; colores consistentes; título que diga la conclusión («Ventas online superan a retail desde marzo»).</p>",
        code: "",
        exercise: "Desde tu tabla dinámica, creá un gráfico de líneas (tendencia mensual) y uno de barras (top 5 productos). Redactá un título orientado a negocio para cada uno."
      },
      {
        n: 7,
        title: "Limpieza de datos en Excel",
        duration: "55 min",
        objectives: [
          "Detectar duplicados, celdas vacías y formatos inconsistentes",
          "Usar Texto en columnas, BUSCAR/REEMPLAZAR y VALIDAR DATOS",
          "Documentar pasos de limpieza para reproducibilidad"
        ],
        content: "<p>El 60–80% del tiempo del analista puede ir en limpieza. Checklist:</p><ul><li>¿Hay filas duplicadas por ID de pedido?</li><li>¿Fechas como texto «01/03/2024» vs fecha real?</li><li>¿Montos con símbolo $ o comas que impiden sumar?</li><li>¿Categorías inconsistentes («Online» vs «online»)?</li></ul><p>Usá <strong>Power Query</strong> (Obtener datos) si repetís la misma limpieza cada semana: automatizás el pipeline en Excel.</p>",
        code: "",
        exercise: "Tomá un dataset «sucio» (podés mezclar mayúsculas, duplicar 3 filas y dejar 5 celdas vacías). Limpiá y documentá en una hoja «Pasos» qué hiciste en cada etapa."
      }
    ]
  },
  {
    id: 3,
    title: "Estadística descriptiva para negocios",
    weeks: "1 semana",
    lessons: [
      {
        n: 8,
        title: "Medidas de tendencia central",
        duration: "50 min",
        objectives: [
          "Calcular e interpretar media, mediana y moda",
          "Elegir la medida adecuada ante outliers",
          "Explicar resultados en términos de negocio"
        ],
        content: "<p><strong>Media:</strong> suma / cantidad — sensible a valores extremos. <strong>Mediana:</strong> valor central — robusta ante outliers (ideal para ingresos o tickets). <strong>Moda:</strong> valor más frecuente — útil en categorías.</p><p>Ejemplo: el ticket promedio puede estar inflado por pocos clientes enterprise; la mediana muestra la experiencia del cliente típico.</p>",
        code: "import pandas as pd\nventas = pd.Series([120, 95, 110, 88, 5000, 102, 99])\nprint(f\"Media: {ventas.mean():.2f}\")\nprint(f\"Mediana: {ventas.median():.2f}\")",
        exercise: "Con una columna de montos de tu dataset, calculá media y mediana en Excel o Python. ¿Cuál difiere más y por qué? Explicá cuál recomendarías al director comercial."
      },
      {
        n: 9,
        title: "Dispersión y percentiles",
        duration: "50 min",
        objectives: [
          "Interpretar desviación estándar y rango intercuartílico",
          "Usar percentiles para segmentar clientes (P50, P90)",
          "Detectar valores atípicos con criterio simple"
        ],
        content: "<p><strong>Desviación estándar:</strong> qué tan dispersos están los datos respecto a la media. <strong>Percentiles:</strong> P90 de gasto = el 10% superior gasta más que ese valor — útil para VIPs.</p><p>Regla IQR: outlier si está fuera de [Q1 − 1.5×IQR, Q3 + 1.5×IQR]. No elimines outliers sin entender si son error de carga o venta legítima grande.</p>",
        code: "import pandas as pd\ns = pd.Series([10, 12, 11, 14, 200, 13, 12])\nq1, q3 = s.quantile(0.25), s.quantile(0.75)\niqr = q3 - q1\nprint(f\"IQR: {iqr}, límites: {q1 - 1.5*iqr} a {q3 + 1.5*iqr}\")",
        exercise: "Calculá P25, P50 y P75 del monto de ventas. Identificá si hay outliers con IQR. Decidí si los excluirías del análisis de «venta típica» y justificá."
      },
      {
        n: 10,
        title: "Correlación y causalidad",
        duration: "55 min",
        objectives: [
          "Calcular correlación entre dos variables numéricas",
          "Interpretar coeficiente entre -1 y 1 sin afirmar causalidad",
          "Plantear experimentos o análisis adicionales para validar hipótesis"
        ],
        content: "<p><strong>Correlación</strong> mide asociación lineal: cerca de 1 (suben juntas), cerca de -1 (una sube, otra baja), cerca de 0 (poca relación lineal).</p><p><em>Correlación no implica causalidad.</em> Helados y ahogamientos correlacionan en verano — ambos dependen del calor. En negocio: gasto en ads y ventas pueden correlacionar, pero también influyen estacionalidad y precio.</p>",
        code: "import pandas as pd\ndf = pd.DataFrame({\n    \"gasto_ads\": [100, 150, 200, 250, 300],\n    \"ventas\": [500, 620, 710, 800, 950]\n})\nprint(df[\"gasto_ads\"].corr(df[\"ventas\"]))",
        exercise: "Elegí dos columnas numéricas de tu dataset (ej. cantidad y monto). Calculá correlación. Redactá un párrafo: qué sugerís al negocio y qué otra variable controlarías antes de recomendar acción."
      }
    ]
  },
  {
    id: 4,
    title: "SQL para consultas analíticas",
    weeks: "1 semana",
    lessons: [
      {
        n: 11,
        title: "SELECT, FROM y WHERE",
        duration: "60 min",
        objectives: [
          "Escribir consultas SELECT con filtros WHERE",
          "Ordenar con ORDER BY y limitar con LIMIT",
          "Filtrar nulos, rangos de fechas y categorías"
        ],
        content: "<p>SQL es el idioma para extraer datos de bases relacionales. Estructura base:</p><pre>SELECT columna1, columna2\nFROM ventas\nWHERE monto > 100 AND canal = 'Online'\nORDER BY fecha DESC\nLIMIT 100;</pre><p>El analista no siempre administra la base, pero debe leer y escribir consultas para autoservicio sin depender del equipo de ingeniería en cada reporte.</p>",
        code: "SELECT producto, SUM(monto) AS total\nFROM ventas\nWHERE fecha >= '2024-01-01'\nGROUP BY producto\nORDER BY total DESC;",
        exercise: "Sobre una tabla ventas (real o simulada en SQLite/PostgreSQL), escribí 3 consultas: ventas del último mes, top 10 productos por monto y pedidos nulos en canal."
      },
      {
        n: 12,
        title: "JOINs entre tablas",
        duration: "60 min",
        objectives: [
          "Explicar INNER, LEFT y RIGHT JOIN con diagramas mentales",
          "Unir pedidos con clientes o productos por clave foránea",
          "Detectar duplicación de filas tras un join mal planteado"
        ],
        content: "<p>Las empresas guardan datos normalizados: <code>clientes</code>, <code>pedidos</code>, <code>productos</code>. El analista los une:</p><pre>SELECT c.nombre, p.fecha, p.monto\nFROM pedidos p\nINNER JOIN clientes c ON p.cliente_id = c.id;</pre><p><strong>LEFT JOIN:</strong> todos los clientes aunque no tengan pedidos (útil para inactivos). Cuidado: un cliente con 10 pedidos genera 10 filas — agregá con GROUP BY si necesitás un total por cliente.</p>",
        code: "SELECT c.pais, COUNT(p.id) AS num_pedidos\nFROM clientes c\nLEFT JOIN pedidos p ON c.id = p.cliente_id\nGROUP BY c.pais;",
        exercise: "Diseñá dos tablas (clientes + pedidos) con al menos 10 registros cada una. Escribí un INNER y un LEFT JOIN. ¿Cuántas filas devuelve cada uno? Explicá la diferencia."
      },
      {
        n: 13,
        title: "GROUP BY y agregaciones",
        duration: "60 min",
        objectives: [
          "Agrupar con GROUP BY y funciones COUNT, SUM, AVG",
          "Filtrar grupos con HAVING",
          "Construir métricas KPI semanales o mensuales"
        ],
        content: "<p>Patrón KPI mensual:</p><pre>SELECT DATE_TRUNC('month', fecha) AS mes,\n       SUM(monto) AS ingresos,\n       COUNT(DISTINCT cliente_id) AS clientes_unicos\nFROM pedidos\nGROUP BY 1\nORDER BY 1;</pre><p><strong>HAVING</strong> filtra después de agrupar (ej. solo meses con ingresos &gt; 10000). <strong>WHERE</strong> filtra filas antes de agrupar.</p>",
        code: "SELECT canal, AVG(monto) AS ticket_promedio\nFROM ventas\nGROUP BY canal\nHAVING COUNT(*) >= 10;",
        exercise: "Escribí una consulta que devuelva por canal: total ventas, cantidad de pedidos y ticket promedio. Agregá HAVING para ocultar canales con menos de 5 pedidos."
      },
      {
        n: 14,
        title: "Subconsultas y CTEs básicas",
        duration: "55 min",
        objectives: [
          "Usar subconsultas en WHERE y FROM",
          "Leer CTEs (WITH) para organizar consultas largas",
          "Comparar rendimiento de clientes vs promedio"
        ],
        content: "<p>Las <strong>CTE</strong> (Common Table Expressions) hacen el SQL legible:</p><pre>WITH ventas_mes AS (\n  SELECT cliente_id, SUM(monto) AS total\n  FROM pedidos\n  WHERE fecha >= '2024-06-01'\n  GROUP BY cliente_id\n)\nSELECT * FROM ventas_mes WHERE total > 1000;</pre><p>Ideal para reportes que reutilizás en herramientas BI conectadas a la base.</p>",
        code: "WITH promedio AS (\n  SELECT AVG(monto) AS avg_monto FROM ventas\n)\nSELECT v.* FROM ventas v, promedio p\nWHERE v.monto > p.avg_monto;",
        exercise: "Con CTE, calculá el total por cliente y devolvé solo los que superan el promedio de todos los clientes. Comentá cada parte de la consulta."
      }
    ]
  },
  {
    id: 5,
    title: "Python y visualización introductoria",
    weeks: "1 semana",
    lessons: [
      {
        n: 15,
        title: "Primeros pasos con Python y pandas",
        duration: "60 min",
        objectives: [
          "Instalar o usar entorno Jupyter / notebook online",
          "Cargar un CSV con pandas.read_csv",
          "Explorar con head, info, describe y dtypes"
        ],
        content: "<p>Python con <strong>pandas</strong> es el siguiente paso después de Excel: más volumen, reproducibilidad y automatización. Comandos de exploración:</p><ul><li><code>df.head()</code> — primeras filas</li><li><code>df.info()</code> — tipos y nulos</li><li><code>df.describe()</code> — estadísticas numéricas</li><li><code>df['col'].value_counts()</code> — frecuencias</li></ul><p>El Data Analyst no necesita ser desarrollador, pero sí leer scripts y adaptar notebooks del equipo.</p>",
        code: "import pandas as pd\n\ndf = pd.read_csv(\"ventas.csv\")\nprint(df.head())\nprint(df.info())\nprint(df.describe())",
        exercise: "Cargá un CSV en pandas. Respondé: ¿cuántas filas hay? ¿Qué columnas tienen nulos? ¿Cuál es el monto máximo? Guardá el notebook."
      },
      {
        n: 16,
        title: "Limpieza y transformación con pandas",
        duration: "60 min",
        objectives: [
          "Tratar nulos con fillna o dropna según contexto",
          "Convertir tipos (fechas, numéricos)",
          "Crear columnas derivadas (mes, margen, categoría)"
        ],
        content: "<p>Operaciones frecuentes:</p><ul><li><code>df.drop_duplicates()</code></li><li><code>pd.to_datetime(df['fecha'])</code></li><li><code>df['mes'] = df['fecha'].dt.to_period('M')</code></li><li><code>df.groupby('canal')['monto'].sum()</code></li></ul><p>Documentá cada transformación — el notebook es tu pipeline reproducible antes de pasar a SQL o BI corporativo.</p>",
        code: "df['fecha'] = pd.to_datetime(df['fecha'])\ndf['monto'] = pd.to_numeric(df['monto'], errors='coerce')\ndf = df.dropna(subset=['fecha', 'monto'])\nresumen = df.groupby('canal')['monto'].agg(['sum', 'mean', 'count'])",
        exercise: "Limpiá tu CSV: quitar duplicados, parsear fechas, eliminar montos negativos. Creá columna mes y agrupá ventas por mes y canal. Exportá resultado a CSV limpio."
      },
      {
        n: 17,
        title: "Visualización con matplotlib y seaborn",
        duration: "60 min",
        objectives: [
          "Crear gráficos de barras, líneas e histogramas en Python",
          "Aplicar estilo mínimo profesional (títulos, etiquetas)",
          "Exportar gráficos para incluir en informes"
        ],
        content: "<p><strong>matplotlib</strong> y <strong>seaborn</strong> generan gráficos publicables desde el notebook:</p><ul><li><code>sns.barplot(data=df, x='canal', y='monto')</code></li><li><code>sns.lineplot(data=df, x='mes', y='monto', hue='canal')</code></li><li><code>sns.histplot(df['monto'], bins=30)</code></li></ul><p>Guardá con <code>plt.savefig('reporte.png', dpi=150, bbox_inches='tight')</code> para pegar en PowerPoint o informes.</p>",
        code: "import seaborn as sns\nimport matplotlib.pyplot as plt\n\nsns.barplot(data=df, x='canal', y='monto', estimator=sum)\nplt.title('Ventas totales por canal')\nplt.ylabel('Monto ($)')\nplt.tight_layout()\nplt.savefig('ventas_canal.png')",
        exercise: "Generá 3 gráficos de tu dataset limpio: barras por producto, línea temporal mensual, histograma de montos. Escribí debajo de cada uno una conclusión de una línea para negocio."
      }
    ]
  }
];
