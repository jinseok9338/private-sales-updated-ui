const InfoErrorIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      fill="#FFE4E4"
      stroke="#FFE4E4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.99666 5.46936V8.41536"
      stroke="#B41110"
      strokeWidth="1.2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M7.99675 10.5306H8.00341"
      stroke="#B41110"
      strokeWidth="1.2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export default InfoErrorIcon;
