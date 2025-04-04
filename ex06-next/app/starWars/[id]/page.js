"use client";
import { useState, useEffect } from "react";
import { Cabecalho } from "@/components/Cabecalho";
import { useParams } from "next/navigation";

const baseURL = "https://swapi.dev/api/people";

export default function StarWarsDetails() {
  const [personagem, setPersonagem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    async function carregar(id) {
      try {
        const response = await fetch(`${baseURL}/${id}/`);
        if (response.ok) {
          const data = await response.json();
          setPersonagem(data);
        } else {
          console.log("response status", response.status);
          console.log("response status text", response.statusText);
        }
      } catch (err) {
        console.log("err: ", err);
      } finally {
        setLoading(false);
      }
    }

    carregar(id);
  }, []);

  if (loading) {
    return (
      <>
        <Cabecalho />
        <p>Carregando...</p>
      </>
    );
  }

  if (!personagem) {
    return (
      <>
        <Cabecalho />
        <h3>ID = {id}</h3>
        <p>Personagem não encontrado.</p>
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
