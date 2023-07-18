import CertificateCard from "@/components/CertificateCard";
import certificatesData from "@/data/certificatesData";

export default function name(params) {
  return (
    <div className="h-screen flex flex-col pt-16">
      <h2>Certifications</h2>
      <section className="w-full p-4">
        {certificatesData.map((certicate) => {
          return (<CertificateCard name={certicate.name} previewUrl={certicate.previewUrl} />)
        })}
      </section>
    </div>
  );
}
