/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero, Gallery, About, Contact, ScrollProgress, Marquee } from "./components";

export default function App() {
  return (
    <main className="bg-neutral-950 min-h-screen selection:bg-white selection:text-black">
      <ScrollProgress />
      <Hero />
      <About />
      <Gallery />
      <Marquee />
      <Contact />
    </main>
  );
}
