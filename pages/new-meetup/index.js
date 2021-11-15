import { useRouter } from "next/router";
import MeetupForm from "../../components/meetups/MeetupForm";

function NewMeetupPage() {
  const router = useRouter();

  const addMeetupHandler = async (meetupData) => {
    // console.log(data);
    const resp = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await resp.json();

    // console.log(data);
    router.replace("/");
  };

  return <MeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
