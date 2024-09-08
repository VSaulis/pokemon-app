import { Spinner as RadixSpinner, SpinnerProps } from '@radix-ui/themes';

const Spinner = (props: SpinnerProps) => {
  return <RadixSpinner size="3" {...props} />;
};

export default Spinner;
