import { Accordion, AccordionItem } from "@nextui-org/accordion";

const Faq = ({ forexFaqs }) => {
  return (
    <section className="container py-12">
      <h1 className="sectionHeading mb-12">Frequently Asked Questions</h1>
      <Accordion
        variant="bordered"
        itemClasses={{
          title: "font-semibold",
        }}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 1,
                },
                opacity: {
                  easings: "ease",
                  duration: 1,
                },
              },
            },
            exit: {
              y: -10,
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  easings: "ease",
                  duration: 0.25,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.3,
                },
              },
            },
          },
        }}
      >
        {forexFaqs.map((faq, index) => (
          <AccordionItem key={faq.key} title={faq.question}>
            {faq.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Faq;
