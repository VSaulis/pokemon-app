import { InfoCircledIcon } from '@radix-ui/react-icons';
import { IconProps } from '@radix-ui/react-icons/dist/types';
import { Callout } from '@radix-ui/themes';
import React, { ForwardRefExoticComponent, useMemo } from 'react';

export type MessageVariant = 'danger';

export interface MessageProps {
  className?: string;
  variant: MessageVariant;
  message: string;
}

const Message = ({ className, variant, message }: MessageProps) => {
  const color = useMemo<Callout.RootProps['color']>(() => variantColorMap[variant], [variant]);
  const Icon = useMemo(() => variantIconMap[variant], [variant]);

  return (
    <Callout.Root className={className} color={color}>
      <Callout.Icon>
        <Icon />
      </Callout.Icon>
      <Callout.Text>{message}</Callout.Text>
    </Callout.Root>
  );
};

const variantColorMap: Record<MessageVariant, Callout.RootProps['color']> = {
  danger: 'red',
};

const variantIconMap: Record<MessageVariant, ForwardRefExoticComponent<IconProps>> = {
  danger: InfoCircledIcon,
};

export default Message;
