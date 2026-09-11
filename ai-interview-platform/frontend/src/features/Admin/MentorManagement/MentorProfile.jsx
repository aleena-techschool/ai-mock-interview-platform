export default function MentorProfile({ mentor }) {
  return (
    <div className="m-6 rounded-2xl border border-slate-200 bg-white px-10 py-8">
      <div className="flex items-center gap-10">

        {/* Profile Section */}
        <div className="flex w-[240px] flex-col items-center text-center">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="h-28 w-28 rounded-full border-2 border-green-500 object-cover"
          />

          <h2 className="mt-4 text-xl font-bold text-slate-800">
            {mentor.name}
          </h2>


          <span className="mt-4 rounded-full bg-green-50 px-4 py-1 text-xs font-medium text-green-600">
            {mentor.status}
          </span>
        </div>

        {/* Divider */}
        <div className="h-40 w-px bg-slate-200" />

        {/* Details Section */}
        <div className="grid flex-1 grid-cols-3 gap-x-16 gap-y-7">

          <ProfileItem
            label="PHONE"
            value={mentor.phoneNumber}
          />

          <ProfileItem
            label="EMAIL"
            value={mentor.email}
          />

          <ProfileItem
            label="JOINING DATE"
            value={mentor.joiningDate}
          />

         
          <ProfileItem
            label="DESIGNATION"
            value={mentor.designation}
          />
          

          <ProfileItem
            label="PREFERRED COURSE"
            value={mentor.preferredCourse}
          />

           <ProfileItem
            label="STATUS"
            value={mentor.status}
          />

        </div>
      </div>
    </div>
  );
}


/* Reusable detail item */
function ProfileItem({ label, value }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold tracking-wide text-slate-500">
        {label}
      </p>

      <p className="text-sm font-medium text-slate-800">
        {value || "-"}
      </p>
    </div>
  );
}