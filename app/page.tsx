import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          1.	From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each.
Most favorite
•	Manage a Support team – I have been doing this for a while and love working with technical people to improve their skills and deliver exceptional support. Working with engineers to understand what they are looking for to grow their careers and help them move on to their next big thing, within the company. (I like to think of support as the incubator for a companys future superstars.)
•	Analyze hundreds of support tickets to spot trends the product team can use – Diving in and analyzing patterns in cases to find the changes that can improve the customer experience and reduce case volume can be very rewarding. It also reduces case volumes, improved customer satisfaction and gives more time for support to resolve other issues. 
•	Scheduling time-off coverage and collaborating as part of a growing cohesive support team. This was one of the projects that I implemented at Splunk resulting in greater customer satisfaction and employee morale. 
•	Find and recruit teammates for the support team – I like to think of this as my superpower. Finding the right person for a support role who will grow into the role and get so much more out of the job that just a pay check. They get to learn new skills and the company gets a future superstar. 
•	Run ticket review sessions to make sure tone is consistent – Whilst not particularly fun, I see this as a very necessary part of the role. Reviewing support cases allows me to find coaching opportunities with support engineers as well as intervene in cases where things are starting to go sideways. It is also the best way to learn what is going on with the product and how customers are using it. 
Least Favorite
For my least favorite tasks, I have a similar answer for all of them. My current skills are focused on growing high performance support teams, process improvements and implementing tools to improve the customer and support engineer experience. The 5 tasks below require current, in-depth technical knowledge to do them well. It isnt so much that I dont enjoy these tasks, but rather than without the focus on current technical knowledge, I would not be quick or efficient at the tasks.  
1.	Respond to 50+ support requests via email every day. 
2.	Dig through logs to troubleshoot a customers broken project
3.	Work with the product team to develop a new feature based on feedback from customers
4.	Engage multiple users at once in a public discussion, to answer their questions and troubleshoot problems
5.	Identify, file (and, where possible, resolve) bugs in private and public Vercel Next.js repos on GitHub
2.	What do you want to learn or do more of at work?
•	Implementing new technology to improve the customer and support engineer experience. For example, implementing Artificial Intelligence to review case communication, identify cases needing intervention earlier and easier than random case sampling by a manager. Once this use case was well implemented, look at ways to extend into assisting with resolving cases. 
3.	Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?
•	Analyzing the customer satisfaction (CSAT) data it was clear that the quality of support delivered using the on-call model over the weekends was not satisfactory. Working with senior management, HR and Finance I came up with a new staffing model that has Support Engineers covering 24x7, eliminating the weekend on-call model. We were worried that engineers would not want to work non-traditional Monday to Friday shifts so incentives were added resulting in more volunteers that we could accept for the new shifts. The new staffing model resulted in weekend CSAT improving above that of M-F CSAT. Additionally, employee satisfaction improved as a result of being better supported by a team on weekends, and no engineer working 5 days and then having to be on-call. All engineers now worked only 5 days in a week with no on-call duties needed.  
4.	When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?
•	Im unfamiliar with these technologies. I would have to Google them, understand their use cases and choose between them based on the merits, time to implement, and the goal I was trying to achieve.
5.	Imagine a customer writes in requesting help with a build issue on a framework or technology that youve not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better?
•	Id first work with the customer to understand the big picture of what they are trying to do. There is always the possibility they are way down a rabbit hole trying to do something that can be achieved a different way. After understanding the big picture, Id work with the customer to understand what they are seeing, and what they were expecting to see. At the same time, collect log files and any other information that might be useful to investigate. Perhaps capture a screen recording. Best to go to the well for water just the once rather than having to go back multiple times as the investigation continues. Id then set expectations with the customer on how long it would take to go over the information provided and when I can call them back with an update.
6.	The customer from question 5 replies to your response with the below:
Im so frustrated. Ive been trying to make this work for hours and I just cant figure it out. It must be a platform issue so just fix it for me instead of asking me questions.
Dear Mr Customer,
I appreciate we are frustrated with this issue. I too would be frustrated having spent so long working on it without progress. I assume you that Vercel takes the resolution of this issue very seriously and I am here to work with you till it is resolved to your satisfaction.
We have setup an internal reproduction to help engineering identify and fix the issue. As it stands, we have not been able to recreate the issue described, and as such we believe this has to do with the specifics of your project build. For us to fix the issue, we will need more information. If we can send us the requested files, or better yet provide a time we can do a zoom session to live troubleshoot and collect logs, we can then work on a fix. 
Would you be willing to work with us in such a fashion? 
Vaughan Sheridan
Vercel Technical Support
Please write a follow-up reply to the customer.
1.	A customer writes in to the Helpdesk asking How do I do a redirect from the /blog path to https://example.com? Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.
1.	Im unfamiliar with this. I would start by searching the docs, perhaps googling it and go from there.
2.	A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.
1.	Im unfamiliar with this. I would start by searching the docs, perhaps googling it and go from there.
3.	What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?
1.	Short term, a good knowledgebase article or video. Longer term, I would work with Product Management to improve the usability of the product so this was no longer an issue in the first place.  For a specific enhancement, and maybe this was just my unfamiliarity with SCM and Git, but I struggled to see how to re-deploy after committing and pushing changes from Git. I was expecting a big button and didnt see one. 
4.	How could we improve or alter this familiarisation exercise? 
1.	Ultimately, the best way to do this is to evolve the product so some tasks become unnecessary or at least much simpler. Support, as we work with the customer and see what issues are being encountered is a key part of this and can provide feedback to Products and engineering on what are the friction points within the product. 

&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth info about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
