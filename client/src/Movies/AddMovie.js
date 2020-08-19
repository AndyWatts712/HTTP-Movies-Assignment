import React, { useState } from 'react'

function AddMovie() {

    const [form, setForm] = useState([])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        // axios
        //     .put(`http://localhost:5000/api/movies/${params.id}`, form)
        //     .then((res) => {
        //         setForm(res.data)
        //         history.push('/')
        //     })
        //     .catch((err) => console.log(err))

            
    }


    return(
        <div>
            <form>
                <div>
                    <input
                        type='text'
                        name='title'
                        value=''
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <input
                        type='text'
                        name='director'
                        value=''
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <input
                        type='text'
                        name='metascore'
                        value=''
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default AddMovie
