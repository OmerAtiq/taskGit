import React from "react"
import "./style.css"
import Data from "./data"
export default class App extends React.Component {
    state={
        data:Data
    }

    

    render() {
        let data = this.state.data.map((ele) => {
            return (
                <div className="main">
                    <div className="container-fluid">
                        <nav class="navbar navbar-expand-lg  w-100 nav">
                            <a class="navbar-brand headi" href="#">{ele.nav.nav_logo}</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon ic">
                                    <i class="fas fa-bars"></i>
                                </span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav lis">
                                    <a class="nav-item nav-link active" href="#">{ele.nav_ul_li.li_1}<span class="sr-only">(current)</span></a>
                                    <a class="nav-item nav-link" href="#">{ele.nav_ul_li.li_2}</a>
                                    <a class="nav-item nav-link" href="#">{ele.nav_ul_li.li_3}</a>
                                    <a class="nav-item nav-link" href="#">{ele.nav_ul_li.li_4}</a>
                                    <a class="nav-item nav-link" href="#">{ele.nav_ul_li.li_5}</a>
                                    <a class="nav-item nav-link" href="#">{ele.nav_ul_li.li_6}</a>
                                </div>
                            </div>
                        </nav>

                    </div>
                    <div className="container-fluid head">
                        <div class="row  d-flex flex-column justify-content-between align-items-center ">
                            <h4 class="text-white head_heading  font-weight-bold text-center  ">{ele.head_heading.heading}
                            </h4>

                            <h1 class="text-white  head_para w-75 ">{ele.head_heading.heading_2}
                            </h1>

                            <a class="btn head_btn" href="#about">{ele.head_heading.head_btn}</a>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 head2_column1">
                                <h3>{ele.head2_heading.heading}</h3>
                                <h4>{ele.head2_heading.heading_2}</h4>
                                <p>{ele.head2_heading.para}</p>
                                <a class="btn head_btn" href="#about">{ele.head2_heading.head_btn}</a>
                                <a class="btn head_btn head_btn2" href="#about">{ele.head2_heading.head_btn2}</a>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                                <img src={ele.head2_heading.img_one} className = "head2_img" alt="" />
                            </div>

                        </div>
                    </div>
                  
                </div>
            )
        })
        return (
            <div>{data}</div>
        )
    }

}