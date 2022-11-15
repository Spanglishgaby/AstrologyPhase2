import SignCard from "./SignCard";

function SignCollection ({sunSign}){

    const renderSign= sunSign.map((signData)=>{
        return(
            <SignCard key ={signData.id} signData = {signData}/>
        )
    })

    return (
        <div>
          {renderSign}
        </div>
    )

}
export default SignCollection;