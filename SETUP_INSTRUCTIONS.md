## 🚀 Cómo Ejecutar el Proyecto

### Opción 1: Desde VS Code (Recomendado)

1. Abre la terminal integrada en VS Code (`` Ctrl+` ``)
2. Asegúrate de estar en el directorio del proyecto:
   ```powershell
   Set-Location "c:\Users\santi\OneDrive\Documents\TI\Consumo_Backend_Con_Angular"
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```
4. Abre tu navegador en: `http://localhost:4200`

### Opción 2: Desde Command Prompt

1. Abre Command Prompt o PowerShell
2. Navega al directorio del proyecto:
   ```cmd
   cd "c:\Users\santi\OneDrive\Documents\TI\Consumo_Backend_Con_Angular"
   ```
3. Inicia el servidor:
   ```bash
   npm start
   ```

---

## 📋 Verificación de Instalación

Si tienes problemas, verifica que tengas instalado:

```bash
# Verificar Node.js
node --version
# Debe ser v18+

# Verificar npm
npm --version
# Debe ser v9+

# Verificar Angular CLI (global)
npm list -g @angular/cli
```

---

## 🎯 Navegación en la App

Una vez que el servidor esté corriendo:

1. **Sidenav**: Menú a la izquierda con opciones
   - Dashboard (Página de inicio)
   - Alumnos (Gestión de estudiantes)
   - Materias (Gestión de cursos)
   - Semestres (Gestión de períodos)

2. **Toggle**: Botón en la esquina superior izquierda para abrir/cerrar el menú

3. **Selección Activa**: El item seleccionado se resalta en turquesa (#1abc9c)

---

## 🛠️ Comandos Útiles

```bash
# Iniciar servidor en modo desarrollo
npm start

# Build para producción
npm run build

# Ver los archivos construidos
npm run build && npm run serve:ssr:Consumo_backend_angular

# Ejecutar tests
npm test

# Limpiar archivos generados
ng clean
```

---

## 📁 Estructura Principal

```
src/app/
├── shared/
│   └── components/
│       ├── nav/
│       │   ├── nav.component.ts
│       │   ├── nav.component.html
│       │   └── nav.component.css
│       └── index.ts (barrel export)
│
├── features/
│   ├── dashboard/pages/
│   │   └── dashboard-page.component.*
│   ├── alumnos/pages/
│   │   └── alumnos-page.component.*
│   ├── materias/pages/
│   │   └── materias-page.component.*
│   └── semestres/pages/
│       └── semestres-page.component.*
│
├── app.ts (root component)
├── app.html (root template)
├── app.routes.ts (routing config)
└── app.css (root styles)

src/
├── styles.css (global styles)
├── material-theme.scss (Material theme)
└── index.html
```

---

## 🎨 Personalización

### Cambiar colores del tema Dark Teal:

1. Edita `src/app/shared/components/nav/nav.component.css`
2. Busca los valores hex (`#0a4a4f`, `#1abc9c`, etc.)
3. Reemplaza con tus colores

### Agregar nuevas rutas:

1. Crea el page component en `src/app/features/nuevo-modulo/pages/`
2. Añade la ruta en `src/app/app.routes.ts`
3. Agrega el item al array `menuItems` en `nav.component.ts`

---

## 🐛 Solución de Problemas

**Error: "command not found: ng"**
```bash
npm install -g @angular/cli
```

**Error: "Cannot find module"**
```bash
rm -r node_modules package-lock.json
npm install
```

**Puerta 4200 en uso**
```bash
ng serve --port 4201
```

---

¡Listo! Tu Sidenav de "School Manager" está completamente funcional y listo para expandir. 🎓
