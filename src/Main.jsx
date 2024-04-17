import pfp from "./pfp.jpg"
import "./styles/Main.css"

export default function Main(){

    let cards = [];
    for(let i = 0; i < 100; i++){
        cards.push(
            <div key={i} className="card">
                <img src={pfp} alt="" />
                <p className="name">Walter White</p>
                <p className="email">wwhite@albufsd.edu</p>
                <p className="dob">Aug 23, 1969</p>
                <button className="more">More</button>
            </div>
        );
    }

    return (
        <main>
            {cards}
        </main>
    );
}