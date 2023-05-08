import React, { useState } from "react";
import ButtonPrimary from "./ButtonPrimary";

const MailchimpForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace the form action URL with your Mailchimp form action URL
    const url =
      "https://njit.us21.list-manage.com/subscribe/post?u=9f2e584cd8b43f146ec5d201a&amp;id=e7e91ec837&amp;f_id=009eb5e1f0";

    // Prepare the Mailchimp form data
    const data = new FormData();
    data.append("EMAIL", email);

    // Submit the Mailchimp form
    fetch(url, {
      method: "POST",
      body: data,
      mode: "no-cors",
    })
      .then(() => {
        // Handle Mailchimp form submission success
        console.log("Mailchimp form submission success!");
      })
      .catch((error) => {
        // Handle Mailchimp form submission error
        console.error("Mailchimp form submission error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row items-center w-full sm:w-5/12 lg:w-6/12">
      <input
        type="email"
        placeholder="Enter your email"
        className="border-2 border-black-600 py-2 px-4 rounded-md mr-4 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <ButtonPrimary type="submit">Subscribe</ButtonPrimary>
    </form>
  );
};

export default MailchimpForm;
