import Join from "../components/admission/join";
import Application from "../components/admission/Application";
import Enrollmnt from "../components/admission/Enrollmnt";
import Investment from "../components/admission/Investment";
import FAQ from "../components/admission/FAQ";

export default function Admissions() {
  return (
    <div className="w-full min-h-screen bg-[#FAF7F2]">
      {/* 1. Join / Intro Section */}
      <Join />

      {/* 3. Enrollment Steps Section */}
      <Enrollmnt />

      {/* 2. Application Process Section */}
      <Application />

      {/* 4. Tuition / Investment Section */}
      <Investment />

      {/* 5. Admissions FAQ Section */}
      <FAQ />
    </div>
  );
}
