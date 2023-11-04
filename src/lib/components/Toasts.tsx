'use client';

import { Button } from '@/core/ui/Button';
import {
  Toast,
  ToastCloseTrigger,
  ToastDescription,
  ToastGroup,
  ToastPlacements,
  ToastProvider,
  ToastTitle,
} from '@/core/ui/Toast';
import { Portal } from '@ark-ui/react';
import { FunctionComponent, PropsWithChildren } from 'react';
import { Stack } from '~/styled-system/jsx';

export const Toasts: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <ToastProvider max={1}>
      {children}
      <Portal>
        <ToastPlacements>
          {(placements) =>
            placements.map((placement) => (
              <ToastGroup key={placement} placement={placement}>
                {(toasts) =>
                  toasts.map((toast) => (
                    <Toast key={toast.id} toast={toast}>
                      <Stack gap="4">
                        <Stack gap="1">
                          <ToastTitle />
                          <ToastDescription />
                        </Stack>
                        <Stack direction="row" gap="3">
                          <ToastCloseTrigger asChild>
                            <Button variant="link" size="sm">
                              Close
                            </Button>
                          </ToastCloseTrigger>
                        </Stack>
                      </Stack>
                    </Toast>
                  ))
                }
              </ToastGroup>
            ))
          }
        </ToastPlacements>
      </Portal>
    </ToastProvider>
  );
};
