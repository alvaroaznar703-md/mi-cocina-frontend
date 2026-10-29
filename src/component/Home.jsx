import React from 'react'
import styles from "./Home.module.css"

export const Home = () => {
  return (
    <div className={styles.div}>
        <h2 className={styles.titulo}>🍳 ¡Bienvenido a El hogar de tu cocina!</h2>
        <h3 className={styles.titulo}>¿No sabés qué cocinar hoy? ¡Tenemos ideas para vos! 👨‍🍳✨</h3>
        <p className={styles.texto}>Descubrí un mundo de sabores y convertí cada comida en una experiencia especial. En El hogar de tu cocina vas a encontrar recetas deliciosas para todos los gustos y ocasiones, desde platos rápidos para el día a día hasta preparaciones ideales para sorprender a tu familia y amigos.</p>
        <p className={styles.texto}>🍕 Explorá nuevas recetas: encontrá inspiración para tus próximas comidas.</p>
        <p className={styles.texto}>🥗 Conocé los ingredientes: descubrí qué necesitás para preparar cada plato.</p>
        <p className={styles.texto}>⏱️ Organizá tu tiempo: consultá cuánto tarda cada receta y elegí la que mejor se adapte a tu día.</p>
        <p className={styles.texo}>📸 Inspirate con cada plato: mirá las imágenes y animate a probar algo nuevo.</p>
        <p className={styles.texto}>No importa si recién empezás a cocinar o si ya sos un experto: siempre hay algo nuevo para descubrir.</p>
        <p className={styles.texto}>¡Buscá tu próxima receta, ponete el delantal y dejá que la magia suceda en tu cocina! ❤️</p>

        </div>
  )
}


