import dataLeng from "@/libs/lenguaje/data-es.json";
import { CardLayout3, ContentSectionLayout } from "@/components";

const Footer = () => {
  const ListContacts = () => <div className="flex flex-col sm:flex-row justify-around gap-10">
    {dataLeng.data.contact.map((dataContact, index) =>
      <CardLayout3
        key={index}
        description={dataContact.description}
        title={dataContact.title}
        url={dataContact.url}
      />
    )}
  </div>

  return (
    <footer className="print:hidden">
      <ContentSectionLayout title={dataLeng.pages.resume.title.contact}>
        <ListContacts />
      </ContentSectionLayout>
    </footer>
  );
}

export { Footer };
