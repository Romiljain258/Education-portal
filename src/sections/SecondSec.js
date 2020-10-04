import React from 'react';
import Json from '../jsonData/data.json';

const SecondSec = () => {
    return (
        <div className="secondSec">
            <div class="card">
                <div class="card-body">
                    <div class="avtar">
                        <div class="Hello-josh">
                            <p class="card-title Hello-josh1">Hello josh!</p>
                            <p class="card-text Hello-josh2">It's good to see you again.</p>
                        </div>
                        <img class="img" src="https://www.flaticon.com/svg/static/icons/svg/145/145867.svg" alt="pic"></img>
                    </div>
                </div>
            </div>

            <div class="card list-of-card">
                <div class="avtar">
                    <img class="flag" src="https://cdn4.vectorstock.com/i/thumb-large/50/08/circular-world-flag-vector-18445008.jpg" alt="image" />
                    <div>
                        <h6 class="font1">Spanish B2</h6>
                        <h6 class="font2">by Alejandro valazquez</h6>
                    </div>
                    <div class="eighty">
                        <div class="fa fa-star-half-o"> 80%</div>
                    </div>
                    <div class="text-btn-p">
                        <button class="text-btn">Continue</button>
                    </div>
                    <div class="left-right">
                        <h6 class="fa fa-arrow-circle-o-left left-arrow"></h6>
                        <h6 class="fa fa-arrow-circle-o-right right-arrow"></h6>
                    </div>
                </div>
            </div>

            <h3 class="course-text">Courses</h3>

            {Json.map((val, i) => (
                <div key={i} class="card list-of-card">
                    <div class="avtar">
                        <img class="flag" src={val.image} alt="image" />
                        <div>
                            <h6 class="font1">{val.text1}</h6>
                            <h6 class="font2">{val.text2}</h6>
                        </div>
                        <div class="fa fa-clock-o"><span class="time">{val.time}</span></div>
                        <div class="fa fa-star-half-o"><span class="rating">{val.rating}</span></div>
                        <button onClick={() => { }} class="text-btn1"><a class="view-course" href={val.link} target="_blank">View Course</a></button>
                    </div>
                </div>
            ))}
        </div>)
}
export default SecondSec;