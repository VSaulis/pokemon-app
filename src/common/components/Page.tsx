import { Box, Container, Heading, Text } from '@radix-ui/themes';
import { ReactNode } from 'react';

export interface PageProps {
  className?: string;
  children: ReactNode;
  title: string;
  description?: string;
}

const Page = ({ className, children, title, description }: PageProps) => {
  return (
    <Container px="4" py="6" className={className}>
      <Box mb="4">
        <Heading>{title}</Heading>
        {!!description && (
          <Text color="gray" as="p" mt="2">
            {description}
          </Text>
        )}
      </Box>
      {children}
    </Container>
  );
};

export default Page;
