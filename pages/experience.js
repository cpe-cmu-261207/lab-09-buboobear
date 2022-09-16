import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function experience() {
    return (
        <div>
            <Head>
                <title>My Resume Website</title>
            </Head>
            <main>
                <Navbar />
                <div
                    className="pt-5 d-flex-col"
                    style={{ padding: "0px 150px" }}
                >
                    <h1
                        style={{ fontSize: "50px", color: "#323643" }}
                        className="mb-5"
                    >
                        Project Experience
                    </h1>
                    <div
                        className="card mb-4 shadow"
                        style={{ maxWidth: "100%" }}
                    >
                        <div className="row g-0 d-flex g-4">
                            <div className="col-md-4 w-25">
                                <img
                                    src="images/scratchdl.jpg"
                                    style={{ objectFit: "cover" }}
                                    className="img-fluid rounded-start"
                                />
                            </div>
                            <div className="col-md-8 w-75 pt-2">
                                <div className="card-body">
                                    <p className="card-title fs-4 fw-semibold">
                                        Scrath Project
                                        <a
                                            href="https://scratch.mit.edu/projects/563374374"
                                            target="_blank"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-link-45deg"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                            </svg>
                                        </a>
                                    </p>
                                    <p className="card-text fs-5 fw-light">
                                        It's a game called Catto eat&seek. It's
                                        about playing in order to pass the next
                                        level. This project, I'm a tester in my
                                        team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="card mb-4 shadow"
                        style={{ maxWidth: "100%" }}
                    >
                        <div className="row g-0 d-flex g-4">
                            <div
                                className="col-md-8 w-75 pt-2"
                                style={{ paddingLeft: "2.5rem" }}
                            >
                                <div className="card-body">
                                    <p className="card-title fs-4 fw-semibold">
                                        Scrath Project With Teachable Machine
                                        <a
                                            href="https://teachablemachine.withgoogle.com/models/NJSPjNvE-/"
                                            target="_blank"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-link-45deg"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                            </svg>
                                        </a>
                                    </p>
                                    <p className="card-text fs-5 fw-light">
                                        It's an extension of the scrath project
                                        by using machine learning to help.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 w-25">
                                <img
                                    src="images/289484139_422107356500434_3771237503645572334_n.jpg"
                                    style={{ objectFit: "contain" }}
                                    className="img-fluid rounded-end h-100"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="card mb-4 shadow"
                        style={{ maxWidth: "100%" }}
                    >
                        <div className="row g-0 d-flex g-4">
                            <div className="col-md-4 w-25">
                                <img
                                    src="images/290612499_519574599967480_4618310650251424449_n.jpg"
                                    style={{ objectFit: "cover" }}
                                    className="img-fluid rounded-start"
                                />
                            </div>
                            <div className="col-md-8 w-75 pt-2">
                                <div className="card-body">
                                    <h3 className="card-title fs-4 fw-semibold">
                                        C++ Project
                                        <a
                                            href="https://github.com/JMjirapat/SCT-calculator"
                                            target="_blank"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-link-45deg"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                            </svg>
                                        </a>
                                    </h3>
                                    <p className="card-text fs-5 fw-light">
                                        A calculator created by the
                                        collaboration of team member.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
