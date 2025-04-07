"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import SectionTitle from "@/components/SectionTitle";
import Textarea from "@/components/Textarea";

const ContactSection: React.FC = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a una API
    console.log(data);

    // Resetear el formulario después de enviar
    form.reset();
  }

  return (
    <section className="contact-one" id="contacto">
      <div
        className="contact-one__bg"
        style={{ backgroundImage: "url(/images/backgrounds/contact-bg-1.png)" }}
      >
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 wow fadeInLeft animated" data-wow-delay="200ms">
            <div className="contact-one__left">
              <SectionTitle tagline="Conéctate con nosotros" title="Hablemos de tu próximo proyecto" />
              <div className="contact-one__form-box">
                <form className="contact-one__form contact-form-validated" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <Input type="text" placeholder="Nombre" name="name" required />
                    </div>
                    <div className="col-md-6">
                      <Input type="email" placeholder="Email" name="email" required />
                    </div>
                    <div className="col-md-6">
                      <Input type="text" placeholder="Celular" name="phone" required />
                    </div>
                    <div className="col-md-6">
                      <Input type="text" placeholder="Asunto" name="subject" required />
                    </div>
                    <div className="col-md-12">
                      <Textarea name="message" placeholder="Mensaje" required />
                      <div className="contact-one__btn-box pt-1">
                        <Button type="submit">Enviar</Button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="result"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ogency-stretch-element-inside-column">
              <div className="ogency-stretch__image wow slideInRight animated" data-wow-delay="400ms">
                <picture>
                  <source srcSet="/images/resources/contact-1.jpg" />
                  <img src="/images/resources/contact-1.jpg" alt="ogency" width={500} height={500} />
                </picture>
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