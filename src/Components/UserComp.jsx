import React from 'react'
import { useFetch } from '../Hooks/useFetch'

export function UserComp() {

    const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users')


    return (
        <>
            <h1>User List</h1>
            {isLoading ? <h4>Now Loading ...</h4>
                : errors ? <p>Ocurrio un error {errors}</p>
                    : <table className="table table-dark" >
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">name</th>
                                <th scope="col">email</th>
                                <th scope="col">website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map (user => {
                            return (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                            </tr>)
                            })}
                        </tbody>
                    </table>
            }
        </>
    )
}

