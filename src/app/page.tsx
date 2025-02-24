import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/grocery-1');
  return null; // Ensure nothing renders
}
