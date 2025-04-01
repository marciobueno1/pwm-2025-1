import { Cabecalho } from "@/components/Cabecalho";

const baseURL = "https://swapi.dev/api/people";

export default async function StarWarsDetails({ params }) {
  const { id } = await params;

  async function carregar(id) {
    try {
      const response = await fetch(`${baseURL}/${id}/`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.log("response status", response.status);
        console.log("response status text", response.statusText);
      }
    } catch (err) {
      console.log("err: ", err);
    }
    return null;
  }

  const personagem = await carregar(id);

  if (!personagem) {
    return (
      <>
        <Cabecalho />
        <h3>ID = {id}</h3>
      </>
    );
  }
  return (
    <>
      <Cabecalho />
      <h3>ID = {id}</h3>
      <ul>
        <li>Name: {personagem.name}</li>
        <li>Height: {personagem.height}</li>
        <li>Mass: {personagem.mass}</li>
        <li>Hair Color: {personagem.hair_color}</li>
        <li>Birth Year: {personagem.birth_year}</li>
      </ul>
    </>
  );
}
