import Reviews from "./Reviews";
import SignCard from "./SignCard";
import SignCollection from "./SignCollection";
import SignForm from "./SignForm";

function PageContainer (){
    return (
        <div>
          <SignCollection/>
          <SignForm/>
          <Reviews/>
          

        </div>
    )

}
export default PageContainer;