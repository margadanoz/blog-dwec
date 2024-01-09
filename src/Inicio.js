// import Navbar from "./Navbar";
// Se puede meter el menú donde se quiera por ejemplo 
import { useState } from "react";

const Inicio = () => {

   
    // UseState puede aceptar arrays de objetos:
    const [blogs, setBlogs] = useState([
        {titulo: 'Mi nueva web', body: 'texto para mostrar...',
        autor: 'Joan', id: 1},
        {titulo: 'Fiesta de Blas', body: 'mucho mas texto...',
        autor: 'Pedro', id: 2},
        {titulo: 'Merienda', body: 'mas comida...',
        autor: 'Marta', id: 3}
    ])

    return ( 
        <div className="home">
            {/* Recorremos  nuestro array de objetos*/}
            { blogs.map((blog)=>{
                // Lo que retornará:
                return(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.titulo}</h2>
                    <p>Escrito por { blog.autor}</p>

                </div>)
            }) }
        </div>
        
     );
}
 
export default Inicio;