import { Form } from './styles';

export const ContactForm = () => {
  return (
    <Form>
      <div className="wrapper">
        <p>Fique à vontade para me mandar um email!</p>
        <div className="fields">
          <input type="text" placeholder="Insira seu nome" />
          <input type="text" placeholder="Insira seu e-mail" />
          <textarea placeholder="Insira sua mensagem" />
        </div>
      </div>
      <button type="submit">Enviar</button>
    </Form>
  );
};
