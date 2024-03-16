import { Accordion, AccordionTab } from "primereact/accordion";

const FAQ = () => {
  return (
    <>
      <h2 className="text-center text-3xl text-dark font-bold">FAQ</h2>
      <Accordion multiple activeIndex={[0]} className="flex flex-col gap-10">
        <AccordionTab
          pt={{
            headerIcon: {
              className: " absolute right-0 sm:h-6 sm:w-6 text-darkBlue",
            },
            header: {
              className: "h-10  text-darkBlue sm:text-xl font-medium",
            },
          }}
          header="What screenings should men get?"
        >
          <p className="mt-10 text-base text-dark">
            {
              "Our Men’s Health Test includes standard tests for men’s wellness including a comprehensive metabolic panel (CMP) blood test, a complete blood count (CBC) test, a diabetes risk (HbA1c) test, a lipid panel, and a urine analysis test that can screen for various conditions, such as kidney disease or diabetes. Having regular screenings improves the likelihood of early detection of a variety of health issues, ultimately improving diagnoses and treatment options."
            }
          </p>
        </AccordionTab>

        <AccordionTab
          pt={{
            headerIcon: {
              className: " absolute right-0 sm:h-6 sm:w-6 text-darkBlue",
            },
            header: {
              className: "h-fit text-darkBlue sm:text-xl font-medium",
            },
          }}
          header="How accurate is this testing?"
        >
          <p className="mt-10 text-base text-dark">
            {
              "Our Men’s Health Test includes standard tests for men’s wellness including a comprehensive metabolic panel (CMP) blood test, a complete blood count (CBC) test, a diabetes risk (HbA1c) test, a lipid panel, and a urine analysis test that can screen for various conditions, such as kidney disease or diabetes. Having regular screenings improves the likelihood of early detection of a variety of health issues, ultimately improving diagnoses and treatment options."
            }
          </p>
        </AccordionTab>

        <AccordionTab
          pt={{
            headerIcon: {
              className: " absolute right-0 sm:h-6 sm:w-6 text-darkBlue",
            },
            header: {
              className: "h-10  text-darkBlue sm:text-xl font-medium",
            },
          }}
          header="Are my test results private and confidential?"
        >
          <p className="mt-10 text-base text-dark">
            {
              "Our Men’s Health Test includes standard tests for men’s wellness including a comprehensive metabolic panel (CMP) blood test, a complete blood count (CBC) test, a diabetes risk (HbA1c) test, a lipid panel, and a urine analysis test that can screen for various conditions, such as kidney disease or diabetes. Having regular screenings improves the likelihood of early detection of a variety of health issues, ultimately improving diagnoses and treatment options."
            }
          </p>
        </AccordionTab>

        <AccordionTab
          pt={{
            headerIcon: {
              className: " absolute right-0 sm:h-6 sm:w-6 text-darkBlue",
            },
            header: {
              className: "h-10  text-darkBlue sm:text-xl font-medium",
            },
          }}
          header="How does TOX-SCREEN LAB work?"
        >
          <p className="mt-10 text-base text-dark">
            {
              "Our Men’s Health Test includes standard tests for men’s wellness including a comprehensive metabolic panel (CMP) blood test, a complete blood count (CBC) test, a diabetes risk (HbA1c) test, a lipid panel, and a urine analysis test that can screen for various conditions, such as kidney disease or diabetes. Having regular screenings improves the likelihood of early detection of a variety of health issues, ultimately improving diagnoses and treatment options."
            }
          </p>
        </AccordionTab>
      </Accordion>
    </>
  );
};

export default FAQ;
