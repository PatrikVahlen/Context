import React, { useContext } from 'react'
import { useParams } from "react-router-dom"
import { NameContext } from "../App"

export default function DetailPage() {

    const params = useParams()
    const id = params.id
    const { list, name } = useContext(NameContext)

    return (
        <div>
            <h2>Detailpage with id: {id}</h2>
            <p>Welcome {name} to our detailed view</p>
            {list && (
                <>
                    <p> Title: {list[id].title}</p>
                    <img src={list[id].imageURL} alt={list[0].title} />
                    <p>{list[id].description}</p>
                    <p>Likes: {list[id].likes}</p>
                </>
            )}
        </div>
    )
}
