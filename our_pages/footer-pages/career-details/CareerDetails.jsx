import React, { useState, useEffect } from "react";
import { EditorState, convertFromRaw, CompositeDecorator } from "draft-js";
import { Editor as MyEditor } from "draft-js";
import { IoLocationOutline } from "react-icons/io5";
import Moment from "react-moment";
import axios from "axios";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import LocationContextProvider from "@/context/location-context";
import CareerForm from "@/components/footer-pages/careers/CareerForm";

const CareerDetails = ({ id }) => {
  const [detail, setDetail] = useState(null);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [department, setDepartment] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleModalOpenChange = (isOpen) => {
    setIsModalOpen(isOpen);
  };

  const findLinkEntities = (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges((character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === "LINK"
      );
    }, callback);
  };

  const DraftLink = (props) => {
    const { contentState, entityKey, children } = props;
    if (!contentState || !entityKey) {
      return null;
    }

    const entity = contentState.getEntity(entityKey);
    const { url } = entity.getData();
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  };

  const decorator = new CompositeDecorator([
    {
      strategy: findLinkEntities,
      component: DraftLink,
    },
  ]);

  const fetchdetails = async (page) => {
    const res = await axios.get(
      `https://primexbroker.com/api/get/job/detail/${id}`
    );
    if (res?.data?.success) {
      setDetail(res?.data?.data);
      const contentState = convertFromRaw(
        JSON.parse(res?.data?.data?.description)
      );
      const editorState = EditorState.createWithContent(
        contentState,
        decorator
      );
      setContent(editorState);
      setDepartment(res?.data?.data.department);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchdetails();
    }
  }, [id]);

  return (
    <section className="container py-20" dir="ltr">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {loading ? (
          <div className="col-span-12 flex items-center justify-center h-60">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"></div>
          </div>
        ) : (
          detail && (
            <>
              <div className="col-span-12 lg:col-span-4">
                <div
                  className="bg-white px-10 pt-4 pb-8"
                  style={{ boxShadow: "0 0 5px rgba(0, 0, 0, .2)" }}
                >
                  <table className="table-fixed w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-xl text-start py-3 font-semibold">
                          Overview
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="font-semibold py-3">Job Title</td>
                        <td className="py-3 font-normal">{detail.title}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold py-3">Experience</td>
                        <td className="py-3 font-normal">{`${detail.experience} Years`}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold py-3">Position</td>
                        <td className="py-3 font-normal">{detail.position}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold py-3">Job Type</td>
                        <td className="py-3 font-normal text-xs">
                          <span className="bg-[#daf4eb] text-[#34c38f] text-xs inline-block py-[.25em] px-[.4em] text-center align-baseline rounded-[.25rem]">
                            {detail.type}
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold py-3">Status</td>
                        <td className="py-3 font-normal text-xs">
                          <span className="bg-[#dfeffc] text-[#50a5f1] text-xs inline-block py-[.25em] px-[.4em] text-center align-baseline rounded-[.25rem]">
                            {detail.status}
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold py-3">Posted Date</td>
                        <td className="py-3 font-normal">
                          <Moment format="Do MMMM YYYY">
                            {detail.createdAt}
                          </Moment>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold py-3">Posted By</td>
                        <td className="py-3 font-normal">{detail.postedBy}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8">
                <div className="">
                  <div
                    className="bg-white p-10"
                    style={{ boxShadow: "0 0 5px rgba(0, 0, 0, .2)" }}
                  >
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                      <div className="flex-grow-1">
                        <h5 className="font-semibold">{detail.title}</h5>
                        <ul className="mt-1">
                          <li className="flex items-center gap-1">
                            <IoLocationOutline />
                            <span className="text-muted">
                              {detail.location}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <button
                          className="bg-primary rounded-full px-6 py-3"
                          onClick={handleOpenModal}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                    <div className="mt-12">
                      <MyEditor editorState={content} readOnly={true} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        )}
        <Modal
          isOpen={isModalOpen}
          onOpen={handleOpenModal}
          onClose={handleCloseModal}
          onOpenChange={handleModalOpenChange}
          placement="center"
          backdrop="blur"
          size="2xl"
        >
          <ModalContent className="bg-accent">
            {(onClose) => (
              <>
                <ModalBody>
                  <LocationContextProvider>
                    <CareerForm />
                  </LocationContextProvider>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
};

export default CareerDetails;
