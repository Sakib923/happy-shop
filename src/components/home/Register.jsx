import React from 'react';
const subTitle = "Save The Day";
const title = (
    <h2 className="title"> Joid on Day Long Free Workshop for <b> Advance</b> <span>Mastering</span> on Sales</h2>
    );

    const desc = "Limited Time Offer! Hurry Up";

function Register() {
  return (
    <section className="register-section padding-tb pd-0">
        <div className="container">
            <div className="row g-4 row-cols-lg-2 row-cols-1 align-item-center">
                <div className="col">
                    <div className="section-header">
                        <span className="subtitle">{subTitle}</span>
                        {title}
                        <p>{desc}</p>
                    </div>
                </div>

                <div className="col">
                    <div className="section-wrapper">
                        <h4>Register Now</h4>
                        <form  className="register-form">
                            <input type="text" name="name" placeholder="User Name" className="reg-input" />
                            <input type="text" name="email" placeholder="E-mail" className="reg-input" />
                            <input type="text" name="number" placeholder="Phone Number" className="reg-input" />
                            <button type="submit" className="lab-btn">
                                Register Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register