import { ReactNode } from "react";

//Generic Kullanımı

interface ListProps<T> {
    items: T[]
    render: (item: T) => ReactNode //fonksiyon girdileri generic türünde çıktısı neredeyse hersey olabilir (ReactNode)
}

export const List = <T,>({ items, render }: ListProps<T>) => {
    return (
        <ul>
            {items.map((item, i) => (
                <li key={i}>
                    {render(item)}
                </li>
            ))}

        </ul>

    )
}
