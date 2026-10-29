import { useFetch } from "../hooks/useFetch";
import { useRecetasStore } from "../store/recetaStore";
import {Link} from "react-router-dom";
import styles from "./ListadoRecetas.module.css";

export const ListadoRecetas = () => {
  const {
    data: recetas,
    cargando,
    error,
  } = useFetch ("http://localhost:3000/api/recetas");

  const favoritos = useRecetasStore(
    (state) => state.favoritos
  );

  const agregarRecetaFavorita = useRecetasStore(
    (state) => state.agregarRecetaFavorita
  );

  const eliminarRecetaFavorita = useRecetasStore(
    (state) => state.eliminarRecetaFavorita
  );

  if (cargando) {
    return (
      <p className={styles.parrafo}>
        Cargando recetas...
      </p>
    );
  }

  if (error) {
  console.error("Error al cargar las recetas:", error);

  return (
    <p className={styles.parrafo}>
      Error al cargar las recetas: {error.message}
    </p>
  );
}

  if (!recetas || recetas.length === 0) {
    return (
      <p className={styles.parrafo}>
        No hay recetas disponibles.
      </p>
    );
  }

  return (
  


    <div className={styles.contenedor}>
      <h3 className={styles.titulodos}>
        Recetas disponibles:
      </h3>


      {recetas.map((receta) => {
        const esFavorita = favoritos.some(
          (item) => item.id === receta.id
        );

        const manejarFavorito = () => {
          if (esFavorita) {
            eliminarRecetaFavorita(receta.id);
          } else {
            agregarRecetaFavorita(receta);
          }
        };

        return (
          <div className={styles.contenedor}>
          <article
            className={styles.cardReceta}
            key={receta.id}
          >
            <img
              className={styles.imagenReceta}
              src={receta.imagen}
              alt={receta.nombre}
            />

            <div className={styles.cardRecetaContenido}>
              <h2 className={styles.titulo}>
                {receta.nombre}
              </h2>

              <p className={styles.parrafo}>
                ⏱️ Tiempo: {receta.tiempo_minutos} minutos
              </p>
            </div>

            

            <button className={styles.boton}
              type="button"
              onClick={manejarFavorito}
            >
              {esFavorita
                ? "❤️  Favorita"
                : "🤍 Agregar a favoritas"}
            </button>

            <Link className={styles.link} to={`/recetas/${receta.id}`}>
                ver Detalle</Link>

            
          </article>
          </div>
        );
      })}
    </div>
  );
};
