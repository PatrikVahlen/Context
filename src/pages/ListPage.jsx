import React, { useContext } from 'react'
import { NameContext } from '../App'
import { Link } from "react-router-dom"
import Card from '../components/Card'
import styled, { css } from "styled-components"


const Images = styled.img`
width: 90%;
border-radius: 10px;
`

export default function ListPage() {
    const { name, list } = useContext(NameContext)
    return (
        <div>
            <h2>List page</h2>
            <p>Welcome: {name}</p>
            {list && list.map((item, index) => {
                return (
                    <Card>
                        <div className="CARD">
                            <p>{item.title}</p>
                            <Images src={item.imageURL} alt={item.title} />
                            <p>ID: {item.id}</p>
                            <p><Link to={`/List/${index}`}>Link to details:</Link></p>
                        </div>
                    </Card>
                )
            }
            )}
        </div>
    )
}
