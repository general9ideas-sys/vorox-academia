window.DS_NIV_MODULES = [
  {
    id: 1,
    title: "Fundamentos del Data Scientist",
    weeks: "1 semana",
    lessons: [
      {
        n: 1,
        title: "Qué hace un Data Scientist",
        duration: "50 min",
        objectives: [
          "Diferenciar Data Scientist, Data Analyst y ML Engineer",
          "Identificar problemas que requieren modelado predictivo",
          "Reconocer entregables: notebooks, modelos, informes y APIs"
        ],
        content: "<p>El <strong>Data Scientist</strong> va más allá del reporte: formula hipótesis, experimenta con modelos y cuantifica la incertidumbre. Combina estadística, programación y conocimiento del negocio.</p><p><strong>Vs Data Analyst:</strong> el analista responde «¿qué pasó?» con SQL y dashboards; el científico pregunta «¿qué pasará?» y «¿por qué?» con modelos y experimentos.</p><p><strong>Entregables típicos:</strong> notebook reproducible, modelo entrenado (pickle/ONNX), métricas de evaluación, informe ejecutivo y recomendación de despliegue.</p>",
        code: "",
        exercise: "Elegí un caso real (churn, fraude, recomendaciones). Escribí: (1) pregunta de negocio, (2) variable objetivo, (3) qué haría un Analyst vs un Scientist, (4) métrica de éxito."
      },
      {
        n: 2,
        title: "Ciclo CRISP-DM simplificado",
        duration: "50 min",
        objectives: [
          "Describir las fases: negocio, datos, preparación, modelado, evaluación, despliegue",
          "Relacionar cada fase con artefactos concretos",
          "Detectar data leakage y mal planteamiento del problema"
        ],
        content: "<p><strong>CRISP-DM</strong> es el marco estándar de proyectos de datos:</p><ol><li><strong>Negocio:</strong> definir objetivo medible (ej. reducir churn 5%).</li><li><strong>Datos:</strong> inventariar fuentes y calidad.</li><li><strong>Preparación:</strong> limpieza, feature engineering.</li><li><strong>Modelado:</strong> elegir algoritmo y entrenar.</li><li><strong>Evaluación:</strong> métricas en hold-out, no solo accuracy.</li><li><strong>Despliegue:</strong> monitoreo y reentrenamiento.</li></ol><p><em>Data leakage:</em> usar información del futuro para predecir el pasado (ej. incluir «fecha de cancelación» para predecir churn).</p>",
        code: "",
        exercise: "Para predecir abandono de clientes, dibujá las 6 fases de CRISP-DM con una tarea y un entregable por fase. Marcá dónde podría ocurrir leakage."
      },
      {
        n: 3,
        title: "Ética, sesgo y privacidad",
        duration: "45 min",
        objectives: [
          "Reconocer sesgos en datos históricos y modelos",
          "Aplicar minimización de datos personales",
          "Conocer principios básicos de GDPR y consentimiento"
        ],
        content: "<p>Los modelos aprenden del pasado; si el pasado es injusto, el modelo puede <strong>perpetuar discriminación</strong> en crédito, contratación o salud.</p><p>Buenas prácticas: auditar métricas por subgrupo (género, región), documentar limitaciones, obtener consentimiento, anonimizar cuando publiques estadísticas.</p><p>En VOROX la ética no es opcional: es parte de cada proyecto final.</p>",
        code: "",
        exercise: "Leé un caso de sesgo algorítmico (reconocimiento facial, scoring crediticio). Respondé: variable sensible, consecuencia para personas afectadas y una medida de equidad que propondrías."
      }
    ]
  },
  {
    id: 2,
    title: "Matemática para Data Science",
    weeks: "1 semana",
    lessons: [
      {
        n: 4,
        title: "Álgebra y funciones",
        duration: "55 min",
        objectives: [
          "Operar con expresiones algebraicas y despejar variables",
          "Interpretar funciones lineales y cuadráticas en gráficos",
          "Relacionar pendiente e intercepto con regresión lineal"
        ],
        content: "<p>La regresión lineal es una función <code>y = mx + b</code>: <strong>m</strong> (pendiente) indica cuánto cambia y por cada unidad de x; <strong>b</strong> (intercepto) es el valor cuando x = 0.</p><p>En negocio: si cada $1000 en ads (x) genera $4500 extra en ventas (y), la pendiente es 4.5. El intercepto captura ventas base sin ads.</p><p>Repasá: fracciones, porcentajes, potencias (x²) y raíces — aparecen en métricas y transformaciones de variables.</p>",
        code: "# Ventas = 12000 + 4.5 * gasto_ads\ngasto = [0, 1000, 2000, 3000]\nventas = [12000 + 4.5 * g for g in gasto]\nprint(list(zip(gasto, ventas)))",
        exercise: "Dado y = 50 + 3x, calculá y para x = 0, 5, 10, 20. Graficá en papel o con Python. ¿Cuánto sube y si x aumenta en 1 unidad?"
      },
      {
        n: 5,
        title: "Logaritmos y escalas",
        duration: "50 min",
        objectives: [
          "Entender logaritmo como inverso de la exponencial",
          "Usar escala log en ejes para datos muy dispersos",
          "Aplicar log(1+x) en transformaciones de variables sesgadas"
        ],
        content: "<p>Los ingresos, precios de vivienda y métricas web suelen tener <strong>cola larga</strong>: pocos valores enormes. La escala log comprime esos extremos y facilita ver patrones.</p><p><code>log(1 + x)</code> evita problemas con ceros. En ML, transformar variables sesgadas puede estabilizar modelos lineales.</p><p>No necesitás demostrar teoremas: sí interpretar gráficos log-log y saber cuándo pedir una transformación.</p>",
        code: "import numpy as np\nimport matplotlib.pyplot as plt\n\ningresos = np.array([30, 45, 50, 55, 200, 500, 2000])\nplt.hist(np.log1p(ingresos), bins=8)\nplt.title('Ingresos en escala log(1+x)')",
        exercise: "Tomá 10 valores positivos (ventas diarias simuladas). Compará histograma original vs log1p. ¿Cuál muestra mejor la forma de la distribución?"
      },
      {
        n: 6,
        title: "Vectores y matrices (intuición)",
        duration: "55 min",
        objectives: [
          "Representar datos tabulares como matriz (filas × columnas)",
          "Interpretar producto escalar como medida de similitud",
          "Conectar vectores con filas de un DataFrame y embeddings"
        ],
        content: "<p>Un dataset de 1000 clientes × 20 variables es una <strong>matriz 1000×20</strong>. Cada fila es un vector de características (features).</p><p>En ML, muchos algoritmos operan sobre matrices: distancias entre vectores (KNN), pesos en redes neuronales, componentes principales (PCA).</p><p><strong>Producto escalar:</strong> suma de multiplicaciones elemento a elemento — base de similitud entre documentos o usuarios.</p>",
        code: "import numpy as np\n\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nprint(np.dot(a, b))  # 1*4 + 2*5 + 3*6 = 32\n\nX = np.array([[1, 2], [3, 4], [5, 6]])  # 3 filas, 2 columnas\nprint(X.shape)",
        exercise: "Creá dos vectores de 5 dimensiones (ej. gustos de usuario). Calculá su producto escalar con NumPy. ¿Qué significa un valor alto vs bajo?"
      },
      {
        n: 7,
        title: "Cálculo ligero: tasas de cambio",
        duration: "45 min",
        objectives: [
          "Interpretar derivada como velocidad de cambio instantánea",
          "Relacionar gradiente con optimización en ML",
          "Leer gráficos de función y su pendiente local"
        ],
        content: "<p>La <strong>derivada</strong> responde: «¿qué tan rápido cambia y cuando cambia x un poquito?». En pérdida de un modelo, el gradiente indica hacia dónde mover los pesos para reducir error.</p><p>No vas a integrar a mano en el día a día, pero sí entender que el entrenamiento de redes busca mínimos de una función de costo usando gradientes.</p><p>Intuición: en un gráfico de costo vs época, querés ver la curva bajar y estabilizarse (convergencia).</p>",
        code: "",
        exercise: "Buscá una animación o gráfico de «gradient descent». Explicá en 5 líneas qué busca el algoritmo y qué pasa si el learning rate es demasiado alto."
      }
    ]
  },
  {
    id: 3,
    title: "Python esencial para DS",
    weeks: "1.5 semanas",
    lessons: [
      {
        n: 8,
        title: "Entorno y primeros scripts",
        duration: "60 min",
        objectives: [
          "Crear entorno virtual e instalar Jupyter o VS Code",
          "Ejecutar celdas y guardar notebooks",
          "Usar variables, tipos y f-strings"
        ],
        content: "<p>Configurá tu entorno antes de la carrera:</p><pre>python -m venv .venv\n.venv\\Scripts\\activate   # Windows\npip install jupyter pandas numpy matplotlib seaborn scikit-learn</pre><p>Convenciones: nombres en snake_case, una celda = una idea, markdown para narrar hallazgos.</p>",
        code: "nombre = \"Ana\"\nedad = 28\nactivo = True\nprint(f\"{nombre}, {edad} años, activo={activo}\")",
        exercise: "Creá un notebook «nivelacion-ds». Definí 5 calificaciones, calculá promedio con sum()/len(). Agregá celda markdown con tu interpretación."
      },
      {
        n: 9,
        title: "Estructuras de datos y control de flujo",
        duration: "60 min",
        objectives: [
          "Usar listas, diccionarios y comprehensions",
          "Aplicar if/elif/else y bucles for",
          "Escribir funciones con parámetros y return"
        ],
        content: "<p>En DS usás mucho <strong>dict</strong> para configuraciones y <strong>list comprehensions</strong> para transformar columnas conceptualmente.</p><p>Las <strong>funciones</strong> encapsulan lógica repetible: limpiar texto, calcular métricas, validar rangos.</p>",
        code: "def clasificar_churn(dias_inactivo):\n    if dias_inactivo > 90:\n        return \"alto\"\n    elif dias_inactivo > 30:\n        return \"medio\"\n    return \"bajo\"\n\nusuarios = [{\"id\": 1, \"dias\": 120}, {\"id\": 2, \"dias\": 15}]\nriesgos = [clasificar_churn(u[\"dias\"]) for u in usuarios]\nprint(riesgos)",
        exercise: "Escribí una función que reciba lista de montos y devuelva dict con min, max y promedio. Probala con al menos 8 valores."
      },
      {
        n: 10,
        title: "NumPy: arrays y vectorización",
        duration: "60 min",
        objectives: [
          "Crear arrays y aplicar operaciones vectorizadas",
          "Indexar y filtrar con máscaras booleanas",
          "Calcular estadísticas con mean, std, percentiles"
        ],
        content: "<p><strong>NumPy</strong> es la base numérica de pandas y scikit-learn. La <strong>vectorización</strong> evita bucles lentos en Python puro.</p><ul><li><code>arr.mean()</code>, <code>arr.std()</code></li><li><code>arr[arr > 0]</code> — filtro booleano</li><li><code>np.percentile(arr, 90)</code></li></ul>",
        code: "import numpy as np\n\ntickets = np.array([45, 52, 48, 200, 51, 49, 500, 47])\nprint(f\"Media: {tickets.mean():.1f}\")\nprint(f\"Mediana: {np.median(tickets):.1f}\")\nprint(f\"P90: {np.percentile(tickets, 90):.1f}\")\nprint(f\"Sin outliers >150: {tickets[tickets < 150]}\")",
        exercise: "Generá array de 100 valores aleatorios (np.random.normal). Calculá media, desvío, P25/P75. Filtrá valores fuera de ±2 desvíos de la media."
      },
      {
        n: 11,
        title: "pandas I: carga y exploración",
        duration: "60 min",
        objectives: [
          "Cargar CSV con read_csv y revisar dtypes",
          "Explorar con head, info, describe, value_counts",
          "Seleccionar columnas y filas con loc e iloc"
        ],
        content: "<p><strong>pandas</strong> es tu herramienta central en la carrera. Rutina de exploración:</p><ol><li><code>df.shape</code> — dimensiones</li><li><code>df.info()</code> — tipos y nulos</li><li><code>df.describe()</code> — numéricas</li><li><code>df['col'].value_counts()</code> — categóricas</li></ol>",
        code: "import pandas as pd\n\ndf = pd.read_csv(\"clientes.csv\")\nprint(df.head())\nprint(df.info())\nprint(df['plan'].value_counts())\nprint(df.loc[df['edad'] > 30, ['nombre', 'plan']].head())",
        exercise: "Descargá un CSV público (Titanic, Iris o ventas Kaggle). Respondé: filas, columnas con nulos, variable categórica más frecuente, rango de una numérica."
      },
      {
        n: 12,
        title: "pandas II: limpieza y agregación",
        duration: "65 min",
        objectives: [
          "Tratar nulos, duplicados y tipos incorrectos",
          "Agrupar con groupby y agregaciones múltiples",
          "Unir tablas con merge en clave foránea"
        ],
        content: "<p>Pipeline típico de preparación:</p><ul><li><code>df.drop_duplicates()</code></li><li><code>pd.to_datetime(df['fecha'])</code></li><li><code>df.groupby('segmento').agg({'monto':['sum','mean'], 'id':'count'})</code></li><li><code>pd.merge(clientes, pedidos, on='cliente_id', how='left')</code></li></ul>",
        code: "df['fecha'] = pd.to_datetime(df['fecha'], errors='coerce')\ndf = df.dropna(subset=['fecha'])\nresumen = df.groupby('canal')['monto'].agg(total='sum', promedio='mean', n='count')\nprint(resumen.sort_values('total', ascending=False))",
        exercise: "Limpiá tu CSV: quitar duplicados, parsear fechas, filtrar montos negativos. Agrupá por mes y canal. Exportá «datos_limpios.csv»."
      }
    ]
  },
  {
    id: 4,
    title: "Estadística y probabilidad",
    weeks: "1.5 semanas",
    lessons: [
      {
        n: 13,
        title: "Distribuciones y probabilidad",
        duration: "60 min",
        objectives: [
          "Distinguir variable discreta vs continua",
          "Interpretar distribución normal y regla 68-95-99.7",
          "Calcular probabilidades simples con simulación"
        ],
        content: "<p>La <strong>distribución normal</strong> modela muchos fenómenos naturales y errores de medición. Parámetros: media μ y desvío σ.</p><p><strong>Regla empírica:</strong> ~68% dentro de 1σ, ~95% dentro de 2σ, ~99.7% dentro de 3σ.</p><p>La simulación Monte Carlo (tirar dados muchas veces) ayuda a intuir probabilidades sin fórmulas complejas.</p>",
        code: "import numpy as np\n\nnp.random.seed(42)\nsim = np.random.normal(loc=100, scale=15, size=10_000)\nprint(f\"P(X > 130): {(sim > 130).mean():.3f}\")",
        exercise: "Simulá 10.000 valores N(50, 10). Estimá P(X > 60) y P(40 < X < 55). Compará con regla empírica aproximada."
      },
      {
        n: 14,
        title: "Muestreo e intervalos de confianza",
        duration: "60 min",
        objectives: [
          "Explicar población vs muestra y error de muestreo",
          "Construir intervalo de confianza para la media",
          "Interpretar «95% de confianza» sin malentendidos"
        ],
        content: "<p>Rara vez tenés toda la población: trabajás con una <strong>muestra</strong>. El IC 95% para la media indica un rango plausible para el verdadero promedio poblacional si repetís el muestreo.</p><p><em>No significa</em> «hay 95% de probabilidad de que la media esté ahí» en un solo experimento — significa que el método cubre el valor real en 95% de los estudios repetidos.</p>",
        code: "import numpy as np\nfrom scipy import stats\n\nmuestra = np.random.normal(100, 15, size=200)\nmedia = muestra.mean()\nsem = stats.sem(muestra)\nci = stats.t.interval(0.95, len(muestra)-1, loc=media, scale=sem)\nprint(f\"Media: {media:.2f}, IC 95%: {ci}\")",
        exercise: "Tomá muestra de 100 valores de tu dataset (columna numérica). Calculá media e IC 95%. ¿El valor poblacional «verdadero» (toda la columna) cae dentro del intervalo?"
      },
      {
        n: 15,
        title: "Pruebas de hipótesis",
        duration: "65 min",
        objectives: [
          "Plantear H0 y H1 en un problema de negocio",
          "Interpretar p-valor y nivel de significancia α",
          "Evitar confundir significancia estadística con impacto práctico"
        ],
        content: "<p>Ejemplo A/B test: H0 «no hay diferencia en conversión» vs H1 «sí hay diferencia». Si p-valor &lt; 0.05, rechazás H0 con α=5%.</p><p>Un resultado «significativo» con diferencia de 0.1% puede ser irrelevante para el negocio. Siempre reportá <strong>tamaño del efecto</strong> (diferencia de medias, lift %).</p>",
        code: "from scipy import stats\n\nconv_a = [0, 1, 0, 1, 1, 0, 1, 0, 1, 1]  # 0/1 conversiones\nconv_b = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1]\nt_stat, p_val = stats.ttest_ind(conv_a, conv_b, equal_var=False)\nprint(f\"p-valor: {p_val:.4f}\")",
        exercise: "Simulá dos grupos de conversión (A y B) con tasas distintas. Corré t-test. Redactá conclusión para producto: ¿lanzarías B? ¿por qué sí o no?"
      },
      {
        n: 16,
        title: "Correlación, causalidad y confounders",
        duration: "55 min",
        objectives: [
          "Calcular Pearson y Spearman según tipo de relación",
          "Identificar variables confusoras",
          "Proponer diseño experimental o regresión para aislar efecto"
        ],
        content: "<p><strong>Pearson:</strong> relación lineal. <strong>Spearman:</strong> monotónica (ranks). Correlación ≠ causalidad.</p><p><strong>Confounder:</strong> variable que influye en X e Y (estacionalidad afecta ads y ventas). Soluciones: experimentos controlados, variables de control en regresión, DAGs conceptuales.</p>",
        code: "import pandas as pd\n\ndf = pd.DataFrame({\n    \"gasto_ads\": [10, 20, 30, 40, 50],\n    \"ventas\": [100, 180, 260, 310, 400],\n    \"mes\": [1, 2, 3, 4, 5]\n})\nprint(df['gasto_ads'].corr(df['ventas']))",
        exercise: "Con dataset de 3+ columnas numéricas, calculá matriz de correlación. Elegí un par correlacionado y explicá si recomendarías acción causal o qué variable controlarías."
      },
      {
        n: 17,
        title: "Regresión lineal simple",
        duration: "65 min",
        objectives: [
          "Ajustar recta de mínimos cuadrados con interpretación de coeficientes",
          "Evaluar R² y residuos básicos",
          "Distinguir predicción de interpolación vs extrapolación"
        ],
        content: "<p>La regresión busca la recta que minimiza la suma de errores al cuadrado. El coeficiente de <code>x</code> es el cambio esperado en <code>y</code> por unidad de <code>x</code>, manteniendo lo demás fijo (en simple, solo hay x).</p><p><strong>R²:</strong> fracción de varianza explicada (0 a 1). Residuos sistemáticos (curva) indican que un modelo lineal no alcanza.</p>",
        code: "import numpy as np\nfrom sklearn.linear_model import LinearRegression\n\nX = np.array([[1], [2], [3], [4], [5]])\ny = np.array([2.1, 3.9, 6.2, 7.8, 10.1])\nmodel = LinearRegression().fit(X, y)\nprint(f\"Pendiente: {model.coef_[0]:.2f}, R2: {model.score(X, y):.3f}\")",
        exercise: "Ajustá regresión lineal entre dos variables de tu dataset. Interpretá pendiente y R². Graficá dispersión + recta. ¿Hay outliers que distorsionen?"
      }
    ]
  },
  {
    id: 5,
    title: "EDA y puente hacia Machine Learning",
    weeks: "1 semana",
    lessons: [
      {
        n: 18,
        title: "Exploración visual (EDA)",
        duration: "60 min",
        objectives: [
          "Aplicar checklist EDA: forma, nulos, distribuciones, relaciones",
          "Crear pairplot, heatmap de correlación y boxplots",
          "Documentar hallazgos antes de modelar"
        ],
        content: "<p><strong>EDA</strong> (Exploratory Data Analysis) evita modelar a ciegas. Checklist:</p><ol><li>¿Cuántas filas/columnas y % nulos?</li><li>¿Variables sesgadas o bimodales?</li><li>¿Outliers legítimos o errores?</li><li>¿Relaciones lineales o categorías desbalanceadas?</li></ol><p>seaborn: <code>sns.heatmap(df.corr())</code>, <code>sns.boxplot(x='cat', y='val', data=df)</code></p>",
        code: "import seaborn as sns\nimport matplotlib.pyplot as plt\n\nsns.heatmap(df.corr(numeric_only=True), annot=True, cmap='coolwarm')\nplt.tight_layout()\nplt.savefig('corr.png')",
        exercise: "En tu dataset limpio, generá heatmap de correlación y 2 boxplots por categoría. Escribí 5 bullets de hallazgos que influirían en un modelo."
      },
      {
        n: 19,
        title: "Feature engineering introductorio",
        duration: "60 min",
        objectives: [
          "Crear variables derivadas: ratios, bins, fechas descompuestas",
          "Codificar categóricas con one-hot encoding básico",
          "Evitar leakage al crear features con información futura"
        ],
        content: "<p><strong>Features</strong> alimentan el modelo. Ejemplos:</p><ul><li><code>ticket = monto / cantidad</code></li><li><code>mes = fecha.dt.month</code></li><li><code>pd.get_dummies(df['plan'])</code></li><li>Binning de edad en grupos</li></ul><p>Nunca uses la variable objetivo para crear features antes de split train/test.</p>",
        code: "df['ticket'] = df['monto'] / df['cantidad'].replace(0, np.nan)\ndf['dia_semana'] = df['fecha'].dt.dayofweek\ndummies = pd.get_dummies(df['canal'], prefix='canal')",
        exercise: "Creá al menos 3 features nuevas en tu dataset. Documentá por qué podrían predecir mejor el objetivo (real o hipotético). Aplicá get_dummies a una categórica."
      },
      {
        n: 20,
        title: "Primer modelo con scikit-learn",
        duration: "65 min",
        objectives: [
          "Separar train/test con train_test_split",
          "Entrenar regresión o clasificación simple",
          "Evaluar con métrica adecuada (RMSE, accuracy, F1)"
        ],
        content: "<p>Patrón mínimo de ML en sklearn:</p><pre>from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import classification_report\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nmodel = LogisticRegression().fit(X_train, y_train)\nprint(classification_report(y_test, model.predict(X_test)))</pre><p>Elegí métrica según problema: RMSE en regresión, F1 en clases desbalanceadas.</p>",
        code: "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score\n\nX, y = load_iris(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.25, random_state=0)\nclf = LogisticRegression(max_iter=200).fit(X_tr, y_tr)\nprint(accuracy_score(y_te, clf.predict(X_te)))",
        exercise: "Con Iris o tu dataset (binario si es posible), hacé train/test split, entrená un modelo simple y reportá métrica. ¿El rendimiento es aceptable para baseline?"
      },
      {
        n: 21,
        title: "Cierre: checklist pre-carrera",
        duration: "45 min",
        objectives: [
          "Autoevaluar dominio de Python, estadística y EDA",
          "Armar plan de repaso personalizado",
          "Conocer qué verás en el módulo 1 de la carrera"
        ],
        content: "<p>Antes de la cohorte, deberías poder:</p><ul><li>Cargar y limpiar un CSV con pandas</li><li>Explicar media, mediana, IC y p-valor en lenguaje simple</li><li>Graficar distribuciones y correlaciones</li><li>Entrenar un modelo baseline y leer su métrica</li><li>Detectar leakage y sesgo en un enunciado</li></ul><p>En la carrera profundizás: ML avanzado, deep learning intro, SQL, despliegue y proyecto final con mentor.</p>",
        code: "",
        exercise: "Completá autoevaluación 1-5 en: Python, NumPy/pandas, estadística, visualización, sklearn. Listá 3 temas a reforzar y 1 mini-proyecto de 2 horas para practicar (ej. EDA completo de un CSV de Kaggle)."
      }
    ]
  }
];
