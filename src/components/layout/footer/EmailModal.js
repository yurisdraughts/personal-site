import * as React from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import clsx from "clsx/lite";
import { TbBrandTelegram, TbBrandGmail, TbX } from "react-icons/tb";
import Container from "../Container";
import ExternalLink from "../../links/ExternalLink";
import Gradient from "../../text/Gradient";

const EmailModal = ({ isOpen, isSent, onClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className={clsx("relative z-20", !isOpen && "hidden")}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 w-screen backdrop-blur-md duration-75
          data-[closed]:opacity-0"
      />
      <Container className="fixed inset-0 grid max-w-xl place-content-center">
        <DialogPanel
          transition
          className="rounded-2xl border-[--bg-accent] bg-[--bg-primary] p-sm
            duration-150 data-[closed]:opacity-0"
        >
          <div className="flex justify-between gap-sm">
            {isSent ? (
              <DialogTitle as="h3" className="h3">
                <Gradient>Письмо успешно отправлено!</Gradient>
              </DialogTitle>
            ) : (
              <>
                <DialogTitle as="h3" className="h3">
                  Произошла ошибка!
                </DialogTitle>{" "}
              </>
            )}
            <button
              onClick={onClose}
              className="size-fit rounded bg-[--bg-accent] transition-transform
                duration-300 hover:-translate-y-px focus:-translate-y-px"
            >
              <TbX
                size="1.5rem"
                className="stroke-[text-secondary] hover:stroke-[--text-accent]
                  focus:stroke-[--text-accent]"
              />
            </button>
          </div>
          {!isSent && (
            <p className="p">
              Попробуйте отправить письмо ещё раз или связаться со мной с
              помощью{" "}
              <ExternalLink href="https://t.me/yumatv93" icon={TbBrandTelegram}>
                Telegram
              </ExternalLink>{" "}
              <span className="text-sm">
                (<span className="select-all">@yumatv93</span>)
              </span>{" "}
              или{" "}
              <ExternalLink
                href="mailto:yumatv93@gmail.com"
                icon={TbBrandGmail}
              >
                Email
              </ExternalLink>{" "}
              <span className="text-sm">
                (<span className="select-all">yumatv93@gmail.com</span>)
              </span>
            </p>
          )}
        </DialogPanel>
      </Container>
    </Dialog>
  );
};

export default EmailModal;
