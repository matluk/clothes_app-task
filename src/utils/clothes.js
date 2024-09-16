/* export const colors = [
  { label: "beige", value: "beige" },
  { label: "blau", value: "blau" },
  { label: "braun", value: "braun" },
  { label: "gelb", value: "gelb" },
  { label: "gold", value: "gold" },
  { label: "grau", value: "grau" },
  { label: "grün", value: "grün" },
  { label: "hellblau", value: "hellblau" },
  { label: "khaki", value: "khaki" },
  { label: "lila", value: "lila" },
  { label: "mehrfarbig", value: "mehrfarbig" },
  { label: "oliv", value: "oliv" },
  { label: "orange", value: "orange" },
  { label: "pink", value: "pink" },
  { label: "rosa", value: "rosa" },
  { label: "rot", value: "rot" },
  { label: "schwarz", value: "schwarz" },
  { label: "silber", value: "silber" },
  { label: "turkis", value: "turkis" },
  { label: "weiß", value: "weiß" },
]; */

export const createFilterByColors = (selectedColors) => {
  return (item) => {
    if (selectedColors.length === 0) return true;
    
    return selectedColors.includes(item.Details.Color);
  };
};