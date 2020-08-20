import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
const initialData = [{
    title: '',
    director: '',
    metascore: '',
}]


export function UpdateMovie() {

    const [form, setForm] = useState(initialData)
    const params = useParams()
    const history = useHistory()

    useEffect(() => {
        console.log(params)
        axios
            .get(`http://localhost:5000/api/movies/${params.id}`)
            .then((res) => {
                setForm(res.data)
                // setForm({
                //         ...form,
                //         stars: res.data.stars.toString()
                //     })
                console.log('FORM', form)
            })
                .catch((err) => console.log(err))
                
        
    }, [])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        // let starsArr = form.stars.split(',')
        // setForm({
        //     ...form,
        //     stars: starsArr
        // })
        console.log('NEW FORM', form)
        axios
            .put(`http://localhost:5000/api/movies/${params.id}`, form)
            .then((res) => {
                setForm(res.data)
                history.push('/')
            })
            .catch((err) => console.log(err))

            
    }

    return (
        <div>
            <form onSubmit={handleUpdate}>
                <div>
                    <input
                        type='text'
                        name='title'
                        value={form.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                     <input
                    type='text'
                    name='director'
                    value={form.director}
                    onChange={handleChange}
                />
                </div>
                <div>
                    <input
                        type='text'
                        name='metascore'
                        value={form.metascore}
                        onChange={handleChange}
                    />
                </div>
                {/* <div>
                    <input
                        type='text'
                        name='stars'
                        value={form.stars}
                        onChange={handleChange}
                    />
                </div> */}
                <div>
                    <button>Update</button>
                </div>
            </form>
        </div>
    )
}
export default UpdateMovie