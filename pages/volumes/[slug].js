import { useRouter } from "next/router";
import { volumes } from "../../lib/data.js";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head"



export default function VolumePage() {
    const router = useRouter();
    const { slug } = router.query;
    const currentVolume = volumes.find((volume) => volume.slug === slug);

    if (!currentVolume || !slug) {
        return <h1>no Volume found</h1>;
    }
    const { title, description, cover } = currentVolume;

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <h1>{title}</h1>

            <p>{description}</p>
            <Image src={cover} width={140} height={100} />
            <Link href="/volumes">Back to Volumes</Link>
        </>
    );
}