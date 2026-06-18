/**
 * VOROX Code Playground — editor y ejecución Python / JS / HTML.
 */
(function () {
  'use strict';

  var TEMPLATES = {
    python: '# Probá tu código Python\nprint("Hola desde VOROX")\n\nfor i in range(3):\n    print(f"Iteración {i + 1}")\n',
    javascript: '// Probá tu código JavaScript\nconsole.log("Hola desde VOROX");\n\nconst numeros = [10, 20, 30];\nconsole.log("Suma:", numeros.reduce((a, b) => a + b, 0));\n',
    html: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body { font-family: sans-serif; padding: 24px; background: #f8fafc; }\n    h1 { color: #1e40af; }\n    button { background: #facc15; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: bold; }\n  </style>\n</head>\n<body>\n  <h1>VOROX Playground</h1>\n  <p>Editá este HTML y presioná Ejecutar.</p>\n  <button onclick="alert(\'¡Funciona!\')">Probar</button>\n</body>\n</html>\n'
  };

  var TESTS = {
    python: {
      setup: '',
      code: 'resultado = suma(2, 3)\nprint(resultado)',
      tests: [
        { name: 'suma(2, 3) devuelve 5', run: function (pyodide) {
          return pyodide.runPythonAsync('suma(2, 3) == 5');
        }}
      ],
      template: 'def suma(a, b):\n    # Completá la función\n    return a + b\n\nprint(suma(2, 3))\n'
    },
    javascript: {
      template: 'function suma(a, b) {\n  // Completá la función\n  return a + b;\n}\n\nconsole.log(suma(2, 3));\n',
      tests: [
        { name: 'suma(2, 3) === 5', run: function () {
          return typeof suma === 'function' && suma(2, 3) === 5;
        }}
      ]
    }
  };

  var editor = null;
  var pyodide = null;
  var pyodideLoading = false;
  var currentLang = 'python';

  function $(id) { return document.getElementById(id); }

  function setStatus(text, type) {
    var el = $('codeStatus');
    if (!el) return;
    el.textContent = text;
    el.className = 'code-playground__status' + (type ? ' code-playground__status--' + type : '');
  }

  function setConsole(text, isError) {
    var el = $('codeConsole');
    if (!el) return;
    el.textContent = text || '';
    el.classList.toggle('code-playground__console--error', !!isError);
  }

  function getMode(lang) {
    if (lang === 'python') return 'python';
    if (lang === 'javascript') return 'javascript';
    return 'htmlmixed';
  }

  function initEditor() {
    var textarea = $('codeEditor');
    if (!textarea || typeof CodeMirror === 'undefined') return;

    editor = CodeMirror.fromTextArea(textarea, {
      lineNumbers: true,
      theme: 'default',
      mode: 'python',
      tabSize: 2,
      indentUnit: 2,
      lineWrapping: true,
      viewportMargin: Infinity
    });

    editor.setValue(TEMPLATES.python);
  }

  function loadPyodideInstance() {
    if (pyodide) return Promise.resolve(pyodide);
    if (pyodideLoading) {
      return new Promise(function (resolve, reject) {
        var attempts = 0;
        var timer = setInterval(function () {
          attempts += 1;
          if (pyodide) { clearInterval(timer); resolve(pyodide); }
          if (attempts > 150) { clearInterval(timer); reject(new Error('Timeout cargando Python.')); }
        }, 200);
      });
    }

    pyodideLoading = true;
    setStatus('Cargando Python…', 'loading');

    function boot() {
      return window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/'
      }).then(function (py) {
        pyodide = py;
        pyodideLoading = false;
        setStatus('Listo', 'ok');
        return pyodide;
      });
    }

    if (typeof window.loadPyodide === 'function') {
      return boot();
    }

    return new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
      script.onload = function () { boot().then(resolve).catch(reject); };
      script.onerror = function () {
        pyodideLoading = false;
        reject(new Error('No se pudo cargar Pyodide.'));
      };
      document.head.appendChild(script);
    });
  }

  function runPython(code) {
    setStatus('Ejecutando…', 'loading');
    loadPyodideInstance().then(function (py) {
      py.globals.set('_user_code', code);
      return py.runPythonAsync(
        'import io\n' +
        'from contextlib import redirect_stdout\n' +
        '_buf = io.StringIO()\n' +
        'try:\n' +
        '    with redirect_stdout(_buf):\n' +
        '        exec(_user_code, {"__name__": "__main__"})\n' +
        '    _out = _buf.getvalue()\n' +
        'except Exception as _e:\n' +
        '    _out = str(_e)\n' +
        '_out'
      );
    }).then(function (output) {
      setStatus('Listo', 'ok');
      var text = output || '(sin salida)';
      var isError = text.indexOf('Traceback') !== -1 || text.indexOf('Error') === 0;
      setConsole(text, isError);
    }).catch(function (err) {
      setStatus('Error', 'error');
      setConsole(String(err.message || err), true);
    });
  }

  function runJavaScript(code) {
    setStatus('Ejecutando…', 'loading');
    var logs = [];
    var origLog = console.log;
    var origError = console.error;
    var origWarn = console.warn;

    console.log = function () {
      logs.push(Array.prototype.slice.call(arguments).map(String).join(' '));
    };
    console.error = function () {
      logs.push('[error] ' + Array.prototype.slice.call(arguments).map(String).join(' '));
    };
    console.warn = function () {
      logs.push('[warn] ' + Array.prototype.slice.call(arguments).map(String).join(' '));
    };

    try {
      // eslint-disable-next-line no-new-func
      var fn = new Function(code);
      var result = fn();
      if (result !== undefined) {
        logs.push('→ ' + String(result));
      }
      setStatus('Listo', 'ok');
      setConsole(logs.length ? logs.join('\n') : '(sin salida)');
    } catch (err) {
      setStatus('Error', 'error');
      setConsole(err.message || String(err), true);
    } finally {
      console.log = origLog;
      console.error = origError;
      console.warn = origWarn;
    }
  }

  function runHtml(code) {
    setStatus('Listo', 'ok');
    setConsole('Vista previa actualizada →');
    var iframe = $('codePreview');
    if (iframe) {
      iframe.srcdoc = code;
    }
  }

  function runCode() {
    if (!editor) return;
    var code = editor.getValue();
    if (currentLang === 'python') runPython(code);
    else if (currentLang === 'javascript') runJavaScript(code);
    else runHtml(code);
  }

  function runTests() {
    if (!editor) return;
    var cfg = TESTS[currentLang];
    if (!cfg || !cfg.tests) return;

    setStatus('Testeando…', 'loading');
    var lines = ['Resultados de tests:\n'];

    if (currentLang === 'javascript') {
      try {
        // eslint-disable-next-line no-new-func
        new Function(editor.getValue())();
        var passed = 0;
        cfg.tests.forEach(function (t) {
          try {
            var ok = t.run();
            if (ok) { passed++; lines.push('✓ ' + t.name); }
            else { lines.push('✗ ' + t.name); }
          } catch (e) {
            lines.push('✗ ' + t.name + ' — ' + e.message);
          }
        });
        lines.push('\n' + passed + '/' + cfg.tests.length + ' tests pasaron.');
        setStatus(passed === cfg.tests.length ? 'Tests OK' : 'Tests fallidos', passed === cfg.tests.length ? 'ok' : 'error');
        setConsole(lines.join('\n'), passed !== cfg.tests.length);
      } catch (e) {
        setStatus('Error', 'error');
        setConsole('Error al ejecutar código:\n' + e.message, true);
      }
      return;
    }

    if (currentLang === 'python') {
      loadPyodideInstance().then(function (py) {
        return py.runPythonAsync(editor.getValue()).then(function () {
          var chain = Promise.resolve();
          var passed = 0;
          cfg.tests.forEach(function (t) {
            chain = chain.then(function () {
              return t.run(py).then(function (ok) {
                if (ok) { passed++; lines.push('✓ ' + t.name); }
                else { lines.push('✗ ' + t.name); }
              });
            });
          });
          return chain.then(function () {
            lines.push('\n' + passed + '/' + cfg.tests.length + ' tests pasaron.');
            setStatus(passed === cfg.tests.length ? 'Tests OK' : 'Tests fallidos', passed === cfg.tests.length ? 'ok' : 'error');
            setConsole(lines.join('\n'), passed !== cfg.tests.length);
          });
        });
      }).catch(function (e) {
        setStatus('Error', 'error');
        setConsole(String(e.message || e), true);
      });
    }
  }

  function switchLanguage(lang) {
    currentLang = lang;
    if (editor) {
      editor.setOption('mode', getMode(lang));
      editor.setValue(TEMPLATES[lang] || '');
    }

    var isHtml = lang === 'html';
    var preview = $('previewPanel');
    var output = $('outputPanel');
    var workspace = document.querySelector('.code-playground__workspace');
    var testBtn = $('codeTest');
    var outputLabel = $('outputLabel');

    if (preview) preview.hidden = !isHtml;
    if (output) output.hidden = isHtml;
    if (workspace) workspace.classList.toggle('code-playground__workspace--html', isHtml);
    if (testBtn) testBtn.hidden = !TESTS[lang];
    if (outputLabel) outputLabel.textContent = isHtml ? 'Consola' : 'Consola';

    setConsole(isHtml ? 'Editá el HTML y presioná Ejecutar para ver la vista previa.' : 'Presioná «Ejecutar» para ver el resultado.');
    setStatus('Listo', 'ok');
  }

  function bindEvents() {
    $('codeRun')?.addEventListener('click', runCode);
    $('codeTest')?.addEventListener('click', runTests);
    $('codeClear')?.addEventListener('click', function () { setConsole(''); });
    $('codeReset')?.addEventListener('click', function () {
      if (editor) editor.setValue(TEMPLATES[currentLang] || '');
      setConsole('');
      setStatus('Listo', 'ok');
    });
    $('codeLang')?.addEventListener('change', function (e) {
      switchLanguage(e.target.value);
    });

    document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runCode();
      }
    });
  }

  function init() {
    if (!$('codePlayground')) return;
    initEditor();
    bindEvents();
    switchLanguage('python');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
