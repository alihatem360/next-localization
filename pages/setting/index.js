import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const SettingsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Settings</h1>
      <p className="text-lg mb-4">
        Welcome to the settings page. Here you can customize various options and
        preferences to tailor your experience with our application.
      </p>
      <h2 className="text-2xl font-bold mb-2">Appearance</h2>
      <p className="text-lg mb-4">
        Choose your preferred theme, font size, and other visual elements to
        make the app look just the way you want it.
      </p>
      <h2 className="text-2xl font-bold mb-2">Notifications</h2>
      <p className="text-lg mb-4">
        Manage how you receive notifications and alerts from our app. You can
        choose to enable or disable specific types of notifications.
      </p>
      <h2 className="text-2xl font-bold mb-2">Account</h2>
      <p className="text-lg mb-4">
        Update your account settings, such as your username, password, and email
        address.
      </p>
      <h2 className="text-2xl font-bold mb-2">Privacy</h2>
      <p className="text-lg mb-4">
        Review and adjust your privacy settings to control what information you
        share with others.
      </p>
    </div>
  );
};

export default SettingsPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
