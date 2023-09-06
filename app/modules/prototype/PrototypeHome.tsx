import Input from "@/app/components/prototypeComponents/PrototypeInput";
import Title from "@/app//components/prototypeComponents/PrototypeTItle";
import Boxes from "@/app/components/prototypeComponents/PrototypeBoxes";

let PrototypeMain = () => {
  return (
    <div className=" w-fit mx-auto mt-60">
      <Title />
      <Input />
      <Boxes />
    </div>
  );
};
export default PrototypeMain;