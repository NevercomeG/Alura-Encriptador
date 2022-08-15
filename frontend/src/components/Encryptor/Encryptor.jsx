import "./style.css"

function Encryptor() {


    return (
        <section id ="main">
            <div className="Encryptor">

                <form action="">
                <p><label for="w3review">Encriptar</label></p>
                <textarea id="w3review" name="w3review" rows="20" cols="70">Encriptar</textarea>
                <input type="submit" value="Submit"/>
                </form>

                
                </div>
            <div className="Encryptor2">

                
            <form action="">
                <p><label for="w3review">Desencriptar</label></p>
                <textarea id="w3review" name="w3review" rows="20" cols="70">Desencriptar</textarea>
                <input type="submit" value="Submit"/>
                </form>

            </div>

        </section>
    )
}


export default Encryptor; 

