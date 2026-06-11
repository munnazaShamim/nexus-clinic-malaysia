import FAQ from "./FAQ";
import FaqSchema from "./FaqSchema";

interface FAQWithSchemaProps {
  data: any[];
  title?: string;
  eyebrow?: string;
}

const FAQWithSchema = ({ data, title, eyebrow }: FAQWithSchemaProps) => {
  return (
    <>
      <FaqSchema faqs={data} />
      <FAQ data={data} title={title} eyebrow={eyebrow} />
    </>
  );
};

export default FAQWithSchema;
