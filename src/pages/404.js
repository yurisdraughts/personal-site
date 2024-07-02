import * as React from "react";
import { navigate } from "gatsby";
import { TbArrowBack, TbError404 } from "react-icons/tb";
import Layout from "../components/layout/Layout";
import Seo from "../components/Seo";
import Container from "../components/layout/Container";
import Gradient from "../components/text/Gradient";

const NotFoundPage = () => {
  return (
    <Layout>
      <Container className="pt-sm">
        <h1 className="h1">
          <Gradient>Ошибка 404</Gradient>
        </h1>
        <p className="p">Страница, которую вы запрашиваете, не существует.</p>
        <p className="p">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="grid h-10 w-fit cursor-pointer place-items-center
              rounded-md bg-[--bg-accent] px-3 text-[--text-primary]
              transition-colors transition-transform duration-200
              hover:text-[--text-accent] hover:-translate-y-px
              focus:text-[--text-accent] focus:-translate-y-px"
          >
            <span className="font-medium">
              Вернуться <TbArrowBack className="inline-block" />
              <TbError404 className="inline-block" />
            </span>
          </button>
        </p>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <Seo title="Страница не найдена 🥺" />;
