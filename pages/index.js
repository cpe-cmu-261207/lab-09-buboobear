import Head from "next/head";
import Navbar from "../components/Navbar";
export default function Home() {
    return (
        <div>
            <Head>
                <title>My Resume Website</title>
            </Head>
            <main>
                <Navbar />
                <div
                    className="py-4 d-flex flex-column text-center"
                    style={{ backgroundColor: "#e8f9fd" }}
                >
                    <h1 style={{ fontSize: "55px", color: "#323643" }}>
                        Jedsadaporn Juntong
                    </h1>
                    <div>
                        <img
                            src="images/291358627_318696670354939_2600600634630854327_n.jpg"
                            width="400"
                            height="400"
                            style={{ objectFit: "cover" }}
                            className="mt-3 mb-4"
                        />
                    </div>
                    <div style={{ padding: "0px 300px", color: "#323643" }}>
                        <p className="fs-1 lh-sm mb-0">Are you ready to</p>
                        <p className="fs-1 lh-sm">get to know me?</p>
                    </div>
                </div>
                <div
                    className="d-flex"
                    style={{ padding: "0px 150px", marginTop: "50px" }}
                >
                    <div style={{ width: "50%" }}>
                        <h4 style={{ color: "gray" }}>― ABOUT</h4>
                        <p className="fs-4" style={{ color: "#323643" }}>
                            Hi, my name's Jedsadaporn. My nickname's Boom. I'm a
                            2nd computer engineering student. I have 1 cat. Its
                            name's Taohu. I'm interested in programming and now,
                            I'm studying it. I hope to do it well.
                        </p>
                    </div>
                    <div style={{ width: "50%", paddingLeft: "200px" }}>
                        <h4 style={{ color: "gray" }}>― SKILLS</h4>
                        <div className="d-flex w-100 align-items-center">
                            <div
                                className="d-flex h-100"
                                style={{ width: "15%" }}
                            >
                                <img
                                    src="images/Python_logo_01.svg.png"
                                    style={{
                                        objectFit: "cover",
                                        width: "100%",
                                    }}
                                    className="rounded-circle"
                                />
                            </div>
                            <div className="progress" style={{ width: "85%" }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        width: "50%",
                                        backgroundColor: "#323643",
                                    }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                        <div className="d-flex w-100 align-items-center">
                            <div
                                className="d-flex h-100"
                                style={{ width: "15%" }}
                            >
                                <img
                                    src="images/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png"
                                    style={{
                                        objectFit: "cover",
                                        width: "100%",
                                    }}
                                    className="rounded-circle"
                                />
                            </div>
                            <div className="progress" style={{ width: "85%" }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        width: "50%",
                                        backgroundColor: "#323643",
                                    }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                        <div className="d-flex w-100 align-items-center">
                            <div
                                className="d-flex h-100"
                                style={{ width: "15%" }}
                            >
                                <img
                                    src="images/logo-2582748_960_720.webp"
                                    style={{
                                        objectFit: "cover",
                                        width: "100%",
                                    }}
                                    className="rounded-circle"
                                />
                            </div>
                            <div className="progress" style={{ width: "85%" }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        width: "25%",
                                        backgroundColor: "#323643",
                                    }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                        <div className="d-flex w-100 align-items-center">
                            <div
                                className="d-flex h-100"
                                style={{ width: "15%" }}
                            >
                                <img
                                    src="images/logo-2582747_1280.webp"
                                    style={{
                                        objectFit: "cover",
                                        width: "100%",
                                    }}
                                    className="rounded-circle"
                                />
                            </div>

                            <div className="progress" style={{ width: "85%" }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        width: "25%",
                                        backgroundColor: "#323643",
                                    }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
