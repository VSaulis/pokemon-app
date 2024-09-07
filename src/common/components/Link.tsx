import { Link as RadixLink } from '@radix-ui/themes';
import React from 'react';
import { LinkProps, Link as RouterLink } from 'react-router-dom';

const Link = ({ className, ...rest }: LinkProps) => {
  return (
    <RadixLink className={className} asChild>
      <RouterLink {...rest} />
    </RadixLink>
  );
};

export default Link;
