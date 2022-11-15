function SignForm (){


    const handleSubmit= e =>{
        e.preventDefault()
        // console.log("submit")
    }
    return (
        <div>
            <form onClick={handleSubmit}>
                <label> Enter your sunsign
                    <select>
                        <option>Aries</option>
                        <option>Taurus</option>
                        <option>Gemini</option>
                        <option>Cancer</option>
                        <option>Leo</option>
                        <option>Virgo</option>
                        <option>Libra</option>
                        <option>Scorpio</option>
                        <option>Sagittarius</option>
                        <option>Capricorn</option>
                        <option>Aquarius</option>
                        <option>Pisces</option>
                    </select>
                </label>
                <label> Enter your partner's sign
                    <select>
                        <option>Aries</option>
                        <option>Taurus</option>
                        <option>Gemini</option>
                        <option>Cancer</option>
                        <option>Leo</option>
                        <option>Virgo</option>
                        <option>Libra</option>
                        <option>Scorpio</option>
                        <option>Sagittarius</option>
                        <option>Capricorn</option>
                        <option>Aquarius</option>
                        <option>Pisces</option>
                    </select>
                </label>
                <button value="submit"> Find your SoulMate! </button>
           </form>
        </div>
    )

}
export default SignForm;