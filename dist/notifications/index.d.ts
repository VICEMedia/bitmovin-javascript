import { Delete, Details, HttpClient, InternalConfiguration, List } from '../utils/types';
import { NotificationEmails } from './emails';
import { EmailNotification, EmailNotificationWithConditionsDetails, EncodingErrorWebhook, EncodingFinishedWebhook, TransferFinishedWebhook } from './types';
import { NotificationWebhooks } from './webhooks';
export declare const notifications: (configuration: InternalConfiguration, httpClient?: HttpClient) => Notifications;
export interface Notifications {
    (notificationId: string): {
        details: Details<EmailNotificationWithConditionsDetails>;
        delete: Delete<any>;
    };
    emails: NotificationEmails;
    webhooks: NotificationWebhooks;
    list: List<EmailNotification | EncodingFinishedWebhook | EncodingErrorWebhook | TransferFinishedWebhook>;
}
export default notifications;
