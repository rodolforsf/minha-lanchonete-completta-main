import { useState, useEffect } from "react";
import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";

import { getLanches } from "../../../services/api";

export default function Lanches() {
  const [lanches, setLanches] = useState([])

  useEffect(() => {
    (async () => {
      const lanchesRequest = await getLanches()

      setLanches(lanchesRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Lanches' description='Nossos melhores lanches' />
      <SnackTitle>Lanches</SnackTitle>
      <Snacks snacks={lanches}></Snacks>
    </>
  )
}
