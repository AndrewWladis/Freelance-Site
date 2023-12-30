import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export default function Services() {
    return (
        <section id="services" className="w-full flex flex-row flex-wrap justify-center items-center" style={{ marginTop: 250 }}>
            <Card style={{ margin: 10, maxWidth: 400, height: 175, backgroundColor: 'transparent' }}>
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col w-full">
                        <p className="text-md text-center">Web Design</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p className="text-center">
                        I craft visually appealing and user-friendly websites that align with your company and engage your target audience.
                    </p>
                </CardBody>
            </Card>
            <Card style={{ margin: 10, maxWidth: 400, height: 175, backgroundColor: 'transparent' }}>
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col w-full">
                        <p className="text-md text-center">Responsive Design</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p className="text-center">
                        I ensure your website will look great on all devices with responsive design, providing a seamless experience across desktops, tablets, and mobile devices.
                    </p>
                </CardBody>
            </Card>
            <Card style={{ margin: 10, maxWidth: 400, height: 175, backgroundColor: 'transparent' }}>
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col w-full">
                        <p className="text-md text-center">UI/UX Design</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p className="text-center">
                        I focus on user interface and user experience design to enhance the usability and accessibility of your website.
                    </p>
                </CardBody>
            </Card>
        </section>
    );
}
