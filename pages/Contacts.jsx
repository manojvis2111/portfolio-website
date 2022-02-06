import styles from "../styles/contact.module.css";

const Contact = () => {
    return( <div className={styles.contact} id = "contacts">
        <h1>Contacts</h1>
        <p>
            <h2>Feel free to contact me through any of the following platforms </h2><br />
            <a href="https://www.linkedin.com/in/vishnumanoj211101/">
                <img src="/linkedin.png" alt="" width={100} height={100}/> 
            </a>     

            <a href="mailto:vishnu.manoj@mail.utoronto.ca">
                <img src="/outlook5.png" alt="" width={100} height={100}/> 
            </a>
            

        </p>


    </div>);
}

export default Contact;