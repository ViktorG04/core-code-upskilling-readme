import React, { useState } from "react";
import { Formik } from "formik";
import './form.css'
const FormSanta = () => {

    const [sendForm, setSendForm] = useState(false);
    return (
        <div className="container-form">
             <h1>WISH FORM!!</h1>
            <Formik
                initialValues={{
                    name: '',
                    wish: '',
                    priority: '1'
                }}

                validate={(values) => {

                    let errors = {}
                      
                    if(!values.name){
                        errors.name = 'Write your name';
                    }

                    if(!values.wish){
                        errors.wish = 'Write your wish';
                    }
                    return errors;
                }}

                onSubmit={(data, { resetForm }) => {
                    console.log(data);
                    setSendForm(true);
                    resetForm();
					setTimeout(() => setSendForm(false), 5000);

                }}
            >
                 
                {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                    <form className="form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="child Mike"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            {touched.name && errors.name && <div className="error">{errors.name}</div>}
                        </div>
                        <div>
                            <label htmlFor="wish">Wish</label>
                            <textarea
                                type="text"
                                id="wish"
                                name="wish"
                                placeholder="wish"
                                value={values.wish}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                            </textarea>
                            {touched.wish && errors.wish && <div className="error">{errors.wish}</div>}
                        </div>
                        <div>
                            <label htmlFor="priority">Priority:</label>
                                <select name="priority" id="priority" value={values.priority} onChange={handleChange}>
                                    <option value="1">1 - high</option>
                                    <option value="2">2 - serious</option>
                                    <option value="3">3 - moderate</option>
                                    <option value="4">4 - medium</option>
                                    <option value="5">5 - low</option>
                                </select>
                            
                        </div>

                        <button type="submit">Send</button>
                        {sendForm && <p className="good">successfully!</p>}
                    </form>
                )}
            </Formik>
        </div>
    )
};

export default FormSanta;
