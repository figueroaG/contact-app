import List from "@/components/List";

export default function Home() {
  return (
    <div>
      <List contacts={[]} showFavorites={true} />
      <List contacts={[]} showFavorites={false} />
    </div>
  );
}
