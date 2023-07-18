const CertificateCard = ({ name, previewUrl }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-4">
      <img
        src={previewUrl}
        alt={name}
        className="object-cover h-40 w-full"
      />
      <div className="p-4">
        <p className="text-gray-800 text-base font-bold truncate">{name}</p>
        <div className="flex items-center justify-between mt-2">
          <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded focus:outline-none">
            Ver
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-3 rounded focus:outline-none">
            Descargar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
