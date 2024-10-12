
//Section 3: Adding styles
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

export default function AdminPanel() {
    return (
        <>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize,
                    border: "2px solid #111",
                    borderRadius:"50%"
                }}
            />
            <h3>{user.name}</h3>
        </>
    );
}