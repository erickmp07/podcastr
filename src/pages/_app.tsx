import "../styles/global.scss";
import { Header } from "../components/Header";
import { Player } from "../components/Player";
import styles from "../styles/app.module.scss";
import { PlayerContext } from "../contexts/PlayerContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
    const [episodes, setEpisodes] = useState([]);
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    function play(episode) {
        setEpisodes([episode]);
        setCurrentEpisodeIndex(0);
        setIsPlaying(true);
    }

    return (
        <PlayerContext.Provider value={{ episodes, currentEpisodeIndex, play, isPlaying }}>
            <div className={styles.wrapper}>
                <main>
                    <Header />
                    <Component {...pageProps} />
                </main>
                <Player />
            </div>
        </PlayerContext.Provider>
    );
}

export default MyApp
