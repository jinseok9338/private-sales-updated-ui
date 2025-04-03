import Logo from "~/assets/logo/Logo.svg";
import LogoBlack from "~/assets/logo/Logo-Black.png";

const DiorLogo = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={LogoBlack} alt="Dior Logo" width={66} height={18} />
    </div>
  );
};

export default DiorLogo;
