import { Account } from './account';
import { Analytics } from './analytics';
import { Encoding } from './encoding';
import { Player } from './player';
import { Notifications } from './notifications';
import { BitmovinConfiguration } from './utils/types';
export interface BitmovinAPI {
    encoding: Encoding;
    player: Player;
    analytics: Analytics;
    account: Account;
    notifications: Notifications;
}
declare const Bitmovin: (configuration: BitmovinConfiguration) => BitmovinAPI;
export default Bitmovin;
