import { Create, HttpClient, InternalConfiguration, List } from '../utils/types';
import { EmailNotificationWithConditions, EmailNotificationWithConditionsDetails } from './types';
declare const emails: (configuration: InternalConfiguration, http?: HttpClient) => NotificationEmails;
export interface NotificationEmailsType {
    (notificationId: string): {
        replace: (emailNotification: EmailNotificationWithConditions) => Promise<EmailNotificationWithConditionsDetails>;
    };
    create: Create<EmailNotificationWithConditions>;
}
export interface NotificationEmails {
    list: List<EmailNotificationWithConditionsDetails>;
    encoding: {
        list: List<EmailNotificationWithConditionsDetails>;
        encodings: {
            (encodingId: string): {
                liveInputStreamChanged: NotificationEmailsType;
                error: NotificationEmailsType;
                list: List<EmailNotificationWithConditionsDetails>;
            };
            liveInputStreamChanged: NotificationEmailsType;
            error: NotificationEmailsType;
        };
    };
}
export default emails;
