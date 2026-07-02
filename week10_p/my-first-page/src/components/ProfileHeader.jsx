function ProfileHeader({ profile }) {
  return (
    <header className="profile-header">
      <img
        src={profile.imageUrl}
        alt={profile.name}
        className="profile-img"
      />
      <div>
        <h1>{profile.name}</h1>
        <p className="job">{profile.job}</p>
      </div>
    </header>
  );
}

export default ProfileHeader;