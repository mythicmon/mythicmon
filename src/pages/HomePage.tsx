import "./HomePage.css";

export default function HomePage(){

    return(

        <div className="home">

            <div className="hero">

                <h1>Welcome to MythicMon</h1>

                <p>

                    Catch creatures in Safari Zones, unlock them in packs,
                    complete the Battle Pass, and build your collection.

                </p>

            </div>

            <div className="feature-grid">

                <div className="feature-card">

                    <h2>📦 Pack Shop</h2>

                    <p>
                        Unlock creatures in Safari before they can appear in
                        packs.
                    </p>

                </div>

                <div className="feature-card">

                    <h2>🌿 Safari Zones</h2>

                    <p>

                        Explore large maps, collect berries, avoid aggressive
                        creatures, and catch new MythicMon.

                    </p>

                </div>

                <div className="feature-card">

                    <h2>⭐ Battle Pass</h2>

                    <p>

                        Complete seasonal challenges to unlock exclusive packs
                        and Safari Zones.

                    </p>

                </div>

                <div className="feature-card">

                    <h2>🛠 Level Editor</h2>

                    <p>

                        Build and publish your own custom adventures.

                    </p>

                </div>

            </div>

        </div>

    );

}
