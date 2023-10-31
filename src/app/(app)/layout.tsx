import { withAuth } from '@/core/auth/helpers/withAuth';
import { ClientProvider } from '@/lib/api/client/ClientProvider';
import type { FunctionComponent, PropsWithChildren } from 'react';

const ProtectedLayout: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <ClientProvider>{children}</ClientProvider>;
};

export default withAuth(ProtectedLayout);
