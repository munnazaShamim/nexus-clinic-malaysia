import FAQ from "./FAQ";
import FaqSchema from "./FaqSchema";

const FAQWithSchema = ({ data }: { data: any[] }) => {
  return (
    <>
      <FaqSchema faqs={data} />
      <FAQ data={data} />
    </>
  );
};

export default FAQWithSchema;
