function SignCard ({signData}){

    return (
      
        <div className="signCard">
            <img src="null" alt ="name" />
            <p>{signData.sign}</p> 
            <div>
                <p>{signData.symbol}</p>
                <p>{signData.planet}</p>
                <p>{signData.luckDay}</p>
                <p>{signData.color}</p>
                <p>{signData.flower}</p>
                <p>{signData.animal}</p>
            </div>
        </div>
    )

}
export default SignCard;