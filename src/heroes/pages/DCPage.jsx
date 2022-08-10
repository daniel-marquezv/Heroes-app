import { HeroeList } from "../components"


export const DCPage = () => {
  const {hero} = HeroeList

  return (
    <>
      <h1>DC Comics</h1>
      <hr />

      <HeroeList publisher='DC Comics'/>
    </>
  )
}
