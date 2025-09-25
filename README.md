# NotesApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.6.

### Iniciar la Aplicación

La aplicación requiere que dos procesos se ejecuten de forma simultánea en dos terminales separadas: la **API simulada** y el **servidor de desarrollo de Angular**.

1.  **Iniciar la API Simulada**
    En una terminal, ejecuta el siguiente comando para iniciar `json-server`. Este servidor leerá el archivo `db.json` y servirá los datos en `http://localhost:3000`.
    ```bash
    npm run start:json
    ```

2.  **Iniciar el Servidor de Angular**
    En una **segunda terminal**, ejecuta el comando para iniciar el servidor de desarrollo de Angular.
    ```bash
    ng serve -o
    ```
    La opción `-o` abrirá automáticamente tu navegador en `http://localhost:4200/`, donde podrás ver la aplicación en funcionamiento.

