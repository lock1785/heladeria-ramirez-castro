# Heladería Ramírez Castro

Página web de la **Heladería Ramírez Castro**, desarrollada como práctica para demostrar el uso de **Git** y **GitFlow**.

## Propósito del proyecto

- Crear una página web sencilla y responsive para una heladería.
- Mostrar en el historial de commits cómo se aplica el flujo de trabajo GitFlow.

## Modelo de ramas (GitFlow)

| Rama | Uso |
| --- | --- |
| `main` | Versión estable y lista para producción. |
| `develop` | Rama de integración de las nuevas funcionalidades. |
| `feature/*` | Desarrollo de funcionalidades nuevas (se crean desde `develop`). |
| `release/*` | Preparación de una nueva versión (se crea desde `develop`). |
| `hotfix/*` | Correcciones urgentes sobre `main`. |

## Estructura del proyecto

```
heladeria-ramirez-castro/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── docs/
│   └── GITFLOW.md
└── README.md
```

## Página web

La página incluye cabecera responsive, sección principal, carta de sabores con precios y etiquetas, historia, testimonios, datos de contacto y un botón flotante de WhatsApp. El diseño se adapta a móvil y respeta la opción de reducir animaciones del sistema.

## Estado actual

El proyecto sigue el flujo GitFlow: `main` contiene el commit inicial, `develop` integra las funcionalidades y cada mejora entra mediante una rama `feature/*`.
