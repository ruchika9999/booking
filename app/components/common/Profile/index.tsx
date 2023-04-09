import Image from "next/image";

const Profile = () => {
  return (
    <Image
      src="/images/placeholder.jpg"
      alt="profile image"
      width="30"
      height="30"
      className="rounded-full"
    />
  );
};

export default Profile;
