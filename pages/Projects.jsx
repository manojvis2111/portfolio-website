import styles from "../styles/projects.module.css";

const Projects = () =>{
    return <div className={styles.projects} id="About">
        <h1>Projects</h1>
        <div>
            <h2>Steam Marketplace</h2>
            <p>
                I along with three other members developed the back end of a digital distribution system for 
                video games that is very similar to Valve Corporations Steam, using Java. Here, users are allowed to 
                buy or sell access to games.
                <br /><br />
                We developed this project over the course of one month using the Scrum Agile Development 
                Methodology during which we had two sprints.
            </p>
            <img src="/java.png" width={90} height={90} /> 

            
        </div>
        <br />
        <hr />
        <br />
        <div>
            <h2>Virtual Paint</h2>
            <p>
                As mentioned earlier, one of the fields in computer science that I found interesting 
                is Computer Vision. My interest in this field led me to learning fundamental concepts like 
                object detection, colour detection, using the cv2 module in python. Putting all of them together
                I was able to create a program that detects coloured pens/marker which can then be used to 
                paint a blank window with the detected colours.It was definitely one of the projects I had the most fun making.
            </p>
            <img src="/python.jfif" width={90} height={90} /> 
        </div>
        <br />
        <hr />
        <br />
        <div>
            <h2>Number Plate Detection</h2>
            <p>
                Another cool project that I made using the cv2 module in python. This program detects 
                number plates from a webcam. As an added feature, if the user wishes to do so 
                they can even save an image of the number plate in a directory named after the date where the 
                image name is the time at wich the plate was detected.
            </p>
            <img src="/python.jfif" width={90} height={90} /> 
        </div>
        <br />
        <hr />
        <br />
        <div>
            <h2>Personal Website</h2>
            <p>
                It didnt take long for me to realise that a personal website is what makes people stand out more. All my 
                friends and upper years recommended to create one. After spending a lot of time learning about
                 web developement I finally made my own.
                <br /><br />
                Using React.js I was able to make this website by combining individual components and reusing 
                some of them.It made making this website as fun as making complex stuff with legos which I really enoy.
                I also used Next.js to provide better performance. 
                <br /><br />
                

            </p>
            <img src="/react.png" width={90} height={90} /> 
            <img src="/next2.png" width={90} height={90} /> 


        </div>
    </div>;
};

export default Projects;