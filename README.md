# Sistema de Gestión de Siniestros - Frontend 🎨

Aplicación web frontend para la gestión de siniestros de seguros, construida con Vue 3, Quasar Framework y TypeScript.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Rutas de la Aplicación](#-rutas-de-la-aplicación)
- [Componentes Principales](#-componentes-principales)
- [Scripts Disponibles](#-scripts-disponibles)
- [Integración con la API](#-integración-con-la-api)
- [Build para Producción](#-build-para-producción)
- [Deployment](#-deployment)

## ✨ Características

- ✅ **Vue 3 Composition API** - Framework progresivo y moderno
- ✅ **Quasar Framework** - Componentes UI de alta calidad
- ✅ **TypeScript** - Tipado estático para mayor seguridad
- ✅ **Vue Router** - Navegación declarativa
- ✅ **Axios** - Cliente HTTP configurado
- ✅ **Responsive Design** - Adaptable a todos los dispositivos
- ✅ **Material Design** - Interfaz moderna y consistente
- ✅ **Hot Module Replacement** - Desarrollo rápido con HMR
- ✅ **ESLint + Prettier** - Código limpio y consistente
- ✅ **Vite** - Build tool ultrarrápido

## 🛠 Tecnologías

- **Framework**: Vue 3.5.x (Composition API)
- **UI Framework**: Quasar 2.16.x
- **Lenguaje**: TypeScript 5.x
- **Router**: Vue Router 4.x
- **HTTP Client**: Axios 1.13.x
- **Build Tool**: Vite (via Quasar CLI)
- **Iconos**: Material Icons
- **Fuentes**: Roboto

## 📦 Requisitos Previos

- Node.js >= 20.x (también soporta v22, v24, v26, v28)
- npm >= 6.13.4 o yarn >= 1.21.1
- Quasar CLI (se instala automáticamente)

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone <repository-url>
cd front-sistema-de-gestion-de-siniestros
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
```

Esto también ejecutará automáticamente `quasar prepare` gracias al script postinstall.

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# API Backend
API_URL=http://localhost:3000/api

# Quasar
NODE_ENV=development
```

## ⚙️ Configuración

### Variables de Entorno

| Variable | Descripción | Default |
|----------|-------------|---------|
| `API_URL` | URL base de la API backend | `http://localhost:3000/api` |
| `NODE_ENV` | Entorno de ejecución | `development` |

### Configuración de Axios

El cliente Axios está configurado en [src/boot/axios.ts](src/boot/axios.ts) y se inicializa automáticamente al arrancar la app.

### Configuración de Quasar

La configuración principal está en [quasar.config.ts](quasar.config.ts). Puedes personalizar:
- Plugins de Quasar
- Build settings
- PWA options
- Electron settings
- Y más...

Ver [documentación oficial](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

## 🎯 Uso

### Modo Desarrollo

```bash
npm run dev
# o
quasar dev
```

La aplicación estará disponible en `http://localhost:9000` (puerto por defecto de Quasar)

### Características en Desarrollo:
- ⚡ Hot Module Replacement (HMR)
- 🔍 Error reporting en tiempo real
- 🔄 Recarga automática al guardar cambios

### Linting

```bash
npm run lint
# o
yarn lint
```

### Formateo de Código

```bash
npm run format
# o
yarn format
```

Esto formateará todos los archivos `.js`, `.ts`, `.vue`, `.scss`, `.html`, `.md`, y `.json`.

## 📁 Estructura del Proyecto

```
front-sistema-de-gestion-de-siniestros/
├── public/
│   └── icons/                 # Iconos de la aplicación
├── src/
│   ├── assets/                # Assets estáticos (imágenes, etc.)
│   ├── boot/
│   │   └── axios.ts          # Configuración de Axios
│   ├── components/
│   │   ├── ClaimList.vue     # Lista de siniestros
│   │   └── models.ts         # TypeScript interfaces
│   ├── css/
│   │   ├── app.scss          # Estilos globales
│   │   └── quasar.variables.scss # Variables de Quasar
│   ├── layouts/
│   │   └── MainLayout.vue    # Layout principal con navegación
│   ├── pages/
│   │   ├── IndexPage.vue     # Página de inicio
│   │   ├── ClaimsPage.vue    # Página de listado de siniestros
│   │   ├── ClaimNewPage.vue  # Formulario de nuevo siniestro
│   │   ├── ClaimDetailPage.vue # Detalle de siniestro
│   │   └── ErrorNotFound.vue # Página 404
│   ├── router/
│   │   ├── index.ts          # Configuración del router
│   │   └── routes.ts         # Definición de rutas
│   ├── services/
│   │   └── claimService.ts   # Servicio API de siniestros
│   ├── App.vue               # Componente raíz
│   └── env.d.ts              # Tipos de variables de entorno
├── .env                      # Variables de entorno
├── eslint.config.js          # Configuración ESLint
├── index.html                # HTML principal
├── package.json
├── postcss.config.js
├── quasar.config.ts          # Configuración de Quasar
├── tsconfig.json             # Configuración TypeScript
└── README.md
```

## 🗺️ Rutas de la Aplicación

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | IndexPage | Página de inicio/dashboard |
| `/claims` | ClaimsPage | Listado de todos los siniestros |
| `/claims/new` | ClaimNewPage | Formulario para crear nuevo siniestro |
| `/claims/:id` | ClaimDetailPage | Detalle y edición de un siniestro |
| `/:catchAll(.*)` | ErrorNotFound | Página 404 para rutas no encontradas |

## 🧩 Componentes Principales

### ClaimList.vue
Componente reutilizable que muestra una lista de siniestros con:
- Tabla/Tarjetas responsivas
- Filtros por estado
- Paginación
- Acciones rápidas

### MainLayout.vue
Layout principal que incluye:
- Barra de navegación superior
- Drawer lateral (menú)
- Área de contenido principal
- Footer

### Servicios

#### claimService.ts
Servicio centralizado para comunicación con la API:

```typescript
// Obtener todos los siniestros
getClaims(filters?: { status?: string; date?: string })

// Obtener un siniestro por ID
getClaim(id: string)

// Crear nuevo siniestro
createClaim(payload: CreateClaimDTO)

// Actualizar estado de siniestro
updateClaimStatus(id: string, status: string, amount?: number)
```

### Modelos TypeScript

```typescript
interface Claim {
  id: string;
  claimNumber: string;
  userId: string;
  description: string;
  incidentDate?: string;
  location?: string;
  status?: string;
  amount?: number | null;
  images?: Image[];
}

interface CreateClaimDTO {
  userId: string;
  description: string;
  incidentDate: Date | string;
  location?: string;
  images: string[];
}
```

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo

# Linting y Formateo
npm run lint             # Ejecuta ESLint
npm run format           # Formatea código con Prettier

# Build
npm run build            # Compila para producción
quasar build             # Build con Quasar CLI

# Testing
npm test                 # Ejecuta tests (por configurar)

# Otros
npm run postinstall      # Prepara Quasar (ejecutado automáticamente)
```

## 🔗 Integración con la API

### Configuración Base

El cliente Axios está pre-configurado con:
- **Base URL**: `http://localhost:3000/api` (modificable vía `API_URL` en `.env`)
- **Headers**: Automáticamente manejados por Axios
- **Interceptors**: Disponibles para agregar autenticación/logging

### Ejemplo de Uso

```typescript
import { getClaims, createClaim } from 'src/services/claimService';

// En un componente Vue
const claims = ref<Claim[]>([]);

const loadClaims = async () => {
  try {
    claims.value = await getClaims();
  } catch (error) {
    console.error('Error loading claims:', error);
  }
};

const submitClaim = async (data: CreateClaimDTO) => {
  try {
    const newClaim = await createClaim(data);
    console.log('Claim created:', newClaim);
  } catch (error) {
    console.error('Error creating claim:', error);
  }
};
```

### Manejo de Errores

Se recomienda implementar un interceptor global para errores:

```typescript
// En boot/axios.ts
api.interceptors.response.use(
  response => response,
  error => {
    // Manejo centralizado de errores
    if (error.response?.status === 401) {
      // Redirigir a login
    }
    return Promise.reject(error);
  }
);
```

## 📦 Build para Producción

### Build SPA (Single Page Application)

```bash
npm run build
# o
quasar build
```

Esto generará los archivos optimizados en `dist/spa/`:
- JavaScript minificado y chunked
- CSS extraído y optimizado
- Assets optimizados
- Source maps para debugging

### Configuración del Build

El build está configurado para:
- Target browsers: ES2022, Firefox 115+, Chrome 115+, Safari 14+
- TypeScript strict mode
- Tree shaking automático
- Code splitting
- Lazy loading de rutas

### Variables de Entorno en Producción

Asegúrate de configurar:
```env
API_URL=https://tu-api-production.com/api
NODE_ENV=production
```

## 🚢 Deployment

### Netlify / Vercel

1. **Build Command**: `quasar build`
2. **Output Directory**: `dist/spa`
3. **Environment Variables**: Configurar `API_URL`

### Render

1. Conectar repositorio
2. Configurar:
   - Build Command: `npm install && quasar build`
   - Publish Directory: `dist/spa`
3. Agregar variables de entorno

### GitHub Pages

```bash
# Build con base path
quasar build -m spa

# Deploy (requiere gh-pages package)
npx gh-pages -d dist/spa
```

### Docker

```dockerfile
# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist/spa /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Nginx Configuration

```nginx
server {
  listen 80;
  server_name _;
  root /usr/share/nginx/html;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  # Cache static assets
  location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }
}
```

## 🎨 Personalización

### Temas de Quasar

Personaliza colores en [src/css/quasar.variables.scss](src/css/quasar.variables.scss):

```scss
$primary: #1976D2;
$secondary: #26A69A;
$accent: #9C27B0;
// etc...
```

### Agregar Plugins de Quasar

En [quasar.config.ts](quasar.config.ts):

```typescript
framework: {
  plugins: [
    'Notify',
    'Dialog',
    'Loading',
    // etc...
  ]
}
```

## 🔒 Mejores Prácticas

1. **Siempre usa TypeScript** para props y emits
2. **Composition API** preferida sobre Options API
3. **Lazy loading** de rutas para mejor performance
4. **Manejo de errores** centralizado con try/catch
5. **Validación de formularios** con Quasar o Vuelidate
6. **Loading states** para operaciones asíncronas
7. **Responsive design** con Quasar breakpoints

## 📄 Licencia

Privado

## 👥 Contribución

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Para preguntas o problemas:
- Autor: her85 <herbotto1985@gmail.com>
- Documentación Quasar: https://v2.quasar.dev
- Documentación Vue: https://vuejs.org

## 🔗 Enlaces Útiles

- [Quasar Framework](https://quasar.dev)
- [Vue 3 Documentation](https://vuejs.org)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Material Design Icons](https://fonts.google.com/icons)
- [Axios Documentation](https://axios-http.com)

---

Desarrollado con Vue 3, Quasar Framework y TypeScript
