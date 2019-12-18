interface IProps {
  label: string
}
function printLabel(labeledObj:IProps) {
  console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);


interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig){
  // ...
}

const params = ({ colour: "red", width: 100 })

let mySquare = createSquare(params);