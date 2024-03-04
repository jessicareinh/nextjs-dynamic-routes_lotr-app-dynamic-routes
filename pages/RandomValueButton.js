import React from "react";
import Link from "next/link"; // Import the Link component
import { volumes } from "../../lib/data"; // Assuming you have a 'volumes' array

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const RandomVolumeButton = () => {
    const randomVolume = getRandomElement(volumes);

    return (
        <div>
            <Link href={`/volumes/${randomVolume.slug}`}>
                <a>Random Volume</a>
            </Link>
        </div>
    );
};

export default RandomVolumeButton;