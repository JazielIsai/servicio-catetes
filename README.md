# Servicio de catéteres PICC

Página informativa en español sobre catéteres PICC y el dispositivo PowerPICC. Incluye recorridos para pacientes y profesionales, una guía de preguntas y enlaces a fuentes clínicas y del fabricante.

La página principal está en `index.html`. Los estilos se editan en `src/styles.css`: Tailwind CSS 4 genera las utilidades que aparecen en el HTML y el resto del sistema visual permanece en CSS. GitHub Pages sirve el archivo compilado `build/css/app.css`.

Para trabajar con los estilos:

```bash
npm install
npm run build:css
```

Durante el desarrollo puedes usar `npm run watch:css`. Después de cada cambio de estilos, incluye `build/css/app.css` en el commit para que GitHub Pages publique la versión compilada. La compilación usa Tailwind CLI y no necesita JavaScript en el navegador.

## Actualizar datos del servicio

Edita **solo `site-config.js`** para sustituir los datos de demostración:

1. Nombre del servicio, cobertura, lugares de atención y horario.
2. Nombre, cargo, formación, registro profesional y foto autorizada del responsable clínico.
3. Servicios que realmente se ofrecen y pasos reales para solicitar atención.
4. WhatsApp con código de país (solo números) o correo de contacto.
5. Cuando todo sea real y verificable, cambia `demo: true` a `demo: false`.

Mientras el sitio esté en modo demostración, muestra una advertencia y mantiene desactivados los enlaces de contacto. Si faltan datos esenciales o un contacto válido, permanece en modo demostración aunque se cambie el valor de `demo`.

Las imágenes clínicas actuales son ilustrativas. Antes de usar fotos reales de personas o procedimientos, comprueba que tienes autorización para publicarlas. Confirma las características del producto con la [información del fabricante](https://www.bd.com/en-us/products-and-solutions/products/product-families/powerpicc-catheter).

Diseño y desarrollo: [Jaziel Isaí Pérez Garrido](https://isai-dev.com).
