import React from 'react'
import './middle.css';
import './middle_part2.css';
import './roof.css';
import './navbar.css';
import './media.css';


function Middle() {
    return (
        <div className='middle'>
            <div className='middle_part'>
                <div className='left_midlle'>
                    <h2>
                        <span id='home'> Home</span>
                        <span id='electric'>Electrification</span>
                    </h2>
                    <p className='head'>Eliminate in-home fossil fules, reduce your energy costs, and enjoy grid resilience</p>
                    <div className='search'>
                        <div className='search_main'>
                            <div className='search_left'>
                                <img id='gps' src='./icons/gps.svg' alt='gps'/>
                                <p>Enter Address</p>
                            </div>
                            <div className='search_right'>
                                <img id='icon_svg' src='/icons/home.svg' alt='home'/>
                                <p>Home</p>

                            </div>
                            <div className='search_end'>
                                <img id='down_arrow' src='/icons/downarrow.svg' alt='downarrow'/>
                                <img id='icon_buttom' src='/icons/buttom.svg' alt='bottom'/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='right_middle'>
                    <img className='computer' src='./images/image497.svg' alt='poter' />

                </div>
            </div>
            <h3 id='dowt_007'>Your  Electrification journey starts here.</h3>
            <div className='content'>

                <div className='content_1'>
                    <div>
                        <img src='./icons/Frame22.svg' alt='frame' />
                    </div>
                    <div >
                        <p className='id_16' >Less Time</p>
                        <p>Get multiple quotes all in one place, instead of negotiating with each installer.</p>

                    </div>

                </div>
                <div className='content_1'>
                    <div>
                        <img src='./icons/frame 2.svg' id='frame2' />
                    </div>
                    <div>
                        <p className='id_14'>More Savings</p>
                        <p >Our network of approved installers compete for your project, giving you the best price.</p>
                    </div>


                </div>
                <div className='content_1'>
                    <div>
                        <img src='./icons/frame3.svg' alt='icon3'/>
                    </div>
                    <div>
                        <p className='id_13'>100% Online & Free</p>
                        <p>Our online tools and expert advisors will help you compare and select the offer that best fits your needs, at no cost!</p>

                    </div>


                </div>

            </div>
            <h3 id='aval'>Available Offerings</h3>
            <div className='root'>
            <div className='roof'>
                <div className='roof_left'>
                    <img id='roof_1' src='./images/roof-panel 8.jpg' alt='roof' />
                </div>
                <div className='roof_right'>
                    <p>Rooftop <span className='text_color_1'>Solar</span></p>
                    <p id='next_left_title'>Harness the sun’s energy to reach your renewable energy goals</p>
                    <div className='valo'>
                    <img id='icon-4' src='./icons/frame4.svg' alt='frame 4'/>
                    <p id='next_left_2'>Incentives Available</p>

                    </div>
                   
                    <button>View Estimates</button>
                </div>
            </div>

            </div>
            <div className='root'>
            <div className='home'>
                <div className='roof_left'>
                    <img id='roof' src='./images/image 54.jpg' alt='image54' />
                </div>
                <div className='roof_right'>
                    <p>Home <span>Battery</span></p>
                    <p id='next_left_title'>Strengthen your grid resilience with distributed resources</p>
                    <div className='valo'>
                    <img id='icon-4' src='./icons/frame4.svg' alt='frame5'/>
                    <p id='next_left_2'>Incentives Available</p>

                    </div>
                   
                    <button>View Estimates</button>
                </div>
            </div>

            </div>
            <div className='root'>
            <div className='roof'>
                <div className='roof_left'>
                    <img id='roof_1' src='./images/PANEL.jpg' alt='panel' />
                </div>
                <div className='roof_right'>
                    <p>Water Heater</p>
                    <p id='next_left_title'>Harness the sun’s energy to reach your renewable energy goals</p>
                    <div className='valo'>
                    <img id='icon-4' src='./icons/frame4.svg' alt='frame4'/>
                    <p id='next_left_2'>Incentives Available</p>

                    </div>
                   
                    <button>View Estimates</button>
                </div>
            </div>

            </div>
            <div className='root'>
            <div className='home'>
                <div className='roof_left'>
                    <img id='roof' src='./images/roof_3.jpg' alt='root_3' />
                </div>
                <div className='roof_right'>
                    <p>EV Charger</p>
                    <p id='next_left_title'>Strengthen your grid resilience with distributed resources</p>
                    <div className='valo'>
                    <img id='icon-4' src='./icons/frame4.svg' alt='icon 4'/>
                    <p id='next_left_2'>Incentives Available</p>

                    </div>
                   
                    <button>View Estimates</button>
                </div>
            </div>

            </div>

        </div>
    )
}

export default Middle
