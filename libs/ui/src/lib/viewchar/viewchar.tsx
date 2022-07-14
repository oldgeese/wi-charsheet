import { Character } from '@wi-charsheet/character';
import { getById } from '@wi-charsheet/service';
import { Charsheet } from '@wi-charsheet/ui';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export function ViewChar() {
  const { id } = useParams()
  const [ character, setCharacter ] = useState<Character>()

  useEffect(() => {
    const getCharById = async () => {
      if (id) {
        const character = await getById(id)
        setCharacter(character)
      }
    }
    getCharById()
  }, [id])

  return (
    <div>
      <Link to="/">キャラクター一覧に戻る</Link>
      <Charsheet character={character} />
    </div>
  )
}

export default ViewChar
