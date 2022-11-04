export default function Error({error, message}) {
    const css = {"backgroundColor": "darksalmon"}

    return <div style={css}>
        <h1>{error}</h1>
        <p>{message}</p>
    </div>
}
