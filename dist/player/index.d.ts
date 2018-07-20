import { Channels } from './channels';
import { CustomBuilds } from './customBuilds';
import { Licenses } from './licenses';
import { Statistics } from './statistics';
declare const player: (internalConfig: any) => Player;
export interface Player {
    channels: Channels;
    licenses: Licenses;
    statistics: Statistics;
    customBuilds: CustomBuilds;
}
export default player;
