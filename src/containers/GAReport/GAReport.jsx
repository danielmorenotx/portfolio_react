import Slider from "react-slick";
import "./GAReport.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <span className="custom-arrow prev-arrow">&#9664;</span>
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <span className="custom-arrow next-arrow">&#9654;</span>
        </div>
    );
};

const GAReport = () => {

    const mainReportData = [
        {
          week: "Week 1",
          topic: "Dev setup, git & HTML",
          feedback: "Asks questions and adds to questions/discussions in voice & text chat. Friendly attitude while doing so. Consistent with homework thus far."
        },
        {
          week: "Week 2",
          topic: "JS (Looping, Arrays & Functions)",
          feedback: "Up to date on deliverables and excellent work on them. Full attendance, mostly consistent with exit tickets. Consistently communicating in chat."
        },
        {
          week: "Week 3",
          topic: "JS (Dom, Event Listeners, API calls, Fetching APIs)",
          feedback: "Up to date on deliverables. Based on labs and questions, student is progressing very well."
        },
        {
          week: "Week 4",
          topic: "Unit Project Week",
          feedback: "Great project. Definitely an \"I prefer backend to frontend\" attitude limiting styling efforts, but improving JS execution and experimentation. Capable of self-sufficient success or seeking help elsewhere. Trying new things outside of scope (ex: timeout)."
        },
        {
          week: "Week 5",
          topic: "Intro to Java",
          feedback: "Largely quiet, but competent. Occasionally asks a clarifying question, mostly in Slack."
        },
        {
          week: "Week 6",
          topic: "Java Deep Dive",
          feedback: "Homework is clean and well put-together. Project progress is already very high."
        },
        {
          week: "Week 7",
          topic: "Unit Project Week",
          feedback: "Daniel's project was excellent. Three points stand out: code comprehension, validation, and breaking things into sub-problems. He could clearly explain both his own code and what functions from outside packages could do, and spent the latter half of his project time working on creating a robust system for ensuring clean input to his system."
        },
        {
          week: "Week 8",
          topic: "SQL",
          feedback: "Seems to have the hang of SQL. Not enough variation in SQL code or personal interaction this week to make any observations."
        },
        {
          week: "Week 9",
          topic: "Springboot",
          feedback: "Still producing good and consistent code. Still reaches out if he encounters a problem, which is very infrequently."
        },
        {
          week: "Week 10",
          topic: "Springboot",
          feedback: "n/a"
        },
        {
          week: "Week 11",
          topic: "Springboot",
          feedback: "Like many other students, this week was much more difficult for Daniel. He's been wanting the class recordings and been pleased to have more time to work on the assignments, which hasn't always been the case. His response to something being more difficult is to ask for resources, work hard on it, and produce good code at the end."
        },
        {
          week: "Week 12",
          topic: "Springboot Project Week",
          feedback: "Has reached out for much more help with this project, both to instructors and to fellow students. His work with Kathy has paid off, as he has implemented one of the harder concepts into his codebase. Project is looking very good thus far."
        },
        {
          week: "Week 13",
          topic: "React",
          feedback: "n/a"
        },
        {
          week: "Week 14",
          topic: "React",
          feedback: "Daniel's gotten more quiet as the course progressed, but always has asked questions if he had a blocker. He tackles assignments with a drive for efficiency, both in the code and the completion of the assignment. He's been a very good student for this instructional portion of the course and we've been happy to have him."
        },
        {
          week: "Week 15",
          topic: "React/Capstone",
          feedback: "Learning a lot of concepts in executing on the project. Project is on track to be completed on time."
        },
        {
          week: "Week 16",
          topic: "Capstone",
          feedback: "n/a"
        }
      ]
    
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
      };

    return (
        <main className="main-reports">
            <section>
                <h3>Professor: <a href="https://www.linkedin.com/in/bereketbeshane/" target="_blank">Bereket Beshane</a></h3>
                <h3>Teaching Assistant: <a href="https://www.linkedin.com/in/asha-mathis/" target="_blank">Asha Mathis</a></h3>
                <h3>Mentor: <a href="https://www.linkedin.com/in/glenwinters/" target="_blank">Glen Winters</a></h3>
            </section>

            <section className="reports-section">
                <h2>Weekly Reports</h2>
                <div className="report-container">
                {
                    mainReportData.map((week, index) => {
                        return (
                            <div className="feedback-card" key={index}>
                                <h3>{week.week}</h3>
                                <p><span>Topic:</span> {week.topic}</p>
                                <p><span>Feedback:</span> {week.feedback}</p>
                            </div>
                        )
                    })
                }
                </div>
            </section>

            <section className="homework-section">
                <h2>Homework Assignments</h2>
                <div className="homework-container">
                    <Slider {...settings}>
                        <div className="homework-card">
                            <a href="/Projects/TennisHaiku/index.html" target="_blank"><img src="./images/homework/tennis-haiku.png" alt="Tennis Haiku Website" className="homework-screenshot"/></a>
                            <h3>Tennis Haiku Website</h3>
                            <p>Week 1</p>
                        </div>
                        <div className="homework-card">
                            <a href="/Projects/FedererTrophies/index.html" target="_blank"><img src="./images/homework/federer-trophies.png" alt="Federer Trophies" className="homework-screenshot" /></a>
                            <h3>Roger Federer Trophy Lifts Website</h3>
                            <p>Week 1</p>
                        </div>
                        <div className="homework-card">
                            <a href="/Projects/CalculatorApp/index.html" target="_blank"><img src="./images/homework/calculator-app.png" alt="Calculator App" className="homework-screenshot"/></a>
                            <h3>Calculator App</h3>
                            <p>Week 3</p>
                        </div>
                        <div className="homework-card">
                            <a href="/Projects/RandomAPIGenerator/index.html" target="_blank"><img src="./images/homework/api-generator.png" alt="API Generator" className="homework-screenshot"/></a>
                            <h3>API Jokes/Cats/Facts Generator</h3>
                        </div>
                        <div className="homework-card">
                            <a href="/Projects/FoodBlog/home/index.html" target="_blank"><img src="./images/homework/food-blog.png" alt="Food Blog" className="homework-screenshot" /></a>
                            <h3>Food Blog</h3>
                        </div>
                    </Slider>
                </div>
            </section>

            <section className="project-section">
                <h2>Projects</h2>
                <Slider {...settings} className="projects-slider">
                    <div className="project-card">
                        <a href="/Projects/FoodBlog/home/index.html" target="_blank">
                            <img src="./images/projects/food-blog.jpg" alt="Food Blog" className="homework-screenshot" />
                        </a>
                        <div className="project-info">
                            <h3>Inclusive Food Blog</h3>
                            <p><span>Description: </span>A blog that allows for posting blogs, commenting blogs, and provides a daily recipe through an API.</p>
                            <p><span>Score: </span></p>
                            <p><span>Feedback:</span> "Great project. Definitely an ""I prefer backend to frontend"" attitude limiting styling efforts, but improving JS execution and experimentation. Capable of self-sufficient success or seeking help elsewhere. Trying new things outside of scope (ex: timeout)."</p>
                        </div>
                    </div>

                    <div className="project-card">
                        <a href="https://github.com/danielmorenotx/food_blog_backend" target="_blank">
                            <img src="./images/projects/springboot-blog.jpg" alt="" className="homework-screenshot"/>
                        </a>
                        <div className="project-info">
                            <h3>Springboot Blog Project</h3>
                            <p><span>Description: </span>The backend of the previous project. This writes data and stores it in the database.</p>
                            <p><span>Score: </span></p>
                            <p><span>Feedback: </span></p>
                        </div>
                    </div>

                    <div className="project-card">
                        <a href="https://github.com/danielmorenotx/dictionary_application" target="_blank">
                            <img src="./images/projects/dictionary.jpg" alt="" className="homework-screenshot"/>
                        </a>
                        <div className="project-info">
                            <h3>Dictionary App</h3>
                            <p><span>Description: </span>An app that runs in the console to which you can add words and definitions and search by different critera.</p>
                            <p><span>Feedback: </span>Impressive work!!!!</p>
                        </div>
                    </div>

                    <div className="project-card">
                        <a href="https://github.com/danielmorenotx/League_Manager_Coop_Project" target="_blank">
                            <img src="./images/projects/league-manager.jpg" alt="" className="homework-screenshot"/>
                        </a>
                        <div className="project-info">
                            <h3>Cooperative League Manager</h3>
                            <p><span>Description: </span>A cooporative project that was used to practice pushing and pulling to GitHub</p>
                            <p><span>Feedback: </span>In general, looks great! The code is well written and logical. Two small things to improve on are package organization and coordinating on a shared coding style for consistency between files (optionals vs exceptions for error handling, for example).</p>
                        </div>
                    </div>

                    
                </Slider>
            </section>

            <section className="capstone-section">
                <h2>Capston Project</h2>
                <div className="capstone-card">
                    <a href="https://github.com/danielmorenotx/open_court_app">
                        <img src="./images/projects/tennis.jpg" alt="" className="homework-screenshot"/>
                    </a>
                    <div className="capstone-info">
                        <p><span>Description: </span>An app that allows people to sign up as tennis players or tennis coaches and connect with each other for lessons.</p>
                        <p><span>Score: </span>97/100</p>
                        <p><span>Feedback: </span>Daniel’s project is a great demonstration of practical and thoughtful design, showcasing a highly useful and user-friendly application. The mobile-first design is impressive, ensuring optimal usability across devices. The attention to detail is evident in features like the excellent navbar dropdown animation/transition and the effective use of local storage. The filtering functionality is particularly well-executed, enhancing user experience significantly. I was impressed by the logic where coaches do not appear in search results if they sign up as coaches, which shows a deep understanding of user roles and application flow. The delete user feature is another highlight, implemented with precision. It’s clear that Daniel thoroughly thought through the business processes, resulting in a well-rounded and polished project. His hands-on approach to learning is commendable; he consistently showed a strong drive to explore the course content in depth. Daniel’s ability to quickly grasp new concepts and apply them effectively in his projects made it seem like he had prior coding experience. This capstone project is superb, and I have no doubt he would be a valuable asset to any team needing a full-stack engineer. Next step is focus more time on data structures and algorithms next (start from basic to advanced). A+ project!	</p>
                    </div>
                </div>
            </section>

            <section className="mentor-section">
                <h2>Mentor Report</h2>
                <p>Scoring Key: "How confident do you feel about your apprentice's learning journey?</p>
                <ul>
                    <li>1 - Concerned (my apprentice does not seem confident in their skills and ability and it is impacting their performance)</li>
                    <li>2 - Monitoring (my apprentice seems to be struggling with the material)</li>
                    <li>3 - On track (my apprentice seems to be on track with where I expect them to be at this stage)</li>
                    <li>4 - Confident (my apprentice is performing well)</li>
                    <li>5 - Strong (my apprentice is performing strongly and asks thought-provoking or forward-thinking line of questioning)</li>
                </ul>

                <table>
                    <thead>
                        <tr>
                            <th>Week</th>
                            <th>Score</th>
                            <th>Feedback/Observations</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <td>Week of 2/26</td>
                            <td>4</td>
                            <td>Daniel is performing well from what I can tell. He's personable and prepared for our mentor meetings. He asks specific questions rather than just asking for help, and he engages with my answers and suggestions.</td>
                        </tr>
                        <tr>
                            <td>Week of 3/4</td>
                            <td>5</td>
                            <td>Daniel did a great job putting together the big website project, which is a significant effort at this point in the bootcamp. I was impressed how he solved most problems independently and then only needed a nudge on a few issues to finish out the project. When building the project, he wasn't just looking to get it done. He thought about how users would want to use it, how it "should" work, and what he thought might be interesting. It's good to see his passion and excitement come out.</td>
                        </tr>
                        <tr>
                            <td>Week of 3/11</td>
                            <td>5</td>
                            <td>Daniel's staying on track and learning quickly. We're working well together in our mentorship meetings, and they seem to be productive for him.</td>
                        </tr>
                        <tr>
                            <td>Week of 3/18</td>
                            <td>5</td>
                            <td>Daniel's doing great. He's highly engaged in his work and our mentorship calls. He's asking great questions and learning quickly.</td>
                        </tr>
                        <tr>
                            <td>Week of 3/25</td>
                            <td>5</td>
                            <td>Daniel continues to do great. He's getting really far on his projects without significant help. He asks good questions, and he's engaged with my help.</td>
                        </tr>
                        <tr>
                            <td>Week of 4/1</td>
                            <td>5</td>
                            <td>Daniel continues to excel. I was impressed with how well he ramped up on his Java project.</td>
                        </tr>
                        <tr>
                            <td>Week of 4/8</td>
                            <td>5</td>
                            <td>Daniel continues to excel. He's picking up the new material quickly and asked very good, specific questions in our mentor meeting. I'm also excited that he's thinking about practical software project ideas outside of the bootcamp.</td>
                        </tr>
                        <tr>
                            <td>Week of 4/22</td>
                            <td>5</td>
                            <td>Daniel continues to do well. Nothing in particular to note this week.</td>
                        </tr>
                        <tr>
                            <td>Week of 4/29</td>
                            <td>5</td>
                            <td>Daniel continues to have a good handle on the material, and he's making good progress working independently despite there being a lot of new concepts to learn. He reached out to me a few times to get unblocked on specific issues, and he did a good job of explaining the problem and working through the solution. Daniel also was a great participant in last week's 2:2 exercise, paying close attention in the session, asking good questions and helping fix a bug in the testing code.</td>
                        </tr>
                        <tr>
                            <td>Week of 5/6</td>
                            <td>5</td>
                            <td>Daniel was highly engaged and effective in our second 2:2 session. He worked well with the other apprentice and mentor. He continues to do well with the homework and projects.</td>
                        </tr>
                        <tr>
                            <td>Week of 5/13</td>
                            <td>5</td>
                            <td>Daniel continues to engage deeply in projects, and he's starting to think about opportunities for the capstone project.</td>
                        </tr>
                    </tbody>
                </table>

                <p><strong>Average Score:</strong> 4.92</p>
            </section>
        </main>
    )
}

export default GAReport;