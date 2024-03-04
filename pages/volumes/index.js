import Link from "next/link";

import Head from "next/head";
import { volumes } from "../../lib/data";

export default function Volumes() {
  return (
    <>
      <Head>
        <title>The Lord of the Rings</title>
      </Head>
      <h1>List of Volumes</h1>

      <ul> {volumes.map((volume) => {
        return (
          <li key={volume.title}>
            <Link href={`/volumes/${volume.slug}`}>
              {volume.title}
            </Link>
          </li>
        );
      })}
      </ul>
    </>
  );
}
