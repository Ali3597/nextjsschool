import { getApiDocs } from "@/utils/swagger";
import Swagger from "./react-swagger";


export default async function Page() {
   const spec = await getApiDocs()
    return (
        <Swagger spec={spec}/>
    )
  }