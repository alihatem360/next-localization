import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Navbar = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div>
      {" "}
      <div className="navBar">
        <div className="navBarLinks">
          <Link href="/"> {t("navbar.title1")} </Link>
          <Link href={`/about`}>{t("navbar.title2")}</Link>
          <Link href={`#`}>{t("navbar.title3")} </Link>
        </div>

        <select
          className="absolute top-0 right-0 z-10 w-24 h-10 p-2 m-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg cursor-pointer dark:bg-gray-100 dark:text-gray-900"
          onChange={(e) =>
            router.push(router.pathname, router.pathname, {
              locale: e.target.value,
            })
          }
          defaultValue={router.locale}
        >
          {router.locales.map((locale) => (
            <option key={locale} value={locale}>
              {locale}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Navbar;
