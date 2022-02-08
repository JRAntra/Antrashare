import { ConfirmationConfig } from "src/app/models/dialog.model";

export const CONFIRMATION_CONFIG: ConfirmationConfig = {
  title: 'Confirm',
  message: 'Are you sure that you want to confirm this action?',
  icon: {
    name: 'offline_pin',
    color: 'warn'
  },
  actions: {
    confirm: {
      label: 'Confirm',
      color: 'warn'
    },
    cancel: {
      label: 'Cancel'
    }
  }
}