import useProfileStorage from "../../storage/ProfileStorage";

export default function Bio() {
  const { isEditMode, userDataBio, bioInputData, setInputData } =
    useProfileStorage();

  return isEditMode ? (
    <form className="rounded-lg shadow-lg w-full sm:max-w-xl">
      <label htmlFor="bio" className="block text-xl sm:text-lg text-text mb-2">
        Bio
      </label>
      <textarea
        id="bio"
        rows={3}
        onChange={(e) => setInputData(e.target.value, "bioInputData")}
        value={bioInputData ? bioInputData : ""}
        className="w-full p-2 rounded min-h-[50px] border border-secondary text-lg sm:text-base h-fit max-h-[150px] bg-background text-text"
        placeholder="Tell us your story"
      ></textarea>
    </form>
  ) : (
    <div className="rounded-lg shadow-lg w-full sm:max-w-xl">
      <h3 className="block text-xl sm:text-lg text-text mb-2">Bio</h3>
      <div
        className={`w-full p-2 rounded min-h-[50px] border border-secondary
         text-lg sm:text-base h-fit max-h-[150px] bg-background text-text`}
      >
        {userDataBio}
      </div>
    </div>
  );
}
