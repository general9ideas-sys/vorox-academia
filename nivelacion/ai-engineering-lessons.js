window.AE_NIV_MODULES = [
  {
    id: 1,
    title: "Fundamentos del AI Engineer",
    weeks: "1 semana",
    lessons: [
      {
        n: 1,
        title: "Qué hace un AI Engineer",
        duration: "50 min",
        objectives: [
          "Diferenciar AI Engineer, Data Scientist y ML Engineer",
          "Identificar casos de uso de IA generativa y ML clásico",
          "Reconocer entregables: APIs, pipelines, evaluación y despliegue"
        ],
        content: "<p>El <strong>AI Engineer</strong> convierte capacidades de IA en software útil: integra modelos, diseña prompts, construye RAG y despliega servicios confiables.</p><p><strong>Vs Data Scientist:</strong> el científico experimenta y modela; el AI Engineer orquesta producto de extremo a extremo.</p><p><strong>Vs ML Engineer:</strong> el ML Engineer optimiza entrenamiento y serving de modelos propios; el AI Engineer suele trabajar con modelos fundacionales (OpenAI, Anthropic) y capas de aplicación.</p><p><strong>Entregables típicos:</strong> API FastAPI, pipeline RAG, agente con herramientas, métricas de evaluación y contenedor Docker.</p>",
        code: "",
        exercise: "Elegí una app con IA (ChatGPT, copiloto de código, recomendador). Escribí: (1) problema de negocio, (2) qué haría un AI Engineer, (3) componentes técnicos (API, datos, modelo, monitoreo)."
      },
      {
        n: 2,
        title: "Arquitectura de una app con IA",
        duration: "50 min",
        objectives: [
          "Describir capas: frontend, backend, inferencia y almacenamiento",
          "Identificar dónde encajan LLMs, embeddings y bases vectoriales",
          "Reconocer riesgos: latencia, costos y alucinaciones"
        ],
        content: "<p>Un sistema moderno de IA suele tener:</p><ol><li><strong>Frontend:</strong> chat, formulario o integración en producto existente.</li><li><strong>Backend:</strong> validación, orquestación y seguridad.</li><li><strong>Motor de IA:</strong> LLM, embeddings o modelo ML.</li><li><strong>Datos:</strong> base relacional, vector store y logs.</li><li><strong>Observabilidad:</strong> métricas, trazas y versionado de prompts.</li></ol><p>Separar capas permite cambiar proveedor de modelo sin reescribir toda la app.</p>",
        code: "stack = {\n    \"frontend\": \"React o web simple\",\n    \"backend\": \"FastAPI\",\n    \"llm\": \"OpenAI / Anthropic\",\n    \"vector_db\": \"Chroma\",\n    \"monitoring\": \"logs + costos por request\"\n}\nprint(stack)",
        exercise: "Dibujá un diagrama de arquitectura para un asistente de soporte interno. Incluí usuario, backend, proveedor LLM, base de conocimiento y monitoreo."
      },
      {
        n: 3,
        title: "Ética, seguridad y datos en IA",
        duration: "45 min",
        objectives: [
          "Aplicar principios de privacidad y minimización de datos",
          "Reconocer prompt injection y fuga de información",
          "Documentar limitaciones y riesgos del sistema"
        ],
        content: "<p>En AI Engineering, la seguridad no es opcional: prompts maliciosos pueden extraer instrucciones del sistema; datos sensibles pueden filtrarse en respuestas.</p><p>Buenas prácticas: validar entrada, filtrar salida, no enviar PII innecesaria al modelo, registrar accesos y definir políticas de retención.</p><p>Documentá qué puede y qué no puede hacer tu asistente antes de lanzarlo a usuarios reales.</p>",
        code: "",
        exercise: "Listá 5 riesgos de un chatbot corporativo con acceso a documentos internos. Para cada uno, proponé una medida de mitigación concreta."
      }
    ]
  },
  {
    id: 2,
    title: "Python esencial para IA",
    weeks: "1.5 semanas",
    lessons: [
      {
        n: 4,
        title: "Entorno y primeros scripts",
        duration: "60 min",
        objectives: [
          "Crear entorno virtual e instalar dependencias básicas",
          "Usar variables, tipos y f-strings",
          "Organizar un proyecto mínimo con carpetas app/ y tests/"
        ],
        content: "<p>Configurá tu entorno antes de la carrera:</p><pre>python -m venv .venv\n.venv\\Scripts\\activate   # Windows\npip install fastapi uvicorn pydantic requests python-dotenv</pre><p>En AI Engineering, Python orquesta APIs y automatiza evaluaciones. Estructura clara desde el inicio evita caos en proyectos con LLMs.</p>",
        code: "from pydantic import BaseModel\n\nclass ChatRequest(BaseModel):\n    user_id: str\n    message: str\n\nreq = ChatRequest(user_id=\"u-1\", message=\"Hola\")\nprint(req.model_dump())",
        exercise: "Creá carpeta `ai-nivelacion` con subcarpetas `app` y `tests`. Instalá FastAPI y Pydantic. Escribí un script que valide un payload de chat con Pydantic."
      },
      {
        n: 5,
        title: "Estructuras de datos y funciones",
        duration: "55 min",
        objectives: [
          "Usar listas, diccionarios y comprehensions",
          "Escribir funciones reutilizables con type hints",
          "Manejar errores con try/except básico"
        ],
        content: "<p>Los diccionarios representan configuraciones de prompts, respuestas de APIs y metadatos de documentos. Las funciones encapsulan lógica repetible: limpiar texto, parsear JSON, calcular costos.</p><p>Los <strong>type hints</strong> mejoran legibilidad y reducen bugs en cadenas de procesamiento.</p>",
        code: "def limpiar_texto(texto: str) -> str:\n    return \" \".join(texto.strip().split())\n\ndef costo_tokens(tokens: int, precio_por_mil: float) -> float:\n    return (tokens / 1000) * precio_por_mil\n\nprint(costo_tokens(2500, 0.15))",
        exercise: "Escribí funciones para: (1) contar palabras, (2) truncar texto a N caracteres, (3) estimar costo de tokens. Probá con 3 inputs distintos."
      },
      {
        n: 6,
        title: "HTTP y consumo de APIs",
        duration: "60 min",
        objectives: [
          "Entender verbos GET y POST en APIs REST",
          "Consumir una API pública con requests",
          "Parsear respuestas JSON de forma segura"
        ],
        content: "<p>La mayoría de integraciones con IA son <strong>llamadas HTTP</strong> a APIs externas. Debes manejar timeouts, códigos de estado y errores de red.</p><p>Patrón típico: construir payload JSON → POST → validar status 200 → extraer campo de respuesta.</p><p>Nunca hardcodees API keys en el código; usá variables de entorno con <code>python-dotenv</code>.</p>",
        code: "import os\nimport requests\n\nAPI_URL = \"https://api.github.com/users/octocat\"\nresp = requests.get(API_URL, timeout=10)\nresp.raise_for_status()\ndata = resp.json()\nprint(data.get(\"login\"), data.get(\"public_repos\"))",
        exercise: "Consumí una API pública (GitHub, JSONPlaceholder o similar). Imprimí 3 campos del JSON. Agregá manejo de error si la request falla."
      },
      {
        n: 7,
        title: "JSON, archivos y configuración",
        duration: "55 min",
        objectives: [
          "Leer y escribir JSON con el módulo json",
          "Cargar variables desde .env",
          "Separar configuración de lógica de negocio"
        ],
        content: "<p>Prompts versionados, datasets de evaluación y configs de modelos suelen guardarse en JSON o YAML. Separar config del código permite cambiar modelos sin tocar la lógica principal.</p><p><code>python-dotenv</code> carga claves desde <code>.env</code> (nunca subas ese archivo a Git).</p>",
        code: "import json\nfrom pathlib import Path\n\nconfig = {\n    \"model\": \"gpt-4o-mini\",\n    \"temperature\": 0.2,\n    \"max_tokens\": 500\n}\nPath(\"config.json\").write_text(json.dumps(config, indent=2), encoding=\"utf-8\")\nprint(json.loads(Path(\"config.json\").read_text(encoding=\"utf-8\")))",
        exercise: "Creá `config.json` con model, temperature y system_prompt. Escribí script que lo lea y muestre cada campo. Agregá `.env.example` con OPENAI_API_KEY=."
      },
      {
        n: 8,
        title: "Introducción a FastAPI",
        duration: "65 min",
        objectives: [
          "Crear un endpoint GET y uno POST",
          "Validar entrada con modelos Pydantic",
          "Ejecutar servidor local con uvicorn"
        ],
        content: "<p><strong>FastAPI</strong> es el framework que usarás en la carrera para exponer servicios de IA. Combina validación automática, documentación OpenAPI y alto rendimiento.</p><p>Un servicio mínimo tiene rutas, modelos de request/response y manejo de errores HTTP.</p>",
        code: "from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass EchoRequest(BaseModel):\n    message: str\n\n@app.post(\"/echo\")\ndef echo(body: EchoRequest):\n    return {\"reply\": body.message.upper()}\n\n# uvicorn main:app --reload",
        exercise: "Creá app FastAPI con GET `/health` (devuelve status ok) y POST `/echo`. Probá ambos con curl o el navegador en `/docs`."
      }
    ]
  },
  {
    id: 3,
    title: "Álgebra lineal y datos numéricos",
    weeks: "1 semana",
    lessons: [
      {
        n: 9,
        title: "Vectores y representación de datos",
        duration: "55 min",
        objectives: [
          "Representar features como vectores numéricos",
          "Calcular magnitud y similitud básica",
          "Conectar vectores con embeddings de texto"
        ],
        content: "<p>Un embedding es un <strong>vector denso</strong> que captura significado semántico. Textos similares tienen vectores cercanos en el espacio.</p><p>Operaciones clave: suma de vectores, producto escalar (similitud) y distancia euclidiana.</p><p>En RAG, comparás el embedding de la pregunta con embeddings de documentos para recuperar contexto relevante.</p>",
        code: "import numpy as np\n\na = np.array([0.2, 0.8, 0.1])\nb = np.array([0.3, 0.7, 0.2])\ncos_sim = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))\nprint(f\"Similitud coseno: {cos_sim:.3f}\")",
        exercise: "Creá 3 vectores de 4 dimensiones (simulando embeddings). Calculá similitud coseno entre el primero y los otros dos. ¿Cuál es más parecido?"
      },
      {
        n: 10,
        title: "Matrices y operaciones básicas",
        duration: "55 min",
        objectives: [
          "Interpretar datasets como matrices filas × columnas",
          "Aplicar operaciones con NumPy",
          "Entender shape y broadcasting a nivel intuitivo"
        ],
        content: "<p>Un batch de 32 textos convertidos a embeddings de dimensión 768 es una matriz <strong>32×768</strong>. Las redes neuronales y muchos algoritmos operan sobre matrices completas, no fila por fila.</p><p><strong>NumPy</strong> es la base numérica de PyTorch y muchas librerías de IA.</p>",
        code: "import numpy as np\n\nX = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])  # 3 muestras, 3 features\nprint(X.shape)\nprint(X.mean(axis=0))  # media por columna\nprint(X[0])            # primera muestra",
        exercise: "Creá matriz 5×3 con valores aleatorios. Calculá media por columna, suma por fila y la fila con mayor suma."
      },
      {
        n: 11,
        title: "Distancias y búsqueda por similitud",
        duration: "50 min",
        objectives: [
          "Calcular distancia euclidiana y similitud coseno",
          "Implementar búsqueda del vecino más cercano",
          "Relacionar búsqueda vectorial con RAG"
        ],
        content: "<p>En una base vectorial, la consulta del usuario se compara con miles de vectores almacenados. El documento más similar (top-k) alimenta el contexto del LLM.</p><p><strong>Similitud coseno</strong> es común en NLP porque normaliza magnitud. <strong>Distancia euclidiana</strong> mide proximidad absoluta.</p>",
        code: "import numpy as np\n\nquery = np.array([1.0, 0.5, 0.2])\ndocs = np.array([\n    [0.9, 0.4, 0.3],\n    [0.1, 0.9, 0.8],\n    [1.0, 0.6, 0.1]\n])\nscores = docs @ query / (np.linalg.norm(docs, axis=1) * np.linalg.norm(query))\nprint(\"Mejor doc:\", int(np.argmax(scores)))",
        exercise: "Con 5 vectores simulados y 1 query, implementá top-3 por similitud coseno sin librerías externas (solo NumPy)."
      },
      {
        n: 12,
        title: "Probabilidad ligera para IA",
        duration: "50 min",
        objectives: [
          "Interpretar probabilidades en clasificadores",
          "Entender softmax e intuición de confianza del modelo",
          "Distinguir incertidumbre de error de predicción"
        ],
        content: "<p>Los modelos de clasificación devuelven probabilidades por clase. Una predicción con 51% de confianza es muy distinta de una con 99%.</p><p>En LLMs, la «probabilidad» del siguiente token guía la generación; temperatura modifica qué tan conservadora o creativa es la salida.</p><p>No necesitás demostrar teoremas: sí interpretar scores y calibrar decisiones de producto.</p>",
        code: "import numpy as np\n\ndef softmax(x):\n    e = np.exp(x - np.max(x))\n    return e / e.sum()\n\nlogits = np.array([2.0, 1.0, 0.1])\nprobs = softmax(logits)\nprint(dict(enumerate(probs.round(3))))",
        exercise: "Calculá softmax para 3 logits distintos. Compará qué pasa cuando multiplicás logits por 2 o por 0.5 antes de softmax."
      }
    ]
  },
  {
    id: 4,
    title: "Machine Learning aplicado (intro)",
    weeks: "1.5 semanas",
    lessons: [
      {
        n: 13,
        title: "Tipos de aprendizaje supervisado",
        duration: "55 min",
        objectives: [
          "Diferenciar clasificación y regresión",
          "Identificar variable objetivo y features",
          "Reconocer cuándo ML clásico complementa un LLM"
        ],
        content: "<p>No todo requiere un LLM. Clasificar spam, predecir churn o detectar fraude a veces se resuelve mejor con modelos ligeros y baratos.</p><p><strong>Supervisado:</strong> tenés ejemplos etiquetados (X → y). El modelo aprende a generalizar a datos nuevos.</p><p>El AI Engineer elige la herramienta correcta: reglas, ML clásico, fine-tuning o RAG según el caso.</p>",
        code: "",
        exercise: "Para 4 casos (detección de idioma, resumen de contratos, predicción de ventas, moderación de comentarios), indicá si usarías reglas, ML clásico, LLM o combinación. Justificá."
      },
      {
        n: 14,
        title: "Train/test split y métricas",
        duration: "60 min",
        objectives: [
          "Separar datos en entrenamiento y prueba",
          "Interpretar accuracy, precision, recall y F1",
          "Evitar evaluar en los mismos datos de entrenamiento"
        ],
        content: "<p>Evaluar en train infla métricas: el modelo «memoriza» en lugar de generalizar. <code>train_test_split</code> con <code>random_state</code> fijo garantiza reproducibilidad.</p><p>En clases desbalanceadas, accuracy engaña: usá F1 o recall según el costo de falsos negativos.</p>",
        code: "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import classification_report\n\nX, y = load_iris(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.25, random_state=42)\nclf = LogisticRegression(max_iter=200).fit(X_tr, y_tr)\nprint(classification_report(y_te, clf.predict(X_te)))",
        exercise: "Entrená clasificador con Iris. Reportá accuracy y F1 macro. Repetí evaluando en train: ¿qué diferencia observás?"
      },
      {
        n: 15,
        title: "Pipelines y preprocesamiento",
        duration: "60 min",
        objectives: [
          "Encadenar transformación y modelo con Pipeline",
          "Aplicar escalado StandardScaler",
          "Mantener reproducibilidad del flujo"
        ],
        content: "<p>Un <strong>Pipeline</strong> de sklearn evita leakage: el escalado se aprende solo en train y se aplica igual en test.</p><p>Patrón: imputar nulos → escalar → entrenar modelo. Guardar el pipeline completo para producción.</p>",
        code: "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.datasets import load_wine\nfrom sklearn.model_selection import train_test_split\n\nX, y = load_wine(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=0)\npipe = Pipeline([\n    (\"scale\", StandardScaler()),\n    (\"clf\", LogisticRegression(max_iter=500))\n])\npipe.fit(X_tr, y_tr)\nprint(pipe.score(X_te, y_te))",
        exercise: "Creá pipeline con StandardScaler + LogisticRegression en dataset Wine o Breast Cancer. Compará score con y sin escalado."
      },
      {
        n: 16,
        title: "Overfitting y validación",
        duration: "55 min",
        objectives: [
          "Reconocer overfitting vs underfitting",
          "Usar validación cruzada básica (concepto)",
          "Elegir hiperparámetros simples con sentido común"
        ],
        content: "<p><strong>Overfitting:</strong> el modelo aprende ruido del train y falla en datos nuevos. <strong>Underfitting:</strong> modelo demasiado simple.</p><p>Señales: train accuracy 99%, test 70% → overfitting. Soluciones: más datos, regularización, modelo más simple.</p><p>En LLMs, overfitting aparece como memorización de ejemplos del prompt o fine-tuning excesivo.</p>",
        code: "",
        exercise: "Describí un escenario de overfitting en (1) clasificador sklearn y (2) fine-tuning de LLM. Para cada uno, proponé 2 acciones correctivas."
      }
    ]
  },
  {
    id: 5,
    title: "Puente hacia LLMs y APIs de IA",
    weeks: "1 semana",
    lessons: [
      {
        n: 17,
        title: "Introducción a LLMs y prompts",
        duration: "60 min",
        objectives: [
          "Entender qué es un modelo de lenguaje fundacional",
          "Escribir system prompt, user prompt y few-shot básico",
          "Controlar temperatura y max_tokens"
        ],
        content: "<p>Los <strong>LLMs</strong> predicen el siguiente token dado contexto previo. No «saben» hechos actualizados por defecto: necesitan contexto (RAG) o herramientas.</p><p><strong>System prompt:</strong> define rol y reglas. <strong>User prompt:</strong> la consulta. <strong>Few-shot:</strong> ejemplos en el prompt para guiar formato.</p><p><strong>Temperatura</strong> baja → respuestas más deterministas. Alta → más creatividad y riesgo de alucinación.</p>",
        code: "# Pseudocódigo de llamada OpenAI\npayload = {\n    \"model\": \"gpt-4o-mini\",\n    \"messages\": [\n        {\"role\": \"system\", \"content\": \"Sos un tutor de Python conciso.\"},\n        {\"role\": \"user\", \"content\": \"Explicá list comprehensions en 3 líneas.\"}\n    ],\n    \"temperature\": 0.2,\n    \"max_tokens\": 150\n}",
        exercise: "Escribí 3 variantes de prompt para clasificar emails (spam/no spam): zero-shot, con system prompt estricto y few-shot con 2 ejemplos. Compará qué pedirías en cada uno."
      },
      {
        n: 18,
        title: "Embeddings y RAG (concepto)",
        duration: "60 min",
        objectives: [
          "Explicar retrieval + generation en lenguaje simple",
          "Describir chunking y top-k retrieval",
          "Identificar cuándo RAG es mejor que fine-tuning"
        ],
        content: "<p><strong>RAG</strong> (Retrieval Augmented Generation): antes de responder, el sistema busca documentos relevantes y los incluye en el prompt como contexto.</p><p>Flujo: dividir docs en chunks → embeddar → guardar en vector store → ante pregunta, recuperar top-k → armar prompt con contexto → LLM responde.</p><p>RAG es ideal cuando el conocimiento cambia seguido o es privado; fine-tuning cuando necesitás estilo o formato muy específico.</p>",
        code: "rag_flow = [\n    \"1. Chunk documentos\",\n    \"2. Generar embeddings\",\n    \"3. Guardar en vector DB\",\n    \"4. Query del usuario → embedding\",\n    \"5. Top-k chunks similares\",\n    \"6. Prompt con contexto + pregunta\",\n    \"7. Respuesta del LLM\"\n]\nfor paso in rag_flow:\n    print(paso)",
        exercise: "Diseñá pipeline RAG para manual de RRHH de 200 páginas. Definí tamaño de chunk, métrica de similitud, top-k y qué incluirías en el system prompt."
      },
      {
        n: 19,
        title: "Cierre: checklist pre-carrera",
        duration: "45 min",
        objectives: [
          "Autoevaluar dominio de Python, álgebra lineal y ML intro",
          "Armar plan de repaso personalizado",
          "Conocer qué verás en el módulo 1 de AI Engineering"
        ],
        content: "<p>Antes de la cohorte, deberías poder:</p><ul><li>Crear un endpoint FastAPI con validación Pydantic</li><li>Consumir una API HTTP y parsear JSON</li><li>Operar con vectores y similitud coseno en NumPy</li><li>Entrenar un clasificador baseline con sklearn</li><li>Explicar qué es RAG y cómo se arma un prompt básico</li><li>Identificar riesgos de seguridad en apps con LLM</li></ul><p>En la carrera profundizás: LLMs en producción, agentes, MLOps, evaluación avanzada y proyecto final desplegable.</p>",
        code: "",
        exercise: "Autoevaluación 1-5 en: Python, FastAPI, NumPy, ML básico, LLMs/prompts. Listá 3 temas a reforzar y un mini-proyecto de 3 horas: API `/ask` que simule respuesta con contexto hardcodeado (sin API key real)."
      }
    ]
  }
];
