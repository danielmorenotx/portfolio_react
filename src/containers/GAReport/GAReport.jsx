import Slider from "react-slick";
import "./GAReport.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GAReport = () => {
    
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      };

    return (
        <main>
            <section className="reports-section">
                <h2>Weekly Reports</h2>
                <div className="report-container">
                    <div className="feedback-card">
                        <h3>Week 1</h3>
                        <p><span>Topic:</span> Dev setup, git & HTML</p>
                        <p><span>Feedback:</span> Asks questions and adds to questions/discussions in voice & text chat. Friendly attitude while doing so. Consistent with homework thus far.</p>
                    </div>
                    <div className="feedback-card">
                        <h3>Week 2</h3>
                        <p><span>Topic:</span> JS (Looping, Arrays & Functions)</p>
                        <p><span>Feedback:</span> Up to date on deliverables and excellent work on them. Full attendance, mostly consistent with exit tickets. Consistently communicating in chat.</p>
                    </div>
                    <div className="feedback-card">
                        <h3>Week 3</h3>
                        <p><span>Topic:</span> JS (Dom, Event Listeners, API calls, Fetching APIs)</p>
                        <p><span>Feedback:</span> Up to date on deliverables. Based on labs and questions, student is progressing very well.</p>
                    </div>
                    <div className="feedback-card">
                        <h3>Week 4</h3>
                        <p><span>Topic:</span> Unit Project Week</p>
                        <p><span>Feedback:</span> Great project. Definitely an "I prefer backend to frontend" attitude limiting styling efforts, but improving JS execution and experimentation. Capable of self-sufficient success or seeking help elsewhere. Trying new things outside of scope (ex: timeout).</p>
                    </div>
                    <div className="feedback-card">
                        <h3>Week 5</h3>
                        <p><span>Topic:</span> Intro to Java</p>
                        <p><span>Feedback:</span> Largely quiet, but competent. Occasionally asks a clarifying question, mostly in Slack.</p>
                    </div>
                    <div className="feedback-card">
                        <h3>Week 6</h3>
                        <p><span>Topic:</span> Java Deep Dive</p>
                        <p><span>Feedback:</span> Homework is clean and well put-together. Project progress is already very high.</p>
                    </div>
                    <div className="feedback-card">                
                        <h3>Week 7</h3>
                        <p><span>Topic:</span> Unit Project Week</p>
                        <p><span>Feedback:</span> Daniel's project was excellent. Three points stand out: code comprehension, validation, and breaking things into sub-problems. He could clearly explain both his own code and what functions from outside packages could do, and spent the latter half of his project time working on creating a robust system for ensuring clean input to his system.</p>
                    </div>
                    <div className="feedback-card">                
                        <h3>Week 8</h3>
                        <p><span>Topic:</span> SQL</p>
                        <p><span>Feedback:</span> Seems to have the hang of SQL. Not enough variation in SQL code or personal interaction this week to make any observations.</p>
                    </div>
                    <div className="feedback-card">                
                        <h3>Week 9</h3>
                        <p><span>Topic:</span> Springboot</p>
                        <p><span>Feedback:</span> Still producing good and consistent code. Still reaches out if he encounters a problem, which is very infrequently.</p>
                    </div>
                    <div className="feedback-card">
                        <h3>Week 10</h3>
                        <p><span>Topic:</span> Springboot</p>
                        <p><span>Feedback:</span> n/a</p>
                    </div>
                    <div className="feedback-card">
                        <h3>Week 11</h3>
                        <p><span>Topic:</span> Springboot</p>
                        <p><span>Feedback:</span> Like many other students, this week was much more difficult for Daniel. He's been wanting the class recordings and been pleased to have more time to work on the assignments, which hasn't always been the case. His response to something being more difficult is to ask for resources, work hard on it, and produce good code at the end.</p>
                    </div>
                    <div className="feedback-card">
                        <h3>Week 12</h3>
                        <p><span>Topic:</span> Springboot Project Week</p>
                        <p><span>Feedback:</span> Has reached out for much more help with this project, both to instructors and to fellow students. His work with Kathy has paid off, as he has implemented one of the harder concepts into his codebase. Project is looking very good thus far.</p>
                    </div>
                    <div className="feedback-card">
                        <h3>Week 13</h3>
                        <p><span>Topic:</span> React</p>
                        <p><span>Feedback:</span> n/a</p>
                    </div>
                    <div className="feedback-card">
                        <h3>Week 14</h3>
                        <p><span>Topic:</span> React</p>
                        <p><span>Feedback:</span> Daniel's gotten more quiet as the course progressed, but always has asked questions if he had a blocker. He tackles assignments with a drive for efficiency, both in the code and the completion of the assignment. He's been a very good student for this instructional portion of the course and we've been happy to have him.</p>
                    </div>
                    <div className="feedback-card">
                        <h3>Week 15</h3>
                        <p><span>Topic:</span> React/Capstone</p>
                        <p><span>Feedback:</span> Learning a lot of concepts in executing on the project. Project is on track to be completed on time.</p>
                    </div>
                    <div className="feedback-card">
                        <h3>Week 16</h3>
                        <p><span>Topic:</span> Capstone</p>
                        <p><span>Feedback:</span> n/a</p>
                    </div>
                </div>
            </section>

            <section className="homework-section">
                <h2>Homework Assignments</h2>
                <div className="homework-container">
                    <Slider {...settings}>
                        <div className="homework-card">
                            <img src="./images/homework/tennis-haiku.png" alt="homework screenshot" className="homework-screenshot"/>
                        </div>
                        <div>
                            <img src="./images/homework/federer-trophies.png" alt="homework screenshot" className="homework-screenshot"/>
                        </div>
                        <div>
                            <img src="./images/homework/calculator-app.png" alt="homework screenshot" className="homework-screenshot"/>
                        </div>
                        <div>
                            <img src="./images/homework/api-generator.png" alt="homework screenshot" className="homework-screenshot"/>
                        </div>
                    </Slider>
                </div>
            </section>

            <section className="project-section">
                <h2>Projects</h2>
                <div className="project-container"></div>
            </section>
        </main>
    )
}

export default GAReport;