import { withAuth } from '@/core/auth/helpers/withAuth';
import { ClientProvider } from '@/lib/api/client/ClientProvider';
import { Toasts } from '@/lib/components/Toasts';
import type { FunctionComponent, PropsWithChildren } from 'react';

const ProtectedLayout: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <ClientProvider>
      <Toasts>{children}</Toasts>
    </ClientProvider>
  );
};

export default withAuth(ProtectedLayout);
