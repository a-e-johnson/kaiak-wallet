import type { WalletResult } from './wallet';

export type MenuSelector =
  | 'accounts'
  | 'account'
  | 'setup'
  | 'menu'
  | 'about'
  | 'unlock'
  | 'onboard'
  | 'import';
export type AccountAction =
  | 'send'
  | 'transactions'
  | 'receive'
  | 'send_qr'
  | 'send_address';

export type OnboardView = 'start' | 'disclaimer' | 'seed' | 'account' | 'pin';

export interface OnboardState {
  view: OnboardView;
  walletResult: WalletResult;
  alias: string;
}

export type ImportView = 'disclaimer' | 'input';

export interface ImportState {
  view: ImportView;
}

export interface NavigationState {
  menu: MenuSelector;
  accountAction: AccountAction;
  onboardState?: OnboardState;
  importState?: ImportState;
}

export const START_STATE: NavigationState = {
  menu: 'unlock',
  accountAction: undefined,
  onboardState: undefined,
};
