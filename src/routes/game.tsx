import { Unity, useUnityContext } from "react-unity-webgl";
import "./game.css";

export default function Game() {
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "unity-build/game.loader.js",
        dataUrl: "unity-build/game.data",
        frameworkUrl: "unity-build/game.framework.js",
        codeUrl: "unity-build/game.wasm",
    })
    const loadingPercentage = Math.round(loadingProgression * 100);
    return (
        <div className="container">
            {isLoaded === false && (
                <div className="loading-overlay">
                    <p>Loading... ({loadingPercentage}%)</p>
                </div>
            )}
            <Unity className="unity" unityProvider={unityProvider} />
        </div>
    )
}