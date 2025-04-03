const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 4L4 12"
      strokeWidth="1.2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M4 4L12 12"
      strokeWidth="1.2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloseIcon;
