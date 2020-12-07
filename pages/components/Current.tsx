import React from 'react'

const Current = (props) => {
    return (
        <div className="card shadow-lg mb-5 bg-white rounded">
            <div className="card-body">
            <h6 className="font-weight-bold mb-4">Current weather</h6>
                <div className="row">
                    <div className="col">
                        <h5 className="font-weight-bold"> {props.City} </h5>
                        <div className="row">
                            <div className="col">
                                <img src={props.Icon} className="img-fluid" alt="" />
                            </div>
                            <div className="col">
                                <h2 className="display-5"> {props.Temperature} ° </h2>
                            </div>
                        </div>
                    <h4> {props.Text} </h4>
                    </div>
                    <div className="col">
                        <h5> Feels like {props.FeelLike} ° </h5>
                        <h6> Humidity: <span className="text-muted">{props.Humidity} % </span> </h6>
                        <h6> Wind: <span className="text-muted">{props.Wind} kph </span> </h6>
                        <h6> Pressure: <span className="text-muted">{props.Pressure} in </span> </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Current
