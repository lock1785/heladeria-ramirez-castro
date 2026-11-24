# Guía rápida de GitFlow para el proyecto

Esta práctica muestra los pasos esenciales del flujo GitFlow usando este repositorio.

## Ramas principales

- **`main`**: contiene solo versiones estables. Cada merge aquí se etiqueta.
- **`develop`**: rama de integración. Todo el trabajo nuevo llega aquí primero.

## Ramas de apoyo

- **`feature/nombre`**: se crea desde `develop` y se integra de vuelta en `develop`.
- **`release/x.y.z`**: se crea desde `develop` para preparar una versión; se fusiona en `main` y en `develop`.
- **`hotfix/x.y.z`**: se crea desde `main` para arreglar urgencias; se fusiona en `main` y en `develop`.

## Comandos usados en esta práctica

```bash
# 1. Commit inicial sobre main
git add README.md .gitignore
git commit -m "docs: commit inicial con README y .gitignore"
git push -u origin main

# 2. Crear develop
git checkout -b develop
git push -u origin develop

# 3. Crear una feature desde develop
git checkout -b feature/pagina-base develop
# ... crear o modificar archivos ...
git add .
git commit -m "feat: estructura base de la página web"
git push -u origin feature/pagina-base

# 4. Integrar la feature en develop con merge --no-ff
git checkout develop
git merge --no-ff feature/pagina-base -m "merge: integrar feature/pagina-base en develop"
git push origin develop
```

## Convención de mensajes

- `docs:` documentación
- `feat:` nueva funcionalidad
- `fix:` corrección
- `merge:` integración de ramas
- `style:` cambios visuales sin cambiar lógica
