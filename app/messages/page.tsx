import NavBar from '../components/NavBar';
import MessagesPageHero from '../components/MessagesPageHero';
import RecentMessagesSection from '../components/RecentMessagesSection';

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="pt-[72px]">
        <MessagesPageHero />
        <RecentMessagesSection />
      </main>
    </div>
  );
}
