import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
const Index = () => {
  const router = useRouter();
  const { t } = useTranslation();
  console.log(router.locale);

  return (
    <div className=" min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4"> {t("about.title")} </h1>
      <p className="text-lg mb-4">{t("about.content.header")}</p>
      <p className="text-lg mb-4">{t("about.content.body")}</p>
      <p className="text-lg mb-4">شكرًا لزيارتكم!</p>
    </div>
  );
};

export default Index;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
