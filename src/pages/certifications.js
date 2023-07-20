import { useState } from "react";
import CertificateCard from "@/components/CertificateCard";
import certificatesData from "@/data/certificatesData";
import { GrCertificate } from "react-icons/gr";

export default function CertificatesPage() {
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  return (
    <div className="min-h-screen flex flex-col pt-16 items-center">
      <h2 className="text-lg text-center font-semibold mt-2">
        Top Certifications
      </h2>
      {/* Top Certificates Section */}
      <section className="w-auto h-auto mt-8 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center overflow-y-auto">
        {certificatesData.slice(0, 4).map((certificate) => {
          return (
            <CertificateCard
              name={certificate.name}
              previewUrl={certificate.previewUrl}
            />
          );
        })}
      </section>
      <div className="flex justify-center">
        <button
          className="flex mb-4 rounded-lg py-1 px-3 w-auto items-center font-semibold border border-zinc-400 hover:bg-zinc-400"
          onClick={() => {
            setShowAllCertificates(!showAllCertificates);
          }}
        >
          See All <GrCertificate className="ml-2 w-6 h-auto" />
        </button>
      </div>
      {showAllCertificates && (
        <section className="w-auto h-auto mt-8 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center overflow-y-auto">
          {certificatesData.map((certificate) => {
            return (
              <CertificateCard
                name={certificate.name}
                previewUrl={certificate.previewUrl}
              />
            );
          })}
        </section>
      )}
    </div>
  );
}
