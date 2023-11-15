import React from 'react'
import Axios from 'axios'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            user : []
        }
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder1224.typicode.com/users')
        .then((resp) =>{
            console.log(resp.data)
            this.setState({user : resp.data})
        })
        .catch()
    }
    render () {
        return <div>
            {
                this.state.user.length> 0 ? <>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <thead>
                        {
                            this.state.user.map((user) => {
                                return <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            })
                        }
                        
                    </thead>
                </table>
                </> : <h3> No Data Found</h3>
            }
        </div>
    }
}

export default User