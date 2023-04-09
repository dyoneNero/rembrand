import React from 'react';
import './contact-section.scss'
import ContactBlock from "./contactBlock/ContactBlock";
import LocationBlock from "./locationBlock/LocationBlock";

const ContactLocationSection = () => {
    return (
        <section id='contacts' className="contactLocationSection">
            <h1>Контакты</h1>
            <div className="contactLocationBlock">
                <LocationBlock/>
                <ContactBlock/>
            </div>
        </section>
    );
};

export default ContactLocationSection;