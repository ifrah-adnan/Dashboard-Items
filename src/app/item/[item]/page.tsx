export default function ItemPage({ params }: { params: { item: string } }) {
  return (
    <div>
      <h1>Item Page</h1>
      <p>Item: {params.item}</p>
    </div>
  );
}
