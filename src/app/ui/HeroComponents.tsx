import Image from "next/image";
import Link from "next/link";

export default async function HeroComponent() {
  const containerStyle = {
    position: 'relative',
    backgroundImage: `url(/img/DSC00749.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '615px',
    width: '100%',
  };
  
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  };
  
  return (
    <div className="relative overflow-x-hidden" style={containerStyle}> 
      <div className="absolute inset-0 flex flex-col items-center justify-center p-3" style={overlayStyle}>
        <h1 className="text-white text-4xl text-center mb-4 md:text-8xl" style={{ fontFamily: 'Inria-Serif, Poppins' }}>
          Selamat Datang di <br/> Website Jurusan TO
        </h1>
        <h6 className="text-white text-lg text-center mb-4 md:text-xl" style={{ fontFamily: 'Inria-Serif, Poppins' }}>
          SMK NEGERI 1 BANGSRI
        </h6>
        {/* <button className="">Klik Untuk Info Lebih Lanjut</button> */}
      </div>
    </div>
  );
}
