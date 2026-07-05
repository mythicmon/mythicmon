import { useEffect } from "react";
import { createSafariGame } from "../game/Game";

export default function SafariPage() {

    useEffect(() => {

        const game = createSafariGame("game");

        return () => {
            game.destroy(true);
        };

    }, []);

    return (
        <div
            id="game"
            style={{
                width: "1280px",
                height: "720px",
                margin: "30px auto"
            }}
        />
    );

}
