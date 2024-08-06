import React, { useState } from 'react'
import { Tab, Tabs } from "@nextui-org/react";
import WebinarForm from './WebinarForm';
import BookSession from './BookSession';
import BecomeInstructor from './BecomeInstructor';

function FromWarapper({ active, setActive }) {

    return (
        <section id="academy-forms" className="pt-12 bg-accent relative container mt-8 ">
            <div className="text-center academy-forms ">
                <Tabs radius="full"
                    color="default"
                    className="tabs_custom text-secondary bg-secondary  rounded-xl px-[8%] py-3 "
                    selectedKey={active}
                    onSelectionChange={setActive}
                >
                    <Tab key={"Webinars"} title={"Webinars"}  >
                        <div className=" lg:text-xl xs:text-small">
                            <WebinarForm />
                        </div>
                    </Tab>

                    <Tab key={"Instructor"} title={"Instructor"}>
                        <div className=" text-xl">
                            <BecomeInstructor />
                        </div>
                    </Tab>
                    <Tab key={"Session"} title={"Session"}>
                        <div className=" text-xl">
                            <BookSession />
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </section>
    )
}

export default FromWarapper