import { newAbilities } from "@wi-charsheet/abilities";
import { newBonds } from "@wi-charsheet/bonds";
import { Character } from "@wi-charsheet/character";
import { newFeats } from "@wi-charsheet/feats";
import { newFeatures } from "@wi-charsheet/features";
import { newFreeInput } from "@wi-charsheet/free-input";
import { newFrequentlyUsedSpells } from "@wi-charsheet/frequently-used-spells";
import { newGeneralInformation } from "@wi-charsheet/general-information";
import { newSkills } from "@wi-charsheet/skills";
import { newSpells } from "@wi-charsheet/spells";
import { newWeapons } from "@wi-charsheet/weapons";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { collection, connectFirestoreEmulator, doc, DocumentData, FirestoreDataConverter, getDoc, getDocs, getFirestore, orderBy, query, QueryDocumentSnapshot, setDoc, SnapshotOptions } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBQXkqpuNJufRB1L6hsV-agzhcbmeM10g",
  authDomain: "wi-charsheet.firebaseapp.com",
  projectId: "wi-charsheet",
  storageBucket: "wi-charsheet.appspot.com",
  messagingSenderId: "443256259299",
  appId: "1:443256259299:web:4936b64e0a39033be8fbd6",
  measurementId: "G-MS31FFRGF1"
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const analytics = getAnalytics(app)

const useEmulator = window.location.hostname === 'localhost'
if (useEmulator) {
  connectFirestoreEmulator(db, 'localhost', 8080)
}

export const getCharacters = async (): Promise<Character[]> => {
  const charactersCollectionRef = collection(db, "characters").withConverter(characterConverter)
  const q = query(charactersCollectionRef, orderBy("updatedAt", "desc"))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => doc.data())
}

export const getCharacter = async (id: string): Promise<Character> => {
  const characterDocRef = doc(db, "characters", id).withConverter(characterConverter)
  const snapshot = await getDoc(characterDocRef)
  if (snapshot.exists()) {
    return snapshot.data()
  } else {
    throw Error("No such document!")
  }
}

export const createCharacter = async (char: Character) => {
  const docRef = doc(db, "characters", char.id).withConverter(characterConverter)
  await setDoc(docRef, char)
}

export const updateCharacter = async (char: Character) => {
  const docRef = doc(db, "characters", char.id).withConverter(characterConverter)
  await setDoc(docRef, char)
}

const characterConverter: FirestoreDataConverter<Character> = {
  toFirestore: (data: Character): DocumentData => {
    return {...data}
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Character => {
    const data = snapshot.data(options)
    return {
      id: snapshot.id,
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      password: data['password'],
      passwordConfirm: data['passwordConfirm'],
      passwordForUpdate: data['passwordForUpdate'],
      generalInformation: data['generalInformation'] || newGeneralInformation(),
      abilities: data['abilities'] || newAbilities(),
      bonds: data['bonds'] || newBonds(),
      features: data['features'] || newFeatures(),
      feats: data['feats'] || newFeats(),
      weapons: data['weapons'] || newWeapons(),
      skills: data['skills'] || newSkills(),
      spells: data['spells'] || newSpells(),
      frequentlyUsedSpells: data['frequentlyUsedSpells'] || newFrequentlyUsedSpells(),
      freeInput: data['freeInput'] || newFreeInput(),
    }
  }
}
