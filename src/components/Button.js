const Button = ({ variant, children, className }) => {
  const baseStyles = className;

  // Define styles for the variants
  const variantStyles = {
    primary:
      "text-[#000] inline-flex justify-center items-center text-center bg-transparent relative px-[1.44rem] py-[1.11rem] font-hind text-[1rem] tracking-[0px] leading-[1.2] font-[400]  before:content-[''] before:absolute before:top-[0px] before:left-[0px] before:h-full before:z-[-1] before:bg-[#FF9C00] before:w-[2px]  after:content-[''] after:absolute after:top-[0px] after:left-[0px] after:h-full after:z-[-1] after:w-full after:scale-x-[0] after:origin-[0_0] after:[transition:transform_0.3s_ease_0s] after:bg-[linear-gradient(to_right,_#FF9C00,_rgba(0,0,0,0))] hover:after:scale-x-100",
    secondary:
      "text-[#000] bg-[#fff] border-[#fff] relative overflow-hidden inline-block px-[35px] py-[11px] text-[16px] leading-[24px] border-[2px] border-[solid] font-primary font-black tracking-[0.06em] uppercase whitespace-nowrap overflow-ellipsis text-center Typography.Smp align-middle select-none [transition:250ms_all_ease-in-out]   hover:text-[#000] hover:bg-black hover:border-[#fff] hover:text-[#fff] ",
  };
  // overflow-hidden inline-block px-[35px] py-[11px] text-[16px] leading-[24px] border-[2px] border-[solid] font-primary font-black tracking-[0.06em] uppercase whitespace-nowrap overflow-ellipsis text-center Typography.Smp align-middle select-none [transition:250ms_all_ease-in-out]   hover:text-[#000] hover:bg-[rgba(0,_0,_0,_0.05)] hover:border-[rgba(0,_0,_0,_0.05)]
  // Select styles based on the `variant` prop
  const buttonStyles = `${baseStyles} ${variantStyles[variant] || variantStyles.primary}`;

  return (
    <a href="/" className={buttonStyles}>
      {children}
    </a>
  );
};

export default Button;
