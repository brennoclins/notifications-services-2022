import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it(
    'should be able to create a notification' +
      '\n (deve ser capaz de criar uma notificação)',
    () => {
      const notification = new Notification({
        content: new Content('Você recebeu uma notificação de amizade'),
        category: 'social',
        recipientId: 'recipient-id',
      });

      expect(notification).toBeTruthy();
    },
  );
});
