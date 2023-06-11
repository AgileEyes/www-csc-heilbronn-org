import classNames from "./MemberCard.module.css";

export type Member = {
  name: string;
  image: string;
  description: string;
};

export default function MemberCard({ name, image, description }: Member) {
  return (
    <div className={classNames.container}>
      {/* <img className={classNames.image} src={image} alt={name} /> */}
      <h2 className={classNames.name}>{name}</h2>
      <p className={classNames.description}>{description}</p>
    </div>
  );
}
