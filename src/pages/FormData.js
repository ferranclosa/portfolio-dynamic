import React from 'react'
import { Formik, Field, Form, useFormik } from 'formik';

const FormData = (props) => {

    const { language } = props

    const formik = useFormik({
        initialValues: {
            language: '', 
            title: '',
            firstWord: '',
            spannedWord: '',
            lastWord: '', 
            intro: '',
            subtitle: '',
            description: '',
            cardTitle:'', 
            cardSubTitle:'', 
            url:'', 
            objectives:''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (


        <div >
            <h1>Capture data and Save</h1>

            <form className='form-container' onSubmit={formik.handleSubmit}>
            <label htmlFor="language">Language</label>
                <select
                    
                    id="language"
                    name="language"
                    
                    onChange={formik.handleChange}
                    value={formik.values.language} >
                    <option value="" label="Select a language" />
                    <option value="en" label="English" />
                    <option value="sp" label="Spanish" />
                    <option value="ca" label="Catalan" />
                    <option value="fr" label="French" />
                    
                    </select>

                <label htmlFor="title">Title</label>
                <input 
                    type={'text'}
                    id="title"
                    name="title"
                    placeholder="Enter a title"
                    onChange={formik.handleChange}
                    value={formik.values.title} />
  

                <label htmlFor="firstWord">First Word</label>
                <input type='text'
                    id="firstWord"
                    name="firstWord"
                    placeholder="Enter the first Word"
                    onChange={formik.handleChange}
                    value={formik.valuesfirstWord} />
                
                <label htmlFor="spannedWord">Important Word</label>
                <input type='text' className='basic-form-item' id="spannedWord" name="spannedWord" placeholder="Enter the word you want highlighted" />
                <label htmlFor="subtitle">Subtitle</label>
                <input type='text' id="subtitle" name="subtitle" placeholder="Enter a subtitle" />
              
                <label htmlFor="description">Description</label>
                <textarea id="description"
                    name="description"
                    placeholder="Enter a description"
                    cols={50} rows={10}
                    onChange={formik.handleChange}
                    value={formik.description}
                ></textarea>
                <button type="submit">Save</button>
            </form>






        </div>
    )
}

export default FormData