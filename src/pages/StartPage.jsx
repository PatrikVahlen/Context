import React, { useContext } from 'react'
import { NameContext } from '../App'

export default function StartPage() {

    const { name, setName } = useContext(NameContext)

    return (
        <div>
            <h1>Start Page</h1>
            <p>Welcome: {name}</p>
            <form action="">
                <input
                    placeholder="Enter your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </form>
        </div>
    )
}
