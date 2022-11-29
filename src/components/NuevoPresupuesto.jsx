import React from 'react'

const NuevoPresupuesto = () => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario'>
            <div className='campo'>
                <label htmlFor="presupuesto">Definir Presupuesto</label>
                <input 
                    type="text" 
                    className='nuevo-presupuesto'
                    id='presupuesto'
                    placeholder='Añade tu Presupuesto'
                />
            </div>
            <input 
                type="submit" 
                value="Añadir"
            />
        </form>
    </div>
  )
}

export default NuevoPresupuesto