import Logo from '@/components/logo';
import { site } from '@/lib/site';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-end p-24">
      <Logo className="h-20" />
      <h1 className="text-2xl">{site.title}</h1>
    </main>
  );
}
