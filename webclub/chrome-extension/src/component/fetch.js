import React, {Component} from "react";
import "./style.css"
class Fetch extends Component {
    constructor(props) {
        super(props);
        this.getdata = this.getdata.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.showPosition = this.showPosition.bind(this);
        this.state = {
            latitude: "",
            longitude: "",
            place:"",
            country: "",
            list:[],
            reducedlist:[],
            error: 0,
        }
    }

    getdata = async (e) => {

        e.preventDefault();
        try {
            const proxy = "https://cors-anywhere.herokuapp.com/";
            //const url = https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22        b6907d289e10d714a6e88b30761fae22
            // const url_for_dark = https://api.darksky.net/forecast/ee6cbe51c943278b929a1d32e0fd186c/${this.state.latitude},${this.state.longitude}`)
            const data =
                await fetch(
                    `${proxy}https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=c2e34513f6a4cbf1c73b1ee896843aef`);

            const data_json = await data.json();
            console.log(data_json);
            this.setState({
                place: data_json.city.name,
                country: data_json.city.country,
                list: data_json.list,
                error: 1,
            })
        } catch (e) {
            this.setState({
                error: this.state.error,

            });
        }
        console.log(this.state.list[2]);
        for(var i = 1; i<=this.state.list.length-1; i++){
                if(i%4 === 0){
                    this.setState((prevState) => ({
                        reducedlist: prevState.reducedlist.concat(this.state.list[i])
                    }))
                }
        }
        console.log("reduced list",this.state.reducedlist);

    };

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            this.setState({error: 'location not found'})
        }
    };

    showPosition = (position) => {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
        console.log(this.state.latitude,this.state.longitude);
    };
// c2e34513f6a4cbf1c73b1ee896843aef


    render() {
        if(this.state.reducedlist.length>0){
            return(
                <div>
                    <div className="info">
                    <h2>city: {this.state.place}</h2>
                    <h2> country: {this.state.country}</h2>
                    </div>
                <div className="layout">
                <div className="information">
                {this.state.reducedlist.map((e) => {
                    return(
                        <div key={e.dt} className="data">
                            <p>date & time {e.dt_txt}</p>
                            <p>temperature: {Math.floor(e.main.temp-273)}</p>
                            {e.weather.map((e) => {
                                return(
                                    <div key={e.id}>
                                        <p>weather: {e.main}</p>
                                    </div>
                                )
                            })}
                        </div>
                    );
                })}
            </div>
                </div>
                </div>
            )
        }
        return (
            <div className="city_id">
                <button className="button1" onClick={this.getLocation}>get-Location</button>
                <button className="button2" onClick={this.getdata}>get-Weather</button>
            </div>
        )
    }
}

export default Fetch;
