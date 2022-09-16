import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function contact() {
    return (
        <div>
            <Head>
                <title>My Resume Website</title>
            </Head>
            <main>
                <Navbar />
                <div
                    className="pt-5 d-flex-column"
                    style={{ padding: "0px 150px" }}
                >
                    <h1
                        style={{ fontSize: "50px", color: "#323643" }}
                        className="mb-5"
                    >
                        Contact Me
                    </h1>
                    <div
                        className="d-flex w-100 gap-5 shadow"
                        style={{ backgroundColor: "#f8f9f9" }}
                    >
                        <img
                            src="images/291147527_1110907709776435_7797141229845584968_n.jpg"
                            width="450"
                            height="450"
                            style={{ objectFit: "cover", width: "35%" }}
                        />
                        <div
                            style={{ width: "65%" }}
                            className="d-flex flex-column fs-3 py-4"
                        >
                            <div className="w-100 d-flex">
                                <div className="w-25 fw-semibold">
                                    <p>Name</p>
                                </div>
                                <div className="w-75">
                                    <p>Jedsadaporn Juntong</p>
                                </div>
                            </div>
                            <div className="w-100 d-flex">
                                <div className="w-25 fw-semibold">
                                    <p>Nickname</p>
                                </div>
                                <div className="w-75">
                                    <p>Boom</p>
                                </div>
                            </div>
                            <div className="w-100 d-flex">
                                <div className="w-25 fw-semibold">
                                    <p>Address</p>
                                </div>
                                <div className="w-75">
                                    <p>
                                        5317 Heather Glen Dr Garland, Texas,
                                        75043
                                    </p>
                                </div>
                            </div>
                            <div className="w-100 d-flex">
                                <div className="w-25 fw-semibold">
                                    <p>Facebook</p>
                                </div>
                                <div className="w-75">
                                    <a
                                        rel="noreferrer"
                                        href="https://www.facebook.com/jedsadaporn.juntong"
                                        target="_blank"
                                        className="ms-0"
                                    >
                                        Jedsadaporn Juntong
                                    </a>
                                </div>
                            </div>
                            <div className="w-100 d-flex">
                                <div className="w-25 fw-semibold">
                                    <p>Email</p>
                                </div>
                                <div className="w-75">
                                    <a
                                        href="mailto:jedsadaporn_juntong@cmu.ac.th"
                                        className="ms-0"
                                    >
                                        jedsadaporn_juntong@cmu.ac.th
                                    </a>
                                </div>
                            </div>
                            <div className="w-100 d-flex">
                                <div className="w-25 fw-semibold">
                                    <p>Phone</p>
                                </div>
                                <div className="w-75">
                                    <a href="tel:+66980744055" className="ms-0">
                                        098-1744055
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
