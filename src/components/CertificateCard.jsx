import { AiFillEye } from "react-icons/ai";

const CertificateCard = ({ name, previewUrl }) => {
  return (
    <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden mb-4">
      <figure className="relative h-40 w-full">
        <img
          src={previewUrl}
          alt={name}
          className="object-cover h-full w-full"
        />
        <button className="absolute top-2 right-2 bg-green-500 hover:bg-green-600 text-white py-1 px-3 flex items-center rounded focus:outline-none">
          See
          <AiFillEye className="w-6 h-auto ml-2"/>
        </button>
      </figure>
      <div className="p-4 h-auto w-full">
        <p className="text-gray-800 text-base font-bold">{name}</p>
        <div className="flex items-center justify-center mt-2">
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
