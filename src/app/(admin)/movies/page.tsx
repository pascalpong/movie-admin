"use client"

import SortingTable from "@/components/SortingTable";
import { useGetMoviesQuery } from "@/store/moviesApi";
import { MovieType } from "@/types/movie.t";
import { useEffect, useState } from "react";

const Movies = () => {
    const [movies, setMovies] = useState<MovieType[]>([])
    const getMovies = useGetMoviesQuery({page:1});
    const headCell = ['id', 'title', 'intro', 'doc1', 'img', 'views', 'sub_title', 'add_time', '']

    useEffect(() => {
        if(getMovies.status === "fulfilled") {
            console.log(getMovies.data.data.data)
            setMovies(getMovies.data.data.data)
        }
    },[getMovies])
    
    return(
        <div>
            <SortingTable HeadCell={headCell} data={movies}/>
        </div>
    )
}

export default Movies;