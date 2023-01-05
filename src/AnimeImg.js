import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AnimeImg = () => {

    const [image, setimage] = useState()
    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://any-anime.p.rapidapi.com/anime/img',
            headers: {
                'X-RapidAPI-Key': '42e986ba60mshcae413d73488585p11b7b3jsn4e6b3b887343',
                'X-RapidAPI-Host': 'any-anime.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setimage(response.data.split(`"`)[1]);
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])


    return (
        <div className='h-100'>
            <img className='image' src={image} alt="" />
        </div>
    )
}

export default AnimeImg