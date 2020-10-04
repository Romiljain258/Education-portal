import React from 'react';
import LineChart from '../chart/LineChart';

const ThirdSec = () => {
    return (
        <div className="thirdSec">
            <div class="input-p flex">
                <div class="input-Container">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input class="input" type="text" />
                </div>
                <i class="fa fa-bell-o" aria-hidden="true"></i>
                <i class="fa fa-user fa-user-margin" aria-hidden="true"></i>
            </div>
            <div class="flex">
                <div class="card flex-margin card-m">
                    <div class="flex">
                        <h2 class="course1">11</h2>
                        <h5 class="course2">Courses <div>Completed</div></h5>
                    </div>
                </div>
                <div class="card flex-margin">
                    <div class="flex">
                        <h2 class="course1">5</h2>
                        <h5 class="course2">Courses in<div>progress</div></h5>
                    </div>
                </div>
            </div>
            <LineChart />
            <div class="card card-book">
                <div class="card-book">
                    <div class="flex">
                        <div class="book-text">
                            <h4>Learn even more!</h4>
                            <p>Unlock premium feature
                             <div>only for $9.99 per month.</div>
                            </p>
                            <button class="text-btn">Go premium</button>
                        </div>
                        <img class="img-book" src="https://www.flaticon.com/svg/static/icons/svg/2490/2490419.svg" alt="book image" />
                    </div>
                </div>
            </div>
        </div>)
}
export default ThirdSec;