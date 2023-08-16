import { EggGroups, PokemonClient } from 'pokenode-ts'
export default async function getpokemons() {
  const api = new PokemonClient()

  await api
    .getEggGroupById(EggGroups.MONSTER)
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
}
