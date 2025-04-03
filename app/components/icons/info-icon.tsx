const InfoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 1C11.8655 1 15 4.13373 15 8C15 11.8655 11.8655 15 8 15C4.13373 15 1 11.8655 1 8C1 4.13373 4.13373 1 8 1Z"
      fill="#EBEBEB"
      stroke="#EBEBEB"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.00001 10.8639L8.00001 7.91789"
      stroke="#666666"
      strokeWidth="1.2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <circle
      cx="7.99999"
      cy="5.80001"
      r="0.333333"
      fill="#666666"
      stroke="#666666"
      strokeWidth="1.2"
    />
  </svg>
);

export default InfoIcon;
