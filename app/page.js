import React from 'react';
import './styles.css';

function App() {
  return (
    <>
      <nav>
        <img src="\logo.png" alt="Logo" />
        <a href="#">COLLABORATIONS</a>
        <a href="#">OUTREACH</a>
        <a href="#">STORIES</a>
        <a href="#" className="button contact">CONTACT</a>
      </nav>

      <div className="front-page">
        <h1 className="header1">NO EMPTY SEATS</h1>
        <p className="subtitle1">
          The Mission of No Empty Seats, Inc. is to break the stigma behind mental
          illness and encourage showing unconditional love to friends and family.
          We invest in nationally-recognized suicide prevention charities and
          share stories revealing the unspoken prevalence of depression and
          anxiety. Our goal is to emphasize the tragic effects of suicide, with
          partnered initiatives and projects spreading genuine compassion and acts
          of kindness.
        </p>
        <p>
          <a href="#" className="button donate">DONATE</a>
        </p>
      </div>

      <div className="meet-the-team">
        <h2 className="header2">MEET THE TEAM</h2>
        <p className="subtitle2">
          Hello! My name is Michael OuYang, and I am an 18 year old from Upstate
          NY studying Public Health at Brown! I started this page in the beginning
          of 2022 to destigmatize mental illness, and I sell products to help
          remind people they are not alone.
        </p>
        <img src="https://via.placeholder.com/500" alt="Michael (?)" />
      </div>

      <div className="on-campus-background">
        <div className="on-campus">
          <h2 className="header2">ON CAMPUS</h2>
          <div className="above-image">
            <p className="subtitle2">
              Lorem ipsum dolor sit amet, sonsectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <a href="#" className="button more-info">MORE INFO</a>
          </div>
          <img src="https://via.placeholder.com/500" alt="on campus (?)" />
        </div>
      </div>

      <div className="in-the-press">
        <h2 className="header2">IN THE PRESS</h2>
        <div className="article-scroller">
          <a href="#"
            ><img src="https://via.placeholder.com/300" alt="Article 1" />
            <div className="captions">
              <span className="caption1">BROWN DAILY HERALD </span>
              <span className="caption2"
                >Lorem ipsum dolor sit amet, sonsectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </span>
            </div>
          </a>
          <a href="#"
            ><img src="https://via.placeholder.com/300" alt="Article 2" />
            <div className="captions">
              <span className="caption1">BROWN DAILY HERALD </span>
              <span className="caption2"
                >Lorem ipsum dolor sit amet, sonsectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </span>
            </div>
          </a>
          <a href="#"
            ><img src="https://via.placeholder.com/300" alt="Article 3" />
            <div className="captions">
              <span className="caption1">BROWN DAILY HERALD </span>
              <span className="caption2"
                >Lorem ipsum dolor sit amet, sonsectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </span>
            </div>
          </a>
        </div>
      </div>

      <div className="newsletter">
        <h3 className="header3">NEWSLETTER</h3>
        <a href="#" className="button subscribe">SUBSCRIBE</a>
        <p className="subtitle3">
          The Mission of No Empty Seats, Inc. is to break the stigma behind mental
          illness and encourage showing unconditional love to friends and family.
          We invest in nationally-recognized suicide prevention charities and
          share stories revealing the unspoken prevalence of depression and
          anxiety. Our goal is to emphasize the tragic effects of suicide, with
          partnered initiatives and projects spreading genuine compassion and acts
          of kindness.
        </p>
      </div>
    </>
  );
}


export default App;


// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">app/page.js</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Explore starter templates for Next.js.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }
