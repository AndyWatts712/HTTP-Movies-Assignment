import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function AddMovie(props) {
    const initialData = {
        movie: '',
        director: '',
        metascore: '',
        stars: []
    }
    const [form, setForm] = useState(initialData)
    const [stars, setStars] = useState([])
    const history = useHistory()

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleStarsChange = (e) => {

        setStars({
            ...stars,
            stars: e.target.value
        })
        
    }
    
    const handleAddMovie = (e) => {
        e.preventDefault()
        
        form.stars = stars.stars.split(",")
        console.log('STAR ARRAY', form.stars)

        setForm({
            name: form.title,
            director: form.director,
            metascore: form.metascore,
            stars: form.stars
        })
        console.log('Form', form)
        axios
            .post(`http://localhost:5000/api/movies/`, form)
            .then((res) => {
                console.log(res)
                setForm(res.data)
                history.push('/')
                props.getMovieList()

            })
            .catch((err) => console.log(err))


    }


    return (
        <div>
            <form onSubmit={handleAddMovie}>
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
                <div>
                    <input
                        type='text'
                        name='stars'
                        value={stars.stars}
                        onChange={handleStarsChange}
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
