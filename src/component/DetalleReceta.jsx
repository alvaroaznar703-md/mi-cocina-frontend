
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import  styles from "./DetalleReceta.module.css";



export const DetalleReceta = () => {
    
    const { id } = useParams();


    const {data:receta, cargando, error} = useFetch (`http://localhost:3000/api/recetas/${id}`)

    

    if (cargando){
        return(
             <div>
        <h3>Cargando receta</h3>
        <p>Cargando...</p>
             </div>

        );
    }

    if (error){
        return(
             <div>
        <h3>Error al cargar la receta</h3>
        <p>No se pudo obtener la receta.</p>
        <Link to="/recetas">Volver a recetas</Link>
             </div>

        );
  
}
return(
 <div>
      <Link className={styles.link} to="/recetas"> ←Volver a recetas</Link>

       {receta && (
        <article className={styles.contenedor}>
        
          <img className={styles.imagenDetalle} src={receta.imagen} alt={receta.nombre} />
          <h2 className={styles.titulo}>{receta.nombre}</h2>
          <span className={styles.span}>ID: {receta.id}</span>
          <p className={styles.texto}>Receta: {receta.descripcion}</p>
          <p className={styles.parrafo}>
            Tiempo de preparación: {receta.tiempo_minutos} minutos
          </p>
        </article>
      )}
    </div>
  );
};
      
      
      

