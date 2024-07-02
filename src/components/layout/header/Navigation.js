import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import Container from "../Container";
import isBrowser from "../../../utils/isBrowser";

const Navigation = () => {
  const {
    site: {
      siteMetadata: { menuLinks },
    },
  } = useStaticQuery(graphql`
    query MenuLinksQuery {
      site {
        siteMetadata {
          menuLinks {
            link
            name
          }
        }
      }
    }
  `);

  const [isOpen, setIsOpen] = React.useState(false);

  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(true);
  };

  if (isBrowser) {
    window.matchMedia("(min-width: 768px)").onchange = (e) => {
      if (e.matches) {
        close();
      }
    };
  }

  return (
    <nav className="flex">
      <Dialog open={isOpen} onClose={close} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 w-screen backdrop-blur-md duration-75
            data-[closed]:opacity-0"
        />
        <DialogPanel
          transition
          className="fixed inset-x-0 top-0 border-b border-b-[--bg-primary]
            bg-[--bg-accent] duration-150 data-[closed]:opacity-0"
        >
          <Container className="pb-2.5">
            <div className="grid h-lg items-center">
              <button
                onClick={close}
                className="my-auto grid h-10 w-16 place-items-center rounded-md
                  bg-[--bg-primary] transition-colors hover:text-[--text-accent]
                  focus:text-[--text-accent]"
              >
                <FaXmark />
              </button>
            </div>
            <ul className="grid justify-start">
              {menuLinks.map((menuLink, i) => (
                <li key={i}>
                  <Link
                    to={`${menuLink.link}`}
                    className="grid h-lg justify-start rounded-sm px-1
                      font-semibold transition-colors hover:text-[--text-accent]
                      focus:text-[--text-accent]"
                    onClick={close}
                  >
                    <span className="place-self-center">{menuLink.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </DialogPanel>
      </Dialog>
      <button
        type="button"
        className="my-auto grid h-10 w-16 cursor-pointer place-items-center
          rounded-md bg-[--bg-primary] transition-colors
          hover:text-[--text-accent] focus:text-[--text-accent] md:hidden"
        onClick={open}
      >
        <FaBars />
      </button>
      <ul className="hidden items-center gap-4 md:flex">
        {menuLinks.map((menuLink, i) => (
          <li key={i}>
            <Link
              to={`${menuLink.link}`}
              className="grid h-lg place-items-center rounded-sm font-semibold
                transition-colors hover:text-[--text-accent]
                focus:text-[--text-accent]"
              onClick={close}
            >
              <span className="place-self-center">{menuLink.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
