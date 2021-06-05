import { Form } from './styles';

export const ContactForm = () => {
  return (
    <Form action="https://formsubmit.co/luanpanno@gmail.com" method="POST">
      <div className="wrapper">
        <p>Fique à vontade para me mandar um email!</p>
        <div className="fields">
          <input type="text" name="name" placeholder="Insira seu nome" />
          <input type="text" name="email" placeholder="Insira seu e-mail" />
          <textarea name="message" placeholder="Insira sua mensagem" />
        </div>
      </div>
      <button type="submit">Enviar</button>
    </Form>
  );
};
