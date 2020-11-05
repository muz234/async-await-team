import React from 'react'
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }
    // fetchData(){
    //     fetch('http://dummy.restapiexample.com/api/v1/employees')
    //     .then(response => {
    //        // this will run after the promise resolves successfully
    //         return response.json();
    //     })
    //     .then(data => {
    //         /* process your data further */
    //         console.log(data)
    //     }) // the catch runs if promise fails or rejects
    //     .catch(error => console.error(error));
    // }
    async fetchData() {
        try {
            let response = await fetch('http://dummy.restapiexample.com/api/v1/employees')
            let data = await response.json()
            return data
        } catch (error) {
            console.error(error)
        }
    }
    render() {
        this.fetchData()
        return (
            <div>
                <h1>My Employees</h1>
                {this.state.employees.map((employee) => {
                    return (
                        <div>
                            {employee.employee_name}
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Home