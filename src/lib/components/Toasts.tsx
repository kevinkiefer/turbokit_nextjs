'use client';
import { Button } from '@/core/ui/Button';
import {
  Toast,
  ToastCloseTrigger,
  ToastDescription,
  ToastGroup,
  ToastPlacements,
  ToastTitle,
} from '@/core/ui/Toast';
import { Portal } from '@ark-ui/react';
import { XIcon } from 'lucide-react';
import { Box, Stack } from '~/styled-system/jsx';

export const Toasts = () => {
  return (
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
                            Dismiss
                          </Button>
                        </ToastCloseTrigger>
                        <Button variant="link" size="sm">
                          Show
                        </Button>
                      </Stack>
                    </Stack>
                    <Box position="absolute" top="3" right="3">
                      <ToastCloseTrigger asChild>
                        {/* <IconButton
                              size="sm"
                              variant="link"
                              aria-label="Close Toast"
                            > */}
                        <XIcon />
                        {/* </IconButton> */}
                      </ToastCloseTrigger>
                    </Box>
                  </Toast>
                ))
              }
            </ToastGroup>
          ))
        }
      </ToastPlacements>
    </Portal>
  );
};
