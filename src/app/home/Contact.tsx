"use client";

// ui
import Button from "@/components/Button";
import Input from "@/components/Input";
import Picture from "@/components/Picture";
import SectionTitle from "@/components/SectionTitle";
import Textarea from "@/components/Textarea";

// hooks
import { useState } from "react";

const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: 'service_fq25tjo',
        template_id: 'template_rseuw4o',
        user_id: 'vjI7Jjs_Fpg9Zwc39',
        template_params: data
      }),
    })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

    form.reset();
    setSubmitted(true);
  }

  return (
    <section className="contact-one" id="contacto">
      <div
        className="contact-one__bg"
        style={{ backgroundImage: "url(/images/backgrounds/contact-bg-1.webp)" }}
      >
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 wow fadeInLeft animated" data-wow-delay="200ms">
            <div className="contact-one__left">
              <SectionTitle tagline="Contáctanos" title="" />
              <div className="contact-one__form-box">
                <form className="contact-one__form contact-form-validated" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <Input type="text" placeholder="Nombre" name="name" required />
                    </div>
                    <div className="col-md-6">
                      <Input type="text" placeholder="Cargo" name="job" required />
                    </div>
                    <div className="col-md-6">
                      <Input type="text" placeholder="Celular" name="phone" required />
                    </div>
                    <div className="col-md-6">
                      <Input type="email" placeholder="Email" name="email" required />
                    </div>
                    <div className="col-md-12">
                      <Input type="text" placeholder="Empresa" name="company" required />
                    </div>
                    <div className="col-md-12">
                      <Textarea name="message" placeholder="Mensaje" required />
                      <div className="contact-one__btn-box pt-1">
                        {!submitted && <Button type="submit">Enviar</Button>}
                      </div>
                    </div>
                  </div>
                </form>
                {
                  submitted &&
                  <div className="alert alert-warning mt-3" role="alert">
                    Fomrulario enviado correctamente.
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ogency-stretch-element-inside-column">
              <div className="ogency-stretch__image wow slideInRight animated" data-wow-delay="400ms">
                <Picture
                  src={"/images/resources/contact-1.webp?v=1"}
                  alt="contacto mpb marketing digital"
                  width={944}
                  height={672}
                />
                <div className="ogency-stretch__image__angle-top"></div>
                <div className="ogency-stretch__image__angle-middle"></div>
                <div className="ogency-stretch__image__angle-bottom"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;