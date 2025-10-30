import PhotoList from "@/components/photolist";
export default async function Home() {
  const response = await fetch(`${process.env.REACT_BASE_URL}/photos`);
  const photos = await response.json();
  return (
    <div className="img-grid">
      <PhotoList photos={photos} />
    </div>
  );
}
