import HomeBanner from "@/components/layout/HomeBanner";

export default async function Home() {

  return (
    <main className="home_page">
      <HomeBanner />

      <div className="mission_vision_section" >
        <div className="count_section" >
          count
        </div>
        {/* <div className="mission_visions" >
          <div className="mission_vision" >
            <h2>Vision</h2>
            <p>The foundation's vision is for "A vibrant, excellent and peaceful Society". It aims to "mould a generation respecting human values and traditions with progressive attitude, to the challenges of life so they can contribute a lot to build a developed nation".</p>
          </div>
          <div className="mission_vision" >
            <h2>Mission</h2>
            <p>The mission is the "Establishment of educational institutions throughout the nation to achieve the vision". The goal is to bring children "who are ruined and introverted even with grand abilities, to schools and nurture them as a great wealth for the society and country".</p>
          </div>
        </div> */}
        <div className="mission_visions">
          <div className="mission_vision">
            <h2>Vision</h2>
            <p>
              The foundation&apos;s vision is for &quot;A vibrant, excellent and peaceful
              Society&quot;. It aims to &quot;mould a generation respecting human values and
              traditions with progressive attitude, to the challenges of life so they can
              contribute a lot to build a developed nation&quot;.
            </p>
          </div>
          <div className="mission_vision">
            <h2>Mission</h2>
            <p>
              The mission is the &quot;Establishment of educational institutions throughout
              the nation to achieve the vision&quot;. The goal is to bring children &quot;who are
              ruined and introverted even with grand abilities, to schools and nurture them
              as a great wealth for the society and country&quot;.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}


// import { fetchPosts } from "../../lib/api";

// export default async function Home() {
//   const posts = await fetchPosts();

//   return (
//     <main className="container mx-auto py-10">
//       <h1 className="text-3xl font-bold">Latest Posts</h1>
//       <ul className="mt-6 space-y-4">
//         {posts.map((post: any) => (
//           <li key={post.id} className="p-4 bg-gray-100 rounded-lg shadow">
//             {post.title}
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }
