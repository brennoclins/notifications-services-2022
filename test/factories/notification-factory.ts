import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type OverrideProps = Partial<NotificationProps>;

export function makeNotification(override: OverrideProps = {}) {
  return new Notification({
    recipientId: 'recipient-2',
    content: new Content('Nova solicitação de amizade'),
    category: 'social',
    ...override,
  });
}
