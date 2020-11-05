import React from 'react'
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weather: []
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
            let response = await fetch('api.openweathermap.org/data/2.5/weather?q=london&appid=7220e1f7475621ddbd9b30ca23f49feb')
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
                <h1>The weather of the city</h1>
                {this.state.weather.map((weather) => {
                    return (
                        <div>
                            {weather.temp}
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Home