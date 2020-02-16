import { useMemo } from "react"
import { getLettersByLanguage } from "../constants/letters"

export const useLanguageLetters = (language) => {
  const letters = useMemo(() => getLettersByLanguage(language), [language])
  return letters
}