import { Content } from './content';

describe('Notification content', () => {
  it(
    'should be able to create a notification content' +
      '\n (deve ser capaz de criar um conteúdo de notificação)',
    () => {
      const content = new Content('Você recebeu uma notificação de amizade');

      expect(content).toBeTruthy();
      // expect(() => new Content('Você recebeu uma notificação de amizade')).toBeTruthy();
    },
  );

  it(
    'should not be able to create a notification content with less than 5 characters' +
      '\n (não deve ser capaz de criar um conteúdo de notificação com menos de 5 caracteres)',
    () => {
      expect(() => new Content('kaue')).toThrow();
    },
  );

  it(
    'should not be able to create a notification content with more than 240 characters' +
      '\n (não deve ser capaz de criar um conteúdo de notificação com mais de 240 caracteres)',
    () => {
      expect(() => new Content('k'.repeat(241))).toThrow();
    },
  );
});
