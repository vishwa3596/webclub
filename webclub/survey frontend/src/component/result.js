import React, {Component} from "react";
import axios from 'axios'
import {Link} from "react-router-dom";
import "./style.css"
import CanvasJSReact from "./canvasjs.react"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
/**
 * chart for the language field
 * chart for the framework field
 * chart for the ide field
 * chart for os field
 *
 *
 *
 * */

class Result extends Component {
    constructor(props){
        super(props);
        this.state = {
            /*************************************************/
            language_dataset:[],
            framework_dataset:[],
            ide_dataset:[],
            os_dataset:[],
            /*************************************************/
            LanguageData: {
                labels: ["javascript", "python", "ruby"],
                datasets: [
                    {
                        label: 'language',
                        data: [],
                        backgroundColor:[]
                    }
                ]
            },
            /**************************************************/
            FrameworkData: {
              labels:["angular", "react", "vue",
                     "jquery", "flask", "django",
                      "turbogear", "rails"],
              datasets:[
                  {
                      label:'framework',
                      data: this.framework_dataset,
                      backgroundColor:[]
                  }
              ]
            },
            /****************************************************/
            IdeData: {
                labels: ["atom", "vscode", "jetbrain", "sublime"],
                datasets: [
                    {
                        label:'ide',
                        data: this.ide_dataset,
                        backgroundColor:[]
                    }
                ]
            },
            /*****************************************************/
            OsData: {
                labels: ["linux", "windows", "mac"],
                datasets: [
                    {
                        label: 'os',
                        data: this.os_dataset,
                        backgroundColor:[]
                    }
                ]
            }
            /*****************************************************/
        };
    }
    componentDidMount() {

        const url = 'http://127.0.0.1:5000/result';
        axios.get(url)
            .then(res => {
                console.log("the result is ", res.data);
                console.log("accessing datasets ", this.state.LanguageData.datasets[0].data);
                this.setState({

                    language_dataset: res.data.language,
                    framework_dataset: res.data.framework,
                    ide_dataset: res.data.ide,
                    os_dataset: res.data.os,
                })
            })
            .catch(err => console.log("error in result is ", err))
    }

    render() {
        console.log("language_dataset ", this.state.language_dataset[0]);
        console.log("framework_dataset ", this.state.framework_dataset);
        console.log("ide_dataset ", this.state.ide_dataset);
        if(this.state.language_dataset.length > 0 && this.state.framework_dataset.length > 0 && this.state.ide_dataset.length > 0 && this.state.os_dataset.length > 0){
            console.log("entering the graph printing zone");
            const language = {
                animationEnabled: true,
                exportEnabled: true,
                theme: "light2", //"light1", "dark1", "dark2"
                title: {
                    text: "Language-used"
                },
                data: [{
                    type: "column",
                    indexLabelFontColor: "#5A5757",
                    indexLabelPlacement: "outside",
                    dataPoints: [
                        { label: "javascript",  y: this.state.language_dataset[0]  },
                        { label: "python", y: this.state.language_dataset[1]  },
                        { label: "ruby", y: this.state.language_dataset[2]  },
                    ]
                }]
            };
            const framework = {
                animationEnabled: true,
                exportEnabled: true,
                theme: "light2", //"light1", "dark1", "dark2"
                title: {
                    text: "Framework-used"
                },
                data: [{
                    type: "column",
                    indexLabelFontColor: "#5A5757",
                    indexLabelPlacement: "outside",
                    dataPoints: [
                        { label: "angular",  y: this.state.framework_dataset[0]  },
                        { label: "react", y: this.state.framework_dataset[1]  },
                        { label: "vuejs", y: this.state.framework_dataset[2]  },
                        { label: "jquery", y: this.state.framework_dataset[3]  },
                        { label: "Flask", y: this.state.framework_dataset[4]  },
                        { label: "django", y: this.state.framework_dataset[5]  },
                        { label: "turbogear", y: this.state.framework_dataset[6]  },
                        { label: "ruby", y: this.state.framework_dataset[7]  },
                    ]
                }]
            };
            const ide = {
                animationEnabled: true,
                exportEnabled: true,
                theme: "light2", //"light1", "dark1", "dark2"
                title: {
                    text: "Ide-used"
                },
                data: [{
                    type: "column",
                    indexLabelFontColor: "#5A5757",
                    indexLabelPlacement: "outside",
                    dataPoints: [
                        { label: "atom",  y: this.state.ide_dataset[0]  },
                        { label: "vscode", y: this.state.ide_dataset[1]  },
                        { label: "jetBrains", y: this.state.ide_dataset[2]  },
                        { label: "sublime", y: this.state.ide_dataset[3]  },
                    ]
                }]
            };
            const os = {
                animationEnabled: true,
                exportEnabled: true,
                theme: "light2", //"light1", "dark1", "dark2"
                title: {
                    text: "Os-used"
                },
                data: [{
                    type: "column",
                    indexLabelFontColor: "#5A5757",
                    indexLabelPlacement: "outside",
                    dataPoints: [
                        { label: "linux",  y: this.state.os_dataset[0] },
                        { label: "windows", y: this.state.os_dataset[1]  },
                        { label: "mac", y: this.state.os_dataset[2]  },
                    ]
                }]

            };
            console.log("comming out of the graph printing area");
            return(
                <div className="result">
                    <h2 className="result-heading">Survey Result</h2>
                    <br/>
                    <div className="language-result">
                    <CanvasJSChart options = {language}
                        /* onRef={ref => this.chart = ref} */
                    />
                    </div>
                    <br/>
                    <div className="framework-result">
                    <CanvasJSChart options = {framework}
                        /* onRef={ref => this.chart = ref} */
                    />
                    </div>
                    <br/>
                    <div className="ide-result">
                    <CanvasJSChart options = {ide}
                        /* onRef={ref => this.chart = ref} */
                    />
                    </div>
                    <br/>
                    <div className="os-result">
                    <CanvasJSChart options = {os}
                        /* onRef={ref => this.chart = ref} */
                    />
                    </div>
                    <br/>
                    <Link to="/">Home</Link>
                </div>
            )
        }
        return (
            <div>
                survey result
            </div>
        )

    }
}

export default Result;















