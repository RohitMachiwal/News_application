import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class
    extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                    <div className="container-fluid">
                        <Link className="navbar-brand"to="/">NewsWorld</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page"to="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <link className="nav-link"to="/">About</link>
                                </li>
                                <li className="nav-item">
                                    <link className="nav-link"to="/business>">Business</link>
                                </li>
                                <li className="nav-item">
                                    <link className="nav-link"to="/entertainment">Entertainment</link>
                                </li>
                                <li className="nav-item">
                                    <link className="nav-link"to="/general">General</link>
                                </li>
                                <li className="nav-item">
                                    <link className="nav-link"to="/health">Health</link>
                                </li>
                                <li className="nav-item">
                                    <link className="nav-link"to="/sports">Sports</link>
                                </li>
                                <li className="nav-item">
                                    <link className="nav-link"to="/technology">Technology</link>
                                </li>


                            </ul>

                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
