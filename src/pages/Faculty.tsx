import MeetOurTeam from "../components/faculty-staff/MeetOurTeam";
import Team from "../components/faculty-staff/Team";
import Join from "../components/faculty-staff/Join";

function Faculty() {
  return (
    <div className="w-full min-h-screen bg-[#FAF7F2]">
      <MeetOurTeam />
      <Team />
      <Join />
    </div>
  );
}

export default Faculty;
