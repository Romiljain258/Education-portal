import React, { useState } from 'react';

const FirstSec = () => {
    let [toggle, setToggle] = useState(0);
    let [toggleLarge, setToggleLarge] = useState(true);

    const activeToggle = () => {
        setToggle(toggle + 1);
        setToggleLarge(false);
    }

    let style1 = {}
    if (toggle % 2 == 0) {
        style1.display = "block";
        style1.height = "90%";
    }
    if (toggle % 2 != 0) {
        style1.width = 90;
    }
    return (
        <div>

            <div class="sidebar" style={style1}>
                <ul>
                    <li>
                        <a href="#">
                            <span class="icon"><i class="fa fa-book"></i></span>
                            <span class="title">Courses</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icon"><i class="fa fa-home"></i></span>
                            <span class="title">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icon"><i class="fa fa-graduation-cap"></i></span>
                            <span class="title">Qualification</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icon"><i class="fa fa-user"></i></span>
                            <span class="title">User</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icon"><i class="fa fa-envelope-o"></i></span>
                            <span class="title">Message</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icon"><i class="fa fa-cogs"></i></span>
                            <span class="title">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icon"><i class="fa fa-sign-out"></i></span>
                            <span class="title">Log Out</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div onClick={() => { activeToggle() }} class="toggle">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
        </div>)
}
export default FirstSec;