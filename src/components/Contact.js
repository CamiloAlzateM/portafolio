import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <section className="contact adjust" id="contact">
                <div className="title">
                    <h2>let's Say hi</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere dolores laboriosam!
                        Iure hic aut accusantium quo incidunt iste,</p>
                </div>
                <div className="contactForm">
                    <div className="row">
                        <input type="text" name="" placeholder="First Name" />
                        <input type="text" name="" placeholder="Last Name" />
                    </div>
                    <div className="row">
                        <input type="text" name="" placeholder="Email Address" />
                        <input type="text" name="" placeholder="Mobile No." />
                    </div>
                    <div className="row2">
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <div className="row2">
                        <input type="submit" value="Send" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;