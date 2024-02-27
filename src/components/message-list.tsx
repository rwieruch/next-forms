import { getMessages } from '@/app/actions';

const MessageList = async () => {
  const messages = await getMessages();

  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  );
};

export { MessageList };
