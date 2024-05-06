"use client";
import { contactsData } from "@/app/data/contactsData";
import { socialsData } from "@/app/data/socialsData";
import { themeData } from "@/app/data/themeData";
import { sendEmail } from "@/app/utils/sendEmail";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { validateEmail } from "../../../utils/validations";

export function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const { theme } = themeData;
  const isDataFormFilled = formData.name && formData.email && formData.message;

  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    setSuccess(false);
  };

  const handleContactForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isDataFormFilled) {
      if (validateEmail(formData.email)) {
        sendEmail(formData.name, formData.email, formData.message).then((response) => {
          if (response === "SUCCESS") setSuccess(true);
          else setSuccess(false);
        });
      } else {
        alert("Invalid email");
      }
    } else {
      alert("Enter all the fields");
    }
  };

  return (
    <div className="relative flex min-h-full items-start justify-start bg-secondary py-20" id="contacts">
      <div className="h-full w-full flex-col items-start justify-start px-4 py-8 md:px-24 xl:px-32">
        <h4 className="mb-10 w-fit text-3xl font-bold text-white md:text-6xl">Write to me</h4>
        <div className="flex w-full flex-col justify-stretch md:gap-32 lg:flex-row">
          <div className="flex w-full min-w-[350px]">
            <form onSubmit={handleContactForm} className="mt-5 w-full flex-col items-start justify-evenly">
              <div className="group w-full">
                <label
                  htmlFor="Name"
                  className="inline-flex translate-x-6 translate-y-1/2 transform bg-secondary px-2 text-sm font-semibold text-white group-focus:text-white"
                >
                  Name
                </label>
                <input
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  className={`mb-8 box-border  h-12 w-full resize-none rounded-3xl border-4 border-primary bg-secondary p-3
				   font-medium text-tertiary outline-none transition-all duration-200 ease-in-out group-focus:border-white`}
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="Email"
                  className="inline-flex translate-x-6 translate-y-1/2 transform bg-secondary px-2 text-sm font-semibold text-white"
                >
                  Email
                </label>
                <input
                  placeholder="John@doe.com"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  className={`mb-8 box-border  h-12 w-full resize-none rounded-3xl border-4 border-primary bg-secondary
				   p-3 font-medium text-tertiary outline-none transition-all duration-200 ease-in-out focus:border-white`}
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="Message"
                  className="inline-flex translate-x-6 translate-y-1/2 transform bg-secondary px-2 text-sm font-semibold text-white"
                >
                  Message
                </label>
                <textarea
                  placeholder="Type your message...."
                  value={formData.message}
                  onChange={handleChange}
                  name="message"
                  className={`mb-8 box-border h-40 w-full resize-none rounded-3xl border-4 border-primary bg-secondary p-3
				   font-medium text-tertiary outline-none transition-all duration-200 ease-in-out focus:border-white`}
                />
              </div>

              <div className="submit-btn">
                <button
                  type="submit"
                  className="flex h-12 w-32 items-center justify-evenly rounded-full border-none bg-primary font-medium text-white
				   outline-none transition-all duration-700 hover:scale-110 hover:bg-primary"
                >
                  <p className="text-base font-semibold">{!success ? "Send" : "Sent"}</p>
                  <div className="flex items-center justify-center overflow-hidden">
                    <Image
                      src="/svg/utilities/send.svg"
                      alt="Send email icon"
                      width={11}
                      height={11}
                      className={`h-6 w-6 transition-all duration-700 ${success && "-translate-y-9 translate-x-6"}`}
                      aria-labelledby="Send email"
                    />

                    <Image
                      src="/svg/utilities/sent.svg"
                      alt="Email sent icon"
                      width={11}
                      height={11}
                      className={`h-6 w-6 translate-y-9 transition-all duration-700 ${success && "-translate-x-6 -translate-y-0"}`}
                      aria-labelledby="Email sent"
                    />
                  </div>
                </button>
              </div>
            </form>
          </div>

          <div className="mt-10 box-border flex w-full flex-wrap items-start justify-start">
            <div className="flex w-fit flex-col gap-6">
              <Link
                href={`mailto:${contactsData.email}`}
                className="mb-10 flex w-fit items-center justify-start gap-5"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-2xl text-secondary transition-all hover:scale-110 hover:bg-tertiary hover:text-secondary">
                  <Image
                    src="/svg/contacts/at.svg"
                    alt="Email button icon"
                    aria-labelledby="Email"
                    width={11}
                    height={11}
                    className="h-7 w-7"
                  />
                </div>
                <p className="w-fit break-words text-lg font-medium text-tertiary">{contactsData.email}</p>
              </Link>
              <Link
                href={`tel:${contactsData.phone}`}
                className="mb-10 flex w-fit items-center justify-start gap-5"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-2xl text-secondary transition-all hover:scale-110 hover:bg-tertiary hover:text-secondary">
                  <Image
                    src="/svg/contacts/phone.svg"
                    alt="Call button icon"
                    aria-labelledby="Phone"
                    width={11}
                    height={11}
                    className="h-7 w-7"
                  />
                </div>
                <p className="w-fit break-words text-lg font-medium text-tertiary">{contactsData.phone}</p>
              </Link>
              <Link
                className="mb-10 flex w-fit items-center justify-start gap-5"
                href={contactsData.mapsLink}
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-2xl text-secondary transition-all hover:scale-110 hover:bg-tertiary hover:text-secondary">
                  <Image
                    src="/svg/contacts/location.svg"
                    alt="View location button icon"
                    aria-labelledby="Location"
                    width={11}
                    height={11}
                    className="h-7 w-7"
                  />
                </div>
                <p className="w-fit break-words text-lg font-medium text-tertiary">{contactsData.address}</p>
              </Link>

              <div className="flex w-11/12 flex-wrap items-center justify-between gap-10">
                {socialsData.github && (
                  <Link
                    href={socialsData.github.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-xl text-secondary transition-all duration-300 ease-in-out hover:scale-110 hover:bg-primary hover:text-secondary"
                  >
                    <Image
                      src="/svg/social/github.svg"
                      aria-label="Github"
                      alt="View Github button"
                      width={30}
                      height={30}
                    />
                  </Link>
                )}
                {socialsData.linkedIn && (
                  <Link
                    href={socialsData.linkedIn.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-xl text-secondary transition-all duration-300 ease-in-out hover:scale-110 hover:bg-primary hover:text-secondary"
                  >
                    <Image
                      src="/svg/social/linkedin.svg"
                      aria-label="LinkedIn"
                      alt="View Linkedin button"
                      width={30}
                      height={30}
                    />
                  </Link>
                )}
                {socialsData.medium && (
                  <Link
                    href={socialsData.medium.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-xl text-secondary transition-all duration-300 ease-in-out hover:scale-110 hover:bg-primary hover:text-secondary"
                  >
                    <Image
                      src="/svg/social/medium.svg"
                      aria-label="Medium"
                      alt="View Medium button"
                      width={30}
                      height={30}
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image src={theme.contactsimg} alt="contacts" className="mt-10 hidden xl:inline" />
    </div>
  );
}
