import { Scroll } from "@react-three/drei";

// const Section = (props) => {
//   return <section>{props.children}</section>;
// };

export const Overlay = () => {
  return (
    <Scroll html>
      <ul className="content border border-black p-8 flex flex-col gap-4 m-24">
        <caption className="font-serif text-2xl bg-white">Hello</caption>
        <li>Orange</li>
        <li>Orange</li>
        <li>Orange</li>
        <li>Orange</li>
        <li>Orange</li>
        <li>Orange</li>
      </ul>
      <ul className="content border border-black p-8 flex flex-col gap-4 m-24 mt-40">
        <caption className="font-serif text-2xl bg-white">Hello</caption>
        <li>Orange</li>
        <li>Orange</li>
        <li>Orange</li>
        <li>Orange</li>
        <li>Orange</li>
        <li>Orange</li>
      </ul>
      <ul className="content border border-black p-8 flex flex-col gap-4 m-24 mt-40">
        <caption className="font-serif text-2xl bg-white">Hello</caption>
        <li>Orange</li>
        <li>Orange</li>
        <li>Orange</li>
        <li>Orange</li>
        <li>Orange</li>
        <li>Orange</li>
      </ul>
    </Scroll>
  );
};
