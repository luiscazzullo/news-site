import React, { useState } from 'react';
import styles from './Form.module.css';
//Custom Hooks
import useSelect from '../../hooks/useSelect';
const Form = ({ setCategory }) => {
    const options = [
        {value: "general", label: "General"},
        {value: "business", label: "Negocios"},
        {value: "entertainment", label: "Entretenimiento"},
        {value: "health", label: "Salud"},
        {value: "science", label: "Ciencia"},
        {value: "sports", label: "Deportes"},
        {value: "technology", label: "Tecnología"}
    ]
    const [categories, SelectNews] = useSelect('general', options);
    const searchNews = ev => {
        ev.preventDefault();
        setCategory(categories)
    }
    return ( 
        <div className={`${styles.search} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={searchNews}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
                    <SelectNews />
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Form;