export default async function loadProducts() {
  const response = await fetch('https://fakestoreapi.com/products');

  if (!response.ok) {
    throw new Error('Check product fetch');
  }

  return response.json();
}
