# Aplicación de Consola (CLI) con TypeScript

## Como subirlo a NPM

```bash
# Copilar el proyecto
yarn build
```

- Se añade un script llamado "prepare" y agregamos el comando anterior a el.

- Se añade la siguiente linea en el index.js al principio de nuestro proyecto.

```js
#!/usr/bin/env node
```

- Para publicarlo:

```bash
# Para crear una cuenta en npm
npm adduser

# Publicar el proyecto
yarn publish
```
