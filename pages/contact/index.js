import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ContactPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">
        Welcome to our contact page. If you have any questions, feedback, or
        inquiries, please feel free to get in touch with us. We value your input
        and would love to hear from you.
      </p>
      <p className="text-lg mb-4">
        You can reach us via email, phone, or by filling out the contact form
        below. We will get back to you as soon as possible.
      </p>
      <h2 className="text-2xl font-bold mb-2">Contact Information:</h2>
      <ul className="list-disc ml-6">
        <li>Email: info@example.com</li>
        <li>Phone: +1 (123) 456-7890</li>
        <li>Address: 123 Main Street, City, Country</li>
      </ul>
      {/* You can add a contact form component here */}
    </div>
  );
};

export default ContactPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
