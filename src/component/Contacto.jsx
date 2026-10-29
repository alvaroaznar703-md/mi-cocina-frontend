import {useForm } from "react-hook-form";
import styles from "./Contacto.module.css";

export const Contacto = () => {

  const { register, handleSubmit, formState:{errors} }= useForm()

  const onSubmit=(data)=>{
    console.log(data);
    window.location.reload();

  };

  return(
    <div className={styles.contenedor}>
        <form className={styles.formulario} onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre: </label>
            <input className={styles.input}{...register("nombre", {required:"El nombre es obligatorio"})} placeholder="Ingresa tu nombre" type="text"/>
            {errors.nombre && <p style={{ color: "red" }}>{errors.nombre.message}</p>}

            <div className={styles.campo}>

                <label>Apellido:</label>
                <input className={styles.input} {...register("apellido",{required:"El apellido es obligatorio"} )} placeholder="Ingresa tu apellido" type="text"/>
                {errors.apellido && <p style={{ color: "red" }}>{errors.apellido.message}</p>}

            </div>
            

            <div  className={styles.campo}>
                <label>Email: </label>
                <input className={styles.input} {...register("email",{required:"El email es obligatorio", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "El formato del email no es valido",},})} placeholder="Ingresa tu email" type="email"/>

                {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

            </div>


             <div  className={styles.campo}>
          <label>Comenta: </label>
          <textarea className={styles.input}
              placeholder="Deja un Mensaje"
            {...register("message", { required:"Este campo es obligatorio" })}
          />
          {errors.message && <p style={{color: "red"}}>{errors.message.message}</p>}
        </div>
        <button className={styles.button} type="submit">
          Enviar mensaje
        </button>

        </form>

    </div>
  );

};



