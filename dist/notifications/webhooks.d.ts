import { Create2, Delete, DeleteResult, Details, HttpClient, InternalConfiguration, List } from '../utils/types';
import { EncodingErrorWebhook, EncodingErrorWebhookDetails, EncodingFinishedWebhook, EncodingFinishedWebhookDetails, TransferFinishedWebhook, TransferFinishedWebhookDetails, UserSpecificCustomDataDetails, WebhookDetails } from './types';
export { DeleteResult };
declare const webhooks: (configuration: InternalConfiguration, http?: HttpClient) => NotificationWebhooks;
export interface NotificationWebhooksType<T, TDetails> {
    (notificationId: string): {
        details: Details<TDetails>;
        delete: Delete<DeleteResult>;
        customData: () => Promise<UserSpecificCustomDataDetails>;
    };
    create: Create2<T, TDetails>;
    list: List<TDetails>;
}
export interface NotificationWebhooks {
    list: List<WebhookDetails>;
    encoding: {
        encodings: {
            (encodingId: string): {
                finished: NotificationWebhooksType<EncodingFinishedWebhook, EncodingFinishedWebhookDetails>;
                error: NotificationWebhooksType<EncodingErrorWebhook, EncodingErrorWebhookDetails>;
            };
            finished: NotificationWebhooksType<EncodingFinishedWebhook, EncodingFinishedWebhookDetails>;
            error: NotificationWebhooksType<EncodingErrorWebhook, EncodingErrorWebhookDetails>;
        };
        transfers: {
            (transferId: string): {
                finished: NotificationWebhooksType<TransferFinishedWebhook, TransferFinishedWebhookDetails>;
                error: NotificationWebhooksType<EncodingErrorWebhook, EncodingErrorWebhookDetails>;
            };
            finished: NotificationWebhooksType<TransferFinishedWebhook, TransferFinishedWebhookDetails>;
            error: NotificationWebhooksType<EncodingErrorWebhook, EncodingErrorWebhookDetails>;
        };
    };
}
export default webhooks;
