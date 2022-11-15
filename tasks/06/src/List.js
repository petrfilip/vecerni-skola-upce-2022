export default function List({data, component}) {
    return data.map((item) => component(item));
}