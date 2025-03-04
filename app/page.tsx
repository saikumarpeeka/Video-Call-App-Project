import Image from "next/image";
import CreateMeeting from "./components/CreateMeeting";
import JoinMeeting from "./components/JoinMeeting";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white h-screen">
  <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex flex-col md:flex-row gap-20 items-center justify-between">
    <div>
      <div className="mb-10">
        <h1 className="text-4xl mb-2">
          Video calls and meetings for{" "}
          <span className="text-amber-500 font-medium">everyone.</span>
        </h1>
        <p>Join meetings with simple code and share your screen with others.</p>
      </div>
      <div>
        <CreateMeeting />
        <JoinMeeting/>
      </div>
    </div>
    <Image src="/video-call.svg" alt="Video call" width={600} height={600}/>
  </div>
</div>

  );
}
