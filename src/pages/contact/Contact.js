import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "./contactSchema.yup";
import {
    MdOutlineHome,
    MdOutlineEmail,
    MdStayPrimaryPortrait,
    MdError,
} from "react-icons/md";
import { Spinner } from "flowbite-react";

export default function Contact() {
    const form = useRef();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(contactSchema),
    });

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const onSubmit = (e) => {
        document.getElementById("spinner").classList.remove("hidden");
        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(
                (result) => {
                    document.getElementById("spinner").classList.add("hidden");
                    document
                        .getElementById("message")
                        .classList.remove("hidden");
                },
                (error) => {
                    console.log(error.text);
                }
            );

        setTimeout(() => {
            document.getElementById("message").classList.add("hidden");
        }, 5000);
    };

    return (
        <section className=" py-20 lg:py-[120px] overflow-hidden relative z-10 w-10/12 md:w-11/12 mx-auto">
            <div className="container">
                <div className="flex flex-wrap lg:justify-between -mx-4">
                    <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
                        <div className="max-w-[570px] mb-12 lg:mb-0">
                            <span className="block mb-4 text-base text-white font-semibold">
                                Contact Us
                            </span>
                            <h2
                                className="
                          text-orange-300
                          mb-6
                          uppercase
                          font-bold
                          text-[26px]
                          sm:text-[40px]
                          lg:text-[36px]
                          xl:text-[40px]
                          "
                            >
                                GET IN TOUCH WITH US
                            </h2>
                            <p className="text-base text-slate-200 leading-relaxed mb-9">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eius tempor incididunt.
                            </p>
                            <div className="flex mb-8 max-w-[370px] w-full">
                                <div
                                    className="
                             max-w-[60px]
                             sm:max-w-[70px]
                             w-full
                             h-[60px]
                             sm:h-[70px]
                             flex
                             items-center
                             justify-center
                             mr-6
                             overflow-hidden
                             bg-orange-300 bg-opacity-5
                             text-orange-400
                             rounded
                             "
                                >
                                    <MdOutlineHome
                                        style={{ fontSize: "32px" }}
                                    />
                                </div>
                                <div className="w-full">
                                    <h4 className="font-bold text-slate-300 text-xl mb-1">
                                        Our Location
                                    </h4>
                                    <p className="text-base text-slate-500">
                                        99 S.t Jomblo Park Pekanbaru 28292.
                                        Indonesia
                                    </p>
                                </div>
                            </div>
                            <div className="flex mb-8 max-w-[370px] w-full">
                                <div
                                    className="
                             max-w-[60px]
                             sm:max-w-[70px]
                             w-full
                             h-[60px]
                             sm:h-[70px]
                             flex
                             items-center
                             justify-center
                             mr-6
                             overflow-hidden
                             bg-orange-300 bg-opacity-5
                             text-orange-400
                             rounded
                             "
                                >
                                    <MdStayPrimaryPortrait
                                        style={{ fontSize: "32px" }}
                                    />
                                </div>
                                <div className="w-full">
                                    <h4 className="font-bold text-slate-300 text-xl mb-1">
                                        Phone Number
                                    </h4>
                                    <p className="text-base text-slate-500">
                                        (+964) 000 000 0000
                                    </p>
                                </div>
                            </div>
                            <div className="flex mb-8 max-w-[370px] w-full">
                                <div
                                    className="
                             max-w-[60px]
                             sm:max-w-[70px]
                             w-full
                             h-[60px]
                             sm:h-[70px]
                             flex
                             items-center
                             justify-center
                             mr-6
                             overflow-hidden
                             bg-orange-300 bg-opacity-5
                             text-orange-400
                             rounded
                             "
                                >
                                    <MdOutlineEmail
                                        style={{ fontSize: "32px" }}
                                    />
                                </div>
                                <div className="w-full">
                                    <h4 className="font-bold text-slate-300 text-xl mb-1">
                                        Email Address
                                    </h4>
                                    <p className="text-base text-slate-500">
                                        customer@kitabstore.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-5/12 px-4 ">
                        <div className="bg-slate-800 relative rounded-lg p-8 sm:p-12 shadow-lg">
                            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-6 relative">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        {...register("name", {
                                            required: true,
                                        })}
                                        className="
                                w-full
                                rounded
                                py-3
                                px-[14px]
                                text-body-color text-slate-900
                                border border-[f0f0f0]
                                outline-none
                                focus-visible:shadow-none
                                focus:border-primary
                                "
                                    />
                                    <div className="absolute right-0 inset-y-0 flex items-center">
                                        <div className="h-7 w-7 mr-3 text-gray-400 p-1">
                                            {errors.name ? (
                                                <div
                                                    className="tooltip tooltip-left text-yellow-300"
                                                    data-tip={
                                                        errors.name?.message
                                                    }
                                                >
                                                    <MdError
                                                        fontSize={"22px"}
                                                    />
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6 relative">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        {...register("email", {
                                            required: true,
                                        })}
                                        className="
                                w-full
                                rounded
                                py-3
                                px-[14px]
                                text-body-color text-slate-900
                                border border-[f0f0f0]
                                outline-none
                                focus-visible:shadow-none
                                focus:border-primary
                                "
                                    />
                                    <div className="absolute right-0 inset-y-0 flex items-center">
                                        <div className="h-7 w-7 mr-3 text-gray-400 p-1">
                                            {errors.email ? (
                                                <div
                                                    className="tooltip tooltip-left text-yellow-300"
                                                    data-tip={
                                                        errors.email?.message
                                                    }
                                                >
                                                    <MdError
                                                        fontSize={"22px"}
                                                    />
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6 relative">
                                    <input
                                        name="phone"
                                        type="text"
                                        placeholder="Your Phone"
                                        {...register("phone", {
                                            required: true,
                                        })}
                                        className="
                                w-full
                                rounded
                                py-3
                                px-[14px]
                                text-body-color text-slate-900
                                border border-[f0f0f0]
                                outline-none
                                focus-visible:shadow-none
                                focus:border-primary
                                "
                                    />
                                    <div className="absolute right-0 inset-y-0 flex items-center">
                                        <div className="h-7 w-7 mr-3 text-gray-400 p-1">
                                            {errors.phone ? (
                                                <div
                                                    className="tooltip tooltip-left text-yellow-300"
                                                    data-tip={
                                                        errors.phone?.message
                                                    }
                                                >
                                                    <MdError
                                                        fontSize={"22px"}
                                                    />
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6 relative">
                                    <textarea
                                        rows="6"
                                        name="message"
                                        placeholder="Your Message"
                                        {...register("message", {
                                            required: true,
                                        })}
                                        className="
                                w-full
                                rounded
                                py-3
                                px-[14px]
                                text-body-color text-slate-900
                                border border-[f0f0f0]
                                resize-none
                                outline-none
                                focus-visible:shadow-none
                                focus:border-primary
                                "
                                    ></textarea>
                                    <div className="absolute right-0 inset-y-0 flex items-center">
                                        <div className="h-7 w-7 mr-3 text-gray-400 p-1">
                                            {errors.message ? (
                                                <div
                                                    className="tooltip tooltip-left text-yellow-300"
                                                    data-tip={
                                                        errors.message?.message
                                                    }
                                                >
                                                    <MdError
                                                        fontSize={"22px"}
                                                    />
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button
                                        className="
                                w-full
                                text-slate-100
                                bg-transparent
                                rounded
                                border border-orange-400
                                p-3
                                transition
                                hover:bg-orange-400
                                hover:text-slate-900
                                "
                                    >
                                        Send Message
                                    </button>
                                    <div className="hidden mt-4" id="spinner">
                                        <Spinner
                                            color="success"
                                            aria-label="message is on its way"
                                        />
                                    </div>
                                    <p
                                        className="mt-4 text-green-500 hidden"
                                        id="message"
                                    >
                                        Your Message has been sent
                                    </p>
                                </div>
                            </form>
                            <div>
                                <span className="absolute -right-10 top-[90px] z-[-1]">
                                    <svg
                                        width="34"
                                        height="134"
                                        viewBox="0 0 34 134"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="31.9993"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 1.66665)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 1.66665)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 1.66665)"
                                            fill="#13C296"
                                        />
                                    </svg>
                                </span>
                                <span className="absolute -left-7 -bottom-7 z-[-1]">
                                    <svg
                                        width="107"
                                        height="134"
                                        viewBox="0 0 107 134"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="104.999"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 104.999 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="104.999"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 104.999 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="104.999"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 104.999 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="104.999"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 104.999 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="104.999"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 104.999 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="104.999"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 104.999 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="104.999"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 104.999 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="104.999"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 104.999 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="104.999"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 104.999 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="104.999"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 104.999 1.66665)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="90.3333"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 90.3333 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="90.3333"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 90.3333 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="90.3333"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 90.3333 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="90.3333"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 90.3333 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="90.3333"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 90.3333 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="90.3333"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 90.3333 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="90.3333"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 90.3333 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="90.3333"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 90.3333 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="90.3333"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 90.3333 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="90.3333"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 90.3333 1.66665)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="75.6654"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 75.6654 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="75.6654"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 75.6654 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="75.6654"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 75.6654 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="75.6654"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 75.6654 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="75.6654"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 75.6654 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="75.6654"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 75.6654 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="75.6654"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 75.6654 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="75.6654"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 75.6654 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="75.6654"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 75.6654 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="75.6654"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 75.6654 1.66665)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 1.66665)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="60.9993"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 60.9993 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="60.9993"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 60.9993 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="60.9993"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 60.9993 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="60.9993"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 60.9993 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="60.9993"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 60.9993 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="60.9993"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 60.9993 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="60.9993"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 60.9993 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="60.9993"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 60.9993 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="60.9993"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 60.9993 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="60.9993"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 60.9993 1.66665)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 1.66665)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="46.3333"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 46.3333 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="46.3333"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 46.3333 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="46.3333"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 46.3333 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="46.3333"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 46.3333 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="46.3333"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 46.3333 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="46.3333"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 46.3333 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="46.3333"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 46.3333 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="46.3333"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 46.3333 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="46.3333"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 46.3333 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="46.3333"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 46.3333 1.66665)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 1.66665)"
                                            fill="#13C296"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
