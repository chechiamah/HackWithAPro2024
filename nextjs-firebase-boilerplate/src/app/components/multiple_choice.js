import React from "react";

export default function ({setAns, id}) {

    return (  
        <>
            <br />
            <input type="radio" id="huey" name={id} value="huey" onClick={(e) => setAns(1)} />
            <label for="huey" class="blue-text">1</label>
            <input type="radio" id="huey" name={id} value="huey" onClick={(e) => setAns(2)} />
            <label for="huey" class="blue-text">2</label>
            <input type="radio" id="huey" name={id} value="huey" onClick={(e) => setAns(3)} />
            <label for="huey" class="blue-text">3</label>
            <input type="radio" id="huey" name={id} value="huey" onClick={(e) => setAns(4)} />
            <label for="huey" class="blue-text">4</label>
            <input type="radio" id="huey" name={id} value="huey" onClick={(e) => setAns(5)} />
            <label for="huey" class="blue-text">5</label>
            <br />
        </>
    );
}
