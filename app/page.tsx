import List from "@/components/List";

export default function Home() {
  return (
    <div>
      <List showFavorites={true} />
      <List showFavorites={false} />
    </div>
  );
}
