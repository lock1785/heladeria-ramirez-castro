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
├── docs/
│   └── GITFLOW.md
└── README.md
```

## Estado actual

Commit inicial: documentación base y configuración del repositorio. Las funcionalidades de la página se incorporarán mediante ramas `feature/*` sobre `develop`.
