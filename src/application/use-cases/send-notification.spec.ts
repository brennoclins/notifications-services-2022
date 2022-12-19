import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be able to send a notificatin', async () => {
    const notificationRepository = new InMemoryNotificationRepository();

    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      recipientId: 'example-recipient-id',
      content: 'This is a notification',
      category: 'social',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
