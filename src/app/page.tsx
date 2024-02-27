import { MessageCreateForm } from '@/components/message-create-form';
import { MessageList } from '@/components/message-list';

export default function Home() {
  return (
    <main className="p-4">
      <MessageCreateForm />
      <MessageList />
    </main>
  );
}
