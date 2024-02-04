import { useParams } from "react-router-dom";
import PopBrowse from "../../components/Pop/PopBrowse";

export default function PopBrow() {
  let { id } = useParams();
  // console.log(id);
  return <PopBrowse id={id} />;
}
