import {createGlobalStyle} from "styled-components"; /*estya carpeta es para importar los stylos globales del a pagina marghin top etc*/


export default createGlobalStyle`

    * {                                       /*estos estylos seran aplicados a toda la app*/
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
    }
`;