import { ClientProvider } from '@/core/api/ClientProvider';
import { withAuth } from '@/core/auth/helpers/withAuth';
import { ToastProvider } from '@/core/ui/Toast';
import { Toasts } from '@/lib/components/Toasts';
import { PropsWithChildren } from 'react';

const AppLayout = async ({ children }: PropsWithChildren) => {
  return (
    <ClientProvider>
      <ToastProvider max={1}>
        {children}
        <Toasts />
      </ToastProvider>
    </ClientProvider>
  );
};

export default withAuth(AppLayout);
