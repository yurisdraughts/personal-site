import * as React from "react";
import emailjs from "@emailjs/browser";
import { TbMail, TbBrandTelegram, TbBrandGmail } from "react-icons/tb";
import { Fieldset, Input, Label, Legend, Textarea } from "@headlessui/react";
import Container from "../Container";
import FormField from "./FormField";
import ExternalLink from "../../links/ExternalLink";
import Gradient from "../../text/Gradient";
import EmailModal from "./EmailModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isEmailSent, setIsEmailSent] = React.useState(false);

  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.GATSBY_SERVICE_ID,
        process.env.GATSBY_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.GATSBY_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          setIsEmailSent(true);
          setIsModalOpen(true);
        },
        (error) => {
          setIsEmailSent(false);
          setIsModalOpen(true);
          console.error("Письмо не было отправлено:", error.text);
        },
      );
  };

  const scrollIntoView = () => {
    window.scroll({ top: document.body.clientHeight });
  };

  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 z-0 h-footer overflow-y-scroll
        bg-[--bg-accent] pb-sm pt-[calc(theme(spacing.lg)+theme(spacing.sm))]
        text-[--text-primary] supports-[scrollbar-width]:[scrollbar-width:none]
        supports-[selector(::-webkit-scrollbar)]:[&::-webkit-scrollbar]:hidden`}
    >
      <EmailModal
        onClose={() => {
          setIsModalOpen(false);
        }}
        isOpen={isModalOpen}
        isSent={isEmailSent}
      />
      <div role="presentation" onFocus={scrollIntoView}>
        <Container
          className="max-w-xl rounded-4xl bg-[--bg-primary] p-sm"
          id="contacts"
        >
          <h2 className="h2">
            <Gradient>Контакты</Gradient>
          </h2>
          <p className="p">
            <ExternalLink href="https://t.me/yumatv93" icon={TbBrandTelegram}>
              Telegram
            </ExternalLink>{" "}
            <span className="text-sm">
              (<span className="select-all">@yumatv93</span>)
            </span>
            ,{" "}
            <ExternalLink href="mailto:yumatv93@gmail.com" icon={TbBrandGmail}>
              Email
            </ExternalLink>{" "}
            <span className="text-sm">
              (<span className="select-all">yumatv93@gmail.com</span>)
            </span>
            .
          </p>
          <form className="p grid gap-4" ref={form} onSubmit={sendEmail}>
            <Fieldset className="grid gap-2">
              <Legend>
                Вы также можете отправить мне сообщение через форму ниже:
              </Legend>
              <FormField>
                <Label
                  className="after:ml-0.5 after:text-red after:content-['*']"
                >
                  Ваше имя
                </Label>
                <Input type="text" name="name" required />
              </FormField>
              <FormField>
                <Label
                  className="after:ml-0.5 after:text-red after:content-['*']"
                >
                  E-mail
                </Label>
                <Input type="email" name="email" required />
              </FormField>
              <FormField>
                <Label>Тема сообщения</Label>
                <Input type="text" name="subject" />
              </FormField>
              <FormField>
                <Label
                  className="after:ml-0.5 after:text-red after:content-['*']"
                >
                  Сообщение
                </Label>
                <Textarea
                  name="message"
                  cols={30}
                  rows={5}
                  required
                  className="resize-none"
                />
              </FormField>
            </Fieldset>
            <button
              type="submit"
              className="h-10 w-fit cursor-pointer justify-self-end rounded-md
                bg-[--bg-accent] px-3 text-[--text-primary] transition
                duration-200 hover:text-[--text-accent] hover:-translate-y-px
                focus:text-[--text-accent] focus:-translate-y-px"
            >
              Отправить <TbMail className="inline-block" />
            </button>
          </form>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
