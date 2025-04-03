const ComboboxArrowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11 6L8 3L5 6" />
    <path d="M11 6L8 3L5 6L11 6Z" strokeWidth="0.5" strokeLinecap="square" />
    <path d="M5 10L8 13L11 10" />
    <path d="M5 10L8 13L11 10H5Z" strokeWidth="0.5" strokeLinecap="square" />
  </svg>
);

export default ComboboxArrowIcon;
