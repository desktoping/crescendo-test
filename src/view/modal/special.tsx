import { Special } from "../../types/special";

interface SpecialProps {
  id: string;
  specials: Special[];
}

const SpecialInfo = ({ id, specials }: SpecialProps) => {
  const hasSpecial = specials.find((s) => s.ingredientId === id);

  console.log(hasSpecial, id, specials);

  if (hasSpecial) {
    return (
      <ul key={hasSpecial.uuid}>
        <li>{hasSpecial.title}</li>
        <li>{hasSpecial.text}</li>
      </ul>
    );
  }

  return null;
};

export default SpecialInfo;
