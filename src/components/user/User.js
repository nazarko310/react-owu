export default function User({item: {title, body}}) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}