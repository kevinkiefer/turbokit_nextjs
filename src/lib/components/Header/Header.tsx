import { FunctionComponent } from 'react';
import { HStack, styled } from '~/styled-system/jsx';

const headerHeight = '64px';

export const Header: FunctionComponent = () => {
  return (
    <styled.header h={headerHeight}>
      <HStack
        h={headerHeight}
        alignItems="center"
        maxW="6xl"
        mx="auto"
        justifyContent="space-between"
      >
        {/* <HStack gap="4">
          <Navigation />
        </HStack> */}
      </HStack>
    </styled.header>
  );
};
