import { ButtonProps, Button as RadixButton } from '@radix-ui/themes';

const Button = (props: ButtonProps) => {
  return <RadixButton variant="soft" {...props} />;
};

export default Button;
